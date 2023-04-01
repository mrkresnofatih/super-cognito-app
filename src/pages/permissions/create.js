import PermissionCreateDashboard from '@/components/dashboards/Permission/PermissionCreateDashboard'
import SimpleHeader from '@/components/headers/SimpleHeader'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'

const create = () => {
  return (
    <>
        <BaseHead pageName='Permissions | Create' />
        <SimpleHeader/>
        <PermissionCreateDashboard/>
    </>
  )
}

export default create
