import { Box } from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import logo from './img/nav_logo.png'

function Navbar() {
  return (
    <Box bg='#066204' w='100%' color='white' p={4} display='flex'>
      <Box w='50%'>
        <Image src={logo} alt='logo_1' ml={12}/>
      </Box>
      <Box w='50%'>
        <List display='flex' justifyContent='space-evenly'>
          <ListItem>Home</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>Resources</ListItem>
          <ListItem>Media Center</ListItem>
          <ListItem>Contact Us</ListItem>
          <ListItem>FOI Portal</ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Navbar