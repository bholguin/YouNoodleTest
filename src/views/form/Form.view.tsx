import { Box, Button } from '@mui/material'
import React, { FC } from 'react'

import { CheckboxGroupForm } from '../../components/CheckboxGroupForm'
import { TestFieldForm } from '../../components/TextFieldForm'

import { useCustomForm } from './Form.hook'

export const FormView: FC = () => {
    const {
        control,
        answers,
        interestOptions,
        isValid,
        onSubmit,
        setInterestsOptions,
    } = useCustomForm()

    return (
        <div id="form-view">
            <Box
                display="flex"
                gap={4}
                sx={{ flexDirection: 'column', width: '300px' }}
            >
                <TestFieldForm
                    control={control}
                    name="name"
                    defaultValue={answers.name}
                    label="Name"
                    variant="standard"
                />
                <TestFieldForm
                    control={control}
                    name="age"
                    defaultValue={answers.age}
                    label="Age"
                    variant="standard"
                />
                <TestFieldForm
                    control={control}
                    name="mail"
                    defaultValue={answers.mail}
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
                <CheckboxGroupForm
                    name="interests"
                    id="interests"
                    control={control}
                    defaultValue={interestOptions}
                    options={interestOptions}
                    onChange={setInterestsOptions}
                />
                <Button
                    variant="contained"
                    disabled={!isValid}
                    onClick={onSubmit}
                >
                    Submit
                </Button>
            </Box>
        </div>
    )
}
