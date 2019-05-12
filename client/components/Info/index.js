import React from 'react';
import './index.css';

export default class Info extends React.Component {
    render() {
        return (
            <div className={"content content-" + this.props.theme}>
                <div className="container">
                    <h1>Решение тестового задания</h1>
                    Приложение, с помощью которого можно искать тестовую информацию в Wikipedia.
                    <h3>Допольнительные фишки:</h3>
                    <ul>               
                        <li>Сохранение запросов в отдельной вкладке История</li>
                        <li>Сортировка запросов из истории</li>
                        <li>Смена тем интрефейса в шапке приложения</li>
                    </ul>
                </div>
            </div>
        );
    }
}