/* eslint-disable import/prefer-default-export */

export const buttons = {
  base: 'inline-flex items-center font-semibold rounded-md',
  variants: {
    primary: `
      text-white
      bg-blue-600
      border border-transparent
      shadow-sm
      hover:bg-blue-700
    `,
    secondary: `
      text-blue-700
      bg-blue-100
      border border-transparent
      hover:bg-blue-200
    `
  },
  sizes: {
    xs: 'px-2.5 h-6 text-xs',
    sm: 'px-3 h-8 text-xs',
    md: 'px-4 h-10 text-sm',
    lg: 'px-4 h-12 text-md',
    xl: 'px-6 h-14 text-lg'
  }
}
