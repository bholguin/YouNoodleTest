import { CircularProgress } from '@mui/material'
import { FC } from 'react'

import { Styled } from './Preloader.styles'

type Props = {
    isLoading: boolean
}

export const Preloader: FC<Props> = ({ isLoading }) =>
    isLoading ? (
        <Styled.PreloadStyled>
            <CircularProgress role="spinner" />
        </Styled.PreloadStyled>
    ) : null
