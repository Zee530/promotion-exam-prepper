import { Box } from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Button
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import logo from './img/owl.png'

function Navbar() {
  return (
    <Box bg='lightblue' w='100%' color='white' p={4} display='flex'>
      <Box w='80%' display='flex'>
        <Image src={logo} alt='logo_1' ml={12} width={10} height={10}/>
        <Box pl={5} fontSize={20} fontWeight='bolder'>PROMOTOTION EXAM PREPPER</Box>
      </Box>
      <Box w='20%'>
        <List display='flex' justifyContent='space-evenly'>
          <ListItem><Button bg='inherit'>Home</Button></ListItem>
          <ListItem><Button bg='inherit'>About</Button></ListItem>
          <ListItem><Button bg='inherit'>GitHub</Button></ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Navbar