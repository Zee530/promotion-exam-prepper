import { Box, Button, FormControl, FormLabel, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from './Navbar'
import test1 from './Test1'

function Exam() {

//    const question = {Q: 'What year did Nigeria gain Independence', A:['1999', '1960', '1977', '2022']}
//    const options = question.A.map((item) => {
//     return <h4>{item}</h4>
//    })

    const [radVal, setRadVal] = useState('')

    function result() {
        if (radVal === '1') {
            window.alert('Congratulations, you have passed the Exam 🥳')
        } else {
            window.alert(`Unfortunately, that wasn't the correct answer but you can try again 😣`)
        }
    }
  return (
    <>
        <Navbar />
        <Box display='flex'>   
            <Box w='10%'/>
            <Box w='80%' marginTop={10}>
            <FormControl>
                <form onSubmit={result}>
                        {test1.map((item, i) => (
                    <Stack mb={4}>
                        <Box borderWidth='2px' borderRadius='lg' mb={5}>
                            <Box p={1} fontStyle='italic' fontFamily='ultra' fontSize={20} color='lightblue'>Q{item.index}</Box>
                            <Box p={5}>

                                <FormLabel>{item.question}</FormLabel>
                                <RadioGroup onChange={setRadVal} value={radVal}>
                                    <Stack direction='column' marginBottom={4}>
                                        <Radio value={item.option1.val}>{item.option1.text}</Radio>
                                        <Radio value={item.option2.val}>{item.option2.text}</Radio>
                                        <Radio value={item.option3.val}>{item.option3.text}</Radio>
                                        <Radio value={item.option4.val}>{item.option4.text}</Radio>
                                    </Stack>
                                </RadioGroup>
                            </Box>
                        </Box>
                    </Stack>
                        ))}
                    <Button type='submit' color='white' variant='solid' bg='lightblue'>SUBMIT</Button>
                </form>
            </FormControl>
            </Box>
            <Box w='10%'/>
        </Box>
    </>
  )
}

export default Exam