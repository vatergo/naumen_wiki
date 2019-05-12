import React from 'react';
import './index.css';

import api from '../../api'

export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
            sort: 0
        }
        this.sort = this.sort.bind(this);
    }

    componentWillMount() {
        api.getAllRequests(this.props.token).then(data => {
            this.setState({
                history: data
            });
        });
    }

    sort(event) {
        this.setState({
            sort: event.target.selectedIndex
        })
    }

    render() {
        const sort = this.state.sort;
        const history = this.state.history.sort(function (a, b) {
            if (sort === 1) return a.id - b.id;
            return b.id - a.id;
        }).map(function (item, i) {
            let snippet = '';
            if (item.info.context.length < 100) snippet = item.info.context;
            else snippet = item.info.context.slice(0, 100) + '...'
            return <li className="history-link" key={i}>
                <a target="_blank" href={item.info.link}>{item.caption}</a> - {snippet}
            </li>;
        })
        return (
            <div className={"content content-" + this.props.dark}>
                <div className="container">
                    <div className="headline clearfix">
                        <h1>История запросов</h1>
                        <select defaultValue="new" onChange={this.sort}>
                            <option value="new">Сначала новые</option>
                            <option value="old">Сначала старые</option>
                        </select>
                    </div>
                    <div>
                        <ul>
                            {history}
                        </ul>
                    </div>
                </div>
            </div >
        );
    }
}