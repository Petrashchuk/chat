import React, {useState} from "react";
import './Header_style.css';
import classNames from 'classnames';

export default function Header() {
    const [status, setSatus] = useState(false);
    const [message, setMessage] = useState('Disconnect');
    return (
        <header>
            <div className=' header_section'>
                <div className={classNames(status ? 'green' : 'red', 'circle')}/>
                <h4>{message}</h4>
            </div>
        </header>
    )
}
