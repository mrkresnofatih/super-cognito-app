import * as React from 'react';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {ApiRoleResourceList} from "@/apis/roleresources/listroleresource";
import {Flex, Heading, HStack, Input, VStack} from "@chakra-ui/react";
import CyanButton from "@/components/buttons/CyanButton";
import BaseTable from "@/components/tables/BaseTable";
import {ApiRoleResourceDelete} from "@/apis/roleresources/deleteroleresource";
import {useDebounce} from "use-debounce";

export const RoleResourceDashboard = () => {
    const router = useRouter()
    const [listRequest, setListRequest] = useState({
        roleName: "",
        resourceName: "",
        pageSize: 10,
        page: 1
    })
    const [debouncedListRequest] = useDebounce(listRequest, 1000)
    const [listData, setListData] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        if (router.query["rolename"]) {
            ApiRoleResourceList({
                ...debouncedListRequest,
                roleName: router.query["rolename"]
            }, (data) => {
                setListData([...data.data])
                setTotalItems(data.total)
            })
        }
    }, [debouncedListRequest, router.query["rolename"], totalItems])

    return (
        <VStack align='left' margin='30px'>
            <Heading as='h2' size='2x1' noOfLines={1} color='#0097B2'>Attached Resources</Heading>
            <Flex justifyContent='space-between' style={{marginTop: 24}}>
                <CyanButton
                    size='lg'
                    content='Create'
                    onClick={() => router.push(`/role-resources/create?rolename=${router.query["rolename"]}`)}
                />
                <HStack>
                    <Input
                        placeholder='Search Attached Resources'
                        size='md'
                        style={{padding: 12, width: 400}}
                        onChange={e => setListRequest({...listRequest, resourceName: e.target.value})}
                    />
                    <CyanButton
                        size='lg'
                        content='Search'
                        onClick={() => ApiRoleResourceList({
                            ...debouncedListRequest,
                            roleName: router.query["rolename"]
                        }, (data) => {
                            setListData([...data.data])
                            setTotalItems(data.total)
                        })}
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
                        "jsonKey": "resourceName",
                        "title": "ResourceName"
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
                                    onClick={() => ApiRoleResourceDelete(data, () => {
                                        setListData(prev => { return [...prev.filter(x => !(x.roleName === data.roleName && x.resourceName === data.resourceName))]})
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
