import styled from 'styled-components'
import { Link } from 'gatsby'

export const HeroButton = styled(Link)`
  position: absolute;
  background: #49f2e7;
  color: #004a54;
  padding: 20px 44px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;

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
`
