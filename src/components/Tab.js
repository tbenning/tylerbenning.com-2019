import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../utils/globalStyles'

const StyledTab = styled.li`
    margin: 8px;
`

const StyledButton = styled.button`
    border: none;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: ${colors.ink20};
    color: ${colors.ink80};
    border-radius: 20px;
    font-weight: 600;
    padding: 12px 20px;
    cursor: pointer;
    transition: ease-in-out 0.2s;
    &:hover {
        background: ${colors.ink20};
    }
    &.active, .active:hover {
        background: ${colors.brandLight};
        color: ${colors.teal90};
    }
    &:focus {
        outline: none;
        box-shadow: inset 0 0 0 2px #004a54;
    }

`

class Tab extends Component {
    onClick = () => {
      const { label, onClick } = this.props;
      onClick(label);
    }

    render() {
        const {
          onClick,
          props: {
            activeTab,
            label,
          },
        } = this;

        return (
          <StyledTab>
            <StyledButton onClick={onClick} className={activeTab === label && 'active'}>{label}</StyledButton>
          </StyledTab>
        );
      }
    }
    
    export default Tab;