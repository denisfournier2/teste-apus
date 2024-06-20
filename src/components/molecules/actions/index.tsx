import * as S from './styles';
import { Button } from '../../atoms/button';
import { Parametros } from '../../../types/types';

export const Actions = (props: { parametros:Parametros, setParametros: any; }) => {
  return (
    <S.Container>
      <Button active={props.parametros.cozinha} onClick={() => {props.setParametros({...props.parametros, cozinha:!props.parametros.cozinha})}}>Cozinha</Button>
      <Button active={props.parametros.areaVerde} onClick={() => {props.setParametros({...props.parametros, areaVerde:!props.parametros.areaVerde})}}>Área verde</Button>
      <Button active={props.parametros.biblioteca} onClick={() => {props.setParametros({...props.parametros, biblioteca:!props.parametros.biblioteca})}}>Biblioteca</Button>
    </S.Container>
  )
}
