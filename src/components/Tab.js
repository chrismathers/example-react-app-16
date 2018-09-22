import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

const Item = styled.li`
  background-color: ${props => (props.isCurrent ? props.theme.panelColor : '#eaeaea')};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 8px 8px 5px 8px;
  margin-left: 1px;
  color: ${props => (props.isCurrent ? props.theme.color : '#1d6ab7')};
  font-weight: bold;
`

class Tab extends React.Component {
    constructor (props) {
        super(props)

        console.log(this.props.id);

        this.handleClick = this.handleClick.bind(this)

        const theme = {
            panelColor: 'white',
            color: '#1d6ab7'
        }

        this.theme = {
            panelColor: 'white',
            color: 'black'
        }

        if (props.themeStyle === 'dark') {
            this.theme.panelColor = 'black'
            this.theme.color = 'white;'
        }
    }

    handleClick (e) {
        e.preventDefault()
        this.props.handleClick()
    }

    render () {
        return (
            <ThemeProvider theme={this.theme}>
                <Item
                    aria-controls={'panel-' + this.props.id}
                    aria-selected='true'
                    role='tab'
                    isCurrent={this.props.isCurrent}
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
