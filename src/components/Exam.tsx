import { Box, Button, FormControl, Stack } from '@chakra-ui/react'
import React from 'react'

function Exam() {

   const question = {Q: 'What year did Nigeria gain Independence', A:['1999', '1960', '1977', '2022']}
   const options = question.A.map((item) => {
    return <h4>{item}</h4>
   })
  return (
    <Box>   
        <FormControl>
            <form>
                <Stack>
                    <Box>
                        <h3>{question.Q}</h3>
                        {options}
                        <Button type='submit'>SUBMIT</Button>
                    </Box>
                </Stack>
            </form>
        </FormControl>
    </Box>
  )
}

export default Exam