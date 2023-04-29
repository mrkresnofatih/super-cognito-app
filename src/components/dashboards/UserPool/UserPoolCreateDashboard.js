import { Flex, Heading, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import BaseForm from '../../forms/BaseForm'
import { BaseFormFieldType } from '@/utilities/constants'
import CyanButton from '../../buttons/CyanButton'
import DarkGrayButton from '../../buttons/DarkGrayButton'
import { ApiUserPoolCreate } from '@/apis/userpools/createuserpool'
import { useRouter } from 'next/router'

const UserPoolCreateDashboard = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
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
    principalNameKey: "",
      redirectUri: "",
      applicationCallbackUrl: "",
  })

  return (
    <VStack align='left' margin='30px'>
        <Heading as='h2' size='2xl' noOfLines={1} color='#0097B2'>Create UserPool</Heading>
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
              onChangeValue: (val) => setFormData(prev => { return { ...prev, tokenLifeTime: Number(val) } })
            },
            {
              fieldName: "PrincipalNameKey",
              type: BaseFormFieldType.StringField,
              fieldPlaceHolder: "PrincipalNameKey For User Mapping",
              fieldValue: formData['principalNameKey'],
              onChangeValue: (val) => setFormData(prev => { return { ...prev, principalNameKey: val } })
            },
              {
                  fieldName: "redirectUri",
                  type: BaseFormFieldType.StringField,
                  fieldPlaceHolder: "RedirectUri of your main application",
                  fieldValue: formData['redirectUri'],
                  onChangeValue: (val) => setFormData(prev => { return { ...prev, redirectUri: val } })
              },
              {
                  fieldName: "applicationCallbackUrl",
                  type: BaseFormFieldType.StringField,
                  fieldPlaceHolder: "ApplicationCallbackUrl of your main application",
                  fieldValue: formData['applicationCallbackUrl'],
                  onChangeValue: (val) => setFormData(prev => { return { ...prev, applicationCallbackUrl: val } })
              },
          ]}
          style={{marginTop: 24}}
        />
        <Flex justifyContent='end' style={{marginTop: 24}} >
          <CyanButton
            style={{marginLeft: 18, width: 150}}
            size='lg'
            content='Save'
            onClick={() => {
              ApiUserPoolCreate(formData, (data) => {
                console.log(data)
                router.push("/userpools")
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

export default UserPoolCreateDashboard
