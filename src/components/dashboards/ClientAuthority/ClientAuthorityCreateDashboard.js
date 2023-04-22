import * as React from 'react';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Flex, Heading, VStack} from "@chakra-ui/react";
import BaseForm from "@/components/forms/BaseForm";
import {BaseFormFieldType} from "@/utilities/constants";
import CyanButton from "@/components/buttons/CyanButton";
import DarkGrayButton from "@/components/buttons/DarkGrayButton";
import {ApiClientAuthorityCreate} from "@/apis/clientauthorities/createclientauthority";

export const ClientAuthorityCreateDashboard = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        roleName: "",
        resourceName: ""
    })

    return (
        <VStack align='left' margin='30px'>
            <Heading as='h2' size='2xl' noOfLines={1} color='#0097B2'>Create Client Authority</Heading>
            <BaseForm
                fields={[
                    {
                        fieldName: "ClientName",
                        type: BaseFormFieldType.StringField,
                        fieldPlaceHolder: "Any Existing Client Name",
                        fieldValue: router.query["client-name"],
                        disabled: true
                    },
                    {
                        fieldName: "RoleName",
                        type: BaseFormFieldType.StringField,
                        fieldPlaceHolder: "Any Existing Role Name",
                        fieldValue: formData['roleName'],
                        onChangeValue: (val) => setFormData(prev => { return { ...prev, roleName: val } })
                    },
                    {
                        fieldName: "ResourceName",
                        type: BaseFormFieldType.StringField,
                        fieldPlaceHolder: "Any Existing ResourceName Name",
                        fieldValue: formData['resourceName'],
                        onChangeValue: (val) => setFormData(prev => { return { ...prev, resourceName: val } })
                    }
                ]}
                style={{marginTop: 24}}
            />
            <Flex justifyContent='end' style={{marginTop: 24}}>
                <CyanButton
                    style={{marginLeft: 18, width: 150}}
                    size='lg'
                    content='Add'
                    onClick={() => {
                        ApiClientAuthorityCreate({
                            clientName: router.query["client-name"],
                            roleResourceId: formData.roleName + "-" + formData.resourceName
                        }, (data) => {
                            console.log(data)
                            router.push(`/clients/edit?client-name=${router.query["client-name"]}`)
                        })
                    }}
                />
                <DarkGrayButton
                    style={{marginLeft: 18, width: 150}}
                    size='lg'
                    content='Cancel'
                    onClick={() => router.push(`/clients/edit?client-name=${router.query["client-name"]}`)}
                />
            </Flex>
        </VStack>
    );
};
