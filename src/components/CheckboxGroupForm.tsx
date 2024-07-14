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

import { CheckboxGroup, CheckboxGroupProps } from './CheckboxGroup'

type Props<T extends FieldValues> = CheckboxGroupProps & {
    name: FieldPath<T>
    control: Control<T>
    rules?: RegisterOptions<T>
    defaultValue?: PathValue<T, Path<T>>
}

/**
 * The `CheckboxGroupForm` is a React Hook Form wrapper for `CheckboxGroup`
 * @param props
 * @returns ReactElement
 */
export function CheckboxGroupForm<T extends FieldValues>(
    props: Props<T>,
): ReactElement {
    const { control, name, defaultValue, rules, label, options, id } = props
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field: { onChange }, fieldState: { error } }) => (
                <CheckboxGroup
                    id={id}
                    label={label}
                    options={options}
                    error={!!error?.message}
                    helperText={error?.message}
                    onChange={event => {
                        if (props.onChange) props.onChange(event)
                        onChange(event)
                    }}
                />
            )}
        />
    )
}
