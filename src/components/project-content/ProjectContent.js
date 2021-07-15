import React from 'react'
import styled from 'styled-components'
import MSPImage from '../../assets/mspimage.jpg'

const ProjectContainer = styled.div`
    width: calc(100% - 400px);
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
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
            )}
        </ProjectContainer>
    )
}

export default ProjectContent
