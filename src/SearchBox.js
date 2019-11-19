import React, { Component } from 'react';

class SearchBox extends Component {
    constructor(props) {
        super()

    }

    render () {
        return(
            <div className="pa2">
                <input onChange={this.props.searchChange} className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots" />
            </div>
    
        );
    }
}

export default SearchBox;