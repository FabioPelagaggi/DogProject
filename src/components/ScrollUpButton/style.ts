import styled from 'styled-components';

export const ScrollUpButton = styled.a`
    position: fixed;
    right: 80px;
    bottom: 110px;
    cursor: pointer;
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.green[200]};
    padding: 12px;
    border-radius: 80px;
    font-size: 8px;
    color: white;

    &:hover {
        transform: translateY(-0.25rem);
        transition: 0.4s;
    }
`;
export const ScrollUpText = styled.a`
    display: hidden;
`;