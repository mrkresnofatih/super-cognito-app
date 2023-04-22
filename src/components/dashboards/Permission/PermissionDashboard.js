import { Flex, HStack, Heading, Input, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import CyanButton from '../../buttons/CyanButton'
import BaseTable from '../../tables/BaseTable'
import { ApiPermissionList } from '@/apis/permissions/listpermission'
import {useDebounce} from "use-debounce";

const PermissionDashboard = () => {
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
        ApiPermissionList(debouncedListRequest, (data) => {
            setListData([...(data.data)])
            setTotalItems(data.total)
        })
    }, [debouncedListRequest])
  return (
    <VStack align='left' margin='30px'>
        <Heading as='h2' noOfLines={1} color='#0097B2'>Permissions</Heading>
        <Flex justifyContent='space-between' style={{marginTop: 24}}>
            <CyanButton
                size='lg'
                content='Create'
                onClick={() => router.push('/permissions/create')}
            />
            <HStack>
                <Input
                    placeholder='Search Permission Keywords'
                    size='md'
                    onChange={(e) => setListRequest({...listRequest, name: e.target.value})}
                    style={{padding: 12, width: 400}}
                />
                <CyanButton
                    size='lg'
                    content='Search'
                    onClick={() => ApiPermissionList(debouncedListRequest, (data) => {
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
            onRowClick={(data) => router.push(`/permissions/edit?permission-name=${data.name}`)}
            columns={[
            {
                "title": "Id",
                "jsonKey": "id",
            },
            {
                "jsonKey": "name",
                "title": "Name"
            },
            {
                "jsonKey": "description",
                "title": "Description"
            }
            ]}
            datas={listData}
            style={{marginTop: 24}}
        />
    </VStack>
  )
}

export default PermissionDashboard
