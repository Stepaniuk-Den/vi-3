"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Loader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);
    handleStart();
    const timer = setTimeout(handleComplete, 1000);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return isLoading ? (
    // <PageLayout>
    // <section className="container py-80 text-center h-screen">
    <section
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75
      z-50"
    >
      <div className="loaderCl"></div>
    </section>
  ) : // </PageLayout>
  null;
};

export default Loader;
