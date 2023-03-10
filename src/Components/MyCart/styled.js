import styled from "styled-components";

export const MyCartStyled =styled.div`
    h6{
        font-size:${(props) => props.theme.fontSizes.h6}rem;
        color:${(props) =>  props.theme.palette.font};
        margin:10px 0;
    }
    .container{

        padding:20px;
        background-color:${props=>props.theme.palette.main};
        border: 1px solid ${props=> props.theme.palette.ColorApp.gray_300};
        border-radius: 6px;
        .items> div:not(:last-child){
            border-bottom: 1px solid ${props=> props.theme.palette.ColorApp.gray_300};
    }
    .items{
        height:490px;
        overflow-y: scroll;
        /* Scrollbar */
        ::-webkit-scrollbar {
            width: 1px;
        }
        ::-webkit-scrollbar-thumb {
        background-color: #b3b3b3;
        border-radius: 10px;
        }
        ::-webkit-scrollbar-track {
            background-color: #f1f1f1;
            border-radius: 10px;
        }
    }
    .myButtons{
        padding:20px 0 0;
        display: flex;
        align-items:center;
        justify-content:space-between;
        button{
            display: flex;
            align-items:center;
            justify-content:space-between;
            gap:10px;
            padding:10px;
            width:fit-content;
        }
    }
}
`