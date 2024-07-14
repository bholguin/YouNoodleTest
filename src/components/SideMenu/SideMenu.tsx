import { FC, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { AppRoutes } from '../../domain/routes'

import { Styled } from './SideMenu.styles'

type Props = {
    routes: AppRoutes
    children?: React.ReactNode
}

export const SideMenu: FC<Props> = ({ children, routes }) => {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        navigate(routes.FORM)
    }, [])

    return (
        <Styled.BoxContent>
            <Styled.BoxMenuSide>
                <Styled.LinkStyled
                    to={routes.FORM}
                    active={location.pathname === routes.FORM}
                >
                    Form
                </Styled.LinkStyled>
                <Styled.LinkStyled
                    to={routes.TABLE}
                    active={location.pathname === routes.TABLE}
                >
                    Table
                </Styled.LinkStyled>
            </Styled.BoxMenuSide>
            <Styled.BoxContentSide>{children}</Styled.BoxContentSide>
        </Styled.BoxContent>
    )
}
