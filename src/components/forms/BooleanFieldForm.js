import { Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import CyanButton from '../buttons/CyanButton'
import DarkGrayButton from '../buttons/DarkGrayButton'

const BooleanFieldForm = ({fieldName, fieldValue, onChangeValue, disabled}) => {
  return (
    <Flex justifyContent="space-between" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)', width: '100%'}}>
        <Center justifyContent='start' flex='1' h='75px'>
            <Text style={{marginLeft: 24}} align='center' color='black'>{fieldName}</Text>
        </Center>
        <Center justifyContent='end' flex='3' h='75px'>
          {disabled ? <DarkGrayButton
                style={{marginRight: 24}}
                size='lg'
                content={fieldValue ? 'Disable' : 'Enable'}
                onClick={() => {}}
            /> : (
            <CyanButton 
                style={{marginRight: 24}}
                size='lg'
                content={fieldValue ? 'Disable' : 'Enable'}
                onClick={() => onChangeValue(!fieldValue)}
            />
          )}
        </Center>
    </Flex>
  )
}

export default BooleanFieldForm