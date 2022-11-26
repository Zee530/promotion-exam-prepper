import { Box, Center, Image, Button,  FormControl, FormLabel, Input,
    Select, Stack, InputGroup,InputLeftAddon, ResponsiveValue } from '@chakra-ui/react'
import { useFormik } from 'formik';
 import * as Yup from 'yup';
import { string } from 'yup/lib/locale';
import logo from './img/main_cover.jpg'
import { useNavigate } from 'react-router-dom'


function Landing() {
    let navigate = useNavigate()
    const phoneRegExp = /[0-9]{10}/
    const register = useFormik({
        initialValues: {
            staffid: '',
            firstName: '',
            lastName: '',
            department: '',
            rank: '',
            phone:''
        },
        validationSchema: Yup.object({
            staffid: Yup.string()
                .min(4, 'Staff ID requires 5 characters')
                .max(5, 'Staff ID requires 5 characters')
                .required('Required'),
            firstName: Yup.string()
                .required('Required'),
            lastName: Yup.string()
                .required('Required'),
            department: Yup.string()
                .oneOf(['aprd','audit','claims','corporate','enforcement','finance','admin',
                        'hse','ict','informal','inspection','legal','servicom'])
                .required('Required'),
            rank: Yup.string()
                .oneOf(['Officer 1','Assistant Manager','Deputy Manager','Manager','Senior Manager',
                'Principal Manager','Assistant General Manager','Deputy General Manager','General Manager','MD/CEO'])
                .required('Required'),
            phone: Yup.string().matches(phoneRegExp, 'Enter a valid phone number')
                .min(10, 'must be 10 digits')
                .max(10, 'must be 10 digits')
                .required('Required')
        }),
        onSubmit: values => {
        //   alert(JSON.stringify(values, null, 2));
        // console.log(values)
        navigate('exam')
        sessionStorage.setItem('Staff ID', values.staffid)
        sessionStorage.setItem('Firstname', values.firstName)
        sessionStorage.setItem('Lastname', values.lastName)
        sessionStorage.setItem('Department', values.department)
        sessionStorage.setItem('Rank', values.rank)
        sessionStorage.setItem('Phone', values.phone)
        },
      });

    //   const heightControl = ():any => {
    //     let newHeight: any
    //     if (register.errors) {
    //          newHeight = '120vh'}
    //         else {
    //             newHeight = '100vh'
    //         }
    //     return newHeight
        
    

  return (
    <Box display={['block', 'block', 'flex']}>
        <Box w={['100%', '100%','60%']} display={['none', 'none','flex']}>
            <Image src={logo} alt='main' height='120vh'/>
        </Box>
        <Box w={['100%', '100%', '40%']} bg='lightblue' height='120vh'>
           <Center p={4} mb={4} fontFamily='ultra' color='white' fontSize={{base:'20px', sm:'20px', md:'28px'}} textAlign='center'>
                PROMOTION EXAM PREPPER
            </Center>
            <Center>
                <FormControl p={3} w='90%'>
                <form onSubmit={register.handleSubmit}>
                    <Stack spacing={3}>
                        <FormLabel color='white'>Staff ID</FormLabel>
                        <InputGroup>
                        <InputLeftAddon children='Aa/'/>
                            <Input id='staffid' type='number' bg='white' {...register.getFieldProps('staffid')}/>
                        </InputGroup>
                        {register.touched.staffid && register.errors.staffid ? (
                            <Box display='flex' alignItems='baseline' color='red' fontStyle='italic' fontSize={12}>{register.errors.staffid}</Box>
                        ) : null}

                    <FormLabel color='white'>First Name</FormLabel>
                    <Input id='firstName' type='text' bg='white' {...register.getFieldProps('firstName')}/>
                    {register.touched.firstName && register.errors.firstName ? (
                            <Box color='red' fontStyle='italic' fontSize={12}>{register.errors.firstName}</Box>
                        ) : null}

                    <FormLabel color='white'>Last Name</FormLabel>
                    <Input id='lastName' type='text' bg='white' {...register.getFieldProps('lastName')}/>
                    {register.touched.lastName && register.errors.lastName ? (
                            <Box color='red' fontStyle='italic' fontSize={12}>{register.errors.lastName}</Box>
                        ) : null}

                    <FormLabel color='white'>Department</FormLabel>
                    <Select id='department' placeholder='Select option' bg='white' {...register.getFieldProps('department')}>
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
                    {register.touched.department && register.errors.department ? (
                            <Box color='red' fontStyle='italic' fontSize={12}>{register.errors.department}</Box>
                        ) : null}

                    <FormLabel color='white'>Rank</FormLabel>
                    <Select id='rank' placeholder='Select option' bg='white' {...register.getFieldProps('rank')}>
                        <option value='MD/CEO'>General Manager</option>
                        <option value='General Manager'>Deputy General Manager</option>
                        <option value='Deputy General Manager'>Assistant General Manager</option>
                        <option value='Assistant General Manager'>Principal Manager</option>
                        <option value='Principal Manager'>Senior Manager</option>
                        <option value='Senior Manager'>Manager</option>
                        <option value='Manager'>Deputy Manager</option>
                        <option value='Deputy Manager'>Assistant Manager</option>
                        <option value='Assistant Manager'>Officer 1</option>
                        <option value='Officer 1'>Officer 2</option>
                    </Select>
                    {register.touched.rank && register.errors.rank ? (
                            <Box color='red' fontStyle='italic' fontSize={12}>{register.errors.rank}</Box>
                        ) : null}

                    <FormLabel color='white'>Phone Number</FormLabel>
                        <InputGroup>
                        <InputLeftAddon children='+234' />
                        <Input type='tel' bg='white' id='phone' {...register.getFieldProps('phone')} />
                        </InputGroup>
                        {register.touched.phone && register.errors.phone ? (
                            <Box color='red' fontStyle='italic' fontSize={12}>{register.errors.phone}</Box>
                        ) : null}
                    </Stack>
                    <Center>
                        {/* <Link to='/exam'> */}
                            <Button type='submit' color='lightblue' variant='solid' bg='white' mt={10} width={60} height={50}>
                                START
                            </Button>
                        {/* </Link> */}
                    </Center>
                    </form>
                </FormControl>
            </Center> 
        </Box>
    </Box>
  )
}

export default Landing