import React from "react";

import { Img, Text, SelectBox } from "components";

const EduviCoursesDetailsHeader = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between w-full">
          <div className="header-row ">
            <Img
              src="images/img_logo.svg"
              className="h-[30px] w-[173px]"
              alt="logo"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex flex-1 sm:flex-col flex-row gap-6 sm:hidden items-center justify-center max-w-[730px] w-full">
            <Text
              className="font-inter font-medium text-gray_900 text-left w-auto"
              variant="body4"
            >
              Shop
            </Text>
            <SelectBox
              className="sm:flex-1 font-inter font-medium leading-[normal] text-base text-gray_900 text-right w-[22%] sm:w-full"
              placeholderClassName="text-gray_900"
              name="forkindergarten"
              placeholder="For Kindergarten"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown_gray_900.svg"
                  className="h-6 w-6"
                  alt="arrow_down"
                />
              }
            ></SelectBox>
            <SelectBox
              className="sm:flex-1 font-inter font-medium leading-[normal] text-base text-gray_900 text-right w-[21%] sm:w-full"
              placeholderClassName="text-gray_900"
              name="forhighschool"
              placeholder="For High School"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown_gray_900.svg"
                  className="h-6 w-6"
                  alt="arrow_down"
                />
              }
            ></SelectBox>
            <SelectBox
              className="sm:flex-1 font-inter font-medium leading-[normal] text-base text-gray_900 text-right w-[16%] sm:w-full"
              placeholderClassName="text-gray_900"
              name="forcollege"
              placeholder="For College"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown_gray_900.svg"
                  className="h-6 w-6"
                  alt="arrow_down"
                />
              }
            ></SelectBox>
            <SelectBox
              className="sm:flex-1 font-inter font-medium leading-[normal] text-base text-gray_900 text-right w-[13%] sm:w-full"
              placeholderClassName="text-gray_900"
              name="courses"
              placeholder="Courses"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown_gray_900.svg"
                  className="h-6 w-6"
                  alt="arrow_down"
                />
              }
            ></SelectBox>
            <Text
              className="font-inter font-medium text-gray_900 text-left w-auto"
              variant="body4"
            >
              Mentors
            </Text>
          </div>
          <div className="flex flex-row gap-8 sm:hidden items-start justify-start w-[268px]">
            <div className="flex flex-row gap-2.5 items-center justify-start self-stretch w-auto">
              <Text
                className="font-inter font-medium text-gray_900 text-right w-auto"
                variant="body4"
              >
                Cart (0)
              </Text>
              <Img
                src="images/img_bag.svg"
                className="h-[30px] w-[30px]"
                alt="bag"
              />
            </div>
            <div className="flex flex-row gap-2.5 items-center justify-start w-full">
              <Text
                className="font-inter font-medium text-gray_900 text-right w-auto"
                variant="body4"
              >
                My Account
              </Text>
              <Img
                src="images/img_user.svg"
                className="h-[30px] w-[30px]"
                alt="user"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

EduviCoursesDetailsHeader.defaultProps = {};

export default EduviCoursesDetailsHeader;
