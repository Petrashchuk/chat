import React from 'react';
import '../Chat_container/Chat_container_style.css';

export default function FontAwesome({handleClick,style,className}){
    return(
        <i className={className} onClick={handleClick} style={style} aria-hidden="true"></i>
    )
}

