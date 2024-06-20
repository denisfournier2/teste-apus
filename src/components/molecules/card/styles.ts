import styled from 'styled-components'
import { colors, card } from '../../../theme/colors'
import { sizes } from '../../../theme/sizes'
import { fonts } from '../../../theme/fonts'

interface Color {
  index: number
}

interface Prop extends Color {
  size: number
}

export const Card = styled.div`
  width: 179px;
  height: 159px;
  -webkit-box-shadow: 0px 4px 7px 1px rgba(201,201,201,1);
  -moz-box-shadow: 0px 4px 7px 1px rgba(201,201,201,1);
  box-shadow: 0px 4px 7px 1px rgba(201,201,201,1);

  border-radius: 15px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  font-family: ${fonts.heading};
  font-weight: 600;
  /* color: ${colors.text}; */
`

export const Container = styled.div<Color>`
  width: 179px;
  height: 107px;
  background: ${prop => card[prop.index].fundo};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ValueContainer = styled.div<Prop>`
  background: ${prop => card[prop.index].fundoNumero};
  color: ${prop => card[prop.index].numero};

  min-width: 50px;
  min-height: 50px;
  max-width: 159px;
  max-height: 87px;
  padding: 8px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${prop => prop.size > 10 ? sizes.body : prop.size > 2 ? sizes.heading : sizes.cardTitle};
`

export const Title = styled.span`
  font-size: ${sizes.caption};
  color: ${colors.text};
`
