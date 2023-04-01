import { Flex, HStack, Heading, Input, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import CyanButton from '../../buttons/CyanButton'
import BaseTable from '../../tables/BaseTable'
import { ApiResourceList } from '@/apis/resources/listresource'

const ResourceDashboard = () => {
    const router = useRouter()
    const [listRequest, setListRequest] = useState({
        name: "",
        pageSize: 10,
        page: 1
      })
    const [listData, setListData] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        ApiResourceList(listRequest, (data) => {
            setListData([...(data.data)])
            setTotalItems(data.total)
        })
    }, [listRequest])
  return (
    <VStack align='left' margin='30px'>
        <Heading as='h2' noOfLines={1} color='#0097B2'>Resources</Heading>
        <Flex justifyContent='space-between' style={{marginTop: 24}}>
            <CyanButton
                size='lg'
                content='Create'
                onClick={() => router.push('/resources/create')}
            />
            <HStack>
                <Input placeholder='Search Resources Keywords' size='md' style={{padding: 12, width: 400}}/>
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
            onRowClick={(data) => router.push(`/resources/edit?resourcename=${data.name}`)}
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

export default ResourceDashboard
