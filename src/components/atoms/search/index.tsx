import * as S from './styles';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Button } from '../button';

export const Search = (props: {escola: string | undefined}) => {

  return(
    <S.SearchBar>
      <S.SearchPill>
        {props.escola && <S.Label>Pesquisa</S.Label>}
        <S.SearchPillEscola>
          {props.escola ? props.escola : "Pesquisa"}
        </S.SearchPillEscola>
      </S.SearchPill>
      {props.escola && 
        <Button onClick={() => {}}>
          <FaArrowLeftLong /> Voltar
        </Button>
      }
    </S.SearchBar>
  )
}
