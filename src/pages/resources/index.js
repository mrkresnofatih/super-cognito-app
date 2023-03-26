import ResourceDashboard from '@/components/dashboards/ResourceDashboard'
import SimpleHeader from '@/components/headers/SimpleHeader'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'

const index = () => {
  return (
    <>
        <BaseHead pageName='Resources' />
        <SimpleHeader/>
        <ResourceDashboard/>
    </>
  )
}

export default index