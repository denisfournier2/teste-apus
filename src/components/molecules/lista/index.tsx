import { Escola } from '../../../types/types';
import * as S from './styles';

export const Lista = (escolas:Escola[]) => {

  return (
    <S.Container>
      <S.ListTable>
        <S.ListTr>
          <S.ListTh>Nome da escola</S.ListTh>
          <S.ListTh>Cidade</S.ListTh>
          <S.ListTh>Estado</S.ListTh>
          <S.ListTh>Notas Ideb</S.ListTh>
        </S.ListTr>
          {escolas.map(escola => {
            return (
              <S.ListTr key={escola.cod}>
                <S.ListTd>{escola.nome}</S.ListTd>
                <S.ListTd>{escola.cidade}</S.ListTd>
                <S.ListTd>{escola.estado}</S.ListTd>
                <S.ListTd>{escola.nota}</S.ListTd>
              </S.ListTr>
            )
          })}
      </S.ListTable>
    </S.Container>
  )
}