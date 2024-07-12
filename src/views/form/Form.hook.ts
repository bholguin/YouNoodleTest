import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { useAnswersStore } from '../../state'

import { validationSchema } from './Form.config'

export const useCustomForm = () => {
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

    //const updateAnswersMutation = useUpdateAnswers()

    const onSubmit = handleSubmit(formData => {
        console.log(formData)
        /* updateAnswersMutation.mutate({
            name: formData.name,
            mail: formData.mail,
            age: formData.age,
            interests: [],
        }) */
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
