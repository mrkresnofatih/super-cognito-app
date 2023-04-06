import * as React from 'react';
import BaseHead from "@/components/heads/BaseHead";
import SimpleHeader from "@/components/headers/SimpleHeader";
import {RolePermissionCreateDashboard} from "@/components/dashboards/RolePermission/RolePermissionCreateDashboard";

const Create = () => {
    return (
        <>
            <BaseHead pageName='RolePermissions | Create'/>
            <SimpleHeader/>
            <RolePermissionCreateDashboard/>
        </>
    );
};

export default Create
