import { styled } from '@mui/material'

export namespace Styled {
    export const FormStyled = styled('form')(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        gap: theme.spacing(3),
    }))
}
