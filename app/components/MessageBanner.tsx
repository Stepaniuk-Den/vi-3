import React from 'react'
import LinkToPage from './Buttons/LinkToPage';

interface IMessageBannerProps {
    t: (key: string) => string;
  }

  const MessageBanner: React.FC<IMessageBannerProps> = ({ t }) => {
    return (
      <section className='container sectionCl'>
        <div className="bg-customMarsala-accentLight text-white flex flex-col gap-6 justify-between items-center px-5 pt-16 pb-6 rounded-md">
            <div className='flex flex-col lg:flex-row gap-2 items-center'>
          <h2 className='subTitleCl'>{t('title')}</h2>
          <p className='text-center'>{t('subtitle')}</p>
          </div>
          <LinkToPage href="#" className="self-end">
            {t('btn')}
          </LinkToPage>
        </div>
      </section>
    );
  };

export default MessageBanner