import styled from 'styled-components';
import { headingSmall, paragraphLarge } from '../../styles/global';

export const Container = styled.table<{ noMargin?: boolean }>`
    width: 100%;
    border-collapse: collapse;
    ${({ noMargin }) => !noMargin && `margin-top: 24px;`}
    @media (max-width: 1060px) {
        display: block;
        width: 100%;
    }
`;


export const TableColumn = styled.td`
    padding: 12px 15px;
    :last-child {
        width: 0px;
    }
    text-wrap: normal;
    overflow-wrap: break-word;
    &:nth-child(2) {
        max-width: 200px;
        word-wrap: break-word;
    }
    @media (max-width: 1060px) {
        display: block;
        width: 100%;
        text-align: right;
        position: relative;
        &:nth-child(2) {
            max-width: 100%;
        }
        &::before {
            content: attr(data-label);
            position: absolute;
            left: 0;
            width: 50%;
            padding-left: 15px;
            text-align: left;
            ${headingSmall};
        }
        :last-child {
            width: 100%;
            display: none;
        }
    }
`;

export const TableArea = styled.tbody`
    @media (max-width: 1060px) {
        display: block;
        width: 100%;
    }
`;

export const TableRow = styled.tr`
    border: 1px solid var(--neutral-color-low-lightest);
    :nth-child(even) {
        background-color: var(--neutral-color-high-light);
    }
    :nth-child(odd) {
        color: var(--neutral-color-high-main);
    }
    @media (max-width: 1060px) {
        display: block;
        border-bottom: none;
        width: 100%;
        &:last-child {
            border-bottom: 1px solid var(--neutral-color-low-lightest);
        }
    }
`;

export const TableHeader = styled.thead`
    background-color: var(--neutral-color-high-light);
    border: 1px solid var(--neutral-color-low-lightest);
    @media (max-width: 1060px) {
        display: none;
    }
`;

export const TableHead = styled.th`
    ${headingSmall};
    text-align: left;
    height: 56px;
    padding: 0 15px;
    color: var(--neutral-color-low-main);
`;

export const Value = styled.div<{ isStatus?: boolean }>`
    ${paragraphLarge};
    ${({ isStatus }) => isStatus && `
        margin-left: 8px;
        text-decoration: underline;
    `}
    
`;

export const EvaluationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 1060px) {
        justify-content: flex-end;
    }
`;

export const EditContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;