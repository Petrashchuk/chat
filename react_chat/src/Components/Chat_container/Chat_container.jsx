import React from 'react';
import './Chat_container_style.css';
import 'font-awesome/css/font-awesome.min.css';
import ws from '../../services/socket';
import Footer from '../Footer/Footer'
import Main_content from '../Main_content/Main_content'
import Header from "../Header/Header";

const iconStyle = {
    color: '#2791CC',
    fontSize: 22 + 'px',
    textAlign: 'center',
    marginTop: 25 + 'px',
    marginLeft: 20 + 'px'
};


export default class Chat_container extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    sendMessage = (message) => {
        ws.send(message);
    };

    render() {
        return (
            <section className='container'>
                <Header/>
                <Main_content/>
                <Footer iconStyle={iconStyle} sendMessage={this.sendMessage}/>
            </section>
        )
    }
}

