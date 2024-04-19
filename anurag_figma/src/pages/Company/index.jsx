import React from "react";
import { Helmet } from "react-helmet";
import { Button,Text, Heading } from "../../components";

export default function CompanyPage() {
  return (
    <>
      <Helmet>
        <title>Anurag_Figma</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
     
     
      <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 text-center">
          <Text size="4xl" as="p" className="">
            <span className="text-deep_purple-600 font-garnettmedium">How Rework AI has been a good&nbsp;</span>
            <span className="text-deep_purple-600 font-garnettregular font-normal">Hiring platform for Companies</span>
          </Text>
        </div>
        <div className="col-md-8 d-flex justify-content-center align-items-center mt-5">
          <div className="col-md-4 col-sm-12">
            <div className="text-center mb-4">
              <Heading size="3xl" as="h1" className="!font-spacegrotesk">
                80%
              </Heading>
              <Text size="lg" as="p" className="!text-gray-800 text-center">
                Reduction in your recruitment TAT with access to a wider talent pool on the platform
              </Text>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="bg-deep_purple-600 h-100 mb-4" />
            <div className="text-center mb-4">
              <Heading size="3xl" as="h2" className="!font-spacegrotesk">
                50%
              </Heading>
              <Text size="lg" as="p" className="!text-gray-800 text-center">
                Streamline your budgeting and save money while finding the top candidates
              </Text>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="text-center mb-4">
              <Heading size="3xl" as="h2" className="!font-spacegrotesk">
                10k
              </Heading>
              <Text size="lg" as="p" className="!text-gray-800 text-center">
                Certified sourcing partners’ expertise
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>



<br />
  
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
