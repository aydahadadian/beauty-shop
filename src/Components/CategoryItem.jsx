import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {XS,SM} from "../responsive"


const Info = styled.div`

position: absolute;
bottom:0;
display: flex;
flex-direction:column;
z-index: 3;
left:0;
padding:15px;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
transition:.1s ease-in;


`

const Container = styled.div`
flex-grow:1;
height: 42vh;
width:40%;
margin: 5px;
position: relative;
border-radius: 4px;
overflow: hidden;
${SM({width:"30%"})}
${XS({width:"90%"})}

:hover ${Image} {
    transform:scale(1.2);
} 

`
const Wrapper = styled.div`

height:100%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

::after{
    z-index: 1;
    content: "";
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:#000;
    opacity:.2;

}

`



const Title = styled.h2`

color: #ffffff;
    font-weight: 700;
    z-index: 4;
    padding-bottom: 10px;
    padding-left: 9px;
${SM({fontSize:"1.2rem",fontWeight:"500"})}

`
const Button = styled.button`
color:#000;
background: #ffffff;
    font-weight: 700;
    width: 109px;
    font-size: .9rem;
    :hover{
        background: #ffffff;
        font-weight:900;
    }


`
const CategoryItem = ({item}) => {
    return (
        <Container bc={item.bc && item.bc}>
            <Link to="/products">
                <Wrapper>

                  
                     <Image src={item.img} />
                  
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
         
            </Info>
            </Wrapper>
            </Link>

            
        </Container>
    )
}

export default CategoryItem
