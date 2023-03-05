import ClientCallbackDashboard from '@/components/dashboards/ClientCallbackDashboard'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'

const callback = () => {
  return (
    <>
        <BaseHead pageName='Callback' />
        <div>
            <ClientCallbackDashboard/>
        </div>
    </>
  )
}

export default callback