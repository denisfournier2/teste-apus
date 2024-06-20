import * as S from './styles';

export const Card = (props: {color: number, info: string, value: string | undefined}) => {
  const tamanho = `${props.value}`.length

  return(
    <S.Card>
        <S.Container>
            <S.ValueContainer size={tamanho}>{props.value}</S.ValueContainer>
        </S.Container>
        <S.Title>{props.info}</S.Title>
    </S.Card>
  )
}
