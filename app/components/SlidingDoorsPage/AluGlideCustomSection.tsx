import { IAluSection } from '@/helpers/interfaces';
import TitleBanner from '../TitleBanner';
import ImgCarouselPage from '../ImgCarouselPage';
import NestedParameterDescList from '../NestedParameterDescList';
import ImagesComponent from './ImagesComponent';
import clsx from 'clsx';

interface IProps {
  tSection: IAluSection;
  heightImages?: string;
  widthImages?: string;
  withCarousel?: boolean;
}

const AluGlideCustomSection = ({ tSection, heightImages, widthImages = "w-full", withCarousel = true }: IProps) => {
  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h3 className="titleCl">{tSection.title}</h3>
        </TitleBanner>
        <div className={clsx('flex flex-col gap-6', {
          'lg:flex-row': withCarousel
        })}>
          <div className={clsx('flex w-full', {
            'flex-col lg:w-1/3': withCarousel
          })}>
            {withCarousel ? <ImgCarouselPage
              imgList={Object.values(tSection.imgList)}
              width="w-full"
              height={heightImages}
            />
              :
              <div className='flex flex-col sm:flex-row w-full lg:justify-between sm:gap-6'>
                <ImagesComponent
                  list={Object.values(tSection.imgList)}
                  height={heightImages}
                  width={widthImages}
                  classNameComponent='w-full max-sm:max-w-[25rem] max-md:ml-auto max-md:mr-auto sm:w-1/2'
                />
                <NestedParameterDescList
                  param={tSection.parametersListTech}
                  className='w-full'
                />
              </div>
            }
          </div>
          <div>
            {withCarousel && <NestedParameterDescList
              param={tSection.parametersListTech}
            />}
            <NestedParameterDescList param={tSection.parametersListSys} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AluGlideCustomSection