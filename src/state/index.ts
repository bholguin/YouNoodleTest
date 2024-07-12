import { StateCreator, create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

import { CustomCheckboxProps } from '../components/CheckboxGroup'
import { DomainAnswers, InterestsOptions } from '../domain/types'

export type AnswersStoreProperties = DomainAnswers & InterestsOptions

type AnswersStoreActions = {
    setAnswers: (answers: DomainAnswers) => void
    getAnswers: () => AnswersStoreProperties
    setInterestOptions: (options: Array<CustomCheckboxProps>) => void
}

export type AnswersStore = AnswersStoreProperties & AnswersStoreActions

export const initialState: AnswersStoreProperties = {
    name: '',
    mail: '',
    age: '',
    interests: [],
    interestOptions: [],
}

const createStore: StateCreator<AnswersStore> = (set, get) => ({
    ...initialState,
    setAnswers: answers => set(state => ({ ...state, ...answers })),
    getAnswers: () => ({
        age: get().age,
        name: get().name,
        mail: get().mail,
        interests: get().interests,
        interestOptions: [
            ...get().interests.map(item => {
                const option = Object.entries(item).map(([k, v]) => ({
                    id: k,
                    label: v.label,
                    checked: v.isChecked,
                }))[0]
                return option
            }),
        ],
    }),
    setInterestOptions: options =>
        set(state => ({
            ...state,
            //interestOptions: options,
            interests: options.map(item => ({
                [item.id]: {
                    isChecked: !!item.checked,
                    label: item.label as string,
                },
            })),
        })),
})

export const useAnswersStore = create(
    devtools(
        persist(createStore, {
            name: 'answers',
            storage: createJSONStorage(() => sessionStorage),
        }),
    ),
)
