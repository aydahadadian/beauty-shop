import styled from 'styled-components'
import {SM} from "../responsive"


const Container = styled.div`
height: 70vh;
width: 100%;
display: flex;
align-items: center;
position: relative;
overflow:hidden;



`
const Wrapper = styled.div`
width: 100vw;
height: 70vh;
display: flex;
align-items: center;
position: relative;
justify-content:center;
background-color: #${(props)=>props.bc};


`

const ImageContainer = styled.div`

display: flex;
width:100%;
height: 100%;
`
const Image = styled.img`
height:100%;
width:100%;
object-fit: cover;

`

const Brands = styled.div`
width:100%;
height:10vh;
display:flex;
justify-content:center;
box-shadow: 0px 8px 19px -14px #959595;
margin-bottom: 28px;

`
const BrandsImage = styled.div`
background:url("../Images/brands-List.png")center no-repeat;
width:100%;
height:100%;
${SM({background:"url(../Images/brands-List-sm.png)center no-repeat"})}

`


const Slider = () => {
   
 
    return (
        <>

        <Container>


                <Wrapper>

           
                <ImageContainer>
            <Image src="../Images/photo5796609307633105240.jpg" />
            
            </ImageContainer>


  
 
            </Wrapper>

          
        </Container>
              <Brands>
              <BrandsImage />
      
              </Brands>
              </>

    )
}

export default Slider