import { useLocation } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'

import * as S from './styles'

export const Header = () => {
  const { pathname } = useLocation()

  return (
    <S.Container>
      <S.Row>
        <S.Logo>TGL</S.Logo>

        <S.Navigation>
          <S.List>
            {pathname === '/dashboard' || (
              <S.ListItem isIsolated>
                <S.NavigationLink to='/'>Home</S.NavigationLink>
              </S.ListItem>
            )}
            <S.ListItem>
              <S.NavigationLink to='/'>Account</S.NavigationLink>
            </S.ListItem>
            <S.ListItem>
              <S.NavigationLink to='/'>
                Exit
                <AiOutlineArrowRight />
              </S.NavigationLink>
            </S.ListItem>
          </S.List>
        </S.Navigation>
      </S.Row>
    </S.Container>
  )
}
