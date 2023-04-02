import * as React from 'react';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Flex, Heading, VStack} from "@chakra-ui/react";
import BaseForm from "@/components/forms/BaseForm";
import {BaseFormFieldType} from "@/utilities/constants";
import CyanButton from "@/components/buttons/CyanButton";
import TomatoButton from "@/components/buttons/TomatoButton";
import DarkGrayButton from "@/components/buttons/DarkGrayButton";
import {ApiPermissionUpdate} from "@/apis/permissions/editpermission";
import {ApiPermissionDelete} from "@/apis/permissions/deletepermission";
import {ApiPermissionGet} from "@/apis/permissions/getpermission";

export const PermissionEditDashboard = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        description: ""
    })

    useEffect(() => {
        if (router.query["permission-name"]) {
            ApiPermissionGet({name: router.query["permission-name"]}, (response) => {
                setFormData(response.data.data)
            })
        }
    }, [router.query["permission-name"]])

    return (
        <VStack align='left' margin='30px'>
            <Heading as='h2' size='2xl' noOfLines={1} color='#0097B2'>Update Permission</Heading>
            <BaseForm
                fields={[
                    {
                        fieldName: "Name",
                        type: BaseFormFieldType.StringField,
                        fieldPlaceHolder: "Any Name",
                        disabled: true,
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
                ]}
                style={{marginTop: 24}}
            />
            <Flex justifyContent='end' style={{marginTop: 24}} >
                <CyanButton
                    style={{marginLeft: 18, width: 150}}
                    size='lg'
                    content='Update'
                    onClick={() => {
                        ApiPermissionUpdate(formData, () => {
                            router.push("/permissions")
                        })
                    }}
                />
                <TomatoButton
                    style={{marginLeft: 18, width: 150}}
                    size='lg'
                    content='Delete'
                    onClick={() => {
                        ApiPermissionDelete(formData, () => {
                            router.push('/permissions')
                        })
                    }}
                />
                <DarkGrayButton
                    style={{marginLeft: 18, width: 150}}
                    size='lg'
                    content='Cancel'
                    onClick={() => router.push('/permissions')}
                />
            </Flex>
        </VStack>
    );
};
