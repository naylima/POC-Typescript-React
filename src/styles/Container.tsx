import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(134, 129, 129, 0.1);

    h1 {
        font-weight: 600;
        font-size: 48px;
        line-height: 72px;
        color: #DA2535;
        font-family: 'Poppins', sans-serif;
    }

    input {      
        width: 224px;
        height: 50px;
        padding: 8px 24px;
        background: #FFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: none;
        border-radius: 10px;

        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #DA2535;
    }
    
    button {
        width: 112px;
        height: 50px;
        margin-left: 10px;
        padding: 10px 40px; 
        background: #DA2535;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: none;
        border-radius: 10px;
        cursor: pointer;

        font-weight: 500;
        font-size: 16px;
        color: #FFF;

        &:hover {
            opacity: .8;
        }

        &:active {
            transform: scale(0.98);
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
        }
    }
`;