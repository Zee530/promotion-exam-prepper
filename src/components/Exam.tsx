import { Alert, Box, Button, FormControl, FormLabel, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { string } from 'yup'
import { number } from 'yup/lib/locale'
import Navbar from './Navbar'
import test1 from './Test1'

// interface Arrtype {
//   radVal: string[],
//   score: number
// }

function Exam() {
    const [radVal, setRadVal] = useState<Array<string>>([])
    const [score, setScore] = useState<Number>(0)
    const [showScore, setShowScore] = useState<Boolean>(false)
    const radRef = useRef<any>()
    
    const handleChange = (value: string) => {
      setRadVal([...radVal, value])
      // radRef.current.isDisabled = true
    }

    let newScore: any = []

    function result() {
      // e.preventDefault()
      // setShowScore(true)
      radRef.current.isDisabled = true
      if (radVal) {
          for (let i = 0; i < test1.length; i++) {
            if (radVal[i] === test1[i].correct) {
              // alert('Correct answer')
              newScore.push(1)
            } else {
              // alert('Wrong answer')
            }
            // console.log(test1[i].correct)
            // console.log(radVal[i])
            // console.log(score)
          }
      } else {
        alert('Select an option')
      }
      console.log(newScore)
      setScore(newScore.length)
      console.log(score)
    }

  return (
    <>
        <Navbar />
        <Box display='flex'>   
            <Box w='10%'/>
            <Box w='80%' marginTop={10}>
              {showScore ? (
                  `Congratulations, you scored ${score}/${test1.length}`
              ) : (    
                <FormControl>
                    <form>
                            {test1.map((item, i) => (
                        <Stack mb={4}>
                            <Box borderWidth='2px' borderRadius='lg' mb={5}>
                                <Box p={1} fontStyle='italic' fontFamily='ultra' fontSize={20} color='lightblue'>Q{item.index}</Box>
                                <Box p={5}>
                                    <FormLabel>{item.question}</FormLabel>
                                      <RadioGroup onChange={handleChange}>
                                            {item.options.map((item) => (
                                        <Stack direction='column' marginBottom={4}>
                                            <Radio value={item} ref={radRef}>{item}</Radio>
                                        </Stack>
                                            ))} 
                                      </RadioGroup>
                                </Box>
                            </Box>
                        </Stack>
                            ))}
                        <Button onClick={result} color='white' variant='solid' bg='lightblue'>SUBMIT</Button>
                        {/* {JSON.stringify(answer)} */}
                    </form>
                </FormControl>
              )}
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