import React from 'react';

class Xe extends React.Component {
    constructor(props){
        console.log('Xe constructor: ', props);
        super(props);
        this.state={
            color: props.color,
            value: props.value,
        }
    }
    render() {
        // console.log('Xe class: ', this.props.color);
        return <h3 style={{ color: this.state.color }} >{this.state.value}</h3>
    }
}
export default Xe;