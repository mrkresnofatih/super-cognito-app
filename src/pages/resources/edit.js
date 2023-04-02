import SimpleHeader from '@/components/headers/SimpleHeader'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'
import {ResourceEditDashboard} from "@/components/dashboards/Resource/ResourceEditDashboard";

const edit = () => {
  return (
    <>
        <BaseHead pageName='Resources | Edit' />
        <SimpleHeader/>
        <ResourceEditDashboard/>
    </>
  )
}

export default edit
