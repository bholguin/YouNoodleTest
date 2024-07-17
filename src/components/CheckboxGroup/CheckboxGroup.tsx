import {
    Checkbox,
    FormControlLabel,
    InputLabel,
    CheckboxProps,
    FormControl,
    FormHelperText,
} from '@mui/material'
import {
    Control,
    Controller,
    FieldPath,
    FieldValues,
    Path,
    PathValue,
    RegisterOptions,
    UseFormTrigger,
} from 'react-hook-form'

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

type Props<T extends FieldValues> = CheckboxGroupProps & {
    name: FieldPath<T>
    control: Control<T>
    rules?: RegisterOptions<T>
    defaultValue?: PathValue<T, Path<T>>
    trigger?: UseFormTrigger<T>
}

//prefere don't export by defaut for call it by correct name in other side
export function CheckboxGroup<T extends FieldValues>(props: Props<T>) {
    const { id, control, rules, label, options, name, trigger, defaultValue } =
        props
    const checkboxGroupId = id ?? ''
    const fieldState = control.getFieldState(name)
    return (
        <div id={checkboxGroupId}>
            <InputLabel id={checkboxGroupId} error={!!fieldState.error}>
                {label}
            </InputLabel>
            <FormControl error={!!fieldState.error}>
                <Styled.BoxStyled>
                    {options?.map((option, index) => (
                        <Controller
                            key={option.id}
                            name={`${name}.${index}.checked` as FieldPath<T>}
                            control={control}
                            rules={rules}
                            defaultValue={defaultValue}
                            shouldUnregister
                            render={({ field: { onChange, value, ref } }) => (
                                <FormControlLabel
                                    label={option.label}
                                    ref={ref}
                                    control={
                                        <Checkbox
                                            checked={value}
                                            onChange={event => {
                                                onChange(event)
                                                trigger && trigger([name])
                                            }}
                                            color={
                                                fieldState.error
                                                    ? 'error'
                                                    : 'primary'
                                            }
                                        />
                                    }
                                />
                            )}
                        />
                    ))}
                </Styled.BoxStyled>
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
            </FormControl>
        </div>
    )
}
