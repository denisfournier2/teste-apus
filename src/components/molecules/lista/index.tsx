import { Escola } from '../../../types/types';
import { Button } from '../../atoms/button';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

export const Lista = (props: { loading:boolean, escolas: Escola[], onPress:(T: number) => void, defNomeEscola: (T:string) => void; }) => {
  const navigate = useNavigate()

  const handleClick = (cod: number, nome: string) => {
    props.onPress(cod)
    props.defNomeEscola(nome)
    navigate(`/escola/${cod}`)
  }

  return (
    <S.Container>
      <S.ListTable cellSpacing={0}>
        <S.ListTHead>
          <S.ListTr impar={0}>
            <S.ListTh>Nome da escola</S.ListTh>
            <S.ListTh>Cidade</S.ListTh>
            <S.ListTh>Estado</S.ListTh>
            <S.ListTh>Notas Ideb</S.ListTh>
            <S.ListTh></S.ListTh>
          </S.ListTr>
        </S.ListTHead>
        <S.ListTBody>
          {props.loading && (
            <S.ListTr impar={0}>
              <S.ListTd colSpan={4}>
                <S.LoadingContainer>
                  <S.Loading><AiOutlineLoading3Quarters /></S.Loading>
                </S.LoadingContainer>
              </S.ListTd>
            </S.ListTr>
          )}
          {props.escolas.length > 0 && props.escolas.map((escola, index) => {
            return (
              <S.ListTr impar={index%2} key={escola.cod}>
                <S.ListTd>{escola.nome}</S.ListTd>
                <S.ListTd style={{ width:"200px" }}>{escola.cidade}</S.ListTd>
                <S.ListTd style={{ width:"150px" }}>{escola.estado}</S.ListTd>
                <S.ListTd style={{ width:"150px" }}>{Math.round(escola.nota as number)}, {Math.round(escola.nota2 as number)}</S.ListTd>
                <S.ListTd style={{ width:"100px" }}><Button ativo={false} onClick={() => {handleClick(escola.cod as number, escola.nome as string)}}>Consultar</Button></S.ListTd>
              </S.ListTr>
            )
          })}
          {props.escolas.length === 0 && props.loading === false && (
            <S.ListTr impar={0}>
              <S.ListTd colSpan={4}><S.SemDados>Não existem registros</S.SemDados></S.ListTd>
            </S.ListTr>
          )}
        </S.ListTBody>
      </S.ListTable>
    </S.Container>
  )
}