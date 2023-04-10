import React from "react";

import EduviCoursesDetailsHeader from "components/EduviCoursesDetailsHeader";
import { Text, Img, Button, List, Input } from "components";
import EduviCoursesDetailsFooterlogoOne from "components/EduviCoursesDetailsFooterlogoOne";
import { useNavigate } from "react-router-dom";

const EduviCoursesDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto self-stretch w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-12 items-start justify-start w-full">
          <EduviCoursesDetailsHeader className="flex flex-col h-[74px] md:h-auto items-center justify-between px-20 md:px-5 py-[22px] w-full" />
          <div className="flex items-start justify-start md:px-10 px-20 sm:px-5 w-full">
            <div className="bg-gray_200 flex items-start justify-start max-w-7xl mx-auto md:px-5 px-[30px] py-[25px] rounded-[20px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                  <Text
                    className="font-medium text-black_900 text-left tracking-[0.48px] w-auto"
                    variant="body4"
                  >
                    Home | Courses | Course Details
                  </Text>
                  <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                    <div className="h-[455px] relative w-full">
                      <Img
                        src="images/img_pexelsvanessagarcia6325959.png"
                        className="h-[455px] m-auto object-cover rounded-[20px] w-full"
                        alt="pexelsvanessaga"
                      />
                      <Button className="absolute bg-red_300 flex h-[60px] inset-[0] items-center justify-center m-auto rounded-[50%] w-[60px]">
                        <Img
                          src="images/img_play.svg"
                          className="h-4"
                          alt="play"
                        />
                      </Button>
                    </div>
                    <Text
                      className="text-black_900 text-left w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Maths - for Standard 3 Students | Episode 2
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col gap-[15px] h-[545px] md:h-auto items-start justify-between w-[382px] sm:w-full">
                  <Text
                    className="text-black_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Course Playlists
                  </Text>
                  <div className="flex items-start justify-start w-full">
                    <List
                      className="flex-col gap-4 grid items-start w-full"
                      orientation="vertical"
                    >
                      <div className="bg-white_A700 hover:cursor-pointer flex flex-1 items-start justify-start hover:my-0 my-0 p-2.5 rounded-[10px] hover:shadow-bs w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-start self-stretch w-auto">
                          <Img
                            src="images/img_image.png"
                            className="h-[50px] md:h-auto object-cover rounded-[5px] w-20"
                            alt="image"
                          />
                          <div className="flex flex-col gap-[3px] items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-semibold text-black_900 text-left w-auto"
                              variant="body3"
                            >
                              Maths - Introduction
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-auto"
                              variant="body5"
                            >
                              1:57
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 hover:cursor-pointer flex flex-1 items-start justify-start hover:my-0 my-0 p-2.5 rounded-[10px] hover:shadow-bs shadow-bs w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-start self-stretch w-auto">
                          <Img
                            src="images/img_image.png"
                            className="h-[50px] md:h-auto object-cover rounded-[5px] w-20"
                            alt="image"
                          />
                          <div className="flex flex-col gap-[3px] items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-semibold text-black_900 text-left w-auto"
                              variant="body3"
                            >
                              Maths - for Standard 3 St..
                            </Text>
                            <Text
                              className="text-deep_orange_400 text-left w-auto"
                              variant="body5"
                            >
                              5:43
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 hover:cursor-pointer flex flex-1 items-start justify-start hover:my-0 my-0 p-2.5 rounded-[10px] hover:shadow-bs w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-start self-stretch w-auto">
                          <div className="h-[50px] relative w-20">
                            <Img
                              src="images/img_image_50x80.png"
                              className="h-[50px] m-auto object-cover rounded-[5px] w-20 sm:w-full"
                              alt="image"
                            />
                            <div className="absolute bg-white_A700 flex h-max inset-[0] items-center justify-center m-auto p-1 rounded-[50%] w-[18px]">
                              <Img
                                src="images/img_lock.svg"
                                className="h-2.5 w-2.5"
                                alt="lock"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-[3px] items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-semibold text-black_900_87 text-left w-auto"
                              variant="body3"
                            >
                              Maths - for Standard 3 St..
                            </Text>
                            <Text
                              className="text-deep_orange_400_87 text-left w-auto"
                              variant="body5"
                            >
                              8:11
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="hover:cursor-pointer flex flex-1 items-center justify-start hover:my-0 my-0 hover:shadow-bs w-full">
                        <div className="bg-white_A700_87 flex items-start justify-start p-2.5 rounded-[10px] w-[382px] sm:w-full">
                          <div className="flex flex-row gap-2.5 items-center justify-start self-stretch w-auto">
                            <div className="h-[50px] relative w-20">
                              <Img
                                src="images/img_image_50x80.png"
                                className="h-[50px] m-auto object-cover rounded-[5px] w-20 sm:w-full"
                                alt="image"
                              />
                              <div className="absolute bg-white_A700 flex h-max inset-[0] items-center justify-center m-auto p-1 rounded-[50%] w-[18px]">
                                <Img
                                  src="images/img_lock.svg"
                                  className="h-2.5 w-2.5"
                                  alt="lock"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[3px] items-start justify-start self-stretch w-auto">
                              <Text
                                className="font-semibold text-black_900_87 text-left w-auto"
                                variant="body3"
                              >
                                Maths - for Standard 3 St..
                              </Text>
                              <Text
                                className="text-deep_orange_400_87 text-left w-auto"
                                variant="body5"
                              >
                                6:10
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hover:cursor-pointer flex flex-1 items-center justify-start hover:my-0 my-0 hover:shadow-bs w-full">
                        <div className="bg-white_A700_87 flex items-start justify-start p-2.5 rounded-[10px] w-[382px] sm:w-full">
                          <div className="flex flex-row gap-2.5 items-center justify-start self-stretch w-auto">
                            <div className="h-[50px] relative w-20">
                              <Img
                                src="images/img_image_50x80.png"
                                className="h-[50px] m-auto object-cover rounded-[5px] w-20 sm:w-full"
                                alt="image"
                              />
                              <div className="absolute bg-white_A700 flex h-max inset-[0] items-center justify-center m-auto p-1 rounded-[50%] w-[18px]">
                                <Img
                                  src="images/img_lock.svg"
                                  className="h-2.5 w-2.5"
                                  alt="lock"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[3px] items-start justify-start self-stretch w-auto">
                              <Text
                                className="font-semibold text-black_900_87 text-left w-auto"
                                variant="body3"
                              >
                                Maths - for Standard 3 St..
                              </Text>
                              <Text
                                className="text-deep_orange_400_87 text-left w-auto"
                                variant="body5"
                              >
                                10:00
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hover:cursor-pointer flex flex-1 items-center justify-start hover:my-0 my-0 hover:shadow-bs w-full">
                        <div className="bg-white_A700_87 flex items-start justify-start p-2.5 rounded-[10px] w-[382px] sm:w-full">
                          <div className="flex flex-row gap-2.5 items-center justify-start self-stretch w-auto">
                            <div className="h-[50px] relative w-20">
                              <Img
                                src="images/img_image_50x80.png"
                                className="h-[50px] m-auto object-cover rounded-[5px] w-20 sm:w-full"
                                alt="image"
                              />
                              <div className="absolute bg-white_A700 flex h-max inset-[0] items-center justify-center m-auto p-1 rounded-[50%] w-[18px]">
                                <Img
                                  src="images/img_lock.svg"
                                  className="h-2.5 w-2.5"
                                  alt="lock"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[3px] items-start justify-start self-stretch w-auto">
                              <Text
                                className="font-semibold text-black_900_87 text-left w-auto"
                                variant="body3"
                              >
                                Maths - for Standard 3 St..
                              </Text>
                              <Text
                                className="text-deep_orange_400_87 text-left w-auto"
                                variant="body5"
                              >
                                7:53
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start md:px-10 px-20 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-10 items-start justify-start max-w-7xl mx-auto w-full">
            <div className="flex flex-1 flex-col gap-[25px] items-start justify-start max-w-[840px] w-full">
              <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                <Text
                  className="font-semibold text-black_900 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Course Details
                </Text>
                <Text
                  className="font-normal leading-[30.00px] not-italic text-gray_700 text-left"
                  variant="body4"
                >
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                <Text
                  className="font-semibold text-black_900 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Certification
                </Text>
                <Text
                  className="font-normal leading-[30.00px] max-w-[840px] md:max-w-full not-italic text-gray_700 text-left"
                  variant="body4"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </Text>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                <Text
                  className="font-semibold text-black_900 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Who this course is for
                </Text>
                <Text
                  className="font-normal leading-[30.00px] max-w-[840px] md:max-w-full not-italic text-gray_700 text-left"
                  variant="body4"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </Text>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                <Text
                  className="font-semibold text-black_900 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  <>What you&#39;ll learn in this course:</>
                </Text>
                <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                  <div className="bg-deep_orange_400 h-2.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-auto"
                    variant="body4"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                  <div className="bg-deep_orange_400 h-2.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-auto"
                    variant="body4"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                  <div className="bg-deep_orange_400 h-2.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-auto"
                    variant="body4"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                  <div className="bg-deep_orange_400 h-2.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-auto"
                    variant="body4"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                  <div className="bg-deep_orange_400 h-2.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-auto"
                    variant="body4"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[23px] items-start justify-start w-full">
              <div className="bg-white_A700 flex flex-col gap-[21px] items-start justify-start px-5 py-[26px] rounded-[10px] w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="font-semibold text-gray_700 text-left w-auto"
                    variant="body2"
                  >
                    Price
                  </Text>
                  <Text
                    className="text-deep_orange_400 text-right w-auto"
                    as="h6"
                    variant="h6"
                  >
                    $49.00
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="font-semibold text-gray_700 text-left w-auto"
                    variant="body2"
                  >
                    Instructor
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-right underline w-auto"
                    variant="body2"
                  >
                    Wade Warren
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="font-semibold text-gray_700 text-left w-auto"
                    variant="body2"
                  >
                    Ratings
                  </Text>
                  <Img
                    src="images/img_mobile.svg"
                    className="h-4 w-[92px]"
                    alt="mobile"
                  />
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="font-semibold text-gray_700 text-left w-auto"
                    variant="body2"
                  >
                    Durations
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-right w-auto"
                    variant="body2"
                  >
                    10 Days
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="font-semibold text-gray_700 text-left w-auto"
                    variant="body2"
                  >
                    Lessons
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-right w-auto"
                    variant="body2"
                  >
                    30
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="font-semibold text-gray_700 text-left w-auto"
                    variant="body2"
                  >
                    Quizzes
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-right w-auto"
                    variant="body2"
                  >
                    5
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="font-semibold text-gray_700 text-left w-auto"
                    variant="body2"
                  >
                    Certificate
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-right w-auto"
                    variant="body2"
                  >
                    Yes
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="font-semibold text-gray_700 text-left w-auto"
                    variant="body2"
                  >
                    Language
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-right w-auto"
                    variant="body2"
                  >
                    English
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="font-semibold text-gray_700 text-left w-auto"
                    variant="body2"
                  >
                    Access
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-right w-auto"
                    variant="body2"
                  >
                    Lifetime
                  </Text>
                </div>
              </div>
              <Button
                className="common-pointer bg-red_300 cursor-pointer font-medium md:px-10 sm:px-5 px-[126px] py-5 rounded-[5px] text-center text-lg text-white_A700 w-full"
                onClick={() => navigate("/eduvicoursespricing")}
              >
                Purchase Course
              </Button>
            </div>
          </div>
        </div>
        <div className="flex font-metropolis items-start justify-start md:px-10 px-20 sm:px-5 w-full">
          <div className="flex flex-col gap-10 items-start justify-start max-w-7xl mx-auto w-full">
            <Text
              className="font-bold text-gray_900 text-left w-auto"
              as="h2"
              variant="h2"
            >
              Similar Courses
            </Text>
            <div className="flex font-inter items-start justify-start w-full">
              <div className="gap-10 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
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

export default EduviCoursesDetailsPage;
