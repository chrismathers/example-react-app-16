import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'
import IconC3po from '../components/Icons/IconC3po.js'
import IconVader from '../components/Icons/IconVader.js'
import IconBb8 from '../components/Icons/IconBb8.js'
import IconFett from '../components/Icons/IconFett.js'
import Characters from '../components/Characters.js'
import Tabs from '../components/Tabs.js'

import axios from 'axios'

const Panel = styled.div`
    background-color: transparent;
    margin: 0 auto;
`

const Spacer = styled.p`
  line-height: 2em;
  display: inline-block;
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

                <div className='c_tabsSwitcher'>
                    <Tabs
                        currentTab={this.state.currentTab}
                        changeTab={this.changeTab}
                        data={items}
                        themeStyle='light'
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

                    <Spacer/>

                    <Tabs
                        currentTab={this.state.currentTab}
                        changeTab={this.changeTab}
                        data={items}
                        themeStyle='dark'
                        className={this.state.goMobile ? 'nav--is-hidden' : ''}
                    />
                    <Panel>
                        {!this.state.goMobile
                            ? <Characters
                                dark
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
        )
    }
}

export default Home
