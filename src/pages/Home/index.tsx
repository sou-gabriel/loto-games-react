import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'

import { Header } from 'components/Header'
import { MainContent } from 'components/MainContent'
import { RecentGamesList } from 'components/RecentGamesList'
import {
  Container,
  NavigationLink,
  Section,
  Heading,
  Title,
  FiltersContainer,
  Subtitle,
} from './styles'

export const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const userToken = localStorage.getItem('token')

    if (!userToken) {
      navigate('/login', { replace: true })
    }
  }, [navigate])

  return (
    <>
      <Header />
      <MainContent>
        <Container>
          <Section>
            <Heading>
              <Title>Recent games</Title>
              <FiltersContainer>
                <Subtitle>Filters</Subtitle>
              </FiltersContainer>
            </Heading>
            <RecentGamesList />
          </Section>

          <NavigationLink to='/dashboard'>
            New Bet <AiOutlineArrowRight />
          </NavigationLink>
        </Container>
      </MainContent>
    </>
  )
}
