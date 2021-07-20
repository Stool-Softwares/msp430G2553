import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/navbar/Navbar'
import ProjectContent from '../components/project-content/ProjectContent'
import ProjectsList from '../components/projects-list/ProjectsList'
import SEO from '../components/seo/SEO'
import '../styles/global.module.css'

const App = styled.div`
    width: 100%;
    height: 100%;

    .projects-list {
        @media only screen and (max-width: 1480px) {
            width: 25%;
        }
        @media only screen and (max-width: 1140px) {
            display: none;
        }
    }

    .project-content {
        justify-content: center;
        .content {
            @media only screen and (max-width: 1480px) {
                width: 750px;
            }
        }

        @media only screen and (max-width: 1480px) {
            margin: 0;
            width: calc(100vw - 25%);
        }
        @media only screen and (max-width: 1140px) {
            width: 100%;
        }
    }
`

const ProjectsContent = styled.div`
    display: flex;
    justify-content: flex-start;
`

function Projects({ data, path }) {
    let markdown = data.markdownRemark
    let posts = data.allMarkdownRemark.edges

    return (
        <App>
            <SEO title={markdown.frontmatter.title} />
            <Navbar path={path} />
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
