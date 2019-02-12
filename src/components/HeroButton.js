import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors, deviceSize } from '../utils/globalStyles'

export const HeroButton = styled(Link)`
  position: relative;
  background: ${colors.brand};
  color: #004a54;
  padding: 20px 44px;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;

  box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.05), 0 10px 10px hsla(0, 0%, 0%, 0.05),
    inset 0 1px 0 hsl(177, 29%, 93%);
  transition: ease-in-out 0.2s;

  &:hover {
    background: #7bfff7;
    box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.05),
      0 14px 16px hsla(0, 0%, 0%, 0.07);
  }
  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px #004a54;
  }

  &:active {
    box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
  }

  @media (max-width: ${deviceSize.large}) {
    padding: 16px 32px;
    font-size: 16px;
  }
`
