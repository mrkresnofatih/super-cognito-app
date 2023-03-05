import { ApiRoleCreate } from '@/apis/roles/createrole'
import { Flex, Heading, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, {useState} from 'react'
import DarkGrayButton from '../buttons/DarkGrayButton'
import CyanButton from '../buttons/CyanButton'
import BaseForm from '../forms/BaseForm'
import { BaseFormFieldType } from '@/utilities/constants'

const RoleCreateDashboard = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
      name: "",
      description: ""
    })

  return (
    <VStack align='left' margin='30px'>
        <Heading as='h2' size='2xl' noOfLines={1} color='#0097B2'>Create Role</Heading>
        <BaseForm
          fields={[
            {
              fieldName: "Name",
              type: BaseFormFieldType.StringField,
              fieldPlaceHolder: "Any Name",
              fieldValue: formData['name'],
              onChangeValue: (val) => setFormData(prev => { return { ...prev, name: val } })
            },
            {
              fieldName: "Description",
              type: BaseFormFieldType.StringField,
              fieldPlaceHolder: "Any Description",
              fieldValue: formData['description'],
              onChangeValue: (val) => setFormData(prev => { return { ...prev, description: val } })
            }
          ]}
          style={{marginTop: 24}} 
        />
        <Flex justifyContent='end' style={{marginTop: 24}}>
            <CyanButton
                style={{marginLeft: 18, width: 150}}
                size='lg'
                content='Save'
                onClick={() => {
                ApiRoleCreate(formData, (data) => {
                    console.log(data)
                    router.push("/roles")
                })
                }}
            />
            <DarkGrayButton
                style={{marginLeft: 18, width: 150}}
                size='lg'
                content='Cancel'
                onClick={() => router.push('/roles')}
            />
        </Flex>
    </VStack>
  )
}

export default RoleCreateDashboard