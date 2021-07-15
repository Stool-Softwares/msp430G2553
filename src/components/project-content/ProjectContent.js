import React from 'react'
import styled from 'styled-components'
import MSPImage from '../../assets/mspimage.jpg'

const ProjectContainer = styled.div`
    width: calc(100% - 400px);
`

const MarkdownContent = styled.div`
    padding: 30px 0 0 30px;

    * {
        margin: 0;
        padding: 0;
        margin-bottom: 10px;
    }

    h1 {
        font-size: 40px;
    }

    h2 {
        font-size: 35px;
        text-decoration: underline;
        margin-top: 20px !important;
    }

    h3 {
        font-size: 30px;
    }

    h4 {
        font-size: 25px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Roboto';
    }

    p {
        width: 1200px;
        font-size: 20px;
        text-align: justify;
        font-family: 'Roboto';

        span {
            a {
                img {
                    width: 1000px !important;
                    height: auto !important;
                    border: 4px solid #222;
                }
            }
        }
    }
`

function ProjectContent({ html, frontmatter }) {
    return (
        <ProjectContainer>
            {frontmatter.slug === '/projects' ? (
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        marginTop: 100,
                    }}
                >
                    <img
                        style={{ transform: 'rotate(-90deg)' }}
                        src={MSPImage}
                        alt=''
                    />
                    <div
                        style={{
                            fontSize: 45,
                            color: '#00000040',
                            marginTop: -100,
                        }}
                    >
                        <p>Explore MSP430 lunchbox projects</p>
                        <p
                            style={{
                                fontSize: 16,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            Checkout code of projects
                        </p>
                    </div>
                </div>
            ) : (
                <MarkdownContent
                    dangerouslySetInnerHTML={{ __html: html }}
                ></MarkdownContent>
            )}
        </ProjectContainer>
    )
}

export default ProjectContent
