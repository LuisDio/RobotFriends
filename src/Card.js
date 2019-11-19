import React, { Component } from 'react';

class Card extends Component {
    render() {
        return(
            <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
                <img alt='Robot' src='https://robohash.org/test?200x200' />
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        )
    }

}

export default Card;