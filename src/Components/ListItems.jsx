import styled from "styled-components"
import ProductItem from "../Components/ProductItem";

import { SM, XS } from "../responsive";

const Container = styled.div`
display: flex;
padding:1vh 7vw;
justify-content: center;
flex-direction:column;
${XS({flexDirection:"column"})}
`
// const Wrapper = styled.div`
// display:flex;;
// align-items:center;
// justify-content:center;
// width:100%;
// flex-wrap:wrap;
// ${SM({flexWrap:"wrap"})}

// `

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

const List=styled.div`
display: flex;
flex-wrap: wrap;
justify-content:center; 
${SM({paddingLeft: "10%"})}
${XS({paddingLeft: "0",justifyContent:"center"})}

`




const ListItems = ({products}) => {


  return (
   
          <Container>
              <Title>
                  Trend Products
              </Title>

              <List>
          {products.map((item,index)=><ProductItem key={index} item={item} width="260px" margin="15px 5px 15px 0"/>)}
        </List>
 
          </Container>
      
    
  );
}


export default ListItems
