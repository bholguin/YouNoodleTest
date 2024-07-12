import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { useResetAnswers } from '../api-hooks/useResetAnswers'
import { APP_ROUTES } from '../domain/routes'
import { useAnswersStore } from '../state'

// TASK 4:
// - Implement the table from this mockup (public/table_view_mockup.png).
// - Display answers from store in table.
// - Each row of the table body should have the name of the answer
// and its value.
// - Add the edit and delete buttons on top of the table.

// TASK 5:
// - Redirect to Form view on edit button click.

// TASK 6:
// - Invoke useResetAnswers hook on delete button click.
// - See useResetAnswers hook for more guidelines.

export const TableView = () => {
    const resetAnswersMutation = useResetAnswers()
    const answers = useAnswersStore(state => state.getAnswers())

    const navigate = useNavigate()

    const goToForm = useCallback(() => {
        navigate(APP_ROUTES.FORM)
    }, [navigate])

    const resetAnswers = useCallback(() => {
        resetAnswersMutation.mutate()
    }, [resetAnswersMutation])

    return (
        <TableContainer
            component={Paper}
            style={{
                width: '100%',
                margin: '1rem',
            }}
        >
            <section
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '1rem',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '.5rem',
                    }}
                >
                    <span>{answers.name}</span>
                    <span>{answers.age}</span>
                    <span>{answers.mail}</span>
                </div>
                <div>
                    <span onClick={goToForm}>
                        {' '}
                        <EditIcon />
                    </span>
                    <span onClick={resetAnswers}>
                        <DeleteIcon />
                    </span>
                </div>
            </section>
            <Table
                style={{
                    width: '100%',
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Questions</TableCell>
                        <TableCell align="center">Answers</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {answers.interestOptions?.map(item => (
                        <TableRow key={item.id}>
                            <TableCell align="center">{item.label}</TableCell>
                            <TableCell align="center">
                                {item.checked ? (
                                    <CheckCircleIcon
                                        style={{ color: 'green' }}
                                    />
                                ) : (
                                    <CancelIcon style={{ color: 'red' }} />
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
