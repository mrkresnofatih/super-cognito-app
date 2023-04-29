import { ApiAuthUserToken } from '@/apis/auth/usertoken'
import { Center, Flex, Heading, Spinner, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, {useEffect} from 'react'

const PublicCallbackDashboard = () => {
  const router = useRouter()

  useEffect(() => {
    if (router.query.userpoolid && router.query.code) {
      ApiAuthUserToken({
        userPoolId: router.query.userpoolid,
        code: router.query.code
      }, (data) => {
        console.log(data)
      })
    }
  }, [router.query])

  return (
    <VStack margin='150px'>
        <Flex justifyContent='center'>
            <Heading>Auth Callback</Heading>
        </Flex>
        <Text>Authenticating. Please Wait</Text>
        <Center w='250px' h='150px'>
            <Spinner color='#0097B2' boxSize="50px" thickness='10px' speed='0.5s' />
        </Center>
    </VStack>
  )
}

export default PublicCallbackDashboard
