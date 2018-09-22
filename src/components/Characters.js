import React from 'react'
import PropTypes from 'prop-types';

import IconC3po from './Icons/IconC3po.js';
import IconVader from './Icons/IconVader.js';
import IconBb8 from './Icons/IconBb8.js';
import IconFett from './Icons/IconFett.js';

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

        const characterDetails = this.props.data.map(function (character) {
             if (character.id === current) {
                return (
                    <div
                        key={character.id}
                        className='m_tabpanel'
                        id='panel-4'
                        aria-labelledby='tab-4'
                        aria-hidden='true'
                        role='tabpanel'
                    >
                        {characterIcon(character.id)}
                        <div className='m_tabpanel_text' key={character.id}>
                            <input type='text' value={character.name} />
                            <p>{character.description}</p>
                        </div>
                    </div>
                )
            }
        })

        function characterIcon (id) {
            switch (id) {
                case 1:
                    return <IconC3po />
                case 2:
                    return <IconVader />
                case 3:
                    return <IconBb8 />
                case 4:
                    return <IconFett />
                default:
                    return <div>empty tab</div>
            }
        }

        return (
            <span>
        {characterDetails}
      </span>
        )
    }
}

export default Characters;