import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Box, styled, Table } from '@mui/material'

export namespace Styled {
    export const InfoContent = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(1),
    }))

    export const UserInfoContent = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(0.5),
    }))

    export const ActionContent = styled(Box)(({ theme }) => ({
        display: 'flex',
        gap: theme.spacing(1),
    }))

    export const ActionIconWaraper = styled('span')({
        cursor: 'pointer',
    })

    export const TableStyled = styled(Table)({
        width: '100%',
    })

    export const CheckCircleIconStyled = styled(CheckCircleIcon)(
        ({ theme }) => ({
            color: theme.palette.success.main,
        }),
    )

    export const CancelIconStyled = styled(CancelIcon)(({ theme }) => ({
        color: theme.palette.error.main,
    }))
}
