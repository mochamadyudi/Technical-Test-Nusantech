import React from 'react';
import {Typography} from "antd";
import TheContainer from "@components/layouts/TheContainer.tsx";

const CastingSection: React.FC = () => {
  return (
    <React.Fragment>
      <TheContainer className="py-10">
        <Typography.Title level={2}>Full Cast & Reviews</Typography.Title>
      </TheContainer>
    </React.Fragment>
  )
};

export default CastingSection;
