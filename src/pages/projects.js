import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/navbar/Navbar'
import ProjectContent from '../components/project-content/ProjectContent'
import ProjectsList from '../components/projects-list/ProjectsList'

const App = styled.div`
    width: 100%;
    height: 100%;
`

const ProjectsContent = styled.div`
    display: flex;
    justify-content: center;
`

function Projects() {
    return (
        <App>
            <Navbar />
            <ProjectsContent>
                <ProjectsList />
                <ProjectContent />
            </ProjectsContent>
        </App>
    )
}

export default Projects
