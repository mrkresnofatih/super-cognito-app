import * as React from 'react';
import BaseHead from "@/components/heads/BaseHead";
import SimpleHeader from "@/components/headers/SimpleHeader";
import {ClientCreateDashboard} from "@/components/dashboards/Client/ClientCreateDashboard";

const Create = () => {
    return (
        <>
            <BaseHead pageName="Clients | Create"/>
            <SimpleHeader/>
            <ClientCreateDashboard/>
        </>
    );
};

export default Create
