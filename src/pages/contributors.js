import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/navbar/Navbar'
import '../styles/global.module.css'

const ContributorsList = styled.div`
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

function Contributors({ data }) {
    let blogMetaData = data.allMarkdownRemark.edges

    blogMetaData = blogMetaData.filter(function removeDefault(meta) {
        return meta.node.frontmatter.social !== null
    })

    function splitName(socialNames) {
        if (!socialNames.includes(', ')) return [socialNames, '']
        let names = socialNames.split(', ')
        return names
    }

    function splitSocials(socialLinks) {
        if (!socialLinks.includes(' | ')) return [socialLinks, '']
        let links = socialLinks.split(' | ')
        return links
    }

    return (
        <div>
            <Navbar />
            <ContributorsList>
                <h2 style={{ fontSize: 45 }}>Contributors</h2>
                <ul
                    style={{
                        listStyle: 'none',
                        marginTop: 20,
                        textAlign: 'center',
                    }}
                >
                    {blogMetaData.map((edge) => (
                        <li
                            style={{
                                color: '#5d5d5d',
                                fontSize: 20,
                                marginBottom: '20px',
                            }}
                        >
                            {edge.node.frontmatter.author} (
                            <a
                                style={{
                                    textDecoration: 'none',
                                    color: '#094aa9',
                                }}
                                target='_blank'
                            >
                                @
                                {splitName(edge.node.frontmatter.socialName)[0]}
                                ,
                            </a>
                            <a
                                style={{
                                    textDecoration: 'none',
                                    color: '#094aa9',
                                }}
                                target='_blank'
                            >
                                @
                                {splitName(edge.node.frontmatter.socialName)[1]}
                            </a>
                            )
                        </li>
                    ))}
                </ul>
            </ContributorsList>
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

export default Contributors
