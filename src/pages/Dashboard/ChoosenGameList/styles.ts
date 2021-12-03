import styled from 'styled-components'

import { IoTrashOutline } from 'react-icons/io5'

export const Container = styled.ul`
  max-height: 20.125rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: auto;
`

export const ChoosenGameItem = styled.li`
  display: flex;
  height: 5.375rem;
`

export const TrashIcon = styled(IoTrashOutline)`
  align-self: center;
  margin-right: 0.9rem;
  cursor: pointer;
`

export const VerticalLine = styled.span`
  display: inline-block;
  width: 7px;
  height: 100%;
  border-radius: 100px 0 0 100px;
  background-color: #7F3992;
`

export const Content = styled.div`
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ChoosenNumbers = styled.strong`
  display: block;
  margin-bottom: 0.375rem;
  font-size: 0.9375rem;
  font-style: italic;
  line-height: 1.25rem;
  color: #868686;
`

export const PurchaseRecord = styled.p`
  font-size: 1rem;
  color: #868686;
  display: flex;
  gap: 0.875rem;
`

export const GameName = styled.strong`
  font-style: italic;
  color: #7F3992;
`
