import RoleDashboard from '@/components/dashboards/RoleDashboard'
import SimpleHeader from '@/components/headers/SimpleHeader'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'

const index = () => {
  return (
    <>
        <BaseHead pageName='Roles' />
        <SimpleHeader/>
        <RoleDashboard/>
    </>
  )
}

export default index