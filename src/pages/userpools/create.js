import UserPoolCreateDashboard from '@/components/dashboards/UserPoolCreateDashboard'
import SimpleHeader from '@/components/headers/SimpleHeader'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'

const create = () => {
  return (
    <>
        <BaseHead pageName='UserPools | Create' />
        <SimpleHeader/>
        <UserPoolCreateDashboard/>
    </>
  )
}

export default create