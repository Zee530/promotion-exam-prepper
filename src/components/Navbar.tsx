import { Box, Img,Tooltip, Link, Center, useDisclosure, DrawerOverlay,  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton, } from '@chakra-ui/react'
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
import logo2 from './img/menu.svg'
import home from './img/home.svg'
import info from './img/info.svg'
import github from './img/github.svg'
import { Link as router} from 'react-router-dom'
import React, { useRef } from 'react'

function Navbar() {

  const {isOpen, onOpen, onClose} = useDisclosure()
  const btnRef: any = useRef()

  return (
    <Box bg='lightblue' w='100%' color='black' p={4} display='flex'>
      <Box w={['100%', '100%', '80%']} display='flex'>
        <Image src={logo} alt='logo_1' ml={['2','2','12']} mt={['3','3']} width={10} height={10} display={['none','none','flex']}/>
        <Center pl={5} mt={1} fontSize={20} fontFamily='ultra' textAlign='center'>PROMOTOTION EXAM PREPPER</Center>
        <Button display={['flex','flex','none']} bg='inherit' mt={3} ref={btnRef} onClick={onOpen}>
          <Image src={logo2} alt='menu' display={['flex','flex','none']}/>
        </Button>
        <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
          <DrawerOverlay />
          <DrawerContent bg='lightblue'>
            <DrawerCloseButton/>
            <DrawerHeader/>
            <DrawerBody>
            {/* <Box w='100%'> */}
              <List display='block'>
                <Link as={router} to='/'><Tooltip  hasArrow label='Home'><ListItem borderBottom='2px solid black'><Button bg='inherit' mb={3}><Img src={home} alt='github' boxSize={8} mr={3}/>HOME</Button></ListItem></Tooltip></Link>
                {/* <Tooltip hasArrow label='About Us'><ListItem><Button bg='inherit'><Img src={info} alt='github' boxSize={8}/></Button></ListItem></Tooltip> */}
                <Link href='https://github.com/Zee530/promotion-exam-prepper' isExternal><Tooltip hasArrow label='Project'><ListItem borderBottom='2px solid black'><Button bg='inherit' mb={3} mt={3}><Img src={github} alt='github' boxSize={8} mr={3}/>PROJECT</Button></ListItem></Tooltip></Link>
              </List>
            {/* </Box> */}
            </DrawerBody>
            <DrawerFooter>
              <Center>(c) 2022. All Rights Reserved</Center>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
      <Box w={['0%','0%','20%']} display={['none','none','flex']}>
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