import React from 'react'
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from "styled-components"
import theme from "./theme.js"

import IconC3po from './Icons/IconC3po.js';
import IconVader from './Icons/IconVader.js';
import IconBb8 from './Icons/IconBb8.js';
import IconFett from './Icons/IconFett.js';

const Panel = styled.div`
  display: flex;
  flex-direction: row;
  padding: 14px;
  border-radius: 17px;
  background-color: ${ props => props.dark ? props.theme.colors.panelColorDark : props.theme.colors.panelColor };
`

const Input = styled.input`
  background-color: ${(props) => props.theme.colors.panelColor};
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`

class Characters extends React.Component {
    // not totally required for this class
    static propTypes = {
        data: PropTypes.array
    }

    static defaultProps = {
        data: []
    }

    constructor (props) {
        super(props)

        /*const theme = {
            panelColor: 'blue'
        }

        this.theme = {
            panelColor: 'white'
        }

        if (props.dark) {
            this.theme.panelColor = '#fcff70'
        }*/

    }

    state = {
        data: this.props.data || []
    }

   render () {

        let current = this.props.currentTab;

        const characterIcon = (id) => ({
           "1": <IconC3po />,
           "2": <IconVader />,
           "3": <IconBb8 />,
           "4": <IconFett />
        })[id]

        const characterDetails = this.props.data.map(function (character) {
             if (character.id === current) {
                return (
                    <Panel key={character.id}>
                        {characterIcon(character.id)}
                        <Text className='m_tabpanel_text' key={character.id}>
                            <Input type='text' value={character.name} />
                            <p>{character.description}</p>
                        </Text>
                    </Panel>
                )
            }
        })


        return (
            <ThemeProvider theme={theme}>
                <span>
                    {characterDetails}
                </span>
            </ThemeProvider>
        )
    }
}

export default Characters;