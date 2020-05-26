import React from 'react';
import './Chat_container_style.css';

class Chat_container extends React.PureComponent {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <section className='container'>
                <header>

                </header>
                <div className='main-content'></div>
                <footer></footer>
            </section>
        )
    }
}

export default Chat_container
