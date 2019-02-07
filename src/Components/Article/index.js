import React, {PureComponent} from 'react';

export default class Article extends PureComponent {
    render() {
        const {article, isOpen, onButonClick} = this.props;
        const bodyArticle = (
            <div>
                <div>
                    {article.date}
                </div>
                <div>
                    {article.text}
                </div>
            </div>
        );
        return (
            <div>
                <div>
                    {article.title}
                    <button onClick={onButonClick}>{!isOpen ? 'Open' : 'Close'}</button>
                </div>
                {isOpen ? bodyArticle : null}
            </div>
        );
    }

}