import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Landing from './components/Landing';
import Exam from './components/Exam';
import '@fontsource/ultra'
import theme from './components/Theme';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/exam' element={<Exam />}/>
      </Routes>
    </ChakraProvider>
  )
}

export default App;

