import React, { Component } from 'react';

class Test extends Component {
    state = {
        id: ''
    }

    componentDidMount() {
        this.setState({id: 'https://picsum.photos/200/300/?image=' + this.props.id});
    }

    render() {
        return (
            <div>
                <img src={this.state.id}/>
            </div>
        )
    }
}

export default Test;