import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, deviceSize } from '../utils/globalStyles'
import { Link } from 'gatsby'

const Container = styled(Link)`
  border: 2px solid ${colors.ink20};
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 200px;
  margin-bottom: 20px;
  text-decoration: none;
  color: inherit;
  transition: 0.25s ease-in-out;

  &:hover, :active {
    background: ${colors.ink10};
    box-shadow: 0 10px 18px -5px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.04);
    transform: translateY(-2px);
  }

  img {
      border-radius: 4px 0 0 4px;
      max-height: 200px;
  }

  @media (max-width: ${deviceSize.small}) {
    height:125px;
    margin-bottom: 8px;
    img {
      max-height: 125px;
    }
  }
  
}`

const TextContainer = styled.div`
  padding: 20px;
  width: 100%;
`

const Heading = styled.h2`
  font-size: 24px;
  margin: 0 0 4px 0;
  @media (max-width: ${deviceSize.smallMedium}) {
    font-size: 18px;
  }
`

const Subheading = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.ink80};
  margin: 0 0 4px 0;
  line-height: 1.25;

  @media (max-width: ${deviceSize.smallMedium}) {
    font-size: 14px;
  }
  @media (max-width: ${deviceSize.small}) {
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
      <Container to={linkTo}>
        <img src={imgSrc} />
        <TextContainer>
          <Heading>{title}</Heading>
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
