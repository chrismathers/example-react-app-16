import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme.js'

const Item = styled.li`
  background-color: ${props => (props.isCurrent 
        ? props => props.dark ? props.theme.colors.panelColorDark : props.theme.colors.panelColor
        : props.theme.colors.tabColor
    )};
  border-top-left-radius: ${props => props.theme.units.tabBorderRadius};
  border-top-right-radius: ${props => props.theme.units.tabBorderRadius};
  padding: 8px 8px 5px 8px;
  margin-left: 1px;
  color: ${props => (props.isCurrent ? props.theme.colors.tabSelectedTextColor : props.theme.colors.tabTextColor)};
  font-weight: bold;
`

class Tab extends React.Component {
    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (e) {
        e.preventDefault()
        this.props.handleClick()
    }

    render () {
        return (
            <ThemeProvider theme={theme}>
                <Item
                    aria-controls={'panel-' + this.props.id}
                    aria-selected='true'
                    role='tab'
                    isCurrent={this.props.isCurrent}
                    dark={this.props.dark}
                >
                    <a onClick={this.handleClick}>
                        {this.props.name}
                    </a>
                </Item>
            </ThemeProvider>
        )
    }
}

export default Tab
