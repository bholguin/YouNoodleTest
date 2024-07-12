import { createTheme } from '@mui/material'

import { components } from './components'
import { palette } from './palette'
import { spacing } from './spacing'
import { typography } from './typography'

export * from './components'
export * from './typography'
export * from './spacing'
export * from './palette'

export const theme = createTheme({
    components: components,
    typography: typography,
    palette: palette,
    spacing: spacing,
})
