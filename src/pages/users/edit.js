import SimpleHeader from '@/components/headers/SimpleHeader'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'
import {UserEditDashboard} from "@/components/dashboards/User/UserEditDashboard";

const edit = () => {
  return (
    <>
        <BaseHead pageName='Users | Edit' />
        <SimpleHeader/>
        <UserEditDashboard/>
    </>
  )
}

export default edit
