import { IAluSection } from '@/helpers/interfaces';
import TitleBanner from '../TitleBanner';
import ImgCarouselPage from '../ImgCarouselPage';
import NestedParameterDescList from '../NestedParameterDescList';
import ImagesComponent from './ImagesComponent';

interface IProps {
  tSection: IAluSection;
  heightImages?: string;
  widthtImages?: string;
  withCarousel?: boolean;
}

const AluGlideCustomSection = ({ tSection, heightImages, widthtImages = "w-full", withCarousel = true }: IProps) => {
  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h3 className="titleCl">{tSection.title}</h3>
        </TitleBanner>
        <div className='flex gap-6'>
          <div className='flex flex-col w-1/3'>
            {withCarousel ? <ImgCarouselPage
              imgList={Object.values(tSection.imgList)}
              width="w-full"
              height={heightImages}
            /> : <ImagesComponent list={Object.values(tSection.imgList)} height={heightImages} width={widthtImages} />}
          </div>
          <div>
            <NestedParameterDescList param={tSection.parametersListTech} />
            <NestedParameterDescList param={tSection.parametersListSys} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AluGlideCustomSection