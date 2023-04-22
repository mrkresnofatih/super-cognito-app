import * as React from 'react';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {ApiClientAuthorityList} from "@/apis/clientauthorities/listclientauthority";
import {Flex, Heading, HStack, Input, VStack} from "@chakra-ui/react";
import CyanButton from "@/components/buttons/CyanButton";
import BaseTable from "@/components/tables/BaseTable";
import {ApiClientAuthorityDelete} from "@/apis/clientauthorities/deleteclientauthority";

export const ClientAuthorityDashboard = () => {
    const router = useRouter()
    const [listRequest, setListRequest] = useState({
        clientName: "",
        pageSize: 10,
        page: 1
    })
    const [listData, setListData] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        ApiClientAuthorityList({
            ...listRequest,
            clientName: router.query["client-name"]
        }, (data) => {
            setListData([...data.data])
            setTotalItems(data.total)
        })
    }, [listRequest, router.query["client-name"]])

    return (
        <VStack align='left' margin='30px'>
            <Heading as='h2' noOfLines={1} color='#0097B2'>Attached Client Authorities</Heading>
            <Flex justifyContent='space-between' style={{marginTop: 24}}>
                <CyanButton
                    size='lg'
                    content='Create'
                    onClick={() => router.push(`/client-authority/create?client-name=${router.query["client-name"]}`)}
                />
                <HStack>
                    <Input
                        placeholder='Search Attached Authorities'
                        size='md'
                        onChange={(e) => setListRequest({...listRequest, name: e.target.value})}
                        style={{padding: 12, width: 400}}
                    />
                    <CyanButton
                        size='lg'
                        content='Search'
                        onClick={() => ApiClientAuthorityList(listRequest, (data) => {
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
                onRowClick={() => {}}
                columns={[
                    {
                        "title": "Id",
                        "jsonKey": "id",
                    },
                    {
                        "jsonKey": "clientName",
                        "title": "ClientName"
                    },
                    {
                        "jsonKey": "roleResourceId",
                        "title": "RoleResourceId"
                    },
                    {
                        "title": "Actions",
                        "component": (data) => {
                            return (
                                <div
                                    style={{backgroundColor: "tomato", padding: "4px 8px"}}
                                    onClick={() => ApiClientAuthorityDelete(data, () => {
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
