import React from 'react';

class Xe extends React.Component {
    constructor(props) {
        console.log('Xe constructor: ', props);
        super(props);
        this.state = {
            color: props.color,
            value: props.value,
        }
        // this.shoot = this.shoot.bind(this);
    }
    // static getDerivedStateFromProps(props, state) {
    //     console.log('getDerivedStateFromProps');
    //     return { color: props.color };
    // }

    shoot() {
        console.log('shoot this = ', this);
        // alert("Great Shoot");
    }

    shoot2(b) {
        console.log('shoot 2 this =', this);
        console.log('shoot b', b);
        // alert("Great Shoot");
    }

    shoot3 = (a) => {
        // console.log('shoot2 this = ', this);
        console.log('shoot3 a = ', a);
    }

    render() {
        // console.log('Xe class: ', this.props.color);
        const shoot = (
            <h3 onClick={this.shoot}
            style={{ color: this.state.color, cursor: 'pointer' }} >
            {this.state.value}</h3>
        )
        
        const shoot2 = (
            <h2 onClick={this.shoot2.bind(this,'Goal A')}
            style={{ color: this.state.color, cursor: 'pointer' }} >
            {this.state.value}</h2>
        )

        const shoot3 = (
            <h2 onClick={() => this.shoot2("Goal")}
            style={{ color: this.state.color, cursor: 'pointer' }} >
            {this.state.value}</h2>
        )
        console.log('render');
        return shoot2;
    }

    // componentDidMount() {
    //     console.log('componentDidMount');
    //     setTimeout(() => {
    //         this.setState({ color: "yellow" })
    //         console.log('componentDidMount da thay doi thanh mau vang');
    //     }, 3000)
    // }
}
export default Xe;