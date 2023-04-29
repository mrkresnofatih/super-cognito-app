import * as React from 'react';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {ApiUserGet} from "@/apis/users/getuser";
import {Flex, Heading, VStack} from "@chakra-ui/react";
import BaseForm from "@/components/forms/BaseForm";
import {BaseFormFieldType} from "@/utilities/constants";
import TomatoButton from "@/components/buttons/TomatoButton";
import DarkGrayButton from "@/components/buttons/DarkGrayButton";
import {ApiUserDelete} from "@/apis/users/deleteuser";

export const UserEditDashboard = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        id: "",
        principalName: "",
        userPoolId: "",
        userAttributes: []
    })

    useEffect(() => {
        if (router.query["principalname"]) {
            ApiUserGet({principalName: router.query["principalname"]}, (response) => {
                setFormData(response.data.data)
            })
        }
    }, [router.query["principalname"]])

    return (
        <VStack align='left' margin='30px'>
            <Heading as='h2' size='2xl' noOfLines={1} color='#0097B2'>Update User</Heading>
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
                        fieldName: "PrincipalName",
                        type: BaseFormFieldType.StringField,
                        fieldPlaceHolder: "Principal Name of user",
                        fieldValue: formData['principalName'],
                        disabled: true,
                        onChangeValue: (val) => setFormData(prev => { return { ...prev, principalName: val } })
                    },
                    {
                        fieldName: "UserPoolId",
                        type: BaseFormFieldType.StringField,
                        fieldPlaceHolder: "User Pool Id",
                        fieldValue: formData['userPoolId'],
                        disabled: true,
                        onChangeValue: (val) => setFormData(prev => { return { ...prev, userPoolId: val } })
                    },
                    {
                        fieldName: "Attributes",
                        type: BaseFormFieldType.StringField,
                        fieldPlaceHolder: "User Attributes",
                        fieldValue: JSON.stringify(formData.userAttributes.map(s => {
                            return {
                                [s.key]: s.value
                            }
                        })),
                        disabled: true,
                        fieldHeight: 200,
                        onChangeValue: (val) => setFormData(prev => { return { ...prev, userPoolId: val } })
                    },
                ]}
                style={{marginTop: 24}}
            />
            <Flex justifyContent='end' style={{marginTop: 24}} >
                <TomatoButton
                    style={{marginLeft: 18, width: 150}}
                    size='lg'
                    content='Delete'
                    onClick={() => {
                        ApiUserDelete(formData, () => {
                            router.push('/users')
                        })
                    }}
                />
                <DarkGrayButton
                    style={{marginLeft: 18, width: 150}}
                    size='lg'
                    content='Cancel'
                    onClick={() => router.push('/users')}
                />
            </Flex>
        </VStack>
    );
};
