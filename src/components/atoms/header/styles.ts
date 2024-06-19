import styled from 'styled-components'
import { colors } from '../../../theme/colors'
import { sizes } from '../../../theme/sizes'
import { fonts } from '../../../theme/fonts'


export const Container = styled.header`
  width: 100%;
  /* height: 15vh; */
  padding: 16px 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.border};
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 30%;
  gap: 12px;
`

export const Candidato = styled.span`
  color: ${colors.textBlue};
  font-size: ${sizes.heading};
  font-family: ${fonts.heading};
  font-weight: 500;
`

export const Logo = styled.img`
  width: 105px;
  height: 49px;
`