import React from "react";

import { Img, Button, Text } from "components";

const EduviCoursesDetailsFooterlogoOne = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <div className="flex flex-col gap-10 items-start justify-start w-[180px]">
            <div className="flex flex-col gap-[22px] items-center justify-start self-stretch w-auto">
              <Img
                src="images/img_logo.svg"
                className="h-[30px] w-[173px]"
                alt="logo_One"
              />
              <div className="flex flex-row gap-[15px] items-center justify-start self-stretch w-auto">
                <Img
                  src="images/img_facebook.svg"
                  className="h-[22px] w-[22px]"
                  alt="facebook"
                />
                <Button className="bg-deep_orange_400 flex h-9 items-center justify-center rounded-[50%] w-9">
                  <Img
                    src="images/img_camera.svg"
                    className="h-[18px]"
                    alt="camera"
                  />
                </Button>
                <Img
                  src="images/img_twitter.svg"
                  className="h-[17px] w-[22px]"
                  alt="twitter"
                />
                <Img
                  src="images/img_linkedin.svg"
                  className="h-[18px] w-[22px]"
                  alt="linkedin"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                ©2021 Educatsy
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Educatsy is a registered
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start w-44">
            <Text
              className="font-inter text-gray_900 text-left w-auto"
              variant="body1"
            >
              Courses
            </Text>
            <div className="flex flex-col gap-[17px] items-start justify-start w-full">
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Classroom courses
              </Text>
              <Text
                className="font-inter font-normal max-w-[176px] md:max-w-full not-italic text-gray_700 text-left"
                variant="body4"
              >
                Virtual classroom courses
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                E-learning courses
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Video Courses
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Offline Courses
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start w-44">
            <Text
              className="font-inter text-gray_900 text-left w-auto"
              variant="body1"
            >
              Community
            </Text>
            <div className="flex flex-col gap-[17px] items-start justify-start w-full">
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Learners
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Partners
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Developers
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Transactions
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Blog
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Teaching Center
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start w-44">
            <Text
              className="font-inter text-gray_900 text-left w-auto"
              variant="body1"
            >
              Quick links
            </Text>
            <div className="flex flex-col gap-[17px] items-start justify-start w-full">
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Home
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Professional Education
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Courses
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Admissions
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Testimonial
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Programs
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center w-44">
            <Text
              className="font-inter text-gray_900 text-left w-auto"
              variant="body1"
            >
              More
            </Text>
            <div className="flex flex-col gap-[17px] items-start justify-start w-full">
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Press
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Investors
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Terms
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Privacy
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Help
              </Text>
              <Text
                className="font-inter font-normal not-italic text-gray_700 text-left w-auto"
                variant="body4"
              >
                Contact
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

EduviCoursesDetailsFooterlogoOne.defaultProps = {};

export default EduviCoursesDetailsFooterlogoOne;
