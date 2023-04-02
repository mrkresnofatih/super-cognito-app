import SimpleHeader from '@/components/headers/SimpleHeader'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'
import {PermissionEditDashboard} from "@/components/dashboards/Permission/PermissionEditDashboard";

const edit = () => {
  return (
    <>
        <BaseHead pageName='Permissions | Edit' />
        <SimpleHeader/>
        <PermissionEditDashboard/>
    </>
  )
}

export default edit
