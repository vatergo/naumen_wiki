import React from 'react';
import './index.css';

import api from '../../api'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            caption: 'Добро пожаловать в Мини-Википедию',
            context: undefined,
            link: undefined,
            redirected: undefined
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        let caption = document.querySelector('.search-line').value;
        if (caption !== '') {
            this.setState({
                caption: 'Загрузка...'
            });
            api.getRequest(caption, this.props.token)
                .then(data => this.setState({
                    caption: data.caption,
                    context: data.context,
                    link: data.link,
                    redirected: data.redirected
                }))
                .catch(msg => this.setState({
                    caption: caption,
                    context: msg,
                }));
        }
    }

    render() {
        return (
            <div className={"content content-" + this.props.dark}>
                <div className="container">
                    <div className="headline clearfix">
                        <h1>{this.state.caption}</h1>
                        <form onSubmit={this.onSubmit}>
                            <input className="search-line" type="search" placeholder="Что будем искать?" />
                            <button className="search-button" type="submit">Поиск</button>
                        </form>
                    </div>
                    {this.state.redirected && <h5>Запрос «{document.querySelector('.search-line').value}» перенаправляется сюда</h5>}
                    <div className="text">{
                        this.state.context ? <p>{this.state.context}</p> :
                            <div className="initial-info clearfix">
                                <span>
                                    <p><strong>«Википе́дия»</strong> (англ. Wikipedia, произносится [ˌwɪkɨˈpiːdiə] или [ˌwɪkiˈpiːdiə]) — общедоступная многоязычная универсальная интернет-энциклопедия со свободным контентом, реализованная на принципах вики. Расположена по адресу <a style={{ "color": "#798e98" }} href="https://www.wikipedia.org" target="_blank">www.wikipedia.org</a>.</p>
                                    <p>Владелец сайта — американская некоммерческая организация «Фонд Викимедиа», имеющая 37 региональных представительств. Название энциклопедии образовано от английских слов wiki («вики»; в свою очередь заимствовано из гавайского языка, в котором оно имеет значение «быстро») и encyclopedia («энциклопедия»).</p></span>
                                <img src="https://ru.wikipedia.org/static/images/project-logos/ruwiki.png" alt="wiki"></img>
                            </div>}
                    </div>
                    {this.state.link && <a className="wiki-link" href={this.state.link} target="_blank">Перейти на Википедию</a>}
                </div>
            </div>
        );
    }
}