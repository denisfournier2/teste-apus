import * as S from './styles';

export const Title = (props: {titulo: string | undefined}) => {

  return(
    <S.Title>
      {props.titulo}
    </S.Title>
  )
}
