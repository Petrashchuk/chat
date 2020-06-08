import React from 'react';
import './Chat_container_style.css';
import 'font-awesome/css/font-awesome.min.css';
import ws from '../../services/socket';
import Footer from '../Footer/Footer'
import Main_content from '../Main_content/Main_content'
import Header from "../Header/Header";

import {connect} from "react-redux";
import {online, disconnect} from '../../store/actions'

const iconStyle = {
    color: '#2791CC',
    fontSize: 22 + 'px',
    textAlign: 'center',
    marginTop: 25 + 'px',
    marginLeft: 20 + 'px'
};


class Chat_container extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            msg: ""
        }
    }

    componentDidMount() {
        this.connectSocket()

    }

    connectSocket = () => {
        const {onlineStatus, disconnectStatus} = this.props;
        const {msg} = this.state;
        ws.onopen = () => {
            onlineStatus();
        };
        ws.onclose = () => {
            disconnectStatus();
        };
        ws.onmessage = msg => {
            this.setState({msg: msg.data})
        }
    };

    sendMessage = (message) => {
        ws.send(message);
    };

    render() {
        const {msg} = this.state;
        return (
            <section className='container'>
                <Header/>
                <Main_content newMsg={msg}/>
                <Footer iconStyle={iconStyle} sendMessage={this.sendMessage}/>
            </section>
        )
    }
}

function mapStateToProps({stateWs}) {
    return {
        stateWs
    }
}

function mapDisptachToProps(dispatch) {
    return {
        onlineStatus: (status) => {
            dispatch(online(status))
        },
        disconnectStatus: (status) => {
            dispatch(disconnect(status))
        },
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(Chat_container)



