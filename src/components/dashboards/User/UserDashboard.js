import { Flex, HStack, Heading, Input, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import CyanButton from '../../buttons/CyanButton'
import BaseTable from '../../tables/BaseTable'
import { ApiUserList } from '@/apis/users/listuser'

const UserDashboard = () => {
    const router = useRouter()
    const [listRequest, setListRequest] = useState({
      quickSearch: "",
      pageSize: 10,
      page: 1
    })
    const [listData, setListData] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        ApiUserList(listRequest, (data) => {
            setListData([...data.data.map(x => {
                let dict = {}
                Object.keys(x.userAttributes).forEach(element => {
                    dict[element] = x.userAttributes[element].value
                });
                return { ...x, ...dict }
            })])
            setTotalItems(data.total)
        })
    }, [listRequest])


  return (
    <VStack align='left' margin='30px'>
        <Heading as='h2' size='2xl' noOfLines={1} color='#0097B2'>Users</Heading>
        <Flex justifyContent='space-between' style={{marginTop: 24}}>
            <CyanButton
                size='lg'
                content='Create'
                onClick={() => {}}
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
            onRowClick={(data) => router.push(`/users/edit?principalname=${data.principalName}`)}
            columns={[
                {
                "title": "Id",
                "jsonKey": "id",
                },
                {
                "jsonKey": "principalName",
                "title": "PrincipalName"
                },
            ]}
            datas={listData}
            style={{marginTop: 24}}
        />
    </VStack>
  )
}

export default UserDashboard
