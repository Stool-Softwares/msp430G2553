import React from 'react'
import styled from 'styled-components'

const ProjectsListContainer = styled.div`
    width: 400px;
    height: calc(100vh - 70px);
    background-color: #eee;
    overflow-y: scroll;
`

function ProjectsList({ posts }) {
    posts = posts.filter(function removeDefaultPage(post) {
        return post.node.frontmatter.slug !== '/projects'
    })

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

            {posts.map((post, i) => (
                <div
                    key={post.node.id}
                    style={{
                        width: '100%',
                        height: '30px',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        padding: '0 40px 0 40px',
                        backgroundColor: '#ccc',
                    }}
                >
                    <div>
                        {i}. {post.node.frontmatter.title}
                    </div>
                </div>
            ))}
        </ProjectsListContainer>
    )
}

export default ProjectsList
