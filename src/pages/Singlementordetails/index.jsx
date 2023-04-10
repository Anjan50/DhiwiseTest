import React from "react";

import EduviCoursesDetailsHeader from "components/EduviCoursesDetailsHeader";
import { Text, Img, Button, Input } from "components";
import EduviCoursesDetailsFooterlogoOne from "components/EduviCoursesDetailsFooterlogoOne";

const SinglementordetailsPage = () => {
  function handleNavigate() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate1() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[150px] items-start justify-start w-full">
          <div className="flex flex-col gap-12 items-start justify-start max-w-[1440px] w-full">
            <EduviCoursesDetailsHeader className="flex flex-col h-[74px] md:h-auto items-center justify-between px-20 md:px-5 py-[22px] w-full" />
            <div className="flex h-[260px] md:h-auto items-start justify-start md:px-10 px-20 sm:px-5 w-full">
              <div className="flex flex-col md:h-auto max-w-7xl mx-auto relative w-full">
                <div
                  className="bg-cover bg-no-repeat flex h-[171px] md:h-auto items-start justify-start mx-auto self-stretch w-auto"
                  style={{ backgroundImage: "url('images/img_frame7848.svg')" }}
                >
                  <Text
                    className="font-medium text-black_900 text-left tracking-[0.48px] w-auto"
                    variant="body4"
                  >
                    Home | Mentor | Kristin Watson
                  </Text>
                </div>
                <div className="flex items-center justify-start mt-[-81px] self-stretch w-auto z-[1]">
                  <div className="flex sm:flex-col flex-row gap-5 items-end justify-start self-stretch w-auto sm:w-full">
                    <Img
                      src="images/img_bg_170x170.png"
                      className="h-[170px] md:h-auto object-cover rounded-[10px] w-[170px]"
                      alt="bg"
                    />
                    <div className="flex flex-col gap-0.5 items-start justify-start self-stretch w-auto">
                      <Text
                        className="font-medium text-gray_900 text-left w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Kritsin Watson
                      </Text>
                      <Text
                        className="font-medium text-gray_700 text-left w-auto"
                        variant="body3"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:px-10 px-20 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-10 items-start justify-start max-w-7xl mx-auto w-full">
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-full">
                  <div className="flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full">
                    <Button className="bg-orange_200 cursor-pointer flex-1 font-medium sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-center text-white_A700 w-full">
                      About
                    </Button>
                    <Button className="bg-white_A700 cursor-pointer flex-1 font-medium sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-center text-gray_900 w-full">
                      Courses
                    </Button>
                    <Button className="bg-white_A700 cursor-pointer flex-1 font-medium sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-center text-gray_900 w-full">
                      Reviews
                    </Button>
                  </div>
                  <Button className="bg-red_300 cursor-pointer font-medium min-w-[173px] sm:px-5 px-[30px] py-5 rounded-[10px] text-center text-lg text-white_A700 w-auto">
                    Contact Now
                  </Button>
                </div>
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      About Kritsin
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] not-italic text-gray_700 text-left"
                      variant="body4"
                    >
                      <>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis consectetur adipiscing elit.
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis consectetur adipiscing elit.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                    <Text
                      className="font-semibold text-gray_900 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Certification
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] max-w-[840px] md:max-w-full not-italic text-gray_700 text-left"
                      variant="body4"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis
                      consectetur adipiscing elit.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex sm:flex-1 flex-col gap-[21px] items-start justify-start px-5 py-[30px] rounded-[10px] w-[400px] sm:w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="font-semibold text-gray_700 text-left w-auto"
                    variant="body2"
                  >
                    Total Course
                  </Text>
                  <Text
                    className="text-deep_orange_400 text-right w-auto"
                    as="h6"
                    variant="h6"
                  >
                    30
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row gap-2 items-center justify-start self-stretch w-auto">
                    <Text
                      className="font-semibold text-gray_700 text-left w-auto"
                      variant="body2"
                    >
                      Ratings
                    </Text>
                    <Img
                      src="images/img_star.svg"
                      className="h-4 w-4"
                      alt="star"
                    />
                  </div>
                  <Text
                    className="font-semibold text-gray_900 text-right w-auto"
                    variant="body2"
                  >
                    4.9(153)
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="font-semibold text-gray_700 text-left w-auto"
                    variant="body2"
                  >
                    Experiences
                  </Text>
                  <Text
                    className="font-semibold text-gray_900 text-right w-auto"
                    variant="body2"
                  >
                    10 Years
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="font-semibold text-gray_700 text-left w-auto"
                    variant="body2"
                  >
                    Graduated
                  </Text>
                  <Text
                    className="font-semibold text-gray_900 text-right w-auto"
                    variant="body2"
                  >
                    Yes
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="font-semibold text-gray_700 text-left w-auto"
                    variant="body2"
                  >
                    Language
                  </Text>
                  <Text
                    className="font-semibold text-gray_900 text-right w-auto"
                    variant="body2"
                  >
                    English, French
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="font-semibold text-gray_700 text-left w-auto"
                    variant="body2"
                  >
                    Social
                  </Text>
                  <div className="flex flex-row gap-[15px] items-center justify-between w-[41%]">
                    <Img
                      src="images/img_facebook_gray_900.svg"
                      className="common-pointer h-[22px] w-[22px]"
                      onClick={handleNavigate}
                      alt="facebook"
                    />
                    <Button className="bg-deep_orange_400 flex h-9 items-center justify-center p-[9px] rounded-[50%] w-9">
                      <Img
                        src="images/img_camera.svg"
                        className="h-[18px]"
                        alt="camera"
                      />
                    </Button>
                    <Img
                      src="images/img_twitter_gray_900.svg"
                      className="common-pointer h-[17px] w-auto"
                      onClick={handleNavigate1}
                      alt="twitter"
                    />
                    <Img
                      src="images/img_linkedin_gray_900.svg"
                      className="h-[18px] w-auto"
                      alt="linkedin"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:px-10 px-20 sm:px-5 w-full">
          <div className="bg-black_901 flex items-start justify-start max-w-7xl mx-auto md:px-5 px-[50px] py-[61px] rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col justify-start w-[16%] md:w-full">
                <Img
                  src="images/img_ellipse169.png"
                  className="h-[60px] md:h-auto mr-[127px] rounded-[50%] w-[60px]"
                  alt="ellipse169"
                />
                <Img
                  src="images/img_ellipse170.png"
                  className="h-[60px] md:h-auto md:ml-[0] ml-[127px] mt-[45px] rounded-[50%] w-[60px]"
                  alt="ellipse170"
                />
                <Img
                  src="images/img_ellipse171.png"
                  className="h-[60px] md:h-auto md:ml-[0] ml-[30px] mr-[97px] mt-[69px] rounded-[50%] w-[60px]"
                  alt="ellipse171"
                />
              </div>
              <div className="flex sm:flex-1 flex-col gap-10 items-center justify-start w-[576px] sm:w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <Text
                    className="font-bold font-metropolis leading-[55.00px] text-center text-white_A700"
                    as="h2"
                    variant="h2"
                  >
                    <>
                      Subscribe For Get Update
                      <br />
                      Every New Courses
                    </>
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-center text-white_A700_b2 w-auto"
                    variant="body4"
                  >
                    20k+ students daily learn with Educatsy. Subscribe for new
                    courses.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-full">
                  <Input
                    wrapClassName="bg-white_A700_33 flex-1 sm:flex-1 px-5 py-[15px] rounded-bl-[10px] rounded-br-none rounded-tl-[10px] rounded-tr-none w-[76%] sm:w-full"
                    className="font-medium p-0 placeholder:text-white_A700 text-base text-left text-white_A700 w-full"
                    type="email"
                    name="email"
                    placeholder="enter your email"
                  ></Input>
                  <Button className="bg-red_300 cursor-pointer font-medium h-[60px] leading-[normal] min-w-[142px] sm:px-5 px-8 py-5 rounded-bl-none rounded-br-[10px] rounded-tl-none rounded-tr-[10px] text-base text-center text-white_A700 w-auto">
                    Subscribe
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col justify-start w-[16%] md:w-full">
                <Img
                  src="images/img_ellipse166.png"
                  className="h-[60px] md:h-auto md:ml-[0] ml-[97px] mr-[30px] rounded-[50%] w-[60px]"
                  alt="ellipse166"
                />
                <Img
                  src="images/img_ellipse167.png"
                  className="h-[60px] md:h-auto mr-[127px] mt-[69px] rounded-[50%] w-[60px]"
                  alt="ellipse167"
                />
                <Img
                  src="images/img_ellipse168.png"
                  className="h-[60px] md:h-auto md:ml-[0] ml-[127px] mt-[45px] rounded-[50%] w-[60px]"
                  alt="ellipse168"
                />
              </div>
            </div>
          </div>
        </div>
        <EduviCoursesDetailsFooterlogoOne className="bg-gray_100 flex items-center justify-center p-20 md:px-5 w-full" />
      </div>
    </>
  );
};

export default SinglementordetailsPage;
