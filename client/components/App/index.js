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

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light',
        };
        this.themeСhange = this.themeСhange.bind(this);
        this.token = Math.random().toString(36).substr(2);
    }



    themeСhange() {
        if (this.state.theme === 'dark') {
            document.querySelector('body').classList.remove('dark');
            document.querySelector('body').classList.add('light');
            this.setState({
                theme: 'light',
            })
        }
        else {
            document.querySelector('body').classList.remove('light');
            document.querySelector('body').classList.add('dark');
            this.setState({
                theme: 'dark',
            })
        }
    }
    render() {
        return (
            <div>
                <Layout themeСhange={this.themeСhange} dark={this.state.theme}>
                    <Route exact path='/' render={() => <Search dark={this.state.theme} token={this.token} />} />
                    <Route path='/info' render={() => <Info dark={this.state.theme} />} />
                    <Route path='/history' render={() => <History dark={this.state.theme} token={this.token} />} />
                </Layout>
            </div>
        );
    }
}