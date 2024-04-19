import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Foremployers from "pages/Foremployers";
import HomePage from "pages/HomePage";
import Brands from "pages/Brands";
import Steps from "pages/Steps";
import PricingPlans from "pages/PricingPlans";
import CTA from "pages/CTA";
import Testimonials from "pages/Testimonials";
import Company from "pages/Company";
import SuccessStories from "pages/SuccessStories";
import FAQ from "pages/FAQ";
import Comapany from "pages/Comapany";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "*", element: <NotFound /> },
    {
      path: "foremployers",
      element: <Foremployers />,
    },
    {
      path: "homepage",
      element: <HomePage />,
    },
    {
      path: "brands",
      element: <Brands />,
    },
    {
      path: "steps",
      element: <Steps />,
    },
    {
      path: "pricingplans",
      element: <PricingPlans />,
    },
    {
      path: "cta",
      element: <CTA />,
    },
    {
      path: "testimonials",
      element: <Testimonials />,
    },
    {
      path: "company",
      element: <Company />,
    },
    {
      path: "successstories",
      element: <SuccessStories />,
    },
    {
      path: "faq",
      element: <FAQ />,
    },
    {
      path: "comapany",
      element: <Comapany />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
