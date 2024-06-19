import styled from 'styled-components'
import { colors } from '../../../theme/colors'
import { sizes } from '../../../theme/sizes'
import { fonts } from '../../../theme/fonts'

export const SearchBar = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 0 5%;
  padding: 32px 0;
`

export const SearchPill = styled.div`
  display: flex;
  align-items: center;

  font-size: ${sizes.body};
  border: 1px solid ${colors.border};
  background-color: ${colors.tableTitle};
  gap: 12px;
  border-radius: 99px;
  padding: 2px;
  font-family: ${fonts.body};
  color: ${colors.black};
  font-weight: 500;
`

export const SearchPillEscola = styled.div`
  background-color: ${colors.backgroundBlue};
  
  border: 1px solid ${colors.white};
  border-radius: 99px;
  padding: 6px 12px;
  color: ${colors.white};
  font-size: ${sizes.table};
`

export const Label = styled.div`
  margin-left: 12px;
`