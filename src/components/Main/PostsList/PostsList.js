import React from "react";
import PostItem from "./PostItem/PostItem";



export default function PostsList({ posts }) {
  return (
    <div>
    <h1 className="uk-heading-bullet uk-margin-medium-bottom">
        <span> {title} </span>
        <a className="uk-text-small" href="/">Author</a>
    </h1>
    <div className="uk-article uk-dropcap uk-margin-large-bottom">
      <p> {body} </p>
    </div>
    </div>
  )
}
