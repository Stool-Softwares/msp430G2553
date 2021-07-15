import React from 'react'
import styled from 'styled-components'
import Arrow from '../assets/arrow.png'
import Button from '../components/button/Button'
import Navbar from '../components/navbar/Navbar'
import '../styles/global.module.css'

const App = styled.div`
    width: 100%;
    height: 100%;
`

const PageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 100px;
`

const CentralBox = styled.div`
    width: 800px;
    height: 350px;
    border: 10px solid #222;
    background-color: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const BoxShadow = styled.div`
    position: absolute;
    left: calc(50% - 380px);
    top: 190px;
    width: 800px;
    height: 350px;
    background-color: black;
    z-index: -1;
`

const BoxContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 80px;
`

function IndexPage() {
    return (
        <App>
            <Navbar />
            <PageContainer>
                <CentralBox>
                    <p style={{ fontSize: '70px', fontWeight: 'bold' }}>
                        MSP 430
                    </p>
                    <p style={{ fontSize: '70px', fontWeight: 'bold' }}>
                        Lunchbox Projects
                    </p>
                    <p style={{ fontSize: '20px' }}>(MSP430G2553)</p>
                </CentralBox>
                <BoxShadow></BoxShadow>
            </PageContainer>
            <BoxContainer>
                <Button icon={Arrow}>Explore Projects</Button>
            </BoxContainer>
        </App>
    )
}

export default IndexPage
