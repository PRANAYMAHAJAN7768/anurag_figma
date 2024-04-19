import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img, Heading } from "../../components";

export default function StepsPage() {
  return (
    <>
      <Helmet>
        <title>Anurag_Figma</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full gap-[99px] px-14 py-[95px] md:gap-[74px] md:p-5 sm:gap-[49px] bg-gray-100">
        <Heading size="xl" as="h1" className="!font-garnettsemibold capitalize text-center">
          <span className="text-deep_purple-600">How Our System&nbsp;</span>
          <span className="text-deep_purple-600 font-garnettregular font-normal">Operates</span>
        </Heading>
        <div className="flex md:flex-col w-full gap-px mx-auto max-w-[1198px]">
          <div className="flex flex-col items-center w-full gap-[38px] bg-white-A700_01">
            <div className="flex self-stretch justify-between items-center gap-5">
              <Heading size="s" as="h2" className="self-end mb-5 !text-black-900">
                Upload Documents
              </Heading>
              <div className="w-[23%] p-[11px] rounded-bl-[10px] bg-deep_purple-600 shadow-lg">
                <Img src="images/img_twitter.svg" alt="upload" className="h-[62px] w-[62px]" />
              </div>
            </div>
            <div className="flex justify-center w-[85%] md:w-full mb-[59px] pb-[19px] md:p-5">
              <div className="w-full">
                <Text size="lg" as="p">
                  Shortlist the most qualified candidate and upload their details for the top companies
                </Text>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full pt-[29px] sm:pt-5 bg-deep_purple-50">
            <div className="flex flex-col items-start w-full gap-[61px] sm:gap-[30px]">
              <a href="#">
                <Heading size="s" as="h2" className="!text-gray-900 !font-garnettsemibold">
                  Sign Up
                </Heading>
              </a>
              <div className="self-stretch h-[160px] relative">
                <Text size="lg" as="p" className="w-[92%] left-[0.00px] top-[0.00px] m-auto absolute">
                  Follow the link below to sign up and get access of the current job postings
                </Text>
                <div className="w-[23%] bottom-[0.00px] right-[0.33px] m-auto rounded-tl-[10px] bg-deep_purple-600 shadow-xl absolute">
                  <Img src="images/img_bag.svg" alt="bag_one" className="h-[84px] w-full md:h-auto rounded-tl-[10px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full pb-[30px] sm:pb-5 bg-white-A700_01">
            <div className="flex flex-col w-full mb-[30px] gap-[38px]">
              <div className="flex justify-between items-center gap-5">
                <Heading size="s" as="h2" className="!text-black-900">
                  Get Rewards
                </Heading>
                <div className="w-[23%] p-[11px] rounded-bl-[10px] bg-deep_purple-600 shadow-lg">
                  <Img src="images/img_ticket.svg" alt="ticket_one" className="h-[61px] w-[61px] rounded-[1px]" />
                </div>
              </div>
              <div className="pb-[46px] md:pb-5">
                <div>
                  <Text size="lg" as="p">
                    As soon as the candidate gets selected you get your benefits
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="PricingPlans"><Button
          color="gray_100"
          shape="round"
          className="sm:px-5 !text-deep_purple-600 font-medium border-deep_purple-600 border-2 border-solid !shadow-md min-w-[164px]"
        >
          Get Started
        </Button></a>
      </div>
    </>
  );
}
