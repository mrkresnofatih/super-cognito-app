import * as React from 'react';
import {useRouter} from "next/router";
import {useState} from "react";
import {Flex, Heading, VStack} from "@chakra-ui/react";
import BaseForm from "@/components/forms/BaseForm";
import {BaseFormFieldType} from "@/utilities/constants";
import CyanButton from "@/components/buttons/CyanButton";
import DarkGrayButton from "@/components/buttons/DarkGrayButton";
import {ApiClientCreate} from "@/apis/clients/createclient";


export const ClientCreateDashboard = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        clientName: "",
    })
    return (
        <VStack align='left' margin='30px'>
            <Heading as='h2' size='2xl' noOfLines={1} color='#0097B2'>Create Resource</Heading>
            <BaseForm
                fields={[
                    {
                        fieldName: "ClientName",
                        type: BaseFormFieldType.StringField,
                        fieldPlaceHolder: "Any Name",
                        fieldValue: formData['name'],
                        onChangeValue: (val) => setFormData(prev => { return { ...prev, clientName: val } })
                    },
                ]}
                style={{marginTop: 24}}
            />
            <Flex justifyContent='end' style={{marginTop: 24}}>
                <CyanButton
                    style={{marginLeft: 18, width: 150}}
                    size='lg'
                    content='Save'
                    onClick={() => {
                        ApiClientCreate(formData, (data) => {
                            console.log(data)
                            router.push("/clients")
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
