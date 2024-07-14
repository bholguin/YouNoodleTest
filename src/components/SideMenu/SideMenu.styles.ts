import { Box, styled } from '@mui/material'
import { Link } from 'react-router-dom'

/**
 * Breackpoints default values
 *
 * xs, extra-small: 0px
 * sm, small: 600px
 * md, medium: 900px
 * lg, large: 1200px
 * xl, extra-large: 1536px
 */

export namespace Styled {
    /**
     * using MUI we are able to write styles in this way
     * using directly theme previously configured
     *
     * Also i decided use mobile first to setup this layout
     */
    export const BoxContent = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column-reverse',
        height: '100vh',
        /**
         * breakpoint is the way to setup responsive design in MUI
         * i am using default values, but is possible custom these values
         * in theme config
         */
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
    }))

    export const BoxMenuSide = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        /**
         * i prefer using rem => 1rem = 16px
         */
        padding: theme.spacing(1),
        boxSizing: 'border-box',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'column',
            width: theme.spacing(7.5),
        },
    }))

    export const BoxContentSide = styled(Box)(({ theme }) => ({
        flex: 1,
        overflow: 'auto',
        backgroundColor: theme.palette.common.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }))

    export const LinkStyled = styled(Link)(({ theme }) => ({
        display: 'block',
        marginTop: theme.spacing(1.5),
        color: theme.palette.common.white,
        textDecoration: 'none',
        textAlign: 'center',
        width: '100%',
        backgroundColor: 'transparent',
    }))
}
