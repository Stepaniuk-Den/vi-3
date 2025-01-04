"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import PageLayout from "../components/PageLayout";
import Line from "../components/Line";

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  const t = useTranslations("Error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageLayout>
      <section className="pageCl">
        <div className="container">
          <h1 className="mainTitleCl pt-16 text-center">{t("title")}</h1>
          <Line className="marsala-center" color="marsala" />

          <div className="subTitleCl text-center capitalize">
            {t.rich("description", {
              p: (chunks) => <p className="mt-4">{chunks}</p>,
              retry: (chunks) => (
                <button
                  className="font-semibold underline underline-offset-2"
                  onClick={reset}
                  type="button"
                >
                  {chunks}
                </button>
              ),
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
