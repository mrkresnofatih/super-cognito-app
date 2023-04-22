import * as React from 'react';
import BaseHead from "@/components/heads/BaseHead";
import SimpleHeader from "@/components/headers/SimpleHeader";
import {ClientAuthorityCreateDashboard} from "@/components/dashboards/ClientAuthority/ClientAuthorityCreateDashboard";

const Create = () => {
    return (
        <>
            <BaseHead pageName='ClientAuthority | Create'/>
            <SimpleHeader/>
            <ClientAuthorityCreateDashboard/>
        </>
    );
};

export default Create
