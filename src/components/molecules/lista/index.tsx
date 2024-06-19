import { Escola } from '../../../types/types';
import { Button } from '../../atoms/button';
import * as S from './styles';

export const Lista = (props: { escolas: Escola[]; }) => {

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
          {props.escolas.map((escola, index) => {
            return (
              <S.ListTr impar={index%2} key={escola.cod}>
                <S.ListTd style={{ width:"40%" }}>{escola.nome}</S.ListTd>
                <S.ListTd>{escola.cidade}</S.ListTd>
                <S.ListTd>{escola.estado}</S.ListTd>
                <S.ListTd>{escola.nota}</S.ListTd>
                <S.ListTd style={{ width:"100px" }}><Button onClick={() => {}}>Consultar</Button></S.ListTd>
              </S.ListTr>
            )
          })}
        </S.ListTBody>
      </S.ListTable>
    </S.Container>
  )
}