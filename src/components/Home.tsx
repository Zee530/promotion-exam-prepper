import { Box, Image, Center, Button } from '@chakra-ui/react'
import logo from './img/main_cover.jpg'


function Home() {
  return (
    <Box w='100%' display='flex' mt={35}>
        <Box w='10%'/>
        <Box w='80%'>
            <Center display='block'>
                <Image src={logo} alt='main_cover' height={500} width={1500}/>
                <Center>
                    <Button color='white' variant='solid' bg='#066204' mt={10} width={60} height={50}>
                        START
                    </Button>
                </Center>
            </Center>
        </Box>
        <Box w='10%'/>
    </Box>
  )
}

export default Home