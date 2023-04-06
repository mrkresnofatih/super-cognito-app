import * as React from 'react';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {ApiRolePermissionOptions} from "@/apis/rolepermissions/optionsrolepermission";
import {Flex, Heading, HStack, Input, VStack} from "@chakra-ui/react";
import CyanButton from "@/components/buttons/CyanButton";
import BaseTable from "@/components/tables/BaseTable";
import {ApiRolePermissionCreate} from "@/apis/rolepermissions/createrolepermission";

export const RolePermissionCreateDashboard = () => {
    const router = useRouter()
    const [listRequest, setListRequest] = useState({
        roleName: "",
        permissionName: "",
        pageSize: 10,
        page: 1
    })
    const [listData, setListData] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        if (router.query["rolename"]) {
            ApiRolePermissionOptions({
                ...listRequest,
                roleName: router.query["rolename"]
            }, (data) => {
                setListData([...data.data])
                setTotalItems(data.total)
            })
        }
    }, [listRequest, router.query["rolename"]])

    return (
        <VStack align='left' margin='30px'>
            <Heading as='h2' size='2x1' noOfLines={1} color='#0097B2'>Attached Permissions</Heading>
            <Flex justifyContent='space-between' style={{marginTop: 24}}>
                <div/>
                <HStack>
                    <Input placeholder='Search Attached Permissions' size='md' style={{padding: 12, width: 400}}/>
                    <CyanButton
                        size='lg'
                        content='Search'
                        onClick={() => console.log("hello world")}
                    />
                </HStack>
            </Flex>
            <BaseTable
                onPageChange={(newPage) => setListRequest(prev => { return { ...prev, page: newPage }})}
                total={totalItems}
                pageSize={listRequest.pageSize}
                page={listRequest.page}
                onRowClick={(data) => {
                    ApiRolePermissionCreate({
                        permissionName: data.permissionName,
                        roleName: router.query["rolename"]
                    }, () => {
                        router.push(`/roles/edit?rolename=${router.query["rolename"]}`)
                    })
                }}
                columns={[
                    {
                        "jsonKey": "permissionName",
                        "title": "PermissionName"
                    },
                    {
                        "jsonKey": "description",
                        "title": "Description"
                    },
                ]}
                datas={listData}
                style={{marginTop: 24}}
            />
        </VStack>
    );
};
