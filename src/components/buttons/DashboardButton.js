import { Square } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

const DashboardButton = ({size, bg, uri, children}) => {
    const router = useRouter();
    return (
        <Square size={size} bg={bg} onClick={() => router.push(uri)} >{children}</Square>
    )
}

export default DashboardButton