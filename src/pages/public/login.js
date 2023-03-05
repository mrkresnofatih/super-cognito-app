import ClientLoginDashboard from '@/components/dashboards/ClientLoginDashboard'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'

const login = () => {
  return (
    <>
        <BaseHead pageName='Login' />
        <div>
            <ClientLoginDashboard/>
        </div>
    </>
  )
}

export default login