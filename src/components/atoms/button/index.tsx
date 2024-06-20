import * as S from './styles';
import { IButtonProps } from "./types";

export const Button = (props: IButtonProps) => {
  return(
    <S.Button ativo={props.ativo} onClick={props.onClick}>
      {props.children}
    </S.Button>
  )
}
