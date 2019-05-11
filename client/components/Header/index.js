import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';

import Toggle from '../Toggle';

export default class Header extends React.Component {
    render() {
        return (
            <div className={'header header-' + this.props.dark}>
                <div className="container">
                    <Link className="logo" to="/">Wiki</Link>
                    <Toggle themeСhange={this.props.themeСhange} />
                    <Link className="link" to="/info">Справка</Link>
                    <Link className="link" to="/history">История</Link>
                    <Link className="link" to="/">Поиск</Link>
                </div>
            </div>
        )
    }
}