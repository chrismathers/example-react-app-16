import React from 'react'
import PropTypes from 'prop-types';

import Tab from '../components/Tab.js'
import styled from 'styled-components'

const TabList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
`

class Tabs extends React.Component {
    static propTypes = {
        data: PropTypes.array
    }

    static defaultProps = {
        data: []
    }

    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (tab) {
        this.props.changeTab(tab)
    }

    render () {

        return (
            <TabList role='tablist'>
                {this.props.data.map(
                    function (tab) {
                        return (
                            <Tab
                                key={tab.id}
                                handleClick={this.handleClick.bind(this, tab)}
                                name={tab.name}
                                isCurrent={this.props.currentTab === tab.id}
                                themeStyle={this.props.themeStyle}
                            />
                        )
                    }.bind(this)
                )}
            </TabList>
        )
    }
}

export default Tabs
