import RoleEditDashboard from '@/components/dashboards/Role/RoleEditDashboard'
import SimpleHeader from '@/components/headers/SimpleHeader'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'
import {RolePermissionDashboard} from "@/components/dashboards/RolePermission/RolePermissionDashboard";
import {RoleResourceDashboard} from "@/components/dashboards/RoleResource/RoleResourceDashboard";

const edit = () => {
  return (
    <>
        <BaseHead pageName='Roles | Edit' />
        <SimpleHeader/>
        <RoleEditDashboard/>
        <RolePermissionDashboard/>
        <RoleResourceDashboard/>
    </>
  )
}

export default edit
