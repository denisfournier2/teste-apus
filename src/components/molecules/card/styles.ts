import styled from 'styled-components'
import { colors } from '../../../theme/colors'
import { sizes } from '../../../theme/sizes'
import { fonts } from '../../../theme/fonts'

type IProp = {
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

export const Container = styled.div`
  width: 179px;
  height: 107px;
  background: #F8E3D0;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ValueContainer = styled.div<IProp>`
  min-width: 50px;
  min-height: 50px;
  max-width: 159px;
  max-height: 87px;
  padding: 0 8px;
  background: #F9D4B2;
  color: #E35417;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${prop => prop.size > 2 ? sizes.body : sizes.cardTitle};
`

export const Title = styled.span`
  font-size: ${sizes.caption};
  color: ${colors.text};
`
