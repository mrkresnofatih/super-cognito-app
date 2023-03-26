import ResourceCreateDashboard from '@/components/dashboards/ResourceCreateDashboard'
import SimpleHeader from '@/components/headers/SimpleHeader'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'

const create = () => {
  return (
    <>
        <BaseHead pageName='Resources | Create'/>
        <SimpleHeader/>
        <ResourceCreateDashboard/>
    </>
  )
}

export default create