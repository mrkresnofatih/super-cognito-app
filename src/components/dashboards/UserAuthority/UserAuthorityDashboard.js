import * as React from 'react';
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {ApiUserAuthorityList} from "@/apis/userauthorities/listuserauthority";
import {Flex, Heading, HStack, Input, VStack} from "@chakra-ui/react";
import CyanButton from "@/components/buttons/CyanButton";
import BaseTable from "@/components/tables/BaseTable";
import {ApiUserAuthorityDelete} from "@/apis/userauthorities/deleteuserauthority";

export const UserAuthorityDashboard = () => {
    const router = useRouter()
    const [listRequest, setListRequest] = useState({
        principalName: "",
        pageSize: 10,
        page: 1
    })
    const [listData, setListData] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        ApiUserAuthorityList({
            ...listRequest,
            principalName: router.query["principalname"]
        }, (data) => {
            setListData([...data.data])
            setTotalItems(data.total)
        })
    }, [listRequest, router.query["principalname"]])

    return (
        <VStack align='left' margin='30px'>
            <Heading as='h2' noOfLines={1} color='#0097B2'>Attached User Authorities</Heading>
            <Flex justifyContent='space-between' style={{marginTop: 24}}>
                <CyanButton
                    size='lg'
                    content='Create'
                    onClick={() => router.push(`/user-authority/create?principalname=${router.query["principalname"]}`)}
                />
                <HStack>
                    <Input
                        placeholder='Search Attached Authorities'
                        size='md'
                        onChange={(e) => setListRequest({...listRequest, principalName: e.target.value})}
                        style={{padding: 12, width: 400}}
                    />
                    <CyanButton
                        size='lg'
                        content='Search'
                        onClick={() => ApiUserAuthorityList({
                            ...listRequest,
                            principalName: router.query["principalname"]
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
                onRowClick={() => {}}
                columns={[
                    {
                        "title": "Id",
                        "jsonKey": "id",
                    },
                    {
                        "jsonKey": "principalName",
                        "title": "PrincipalName"
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
                                    onClick={() => ApiUserAuthorityDelete(data, () => {
                                        setListData(prev => { return [...prev.filter(x => !(x.principalName === data.principalName && x.roleResourceId === data.roleResourceId))]})
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
