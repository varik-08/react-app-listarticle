import React, {PureComponent} from 'react';

export default class Article extends PureComponent {
    render() {
        const {article} = this.props;
        return (
            <div>
                <div>
                    {article.title}
                </div>
                <div>
                    <div>
                        {article.date}
                    </div>
                    <div>
                        {article.text}
                    </div>
                </div>
            </div>
        );
    }

}