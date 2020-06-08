import React from 'react';
import FontAwesome from '../Font_awesome_icon/Font_awesome_icon'
import TextField from '@material-ui/core/TextField';
import './Footer_style.css';

export default class Footer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    render() {
        const {iconStyle, sendMessage} = this.props;
        const {value} = this.state;
        return (
            <footer>
                <div className='footer-wrapper'>
                    <TextField ref={this.textInput} value={value} onChange={e => this.setState({value: e.target.value})}
                               style={{width: "94%", marginLeft: 20, paddingTop: 10}} id="standard-basic"
                               label="Enter your message"/>
                    <FontAwesome handleClick={() => {
                        if (value) {
                            sendMessage(value);
                            this.setState({value: ''})
                        }
                    }} className={'fa fa-paper-plane'}
                                 style={iconStyle}/>
                </div>
            </footer>
        )
    }
}
