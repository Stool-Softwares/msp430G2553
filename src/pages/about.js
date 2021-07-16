import React, { Fragment } from 'react'
import Navbar from '../components/navbar/Navbar'

function About() {
    return (
        <Fragment>
            <Navbar />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw',
                    height: 'calc(100vh - 70px)',
                }}
            >
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: 45 }}>About</h1>
                    <p style={{ fontSize: 23 }}>
                        In case of any query please contact us{' '}
                        <a
                            href='https://github.com/Stool-Softwares'
                            target='_blank'
                        >
                            @stool_softwares
                        </a>
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default About
