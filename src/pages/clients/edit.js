import * as React from 'react';
import BaseHead from "@/components/heads/BaseHead";
import SimpleHeader from "@/components/headers/SimpleHeader";
import {ClientEditDashboard} from "@/components/dashboards/Client/ClientEditDashboard";

const Edit = () => {
    return (
        <>
            <BaseHead pageName="Clients | Edit"/>
            <SimpleHeader/>
            <ClientEditDashboard/>
        </>
    );
};

export default Edit
