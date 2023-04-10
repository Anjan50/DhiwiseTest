import React from "react";

import EduviCoursesDetailsHeader from "components/EduviCoursesDetailsHeader";
import { Text, List, Img, Button, Input, SelectBox } from "components";
import { CloseSVG } from "../../assets/images";
import EduviCoursesDetailsFooterlogoOne from "components/EduviCoursesDetailsFooterlogoOne";
import { useNavigate } from "react-router-dom";

const EduviCoursesPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

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
                  Home | Courses
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="font-semibold leading-[50.00px] text-gray_900 text-left"
                    as="h2"
                    variant="h2"
                  >
                    <>
                      Educatsy Courses
                      <br />
                      For All Standards
                    </>
                  </Text>
                  <div className="font-airbnbcerealapp h-[210px] relative w-[32%] md:w-full">
                    <div className="absolute flex h-max inset-[0] items-center justify-center m-auto w-full">
                      <div className="flex flex-col md:gap-10 gap-[85px] justify-start w-full">
                        <div className="flex items-center justify-start md:ml-[0] ml-[26px] w-[32%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <List
                                className="sm:flex-col flex-row gap-[7px] grid grid-cols-2 w-[16%]"
                                orientation="horizontal"
                              >
                                <div className="flex flex-col sm:ml-[0] relative w-full">
                                  <Text
                                    className="mx-auto text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="mt-[-0.01px] mx-auto text-center text-deep_orange_400 w-auto z-[1]"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-col sm:ml-[0] relative w-full">
                                  <Text
                                    className="mx-auto text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="mt-[-0.01px] mx-auto text-center text-deep_orange_400 w-auto z-[1]"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                </div>
                              </List>
                              <div className="md:h-[17px] h-[31px] relative w-[7%]">
                                <Text
                                  className="absolute right-[0] text-center text-deep_orange_400 top-[0] w-auto"
                                  variant="body6"
                                >
                                  +
                                </Text>
                                <Text
                                  className="absolute bottom-[0] left-[0] text-center text-deep_orange_400 w-auto"
                                  variant="body6"
                                >
                                  +
                                </Text>
                              </div>
                              <div className="flex flex-col relative w-[5%]">
                                <Text
                                  className="mx-auto text-center text-deep_orange_400 w-auto"
                                  variant="body6"
                                >
                                  +
                                </Text>
                                <Text
                                  className="mt-[-0.01px] mx-auto text-center text-deep_orange_400 w-auto z-[1]"
                                  variant="body6"
                                >
                                  +
                                </Text>
                              </div>
                              <div className="flex flex-col relative w-[5%]">
                                <Text
                                  className="mx-auto text-center text-deep_orange_400 w-auto"
                                  variant="body6"
                                >
                                  +
                                </Text>
                                <Text
                                  className="mt-[-0.01px] mx-auto text-center text-deep_orange_400 w-auto z-[1]"
                                  variant="body6"
                                >
                                  +
                                </Text>
                              </div>
                              <List
                                className="sm:flex-col flex-row gap-[7px] grid grid-cols-5 w-[47%]"
                                orientation="horizontal"
                              >
                                <div className="flex flex-col sm:ml-[0] relative w-full">
                                  <Text
                                    className="mx-auto text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="mt-[-0.01px] mx-auto text-center text-deep_orange_400 w-auto z-[1]"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-col sm:ml-[0] relative w-full">
                                  <Text
                                    className="mx-auto text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="mt-[-0.01px] mx-auto text-center text-deep_orange_400 w-auto z-[1]"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-col sm:ml-[0] relative w-full">
                                  <Text
                                    className="mx-auto text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="mt-[-0.01px] mx-auto text-center text-deep_orange_400 w-auto z-[1]"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-col sm:ml-[0] relative w-full">
                                  <Text
                                    className="mx-auto text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="mt-[-0.01px] mx-auto text-center text-deep_orange_400 w-auto z-[1]"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-col sm:ml-[0] relative w-full">
                                  <Text
                                    className="mx-auto text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="mt-[-0.01px] mx-auto text-center text-deep_orange_400 w-auto z-[1]"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                </div>
                              </List>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                              <div className="flex flex-col items-center justify-start w-[16%]">
                                <div className="flex flex-row gap-2 items-center justify-between w-full">
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-2 items-center justify-between w-full">
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-2 items-center justify-between w-full">
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-2 items-center justify-between w-full">
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[5%]">
                                <div className="md:h-[15px] h-[30px] relative w-full">
                                  <Text
                                    className="absolute inset-x-[0] mx-auto text-center text-deep_orange_400 top-[0] w-max"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="absolute bottom-[0] inset-x-[0] mx-auto text-center text-deep_orange_400 w-max"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="md:h-[15px] h-[30px] relative w-full">
                                  <Text
                                    className="absolute inset-x-[0] mx-auto text-center text-deep_orange_400 top-[0] w-max"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="absolute bottom-[0] inset-x-[0] mx-auto text-center text-deep_orange_400 w-max"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                </div>
                              </div>
                              <List
                                className="flex-col gap-px grid w-[68%]"
                                orientation="vertical"
                              >
                                <div className="flex flex-row items-center justify-between my-0 w-full">
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-between my-0 w-full">
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-between my-0 w-full">
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-between my-0 w-full">
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="text-center text-deep_orange_400 w-auto"
                                    variant="body6"
                                  >
                                    +
                                  </Text>
                                </div>
                              </List>
                            </div>
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="text-center text-deep_orange_400 w-auto"
                                variant="body6"
                              >
                                +
                              </Text>
                              <Text
                                className="text-center text-deep_orange_400 w-auto"
                                variant="body6"
                              >
                                +
                              </Text>
                              <Text
                                className="text-center text-deep_orange_400 w-auto"
                                variant="body6"
                              >
                                +
                              </Text>
                              <Text
                                className="text-center text-deep_orange_400 w-auto"
                                variant="body6"
                              >
                                +
                              </Text>
                              <Text
                                className="text-center text-deep_orange_400 w-auto"
                                variant="body6"
                              >
                                +
                              </Text>
                              <Text
                                className="text-center text-deep_orange_400 w-auto"
                                variant="body6"
                              >
                                +
                              </Text>
                              <Text
                                className="text-center text-deep_orange_400 w-auto"
                                variant="body6"
                              >
                                +
                              </Text>
                              <Text
                                className="text-center text-deep_orange_400 w-auto"
                                variant="body6"
                              >
                                +
                              </Text>
                              <Text
                                className="text-center text-deep_orange_400 w-auto"
                                variant="body6"
                              >
                                +
                              </Text>
                              <Text
                                className="text-center text-deep_orange_400 w-auto"
                                variant="body6"
                              >
                                +
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="backdrop-opacity-[0.5] bg-black_900_cc blur-[81.00px] h-3.5 rounded-[194px] w-full"></div>
                      </div>
                    </div>
                    <Img
                      src="images/img_image_210x374.png"
                      className="absolute h-[210px] inset-[0] justify-center m-auto object-cover w-[97%]"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 items-center justify-start w-full">
          <div className="flex items-center justify-center md:px-10 px-20 sm:px-5 w-full">
            <div className="flex flex-row flex-wrap gap-5 items-center justify-center max-w-7xl mx-auto w-full">
              <Button className="bg-white_A700 cursor-pointer font-medium min-w-[148px] sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-center text-gray_900 w-auto">
                All Courses
              </Button>
              <Button className="bg-white_A700 cursor-pointer font-medium min-w-[143px] sm:px-5 px-[21px] py-5 rounded-[10px] text-base text-center text-gray_900 w-auto">
                Kindergarten
              </Button>
              <Button className="bg-orange_200 cursor-pointer font-medium min-w-[152px] sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-center text-white_A700 w-auto">
                High School
              </Button>
              <Button className="bg-white_A700 cursor-pointer font-medium min-w-[119px] sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-center text-gray_900 w-auto">
                College
              </Button>
              <Button className="bg-white_A700 cursor-pointer font-medium min-w-[137px] sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-center text-gray_900 w-auto">
                Computer
              </Button>
              <Button className="bg-white_A700 cursor-pointer font-medium min-w-[121px] sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-center text-gray_900 w-auto">
                Science
              </Button>
              <Button className="bg-white_A700 cursor-pointer font-medium min-w-[151px] sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-center text-gray_900 w-auto">
                Engineering
              </Button>
              <Button className="bg-white_A700 cursor-pointer font-medium min-w-[160px] sm:px-5 px-[26px] py-5 rounded-[10px] text-base text-center text-deep_orange_400 w-auto">
                More Courses
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-start md:px-10 px-20 sm:px-5 w-full">
            <div
              className="common-pointer flex flex-col gap-6 items-center justify-start max-w-7xl mx-auto w-full"
              onClick={() => navigate("/")}
            >
              <Text
                className="font-semibold text-gray_900 text-left w-auto"
                as="h4"
                variant="h4"
              >
                Standard Classes
              </Text>
              <div className="flex items-center justify-start w-full">
                <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <Img
                        src="images/img_download.svg"
                        className="h-[50px] w-[50px]"
                        alt="download"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <Text
                          className="text-center text-gray_900 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Standard One
                        </Text>
                        <Text
                          className="font-normal leading-[30.00px] max-w-[260px] md:max-w-full not-italic text-center text-gray_700"
                          variant="body4"
                        >
                          Standard 1 is a foundation Standard that reflects 7
                          important concepts...
                        </Text>
                      </div>
                    </div>
                    <Button className="border border-red_300 border-solid cursor-pointer font-medium min-w-[161px] sm:px-5 px-[31px] py-3 rounded-[5px] text-base text-center text-red_300 w-auto">
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <Img
                        src="images/img_download_gray_800.svg"
                        className="h-[50px] w-[50px]"
                        alt="download"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <Text
                          className="text-center text-gray_900 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Standard Two
                        </Text>
                        <Text
                          className="font-normal leading-[30.00px] max-w-[260px] md:max-w-full not-italic text-center text-gray_700"
                          variant="body4"
                        >
                          Standard 2 builds on the foundations of Standard 1 and
                          includes requirements...
                        </Text>
                      </div>
                    </div>
                    <Button className="border border-red_300 border-solid cursor-pointer font-medium min-w-[161px] sm:px-5 px-[31px] py-3 rounded-[5px] text-base text-center text-red_300 w-auto">
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <Img
                        src="images/img_whatsapp.svg"
                        className="h-[50px] w-[50px]"
                        alt="whatsapp"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <Text
                          className="text-center text-gray_900 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Standard Three
                        </Text>
                        <Text
                          className="font-normal leading-[30.00px] max-w-[260px] md:max-w-full not-italic text-center text-gray_700"
                          variant="body4"
                        >
                          Standard 3 of the Aged Care Quality Standards applies
                          to all services delivering personal...
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-red_300 cursor-pointer font-medium min-w-[161px] py-3 rounded-[5px] text-base text-center text-white_A700 w-auto">
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <Img
                        src="images/img_rewind.svg"
                        className="h-[50px] w-[50px]"
                        alt="rewind"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <Text
                          className="text-center text-gray_900 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Standard Four
                        </Text>
                        <Text
                          className="font-normal leading-[30.00px] max-w-[260px] md:max-w-full not-italic text-center text-gray_700"
                          variant="body4"
                        >
                          Standard 4 of the Aged Care Quality Standards focuses
                          on services and supports...
                        </Text>
                      </div>
                    </div>
                    <Button className="border border-red_300 border-solid cursor-pointer font-medium min-w-[161px] sm:px-5 px-[31px] py-3 rounded-[5px] text-base text-center text-red_300 w-auto">
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <Img
                        src="images/img_music.svg"
                        className="h-[50px] w-[50px]"
                        alt="music"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <Text
                          className="text-center text-gray_900 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Standard Five
                        </Text>
                        <Text
                          className="font-normal leading-[30.00px] max-w-[260px] md:max-w-full not-italic text-center text-gray_700"
                          variant="body4"
                        >
                          Standard 5 Learning Resources. Learning Resources
                          ensure that the school has the...
                        </Text>
                      </div>
                    </div>
                    <Button className="border border-red_300 border-solid cursor-pointer font-medium min-w-[161px] sm:px-5 px-[31px] py-3 rounded-[5px] text-base text-center text-red_300 w-auto">
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <Img
                        src="images/img_volume_deep_orange_500.svg"
                        className="h-[50px] w-[50px]"
                        alt="volume"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <Text
                          className="text-center text-gray_900 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Standard Six
                        </Text>
                        <Text
                          className="font-normal leading-[30.00px] max-w-[260px] md:max-w-full not-italic text-center text-gray_700"
                          variant="body4"
                        >
                          Standard 6 requires an organisation to have a system
                          to resolve complaints...
                        </Text>
                      </div>
                    </div>
                    <Button className="border border-red_300 border-solid cursor-pointer font-medium min-w-[161px] sm:px-5 px-[31px] py-3 rounded-[5px] text-base text-center text-red_300 w-auto">
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[50px] w-[50px]"
                        alt="arrowdown"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <Text
                          className="text-center text-gray_900 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Standard Seven
                        </Text>
                        <Text
                          className="font-normal leading-[30.00px] max-w-[260px] md:max-w-full not-italic text-center text-gray_700"
                          variant="body4"
                        >
                          Standard 7 Blood Management mandates that leaders of
                          health service organizations...
                        </Text>
                      </div>
                    </div>
                    <Button className="border border-red_300 border-solid cursor-pointer font-medium min-w-[161px] sm:px-5 px-[31px] py-3 rounded-[5px] text-base text-center text-red_300 w-auto">
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <Img
                        src="images/img_info.svg"
                        className="h-[50px] w-[50px]"
                        alt="info"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <Text
                          className="text-center text-gray_900 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Standard Eight
                        </Text>
                        <Text
                          className="font-normal leading-[30.00px] max-w-[260px] md:max-w-full not-italic text-center text-gray_700"
                          variant="body4"
                        >
                          Standard 8 Course from NCERT Solutions help students
                          to understand...
                        </Text>
                      </div>
                    </div>
                    <Button className="border border-red_300 border-solid cursor-pointer font-medium min-w-[161px] sm:px-5 px-[31px] py-3 rounded-[5px] text-base text-center text-red_300 w-auto">
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <Img
                        src="images/img_volume_red_500.svg"
                        className="h-[50px] w-[50px]"
                        alt="volume"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <Text
                          className="text-center text-gray_900 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Standard Nine
                        </Text>
                        <Text
                          className="font-normal leading-[30.00px] max-w-[260px] md:max-w-full not-italic text-center text-gray_700"
                          variant="body4"
                        >
                          Standard 5 Learning Resources. Learning Resources
                          ensure that the school has the...
                        </Text>
                      </div>
                    </div>
                    <Button className="border border-red_300 border-solid cursor-pointer font-medium min-w-[161px] sm:px-5 px-[31px] py-3 rounded-[5px] text-base text-center text-red_300 w-auto">
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <Img
                        src="images/img_group.svg"
                        className="h-[50px] w-[50px]"
                        alt="group"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <Text
                          className="text-center text-gray_900 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          O- Level
                        </Text>
                        <Text
                          className="font-normal leading-[30.00px] max-w-[260px] md:max-w-full not-italic text-center text-gray_700"
                          variant="body4"
                        >
                          Standard 6 requires an organisation to have a system
                          to resolve complaints...
                        </Text>
                      </div>
                    </div>
                    <Button className="border border-red_300 border-solid cursor-pointer font-medium min-w-[161px] sm:px-5 px-[31px] py-3 rounded-[5px] text-base text-center text-red_300 w-auto">
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-center justify-start px-[15px] py-[30px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <Img
                        src="images/img_arrowup_deep_orange_500.svg"
                        className="h-[50px] w-[50px]"
                        alt="arrowup"
                      />
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <Text
                          className="text-center text-gray_900 w-auto"
                          as="h5"
                          variant="h5"
                        >
                          A- Level
                        </Text>
                        <Text
                          className="font-normal leading-[30.00px] max-w-[260px] md:max-w-full not-italic text-center text-gray_700"
                          variant="body4"
                        >
                          Standard 7 Blood Management mandates that leaders of
                          health service organizations...
                        </Text>
                      </div>
                    </div>
                    <Button className="border border-red_300 border-solid cursor-pointer font-medium min-w-[161px] sm:px-5 px-[31px] py-3 rounded-[5px] text-base text-center text-red_300 w-auto">
                      Class Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start md:px-10 px-20 sm:px-5 w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-7xl mx-auto w-full">
            <div className="flex flex-col gap-10 items-start justify-start w-full">
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="font-semibold text-gray_900 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Other Courses For High School
                </Text>
                <div className="flex md:flex-col flex-row gap-[42px] items-start justify-start w-full">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    wrapClassName="bg-white_A700 flex flex-1 max-w-[838px] pl-5 pr-[7px] py-[7px] rounded-[10px] w-full"
                    className="font-medium gap-[222px] leading-[normal] p-0 placeholder:text-gray_700_99 text-base text-gray_700_99 text-left w-full"
                    name="search"
                    placeholder="Search Class, Course, Book Name"
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer ml-[35px] my-auto"
                          onClick={() => setInputvalue("")}
                          fillColor="#995d5a6f"
                          height={24}
                          width={24}
                          viewBox="0 0 24 24"
                        />
                      ) : (
                        <Img
                          src="images/img_search.svg"
                          className="cursor-pointer ml-[35px] my-auto"
                          alt="search"
                        />
                      )
                    }
                  ></Input>
                  <SelectBox
                    className="bg-white_A700 flex-1 md:flex-1 font-medium leading-[normal] px-[15px] py-[18px] rounded-[10px] text-base text-gray_700_99 text-left w-[32%] md:w-full"
                    placeholderClassName="text-gray_700_99"
                    name="sortby"
                    placeholder="Sort by: Latest"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_red_300.svg"
                        className="h-6 w-6"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
              </div>
              <div className="flex items-start justify-start w-full">
                <div className="gap-10 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 sm:flex-col flex-row gap-6 items-end justify-start p-[15px] rounded-[10px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-1 sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        src="images/img_image_1.png"
                        className="h-[103px] md:h-auto max-h-[103px] object-cover rounded-[10px] w-auto sm:w-auto"
                        alt="image"
                      />
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                        <Text
                          className="text-gray_900 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          The Three Musketeers
                        </Text>
                        <Img
                          src="images/img_star_amber_500.svg"
                          className="h-5 w-28"
                          alt="star"
                        />
                        <Text
                          className="text-deep_orange_400 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          $40.00
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-red_50 flex h-11 items-center justify-center p-2.5 rounded-md w-11">
                      <Img src="images/img_bag.svg" className="h-6" alt="bag" />
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 sm:flex-col flex-row gap-6 items-end justify-start p-[15px] rounded-[10px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-1 sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        src="images/img_image_2.png"
                        className="h-[103px] md:h-auto max-h-[103px] object-cover rounded-[10px] w-auto sm:w-auto"
                        alt="image"
                      />
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                        <Text
                          className="text-gray_900 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          The Three Musketeers
                        </Text>
                        <Img
                          src="images/img_star_amber_500.svg"
                          className="h-5 w-28"
                          alt="star"
                        />
                        <Text
                          className="text-deep_orange_400 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          $40.00
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-red_50 flex h-11 items-center justify-center p-2.5 rounded-md w-11">
                      <Img src="images/img_bag.svg" className="h-6" alt="bag" />
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 sm:flex-col flex-row gap-6 items-end justify-start p-[15px] rounded-[10px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-1 sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        src="images/img_image_3.png"
                        className="h-[103px] md:h-auto max-h-[103px] object-cover rounded-[10px] w-auto sm:w-auto"
                        alt="image"
                      />
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                        <Text
                          className="text-gray_900 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          The Three Musketeers
                        </Text>
                        <Img
                          src="images/img_star_amber_500.svg"
                          className="h-5 w-28"
                          alt="star"
                        />
                        <Text
                          className="text-deep_orange_400 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          $40.00
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-red_50 flex h-11 items-center justify-center p-2.5 rounded-md w-11">
                      <Img src="images/img_bag.svg" className="h-6" alt="bag" />
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 sm:flex-col flex-row gap-6 items-end justify-start p-[15px] rounded-[10px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-1 sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        src="images/img_image_1.png"
                        className="h-[103px] md:h-auto max-h-[103px] object-cover rounded-[10px] w-auto sm:w-auto"
                        alt="image"
                      />
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                        <Text
                          className="text-gray_900 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          The Three Musketeers
                        </Text>
                        <Img
                          src="images/img_star_amber_500.svg"
                          className="h-5 w-28"
                          alt="star"
                        />
                        <Text
                          className="text-deep_orange_400 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          $40.00
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-red_50 flex h-11 items-center justify-center p-2.5 rounded-md w-11">
                      <Img src="images/img_bag.svg" className="h-6" alt="bag" />
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 sm:flex-col flex-row gap-6 items-end justify-start p-[15px] rounded-[10px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-1 sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        src="images/img_image_103x160.png"
                        className="h-[103px] md:h-auto max-h-[103px] object-cover rounded-[10px] w-auto sm:w-auto"
                        alt="image"
                      />
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                        <Text
                          className="text-gray_900 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          The Three Musketeers
                        </Text>
                        <Img
                          src="images/img_star_amber_500.svg"
                          className="h-5 w-28"
                          alt="star"
                        />
                        <Text
                          className="text-deep_orange_400 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          $40.00
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-red_300 flex h-11 items-center justify-center p-2.5 rounded-md w-11">
                      <Img
                        src="images/img_lock_white_a700.svg"
                        className="h-6"
                        alt="lock"
                      />
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 sm:flex-col flex-row gap-6 items-end justify-start p-[15px] rounded-[10px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-1 sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        src="images/img_image_1.png"
                        className="h-[103px] md:h-auto max-h-[103px] object-cover rounded-[10px] w-auto sm:w-auto"
                        alt="image"
                      />
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                        <Text
                          className="text-gray_900 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          The Three Musketeers
                        </Text>
                        <Img
                          src="images/img_star_amber_500.svg"
                          className="h-5 w-28"
                          alt="star"
                        />
                        <Text
                          className="text-deep_orange_400 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          $40.00
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-red_50 flex h-11 items-center justify-center p-2.5 rounded-md w-11">
                      <Img src="images/img_bag.svg" className="h-6" alt="bag" />
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 sm:flex-col flex-row gap-6 items-end justify-start p-[15px] rounded-[10px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-1 sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        src="images/img_image_2.png"
                        className="h-[103px] md:h-auto max-h-[103px] object-cover rounded-[10px] w-auto sm:w-auto"
                        alt="image"
                      />
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                        <Text
                          className="text-gray_900 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          The Three Musketeers
                        </Text>
                        <Img
                          src="images/img_star_amber_500.svg"
                          className="h-5 w-28"
                          alt="star"
                        />
                        <Text
                          className="text-deep_orange_400 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          $40.00
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-red_50 flex h-11 items-center justify-center p-2.5 rounded-md w-11">
                      <Img src="images/img_bag.svg" className="h-6" alt="bag" />
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 sm:flex-col flex-row gap-6 items-end justify-start p-[15px] rounded-[10px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-1 sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        src="images/img_image_3.png"
                        className="h-[103px] md:h-auto max-h-[103px] object-cover rounded-[10px] w-auto sm:w-auto"
                        alt="image"
                      />
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                        <Text
                          className="text-gray_900 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          The Three Musketeers
                        </Text>
                        <Img
                          src="images/img_star_amber_500.svg"
                          className="h-5 w-28"
                          alt="star"
                        />
                        <Text
                          className="text-deep_orange_400 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          $40.00
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-red_50 flex h-11 items-center justify-center p-2.5 rounded-md w-11">
                      <Img src="images/img_bag.svg" className="h-6" alt="bag" />
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 sm:flex-col flex-row gap-6 items-end justify-start p-[15px] rounded-[10px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-1 sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        src="images/img_image_1.png"
                        className="h-[103px] md:h-auto max-h-[103px] object-cover rounded-[10px] w-auto sm:w-auto"
                        alt="image"
                      />
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                        <Text
                          className="text-gray_900 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          The Three Musketeers
                        </Text>
                        <Img
                          src="images/img_star_amber_500.svg"
                          className="h-5 w-28"
                          alt="star"
                        />
                        <Text
                          className="text-deep_orange_400 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          $40.00
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-red_50 flex h-11 items-center justify-center p-2.5 rounded-md w-11">
                      <Img src="images/img_bag.svg" className="h-6" alt="bag" />
                    </Button>
                  </div>
                  <div className="bg-white_A700 hover:cursor-pointer flex flex-1 sm:flex-col flex-row gap-6 items-end justify-start p-[15px] rounded-[10px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-1 sm:flex-col flex-row gap-[15px] items-center justify-start w-full">
                      <Img
                        src="images/img_image_1.png"
                        className="h-[103px] md:h-auto max-h-[103px] object-cover rounded-[10px] w-auto sm:w-auto"
                        alt="image"
                      />
                      <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                        <Text
                          className="text-gray_900 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          The Three Musketeers
                        </Text>
                        <Img
                          src="images/img_star_amber_500.svg"
                          className="h-5 w-28"
                          alt="star"
                        />
                        <Text
                          className="text-deep_orange_400 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          $40.00
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-red_50 flex h-11 items-center justify-center p-2.5 rounded-md w-11">
                      <Img src="images/img_bag.svg" className="h-6" alt="bag" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[19px] items-center justify-center w-full">
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
              <Button className="bg-white_A700 cursor-pointer font-medium leading-[normal] min-w-[42px] px-[15px] py-[9px] rounded-lg text-bluegray_800 text-center text-lg w-auto">
                5
              </Button>
              <Text
                className="font-medium text-gray_900 text-left w-auto"
                variant="body4"
              >
                of 80
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
                  alt="ellipse170_One"
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

export default EduviCoursesPage;
