import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';

import Layout from '../Layout';
import Info from '../Info';
import Search from '../Search';
import History from '../History';

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value) {
    let date = new Date(new Date().getTime() + 60 * 100000);
    document.cookie = `${name}=${value}; path=/; expires=` + date.toUTCString();
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: getCookie('theme') ? getCookie('theme') : 'light',
        };
        this.themeСhange = this.themeСhange.bind(this);
        document.querySelector('body').classList.add(this.state.theme);
        this.token = getCookie('token') ? getCookie('token') : Math.random().toString(36).substr(2);
        setCookie('token', this.token);
        setCookie('theme', this.state.theme);
    }

    themeСhange() {
        if (this.state.theme === 'dark') {
            document.querySelector('body').classList.remove('dark');
            document.querySelector('body').classList.add('light');
            this.setState({
                theme: 'light',
            });
            setCookie('theme', 'light');
        }
        else {
            document.querySelector('body').classList.remove('light');
            document.querySelector('body').classList.add('dark');
            this.setState({
                theme: 'dark',
            });
            setCookie('theme', 'dark');
        }
    }
    
    render() {
        return (
            <div>
                <Layout themeСhange={this.themeСhange} theme={this.state.theme}>
                    <Route exact path='/' render={() => <Search theme={this.state.theme} token={this.token} />} />
                    <Route path='/info' render={() => <Info theme={this.state.theme} />} />
                    <Route path='/history' render={() => <History theme={this.state.theme} token={this.token} />} />
                </Layout>
            </div>
        );
    }
}