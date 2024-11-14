import React from "react";
import { Helmet } from "react-helmet";
import { useMetaData } from "../contexts/MetaDataContext";
import { useSchema } from "../contexts/SchemaContext";

const SearchEngineOptimization = ({ page }) => {
  const { metaData } = useMetaData();
  const { Schema } = useSchema();

  const { title, description, keywords } = metaData[page];
  const schema = Schema[page];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SearchEngineOptimization;
