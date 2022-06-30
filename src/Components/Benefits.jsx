import styled from "styled-components";
import {SM,XS} from "../responsive";

const Container = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
background: ${(props) => props.theme.bc.section};
padding:1rem 0;

margin:2rem 0 3rem;
${XS({padding:"2rem"})};
${SM({padding:"2rem",flexDirection:"column"})};
`;

const Title = styled.h3`
${XS({fontSize:"1.5rem"})};
${SM({fontSize:"1.5rem",marginBottom:"2rem"})};
`;




const Wrapper = styled.div`

display:flex;;
align-items:center;
justify-content:center;
width:100%;
padding-top:2rem;
${XS({flexWrap:"wrap"})}


`;


const Card = styled.div`
    
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    min-height: 120px;
    padding:0 20px;
     align-items:center;
     border-radius:100%;
 
h5{
    padding-top: 10px;

    font-weight:500;
    max-width: 120px;
    text-align:center;
}

    

`
const ImageContainer = styled.div`
    
    width:55px;
    height:55px;
    display:flex;
    justify-content:center;
     align-items:center;
     border-radius:100%;
     background: ${(props) => props.theme.bc.default};
     img{
        
        height:45px;
     }


`






const Benefits = () => {
    return (
        <Container>
        
     
             <Title>Benefits Using Our Services</Title>

  <Wrapper>
  <Card>
        <ImageContainer>
          <img alt="" src="../Images/Benefit1.png"/>
        </ImageContainer>
        <h5>Fast and secure delivery</h5>
        </Card>
        <Card>
        <ImageContainer>
          <img alt="" src="../Images/Benefit3.png"/>
        </ImageContainer>
        <h5>Free shipping</h5>
        </Card>
            <Card>
        <ImageContainer>
          <img alt="" src="../Images/Benefit2.png"/>
        </ImageContainer>
        <h5>Vegan friendly formola</h5>
        
        </Card>
        
  </Wrapper>
    </Container>
    )
}

export default Benefits
