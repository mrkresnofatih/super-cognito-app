import UserDashboard from '@/components/dashboards/User/UserDashboard'
import SimpleHeader from '@/components/headers/SimpleHeader'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'

const index = () => {
  return (
    <>
        <BaseHead pageName='Users' />
        <SimpleHeader/>
        <UserDashboard/>
    </>
  )
}

export default index
