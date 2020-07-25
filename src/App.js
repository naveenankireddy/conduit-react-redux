import React from "react";
import "./App.css";
import { fetchArticles } from "./store/actions";
import { connect } from "react-redux";
import Tags from "./Tags";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(
      fetchArticles(
        "https://conduit.productionready.io/api/articles?limit=20&offset=0"
      )
    );
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
                <img src={article.author.image} alt="img" />
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

function mapState({ articles }) {
  return { articles };
}

export default connect(mapState)(App);
