import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

import { useUpdateAnswers } from '../../api-hooks/useUpdateAnswers'
import { CustomCheckboxProps } from '../../components'
import { buildInterestOptions, getInterestList } from '../../domain/utils'
import { useAnswersStore } from '../../state'

import { validationSchema } from './Form.config'

export const useCustomForm = () => {
    const updateAnswersMutation = useUpdateAnswers()
    const answers = useAnswersStore(state => state.getAnswers())

    const {
        control,
        handleSubmit,
        formState: { isValid },
        reset,
        trigger,
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
        defaultValues: {
            age: '',
            mail: '',
            name: '',
            interests: [],
        },
    })

    const { fields, replace } = useFieldArray({
        control,
        name: 'interests',
    })

    const onSubmit = handleSubmit(formData => {
        updateAnswersMutation.mutate({
            name: formData.name,
            mail: formData.mail,
            age: formData.age,
            interests: buildInterestOptions(
                formData.interests as Array<CustomCheckboxProps>,
            ),
        })
    })

    useEffect(() => {
        reset({
            age: answers.age,
            mail: answers.mail,
            name: answers.name,
        })
    }, [answers.age, answers.mail, answers.name, reset])

    useEffect(() => {
        replace(getInterestList(answers.interests))
    }, [answers.interests, replace, getInterestList])

    return {
        control,
        isValid,
        fields,
        answers,
        onSubmit,
        trigger,
        updateAnswersMutation,
    }
}
