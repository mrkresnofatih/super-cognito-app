import * as React from 'react';
import BaseHead from "@/components/heads/BaseHead";
import SimpleHeader from "@/components/headers/SimpleHeader";
import {UserAuthorityCreateDashboard} from "@/components/dashboards/UserAuthority/UserAuthorityCreateDashboard";

const Create = () => {
    return (
        <>
            <BaseHead pageName='UserAuthority | Create'/>
            <SimpleHeader/>
            <UserAuthorityCreateDashboard/>
        </>
    );
};

export default Create
