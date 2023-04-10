import React from "react";

import EduviCoursesDetailsHeader from "components/EduviCoursesDetailsHeader";
import { Text, Img, Line, Button, Input } from "components";
import EduviCoursesDetailsFooterlogoOne from "components/EduviCoursesDetailsFooterlogoOne";

const EduviJoinAsTeacherPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-12 items-start justify-start w-full">
          <EduviCoursesDetailsHeader className="flex flex-col h-[74px] md:h-auto items-center justify-between px-20 md:px-5 py-[22px] w-full" />
          <div className="flex items-start justify-start md:px-10 px-20 sm:px-5 w-full">
            <div className="bg-yellow_100 flex h-[270px] md:h-auto items-center justify-center max-w-7xl mx-auto md:px-5 px-[30px] py-5 rounded-[20px] w-full">
              <div className="flex flex-col gap-px items-start justify-center w-full">
                <Text
                  className="font-medium text-black_900 text-left tracking-[0.48px] w-auto"
                  variant="body4"
                >
                  Home | Become An Instructor
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="font-semibold leading-[50.00px] text-gray_900 text-left"
                    as="h2"
                    variant="h2"
                  >
                    <>
                      Join Educatsy as
                      <br />a Mentor
                    </>
                  </Text>
                  <Img
                    src="images/img_57907191.svg"
                    className="h-[210px] w-[306px]"
                    alt="46300601"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start md:px-10 px-20 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-28 items-center justify-between max-w-7xl mx-auto w-full">
            <div className="flex flex-1 h-full items-center justify-center w-full">
              <Img
                src="images/img_image_521x510.png"
                className="h-[521px] md:h-auto object-cover w-[510px]"
                alt="image_One"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="font-semibold text-gray_900 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Apply As Instructor
                </Text>
                <Text
                  className="font-normal leading-[30.00px] max-w-[584px] md:max-w-full not-italic text-gray_700 text-left"
                  variant="body4"
                >
                  Teaching is a vital and admirable career. As such, it comes
                  with quite a bit of responsibility, both in practice and in
                  preparation with many skills required to be a teacher. The
                  following steps provide a general breakdown of the
                  requirements for teachers:
                </Text>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <div className="flex flex-row gap-[30px] items-start justify-start w-full">
                  <div className="flex flex-col gap-2.5 items-start justify-start self-stretch w-auto">
                    <Text
                      className="font-medium text-left text-red_300 w-auto"
                      variant="body4"
                    >
                      Instructor Requirements
                    </Text>
                    <Line className="bg-red_300 h-px shadow-bs2 w-full" />
                  </div>
                  <Text
                    className="font-medium text-gray_700 text-left w-auto"
                    variant="body4"
                  >
                    Instructor Rules
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                    <div className="bg-red_300 h-2.5 rounded-[50%] w-2.5"></div>
                    <Text
                      className="flex-1 font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body4"
                    >
                      An undergraduate degree
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                    <div className="bg-red_300 h-2.5 rounded-[50%] w-2.5"></div>
                    <Text
                      className="flex-1 font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body4"
                    >
                      Participate in supervised teaching
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                    <div className="bg-red_300 h-2.5 rounded-[50%] w-2.5"></div>
                    <Text
                      className="flex-1 font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body4"
                    >
                      State teaching license
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                    <div className="bg-red_300 h-2.5 rounded-[50%] w-2.5"></div>
                    <Text
                      className="flex-1 font-normal not-italic text-gray_900 text-left w-auto"
                      variant="body4"
                    >
                      Pursue graduate studies
                    </Text>
                  </div>
                </div>
              </div>
              <Button className="bg-red_300 cursor-pointer font-medium min-w-[143px] sm:px-5 px-[30px] py-[17px] rounded-[10px] text-base text-center text-white_A700 w-auto">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex font-metropolis items-center justify-center md:px-10 px-20 sm:px-5 w-full">
          <div className="flex items-center justify-center max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1060px] w-full">
              <Text
                className="font-bold text-center text-gray_900 w-auto"
                as="h2"
                variant="h2"
              >
                How to apply to join as instructor
              </Text>
              <div className="bg-white_A700 flex items-center justify-end p-2 rounded-[20px] shadow-bs3 w-full">
                <div className="flex items-center justify-start mt-[7px] w-full">
                  <div className="flex items-center justify-start self-stretch w-auto md:w-full">
                    <Img
                      src="images/img_bg.png"
                      className="h-[577px] sm:h-auto object-cover rounded-[20px] w-[1042px] md:w-full"
                      alt="bg_One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-inter items-center justify-center md:px-10 px-20 sm:px-5 w-full">
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
        <EduviCoursesDetailsFooterlogoOne className="bg-gray_100 flex font-inter items-center justify-center p-20 md:px-5 w-full" />
      </div>
    </>
  );
};

export default EduviJoinAsTeacherPage;
