import React, {useState} from "react";
import './Header_style.css';
import classNames from 'classnames';
import ws from "../../services/socket";

export default class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            message: 'Disconnect'
        }
    }

    componentDidMount() {
        this.connectSocket();
    }

    connectSocket = () => {
        ws.onopen = () => this.setState({status: true, message: 'Online'});
        ws.onclose = () => this.setState({status: false, message: 'Disconnect'});
        ws.onmessage = msg => {
            console.log(msg);
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState);
    }

    render() {
        const {status, message} = this.state;
        return (
            <header>
                <div className=' header_section'>
                    <div className={classNames(status ? 'green' : 'red', 'circle')}/>
                    <h4>{message}</h4>
                </div>
            </header>
        )
    }
}
