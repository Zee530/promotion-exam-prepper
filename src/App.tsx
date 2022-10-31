import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Landing from './components/Landing';
import Exam from './components/Exam';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Home />
      {/* <Landing /> */}
      <Exam />
    </ChakraProvider>
  )
}

export default App;

