import React from "react";
import './Header_style.css';
import classNames from 'classnames';
import {connect} from "react-redux";

class Header extends React.PureComponent {
    constructor(props) {
        super(props);
    }


    render() {
        const {stateWs: {message, status}} = this.props;
        return (
            <header>
                <div className=' header_section'>
                    <div className={classNames(status ? 'green' : 'red', 'circle')}/>
                    <h4>{message}</h4>
                </div>
            </header>
        )
    }
}

function mapStateToProps({stateWs}) {
    return {
        stateWs
    }
}

export default connect(mapStateToProps, null)(Header)
