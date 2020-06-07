import React from 'react';
import './Chat_container_style.css';
import 'font-awesome/css/font-awesome.min.css';
import FontAwesome from '../Font_Awesome_Icon'
import TextField from '@material-ui/core/TextField';

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
            textValue: ''
        }
    }

    sendMessage = () => {
        const {textValue} = this.state;
        console.log(textValue);
    };

    render() {
        const {textValue} = this.state;
        return (
            <section className='container'>
                <header>
                </header>
                <div className='main-content'>

                </div>
                <footer>
                    <div className='footer-wrapper'>
                        <TextField onChange={e => this.setState({textValue: e.target.value})}
                                   style={{width: "94%", marginLeft: 20, paddingTop: 10}} id="standard-basic"
                                   label="Enter your message"/>
                        <FontAwesome handleClick={this.sendMessage} className={'fa fa-paper-plane'}
                                     style={iconStyle}/>
                    </div>
                </footer>
            </section>
        )
    }
}

export default Chat_container
