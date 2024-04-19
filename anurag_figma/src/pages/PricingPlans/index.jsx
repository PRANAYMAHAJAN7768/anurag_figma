import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img, Heading } from "../../components";

export default function PricingPlansPage() {
  return (
    <>
      <Helmet>
        <title>Anurag_Figma</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center w-full gap-[74px] p-14 md:gap-[55px] md:p-5 sm:gap-[37px] bg-white-A700">
        <Heading size="2xl" as="h1" className="mt-[9px] !font-garnettsemibold capitalize">
          <span className="text-deep_purple-600">Choose Your Simple,&nbsp;</span>
          <span className="text-deep_purple-600 font-garnettregular font-normal">Transparent Pricing</span>
        </Heading>
        <div className="flex md:flex-col w-full gap-[49px] mx-auto max-w-[1197px]">
          <div className="flex flex-col items-center w-full gap-[54px] p-[30px] sm:gap-[27px] sm:p-5 bg-gray-100 shadow-2xl rounded-[10px]">
            <div className="flex flex-col items-center mt-[3px] gap-[15px]">
              <div className="flex items-center gap-1.5 flex-wrap">
                <Text size="2xl" as="p" className="!text-deep_purple-600 !font-spacegrotesk text-center">
                  1
                </Text>
                <Text size="2xl" as="p" className="!text-deep_purple-600 !font-garnettmedium text-center">
                  Month
                </Text>
              </div>
              <div className="flex items-center flex-wrap">
                <Text size="5xl" as="p" className="!text-gray-900_02 !font-spacegrotesk text-center">
                  ₹
                </Text>
                <Text size="5xl" as="p" className="!text-gray-900_02 !font-garnettmedium text-center">
                  199.00
                </Text>
                <Text
                  as="p"
                  className="self-end mb-[5px] !text-gray-900_02 !font-garnettmedium text-center !font-medium"
                >
                  /month
                </Text>
              </div>
            </div>
            <div className="flex flex-col self-stretch gap-5">
              <Text
                size="lg"
                as="p"
                className="!text-deep_purple-600 !font-garnettmedium text-center !font-medium leading-7"
              >
                Suitable for companies with 5-10 openings
              </Text>
              <div className="flex flex-col gap-2">
                <div className="flex self-start gap-2.5">
                  <Img src="images/img_checkmark_green_500.svg" alt="image" className="self-start h-[24px] w-[24px]" />
                  <Text as="p" className="self-end">
                    10 interview-ready candidates
                  </Text>
                </div>
                <div className="flex self-start gap-2.5">
                  <Img
                    src="images/img_checkmark_green_500.svg"
                    alt="image_one"
                    className="self-start h-[24px] w-[24px]"
                  />
                  <Text as="p" className="self-end">
                    Unlimited job postings
                  </Text>
                </div>
                <div className="flex justify-center items-start gap-2.5">
                  <Img src="images/img_checkmark_green_500.svg" alt="image_two" className="h-[24px] w-[24px]" />
                  <Text as="p" className="w-[92%]">
                    Receive pre-vetted profiles within 48 hours
                  </Text>
                </div>
                <div className="flex self-start gap-2.5">
                  <Img src="images/img_icons.svg" alt="image_three" className="self-start h-[24px] w-[24px]" />
                  <Text as="p" className="self-end">
                    Dedicated account manager
                  </Text>
                </div>
                <div className="flex justify-center items-start gap-2.5">
                  <Img src="images/img_icons.svg" alt="image_four" className="h-[24px] w-[24px]" />
                  <Text as="p" className="w-[92%]">
                    Assistance with interview scheduling
                  </Text>
                </div>
                <div className="flex self-start gap-2.5">
                  <Img src="images/img_icons.svg" alt="custom_reports" className="self-start h-[24px] w-[24px]" />
                  <Text as="p" className="self-end">
                    Custom reports
                  </Text>
                </div>
              </div>
            </div>
            <Button shape="round" className="w-full sm:px-5">
              Get Started
            </Button>
          </div>
          <div className="flex flex-col w-full pb-[30px] pl-[30px] sm:pb-5 sm:pl-5 bg-deep_purple-600 shadow-2xl rounded-[10px]">
            <div className="flex flex-col items-start">
              <div className="flex self-end items-end">
                <Text size="2xl" as="p" className="!text-gray-100 !font-spacegrotesk text-center">
                  3
                </Text>
                <Text size="2xl" as="p" className="ml-1.5 !text-gray-100 !font-garnettmedium text-center">
                  Months
                </Text>
                <Button
                  color="orange_300"
                  size="xs"
                  className="mb-[30px] ml-[-3px] rounded-bl-[5px] font-garnettmedium font-medium relative min-w-[131px]"
                >
                  Most Popular
                </Button>
              </div>
              <div className="flex items-center mt-[15px] ml-[35px] md:ml-0 flex-wrap">
                <Text size="5xl" as="p" className="!text-gray-100 !font-spacegrotesk text-center">
                  ₹
                </Text>
                <Text size="5xl" as="p" className="!text-gray-100 !font-garnettmedium text-center">
                  149.00
                </Text>
                <Text as="p" className="self-end mb-[5px] !text-gray-100 !font-garnettmedium text-center !font-medium">
                  /month
                </Text>
              </div>
              <Text
                size="lg"
                as="p"
                className="w-[89%] md:w-full mt-[46px] !text-gray-100 !font-garnettmedium text-center !font-medium leading-7"
              >
                Suitable for companies with 5-10 openings
              </Text>
              <div className="flex flex-col w-[89%] md:w-full mt-5 gap-2">
                <div className="flex self-start gap-2.5">
                  <Img
                    src="images/img_checkmark_green_500.svg"
                    alt="checkmark_one"
                    className="self-start h-[24px] w-[24px]"
                  />
                  <Text as="p" className="self-end !text-deep_purple-50">
                    10 interview-ready candidates
                  </Text>
                </div>
                <div className="flex self-start gap-2.5">
                  <Img
                    src="images/img_checkmark_green_500.svg"
                    alt="checkmark_three"
                    className="self-start h-[24px] w-[24px]"
                  />
                  <Text as="p" className="self-end !text-deep_purple-50">
                    Unlimited job postings
                  </Text>
                </div>
                <div className="flex justify-center items-start gap-2.5">
                  <Img src="images/img_checkmark_green_500.svg" alt="checkmark_five" className="h-[24px] w-[24px]" />
                  <Text as="p" className="w-[92%] !text-deep_purple-50">
                    Receive pre-vetted profiles within 48 hours
                  </Text>
                </div>
                <div className="flex self-start gap-2.5">
                  <Img src="images/img_icons.svg" alt="icons_one" className="self-start h-[24px] w-[24px]" />
                  <Text as="p" className="self-end !text-deep_purple-50">
                    Dedicated account manager
                  </Text>
                </div>
                <div className="flex justify-center items-start gap-2.5">
                  <Img src="images/img_icons.svg" alt="icons_three" className="h-[24px] w-[24px]" />
                  <Text as="p" className="w-[92%] !text-deep_purple-50">
                    Assistance with interview scheduling
                  </Text>
                </div>
                <div className="flex self-start gap-2.5">
                  <Img src="images/img_icons.svg" alt="icons_five" className="self-start h-[24px] w-[24px]" />
                  <Text as="p" className="self-end !text-deep_purple-50">
                    Custom reports
                  </Text>
                </div>
              </div>
              <Button
                color="gray_100"
                shape="round"
                className="mt-[62px] sm:px-5 !text-deep_purple-600 font-medium min-w-[296px]"
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center w-full gap-[54px] p-[30px] sm:gap-[27px] sm:p-5 bg-gray-100 shadow-2xl rounded-[10px]">
            <div className="flex flex-col items-center mt-[3px] gap-[15px]">
              <div className="flex items-center gap-1.5 flex-wrap">
                <Text size="2xl" as="p" className="!text-deep_purple-600 !font-spacegrotesk text-center">
                  6
                </Text>
                <Text size="2xl" as="p" className="!text-deep_purple-600 !font-garnettmedium text-center">
                  Months
                </Text>
              </div>
              <div className="flex items-center flex-wrap">
                <Text size="5xl" as="p" className="!text-gray-900_02 !font-spacegrotesk text-center">
                  ₹
                </Text>
                <Text size="5xl" as="p" className="!text-gray-900_02 !font-garnettmedium text-center">
                  169.00
                </Text>
                <Text
                  as="p"
                  className="self-end mb-[5px] !text-gray-900_02 !font-garnettmedium text-center !font-medium"
                >
                  /month
                </Text>
              </div>
            </div>
            <div className="flex flex-col self-stretch gap-5">
              <Text
                size="lg"
                as="p"
                className="!text-deep_purple-600 !font-garnettmedium text-center !font-medium leading-7"
              >
                Suitable for companies with 5-10 openings
              </Text>
              <div className="flex flex-col gap-2">
                <div className="flex self-start gap-2.5">
                  <Img
                    src="images/img_checkmark_green_500.svg"
                    alt="checkmark_one"
                    className="self-start h-[24px] w-[24px]"
                  />
                  <Text as="p" className="self-end">
                    10 interview-ready candidates
                  </Text>
                </div>
                <div className="flex self-start gap-2.5">
                  <Img
                    src="images/img_checkmark_green_500.svg"
                    alt="checkmark_three"
                    className="self-start h-[24px] w-[24px]"
                  />
                  <Text as="p" className="self-end">
                    Unlimited job postings
                  </Text>
                </div>
                <div className="flex justify-center items-start gap-2.5">
                  <Img src="images/img_checkmark_green_500.svg" alt="checkmark_five" className="h-[24px] w-[24px]" />
                  <Text as="p" className="w-[92%]">
                    Receive pre-vetted profiles within 48 hours
                  </Text>
                </div>
                <div className="flex self-start gap-2.5">
                  <Img src="images/img_icons.svg" alt="icons_one" className="self-start h-[24px] w-[24px]" />
                  <Text as="p" className="self-end">
                    Dedicated account manager
                  </Text>
                </div>
                <div className="flex justify-center items-start gap-2.5">
                  <Img src="images/img_icons.svg" alt="icons_three" className="h-[24px] w-[24px]" />
                  <Text as="p" className="w-[92%]">
                    Assistance with interview scheduling
                  </Text>
                </div>
                <div className="flex self-start gap-2.5">
                  <Img src="images/img_icons.svg" alt="icons_five" className="self-start h-[24px] w-[24px]" />
                  <Text as="p" className="self-end">
                    Custom reports
                  </Text>
                </div>
              </div>
            </div>
            <Button shape="round" className="w-full sm:px-5">
              Get Started
            </Button>
          </div>
        </div>
        <Button
          color="gray_100"
          shape="round"
          className="sm:px-5 !text-deep_purple-600 border-deep_purple-600 border-2 border-solid !shadow-md min-w-[180px]"
        >
          Book a Demo
        </Button>
      </div>
    </>
  );
}
