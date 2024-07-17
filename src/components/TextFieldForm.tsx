import { TextField, TextFieldProps } from '@mui/material'
import { ReactElement } from 'react'
import {
    Control,
    Controller,
    FieldPath,
    FieldValues,
    Path,
    PathValue,
    RegisterOptions,
} from 'react-hook-form'

type Props<T extends FieldValues> = TextFieldProps & {
    name: FieldPath<T>
    control: Control<T>
    rules?: RegisterOptions<T>
    defaultValue?: PathValue<T, Path<T>>
}

/**
 * The `TestFieldForm` is a React Hook Form wrapper for `TestField`
 * @param props
 * @returns ReactElement
 */
export function TestFieldForm<T extends FieldValues>(
    props: Props<T>,
): ReactElement {
    const { control, name, defaultValue, rules, label, variant } = props
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({
                field: { onChange, value, ref, name },
                fieldState: { error },
            }) => (
                <TextField
                    label={label}
                    ref={ref}
                    name={name}
                    variant={variant}
                    onChange={onChange}
                    value={value}
                    helperText={error?.message || ''}
                    error={Boolean(error?.message)}
                />
            )}
        />
    )
}
