import React from 'react';
import styled from 'styled-components';
import { XS } from '../responsive';

const Container = styled.div`
height: 30px;
background-color: #3c3c3c;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size:14px;
font-weight: 500;
${XS({backgroundColor:"#3c3c3c"})}
`


const Announcement = () => {
    return <Container>Super Deal! - 20% off your first order</Container>
}

export default Announcement
