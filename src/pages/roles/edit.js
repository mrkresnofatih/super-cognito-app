import RoleEditDashboard from '@/components/dashboards/RoleEditDashboard'
import SimpleHeader from '@/components/headers/SimpleHeader'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'

const edit = () => {
  return (
    <>
        <BaseHead pageName='Roles | Edit' />
        <SimpleHeader/>
        <RoleEditDashboard/>
    </>
  )
}

export default edit