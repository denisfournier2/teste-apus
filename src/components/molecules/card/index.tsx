import * as S from './styles';

export const Card = (props: {color: number, info: string, value: string | boolean | number}) => {
  const tamanho = `${props.value}`.length

  return(
    <S.Card>
        <S.Container index={props.color}>
            <S.ValueContainer index={props.color} size={tamanho}>{props.value}</S.ValueContainer>
        </S.Container>
        <S.Title>{props.info}</S.Title>
    </S.Card>
  )
}
