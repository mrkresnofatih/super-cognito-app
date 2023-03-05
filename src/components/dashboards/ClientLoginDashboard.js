import { Flex, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import CyanButton from '../buttons/CyanButton'
import { ApiUserPoolListActive } from '@/apis/userpools/listactiveuserpool'

const ClientLoginDashboard = () => {
    const [userPools, setUserPools] = useState([])

    const redirectFunc = (page) => {
        setTimeout(() => {
            window.location = page
        }, 100)
    }

    useEffect(() => {
        ApiUserPoolListActive((data) => {
            setUserPools([...data.data])
        })
    }, [])
  return (
    <VStack margin='150px'>
        <Flex justifyContent='center'>
            <Heading>Login</Heading>
        </Flex>
        <Text>Choose your Login Provider To Continue</Text>
        <VStack style={{marginTop: 24}}>
            {userPools.map((userPool, id) => (
                <CyanButton
                    key={id}
                    style={{marginTop: 12, width: 300}}
                    size='lg'
                    content={`Login | ${userPool.name}`}
                    onClick={() => redirectFunc(userPool.loginPageUrl)}
                />
            ))}
        </VStack>
    </VStack>
  )
}

export default ClientLoginDashboard