import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      colors: {
        primary: '#0c2840',
        lightblue: '#0c2840',
      },
      padding: {
        '2.25': '0.563rem',
      },
      maxWidth: {
        '75': '18.75rem',
      },
      fontFamily: {
        sans: ['SuisseIntl', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
