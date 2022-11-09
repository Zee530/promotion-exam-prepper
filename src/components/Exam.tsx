import { Alert, Box, Button, FormControl, FormLabel, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from './Navbar'
import test1 from './Test1'

// interface Arrtype {
//   radVal: string[],
//   score: number
// }

function Exam() {
    // const [radVal, setRadVal] = useState([''])
    const [radVal, setRadVal] = useState('')
    const [score, setScore] = useState<number>(0)

    function result(e:any) {
      e.preventDefault()
      for (let i = 0; i < test1.length; i++) {
        if (radVal === test1[i].correct) {
          alert('Correct answer')
          setScore(score + 1)
        } else {
          alert('Wrong answer')
        }
        console.log(radVal)
        console.log(test1[i].correct)
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
                                        {item.options.map((item) => (
                                <RadioGroup onChange={setRadVal}>
                                    <Stack direction='column' marginBottom={4}>
                                            <Radio value={item}>{item}</Radio>
                                    </Stack>
                                </RadioGroup>
                                         ))} 
                            </Box>
                        </Box>
                    </Stack>
                        ))}
                    <Button type='submit' color='white' variant='solid' bg='lightblue'>SUBMIT</Button>
                    {/* {JSON.stringify(answer)} */}
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