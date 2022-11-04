import { Box, Image, Center, Button } from '@chakra-ui/react'
import logo from './img/main_cover.jpg'
import Navbar from './Navbar'


function Home() {
  return (
    <>
      <Navbar />
      <Box display='flex'>
        <Box w='10%'/>
        <Box w='80%'>
            <h2>NOTHING HERE YET!!</h2>
        </Box>
        <Box w='10%'/>
      </Box>
    </>
  )
}

export default Home