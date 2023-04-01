import { Flex, VStack, HStack, Heading, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CyanButton from '../../buttons/CyanButton'
import BaseTable from '../../tables/BaseTable'
import { useRouter } from 'next/router'
import { ApiUserPoolList } from '@/apis/userpools/listuserpool'

const UserPoolDashboard = () => {
  const router = useRouter()
  const [listRequest, setListRequest] = useState({
    name: "",
    pageSize: 10,
    page: 1
  })
  const [listData, setListData] = useState([])
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    ApiUserPoolList(listRequest, (data) => {
      setListData([ ...data.data ])
      setTotalItems(data.total)
    })
  }, [listRequest])

  return (
    <VStack align='left' margin='30px'>
        <Heading as='h2' size='2xl' noOfLines={1} color='#0097B2'>UserPools</Heading>
        <Flex justifyContent='space-between' style={{marginTop: 24}}>
          <CyanButton
            size='lg'
            content='Create'
            onClick={() => router.push('/userpools/create')}
          />
          <HStack>
            <Input placeholder='Search UserPool Keywords' size='md' style={{padding: 12, width: 400}} />
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
          onRowClick={(data) => router.push(`/userpools/edit?user-pool-id=${data.id}`)}
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
            },
            {
              "jsonKey": "enabled",
              "title": "Enabled"
            },
            {
              "jsonKey": "tokenLifeTime",
              "title": "TokenLifeTime"
            },
          ]}
          datas={listData}
          style={{marginTop: 24}}
        />
    </VStack>
  )
}

export default UserPoolDashboard
