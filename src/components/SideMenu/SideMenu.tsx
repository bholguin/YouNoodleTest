import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { AppRoutes } from '../../domain/routes'

import { Styled } from './SideMenu.styles'

type SideMenuProps = {
    routes: AppRoutes
    children?: React.ReactNode
}

export const SideMenu: FC<SideMenuProps> = ({ children, routes }) => {
    const navigate = useNavigate()

    React.useEffect(() => {
        navigate(routes.FORM)
    }, [])

    return (
        <Styled.BoxContent>
            <Styled.BoxMenuSide>
                <Styled.LinkStyled to={routes.FORM}>Form</Styled.LinkStyled>
                <Styled.LinkStyled to={routes.TABLE}>Table</Styled.LinkStyled>
            </Styled.BoxMenuSide>
            <Styled.BoxContentSide>{children}</Styled.BoxContentSide>
        </Styled.BoxContent>
    )
}
