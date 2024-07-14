import {
    Checkbox,
    FormControlLabel,
    InputLabel,
    CheckboxProps,
    FormHelperText,
    FormControl,
} from '@mui/material'
import { ChangeEvent, FC } from 'react'

import { Styled } from './CheckboxGroup.styles'

export type CustomCheckboxProps = CheckboxProps & {
    id: string
    label?: string
}

export type CheckboxGroupProps = Partial<{
    id: string
    label: string
    helperText: string
    error: boolean
    options: Array<CustomCheckboxProps>
    onChange: (options: Array<CustomCheckboxProps>) => void
}>

//prefere don't export by defaut for call it by correct name in other side
export const CheckboxGroup: FC<CheckboxGroupProps> = ({
    id,
    label,
    helperText,
    error,
    options = [],
    onChange = () => null,
}) => {
    const internalOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const changedOptions = options.map(option =>
            option.id === event.target.id
                ? { ...option, checked: event.target.checked }
                : option,
        )
        onChange(changedOptions)
    }

    const checkboxGroupId = id ?? ''

    return (
        <div id={checkboxGroupId}>
            <InputLabel id={checkboxGroupId} error={error}>
                {label}
            </InputLabel>
            <FormControl error={error}>
                <Styled.BoxStyled>
                    {options.map(option => {
                        const checkboxId = option.id || ''
                        return (
                            <FormControlLabel
                                key={checkboxId}
                                label={option.label}
                                control={
                                    <Checkbox
                                        {...option}
                                        id={checkboxId}
                                        checked={option.checked}
                                        onChange={internalOnChange}
                                        color={error ? 'error' : 'primary'}
                                    />
                                }
                            />
                        )
                    })}
                </Styled.BoxStyled>
                <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
        </div>
    )
}
