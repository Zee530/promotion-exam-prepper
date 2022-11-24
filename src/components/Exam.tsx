import { Alert, Box, Button, Center, FormControl, FormLabel, Radio, RadioGroup, Stack, Tooltip } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { string } from 'yup'
import { number } from 'yup/lib/locale'
import Navbar from './Navbar'
import test1 from './Test1'

// interface Arrtype {
//   radVal: string[],
//   score: number
// }

function Exam() {
    let navigate = useNavigate()
    const [radVal, setRadVal] = useState<Array<string>>([])
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState<Boolean>(false)
    const [begin, setBegin] = useState<Boolean>(true)
    const radRef = useRef<any>()

    
    
    const handleChange = (value: string) => {
      setRadVal([...radVal, value])
      // radRef.current.isDisabled = true
    }
    
    let newScore: any = []
    let newExam:any = []
    // let old = ['1','2','3','4','5']
    
    // function shuffleArray(arr:any) {
    //   arr.sort(() => Math.random() - 0.5);
    // }
    // let arr = [1, 2, 3, 4, 5];
    
    // useEffect(() => {
    //   newExam = shuffleArray(test1)
    //   console.log(test1)
    //   // result()
    //   // console.log('sideeffect')
    // }, [])

    function result() {
      // e.preventDefault()
      setShowScore(true)
      // radRef.current.isDisabled = true
      if (radVal) {
          for (let i = 0; i < test1.length; i++) {
            if (radVal[i] === test1[i].correct) {
              // alert('Correct answer')
              newScore.push(1)
            } else {
              // alert('Wrong answer')
            }
            // console.log(test1[i].correct)
            console.log(radVal[i])
            console.log(test1[i].correct)
          }
      } else {
        alert('Select an option')
      }
      // console.log(newScore)
      setScore(newScore.length)
    }

    function retry() {
      window.location.reload()
      // shuffleArray(test1)
      // setShowScore(false)
    }

  return (
    <>
        <Navbar/>
        <Box display='flex'>   
            <Box w='10%'/>
            <Box w='80%' marginTop={10}>
              {/* {begin ? (
                <Button onClick() => {setBegin(false)}>START THE EXAM</Button>
              ) : ( */}
              {showScore ? (
                <Center>
                <Box borderWidth='2px' borderRadius='lg' w='100%'>
                  <Box p={1} fontStyle='italic' fontFamily='ultra' fontSize={20} color='lightblue'>
                    <Center><Box p={5}>Exam Completed</Box></Center>
                    <Center><Box p={5} textAlign='center'>You scored {score} / 20</Box></Center>
                  </Box>
                  <Box display={['block', 'block', 'flex']} mb={8} mt={5}>
                    <Box w='25%' display={['none','none','block']}/>
                    <Box w={['100%','100%','50%']}>
                      <Center>
                      <Button onClick={retry} color='white' width={180} variant='solid' bg='lightblue' float='left'>RETRY</Button>
                      {/* <Tooltip hasArrow label='Coming Soon'><Button color='white' width={180} variant='solid' bg='lightblue' float='right'>REVIEW</Button></Tooltip> */}
                      </Center>
                    </Box>
                    <Box w='25%' display={['none','none','block']}/>
                  </Box>
                </Box>
                </Center>
              ) : (    
                <FormControl>
                    <form>
                            {test1.slice(0,20).map((item, index) => (
                        <Stack mb={4}>
                            <Box borderWidth='2px' borderRadius='lg' mb={5}>
                                <Box p={1} fontStyle='italic' fontFamily='ultra' fontSize={20} color='lightblue'>Q{index+1}</Box>
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
                        <Center><Button onClick={result} mb={5} width={180} color='white' variant='solid' bg='lightblue'>SUBMIT</Button></Center>
                        {/* {JSON.stringify(answer)} */}
                    </form>
                </FormControl>
              )}
              {/* )} */}
            </Box>
            <Box w='10%'/>
        </Box>
    </>
  )
}

export default Exam