import styled from 'styled-components';

const MainScreen = styled.div`
    #logo {    
        text-align: left;
        background-color: #acd0b6;
        height: 42px;
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: fixed;
        z-index: +1;
    }

    img.App-logo {
        margin-left: 100px;
    }

    div a {
        color: #41676f;
        border: none;
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-decoration: none;
    }   
    
    .button_rest {
        color: #41676f;
        border: none;
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        position: absolute;
        top: 20px;
        right: 465px;
        text-decoration: none;
    }

    .button_card{
        right: 342px;
        color: #41676f;
        background-color: #acd0b6;
        border: none;
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        position: absolute;
        text-decoration: none;
        margin-top: 10px;
    }

    .button_cont {
        height: 24px;
        width: 100px;
        background-color: #37595F;
        border-radius: 5px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-size: 18px;
        color: #FFFFFF;
        border-style: none;
        position: absolute;
        right: 160px;
        text-decoration: none;
        margin-top: 10px;
        text-align: center;
        padding-left: 28px;
        padding-top: 3px;
    }

    footer#logo2 {
        text-align: left;
        background-color: #acd0b6;
        height: 42px;
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    

    .br {
        right: 465px;
        color: #41676f;
        background-color: #acd0b6;
        border: none;
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        position: absolute;
        text-decoration: none;
        margin-top: 10px;
    }

    .bcard {
        right: 342px;
        color: #41676f;
        background-color: #acd0b6;
        border: none;
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        position: absolute;
        text-decoration: none;
        margin-top: 10px;
    }

    

    .bc {
        height: 24px;
        width: 100px;
        background-color: #37595F;
        border-radius: 5px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-size: 18px;
        color: #FFFFFF;
        border-style: none;
        position: absolute;
        right: 150px;
        text-decoration: none;
        margin-top: 10px;
        text-align: center;
        padding-left: 19px;
        padding-right: 19px;
        padding-top: 5px;
    }

    @media only screen and (max-width: 600px) {
        div#logo, footer#logo2 {
            display: flex;
            flex-wrap: wrap;
            position: absolute;
        }

        .button_rest, .button_card, .button_cont, .br, .bcard, .bc {
            display: none;
        }

        #logo {    
            text-align: left;
            background-color: #acd0b6;
            height: 42px;
            width: 100%;
            padding-top: 10px;
            padding-bottom: 10px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            position: fixed;
            z-index: +1;
        } 
    }

    width: 100%;
`;

export default MainScreen;