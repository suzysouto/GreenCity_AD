import styled from 'styled-components';

const MainText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p#topo {
        font-family: 'Cookie', cursive;
        font-style: normal;
        font-weight: normal;
        font-size: 72px;
        color: #E4ECCB;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: -290px;
        max-width: 500px;
        margin-left: 190px;
        margin-right: 100px;        
        overflow-wrap: break-word;
    }

    p#randomtext {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        color: #FFFFFF;
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 23px;
        max-width: 500px;
        margin-left: 190px;
        margin-right: 642px;
        overflow-wrap: break-word;
    }

    .ic {
        height: 300px;
        width: 302px;
        margin-right: 191px;
        margin-top: 166px;
        margin-left: 690px;
        display: flex;
        flex-direction: row;
        border-radius: 100%;
    }

    p#topo2 {
        font-family: 'Cookie', cursive;
        font-style: normal;
        font-weight: normal;
        font-size: 72px;
        color: #e3eccd;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: -250px;
        max-width: 500px;
        overflow-wrap: break-word;
        margin-left: 561px;
        margin-right: 349px;
    }

    p#randomtext2 {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        color: #FFFFFF;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 14px;
        max-width: 500px;
        overflow-wrap: break-word;
        margin-left: 560px;
        margin-right: 220px;
    }

    .ic2 {
        height: 300px;
        width: 302px;
        margin-right: 120px;
        margin-top: 94px;
        margin-left: -550px;
        display: flex;
        flex-direction: row;
        border-radius: 100%;
    } 

    button#btn-card {
        background: #81A296;
        box-shadow: 0px 7px 0px #618778;
        border-radius: 5px;

        position: absolute;
        width: 241px;
        height: 49px;
        left: 595px;
        top: 820px;

        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 100%;
        /* or 20px */

        display: flex;
        align-items: center;
        text-align: center;

        color: #FFFFFF;
        border-style: none;
        padding-left: 26px;
    }

    button#btn-card:hover {
        background-color: rgb(33, 105, 65);
        color: white;
        cursor: pointer;
        transition-duration: 0.5s;
    }

    @media only screen and (max-width: 600px) {
        img.ic {
            border-radius: 0;
            margin-top: 60px;
            margin-left: 190px;
            display: flex;
            width: 100%;
        }

        p#topo {
            display: flex;
            padding-top: 350px;
            margin-left: 670px;
        }

        p#randomtext {
            display: flex;
            margin-top: 20px;
            margin-left: 670px;
            width: max-content;
        }

        img.ic2 {
            border-radius: 0;
            margin-top: 60px;
            margin-left: 120px;
            display: flex;
            width: 100%;
        }

        p#topo2 {
            display: flex;
            padding-top: 300px;
            margin-left: 330px;
        }

        p#randomtext2 {
            display: flex;
            margin-top: 20px;
            margin-left: 280px;
            width: max-content;
        }

        button#btn-card {
            background: #81A296;
            box-shadow: 0px 7px 0px #618778;
            border-radius: 5px;
    
            display: flex;
            width: 241px;
            height: 49px;
            left: 140px;
            top: 1370px;
    
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 100%;
            /* or 20px */
    
            display: flex;
            align-items: center;
            text-align: center;
    
            color: #FFFFFF;
            border-style: none;
            padding-left: 26px;
        }
    
        button#btn-card:hover {
            background-color: rgb(33, 105, 65);
            color: white;
            cursor: pointer;
            transition-duration: 0.5s;
        }
    }

    @media only screen and (min-width: 650px and max-width: 1200px) {
        .ic {
            height: 300px;
            width: 302px;
            margin-right: 191px;
            margin-top: 166px;
            margin-left: 800px;
            display: flex;
            flex-direction: row;
            border-radius: 100%;
        }
        
        .ic2 {
            height: 300px;
            width: 302px;
            margin-right: 120px;
            margin-top: 94px;
            margin-left: -200px;
            display: flex;
            flex-direction: row;
            border-radius: 100%;
        }

        p#topo {
            font-family: 'Cookie',cursive;
            font-style: normal;
            font-weight: normal;
            font-size: 72px;
            color: #E4ECCB;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: -260px;
            max-width: 450px;
            margin-left: 190px;
            margin-right: 100px;
            overflow-wrap: break-word;
        }

        p#topo2 {
            font-family: 'Cookie',cursive;
            font-style: normal;
            font-weight: normal;
            font-size: 72px;
            color: #e3eccd;
            display: flex;
            flex-direction: row;
            margin-top: -250px;
            max-width: 600px;
            overflow-wrap: break-word;
            margin-left: 650px;
            margin-right: 349px;
        } 

        p#randomtext {
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            color: #FFFFFF;
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 23px;
            max-width: 500px;
            margin-left: 190px;
            margin-right: 350px;
            overflow-wrap: break-word;
        }

        p#randomtext2 {
            font-family: Open Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            color: #FFFFFF;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 14px;
            max-width: 500px;
            overflow-wrap: break-word;
            margin-left: 650px;
            margin-right: 150px;
        }
    }

    overflow-x: hidden !important;
`;

export default MainText;