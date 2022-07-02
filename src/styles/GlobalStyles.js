import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./font.css";

const GlobalStyle = createGlobalStyle`
    ${reset};
    
    *{
        text-decoration: none;
        &:hover {
            text-decoration: none;
        }
        &:link {
            text-decoration: none;
        }
        &:visited {
            text-decoration: none;
        }
        &:active {
            text-decoration: none;
        }
    }
    
    body{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin: 0;
        background-color: black;
        font-family:'-apple-system', 'BlinkMacSystemFont', 
        'Apple SD Gothic Neo','Inter', 'Spoqa Han Sans', 
        'Segoe UI', Sans-Serif, 'Apple Color Emoji', 'Segoe UI Emoji', 
        'Segoe UI Symbol';
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    };

    body::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
    }

    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
`;

export default GlobalStyle;
