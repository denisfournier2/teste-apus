import styled from 'styled-components'
import { colors } from '../../theme/colors'
import { sizes } from '../../theme/sizes'
import { fonts } from '../../theme/fonts'

export const Title = styled.h1`
  color: ${colors.text};
  font-size: ${sizes.title};
  font-family: ${fonts.heading};
  font-weight: 700;
  width: 90%;
`

export const Subtitle = styled.h3`
  color: ${colors.text};
  font-size: ${sizes.subtitle};
  font-family: ${fonts.body};
  font-weight: 700;
  width: 90%;
`

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  justify-content: space-between;
  gap: 36px;
  padding: 36px 0;
`
