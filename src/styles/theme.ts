export default {
  font: {
    family: "'Open Sans', 'Helvetica Neue', sans-serif",
    regular: 400,
    medium: 500,
    semiBold: 600,
    sizes: {
      xsmall: '12px',
      small: '14px',
      medium: '16px',
      large: '20px',
      xlarge: '24px',
      xxlarge: '32px',
      huge: '40px'
    }
  },
  colors: {
    base: '#2F2E41',
    blue: '#3F3D56',
    buttonBlue: '#009EDD',
    buttonGreen: '#039B00',
    grey: '#999999',
    grey2: '#D9D9D9',
    textMovie: '#333333',
    white: '#FFFFFF'
  },
  spacings: {
    xxsmall: '4px',
    xsmall: '8px',
    small: '12px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
    xxlarge: '40px',
    xxxlarge: '48px',
    mega: '64px'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
