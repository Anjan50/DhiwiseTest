import React from "react";

import EduviCoursesDetailsHeader from "components/EduviCoursesDetailsHeader";
import { Text, Img, List, Line, CheckBox, Button, Input } from "components";
import EduviCoursesDetailsFooterlogoOne from "components/EduviCoursesDetailsFooterlogoOne";

const EduviCoursesPricingPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[100px] items-center justify-center mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-12 items-start justify-start w-full">
          <EduviCoursesDetailsHeader className="flex flex-col h-[74px] md:h-auto items-center justify-between px-20 md:px-5 py-[22px] w-full" />
          <div className="flex items-start justify-start md:px-10 px-20 sm:px-5 w-full">
            <div className="bg-red_53 flex h-[270px] md:h-auto items-center justify-center max-w-7xl mx-auto md:px-5 px-[30px] py-5 rounded-[20px] w-full">
              <div className="flex flex-col gap-px items-start justify-center w-full">
                <Text
                  className="font-medium text-black_900 text-left tracking-[0.48px] w-auto"
                  variant="body4"
                >
                  Home | Pricing
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="font-semibold leading-[50.00px] text-gray_900 text-left"
                    as="h2"
                    variant="h2"
                  >
                    <>
                      Our Pre-ready
                      <br />
                      Pricing Packages
                    </>
                  </Text>
                  <Img
                    src="images/img_43891.svg"
                    className="h-[210px] w-[485px]"
                    alt="43891"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start md:px-10 px-20 sm:px-5 w-full">
          <div className="flex flex-col gap-5 items-center justify-start max-w-7xl mx-auto w-full">
            <Text
              className="font-bold font-metropolis leading-[55.00px] text-center text-gray_900"
              as="h2"
              variant="h2"
            >
              <>
                We create a monthly pricing package
                <br />
                for all standard students
              </>
            </Text>
            <Text
              className="font-inter font-normal leading-[30.00px] not-italic text-center text-gray_700"
              variant="body4"
            >
              <>
                Basically we create this package for those who are really
                interested and get benefited from our courses or books. <br />
                We want to make a low cost package for them. So that they can
                purchase any courses with the package they buy from us. <br />
                Also will get free books from every packages.
              </>
            </Text>
          </div>
        </div>
        <div className="flex items-start justify-start md:px-10 px-20 sm:px-5 w-full">
          <List
            className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-7xl mx-auto w-full"
            orientation="horizontal"
          >
            <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-start justify-start hover:mx-0 p-[30px] sm:px-5 rounded-[20px] hover:shadow-bs1 hover:w-full w-full">
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                  <Img
                    src="images/img_location.svg"
                    className="h-[50px] w-[50px]"
                    alt="location"
                  />
                  <Text
                    className="font-semibold text-gray_900 text-left w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Basic Pack
                  </Text>
                </div>
                <Line className="bg-gray_900_26 h-px w-full" />
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="3hdvideolessons_One"
                  id="3hdvideolessons_One"
                  label="3 HD video lessons & tutorials"
                ></CheckBox>
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="1officialexam"
                  id="1officialexam"
                  label="1 Official exam"
                ></CheckBox>
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="100practiceques_One"
                  id="100practiceques_One"
                  label="100 Practice questions"
                ></CheckBox>
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="1monthsubscript_One"
                  id="1monthsubscript_One"
                  label="1 Month subscriptions"
                ></CheckBox>
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="1freebook"
                  id="1freebook"
                  label="1 Free book"
                ></CheckBox>
                <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                  <Img
                    src="images/img_close.svg"
                    className="h-6 w-6"
                    alt="close"
                  />
                  <Text
                    className="flex-1 font-medium text-gray_700 text-left w-auto"
                    variant="body4"
                  >
                    Practice quizzes & assignments
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                  <Img
                    src="images/img_close.svg"
                    className="h-6 w-6"
                    alt="close_One"
                  />
                  <Text
                    className="flex-1 font-medium text-gray_700 text-left w-auto"
                    variant="body4"
                  >
                    In depth explanations
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                  <Img
                    src="images/img_close.svg"
                    className="h-6 w-6"
                    alt="close_Two"
                  />
                  <Text
                    className="flex-1 font-medium text-gray_700 text-left w-auto"
                    variant="body4"
                  >
                    Personal instructor Assistance
                  </Text>
                </div>
              </div>
              <Text
                className="font-semibold text-gray_900 text-left w-auto"
                variant="body2"
              >
                $200
              </Text>
              <Button className="border border-red_300 border-solid cursor-pointer font-medium sm:px-5 px-6 py-5 rounded-[5px] text-center text-lg text-red_300 w-full">
                Purchase Course
              </Button>
            </div>
            <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-start justify-start hover:mx-0 p-[30px] sm:px-5 rounded-[20px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
              <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                <Img
                  src="images/img_location.svg"
                  className="h-[50px] w-[50px]"
                  alt="location"
                />
                <Text
                  className="font-semibold text-gray_900 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Standard Pack
                </Text>
                <Line className="bg-gray_900_26 h-px w-full" />
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="8hdvideolessons_One"
                  id="8hdvideolessons_One"
                  label="8 HD video lessons & tutorials"
                ></CheckBox>
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="2officialexam"
                  id="2officialexam"
                  label="2 Official exam"
                ></CheckBox>
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="200practiceques_One"
                  id="200practiceques_One"
                  label="200 Practice questions"
                ></CheckBox>
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="1monthsubscript_One"
                  id="1monthsubscript_One2"
                  label="1 Month subscriptions"
                ></CheckBox>
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="3freebooks"
                  id="3freebooks"
                  label="3 Free books"
                ></CheckBox>
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="practicequizzes_One"
                  id="practicequizzes_One"
                  label="Practice quizzes & assignments"
                ></CheckBox>
                <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                  <Img
                    src="images/img_close.svg"
                    className="h-6 w-6"
                    alt="close"
                  />
                  <Text
                    className="flex-1 font-medium text-gray_700 text-left w-auto"
                    variant="body4"
                  >
                    In depth explanations
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                  <Img
                    src="images/img_close.svg"
                    className="h-6 w-6"
                    alt="close_One"
                  />
                  <Text
                    className="flex-1 font-medium text-gray_700 text-left w-auto"
                    variant="body4"
                  >
                    Personal instructor Assistance
                  </Text>
                </div>
              </div>
              <Text
                className="font-semibold text-gray_900 text-left w-auto"
                variant="body2"
              >
                $600
              </Text>
              <Button className="bg-red_300 cursor-pointer font-medium sm:px-5 px-6 py-5 rounded-[5px] text-center text-lg text-white_A700 w-full">
                Purchase Course
              </Button>
            </div>
            <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[25px] items-start justify-start hover:mx-0 p-[30px] sm:px-5 rounded-[20px] hover:shadow-bs1 hover:w-full w-full">
              <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                <Img
                  src="images/img_location.svg"
                  className="h-[50px] w-[50px]"
                  alt="location"
                />
                <Text
                  className="font-semibold text-gray_900 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Premium Pack
                </Text>
                <Line className="bg-gray_900_26 h-px w-full" />
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="15hdvideolesson_One"
                  id="15hdvideolesson_One"
                  label="15 HD video lessons & tutorials"
                ></CheckBox>
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="3officialexam"
                  id="3officialexam"
                  label="3 Official exam"
                ></CheckBox>
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="300practiceques_One"
                  id="300practiceques_One"
                  label="300 Practice questions"
                ></CheckBox>
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="1monthsubscript_One"
                  id="1monthsubscript_One3"
                  label="1 Month subscriptions"
                ></CheckBox>
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="5freebooks"
                  id="5freebooks"
                  label="5 Free books"
                ></CheckBox>
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="practicequizzes_One"
                  id="practicequizzes_One2"
                  label="Practice quizzes & assignments"
                ></CheckBox>
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="indepthexplanat_One"
                  id="indepthexplanat_One"
                  label="In depth explanations"
                ></CheckBox>
                <CheckBox
                  className="font-medium leading-[normal] text-base text-gray_700 text-left"
                  inputClassName="mr-[5px]"
                  name="personalinstruc_One"
                  id="personalinstruc_One"
                  label="Personal instructor Assistance"
                ></CheckBox>
              </div>
              <Text
                className="font-semibold text-gray_900 text-left w-auto"
                variant="body2"
              >
                $1200
              </Text>
              <Button className="border border-red_300 border-solid cursor-pointer font-medium sm:px-5 px-6 py-5 rounded-[5px] text-center text-lg text-red_300 w-full">
                Purchase Course
              </Button>
            </div>
          </List>
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

export default EduviCoursesPricingPage;
