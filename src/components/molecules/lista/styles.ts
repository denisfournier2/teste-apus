import styled from "styled-components";
import { colors } from "../../../theme/colors";
import { sizes } from "../../../theme/sizes";
import { fonts } from "../../../theme/fonts";

type IProps = {
    impar: number
}

export const Container = styled.div`
    * {
        scrollbar-width: thin;
        scrollbar-color: #e6e6e6 #ffffff;
    }

    *::-webkit-scrollbar {
        width: 16px;
    }

    *::-webkit-scrollbar-track {
        background: #ffffff;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #e6e6e6;
        border-radius: 12px;
        border: 4px solid #c9c9c9;
    }
    width: 90vw;
    height: 70vh;
    overflow: auto;
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

export const Loading = styled.div`
    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;

    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SemDados = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 24px;
`

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 24px 0;
`
