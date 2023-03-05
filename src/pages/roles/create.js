import RoleCreateDashboard from '@/components/dashboards/RoleCreateDashboard'
import SimpleHeader from '@/components/headers/SimpleHeader'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'

const create = () => {
  return (
    <>
        <BaseHead pageName='Roles | Create' />
        <SimpleHeader/>
        <RoleCreateDashboard/>
    </>
  )
}

export default create