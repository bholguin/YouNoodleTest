import { CustomCheckboxProps } from '../components/CheckboxGroup'

export type DomainOption = {
    [key: number]: {
        isChecked: boolean
        label: string
    }
}

export type DomainAnswerValue = string | Array<DomainOption>

export type InterestsOptions = {
    interestOptions?: Array<CustomCheckboxProps>
}

export type DomainAnswers = {
    name: string
    mail: string
    age: string
    interests: Array<DomainOption>
} & InterestsOptions
