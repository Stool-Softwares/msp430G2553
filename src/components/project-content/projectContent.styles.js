import styled from 'styled-components'

export const ProjectContainer = styled.div`
    width: calc(100% - 400px);
    height: calc(100vh - 70px);
    overflow-y: scroll;

    div {
        .default-img {
            @media only screen and (max-width: 820px) {
                height: 500px;
            }

            @media only screen and (max-width: 500px) {
                height: 350px;
            }
        }

        .default-content {
            width: 70%;
            text-align: center;
            @media only screen and (max-width: 820px) {
                p {
                    font-size: 30px;
                }
            }
        }
    }
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
        @media only screen and (max-width: 820px) {
            font-weight: 20px;
        }
    }

    h2 {
        font-size: 35px;
        text-decoration: underline;
        margin-top: 20px !important;
        font-weight: 500;
        @media only screen and (max-width: 820px) {
            font-size: 30px;
        }

        @media only screen and (max-width: 490px) {
            font-size: 25px;
        }
    }

    h3 {
        font-size: 30px;
        font-weight: 300;
        margin: 0 !important;
        margin-bottom: 10px !important;
        @media only screen and (max-width: 820px) {
            font-size: 20px;
            font-weight: 500;
        }

        @media only screen and (max-width: 490px) {
            font-size: 15px;
        }
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
        @media only screen and (max-width: 820px) {
            font-size: 18px;
        }
        @media only screen and (max-width: 490px) {
            font-size: 16px;
        }

        span {
            a {
                img {
                    border: 4px solid #222;
                }
            }
        }
    }

    iframe,
    html,
    body,
    #player {
        width: 100%;
    }

    pre {
        width: 900px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        * {
            font-family: 'Oxygen Mono' !important;
        }
        @media only screen and (max-width: 1480px) {
            width: 750px;
        }
        @media only screen and (max-width: 820px) {
            margin: auto;
            width: 100%;
        }
        @media only screen and (max-width: 490px) {
            font-size: 13px;
        }
    }

    blockquote {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        margin-bottom: 0px !important;
        width: 900px;
        background-color: #4a4a4a;
        margin-bottom: -10px;
        padding: 5px 15px 5px 15px;

        @media only screen and (max-width: 490px) {
            padding: 10px;
        }

        @media only screen and (max-width: 1480px) {
            width: 750px;
        }
        @media only screen and (max-width: 820px) {
            margin: auto;
            width: 100%;
        }

        p {
            color: #eee !important;
            font-size: 18px;
            margin: 0;
            padding: 0;
            @media only screen and (max-width: 490px) {
                font-size: 16px;
            }

            a {
                color: #c3c3c3;
                @media only screen and (max-width: 490px) {
                    font-size: 16px;
                }
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
