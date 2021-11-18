import React from "react";
import Story from "./story";

import { SiteWrapper, PageHeader } from "./story/styles";

const Stories = ({ section, stories }) => {
  return (
    <SiteWrapper>
      <PageHeader>{section}</PageHeader>
      {stories.map((story, index) => (
        <Story key={index} story={story} />
      ))}
    </SiteWrapper>
  );
};

export default Stories;
