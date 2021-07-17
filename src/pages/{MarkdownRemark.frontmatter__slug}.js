import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/navbar/Navbar'
import ProjectContent from '../components/project-content/ProjectContent'
import ProjectsList from '../components/projects-list/ProjectsList'
import SEO from '../components/seo/SEO'

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
    let posts = data.allMarkdownRemark.edges

    return (
        <App>
            <SEO title={markdown.frontmatter.title} />
            <Navbar />
            <ProjectsContent>
                <ProjectsList posts={posts} />
                <ProjectContent
                    html={markdown.html}
                    frontmatter={markdown.frontmatter}
                />
            </ProjectsContent>
        </App>
    )
}

export const fetchData = graphql`
    query ($id: String) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                slug
                title
            }
        }
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        slug
                    }
                    html
                }
            }
        }
    }
`

export default Projects
