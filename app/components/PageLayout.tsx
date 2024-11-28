import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  // title: ReactNode;
};

export default function PageLayout({ children }: Props) {
  return <div className="flex grow flex-col">{children}</div>;
}

//  <div className="flex grow flex-col bg-slate-900 py-36">
//    <div className="container relative flex grow flex-col px-4">
//      <h1 className="text-3xl font-semibold leading-tight tracking-tight text-red-900 md:text-5xl">
//        {title}
//      </h1>
//      <div className="mt-6 text-red-900 md:text-lg">{children}</div>
//    </div>
//  </div>;
