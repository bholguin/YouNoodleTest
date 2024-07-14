import {
    Box,
    Checkbox,
    FormControlLabel,
    InputLabel,
    CheckboxProps,
    FormHelperText,
    FormControl,
} from '@mui/material'
import { FC } from 'react'

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

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
    id,
    label,
    helperText,
    error,
    options = [],
    onChange = () => null,
}) => {
    const internalOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const changedOptions = options.map(option =>
            option.id === event.target.id
                ? { ...option, checked: event.target.checked }
                : option,
        )
        onChange(changedOptions)
    }

    const checkboxGroupId = id ?? ''

    return (
        <div id={checkboxGroupId} className="checkbox-group">
            <InputLabel id={checkboxGroupId} error={error}>
                {label}
            </InputLabel>
            <FormControl error={error}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
                </Box>
                <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
        </div>
    )
}

export default CheckboxGroup
