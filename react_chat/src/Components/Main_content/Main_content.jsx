import React from 'react';
import './Main_content_style.css'
import classNames from 'classnames'

export default class Main_content extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            hasOverflowingChildren: false,
        };
        this.container = React.createRef();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {messages} = this.state;
        const {newMsg} = this.props;
        if (prevProps.newMsg !== newMsg) {
            this.setState({messages: [...messages, newMsg]})
        }
        this.checkOverFlow()
    }

    checkOverFlow = () => {
        const element = this.container.current;
        const hasOverflowingChildren = element.offsetHeight < element.scrollHeight ||
            element.offsetWidth < element.scrollWidth;
        this.setState({hasOverflowingChildren})
    };


    render() {
        const {messages, hasOverflowingChildren} = this.state;
        return (
            <div ref={this.container} className={classNames('main-content', hasOverflowingChildren && 'overflow_yes')}>
                <ul>
                    {messages.map((message, index) => {
                        if (index % 2 === 0) {
                            return <div key={index} className='div_left'>
                                <li className='li-style left odd'>{message}</li>
                            </div>
                        } else return <div key={index} className='div_right' onClick={e => {
                            console.log(e.target);
                        }}>
                            <li className='li-style right even'>{message}</li>
                        </div>
                    })}
                </ul>
            </div>
        )
    }
}
