import React from 'react';

interface ITitleBannerProps {
  title: string;
  size: 'medium' | 'large';
}

const TitleBanner: React.FC<ITitleBannerProps> = ({ title, size = 'large' }) => {

    const titleSize = size === 'medium' ? 'subTitleCl' : 'titleCl';

  return (
    <div className='bg-customMarsala-accentLight text-center text-white p-8 mb-8 rounded-md'>
      <h2 className={`${titleSize}`}>
        {title}
      </h2>
    </div>
  );
};

export default TitleBanner;
