import React from "react";
import DataProvider from "./DataProvider";
import { Posts } from "./Posts/Posts";

const getPosts = "https://jsonplaceholder.typicode.com/posts";

export const Example = () => {
  return (
    <div>
      <div>
        <DataProvider
          url={getPosts}
          renderContent={(data) => <Posts posts={data} />}
        />
      </div>
    </div>
  );
};
