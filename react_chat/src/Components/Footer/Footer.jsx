import React, {useState} from 'react';
import FontAwesome from '../Font_awesome_icon/Font_awesome_icon'
import TextField from '@material-ui/core/TextField';
import './Footer_style.css';

export default function Footer({iconStyle, sendMessage}) {
    const [textValue, setTextValue] = useState('');
    return (
        <footer>
            <div className='footer-wrapper'>
                <TextField onChange={e =>{
                    setTextValue(e.target.value)
                }}
                           style={{width: "94%", marginLeft: 20, paddingTop: 10}} id="standard-basic"
                           label="Enter your message"/>
                <FontAwesome handleClick={() =>sendMessage(textValue)} className={'fa fa-paper-plane'}
                             style={iconStyle}/>
            </div>
        </footer>
    )
}
