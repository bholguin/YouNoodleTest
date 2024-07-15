import { CustomCheckboxProps } from '../components'

import { DomainOption } from './types'

export const buildInterestOptions = (
    options: Array<CustomCheckboxProps>,
): Array<DomainOption> =>
    options.map(item => ({
        [item.id]: {
            isChecked: !!item.checked,
            label: item.label as string,
        },
    }))

export const getInterestList = (
    interests: DomainOption[],
): Array<CustomCheckboxProps> =>
    interests
        ? interests.map(item => {
              const option = Object.entries(item).map(([k, v]) => ({
                  id: k,
                  label: v.label,
                  checked: v.isChecked,
              }))[0]
              return option
          })
        : []
