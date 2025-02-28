import React from "react";
import BaseLayout from "./components/BaseLayout";
import { routing } from "@/i18n/routing";
import Loader from "./components/Loader";

const Loading = () => {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <Loader />
    </BaseLayout>
  );
};

export default Loading;

// <PageLayout>
//   {/* <section className="pageCl h-full">
//       <div className="container py-80 text-center h-full">
//         <p className="mainTitleCl pt-16 text-center">
//           LOADING........LOADING........
//         </p>
//       </div>
//       </section> */}
//   <div className="container py-80 text-center h-full"></div>
// </PageLayout>;
