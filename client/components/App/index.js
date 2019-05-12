import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';

import Layout from '../Layout';
import Info from '../Info';
import Search from '../Search';
import History from '../History';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dark: 'light',
        };
        this.themeСhange = this.themeСhange.bind(this);
        this.token = Math.random().toString(36).substr(2);
    }



    themeСhange() {
        if (this.state.dark === 'dark') {
            document.querySelector('body').classList.remove('dark');
            document.querySelector('body').classList.add('light');
            this.setState({
                dark: 'light',
            })
        }
        else {
            document.querySelector('body').classList.remove('light');
            document.querySelector('body').classList.add('dark');
            this.setState({
                dark: 'dark',
            })
        }
    }
    render() {
        return (
            <div>
                <Layout themeСhange={this.themeСhange} dark={this.state.dark}>
                    <Route exact path='/' render={() => <Search dark={this.state.dark} token={this.token} />} />
                    <Route path='/info' render={() => <Info dark={this.state.dark} />} />
                    <Route path='/history' render={() => <History dark={this.state.dark} token={this.token} />} />
                </Layout>
            </div>
        );
    }
}