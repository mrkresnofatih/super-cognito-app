import * as React from 'react';
import BaseHead from "@/components/heads/BaseHead";
import SimpleHeader from "@/components/headers/SimpleHeader";
import {ClientEditDashboard} from "@/components/dashboards/Client/ClientEditDashboard";
import {ClientAuthorityDashboard} from "@/components/dashboards/ClientAuthority/ClientAuthorityDashboard";

const Edit = () => {
    return (
        <>
            <BaseHead pageName="Clients | Edit"/>
            <SimpleHeader/>
            <ClientEditDashboard/>
            <ClientAuthorityDashboard/>
        </>
    );
};

export default Edit
