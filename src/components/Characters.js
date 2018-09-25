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
  border-radius: ${props => props.theme.units.panelBorderRadius};
  background-color: ${ props => props.dark ? props.theme.colors.panelColorDark : props.theme.colors.panelColor };
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`

const Title = styled.h3`
  margin: 0;
`

class Characters extends React.Component {
    // not totally required for this class
    static propTypes = {
        data: PropTypes.array
    }

    static defaultProps = {
        data: []
    }

    state = {
        data: this.props.data || []
    }

   render () {

        let current = this.props.currentTab;
        let themeColor = this.props.dark;

        const characterIcon = (id) => ({
           "1": <IconC3po />,
           "2": <IconVader />,
           "3": <IconBb8 />,
           "4": <IconFett />
        })[id]

        const characterDetails = this.props.data.map(function (character) {
             if (character.id === current) {
                return (
                    <Panel
                        key={character.id}
                        dark={themeColor}
                    >
                        {characterIcon(character.id)}
                        <Text className='m_tabpanel_text' key={character.id}>
                            <Title>{character.name}</Title>
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