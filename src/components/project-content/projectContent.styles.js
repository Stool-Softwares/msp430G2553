import styled from 'styled-components'

export const ProjectContainer = styled.div`
    width: calc(100% - 400px);
    height: calc(100vh - 70px);
    overflow-y: scroll;
`

export const MarkdownContent = styled.div`
    width: 1000px;
    margin: auto;

    * {
        margin: 0;
        padding: 0;
        margin-bottom: 10px;
    }

    h1 {
        font-size: 40px;
    }

    h2 {
        font-size: 35px;
        text-decoration: underline;
        margin-top: 20px !important;
        font-weight: 500;
    }

    h3 {
        font-size: 30px;
        font-weight: 300;
    }

    h4 {
        font-size: 25px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Roboto';
        color: #383838;
        margin-top: 40px;
    }

    p {
        font-size: 20px;
        text-align: justify;
        font-family: 'Roboto';
        color: #545454;

        span {
            a {
                img {
                    border: 4px solid #222;
                }
            }
        }
    }

    pre {
        width: 900px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        * {
            font-family: 'Oxygen Mono' !important;
        }
    }

    blockquote {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        width: 900px;
        background-color: #4a4a4a;
        margin-bottom: -10px;
        padding: 5px 15px 5px 15px;

        p {
            color: #eee !important;
            font-size: 18px;

            a {
                color: #c3c3c3;
            }
        }
    }
`

export const FooterContainer = styled.div`
    width: 100%;
    padding: 50px 0 50px 0;
    background-color: #eee;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`
