import React, {PureComponent} from 'react';
import ArticleList from './ArticleList';
import articles from '../Data/articles';

class App extends PureComponent {
    render() {
        return (
            <div>
                <div>
                    <h1>Articles</h1>
                </div>
                <div>
                    <ArticleList articles = {articles}/>
                </div>
            </div>
        );
    }
}

export default App;
