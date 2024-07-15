import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import {
    Button,
    Paper,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import { FC, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { useResetAnswers } from '../../api-hooks/useResetAnswers'
import { Preloader } from '../../components/Preloader'
import { APP_ROUTES } from '../../domain/routes'
import { getInterestList } from '../../domain/utils'
import { useAnswersStore } from '../../state'

import { Styled } from './Table.styles'

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

export const TableView: FC = () => {
    const resetAnswersMutation = useResetAnswers()
    const answers = useAnswersStore(state => state.getAnswers())

    const navigate = useNavigate()

    const goToForm = useCallback(() => {
        navigate(APP_ROUTES.FORM)
    }, [navigate])

    const resetAnswers = useCallback(() => {
        resetAnswersMutation.mutate()
    }, [resetAnswersMutation])

    return answers.name ? (
        <>
            <Preloader isLoading={resetAnswersMutation.isLoading} />
            <TableContainer component={Paper}>
                <Styled.InfoContent>
                    <Styled.UserInfoContent>
                        <Styled.ActionContent>
                            <span>Name:</span>
                            <span>{answers.name}</span>
                        </Styled.ActionContent>
                        <Styled.ActionContent>
                            <span>Age:</span>
                            <span>{answers.age}</span>
                        </Styled.ActionContent>
                        <Styled.ActionContent>
                            <span>Mail:</span>
                            <span>{answers.mail}</span>
                        </Styled.ActionContent>
                    </Styled.UserInfoContent>
                    <Styled.ActionContent>
                        <Styled.ActionIconWaraper onClick={goToForm}>
                            <EditIcon />
                        </Styled.ActionIconWaraper>
                        <Styled.ActionIconWaraper onClick={resetAnswers}>
                            <DeleteIcon />
                        </Styled.ActionIconWaraper>
                    </Styled.ActionContent>
                </Styled.InfoContent>
                <Styled.TableStyled>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Questions</TableCell>
                            <TableCell align="center">Answers</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getInterestList(answers.interests)?.map(item => (
                            <TableRow key={item.id}>
                                <TableCell align="center">
                                    {item.label}
                                </TableCell>
                                <TableCell align="center">
                                    {item.checked ? (
                                        <Styled.CheckCircleIconStyled />
                                    ) : (
                                        <Styled.CancelIconStyled />
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Styled.TableStyled>
            </TableContainer>
        </>
    ) : (
        <Button size="large" variant="contained" onClick={goToForm}>
            Fill Form
        </Button>
    )
}
