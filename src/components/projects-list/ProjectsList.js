import React from 'react'
import styled from 'styled-components'

const ProjectsListContainer = styled.div`
    width: 400px;
    height: calc(100vh - 70px);
    background-color: #eee;
    overflow-y: scroll;
`

function ProjectsList() {
    return (
        <ProjectsListContainer>
            <div
                style={{
                    fontSize: 30,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '25px 0 25px 0',
                }}
            >
                List of projects
            </div>
        </ProjectsListContainer>
    )
}

export default ProjectsList
