import { Center, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

const SimpleHeader = () => {
  const router = useRouter()
  return (
    <Flex color='white'>
      <Center w='200px' bg='#171717' h='50'/>
      <Center flex='1' bg='#171717' h='50' onClick={() => router.push("/")}>
          <Text>SuperIdentity</Text>
      </Center>
      <Center w='200px' bg='#101010' h='50'>
          <Text>Logout</Text>
      </Center>
    </Flex>
  )
}

export default SimpleHeader
