import React from 'react'
import styled from 'styled-components'
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

    p {
        transition: all 0.3s ease-in;
        font-size: 70px;
    }

    @media only screen and (max-width: 1500px) {
        width: 700px;
        height: 300px;
        p {
            font-size: 70px;
        }
    }

    @media only screen and (max-width: 840px) {
        width: 600px;
        height: 250px;
        p {
            font-size: 60px;
        }
    }

    @media only screen and (max-width: 640px) {
        border-width: 5px;
        width: 85%;
        height: 200px;
        p {
            font-size: 35px;
        }
    }

    &::before {
        content: '';
        width: 790px;
        height: 350px;
        position: absolute;
        background-color: #222;
        z-index: -1;
        top: 5px;
        left: 10px;

        @media only screen and (max-width: 1500px) {
            width: 700px;
            height: 300px;
        }

        @media only screen and (max-width: 840px) {
            display: none;
        }
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
                    <p style={{ fontWeight: 'bold' }}>MSP 430</p>
                    <p style={{ fontWeight: 'bold' }}>Lunchbox Projects</p>
                    <p style={{ fontSize: '20px' }}>(MSP430G2553)</p>
                </CentralBox>
            </PageContainer>
            <BoxContainer>
                <Button>Explore Projects</Button>
            </BoxContainer>
        </App>
    )
}

export default IndexPage
