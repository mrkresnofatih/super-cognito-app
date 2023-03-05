import { Center, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'

const StringFieldForm = ({fieldName, fieldPlaceHolder, fieldValue, onChangeValue, disabled}) => {
  return (
    <Flex justifyContent="space-between" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)', width: '100%'}}>
        <Center justifyContent='start' flex='1' h='75px'>
            <Text style={{marginLeft: 24}} align='center' color='black'>{fieldName}</Text>
        </Center>
        <Center justifyContent='end' flex='3' h='75px'>
            <Input 
                placeholder={fieldPlaceHolder} 
                size='md' 
                style={{padding: 12, width: 400, marginRight: 24}} 
                value={fieldValue} 
                onChange={(e) => {
                    onChangeValue(e.target.value)
                }}
                isDisabled={disabled}
            />
        </Center>
    </Flex>
  )
}

export default StringFieldForm