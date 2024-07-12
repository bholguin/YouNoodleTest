import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { useUpdateAnswers } from '../../api-hooks/useUpdateAnswers'
import { CustomCheckboxProps } from '../../components'
import { buildInterestOptions } from '../../domain/utils'
import { useAnswersStore } from '../../state'

import { validationSchema } from './Form.config'

export const useCustomForm = () => {
    const updateAnswersMutation = useUpdateAnswers()
    const answers = useAnswersStore(state => state.getAnswers())
    const interestOptions = answers.interestOptions

    const setInterestsOptions = useAnswersStore(
        store => store.setInterestOptions,
    )

    const {
        control,
        handleSubmit,
        formState: { isValid },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(validationSchema),
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

    return {
        control,
        isValid,
        answers,
        interestOptions,
        setInterestsOptions,
        onSubmit,
    }
}
