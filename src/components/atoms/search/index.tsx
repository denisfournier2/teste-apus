import * as S from './styles';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Button } from '../button';
import { useNavigate } from 'react-router-dom';

export const Search = (props: {escola: string | undefined}) => {
  const navigate = useNavigate()

  return(
    <S.SearchBar>
      <S.SearchPill>
        {props.escola && <S.Label>Pesquisa</S.Label>}
        <S.SearchPillEscola>
          {props.escola ? props.escola : "Pesquisa"}
        </S.SearchPillEscola>
      </S.SearchPill>
      {props.escola && 
        <Button onClick={() => navigate('/')}>
          <FaArrowLeftLong /> Voltar
        </Button>
      }
    </S.SearchBar>
  )
}
