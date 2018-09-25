import React from 'react'
import styled, { ThemeProvider } from "styled-components"
import theme from "./theme.js"

import PropTypes from 'prop-types'
import IconC3po from './Icons/IconC3po.js'
import IconVader from './Icons/IconVader.js'
import IconBb8 from './Icons/IconBb8.js'
import IconFett from './Icons/IconFett.js'
import Characters from './Characters.js'
import Tabs from './Tabs.js'

import axios from 'axios'

const Panel = styled.div`
    background-color: transparent;
    margin: 0 auto;
`

const Spacer = styled.p`
  line-height: 2em;
  display: inline-block;
  color: ${ props => props.theme.colors.panelColor };
`

class Home extends React.Component {
    // not totally required for this class
    static propTypes = {
        currentTab: PropTypes.number,
        width: PropTypes.number,
        goMobile: PropTypes.bool,
        tabText: PropTypes.string,
        characters: PropTypes.array
    }

    static defaultProps = {
        currentTab: 1,
        width: window.innerWidth,
        goMobile: false,
        tabText: '',
        characters: []
    }
    state = {
        currentTab: this.props.currentTab || 1
    }

    componentDidMount () {
        //window.addEventListener('resize', this.updateDimensions)
        //this.setState({ width: window.innerWidth })

        axios.get('/data/data.json')
            .then(res => {
                this.setState({
                    characters: res.data
                })
            })
            .catch(function (error) {
                console.log("The Axios call went bad: " + error.res.data)
            })
    }

    changeTab = tab => {
        this.setState({ currentTab: tab.id })
    }

    render () {

        const items = this.state.characters;

        return (
            <ThemeProvider theme={theme}>
                <div className='c_tabsSwitcher'>
                    <Tabs
                        currentTab={this.state.currentTab}
                        changeTab={this.changeTab}
                        data={items}
                        className={this.state.goMobile ? 'nav--is-hidden' : ''}
                    />
                    <Panel>
                        {!this.state.goMobile
                            ? <Characters
                                data={items}
                                currentTab={this.state.currentTab}
                            />
                            : <span>
                                <IconC3po />
                                <IconVader />
                                <IconBb8 />
                                <IconFett />
                            </span>}
                    </Panel>

                    <Spacer>test text</Spacer>

                    <Tabs
                        currentTab={this.state.currentTab}
                        changeTab={this.changeTab}
                        data={items}
                        dark
                        className={this.state.goMobile ? 'nav--is-hidden' : ''}
                    />
                    <Panel>
                        {!this.state.goMobile
                            ? <Characters
                                dark={this.state.dark}
                                data={items}
                                currentTab={this.state.currentTab}
                            />
                            : <span>
                                <IconC3po />
                                <IconVader />
                                <IconBb8 />
                                <IconFett />
                            </span>}
                    </Panel>
                </div>
            </ThemeProvider>
        )
    }
}

export default Home
