import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import React from 'react'

import TopDescrAndImg from '@/app/components/RollerShutterPage/TopDescrAndImg';
import SectionTwoImgAndList from '@/app/components/RollerShutterPage/SectionTwoImgAndList';

type Props = {
  params: { locale: string };
};

const ScreenCoversPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

const t = useTranslations("ScreenPage");

  return (
    <>
      <TopDescrAndImg t={t.raw("ScreenCovers")}/>
      <SectionTwoImgAndList t={t.raw("ScreensList")}/>
    </>
  )
}

export default ScreenCoversPage;