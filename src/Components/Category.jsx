import React from 'react'
import styled from 'styled-components'
import {XS,SM} from "../responsive"
import CategoryItem from './CategoryItem'




const Container = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
padding:1vh 7vw;
${XS({flexDirection:"column"})}
`
const Wrapper = styled.div`
display:flex;;
align-items:center;
justify-content:center;
width:100%;
flex-wrap:wrap;
${SM({flexWrap:"wrap"})}

`

const Title = styled.h3`
    font-size: 1.3rem;
    font-weight: 700;
    padding: 20px 0;

::after{
    content: '';
    width: 20%;
    height: 1px;
    margin-top:10px;
    background-color: #eee;
    display: block;
    ${XS({width:"100%"})}

}
${XS({textAlign:"center",fontSize:"1.7rem"})}
`


const Category = ({data,title}) => {
    
    
    return (
        <Container>
            
 
            <Title>{title}</Title>     
            <Wrapper>
            {data.map((item) => (

            <CategoryItem key={item.id} item={item}/>

            ))
            }
            </Wrapper>

         
        </Container>
    )
}

export default Category
