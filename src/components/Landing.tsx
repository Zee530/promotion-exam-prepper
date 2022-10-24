import { Box, Center, Image, Button,  FormControl, FormLabel, Input } from '@chakra-ui/react'
import logo from './img/main_cover.jpg'


function Landing() {
  return (
    <Box display='flex'>
        <Box w='65%'>
            <Image src={logo} alt='main' height='100vh'/>
        </Box>
        <Box w='35%' bg='lightblue'>
           <Center mt={4} fontWeight='bolder' color='white' fontSize={28}>
                PROMOTION EXAM PREPPER
            </Center>
            <Center>
                <FormControl>
                    <FormLabel>Full Name</FormLabel>
                    <Input type='text'/>
                </FormControl>
            </Center> 
        </Box>
    </Box>
  )
}

export default Landing