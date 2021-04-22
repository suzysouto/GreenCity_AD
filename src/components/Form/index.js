import styled from 'styled-components';

const Form = styled.form`
    h1 {
        color: #E4ECCB;
        font-size: 72px;
        font-family: 'Cookie', cursive;
        padding-top: 79px;
        margin-bottom: 100px;
        margin-top: 72px;
    }

    input {
        height: 52px;
        width: 100%;
        background: #FFFFFF;
        border-radius: 5px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        font-size: 20px;
        font-color: #37595F;
        border-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }

    textarea {
        height: 160px;
        width: 100%;
        background: #FFFFFF;
        border-radius: 5px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        font-size: 20px;
        font-color: #37595F;
        border-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }

    button#send {
        height: 60px;
        width: 100%;
        background-color: #81A296;
        border-radius: 5px;
        box-shadow: 0px 7px 0px #618778;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-size: 24px;
        color: #FFFFFF;
        border-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-text: center;
        margin-bottom: 200px;
        padding: 15px 212px;
    }

    button#send:hover {
        background-color: rgb(33, 105, 65);
        color: white;
        cursor: pointer;
        transition-duration: 0.5s;
    }

    h3 {
        color: #FF4500;
        font-weight: 700;
        padding-bottom: 5px;
        text-align: right;
    }

    input:invalid {
        color: red 2px;
    }

    max-width: 420px;
`;

export default Form;