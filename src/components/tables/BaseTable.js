import { Flex, Center, VStack, Text } from '@chakra-ui/react'
import React from 'react'

const BaseTable = ({
    columns, 
    datas, 
    pageSize,
    total, 
    page,
    onPageChange,
    onRowClick,
    style
}) => {
  return (
    <VStack style={style}>
        <Flex justifyContent='space-between' style={{backgroundColor: 'gray', width: '100%'}}>
            {columns.map((column, id) => (
                <Center flex='1' h='75px' w='200px' key={id}  >
                    <Text align='center' color='white'>{column.title}</Text>
                </Center>
            ))}
        </Flex>
        {datas.map((data, id) => (
            <Flex key={id} justifyContent='space-between' style={{width: '100%', backgroundColor: id%2===0 ? '#0097B2': 'white'}}>
                {columns.map((col, key) => (
                    <Center key={`${key}-${id}`} flex='1' h='75px' w='200px' onClick={() => onRowClick(data)} >
                        <Text align='center'>{data[col.jsonKey].toString()}</Text>
                    </Center>
                ))}
            </Flex>
        ))}
        <Flex justifyContent='center' style={{width: '100%'}}>
            {[...Array(parseInt(total / pageSize) + 1)].map((_, id) => (
                <Center h='75px' w='50px' onClick={() => onPageChange(id+1)} key={id} >
                    <Text align='center' color={(id+1)===page ? '#0097B2' : 'rgba(0,0,0,0.25)'}>{id+1}</Text>
                </Center>
            ))}
        </Flex>
    </VStack>
  )
}

export default BaseTable