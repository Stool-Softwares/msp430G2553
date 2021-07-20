import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/navbar/Navbar'
import '../styles/global.module.css'

const ContributersList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    flex-direction: column;
    text-align: center;
    padding: 0 5% 0 5%;

    h2 {
        @media only screen and (max-width: 700px) {
            font-size: 35px !important;
        }
    }

    ul li {
        font-size: 18px !important;
    }
`

function Contributers({ data }) {
    let blogMetaData = data.allMarkdownRemark.edges
    blogMetaData = blogMetaData.filter(function removeDefault(meta) {
        return meta.node.frontmatter.social !== null
    })

    return (
        <div>
            <Navbar />
            <ContributersList>
                <h2 style={{ fontSize: 45 }}>Contributers</h2>
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
            </ContributersList>
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
