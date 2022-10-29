import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
`;

export const Title = styled.h1`
    color: var(--neutral-color-high-main);
`;

export const Subtitle = styled.h2`
    margin-top: 40px;
    color: var(--neutral-color-high-main);
`;

export const StatusContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Status = styled.p``;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid var(--neutral-color-high-main);
    border-radius: 5px;
    color: var(--neutral-color-high-main);
    background-color: var(--neutral-color-low-main);
    outline: none;
`;

export const SaveButton = styled.button`
    padding: 10px;
    border: 1px solid var(--neutral-color-high-main);
    border-radius: 5px;
    color: var(--neutral-color-high-main);
    background-color: var(--neutral-color-low-main);
    outline: none;
    cursor: pointer;
`;