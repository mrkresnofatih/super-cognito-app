import * as React from 'react';
import {useRouter} from "next/router";
import {useState} from "react";

export const ClientAuthorityDashboard = () => {
    const router = useRouter()
    const [listRequest, setListRequest] = useState({
        clientName: "",
        pageSize: 10,
        page: 1
    })
    const [listData, setListData] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    return (
        <div>

        </div>
    );
};
