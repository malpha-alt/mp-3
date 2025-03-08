import styled from "styled-components";

const PageContainer = styled.div`
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row; 
    
    overflow-y: auto;
    background-color: #2d2d2d;

    @media (max-width: 768px) {
        flex-direction: column;

    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;  
    scrollbar-width: none;  
`;



export default PageContainer;