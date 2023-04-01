import PublicCallbackDashboard from '@/components/dashboards/Public/PublicCallbackDashboard'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'

const callback = () => {
  return (
    <>
        <BaseHead pageName='Callback' />
        <div>
            <PublicCallbackDashboard/>
        </div>
    </>
  )
}

export default callback
