import styled from "styled-components";

export const Header = styled.header`
    padding:11px 0;
    .logoBox > svg{
        display: none;
    }
    background-color:${(props)=>props.theme.palette.main};
    >div>div{
        display: flex;
        gap:20px;
        justify-content:space-between;
        align-items:center;
    }
    /* Small */
    @media (max-width: 576px) {
        >div>div{
        flex-wrap: wrap;
        justify-content:flex-start;
        }
        .logoBox{
            display: flex;
            justify-content:center;
            align-items:center;
            gap:10px;
            svg{
                display: block;
                cursor: pointer;
            }
        }
    }
    .layout{
        position:fixed;
        top:0;
        width:100vw;
        height:100vh;
        background-color:#00000052;
        z-index:9999;
        transition: 0.3s;
    }
`

