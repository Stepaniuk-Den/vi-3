import React from "react";
import PageLayout from "./PageLayout";

const Loader = () => {
  return (
    <PageLayout>
      <div className="container py-80 text-center h-screen">
        <div className="loaderCl"></div>
      </div>
    </PageLayout>
  );
};

export default Loader;
