import {extendTheme} from '@chakra-ui/react'

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
    primary: "green"
}

const fonts = {
    body: 'Fira Code, sans-serif',
}

export default extendTheme({colors, fonts})