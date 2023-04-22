import { Flex, HStack, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import CyanButton from '../../buttons/CyanButton'
import { useRouter } from 'next/router'
import BaseTable from '../../tables/BaseTable'
import { ApiRoleList } from '@/apis/roles/listrole'
import {useDebounce} from "use-debounce";

const RoleDashboard = () => {
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
        ApiRoleList(debouncedListRequest, (data) => {
            setListData([...data.data])
            setTotalItems(data.total)
        })
    }, [debouncedListRequest])


  return (
    <VStack align='left' margin='30px'>
        <Heading as='h2' size='2x1' noOfLines={1} color='#0097B2'>Roles</Heading>
        <Flex justifyContent='space-between' style={{marginTop: 24}}>
            <CyanButton
                size='lg'
                content='Create'
                onClick={() => router.push('/roles/create')}
            />
            <HStack>
                <Input
                    placeholder='Search Roles Keywords'
                    size='md'
                    style={{padding: 12, width: 400}}
                    onChange={(e) => setListRequest({...listRequest, name: e.target.value})}
                />
                <CyanButton
                    size='lg'
                    content='Search'
                    onClick={() => ApiRoleList(listRequest, (data) => {
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
            onRowClick={(data) => router.push(`/roles/edit?rolename=${data.name}`)}
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

export default RoleDashboard
