import { Flex, Heading, VStack } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import CyanButton from '../../buttons/CyanButton'
import { useRouter } from 'next/router'
import BaseForm from '../../forms/BaseForm'
import { BaseFormFieldType } from '@/utilities/constants'
import DarkGrayButton from '../../buttons/DarkGrayButton'
import { ApiUserPoolGet } from '@/apis/userpools/getuserpool'
import { ApiUserPoolUpdate } from '@/apis/userpools/updateuserpool'
import TomatoButton from '../../buttons/TomatoButton'
import { ApiUserPoolDelete } from '@/apis/userpools/deleteuserpool'

const UserPoolEditDashboard = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        description: "",
        clientId: "",
        clientSecret: "",
        loginPageUrl: "",
        exchangeTokenUrl: "",
        userInfoUrl: "",
        issuerUrl: "",
        jwksUrl: "",
        enabled: false,
        useCache: false,
        tokenLifeTime: 10,
        principalNameKey: ""
      })

    useEffect(() => {
        if (router.query["user-pool-id"]) {
            ApiUserPoolGet({ userPoolId: router.query["user-pool-id"] }, (response) => {
                setFormData(response.data.data)
            })
        }
    }, [router.query["user-pool-id"]])
  return (
    <VStack align='left' margin='30px'>
        <Heading as='h2' size='2xl' noOfLines={1} color='#0097B2'>Update UserPool</Heading>
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
                  onChangeValue: (val) => setFormData(prev => { return { ...prev, name: val } })
                },
                {
                  fieldName: "Description",
                  type: BaseFormFieldType.StringField,
                  fieldPlaceHolder: "Any Description",
                  fieldValue: formData['description'],
                  onChangeValue: (val) => setFormData(prev => { return { ...prev, description: val } })
                },
                {
                  fieldName: "ClientId",
                  type: BaseFormFieldType.StringField,
                  fieldPlaceHolder: "Your ClientId",
                  fieldValue: formData['clientId'],
                  onChangeValue: (val) => setFormData(prev => { return { ...prev, clientId: val } })
                },
                {
                  fieldName: "ClientSecret",
                  type: BaseFormFieldType.StringField,
                  fieldPlaceHolder: "Your Client Secret",
                  fieldValue: formData['clientSecret'],
                  onChangeValue: (val) => setFormData(prev => { return { ...prev, clientSecret: val } })
                },
                {
                  fieldName: "LoginPageURL",
                  type: BaseFormFieldType.StringField,
                  fieldPlaceHolder: "LoginPageURL Path",
                  fieldValue: formData['loginPageUrl'],
                  onChangeValue: (val) => setFormData(prev => { return { ...prev, loginPageUrl: val } })
                },
                {
                  fieldName: "ExchangeTokenURL",
                  type: BaseFormFieldType.StringField,
                  fieldPlaceHolder: "ExchangeTokenUrl Path",
                  fieldValue: formData['exchangeTokenUrl'],
                  onChangeValue: (val) => setFormData(prev => { return { ...prev, exchangeTokenUrl: val } })
                },
                {
                  fieldName: "UserInfoURL",
                  type: BaseFormFieldType.StringField,
                  fieldPlaceHolder: "UserInfoUrl Path",
                  fieldValue: formData['userInfoUrl'],
                  onChangeValue: (val) => setFormData(prev => { return { ...prev, userInfoUrl: val } })
                },
                {
                  fieldName: "IssuerUrl",
                  type: BaseFormFieldType.StringField,
                  fieldPlaceHolder: "IssuerUrl Path",
                  fieldValue: formData['issuerUrl'],
                  onChangeValue: (val) => setFormData(prev => { return { ...prev, issuerUrl: val } })
                },
                {
                  fieldName: "JwksUrl",
                  type: BaseFormFieldType.StringField,
                  fieldPlaceHolder: "JwksUrl Path",
                  fieldValue: formData['jwksUrl'],
                  onChangeValue: (val) => setFormData(prev => { return { ...prev, jwksUrl: val } })
                },
                {
                  fieldName: "Enabled",
                  type: BaseFormFieldType.BooleanField,
                  fieldPlaceHolder: "UserPool Enabled",
                  fieldValue: formData['enabled'],
                  disabled: false,
                  onChangeValue: (val) => setFormData(prev => { return { ...prev, enabled: val } })
                },
                {
                  fieldName: "UseCache",
                  type: BaseFormFieldType.BooleanField,
                  fieldPlaceHolder: "Enable Caching?",
                  fieldValue: formData['useCache'],
                  onChangeValue: (val) => setFormData(prev => { return { ...prev, useCache: val } })
                },
                {
                  fieldName: "TokenLifeTime",
                  type: BaseFormFieldType.NumberField,
                  fieldPlaceHolder: "TokenLifeTime In Minutes",
                  fieldValue: formData['tokenLifeTime'],
                  disabled: false,
                  onChangeValue: (val) => setFormData(prev => { return { ...prev, tokenLifeTime: Number(val) } })
                },
                {
                  fieldName: "PrincipalNameKey",
                  type: BaseFormFieldType.StringField,
                  fieldPlaceHolder: "PrincipalNameKey For User Mapping",
                  fieldValue: formData['principalNameKey'],
                  onChangeValue: (val) => setFormData(prev => { return { ...prev, principalNameKey: val } })
                },
              ]}
              style={{marginTop: 24}}
        />
        <Flex justifyContent='end' style={{marginTop: 24}} >
          <CyanButton
            style={{marginLeft: 18, width: 150}}
            size='lg'
            content='Update'
            onClick={() => {
              ApiUserPoolUpdate(formData, () => {
                router.push("/userpools")
              })
            }}
          />
          <TomatoButton
            style={{marginLeft: 18, width: 150}}
            size='lg'
            content='Delete'
            onClick={() => {
              ApiUserPoolDelete(formData, () => {
                router.push('/userpools')
              })
            }}
          />
          <DarkGrayButton
            style={{marginLeft: 18, width: 150}}
            size='lg'
            content='Cancel'
            onClick={() => router.push('/userpools')}
          />
        </Flex>
    </VStack>
  )
}

export default UserPoolEditDashboard
