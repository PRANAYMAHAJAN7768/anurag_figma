import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading } from "../../components";

export default function ComapanyPage() {
  return (
    <>
      <Helmet>
        <title>Anurag_Figma</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-start justify-center w-full pl-[113px] pr-14 gap-[60px] py-[113px] md:p-5 sm:gap-[30px] bg-white-A700">
        <div className="w-full mx-auto max-w-[1175px]">
          <div className="flex flex-col gap-5">
            <Heading size="2xl" as="h1" className="!font-garnettsemibold">
              Optimize Your Hiring Strategy with Rework&#39;s Exclusive Hiring Audit
            </Heading>
            <Text size="lg" as="p" className="!text-gray-900_02">
              Discover the strengths and opportunities in your current hiring process. Our comprehensive Hiring Audit
              evaluates your strategy, identifies areas for improvement, and tailors a roadmap for success. Elevate your
              recruitment game with data-driven insights – because the right talent deserves the right approach.
            </Text>
          </div>
        </div>
        <Button size="xl" className="mb-[5px] ml-3 md:ml-0 sm:px-5 font-medium min-w-[476px] rounded-[20px]">
          Request Your Free Hiring Audit
        </Button>
      </div>
    </>
  );
}
