import styled from "styled-components";

export const ItemsCardStyled = styled.div `
    margin:30px 0;
    padding:20px;
    background-color:${(props) =>  props.theme.palette.main};
    h6{
        font-size:${(props) => props.theme.fontSizes.h6}rem;
        color:${(props) =>  props.theme.palette.font};
        margin:15px 0;
    }
    .items{
        display: grid;
        ${props=>props.type==="RelatedProducts"?`
        grid-template-columns:repeat(6,1fr);
        `:`
        grid-template-columns:repeat(4,1fr);
        `}
        @media (max-width: 576px) {
            grid-template-columns:repeat(1,1fr);
        }
        gap:20px;
        justify-content:space-between;
        button{
            width:fit-content;
            display: flex;
            align-items:center;
            padding: 10px;
            font-size:${(props) => props.theme.fontSizes.body}rem;
            svg{
                margin:0 10px 0 0;
            }
        }
    }
`