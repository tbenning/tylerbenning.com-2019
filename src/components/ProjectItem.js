import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../utils/globalStyles'
import { Link } from 'gatsby'

const Container = styled.div`
  border: 2px solid ${colors.ink20};
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 200px;
  margin-bottom: 20px;
  img {
      margin-top: 4px;
      margin-left: -2px;
      border-radius: 4px 0 0 4px;
      max-height: 200px;
  }

  @media (max-width: 500px) {
    height:125px;
    img {
      max-height: 125px;
    }
  }
  
}
`
const TextContainer = styled.div`
  padding: 20px;
  width: 100%;
  a {
    text-decoration: none;
    color: inherit;
  }
  a :hover {
    text-decoration: underline;
  }
`

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 4px;
  @media (max-width: 650px) {
    font-size: 20px;
  }
`

const Subheading = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.ink80};
  margin-bottom: 4px;

  @media (max-width: 650px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`
const MetaData = styled.span`
  font-size: 12px;
  color: ${colors.ink80};
`

class ProjectItem extends Component {
  render() {
    const imgSrc = this.props.imgSrc
    const title = this.props.title
    const subtitle = this.props.subtitle
    const timeline = this.props.timeline
    const readTime = this.props.readTime
    const linkTo = this.props.linkTo
    return (
      <Container>
        <Link to={linkTo}>
          <img src={imgSrc} />
        </Link>

        <TextContainer>
          <Link to={linkTo}>
            <Heading>{title}</Heading>
          </Link>
          <Subheading>{subtitle}</Subheading>
          <MetaData>
            {timeline} | {readTime}M Read
          </MetaData>
        </TextContainer>
      </Container>
    )
  }
}

export default ProjectItem
