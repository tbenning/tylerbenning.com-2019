import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../utils/globalStyles'
import { Link } from 'gatsby'

const Container = styled.div`
  border: 2px solid ${colors.ink20};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 256px;
  margin-bottom: 20px;
  img {
      margin-top: 4px;
  }
}
`
const TextContainer = styled.div`
  padding: 20px;
  width: 100%;
`

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 4px;
`
const Subheading = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.ink80};
  margin-bottom: 4px;
`
const MetaData = styled.span`
  font-size: 12px;
  color: ${colors.ink80};
`

class ProjectItem extends Component {
  render() {
    // const imgSrc = this.props
    // const title = this.props
    // const subTitle = this.props
    // const timeline = this.props
    return (
      <Container>
        <Link to="/">
          <img src="https://source.unsplash.com/256x256" />
        </Link>

        <TextContainer>
          <Heading>UX Quick Wins</Heading>
          <Subheading>
            Improving the mobile user experience one ticket at a time
          </Subheading>
          <MetaData>2018 | 3M Read</MetaData>
        </TextContainer>
      </Container>
    )
  }
}

export default ProjectItem
