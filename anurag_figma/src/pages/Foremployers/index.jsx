import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Slider } from "../../components";


export default function ForemployersPage() {

  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);



  return (
    <>
      <Helmet>
        <title>Anurag_Figma</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full gap-[53px] py-3 sm:gap-[26px] bg-white-A700">
        <div>
          <div className="flex flex-col items-center mt-[0px] gap-[85px] px-14 py-[99px] md:gap-[63px] md:p-5 sm:gap-[42px]">
            <Heading size="2xl" as="h1" className="!font-garnettsemibold capitalize text-center">
              <span className="text-deep_purple-600">Our Amazing Benefits&nbsp;</span>
              <span className="text-deep_purple-600 font-garnettregular font-normal">Helpful For Your Hiring</span>
            </Heading>
            <div className="justify-center w-full mb-[55px] gap-[84px] grid-cols-[repeat(auto-fill,_minmax(343px_,_1fr))] mx-auto grid max-w-[1200px]">
              <div className="flex flex-col w-full gap-[18px]">
                <Img src="images/img_eos_icons_ai.svg" alt="image" className="h-[50px] w-[50px]" />
                <div>
                  <Heading as="h2">
                    <span className="text-deep_purple-600 font-garnettsemibold font-semibold">
                      <>
                        60%
                        <br />
                      </>
                    </span>
                    <span className="text-deep_purple-600 font-garnettregular font-normal">Cost Reduce</span>
                  </Heading>
                </div>
                <a href="#" className="leading-7">
                  <Text as="p" className="!text-gray-900_03">
                    Zero overhead in the hiring process - promise! Source top quality candidates for some of the best
                    companies
                  </Text>
                </a>
              </div>
              <div className="flex flex-col w-full gap-[17px]">
                <Img
                  src="images/img_eos_icons_ai_deep_purple_600.svg"
                  alt="eosiconsai_one"
                  className="h-[50px] w-[50px]"
                />
                <div>
                  <Heading as="h3" className="!font-garnettsemibold !font-semibold">
                    <span className="text-deep_purple-600">
                      <>
                        50% Faster
                        <br />
                      </>
                    </span>
                    <span className="text-deep_purple-600 font-garnettregular font-normal">Recruitment by TAT</span>
                  </Heading>
                </div>
                <a href="#" className="leading-7">
                  <Text as="p" className="!text-gray-900_03">
                    Zero overhead in the hiring process - promise! Source top quality candidates for some of the best
                    companies
                  </Text>
                </a>
              </div>
              <div className="flex flex-col w-full gap-[18px]">
                <Img
                  src="images/img_mdi_user_card_details_outline.svg"
                  alt="mdiusercard_one"
                  className="h-[50px] w-[50px]"
                />
                <div>
                  <Heading as="h4">
                    <span className="text-deep_purple-600 font-garnettsemibold font-semibold">
                      <>
                        Highly Contextualized <br />
                      </>
                    </span>
                    <span className="text-deep_purple-600 font-garnettregular font-normal">Interview</span>
                  </Heading>
                </div>
                <a href="#" className="leading-7">
                  <Text as="p" className="!text-gray-900_03">
                    Al models generate highly contextualized interviews for the candidates based on your Company
                    profile, Job description and Candidate&#39;s CV.
                  </Text>
                </a>
              </div>
              <div className="flex flex-col w-full gap-[18px]">
                <Img src="images/img_healthicons_i_s.svg" alt="healthiconsis" className="h-[48px] w-[48px]" />
                <div>
                  <Heading as="h5">
                    <span className="text-deep_purple-600 font-garnettsemibold font-semibold">
                      <>
                        Automated <br />
                      </>
                    </span>
                    <span className="text-deep_purple-600 font-garnettregular font-normal">Scheduling</span>
                  </Heading>
                </div>
                <a href="#" className="leading-7">
                  <Text as="p" className="!text-gray-900_03">
                    Email & WhatsApp based communication for interview scheduling with automated reminders.
                  </Text>
                </a>
              </div>
              <div className="flex flex-col w-full gap-[18px]">
                <Img
                  src="images/img_eos_icons_ai_deep_purple_200.svg"
                  alt="eosiconsai_one"
                  className="h-[50px] w-[50px]"
                />
                <div>
                  <Heading as="h6">
                    <span className="text-deep_purple-600 font-garnettsemibold font-semibold">
                      <>
                        AI generated Interviews
                        <br />
                      </>
                    </span>
                    <span className="text-deep_purple-600 font-garnettregular font-normal">On what matters</span>
                  </Heading>
                </div>
                <a href="#" className="leading-7">
                  <Text as="p" className="!text-gray-900_03">
                    0 manual interventions, completely seamless experience for the candidates.
                  </Text>
                </a>
              </div>
              <div className="flex flex-col w-full gap-[18px]">
                <Img
                  src="images/img_fluent_tasks_app_20_regular.svg"
                  alt="fluenttasks_one"
                  className="h-[50px] w-[50px]"
                />
                <div>
                  <Heading as="h4">
                    <span className="text-deep_purple-600 font-garnettsemibold font-semibold">
                      <>
                        in-built
                        <br />
                      </>
                    </span>
                    <span className="text-deep_purple-600 font-garnettregular font-normal">ATS</span>
                  </Heading>
                </div>
                <a href="#" className="leading-7">
                  <Text as="p" className="!text-gray-900_03">
                    To manage all of your candidates & Credo verified CVs. Integrations with other ATS coming soon.
                  </Text>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Img src="images/img_eye.svg" alt="eye_one" className="h-[25px] w-[25px] mb-[5px] ml-[507px] md:ml-0" />
      </div>




      {/* <div className="flex flex-col items-center justify-center w-full gap-12 px-14 py-[75px] md:p-5 bg-white-A700">
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
} */}


<div className="flex flex-col items-center justify-center w-full gap-12 px-14 py-[75px] md:p-5 bg-white-A700">
      <Heading size="2xl" as="h1" className="!font-garnettsemibold capitalize">
        <span className="text-deep_purple-600">Success&nbsp;</span>
        <span className="text-deep_purple-600 font-garnettregular font-normal">Stories</span>
      </Heading>
      <div className="w-full mx-auto">
        <Slider
          autoPlay
          autoPlayInterval={20}
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
            1200: { items: 4 },
          }}
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