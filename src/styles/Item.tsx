import styled from "styled-components";

interface ItemProps {
    checked: boolean
}

export const Item = styled.li<ItemProps>`
    width: 350px;
    height: 50px;
    margin-top: 20px;
    padding: 8px 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: ${(props) => props.checked ? "#DA2535" : "#FFF"};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;


    font-family: 'Poppins';
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: ${(props) => props.checked ? "line-through" : "none"};
    color: ${(props) => props.checked ? "#FFF" : "#0B0A0A"};

    .icon {
        font-size: 20px;
        margin-left: 10px;
        cursor: pointer;

        &:hover {
            opacity: .8;
        }

        &:active {
            transform: scale(0.98);
        }
    }
`