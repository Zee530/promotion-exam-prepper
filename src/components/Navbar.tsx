import { Box, Img,Tooltip, Link } from '@chakra-ui/react'
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
import home from './img/home.svg'
import info from './img/info.svg'
import github from './img/github.svg'
import { Link as router} from 'react-router-dom'

function Navbar() {
  return (
    <Box bg='lightblue' w='100%' color='black' p={4} display='flex'>
      <Box w='80%' display='flex'>
        <Image src={logo} alt='logo_1' ml={12} width={10} height={10}/>
        <Box pl={5} mt={1} fontSize={20} fontFamily='ultra'>PROMOTOTION EXAM PREPPER</Box>
      </Box>
      <Box w='20%'>
        <List display='flex' justifyContent='flex-end'>
          <Link as={router} to='/'><Tooltip  hasArrow label='Home'><ListItem><Button bg='inherit'><Img src={home} alt='github' boxSize={8}/></Button></ListItem></Tooltip></Link>
          {/* <Tooltip hasArrow label='About Us'><ListItem><Button bg='inherit'><Img src={info} alt='github' boxSize={8}/></Button></ListItem></Tooltip> */}
          <Link href='https://github.com/Zee530/promotion-exam-prepper' isExternal><Tooltip hasArrow label='Project'><ListItem><Button bg='inherit'><Img src={github} alt='github' boxSize={8}/></Button></ListItem></Tooltip></Link>
        </List>
      </Box>
    </Box>
  )
}

export default Navbar