import { VStack } from '@chakra-ui/react'
import React from 'react'
import StringFieldForm from './StringFieldForm'
import NumberFieldForm from './NumberFieldForm'
import { BaseFormFieldType } from '@/utilities/constants'
import BooleanFieldForm from './BooleanFieldForm'

const BaseForm = ({fields, style}) => {
  return (
    <VStack style={style}>
        {fields.map((field, id) => {
            switch (field.type) {
                case BaseFormFieldType.StringField:
                    return (
                        <StringFieldForm
                            key={id}
                            fieldName={field.fieldName}
                            fieldPlaceHolder={field.fieldPlaceHolder}
                            fieldValue={field.fieldValue}
                            onChangeValue={field.onChangeValue}
                            disabled={field.disabled}
                            fieldHeight={field.fieldHeight}
                        />
                    )
                case BaseFormFieldType.NumberField:
                    return (
                        <NumberFieldForm
                            key={id}
                            fieldName={field.fieldName}
                            fieldValue={field.fieldValue}
                            onChangeValue={field.onChangeValue}
                            disabled={field.disabled}
                        />
                    )
                case BaseFormFieldType.BooleanField:
                    return (
                        <BooleanFieldForm
                            key={id}
                            fieldName={field.fieldName}
                            fieldValue={field.fieldValue}
                            onChangeValue={field.onChangeValue}
                            disabled={field.disabled}
                        />
                    )
                default:
                    return <></>
            }
        })}
    </VStack>
  )
}

export default BaseForm
