import React from 'react';
import Header from '../Header';
import './index.css';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header themeСhange={this.props.themeСhange} dark={this.props.dark}/>
                {this.props.children}
            </div>
        );
    }
}
