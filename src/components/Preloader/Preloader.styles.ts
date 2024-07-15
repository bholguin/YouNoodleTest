import { styled } from '@mui/material'

export namespace Styled {
    export const PreloadStyled = styled('div')({
        width: '110%',
        height: '110vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        background: 'rgba(255, 255, 255, 0.5)',
        zIndex: '50000',
    })
}
