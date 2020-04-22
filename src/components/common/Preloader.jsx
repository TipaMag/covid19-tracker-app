import React from 'react'
import styled, { keyframes } from 'styled-components'

import corona from '../../assets/images/corona.png'

const spin = keyframes`
  100% { 
      transform: rotate(360deg); 
    }
`
const Overlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #363636;
    z-index: 999;
`
const LoaderBody = styled.div`
    img {
        width:  150px;
        animation: ${spin} 1.5s linear infinite;
    }
`


const Preloader = () => {
    return (
        <Overlay>
            <LoaderBody>
                <img src={corona} alt="loader" />
            </LoaderBody>
        </Overlay>
    )
}

export default Preloader