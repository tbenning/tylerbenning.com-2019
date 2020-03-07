import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../utils/globalStyles'
import Tab from './Tab'

const StyledTabs = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;    
    display: flex;
    justify-content: flex-start;
    border-bottom: 2px solid ${colors.ink20};
    z-index: 10;
    margin-bottom: 20px;
`

class Tabs extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeTab: this.props.children[0].props.label,
        }
    }

    onClickTab = (tab) =>{
        this.setState({activeTab: tab})
    }

    render(){
        const {
            onClickTab,
            props: {
              children,
            },
            state: {
              activeTab,
            }
          } = this;

    return(
        <>
        <StyledTabs>
            {children.map(tab => {
                const { label } = tab.props
                return ( 
                    <Tab key={label} label={label} activeTab={activeTab} onClick={onClickTab}/>
                )
            })}
        </StyledTabs>
        <div>
            {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
    </>
    )
    }
}
export default Tabs;