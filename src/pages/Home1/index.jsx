import React from "react";

import EduviCoursesDetailsHeader from "components/EduviCoursesDetailsHeader";
import { Button, Text, SelectBox, Img, Line, List, Input } from "components";
import EduviCoursesDetailsFooterlogoOne from "components/EduviCoursesDetailsFooterlogoOne";
import { useNavigate } from "react-router-dom";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <EduviCoursesDetailsHeader className="flex flex-col h-[74px] md:h-auto items-center justify-between px-20 md:px-5 py-[22px] w-full" />
          <div className="flex items-start justify-start md:px-10 px-20 sm:px-5 py-[60px] w-full">
            <div className="flex md:flex-col flex-row gap-[42px] items-center justify-start max-w-7xl mx-auto w-full">
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                <Button className="bg-white_A700 cursor-pointer font-medium leading-[normal] min-w-[236px] px-5 py-[11px] rounded-[10px] text-center text-deep_orange_400 text-xl w-auto">
                  Never Stop Learning
                </Button>
                <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                  <Text
                    className="leading-[75.00px] text-gray_900 text-left"
                    as="h1"
                    variant="h1"
                  >
                    <>
                      Grow up your skills
                      <br />
                      by online courses
                      <br />
                      with Educatsy
                    </>
                  </Text>
                  <Text
                    className="font-normal leading-[30.00px] max-w-[619px] md:max-w-full not-italic text-gray_700 text-left"
                    variant="body4"
                  >
                    Educatsy is a Global training provider based across the UK
                    that specializes in accredited and bespoke training courses.
                    We crush the barriers to getting a degree.
                  </Text>
                </div>
                <div className="bg-white_A700 flex items-start justify-start pl-4 pr-2 py-2 rounded-[10px] w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                    <div className="flex flex-1 flex-row gap-5 items-center justify-start w-full">
                      <SelectBox
                        className="sm:flex-1 font-medium leading-[normal] text-base text-gray_700_99 text-right w-[30%] sm:w-full"
                        placeholderClassName="text-gray_700_99"
                        name="frame7870"
                        placeholder="Kindergarten"
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
                      <Line className="bg-bluegray_100 h-[30px] w-px" />
                      <Text
                        className="font-medium text-gray_700_99 text-left w-auto"
                        variant="body4"
                      >
                        Class/Course
                      </Text>
                    </div>
                    <Button
                      className="bg-red_300 cursor-pointer flex items-center justify-center min-w-[143px] px-[30px] py-[13px] rounded-[10px] w-auto"
                      leftIcon={
                        <Img
                          src="images/img_search_white_a700.svg"
                          className="mr-[5px]"
                          alt="search"
                        />
                      }
                    >
                      <div className="font-medium sm:px-5 text-base text-center text-white_A700">
                        Search
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_image_699x619.png"
                className="flex-1 md:flex-none h-[699px] sm:h-auto max-h-[699px] object-cover w-auto sm:w-auto md:w-auto"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:px-10 px-20 sm:px-5 w-full">
          <div className="flex flex-col gap-10 items-center justify-start max-w-7xl mx-auto w-full">
            <div className="flex flex-col gap-5 items-center justify-start max-w-[840px] w-full">
              <Text
                className="font-bold font-metropolis leading-[55.00px] text-center text-gray_900"
                as="h2"
                variant="h2"
              >
                <>
                  High quality video, audio
                  <br />& live classes
                </>
              </Text>
              <Text
                className="font-inter font-normal leading-[30.00px] not-italic text-center text-gray_700"
                variant="body4"
              >
                <>
                  High-definition video is video of higher resolution and
                  quality than standard-definition. While there is no
                  standardized meaning for high-definition, generally any video
                  image with considerably more than
                  <br />
                  480 vertical scan lines or 576 vertical lines is considered
                  high-definition.
                </>
              </Text>
            </div>
            <Button className="bg-red_300 cursor-pointer font-medium min-w-[162px] sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-center text-white_A700 w-auto">
              Visit Courses
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center md:px-10 px-20 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center max-w-7xl mx-auto md:px-10 sm:px-5 w-full">
            <div className="h-[540px] relative w-full">
              <Img
                src="images/img_rectangle2868.png"
                className="h-[540px] m-auto object-cover rounded-[16px] w-full"
                alt="rectangle2868"
              />
              <div className="absolute bottom-[6%] flex flex-row sm:gap-10 inset-x-[0] items-end justify-between max-w-[1009px] mx-auto w-full">
                <Img
                  src="images/img_portraitlittlegirlcoloring.png"
                  className="h-[215px] md:h-auto object-cover rounded-[16px] w-[210px]"
                  alt="portraitlittleg"
                />
                <Button className="bg-deep_orange_400 flex h-[60px] items-center justify-center rounded-[50%] w-[60px]">
                  <Img
                    src="images/img_alarm.svg"
                    className="h-[33px]"
                    alt="alarm"
                  />
                </Button>
                <Button className="bg-red_300 flex h-[60px] items-center justify-center rounded-[50%] w-[60px]">
                  <Img
                    src="images/img_arrowup.svg"
                    className="h-6"
                    alt="arrowup"
                  />
                </Button>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-1 items-start justify-start p-[15px] rounded-[10px] w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="bg-red_51 flex items-start justify-start p-5 rounded-[10px] w-[70px]">
                    <Img
                      src="images/img_volume.svg"
                      className="h-[30px] w-[30px]"
                      alt="volume"
                    />
                  </div>
                  <Text
                    className="text-gray_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Audio Classes
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-start justify-start p-[15px] rounded-[10px] w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="bg-gray_50 flex items-start justify-start p-5 rounded-[10px] w-[70px]">
                    <Img
                      src="images/img_user_red_300.svg"
                      className="h-[30px] w-[30px]"
                      alt="user"
                    />
                  </div>
                  <Text
                    className="text-gray_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Live Classes
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-start justify-start p-[15px] rounded-[10px] w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <div className="bg-cyan_50 flex items-start justify-start p-5 rounded-[10px] w-[70px]">
                    <Img
                      src="images/img_play_green_a700.svg"
                      className="h-[30px] w-[30px]"
                      alt="play"
                    />
                  </div>
                  <Text
                    className="text-gray_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Recorded Class
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="flex items-center justify-center max-w-7xl mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[52px] items-center justify-start w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <Text
                className="font-bold font-metropolis text-center text-gray_900 w-auto"
                as="h2"
                variant="h2"
              >
                Qualified lessons for students
              </Text>
              <Text
                className="font-inter font-normal leading-[30.00px] not-italic text-center text-gray_700"
                variant="body4"
              >
                <>
                  A lesson or class is a structured period of time where
                  learning is intended to occur. <br />
                  It involves one or more students being taught by a teacher or
                  instructor.
                </>
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-center w-full">
              <Button className="bg-gray_201 cursor-pointer font-medium min-w-[151px] sm:px-5 px-[25px] py-5 rounded-[10px] text-base text-center text-gray_900 w-auto">
                Kindergarten
              </Button>
              <Button className="bg-orange_200 cursor-pointer font-medium min-w-[152px] sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-center text-gray_900 w-auto">
                High School
              </Button>
              <Button className="bg-gray_201 cursor-pointer font-medium min-w-[151px] md:px-10 sm:px-5 px-[46px] py-5 rounded-[10px] text-base text-center text-gray_900 w-auto">
                College
              </Button>
            </div>
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
                        Standard 3 of the Aged Care Quality Standards applies to
                        all services delivering personal...
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
                        Standard 4 of the Aged Care Quality Standards focuses on
                        services and supports...
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
                        Standard 5 Learning Resources. Learning Resources ensure
                        that the school has the...
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
                        Standard 6 requires an organisation to have a system to
                        resolve complaints...
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
                        Standard 8 Course from NCERT Solutions help students to
                        understand...
                      </Text>
                    </div>
                  </div>
                  <Button className="border border-red_300 border-solid cursor-pointer font-medium min-w-[161px] sm:px-5 px-[31px] py-3 rounded-[5px] text-base text-center text-red_300 w-auto">
                    Class Details
                  </Button>
                </div>
              </div>
            </div>
            <Button
              className="common-pointer bg-red_300 cursor-pointer font-medium min-w-[202px] sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-center text-white_A700 w-auto"
              onClick={() => navigate("/eduvicourses")}
            >
              Visit More Classes
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center md:px-10 px-20 sm:px-5 w-full">
          <div className="bg-red_52 flex items-start justify-end max-w-7xl mx-auto md:px-5 py-[38px] rounded-[20px] w-full">
            <div className="flex md:flex-col flex-row gap-[21px] items-center justify-start md:pl-10 sm:pl-5 pl-[70px] w-full">
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                <Button className="bg-black_900 cursor-pointer font-medium leading-[normal] min-w-[169px] px-5 py-[11px] rounded-[10px] text-center text-white_A700 text-xl w-auto">
                  College Level
                </Button>
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="font-bold font-metropolis leading-[55.00px] text-gray_900 text-left"
                    as="h2"
                    variant="h2"
                  >
                    <>
                      Don’t waste time in
                      <br />
                      COVID-19 pandemic.
                      <br />
                      Develop your skills.
                    </>
                  </Text>
                  <Text
                    className="font-inter font-normal leading-[30.00px] not-italic text-gray_700 text-left"
                    variant="body4"
                  >
                    <>
                      High-definition video is video of higher resolution and
                      quality than standard-definition. While there is no
                      standardized
                      <br />
                      meaning for high-definition, generally any video.
                    </>
                  </Text>
                </div>
                <div className="flex items-start justify-start w-full">
                  <Button className="bg-red_300 cursor-pointer font-medium min-w-[185px] md:px-10 sm:px-5 px-[41px] py-5 rounded-[10px] text-base text-center text-white_A700 w-auto">
                    Register Now
                  </Button>
                </div>
              </div>
              <Img
                src="images/img_group7647.png"
                className="h-[591px] sm:h-auto max-h-[591px] object-cover w-auto sm:w-auto md:w-auto"
                alt="group7647"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:px-10 px-20 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-center max-w-7xl mx-auto w-full">
            <Img
              src="images/img_image_521x510.png"
              className="h-[521px] sm:h-auto max-h-[521px] object-cover w-auto sm:w-auto md:w-auto"
              alt="image_Four"
            />
            <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="font-bold font-metropolis leading-[55.00px] text-gray_900 text-left"
                  as="h2"
                  variant="h2"
                >
                  <>
                    Want to share your
                    <br />
                    knowledge? Join us
                    <br />a Mentor
                  </>
                </Text>
                <Text
                  className="font-inter font-normal leading-[30.00px] max-w-[690px] md:max-w-full not-italic text-gray_700 text-left"
                  variant="body4"
                >
                  High-definition video is video of higher resolution and
                  quality than standard-definition. While there is no
                  standardized meaning for high-definition, generally any video.
                </Text>
              </div>
              <Button
                className="common-pointer bg-red_300 cursor-pointer font-medium min-w-[204px] sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-center text-white_A700 w-auto"
                onClick={() => navigate("/eduvijoinasteacher")}
              >
                Career Information
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

export default Home1Page;
