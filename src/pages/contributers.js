import { graphql } from 'gatsby'
import React from 'react'
import Navbar from '../components/navbar/Navbar'

function Contributers({ data }) {
    console.log(data)
    let blogMetaData = data.allMarkdownRemark.edges
    blogMetaData = blogMetaData.filter(function removeDefault(meta) {
        return meta.node.frontmatter.social !== null
    })

    return (
        <div>
            <Navbar />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 40,
                    flexDirection: 'column',
                }}
            >
                <h1 style={{ fontSize: 45 }}>Contributers of these projects</h1>
                <ul
                    style={{
                        listStyle: 'none',
                        marginTop: 20,
                        textAlign: 'center',
                    }}
                >
                    {blogMetaData.map((edge) => (
                        <li style={{ color: '#5d5d5d', fontSize: 20 }}>
                            {edge.node.frontmatter.author}(
                            <a
                                style={{
                                    textDecoration: 'none',
                                    color: '#094aa9',
                                }}
                                href={edge.node.frontmatter.social}
                            >
                                @{edge.node.frontmatter.socialName}
                            </a>
                            )
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export const fetchData = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        author
                        social
                        socialName
                    }
                }
            }
        }
    }
`

export default Contributers
