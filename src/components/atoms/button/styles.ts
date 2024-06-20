import styled from 'styled-components'
import { colors } from '../../../theme/colors'
import { sizes } from '../../../theme/sizes'
import { fonts } from '../../../theme/fonts'

type IProps = {
  ativo?: boolean
}

export const Button = styled.button<IProps>`
  padding: 6px 22px;
  border: 1px solid ${colors.backgroundBlue};
  border-radius: 12px;
  background: ${prop => prop.ativo ? colors.active : colors.backgroundBlue};
  color: ${colors.white};
  font-size: ${sizes.subtitle};
  font-weight: 600;
  font-family: ${fonts.body};
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  &:hover {
    background: ${colors.active};
    transition: 0.5s ease-in-out;
  }
`