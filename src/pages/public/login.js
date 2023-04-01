import PublicLoginDashboard from '@/components/dashboards/Public/PublicLoginDashboard'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'

const login = () => {
  return (
    <>
        <BaseHead pageName='Login' />
        <div>
            <PublicLoginDashboard/>
        </div>
    </>
  )
}

export default login
