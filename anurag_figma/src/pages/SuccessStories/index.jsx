import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Slider, Heading } from "../../components";

export default function SuccessStoriesPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Anurag_Figma</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full gap-12 px-14 py-[75px] md:p-5 bg-white-A700">
        <Heading size="2xl" as="h1" className="!font-garnettsemibold capitalize">
          <span className="text-deep_purple-600">Success&nbsp;</span>
          <span className="text-deep_purple-600 font-garnettregular font-normal">Stories</span>
        </Heading>
        <div className="w-full mx-auto">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 3 } }}
            renderDotsItem={(props) => {
              return props?.isActive ? (
                <div className="w-[10px] h-[10px] bg-black-900" />
              ) : (
                <div className="w-[10px] h-[10px] bg-white-A700_01" />
              );
            }}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setSliderState(e?.item);
            }}
            ref={sliderRef}
            className="max-w-[1192px]"
            items={[...Array(9)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex flex-col gap-2.5 mx-2.5 bg-gray-50_01 shadow-5xl rounded-[16px]">
                  <Img
                    src="images/img_unsplash_mpdlxiig0p0.png"
                    alt="unsplash_one"
                    className="h-[245px] rounded-tl-[16px] rounded-tr-[16px] object-cover"
                  />
                  <div className="flex flex-col gap-[30px] p-5">
                    <Text size="2xl" as="p" className="!text-gray-900_04 !font-garnettmedium leading-[27px]">
                      Rework has been a great way to make the hiring process easier and faster.
                    </Text>
                    <Text size="lg" as="p" className="!text-gray-700_01 leading-[27px]">
                      “We&#39;ve been able to save money and time, and the recruiters have been able to find the best
                      employers leads. Highly recommend! “
                    </Text>
                  </div>
                </div>
              </React.Fragment>
            ))}
          />
        </div>
      </div>
    </>
  );
}
