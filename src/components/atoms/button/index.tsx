import * as S from './styles';
import { IButtonProps } from "./types";

export const Button = (props: IButtonProps) => {
  return(
    <S.Button active={props.active ? props.active : undefined} onClick={props.onClick}>
      {props.children}
    </S.Button>
  )
}
