import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { CheckBox, Button, Text, Img, Heading ,srcSet} from "../../components";
import Frame48095602Logo from "../../components/Logo";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
 import { Navbar, Nav } from "react-bootstrap"; 


export default function HomePagePage() {


  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleSubMenuClick = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <>

<Helmet>
        <title>Anurag_Figma</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="container-fluid py-3 bg-gray-100">
        <div className="container">
       
           
    
        
        {/* <div className=" flex sm:flex-col self-end justify-between items-top-left md:self-stretch mb-[5px] gap-5 flex-10 "> */}

        <header className="d-flex justify-content-between align-items-top py-3">
         <Frame48095602Logo className="shrink-0 max-w-full aspect-[5.45] w-[250px]" />

  
<div className=" flex sm:flex-col self-end justify-between items-top-left md:self-stretch mb-[5px] gap-5 flex-10 ">

           
       
          



       <Navbar expand="md" bg="light" variant="light" >
           
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        

        <Navbar.Collapse id="responsive-navbar-nav">

        
          <Nav   className="mr-auto ">


            <Nav.Link href="CTA" className="mr-7 hover:hover:text-darkpurple">Talent Finder</Nav.Link>
            <Nav.Link href="Company" className="mr-7 hover:text-darkpurple">For Recruiters</Nav.Link>
            <Nav.Link href="" className="mr-7 hover:text-darkpurple">For Employers</Nav.Link>
            <Nav.Link href="FAQ" className="mr-7 hover:text-darkpurple">About Us</Nav.Link>
            <Nav.Link href="Foremployers" className="mr-7 hover:text-darkpurple" target="_blank" rel="noreferrer">Company</Nav.Link>

            <div className="flex justify-center gap-3">
                <Button size="sm" variant="outline" shape="round" className="text-sm hover:bg-darkpurple hover:text-white">
                  Log In
                </Button>
                <a href="Steps" className="text-sm hover:bg-darkpurple hover:text-white">
                  <Button size="sm" shape="round">
                    Get Started
                  </Button>
                </a>
              </div>
            


          </Nav>
          
  
        </Navbar.Collapse>
       
     
       
      </Navbar> 

      
      </div>

      </header>
        </div>

    
      

    
    






       

              <div className="ml-4 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col items-start self-stretch my-auto text-sm text-violet-800 max-md:mt-10 max-md:max-w-full">
              <div className="self-stretch text-6xl font-bold max-md:max-w-full max-md:text-4xl">
                <span className="text-6xl font-semibold text-violet-800 leading-[75px]">
                  Power Up Your{" "}
                </span>
                <span className="text-6xl font-semibold text-violet-800 leading-[75px]">
                  Hiring
                </span>
                <br />
                <span className="text-5xl text-violet-800  leading-[67px]">
                  with Rework .
                </span>
              </div>
              <div className="self-stretch mt-2.5 leading-6 text-zinc-900 max-md:max-w-full">
                Empower your business with cutting-edge A.I. technology,
                simplified processes, and top-tier talent connections. Rework is
                your strategic partner in redefining how you hire{" "}
              </div> 
              <br />
              <div className="justify-center mt-9 text-2xl leading-7 rounded-2xl shadow-lg text-neutral-100 max-md:px-5">
              <Button size="xl" className="w-full sm:px-5 !text-gray-100 rounded-[20px]">
                Book A Demo
              </Button>
              
              </div>
              <br />
              

              </div> 
              
             



<div className="flex gap-2.5 py-2 mt-7 rounded-xl">
                <img
                  loading="lazy"
                  src="images/Streamlined Recruitment.svg"
                  className="shrink-0 self-start w-5 aspect-square"
                />
                <div>No credit Required</div>
              </div>
              <div className="flex gap-2.5 py-2 rounded-xl">
                <img
                  loading="lazy"
                  src="images/Streamlined Recruitment.svg"
                  className="shrink-0 self-start w-5 aspect-square"
                />
                <div>Streamlined Recruitment Process</div>
              </div>
          


              </div> 
        
<br /><br />
          



  


{/* <Img
  src="images/Roundimage1.png"
  alt="image"
  style={{
    display: 'flex', // Use flexbox to arrange the images in a row
    flexDirection: 'column', // Arrange the images in a column when the screen size is small
    alignItems: 'center', // Center the images horizontally
    maxWidth: '100%', // Set the maximum width to ensure responsiveness
    marginBottom: '20px', // Add margin between images for spacing
  }}
  
/> */}

 


  <br /><br /><br /><br /><br />
  <img className="w-100 mt-5  shrink" src="images/Roundimage1.png" alt="" />





</div>

         
</div>



</div>
 
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
          <Img src="images/img_kisspng_amazon.png" alt="kisspngamazon" className="shrink-0 my-auto max-w-full aspect-[2.78] w-[106px]" />
          <Img src="images/img_kisspng_nokia_n.png" alt="kisspngnokian" className="shrink-0 my-auto max-w-full aspect-[5] w-[131px]" />
          <Img src="images/img_vector.svg" alt="vector_one" className="h-[42px] md:w-full" />
          <Img src="images/img_microsoft_1.svg" alt="microsofttwo" className="h-[26px] md:w-full" />
          <Img src="images/img_google_2015_1.svg" alt="google2015two" className="h-[31px] md:w-full" />
        
        </div>
      </div>
    </>
  );
}


 
 
   

   