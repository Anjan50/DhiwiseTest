import React from "react";

import EduviCoursesDetailsHeader from "components/EduviCoursesDetailsHeader";
import { Text, Img, Button, Input } from "components";
import EduviCoursesDetailsFooterlogoOne from "components/EduviCoursesDetailsFooterlogoOne";
import { useNavigate } from "react-router-dom";

const AllmentorsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-12 items-start justify-start w-full">
          <EduviCoursesDetailsHeader className="flex flex-col h-[74px] md:h-auto items-center justify-between px-20 md:px-5 py-[22px] w-full" />
          <div className="flex items-start justify-start md:px-10 px-20 sm:px-5 w-full">
            <div className="bg-red_53 flex h-[270px] md:h-auto items-center justify-center max-w-7xl mx-auto md:px-5 px-[30px] py-5 rounded-[20px] w-full">
              <div className="flex flex-col gap-px items-start justify-center w-full">
                <Text
                  className="font-medium text-black_900 text-left tracking-[0.48px] w-auto"
                  variant="body4"
                >
                  Home | Our Mentors
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="font-semibold leading-[50.00px] text-gray_900 text-left"
                    as="h2"
                    variant="h2"
                  >
                    <>
                      Educatsy has the
                      <br />
                      qualified mentor
                    </>
                  </Text>
                  <Img
                    src="images/img_49063311.svg"
                    className="h-[210px] w-[425px]"
                    alt="49063311"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start md:px-10 px-20 sm:px-5 w-full">
          <div className="flex flex-col gap-[51px] items-center justify-start max-w-7xl mx-auto w-full">
            <div className="flex flex-row flex-wrap gap-5 items-start justify-start max-w-[1272px] w-full">
              <Button className="bg-white_A700 cursor-pointer font-medium min-w-[147px] sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-black_900 text-center w-auto">
                All Mentors
              </Button>
              <Button className="bg-white_A700 cursor-pointer font-medium min-w-[190px] sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-black_900 text-center w-auto">
                For Kindergarten
              </Button>
              <Button className="bg-orange_200 cursor-pointer font-medium min-w-[177px] sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-center text-white_A700 w-auto">
                For high school
              </Button>
              <Button className="bg-white_A700 cursor-pointer font-medium min-w-[145px] sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-black_900 text-center w-auto">
                For college
              </Button>
              <Button className="bg-white_A700 cursor-pointer font-medium min-w-[178px] sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-black_900 text-center w-auto">
                For Technology
              </Button>
            </div>
            <div className="flex items-start justify-start w-full">
              <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div
                  className="common-pointer flex flex-1 flex-col gap-2.5 items-start justify-start w-full"
                  onClick={() => navigate("/singlementordetails")}
                >
                  <Img
                    src="images/img_bg_290x290.png"
                    className="h-[290px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[242px]">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body4"
                      >
                        Kristin Watson
                      </Text>
                      <Text
                        className="text-gray_700 text-left w-auto"
                        variant="body5"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="h-6 w-6"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    src="images/img_bg_1.png"
                    className="h-[290px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[142px]">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body4"
                      >
                        Brooklyn Simmons
                      </Text>
                      <Text
                        className="text-gray_700 text-left w-auto"
                        variant="body5"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="h-6 w-6"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    src="images/img_bg_2.png"
                    className="h-[290px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[120px]">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body4"
                      >
                        Robert Fox
                      </Text>
                      <Text
                        className="text-gray_700 text-left w-auto"
                        variant="body5"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="h-6 w-6"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    src="images/img_bg_3.png"
                    className="h-[290px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[120px]">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body4"
                      >
                        Wade Warren
                      </Text>
                      <Text
                        className="text-gray_700 text-left w-auto"
                        variant="body5"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="h-6 w-6"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    src="images/img_bg_4.png"
                    className="h-[290px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[120px]">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body4"
                      >
                        Bessie Cooper
                      </Text>
                      <Text
                        className="text-gray_700 text-left w-auto"
                        variant="body5"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="h-6 w-6"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    src="images/img_bg_5.png"
                    className="h-[290px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[124px]">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body4"
                      >
                        Ronald Richards
                      </Text>
                      <Text
                        className="text-gray_700 text-left w-auto"
                        variant="body5"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="h-6 w-6"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    src="images/img_bg_6.png"
                    className="h-[290px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[120px]">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body4"
                      >
                        Guy Hawkins
                      </Text>
                      <Text
                        className="text-gray_700 text-left w-auto"
                        variant="body5"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="h-6 w-6"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    src="images/img_bg_7.png"
                    className="h-[290px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[120px]">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body4"
                      >
                        Floyd Miles
                      </Text>
                      <Text
                        className="text-gray_700 text-left w-auto"
                        variant="body5"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="h-6 w-6"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    src="images/img_bg_8.png"
                    className="h-[290px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[120px]">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body4"
                      >
                        Theresa Webb
                      </Text>
                      <Text
                        className="text-gray_700 text-left w-auto"
                        variant="body5"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="h-6 w-6"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    src="images/img_bg_9.png"
                    className="h-[290px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[120px]">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body4"
                      >
                        Cody Fisher
                      </Text>
                      <Text
                        className="text-gray_700 text-left w-auto"
                        variant="body5"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="h-6 w-6"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    src="images/img_bg_10.png"
                    className="h-[290px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[122px]">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body4"
                      >
                        Courtney Henry
                      </Text>
                      <Text
                        className="text-gray_700 text-left w-auto"
                        variant="body5"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="h-6 w-6"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                  <Img
                    src="images/img_bg_11.png"
                    className="h-[290px] md:h-auto object-cover rounded-[10px] w-full"
                    alt="bg"
                  />
                  <div className="flex flex-row gap-6 items-start justify-between w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[120px]">
                      <Text
                        className="font-medium text-black_900 text-left w-auto"
                        variant="body4"
                      >
                        Jerome Bell
                      </Text>
                      <Text
                        className="text-gray_700 text-left w-auto"
                        variant="body5"
                      >
                        Founder & Mentor
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="h-6 w-6"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[19px] items-center justify-start self-stretch w-auto">
              <Button className="bg-white_A700 flex h-11 items-center justify-center p-2.5 rounded-md w-11">
                <Img
                  src="images/img_arrowleft.svg"
                  className=""
                  alt="arrowleft"
                />
              </Button>
              <Text
                className="font-medium text-gray_900 text-left w-auto"
                variant="body4"
              >
                Page
              </Text>
              <Button className="bg-white_A700 cursor-pointer font-medium leading-[normal] px-[15px] py-[9px] rounded-lg text-bluegray_800 text-center text-lg w-[39px]">
                1
              </Button>
              <Text
                className="font-medium text-gray_900 text-left w-auto"
                variant="body4"
              >
                of 03
              </Text>
              <Button className="bg-red_300 flex h-11 items-center justify-center p-2.5 rounded-md w-11">
                <Img
                  src="images/img_arrowright.svg"
                  className=""
                  alt="arrowright"
                />
              </Button>
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

export default AllmentorsPage;
