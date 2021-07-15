import React from 'react'
import MSPImage from '../../assets/mspimage.jpg'
import {
    FooterContainer,
    MarkdownContent,
    ProjectContainer,
} from './projectContent.styles'
import GitImage from '../../assets/git.png'

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

            {frontmatter.slug !== '/projects' && (
                <FooterContainer>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            color: '#545454',
                        }}
                    >
                        <div>
                            Found a typo?{' '}
                            <a
                                style={{
                                    border: 'none',
                                    backgroundColor: '#222',
                                    color: '#eee',
                                    padding: 5,
                                    borderRadius: 5,
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    fontSize: 15,
                                }}
                                href='https://github.com/Stool-Softwares/msp430G2553'
                            >
                                Edit this page
                            </a>
                        </div>
                        <div style={{ marginTop: 30 }}>
                            <a
                                href='https://github.com/Stool-Softwares'
                                target='_blank'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    style={{
                                        width: 35,
                                    }}
                                    src={GitImage}
                                ></img>
                            </a>
                            <p style={{ color: '#545454' }}>Stool softwares</p>
                        </div>
                    </div>
                </FooterContainer>
            )}
        </ProjectContainer>
    )
}

export default ProjectContent
