import { Button } from '@mui/material'
import { FC } from 'react'

import { TestFieldForm } from '../../components'
import { CheckboxGroup } from '../../components/CheckboxGroup'
import { Preloader } from '../../components/Preloader'

import { useCustomForm } from './Form.hook'
import { Styled } from './Form.styles'

export const FormView: FC = () => {
    const {
        control,
        onSubmit,
        isValid,
        fields,
        trigger,
        answers,
        getAnswers,
        updateAnswersMutation,
    } = useCustomForm()
    const isLoading: boolean =
        getAnswers.isFetching || updateAnswersMutation.isLoading
    return (
        <>
            <Preloader isLoading={isLoading} />
            <Styled.FormStyled onSubmit={onSubmit}>
                <TestFieldForm
                    control={control}
                    name="name"
                    label="Name"
                    variant="standard"
                />
                <TestFieldForm
                    control={control}
                    name="age"
                    label="Age"
                    variant="standard"
                />
                <TestFieldForm
                    control={control}
                    name="mail"
                    label="E-Mail"
                    variant="standard"
                />
                {/*
                    TASK 2:
                    - Integrate CheckboxGroup into the form, controlled
                    by react-hook-form.
                    - Ensure the form's initial state is properly
                    configured to kickstart the form's state cycle.
                    - Do NOT modify types of answers.interests or
                    CheckboxGroup's options. This could be detrimental
                    to your final assessment.
                */}
                <CheckboxGroup
                    control={control}
                    name="interests"
                    id="interests"
                    label="Interests"
                    options={fields}
                    trigger={trigger}
                />
                <Button
                    variant="contained"
                    type="submit"
                    disabled={!isValid || isLoading}
                >
                    {answers.name ? 'Edit' : 'Submit'}
                </Button>
            </Styled.FormStyled>
        </>
    )
}
