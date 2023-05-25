import React, { useEffect, useState } from "react";

const DataProvider = ({ url, renderContent }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [url]);

  return <>{renderContent(data)}</>;
};
export default DataProvider;
