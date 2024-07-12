import { Components, Theme } from '@mui/material'

//also we are able to override MUI components props
/* declare module '@mui/material/Button' {
    interface ButtonPropsSizeOverrides {
        huge: true
    }
} */

//custom any MUI componet
export const components: Components<Omit<Theme, 'components'>> = {
    MuiCssBaseline: {
        styleOverrides: themeParam => ({
            a: {
                textDecoration: 'none',
                color: themeParam.palette.common.black,
            },
            li: {
                listStyle: 'none',
            },
            html: {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
            },
            body: {
                padding: '0 !important',
                margin: '0 !important',
                backgroundColor: themeParam.palette.background.default,
            },
        }),

        //this is an example where i am custom MUI buttton
        /*  MuiButton: {
             variants: [{
               props: {size: 'huge'},
               style: {
                 'fontSize': '2em',
                 'padding': '10px 36px',
               },
             }, {
               props: {size: 'large'},
               style: {
                 fontSize: '1.5em',
                 padding: '10px 28px',
               },
             }, {
               props: {size: 'medium'},
               style: {
                 fontSize: '1rem',
                 padding: '8px 20px',
               },
             }, {
               props: {size: 'small'},
               style: {
                 'fontSize': '.75rem',
                 'padding': '8px 16px',
                 'minWidth': '80px',
                 'borderRadius': '8px',
               },
             }],
             styleOverrides: {
               root: ({ownerState, theme}) => ({
                 ...(ownerState.variant === 'outlined' && {
                   'border': `solid 2px ${theme.palette.primary.main}`,
                   'backgroundColor': theme.palette.common.white,
                   '&:hover': {
                     'border': `solid 2px ${theme.palette.primary.main}`,
                   },
                   '&.Mui-disabled': {
                     'border': `solid 2px ${theme.palette.grey['500']}`,
                     'color': theme.palette.grey['500'],
                   },
                 }),
                 ...(ownerState.variant === 'contained' && {
                   '&.Mui-disabled': {
                     'backgroundColor': theme.palette.grey['500'],
                     'color': theme.palette.common.white,
                   },
                 }),
                 'borderRadius': '12px',
                 'fontWeight': '600',
                 'minWidth': '100px',
               }),
             },
           }, */
    },
}
