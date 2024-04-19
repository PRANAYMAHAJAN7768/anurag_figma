import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text } from "../../components";

export default function BrandsPage() {
  return (
    <>
      <Helmet>
        <title>Anurag_Figma</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full gap-7 py-[50px] md:py-5 overflow-auto bg-deep_purple-50 shadow-sm">
        <Text size="xl" as="p" className="!text-deep_purple-200 text-center">
          Hire for 1000+ Brands Including
        </Text>
        <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[1714px]">
          <Img src="images/img_microsoft_1.svg" alt="microsoftone"  className="h-[26px] md:w-full" />
          <Img src="images/img_google_2015_1.svg" alt="google2015one" className="h-[31px] md:w-full" />
          <Img src="images/img_kisspng_amazon.png" alt="kisspngamazon" className="w-[6%] md:w-full object-cover" />
          <Img src="images/img_kisspng_nokia_n.png" alt="kisspngnokian" className="w-[8%] md:w-full object-cover" />
          <Img src="images/img_vector.svg" alt="vector_one" className="h-[42px] md:w-full" />
          <Img src="images/img_microsoft_1.svg" alt="microsofttwo" className="h-[26px] md:w-full" />
          <Img src="images/img_google_2015_1.svg" alt="google2015two" className="h-[31px] md:w-full" />
          <Img src="images/img_kisspng_amazon.png" alt="kisspngamazon" className="w-[6%] md:w-full object-cover" />
          <Img src="images/img_kisspng_nokia_n.png" alt="kisspngnokian" className="w-[8%] md:w-full object-cover" />
        </div>
      </div>
    </>
  );
}
