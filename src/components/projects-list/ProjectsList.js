import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const ProjectsListContainer = styled.div`
    width: 400px;
    height: calc(100vh - 70px);
    background-color: #eee;
    overflow-y: scroll;
`

const TitleWrapper = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 40px 0 40px;
    background-color: #ccc;

    a {
        color: black;
        text-decoration: none;
    }
`

function ProjectsList({ posts }) {
    posts = posts.filter(function removeDefaultPage(post) {
        return post.node.frontmatter.slug !== '/projects'
    })

    return (
        <ProjectsListContainer className='projects-list'>
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

            {posts.map((post, i) => (
                <TitleWrapper key={post.node.id}>
                    <Link to={post.node.frontmatter.slug}>
                        {i}. {post.node.frontmatter.title}
                    </Link>
                </TitleWrapper>
            ))}
        </ProjectsListContainer>
    )
}

export default ProjectsList
