import React from "react";
import "./App.css";
import { fetchTags } from "./store/actions";
import { connect } from "react-redux";

class Tags extends React.Component {
  componentDidMount() {
    this.props.dispatch(
      fetchTags("https://conduit.productionready.io/api/tags")
    );
  }

  render() {
    const { tags, articles } = this.props;

    return (
      <div className="">
        <ul>
          {tags.map((tag) => {
            return (
              <li>
                <p>{tag}</p>
              </li>
            );
          })}
        </ul>
        <button>{articles.length}</button>
      </div>
    );
  }
}

function mapState(state) {
  return { ...state };
}

export default connect(mapState)(Tags);
