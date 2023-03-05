import UserPoolDashboard from '@/components/dashboards/UserPoolDashboard'
import SimpleHeader from '@/components/headers/SimpleHeader'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'

const UserPools = () => {
  return (
    <>
        <BaseHead pageName='UserPools' />
        <SimpleHeader/>
        <UserPoolDashboard/>
    </>
  )
}

export default UserPools