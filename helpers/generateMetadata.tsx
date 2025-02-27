import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadataSubPage(
  locale: string,
  namespace: string,
  nameList: string,
  index: number,
  path:string,
  isSubPath?:string,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });

  const pathToTranslation = `${nameList}.${index}`;
  const imageSrc = t(`${pathToTranslation}.src`);
  const imageAlt = t(`${pathToTranslation}.alt`);
  const slug = t(`${nameList}.${index}.slug`);
  const url = isSubPath ? `https://vi-3.vercel.app/${locale}/${path}/${isSubPath}/${slug}`: `https://vi-3.vercel.app/${locale}/${path}/${slug}`  
 
  return {
    title: t(`${pathToTranslation}.title`),
    description: t(`${pathToTranslation}.description`),
    openGraph: {
      title: t(`${pathToTranslation}.title`),
      description: t(`${pathToTranslation}.description`),
      type:"website",
      locale:"uk_UA,en_US",
      url,
      images: [
        {
            url: imageSrc.startsWith("http") ? imageSrc : `https://vi-3.vercel.app${imageSrc}`,
            alt: imageAlt,
            width:1200,
            height:630,
        },
      ],
    },
  };
}

export async function generateMetadataPage(locale:string,namespace:string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });
  const title = t("title");
  const description =t("description");

  return{
    title,
    description,
  }
}
