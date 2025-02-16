import ImagesComponent from './ImagesComponent'
import { IImage } from '@/helpers/interfaces';

interface IProps {
  desc2: string;
  imgList: IImage[];
}

const AluGlideOverviewSection = ({ imgList, desc2 }: IProps) => {
  return (
    <section className="sectionCl">
      <div className="container">
        <p className="my-4">{desc2}</p>
        <ImagesComponent
          list={imgList.slice(2, 4)}
          width="w-full sm:w-1/2"
          className="mt-7 w-full sm:flex-nowrap"
          objTypeImg='object-contain'
        />
      </div>
    </section>
  )
}

export default AluGlideOverviewSection