/* eslint-disable */
import { render, screen, waitFor, renderHook } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { useGetAnswers } from '../../api-hooks/useGetAnswers'

import { FormView } from './Form.view'

const queryClient = new QueryClient()

jest.mock('../../api-hooks/useGetAnswers')

const mockUseGetAnswers = jest.mocked(useGetAnswers)

const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

const component = <FormView />
describe('form view test', () => {
    beforeEach(() => {
        mockUseGetAnswers.mockImplementation(() => ({
            dataUpdatedAt: 1721173201773,
            error: null,
            errorUpdateCount: 0,
            errorUpdatedAt: 0,
            failureCount: 0,
            isError: false,
            isFetched: true,
            isFetchedAfterMount: true,
            isFetching: true,
            isIdle: false,
            isLoading: false,
            isLoadingError: false,
            isPlaceholderData: false,
            isPreviousData: false,
            isRefetchError: false,
            isRefetching: true,
            isStale: true,
            isSuccess: true,
            status: 'success',
            data: {
                data: {
                    age: '',
                    email: '',
                    username: '',
                    interests: [],
                },
                status: 200,
            },
            refetch: () => new Promise(() => {}),
            remove: () => {
                return
            },
        }))
    })

    it('render form view', async () => {
        render(component, { wrapper: wrapper })

        const { result } = renderHook(() => useGetAnswers(), {
            wrapper: wrapper,
        })

        await waitFor(() => expect(result.current.isSuccess).toBeTruthy())

        const button = screen.getByRole('button')
        expect(button).toBeDisabled()

        const inputs = screen.getAllByRole('textbox')

        const user = userEvent.setup()
        user.type(inputs[0], 'Brayhan{space}Holguin')
        user.type(inputs[1], '45')
        user.type(inputs[2], 'bholguin@gmail.com')
    })
})
