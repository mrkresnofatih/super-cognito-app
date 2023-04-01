import UserPoolEditDashboard from '@/components/dashboards/UserPool/UserPoolEditDashboard'
import SimpleHeader from '@/components/headers/SimpleHeader'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'

const edit = () => {
  return (
    <>
        <BaseHead pageName="UserPools | Edit" />
        <SimpleHeader/>
        <UserPoolEditDashboard/>
    </>
  )
}

export default edit
