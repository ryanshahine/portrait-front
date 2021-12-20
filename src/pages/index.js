/* eslint-disable no-console */
import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import { Editor, Frame, Element } from '@craftjs/core'
import { ethers } from 'ethers'

import toast, { Toaster } from 'react-hot-toast'

// Helpers and custom hooks
import useWindowSize from '@/helpers/hooks/useWindowSize'
import { savePageData, loadPageData, submitSite, getAccessToken, login } from '@/helpers/editor'
import { digestToHex, cleanHtml } from '@/utils'

import Modal from '@/components/shared/organisms/Modal'

import Sidebar from '@/components/editor/Sidebar'
import Toolbox from '@/components/editor/Toolbox'
import Header from '@/components/editor/Header'
import RenderNode from '@/components/editor/RenderNode'
import UserSite from '@/components/editor/UserSite'

// User components
import Text from '@/components/user/Tailwind/Elements/Text'
import Image from '@/components/user/Tailwind/Elements/Image'
import UserButton from '@/components/user/Tailwind/Elements/Button'
import SimpleNavbar from '@/components/user/Tailwind/Navbars/Simple'
import HeaderSimple from '@/components/user/Tailwind/Headers/HeaderSimple'
import FeatureWithSideImage from '@/components/user/Tailwind/Features/FeatureWithSideImage'
import FooterSocialOnly from '@/components/user/Tailwind/Footers/SocialOnly'
import SmallBannerFullWidthBgPrimary from '@/components/user/Tailwind/Banners/SmallBannerFullWidthBgPrimary'
import LeftTextRightCTA from '@/components/user/Tailwind/CTAs/LeftTextRightCTA'
import TeamCardsWithAvatars from '@/components/user/Tailwind/Teams/TeamCardsWithAvatars'
import TestimonialSingle from '@/components/user/Tailwind/Testimonials/TestimonialSingle'

export default function Home() {
  // Wrapper around iframe
  const userSiteWrapperRef = useRef(null)
  // Iframe, contains user site
  const userSiteIframeRef = useRef(null)

  // Editor page data
  const [pageData, setPageData] = useState(null)

  // Hash of published site
  const [publishedHash, setPublishedHash] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { width: windowWidth } = useWindowSize()

  const defaultToastOptions = { position: 'bottom-right' }

  async function handleExport() {
    const hashHex = await digestToHex(`<body>${userSiteIframeRef.current.innerHTML}</body>`)
    console.log(userSiteIframeRef.current.innerHTML)
    return hashHex
  }

  // Load saved page data
  useEffect(() => {
    setPageData(loadPageData())
  }, [])

  /* Handling publish */

  // Detect if user is using Web3 browser
  async function detectWeb3Browser() {
    return typeof window.ethereum !== 'undefined'
  }

  async function connectAccount() {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      // Connected to MetaMask successfully
    } catch (error) {
      if (error.code === 4001) {
        toast.error('Please connect to MetaMask to login.', { ...defaultToastOptions })
      } else {
        console.error(error)
      }
    }
  }

  async function handlePublish() {
    try {
      const isWeb3Browser = await detectWeb3Browser()

      if (!isWeb3Browser) {
        toast.error('Please use a Web3 browsers or install the Metamask browser extension.', {
          ...defaultToastOptions
        })
        return
      }

      // A Web3Provider wraps a standard Web3 provider, which is
      // what Metamask injects as window.ethereum into each page
      const provider = new ethers.providers.Web3Provider(window.ethereum)

      // The Metamask plugin also allows signing transactions to
      // send ether and pay to change state within the blockchain.
      // For this, you need the account signer...
      const signer = provider.getSigner()

      // 1. Request account access if needed (connect to metamask)
      // 2. Sign message after connecting
      // 3. Validate signed message

      // Connect to metamask
      await connectAccount()

      const accounts = await provider.listAccounts()

      // Not connected (logged in) to MetaMask
      if (Array.isArray(accounts) && !accounts.length) {
        return
      }

      // Returns undefined or { data: {...} }
      const loginResponse = await login(accounts[0])

      if (!loginResponse) {
        // Network error
        toast.error('Network error, could not login.', {
          ...defaultToastOptions
        })
        return
      }
      if (loginResponse.status !== 200) {
        // Response not ok
        toast.error(loginResponse.message, {
          ...defaultToastOptions
        })
        return
      }

      // Response ok
      const { nonce } = loginResponse

      const signature = await signer.signMessage(nonce)

      if (!signature) {
        toast.error('Please sign the Metamask message to login.', {
          ...defaultToastOptions
        })
        return
      }

      const accessToken = await getAccessToken({
        nonce,
        publickey: accounts[0],
        signedmessage: signature
      })

      const exportedCode = await handleExport()
      const SubmitMessage = await signer.signMessage(exportedCode)

      // Remove unncessary code from user site
      const cleanedSite = cleanHtml(userSiteIframeRef.current).innerHTML

      const submitResponse = await submitSite({
        basebody: btoa(unescape(encodeURIComponent(`<body>${cleanedSite}</body>`))),
        publickey: accounts[0],
        accessToken: accessToken.accessToken,
        SubmitMessage,
        cidObject: {}
      })

      const { hash: publishedSiteHash } = submitResponse
      setPublishedHash(publishedSiteHash)
      setIsModalOpen(true)
    } catch (error) {
      // https://eips.ethereum.org/EIPS/eip-1193#provider-errors
      // https://eips.ethereum.org/EIPS/eip-1474#error-codes
      // Request rejected by the user
      if (error.code === 4001) {
        // Handle request rejection
      }
    }
  }

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Portrait</title>
        <meta name="description" content="Create your own website and publish it on Web3." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex overflow-hidden h-screen">
        <Editor
          resolver={{
            Text,
            UserButton,
            SimpleNavbar,
            HeaderSimple,
            FeatureWithSideImage,
            FooterSocialOnly,
            SmallBannerFullWidthBgPrimary,
            TeamCardsWithAvatars,
            TestimonialSingle,
            LeftTextRightCTA
          }}
          onRender={({ render }) => (
            <RenderNode
              render={render}
              container={userSiteWrapperRef.current}
              iframe={userSiteIframeRef.current}
            />
          )}
          onNodesChange={(query) => {
            savePageData(query)
          }}
        >
          <Sidebar />
          <div className="flex flex-col w-0 flex-1 overflow-hidden">
            <Header onPublish={handlePublish} handleExport={handleExport} />
            <main className="site-renderer relative flex flex-1 overflow-y-auto focus:outline-none">
              <UserSite wrapperRef={userSiteWrapperRef} iframeRef={userSiteIframeRef}>
                <Frame data={pageData}>
                  <Element is="div" canvas className="w-full h-full bg-white">
                    <SimpleNavbar />
                  </Element>
                </Frame>
              </UserSite>
              {/* Component related settings */}
              <Toolbox />
            </main>
          </div>
        </Editor>

        <Toaster />

        {publishedHash ? (
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            variant="success"
            title="Website published"
            body="Congratulations, you just published your website to IPFS. Click the button below to open it."
            button={{
              text: 'Open my website',
              onClick: () => window.open(`https://ipfs.infura.io/ipfs/${publishedHash}`, '_blank')
            }}
          />
        ) : null}

        {windowWidth < 1024 ? (
          <div className="fixed flex items-center justify-center w-screen h-screen text-white bg-gray-900 bg-opacity-95 p-6 z-10000">
            <div className="w-full max-w-md text-center">
              <h3 className="text-xl text-white mb-4 font-semibold">Your browser is too small</h3>
              <p className="text-white text-opacity-70">
                Please resize your browser to be at least 1024px wide to edit your website.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
