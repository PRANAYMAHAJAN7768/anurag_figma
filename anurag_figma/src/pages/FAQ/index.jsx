import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading } from "../../components";
import {
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

export default function FAQPage() {
  return (
    <>
      <Helmet>
        <title>Anurag_Figma</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center w-full px-14 py-[109px] md:p-5 bg-gray-100">
        <Heading size="2xl" as="h1" className="!font-garnettsemibold text-center">
          <span className="text-deep_purple-600">Frequently asked&nbsp;</span>
          <span className="text-deep_purple-600 font-garnettregular font-normal">Questions</span>
        </Heading>
        <a href="#" className="w-[62%] md:w-full mt-[19px] leading-[22px]">
          <Text as="p" className="!text-gray-900 text-center">
            We have Compiled the most commonly asked question about our Platform for your information and to enhance
            your overall experience.
          </Text>
        </a>
        <Accordion preExpanded={[0]} className="flex flex-col w-[64%] mt-[74px] mb-[5px] gap-4">
          {[...Array(8)].map((_, i) => (
            <AccordionItem uuid={i} key={`expandablelisth${i}`}>
              <AccordionItemHeading className="w-full">
                <AccordionItemButton>
                  <AccordionItemState>
                    {(props) => (
                      <>
                        <div className="flex justify-between items-start mt-4 gap-5 p-[17px] border-deep_purple-600 border-2 border-solid flex-1 rounded-[10px]">
                          <Text size="lg" as="p" className="mb-[3px] ml-[11px] md:ml-0 !text-gray-900 !font-medium">
                            How can I Get started with Rework AI?
                          </Text>
                          <Img
                            src="images/img_typcn_plus.svg"
                            alt="typcnplus_three"
                            className="h-[24px] w-[24px] mr-[11px] md:mr-0"
                          />
                        </div>
                      </>
                    )}
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <Helmet>
        <title>Anurag_Figma</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-start justify-center w-full pl-[66px] pr-14 py-[66px] md:p-5 bg-white-A700">
        <Heading size="2xl" as="h1" className="ml-[53px] md:ml-0 !font-garnettsemibold">
          <span className="text-deep_purple-600">Customer</span>
          <span className="text-deep_purple-600">&nbsp;</span>
          <span className="text-gray-900_01 font-garnettregular font-normal">Testimonials</span>
        </Heading>
        <Text size="lg" as="p" className="mt-[5px] ml-[53px] md:ml-0 !text-gray-900_01">
          What others has say About Us
        </Text>
        <div className="w-full mx-auto max-w-[1198px]">
          <div className="flex md:flex-col mt-[83px] mb-[146px] gap-6">
            <div className="flex flex-col w-full gap-[30px]">
              <div className="flex flex-col items-center gap-7 p-3.5 bg-deep_purple-50 shadow-4xl rounded-[16px]">
                <Text size="lg" as="p" className="w-[97%] md:w-full mt-[5px] !text-black-900 leading-[27px]">
                  “Rework has been a great way to make the hiring process easier and faster. We&#39;ve been able to save
                  money and time, and the recruiters have been able to find the best employers leads. Highly recommend!
                  “
                </Text>
                <div className="flex self-stretch justify-center items-start gap-[19px]">
                  <Img
                    src="images/img_ellipse_2.png"
                    alt="circleimage"
                    className="h-[50px] w-[50px] mt-0.5 rounded-[50%]"
                  />
                  <div className="flex flex-col items-center">
                    <Text size="3xl" as="p" className="!text-deep_purple-600 !font-garnettregular">
                      Theresa Webb
                    </Text>
                    <Text as="p" className="!text-gray-700_01 !font-medium">
                      HR Manager, Amazon
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-7 p-[15px] bg-deep_purple-50 shadow-4xl rounded-[16px]">
                <Text size="lg" as="p" className="w-[97%] md:w-full mt-1 !text-black-900 leading-[27px]">
                  “ Rework has been a great way to make the hiring process easier and faster. We&#39;ve been able to
                  save money and time, ““ Rework has been a great way to make the hiring process easier and faster.
                  Highly recommend! “
                </Text>
                <div className="flex self-stretch justify-center items-start gap-[19px]">
                  <Img
                    src="images/img_ellipse_1.png"
                    alt="circleimage_one"
                    className="h-[50px] w-[50px] mt-0.5 rounded-[50%]"
                  />
                  <div className="flex flex-col items-start">
                    <Text size="3xl" as="p" className="!text-deep_purple-600 !font-garnettregular">
                      Ronald Richards
                    </Text>
                    <Text as="p" className="!text-gray-700_01 !font-medium">
                      HR Manager, Google
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-[30px]">
              <div className="flex flex-col items-center justify-center gap-[30px] p-4 bg-deep_purple-50 shadow-4xl rounded-[16px]">
                <Text size="lg" as="p" className="w-[98%] md:w-full mt-[3px] !text-black-900 leading-[27px]">
                  “Rework has been a great way to make the hiring process easier and faster. We&#39;ve been able to save
                  money and time, and the recruiters have been able to find the best employers leads. Highly recommend!
                  ““ Rework has been a great way to make the hiring process easier and faster. Highly recommend! “
                </Text>
                <div className="flex self-stretch justify-center items-start gap-[19px]">
                  <Img
                    src="images/img_ellipse_1_50x50.png"
                    alt="circleimage"
                    className="h-[50px] w-[50px] rounded-[50%]"
                  />
                  <div className="flex flex-col items-start">
                    <Text size="3xl" as="p" className="!text-deep_purple-600 !font-garnettregular">
                      Savannah Nguyen
                    </Text>
                    <Text as="p" className="!text-gray-700_01 !font-medium">
                      HR Manager, Microsoft
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-7 p-[15px] bg-deep_purple-50 shadow-4xl rounded-[16px]">
                <Text size="lg" as="p" className="w-[97%] md:w-full mt-1 !text-black-900 leading-[27px]">
                  “Rework has been a great way to make the hiring process easier and faster. We&#39;ve been able to save
                  money and time, and the recruiters have been able to find the best employers leads. Highly recommend!
                  “
                </Text>
                <div className="flex self-stretch justify-center items-start gap-[19px]">
                  <Img
                    src="images/img_ellipse_1.png"
                    alt="circleimage_one"
                    className="h-[50px] w-[50px] mt-0.5 rounded-[50%]"
                  />
                  <div className="flex flex-col items-start">
                    <Text size="3xl" as="p" className="!text-deep_purple-600 !font-garnettregular">
                      Ronald Richards
                    </Text>
                    <Text as="p" className="!text-gray-700_01 !font-medium">
                      HR Manager, Google
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-[30px]">
              <div className="flex flex-col items-center gap-7 p-3.5 bg-deep_purple-50 shadow-4xl rounded-[16px]">
                <Text size="lg" as="p" className="w-[97%] md:w-full mt-[5px] !text-black-900 leading-[27px]">
                  “Rework has been a great way to make the hiring process easier and faster. We&#39;ve been able to save
                  money and time, and the recruiters have been able to find the best employers leads. Highly recommend!
                  “
                </Text>
                <div className="flex self-stretch justify-center items-start gap-[19px]">
                  <Img
                    src="images/img_ellipse_2.png"
                    alt="circleimage"
                    className="h-[50px] w-[50px] mt-0.5 rounded-[50%]"
                  />
                  <div className="flex flex-col items-center">
                    <Text size="3xl" as="p" className="!text-deep_purple-600 !font-garnettregular">
                      Theresa Webb
                    </Text>
                    <Text as="p" className="!text-gray-700_01 !font-medium">
                      HR Manager, Amazon
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-7 p-[15px] bg-deep_purple-50 shadow-4xl rounded-[16px]">
                <Text size="lg" as="p" className="w-[97%] md:w-full mt-1 !text-black-900 leading-[27px]">
                  “ Rework has been a great way to make the hiring process easier and faster. We&#39;ve been able to
                  save money and time, ““ Rework has been a great way to make the hiring process easier and faster.
                  Highly recommend! “
                </Text>
                <div className="flex self-stretch justify-center items-start gap-[19px]">
                  <Img
                    src="images/img_ellipse_1.png"
                    alt="circleimage_one"
                    className="h-[50px] w-[50px] mt-0.5 rounded-[50%]"
                  />
                  <div className="flex flex-col items-start">
                    <Text size="3xl" as="p" className="!text-deep_purple-600 !font-garnettregular">
                      Ronald Richards
                    </Text>
                    <Text as="p" className="!text-gray-700_01 !font-medium">
                      HR Manager, Google
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
