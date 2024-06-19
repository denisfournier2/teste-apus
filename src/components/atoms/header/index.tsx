import * as S from './styles';
import { TopIcon } from '../topIcon';
import Img from '../../../assets/logo.png';

// utilizei duas formas de exportação de imagem aqui, tanto via componente SVG, quanto por imagem

export const Header = () =>{
  return(
    <S.Container>
      <S.TextContainer>
        <TopIcon />
        <S.Candidato>Teste Técnico - Denis Fournier</S.Candidato>
      </S.TextContainer>
      <S.Logo src={Img} />
      <S.TextContainer />
    </S.Container>
  )
}
