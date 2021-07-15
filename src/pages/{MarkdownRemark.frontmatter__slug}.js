import { graphql } from 'gatsby'
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

function Projects({ data }) {
    let markdown = data.markdownRemark
    return (
        <App>
            <Navbar />
            <ProjectsContent>
                <ProjectsList />
                <ProjectContent
                    html={markdown.html}
                    frontmatter={markdown.frontmatter}
                />
            </ProjectsContent>
        </App>
    )
}

export const fetchMarkdown = graphql`
    query ($slug: StringQueryOperatorInput) {
        markdownRemark(frontmatter: { slug: $slug }) {
            frontmatter {
                title
                slug
            }
            html
        }
    }
`

export default Projects
