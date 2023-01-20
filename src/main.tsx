import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {ChakraProvider, color } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
  fonts: {
    heading: `Gravity Bold,Helvetica Neue,Helvetica,Arial,sans-serif, Bebas Neue`,
    body : `Gravity Regular,Helvetica Neue,Helvetica,Arial,sans-serif,Bebas Neue`
  }

})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
