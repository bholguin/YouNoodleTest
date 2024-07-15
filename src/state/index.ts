import { StateCreator, create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

import { DomainAnswers } from '../domain/types'

export type AnswersStoreProperties = DomainAnswers

type AnswersStoreActions = {
    setAnswers: (answers: DomainAnswers) => void
    getAnswers: () => AnswersStoreProperties
}

export type AnswersStore = AnswersStoreProperties & AnswersStoreActions

export const initialState: AnswersStoreProperties = {
    name: '',
    mail: '',
    age: '',
    interests: [],
}

const createStore: StateCreator<AnswersStore> = (set, get) => ({
    ...initialState,
    setAnswers: answers => set(state => ({ ...state, ...answers })),
    getAnswers: () => ({
        age: get().age,
        name: get().name,
        mail: get().mail,
        interests: get().interests,
    }),
})

export const useAnswersStore = create(
    devtools(
        persist(createStore, {
            name: 'answers',
            storage: createJSONStorage(() => sessionStorage),
        }),
    ),
)
