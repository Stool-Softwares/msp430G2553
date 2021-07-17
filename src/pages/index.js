import React from 'react'
import styled from 'styled-components'
import Arrow from '../assets/arrow.png'
import Button from '../components/button/Button'
import Navbar from '../components/navbar/Navbar'
import SEO from '../components/seo/SEO'
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
    position: relative;
    transition: all 1s ease-in;

    &::before {
        content: '';
        width: 790px;
        height: 350px;
        position: absolute;
        background-color: #222;
        z-index: -1;
        top: 5px;
        left: 10px;
    }
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
            <SEO title='MSP430 Lunchbox Projects' />
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
            </PageContainer>
            <BoxContainer>
                <Button icon={Arrow}>Explore Projects</Button>
            </BoxContainer>
        </App>
    )
}

export default IndexPage
