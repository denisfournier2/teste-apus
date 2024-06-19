import styled from 'styled-components'
import { colors } from '../../../theme/colors'
import { sizes } from '../../../theme/sizes'
import { fonts } from '../../../theme/fonts'

export const Button = styled.button`
  padding: 6px 22px;
  border: 1px solid ${colors.backgroundBlue};
  border-radius: 12px;
  background: ${colors.backgroundBlue};
  color: ${colors.white};
  font-size: ${sizes.subtitle};
  font-weight: 600;
  font-family: ${fonts.body};
  cursor: pointer;

  &:hover {
    background: ${colors.active};
    transition: 0.5s ease-in-out;
  }
`