import { AiOutlineArrowRight } from 'react-icons/ai'

import * as S from './styles'

interface HeaderProps {
  isItToDisplayTheHomeLink: boolean
}

export const Header = ({ isItToDisplayTheHomeLink }: HeaderProps) => {
  return (
    <S.Container>
      <S.Row>
        <S.Logo>TGL</S.Logo>

        <S.Navigation>
          <S.List>
            {isItToDisplayTheHomeLink && (
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
