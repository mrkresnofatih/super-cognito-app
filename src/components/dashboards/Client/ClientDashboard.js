import * as React from 'react';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Flex, Heading, HStack, Input, VStack} from "@chakra-ui/react";
import CyanButton from "@/components/buttons/CyanButton";
import BaseTable from "@/components/tables/BaseTable";
import {ApiClientList} from "@/apis/clients/listclients";
import {useDebounce} from "use-debounce";

export function ClientDashboard() {
    const router = useRouter()
    const [listRequest, setListRequest] = useState({
        name: "",
        pageSize: 10,
        page: 1
    })
    const [debouncedListRequest] = useDebounce(listRequest, 1000)
    const [listData, setListData] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        ApiClientList(debouncedListRequest, (data) => {
            setListData([...(data.data)])
            setTotalItems(data.total)
        })
    }, [debouncedListRequest])

    return (
        <VStack align='left' margin='30px'>
            <Heading as='h2' noOfLines={1} color='#0097B2'>Clients</Heading>
            <Flex justifyContent='space-between' style={{marginTop: 24}}>
                <CyanButton
                    size='lg'
                    content='Create'
                    onClick={() => router.push('/clients/create')}
                />
                <HStack>
                    <Input
                        placeholder='Search by Client Name'
                        size='md'
                        style={{padding: 12, width: 400}}
                        onChange={e => setListRequest({...listRequest, name: e.target.value})}
                    />
                    <CyanButton
                        size='lg'
                        content='Search'
                        onClick={() => ApiClientList(debouncedListRequest, (data) => {
                            setListData([...(data.data)])
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
                onRowClick={(data) => router.push(`/clients/edit?client-name=${data.clientName}`)}
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
                        "jsonKey": "clientSecret",
                        "title": "ClientSecret"
                    }
                ]}
                datas={listData}
                style={{marginTop: 24}}
            />
        </VStack>
    )
};
