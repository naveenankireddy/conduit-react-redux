import React from "react";
import "./App.css";
import { allArticles } from "./store/actions";
import { connect } from "react-redux";
import Tags from './Tags'

class App extends React.Component {
  componentDidMount() {
    fetch("https://conduit.productionready.io/api/articles?limit=20&offset=0")
      .then((res) => res.json())
      .then(({ articles }) => {
        this.props.dispatch(allArticles(articles));
      });
  }
  render() {

    const { articles } = this.props;

    return (
      <div className="App">
        <ul>
          {articles.map((article) => {
            return (
              <li>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </li>
            );
          })}
        </ul>
        <Tags />
      </div>
    );
  }
}

function mapState({articles}) {
  return { articles };
}

export default connect(mapState)(App);
