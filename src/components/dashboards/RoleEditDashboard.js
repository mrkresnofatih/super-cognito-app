import { Flex, Heading, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import BaseForm from '../forms/BaseForm'
import CyanButton from '../buttons/CyanButton'
import TomatoButton from '../buttons/TomatoButton'
import DarkGrayButton from '../buttons/DarkGrayButton'
import { ApiRoleGet } from '@/apis/roles/getrole'
import { BaseFormFieldType } from '@/utilities/constants'
import { ApiRoleUpdate } from '@/apis/roles/updaterole'
import { ApiRoleDelete } from '@/apis/roles/deleterole'

const RoleEditDashboard = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        description: ""
    })

    useEffect(() => {
        if (router.query["rolename"]) {
            ApiRoleGet({ name: router.query["rolename"] }, (response) => {
                setFormData(response.data.data)
            })
        }
    }, [router.query["rolename"]])

  return (
    <VStack align='left' margin='30px'>
        <Heading as='h2' size='2xl' noOfLines={1} color='#0097B2'>Update Role</Heading>
        <BaseForm
            fields={[
                {
                    fieldName: "Id",
                    type: BaseFormFieldType.StringField,
                    fieldPlaceHolder: "Id Guid",
                    fieldValue: formData['id'],
                    disabled: true,
                    onChangeValue: (val) => setFormData(prev => { return { ...prev, id: val } })
                },
                {
                    fieldName: "Name",
                    type: BaseFormFieldType.StringField,
                    fieldPlaceHolder: "Any Name",
                    fieldValue: formData['name'],
                    disabled: true,
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
        <Flex justifyContent='end' style={{marginTop: 24}} >
        <CyanButton
            style={{marginLeft: 18, width: 150}}
            size='lg'
            content='Update'
            onClick={() => {
                ApiRoleUpdate(formData, () => {
                    router.push("/roles")
                })
            }}
          />
          <TomatoButton
            style={{marginLeft: 18, width: 150}}
            size='lg'
            content='Delete'
            onClick={() => {
                ApiRoleDelete(formData, () => {
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

export default RoleEditDashboard