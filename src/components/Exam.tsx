import { Box, Button, FormControl, FormLabel, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from './Navbar'
import test1 from './Test1'
// import { Formik, Field, Form } from 'formik';

function Exam() {

//    const question = {Q: 'What year did Nigeria gain Independence', A:['1999', '1960', '1977', '2022']}
//    const options = question.A.map((item) => {
//     return <h4>{item}</h4>
//    })

    const [radVal, setRadVal] = useState('')
    const [answer, setAnswer] = useState(0)

    function result() {
        if (radVal === '1') {
            setAnswer(answer + 1)
            console.log(answer)
            window.alert(`Correct, Your score is ${answer}`)
        } else {
            window.alert('Incorrect answer')
        } 
        

    }
  return (
    <>
        <Navbar />
        <Box display='flex'>   
            <Box w='10%'/>
            <Box w='80%' marginTop={10}>
            <FormControl>
                <form>
                        {test1.map((item, i) => (
                    <Stack mb={4}>
                        <Box borderWidth='2px' borderRadius='lg' mb={5}>
                            <Box p={1} fontStyle='italic' fontFamily='ultra' fontSize={20} color='lightblue'>Q{item.index}</Box>
                            <Box p={5}>

                                <FormLabel>{item.question}</FormLabel>
                                <RadioGroup onChange={setRadVal}>
                                    <Stack direction='column' marginBottom={4}>
                                        <Radio value={item.option1.val} name={item.index}>{item.option1.text}</Radio>
                                        <Radio value={item.option2.val} name={item.index}>{item.option2.text}</Radio>
                                        <Radio value={item.option3.val} name={item.index}>{item.option3.text}</Radio>
                                        <Radio value={item.option4.val} name={item.index}>{item.option4.text}</Radio>
                                    </Stack>
                                </RadioGroup>
                            </Box>
                        </Box>
                    </Stack>
                        ))}
                    <Button onClick={result} color='white' variant='solid' bg='lightblue'>SUBMIT</Button>
                    {JSON.stringify(answer)}
                </form>
            </FormControl>
    {/* <Formik
      initialValues={{
        picked: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <div id="my-radio-group">Picked</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="One" />
              One
            </label>
            <label>
              <Field type="radio" name="picked" value="Two" />
              Two
            </label>
            <div>Picked: {values.picked}</div>
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik> */}
            </Box>
            <Box w='10%'/>
        </Box>
    </>
  )
}

export default Exam