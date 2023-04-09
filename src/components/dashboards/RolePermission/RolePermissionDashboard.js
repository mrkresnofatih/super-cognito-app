import React, { useState, useEffect } from 'react'
import {useRouter} from "next/router";
import {Flex, Heading, HStack, Input, VStack} from "@chakra-ui/react";
import CyanButton from "@/components/buttons/CyanButton";
import BaseTable from "@/components/tables/BaseTable";
import {ApiRolePermissionList} from "@/apis/rolepermissions/listrolepermissions";
import {ApiRolePermissionDelete} from "@/apis/rolepermissions/deleterolepermission";

export const RolePermissionDashboard = () => {
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
            ApiRolePermissionList({
                ...listRequest,
                roleName: router.query["rolename"]
            }, (data) => {
                setListData([...data.data])
                setTotalItems(data.total)
            })
        }
    }, [listRequest, router.query["rolename"], totalItems])
    return (
        <VStack align='left' margin='30px'>
            <Heading as='h2' size='2x1' noOfLines={1} color='#0097B2'>Attached Permissions</Heading>
            <Flex justifyContent='space-between' style={{marginTop: 24}}>
                <CyanButton
                    size='lg'
                    content='Create'
                    onClick={() => router.push(`/role-permissions/create?rolename=${router.query["rolename"]}`)}
                />
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
                onRowClick={() => {
                }}
                columns={[
                    {
                        "jsonKey": "roleName",
                        "title": "RoleName",
                    },
                    {
                        "jsonKey": "permissionName",
                        "title": "PermissionName"
                    },
                    {
                        "jsonKey": "description",
                        "title": "Description"
                    },
                    {
                        "title": "Actions",
                        "component": (data) => {
                            return (
                                <div
                                    style={{backgroundColor: "tomato", padding: "4px 8px"}}
                                    onClick={() => ApiRolePermissionDelete(data, () => {
                                        setListData(prev => { return [...prev.filter(x => !(x.roleName === data.roleName && x.permissionName === data.permissionName))]})
                                        setTotalItems(prev => prev - 1)
                                    })}
                                >Delete</div>
                            )
                        }
                    }
                ]}
                datas={listData}
                style={{marginTop: 24}}
            />
        </VStack>
    );
};
