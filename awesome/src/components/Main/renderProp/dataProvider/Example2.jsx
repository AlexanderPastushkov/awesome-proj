import React from "react";
import DataProviderWithChildren from "./DataProviderWithChildren";
import { Posts } from "./Posts/Posts";

const getPosts = "https://jsonplaceholder.typicode.com/posts";

export const ExampleWithChildren = () => {
  return (
    <div>
      <div>
        <DataProviderWithChildren url={getPosts}>
          {(data) => <Posts posts={data} />}
        </DataProviderWithChildren>
      </div>
    </div>
  );
};
