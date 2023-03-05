import { Center, Heading, Square, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import DashboardButton from '../buttons/DashboardButton'

const HomeDashboard = () => {
  return (
    <VStack margin='30'>
        <Heading as='h1' size='2xl' noOfLines={1} >Welcome</Heading>
        <Wrap spacing='30px' justify='center' style={{marginTop: 75}} color='white'>
            <WrapItem>
                <DashboardButton uri='/userpools' size='275' bg='#0097B2'>User Pools</DashboardButton>
            </WrapItem>
            <WrapItem>
                <DashboardButton uri='/users' size='275' bg='#0097B2'>Users</DashboardButton>
            </WrapItem>
            <WrapItem>
                <DashboardButton uri='/clients' size='275' bg='#0097B2'>Clients</DashboardButton>
            </WrapItem>
            <WrapItem>
                <DashboardButton uri='/roles' size='275' bg='#0097B2'>Roles</DashboardButton>
            </WrapItem>
            <WrapItem>
                <DashboardButton uri='/permissions' size='275' bg='#0097B2'>Permissions</DashboardButton>
            </WrapItem>
            <WrapItem>
                <DashboardButton uri='/resources' size='275' bg='#0097B2'>Resources</DashboardButton>
            </WrapItem>
        </Wrap>
    </VStack>
  )
}

export default HomeDashboard