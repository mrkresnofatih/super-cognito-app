import * as React from 'react';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {ApiRoleResourceOptions} from "@/apis/roleresources/optionsroleresource";
import {Flex, Heading, HStack, Input, VStack} from "@chakra-ui/react";
import CyanButton from "@/components/buttons/CyanButton";
import BaseTable from "@/components/tables/BaseTable";
import {ApiRoleResourceCreate} from "@/apis/roleresources/createroleresources";

export const RoleResourceCreateDashboard = () => {
    const router = useRouter()
    const [listRequest, setListRequest] = useState({
        roleName: "",
        resourceName: "",
        pageSize: 10,
        page: 1
    })
    const [listData, setListData] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        if (router.query["rolename"]) {
            ApiRoleResourceOptions({
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
            <Heading as='h2' size='2x1' noOfLines={1} color='#0097B2'>Unattached Resources</Heading>
            <Flex justifyContent='space-between' style={{marginTop: 24}}>
                <div/>
                <HStack>
                    <Input placeholder='Search Unattached Resources' size='md' style={{padding: 12, width: 400}}/>
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
                onRowClick={() => {}}
                columns={[
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
                                    onClick={() => ApiRoleResourceCreate({
                                        resourceName: data.resourceName,
                                        roleName: router.query["rolename"]
                                    }, () => {
                                        router.push(`/roles/edit?rolename=${router.query["rolename"]}`)
                                    })}
                                >Add</div>
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
