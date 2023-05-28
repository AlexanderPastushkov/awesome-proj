import React, { useEffect, useState } from "react";

const DataProviderWithChildren = ({ url, children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [url]);

  return <>{children(data)}</>;
};
export default DataProviderWithChildren;
