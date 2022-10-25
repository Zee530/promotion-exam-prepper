import { Box, Center, Image, Button,  FormControl, FormLabel, Input, NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Select, Stack, InputGroup,InputLeftAddon } from '@chakra-ui/react'
import logo from './img/main_cover.jpg'


function Landing() {
  return (
    <Box display='flex'>
        <Box w='60%'>
            <Image src={logo} alt='main' height='100vh'/>
        </Box>
        <Box w='40%' bg='lightblue'>
           <Center mt={4} mb={4} fontWeight='bolder' color='white' fontSize={28}>
                PROMOTION EXAM PREPPER
            </Center>
            <Center>
                <FormControl p={3}>
                    <Stack spacing={3}>
                        <FormLabel color='white'>Staff ID</FormLabel>
                        <InputGroup>
                        <InputLeftAddon children='Aa/'/>
                            <Input type='number' bg='white'/>
                        </InputGroup>

                    <FormLabel color='white'>First Name</FormLabel>
                    <Input type='text' bg='white'/>

                    <FormLabel color='white'>Last Name</FormLabel>
                    <Input type='text' bg='white'/>

                    <FormLabel color='white'>Department</FormLabel>
                    <Select placeholder='Select option' bg='white'>
                        <option value='aprd'>APRD</option>
                        <option value='audit'>Audit</option>
                        <option value='claims'>Claims and Compensation</option>
                        <option value='corporate'>Corporate Affairs</option>
                        <option value='enforcement'>Enforcement</option>
                        <option value='finance'>Finance</option>
                        <option value='admin'>General Admin & Services</option>
                        <option value='hse'>HSE</option>
                        <option value='ict'>ICT</option>
                        <option value='informal'>Informal</option>
                        <option value='inspection'>Inspection</option>
                        <option value='legal'>Legal</option>
                        <option value='servicom'>Servicom</option>
                    </Select>

                    <FormLabel color='white'>Rank</FormLabel>
                    <Select placeholder='Select option' bg='white'>
                        <option value={9}>General Manager</option>
                        <option value={8}>Deputy General Manager</option>
                        <option value={7}>Assistant General Manager</option>
                        <option value={6}>Principal Manager</option>
                        <option value={5}>Senior Manager</option>
                        <option value={4}>Manager</option>
                        <option value={3}>Deputy Manager</option>
                        <option value={2}>Assistant Manager</option>
                        <option value={1}>Officer 1</option>
                        <option value={0}>Officer 2</option>
                    </Select>

                    <FormLabel color='white'>Phone Number</FormLabel>
                        <InputGroup>
                        <InputLeftAddon children='+234' />
                        <Input type='tel' bg='white' />
                        </InputGroup>
                    </Stack>
                    <Center>
                        <Button color='lightblue' variant='solid' bg='white' mt={10} width={60} height={50}>
                            START
                        </Button>
                    </Center>
                </FormControl>
            </Center> 
        </Box>
    </Box>
  )
}

export default Landing