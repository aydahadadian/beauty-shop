import styled from "styled-components"
import { cards } from "../data";
import { SM, XS } from "../responsive";

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

const Card = styled.div`
    
    display:flex;
    flex-direction:column;
    padding:0 16px;
     align-items:center;
     border-radius:100%;
     min-height: 150px;
 
h4{
    font-size: .9rem;
    font-weight: 500;
    max-width: 90px;
    text-align: center;
}

  

`
const ImageContainer = styled.div`
    
    width:90px;
    height:90px;
    display:flex;
    justify-content:center;
    position:relative;
     align-items:center;
     border-radius:100%;
     background: ${(props) => props.theme.bc.default};
     margin-bottom: 10px;
     cursor:pointer;
     img{
         height:70%;
         transition:.2s ease-in;
     }

   
    :hover{
      img{transform: scale(1.1);}
    }

`
const Cards = () =>{

return(
    <Container>
      <Title>Papular collection</Title>
        <Wrapper>
          {cards.map((item,i)=>
        <Card key={i}>

        <ImageContainer>
          <img alt="" src={item.img}/>
        </ImageContainer>
        <h4>{item.title}</h4>
        </Card>
           )}
        </Wrapper>
    </Container>
)


}


export default Cards