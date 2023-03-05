import { Center, Flex, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from '@chakra-ui/react'
import React from 'react'

const NumberFieldForm = ({fieldName, fieldValue, onChangeValue, disabled}) => {
  return (
    <Flex justifyContent="space-between" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)', width: '100%'}}>
        <Center justifyContent='start' flex='1' h='75px'>
            <Text style={{marginLeft: 24}} align='center' color='black'>{fieldName}</Text>
        </Center>
        <Center justifyContent='end' flex='3' h='75px'>
            <NumberInput
                size='md'  
                defaultValue={10} 
                min={5} 
                max={44640} 
                isDisabled={disabled}
                value={fieldValue} 
                onChange={(value) => onChangeValue(value)}
            >
                <NumberInputField style={{padding: 12, width: 400, marginRight: 24}} />
                <NumberInputStepper>
                    <NumberIncrementStepper style={{marginRight: 36}} />
                    <NumberDecrementStepper style={{marginRight: 36}} />
                </NumberInputStepper>
            </NumberInput>
        </Center>
    </Flex>
  )
}

export default NumberFieldForm