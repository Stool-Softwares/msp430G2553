import React, { Fragment } from 'react'
import styled from 'styled-components'
import Navbar from '../components/navbar/Navbar'
import '../styles/global.module.css'

const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 70px);
    padding: 0 5% 0 5%;

    h2 {
        @media only screen and (max-width: 700px) {
            font-size: 30px !important;
        }
    }

    p {
        @media only screen and (max-width: 700px) {
            font-size: 18px !important;
        }
    }
`

function About() {
    return (
        <Fragment>
            <Navbar />
            <AboutWrapper>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: 45 }}>About</h2>
                    <p style={{ fontSize: 23 }}>
                        In case of any query please contact us{' '}
                        <a
                            href='https://github.com/Stool-Softwares'
                            target='_blank'
                            rel='noreferrer'
                        >
                            @stool_softwares
                        </a>
                    </p>
                </div>
            </AboutWrapper>
        </Fragment>
    )
}

export default About
