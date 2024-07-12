import { CustomCheckboxProps } from '../components'

export const buildInterestOptions = (options: Array<CustomCheckboxProps>) =>
    options.map(item => ({
        [item.id]: {
            isChecked: !!item.checked,
            label: item.label as string,
        },
    }))
