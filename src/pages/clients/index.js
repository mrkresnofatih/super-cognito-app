import SimpleHeader from '@/components/headers/SimpleHeader'
import BaseHead from '@/components/heads/BaseHead'
import React from 'react'
import {ClientDashboard} from "@/components/dashboards/Client/ClientDashboard";

const index = () => {
    return (
        <>
            <BaseHead pageName='Clients'/>
            <SimpleHeader/>
            <ClientDashboard/>
        </>

    )
}

export default index
