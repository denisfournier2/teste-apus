import styled from "styled-components";
import { colors } from "../../../theme/colors";
import { sizes } from "../../../theme/sizes";
import { fonts } from "../../../theme/fonts";

type IProps = {
    impar: number
}

export const Container = styled.div`
    width: 90vw;
    
`

export const ListTable = styled.table`
    font-family: ${fonts.body};
    border: 1px solid ${colors.border};
    width: 100%;
`

export const ListTHead = styled.thead`
    background-color: ${colors.tableTitle};
    text-align: left;
`

export const ListTBody = styled.tbody``

export const ListTr = styled.tr<IProps>`
    background-color: ${props => props.impar === 0 ? "transparent" : colors.tableField};
`

export const ListTh = styled.th`
    padding: 10px 22px;
    font-size: ${sizes.subtitle};
`

export const ListTd = styled.td`
    padding: 6px 22px;
    font-size: ${sizes.table};
`
