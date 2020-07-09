import React, { useState, useEffect } from "react";

import { loadPosts } from '../../api';


export default function Main({ title, body }) {
  return (
    <main className="uk-main uk-section uk-container">
      <PostsList posts={posts} />
    </main>
  );
};
