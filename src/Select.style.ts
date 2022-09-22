import styled from "styled-components";
import { COLORS } from "./constants";

export const Container = styled.div`
    font-size: 1.2em;
    position: relative;
    border: 2px solid ${COLORS.gray};
    border-radius: 10px;
    padding: 10px;
    max-width: 700px;
    width: 90%;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    &:focus {
        border-color: ${COLORS.blueLight};
    }
`

export const Value = styled.div`
    flex: 1;
    display: flex;

    div {
        margin: 2px;
        padding: 10px;
        border-right: 2px solid ${COLORS.gray};
    }
`

export const ClearBtn = styled.button`
    color: ${COLORS.grayPlus};
    &:hover {
        color: ${COLORS.blueLight};
    }
`

export const Divider = styled.div`
    align-self: stretch;
    width: 2px;
    background: ${COLORS.gray};
    margin: 10px;
`

export const Caret = styled.div`
    border: 0.35em solid transparent;
    border-top-color: ${COLORS.grayPlus} ;
    transform: translateY(20%);

    &:hover {
        cursor: pointer;
        border-top-color: ${COLORS.blueLight} ;
    }
`

export const List = styled.ul`
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    z-index: 3;

    width: 100%;
    border: 1px solid ${COLORS.gray};
    border-radius: 10px;

    li {
        padding: 10px;
        &:hover {
            cursor: pointer;
            background: ${COLORS.blueLight};
        }
    }

`
