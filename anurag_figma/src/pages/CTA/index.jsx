import React from "react";
import { Helmet } from "react-helmet";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Img, Text, Heading } from "../../components";

export default function CTAPage() {
  return (
    <>
      <Helmet>
        <title>Anurag_Figma</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full px-14 py-[81px] md:p-5 bg-gray-100">
        <Container fluid>
          <Row className="justify-content-center align-items-center mb-[29px] gap-10">
            <Col md={6} className="self-end">
              <Heading size="2xl" as="h1" className="font-garnettsemibold">
                <span className="text-deep_purple-600">Discover the Future of&nbsp;</span>
                <span className="text-deep_purple-600 font-garnettregular font-normal">Talent Assessment!</span>
              </Heading>
              <Text size="lg" as="p" className="mt-[30px] text-gray-900_02">
                <>
                  Facing challenges in traditional hiring?
                  <br />
                  Uncover the costs, pitfalls, and the game-changing role of Generative AI in recruitment.
                </>
              </Text>
              <Text size="lg" as="p" className="mt-[30px] text-gray-900_02">
                <>
                  🔍 Inside this Whitepaper:
                  <br />
                  Manual vs. Machine-based hiring: Costs & Challenges.
                  <br />
                  The truth about "Interview as a Service."
                  <br />
                  Generative AI: The simple explanation. Optimize Your Hiring Process Today!
                </>
              </Text>
              <Button size="xl" className="mt-[94px] sm:px-5 font-medium min-w-[591px] rounded-[20px]">
                Download Now for Smarter Recruitment
              </Button>
            </Col>
            <Col md={6}>
              <Img
                src="images/img_rectangle_39394.png"
                alt="image"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
