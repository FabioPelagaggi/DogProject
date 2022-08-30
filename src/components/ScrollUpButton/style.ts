import styled from 'styled-components';

export const ScrollUpButton = styled.a`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    right: 80px;
    bottom: 130px;
    cursor: pointer;
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.green[200]};
    border-radius: 50px;
    color: white;
    transition: all 0.5s ease-in-out;

    &:hover {
        transform: translateY(-0.25rem);
        height: 90px;

        span {
            display: flex;
        }
    }

    @media (max-width: 768px) {
        position: absolute;
        bottom: 265px;

        &:hover {
            height: 60px;

            span {
                display: none;
            }
        }
    }
`;

export const ScrollUpText = styled.span`
    display: none;
    font-size: 12px;
`;
