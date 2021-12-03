import { RecentGamesList } from '../RecentGamesList'

import * as S from './styles'

export const RecentGames = () => {
  return (
    <S.Container>
      <S.Header>
        <S.H2>Recent games</S.H2>
        <S.FiltersContainer>
          <S.Strong>Filters</S.Strong>
          <S.NavigationContainer>
            <S.GameNavigationLink to='/home/lotofacil'>
              Lotofácil
            </S.GameNavigationLink>
            <S.GameNavigationLink to='/home/megasena'>
              Lotofácil
            </S.GameNavigationLink>
            <S.GameNavigationLink to='/home/lotomania'>
              Lotomania
            </S.GameNavigationLink>
          </S.NavigationContainer>
        </S.FiltersContainer>
      </S.Header>
      {/* Lista de jogos  */}
      <RecentGamesList />
    </S.Container>
  )
}
