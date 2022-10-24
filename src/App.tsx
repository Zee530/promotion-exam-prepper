import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Home />
    </ChakraProvider>
  )
}

export default App;

