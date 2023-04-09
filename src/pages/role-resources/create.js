import * as React from 'react';
import BaseHead from "@/components/heads/BaseHead";
import SimpleHeader from "@/components/headers/SimpleHeader";
import {RoleResourceCreateDashboard} from "@/components/dashboards/RoleResource/RoleResourceCreateDashboard";

const Create = () => {
    return (
        <>
            <BaseHead pageName='RoleResources | Create'/>
            <SimpleHeader/>
            <RoleResourceCreateDashboard/>
        </>
    );
};

export default Create
