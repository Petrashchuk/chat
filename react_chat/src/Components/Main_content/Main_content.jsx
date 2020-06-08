import React from 'react';
import ws from "../../services/socket";

export default class Main_content extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.connectSocket();
    }

    connectSocket = () => {
        ws.onopen = e => {
            console.log('Open', e);
        };
        ws.onclose = e => {
            console.log('Close', e)
        };
        ws.onmessage = msg => {
            console.log(msg);
        }
    };

    render() {
        return (
            <div className='main-content'>

            </div>
        )
    }
}
