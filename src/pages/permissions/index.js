import PermissionDashboard from '@/components/dashboards/Permission/PermissionDashboard'
import SimpleHeader from '@/components/headers/SimpleHeader'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'

const index = () => {
  return (
    <>
        <BaseHead pageName='Permissions' />
        <SimpleHeader/>
        <PermissionDashboard/>
    </>
  )
}

export default index
