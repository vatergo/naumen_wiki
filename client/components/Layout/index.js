import React from 'react';
import Header from '../Header';
import './index.css';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header themeСhange={this.props.themeСhange} theme={this.props.theme}/>
                {this.props.children}
            </div>
        );
    }
}
