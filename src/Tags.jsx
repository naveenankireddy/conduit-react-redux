import React from "react";
import "./App.css";
import { allTags } from "./store/actions";
import { connect } from "react-redux";

class Tags extends React.Component {
  componentDidMount() {
    fetch("https://conduit.productionready.io/api/tags")
      .then((res) => res.json())
      .then(({tags}) => {
        this.props.dispatch(allTags(tags));
      });
  }
  render() {

    const { tags } = this.props;

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
      </div>
    );
  }
}

function mapState({tags}) {
  return { tags };
}

export default connect(mapState)(Tags);
