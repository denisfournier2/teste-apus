import * as S from './styles';

export const Subtitle = (props: {subtitulo: string | undefined}) => {

  return(
    <S.Title>
      {props.subtitulo}
    </S.Title>
  )
}
