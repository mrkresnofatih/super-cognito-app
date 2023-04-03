import * as React from 'react';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {ApiClientGet} from "@/apis/clients/getclient";
import {Flex, Heading, VStack} from "@chakra-ui/react";
import BaseForm from "@/components/forms/BaseForm";
import {BaseFormFieldType} from "@/utilities/constants";
import CyanButton from "@/components/buttons/CyanButton";
import TomatoButton from "@/components/buttons/TomatoButton";
import DarkGrayButton from "@/components/buttons/DarkGrayButton";
import {ApiClientDelete} from "@/apis/clients/deleteclient";
import {ApiClientRotate} from "@/apis/clients/rotateclient";


export const ClientEditDashboard = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        id: "",
        clientName: "",
        clientSecret: ""
    })

    useEffect(() => {
        if (router.query["client-name"]) {
            ApiClientGet({clientName: router.query["client-name"]}, (response) => {
                setFormData(response.data.data)
            })
        }
    }, [router.query["client-name"]])
    return (
        <VStack align='left' margin='30px'>
            <Heading as='h2' size='2xl' noOfLines={1} color='#0097B2'>Update Client</Heading>
            <BaseForm
                fields={[
                    {
                        fieldName: "Name",
                        type: BaseFormFieldType.StringField,
                        fieldPlaceHolder: "Any Name",
                        disabled: true,
                        fieldValue: formData['clientName'],
                        onChangeValue: (val) => setFormData(prev => { return { ...prev, name: val } })
                    },
                    {
                        fieldName: "Secret",
                        type: BaseFormFieldType.StringField,
                        fieldPlaceHolder: "Any Description",
                        fieldValue: formData['clientSecret'],
                        disabled: true,
                        onChangeValue: (val) => setFormData(prev => { return { ...prev, description: val } })
                    },
                ]}
                style={{marginTop: 24}}
            />
            <Flex justifyContent='end' style={{marginTop: 24}} >
                <CyanButton
                    style={{marginLeft: 18, width: 150}}
                    size='lg'
                    content='Rotate'
                    onClick={() => {
                        ApiClientRotate(formData, () => {
                            router.push("/clients")
                        })
                    }}
                />
                <TomatoButton
                    style={{marginLeft: 18, width: 150}}
                    size='lg'
                    content='Delete'
                    onClick={() => {
                        ApiClientDelete(formData, () => {
                            router.push('/clients')
                        })
                    }}
                />
                <DarkGrayButton
                    style={{marginLeft: 18, width: 150}}
                    size='lg'
                    content='Cancel'
                    onClick={() => router.push('/clients')}
                />
            </Flex>
        </VStack>
    );
};
