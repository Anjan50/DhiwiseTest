import React from "react";

import EduviCoursesDetailsHeader from "components/EduviCoursesDetailsHeader";
import { Text, Img, List, Button, Input, SelectBox } from "components";
import { CloseSVG } from "../../assets/images";
import EduviCoursesDetailsFooterlogoOne from "components/EduviCoursesDetailsFooterlogoOne";

const EduviShopPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

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
                  Home | Shop
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="font-semibold leading-[50.00px] text-gray_900 text-left"
                    as="h2"
                    variant="h2"
                  >
                    <>
                      Educatsy Online
                      <br />
                      Book Shop
                    </>
                  </Text>
                  <Img
                    src="images/img_kisspngbookcas.png"
                    className="md:flex-1 h-[210px] sm:h-auto object-cover w-[374px] md:w-full"
                    alt="kisspngbookcas"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-10 items-start justify-center md:px-10 px-20 sm:px-5 w-full">
          <List
            className="sm:flex-1 flex-col gap-10 grid items-start self-stretch w-auto sm:w-full"
            orientation="vertical"
          >
            <div className="flex flex-col gap-[17px] items-start justify-start my-0 w-[400px] sm:w-full">
              <Text
                className="font-semibold text-black_900 text-left w-auto"
                as="h4"
                variant="h4"
              >
                Popular Books
              </Text>
              <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                <div className="bg-white_A700 flex items-start justify-start sm:px-5 px-[25px] py-[22px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      src="images/img_image14.png"
                      className="h-[90px] md:h-auto max-h-[90px] object-cover rounded-[5px] w-auto"
                      alt="imageFourteen"
                    />
                    <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                      <Img
                        src="images/img_mobile.svg"
                        className="h-4 w-[92px]"
                        alt="mobile"
                      />
                      <Text
                        className="font-semibold leading-[20.00px] text-black_900 text-left"
                        variant="body3"
                      >
                        <>
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </>
                      </Text>
                      <Text
                        className="font-semibold text-left text-red_300 w-auto"
                        variant="body3"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex items-start justify-start sm:px-5 px-[25px] py-[22px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      src="images/img_image_90x75.png"
                      className="h-[90px] md:h-auto max-h-[90px] object-cover rounded-[5px] w-auto"
                      alt="image"
                    />
                    <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                      <Img
                        src="images/img_mobile.svg"
                        className="h-4 w-[92px]"
                        alt="mobile_One"
                      />
                      <Text
                        className="font-semibold leading-[20.00px] text-black_900 text-left"
                        variant="body3"
                      >
                        <>
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </>
                      </Text>
                      <Text
                        className="font-semibold text-left text-red_300 w-auto"
                        variant="body3"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex items-start justify-start sm:px-5 px-[25px] py-[22px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      src="images/img_image_4.png"
                      className="h-[90px] md:h-auto max-h-[90px] object-cover rounded-[5px] w-auto"
                      alt="image_One"
                    />
                    <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                      <Img
                        src="images/img_mobile.svg"
                        className="h-4 w-[92px]"
                        alt="mobile_Two"
                      />
                      <Text
                        className="font-semibold leading-[20.00px] text-black_900 text-left"
                        variant="body3"
                      >
                        <>
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </>
                      </Text>
                      <Text
                        className="font-semibold text-left text-red_300 w-auto"
                        variant="body3"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="font-medium text-left text-red_300 w-auto"
                variant="body2"
              >
                See More
              </Text>
            </div>
            <div className="flex flex-col gap-[17px] items-start justify-start my-0 w-[400px] sm:w-full">
              <Text
                className="font-semibold text-black_900 text-left w-auto"
                as="h4"
                variant="h4"
              >
                New Arrivals
              </Text>
              <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                <div className="bg-white_A700 flex items-start justify-start sm:px-5 px-[25px] py-[22px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      src="images/img_image14.png"
                      className="h-[90px] md:h-auto max-h-[90px] object-cover rounded-[5px] w-auto"
                      alt="imageFourteen"
                    />
                    <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                      <Img
                        src="images/img_mobile.svg"
                        className="h-4 w-[92px]"
                        alt="mobile"
                      />
                      <Text
                        className="font-semibold leading-[20.00px] text-black_900 text-left"
                        variant="body3"
                      >
                        <>
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </>
                      </Text>
                      <Text
                        className="font-semibold text-left text-red_300 w-auto"
                        variant="body3"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex items-start justify-start sm:px-5 px-[25px] py-[22px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      src="images/img_image_90x75.png"
                      className="h-[90px] md:h-auto max-h-[90px] object-cover rounded-[5px] w-auto"
                      alt="image"
                    />
                    <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                      <Img
                        src="images/img_mobile.svg"
                        className="h-4 w-[92px]"
                        alt="mobile_One"
                      />
                      <Text
                        className="font-semibold leading-[20.00px] text-black_900 text-left"
                        variant="body3"
                      >
                        <>
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </>
                      </Text>
                      <Text
                        className="font-semibold text-left text-red_300 w-auto"
                        variant="body3"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex items-start justify-start sm:px-5 px-[25px] py-[22px] rounded-[10px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      src="images/img_image_4.png"
                      className="h-[90px] md:h-auto max-h-[90px] object-cover rounded-[5px] w-auto"
                      alt="image_One"
                    />
                    <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                      <Img
                        src="images/img_mobile.svg"
                        className="h-4 w-[92px]"
                        alt="mobile_Two"
                      />
                      <Text
                        className="font-semibold leading-[20.00px] text-black_900 text-left"
                        variant="body3"
                      >
                        <>
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </>
                      </Text>
                      <Text
                        className="font-semibold text-left text-red_300 w-auto"
                        variant="body3"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="font-medium text-left text-red_300 w-auto"
                variant="body2"
              >
                See More
              </Text>
            </div>
          </List>
          <div className="flex flex-1 flex-col gap-10 items-center justify-start w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start w-full">
              <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
                <Button className="bg-orange_200 cursor-pointer flex-1 font-medium sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-center text-white_A700 w-full">
                  All Books
                </Button>
                <Button className="bg-white_A700 cursor-pointer flex-1 font-medium sm:px-5 px-[21px] py-5 rounded-[10px] text-base text-center text-gray_900 w-full">
                  Kindergarten
                </Button>
                <Button className="bg-white_A700 cursor-pointer flex-1 font-medium sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-center text-gray_900 w-full">
                  High School
                </Button>
                <Button className="bg-white_A700 cursor-pointer flex-1 font-medium sm:px-5 px-[30px] py-5 rounded-[10px] text-base text-center text-gray_900 w-full">
                  College
                </Button>
              </div>
              <div className="flex md:flex-col flex-row gap-[15px] items-start justify-start w-full">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  wrapClassName="bg-white_A700 flex md:flex-1 pl-5 pr-[7px] py-[7px] rounded-[10px] w-[555px] md:w-full"
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
                  className="bg-white_A700 md:flex-1 font-medium leading-[normal] px-[15px] py-[18px] rounded-[10px] text-base text-gray_700_99 text-left w-[33%] md:w-full"
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
              <div className="flex items-start justify-start w-full">
                <div className="md:gap-5 gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-white_A700 flex h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                      <Img
                        src="images/img_image_240x230.png"
                        className="md:h-auto h-full object-cover rounded-[10px] w-full"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left w-auto"
                        variant="body3"
                      >
                        The Three Musketeers
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="flex-1 font-semibold text-left text-red_300 w-auto"
                          variant="body3"
                        >
                          $40.00
                        </Text>
                        <Img
                          src="images/img_mobile.svg"
                          className="h-4 w-[92px]"
                          alt="mobile"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-white_A700 flex h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                      <Img
                        src="images/img_image_5.png"
                        className="md:h-auto h-full object-cover rounded-[10px] w-full"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left w-auto"
                        variant="body3"
                      >
                        The Three Musketeers
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="flex-1 font-semibold text-left text-red_300 w-auto"
                          variant="body3"
                        >
                          $40.00
                        </Text>
                        <Img
                          src="images/img_mobile.svg"
                          className="h-4 w-[92px]"
                          alt="mobile"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-white_A700 flex h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                      <Img
                        src="images/img_image_6.png"
                        className="md:h-auto h-full object-cover rounded-[10px] w-full"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left w-auto"
                        variant="body3"
                      >
                        The Three Musketeers
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="flex-1 font-semibold text-left text-red_300 w-auto"
                          variant="body3"
                        >
                          $40.00
                        </Text>
                        <Img
                          src="images/img_mobile.svg"
                          className="h-4 w-[92px]"
                          alt="mobile"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-white_A700 flex h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                      <Img
                        src="images/img_image_7.png"
                        className="md:h-auto h-full object-cover rounded-[10px] w-full"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left w-auto"
                        variant="body3"
                      >
                        The Three Musketeers
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="flex-1 font-semibold text-left text-red_300 w-auto"
                          variant="body3"
                        >
                          $40.00
                        </Text>
                        <Img
                          src="images/img_mobile.svg"
                          className="h-4 w-[92px]"
                          alt="mobile"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-white_A700 flex h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                      <Img
                        src="images/img_image_8.png"
                        className="md:h-auto h-full object-cover rounded-[10px] w-full"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left w-auto"
                        variant="body3"
                      >
                        The Three Musketeers
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="flex-1 font-semibold text-left text-red_300 w-auto"
                          variant="body3"
                        >
                          $40.00
                        </Text>
                        <Img
                          src="images/img_mobile.svg"
                          className="h-4 w-[92px]"
                          alt="mobile"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-white_A700 flex h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                      <Img
                        src="images/img_image_9.png"
                        className="md:h-auto h-full object-cover rounded-[10px] w-full"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left w-auto"
                        variant="body3"
                      >
                        The Three Musketeers
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="flex-1 font-semibold text-left text-red_300 w-auto"
                          variant="body3"
                        >
                          $40.00
                        </Text>
                        <Img
                          src="images/img_mobile.svg"
                          className="h-4 w-[92px]"
                          alt="mobile"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-white_A700 flex h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                      <Img
                        src="images/img_image_5.png"
                        className="md:h-auto h-full object-cover rounded-[10px] w-full"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left w-auto"
                        variant="body3"
                      >
                        The Three Musketeers
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="flex-1 font-semibold text-left text-red_300 w-auto"
                          variant="body3"
                        >
                          $40.00
                        </Text>
                        <Img
                          src="images/img_mobile.svg"
                          className="h-4 w-[92px]"
                          alt="mobile"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-white_A700 flex h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                      <Img
                        src="images/img_image_240x230.png"
                        className="md:h-auto h-full object-cover rounded-[10px] w-full"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left w-auto"
                        variant="body3"
                      >
                        The Three Musketeers
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="flex-1 font-semibold text-left text-red_300 w-auto"
                          variant="body3"
                        >
                          $40.00
                        </Text>
                        <Img
                          src="images/img_mobile.svg"
                          className="h-4 w-[92px]"
                          alt="mobile"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                    <div className="bg-white_A700 flex h-[280px] md:h-auto items-start justify-start p-5 rounded-[10px] w-full">
                      <Img
                        src="images/img_image_8.png"
                        className="md:h-auto h-full object-cover rounded-[10px] w-full"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="font-semibold text-gray_900 text-left w-auto"
                        variant="body3"
                      >
                        The Three Musketeers
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="flex-1 font-semibold text-left text-red_300 w-auto"
                          variant="body3"
                        >
                          $40.00
                        </Text>
                        <Img
                          src="images/img_mobile.svg"
                          className="h-4 w-[92px]"
                          alt="mobile"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[19px] items-center justify-start w-[286px]">
              <Button className="bg-white_A700 flex items-center justify-center p-2.5 rounded-md w-[15%]">
                <Img
                  src="images/img_arrowleft.svg"
                  className=""
                  alt="arrowleft"
                />
              </Button>
              <Text
                className="flex-1 font-medium text-gray_900 text-left w-auto"
                variant="body4"
              >
                Page
              </Text>
              <Button className="bg-white_A700 cursor-pointer font-medium leading-[normal] px-[15px] py-[9px] rounded-lg text-bluegray_800 text-center text-lg w-full">
                5
              </Button>
              <Text
                className="flex-1 font-medium text-gray_900 text-left w-auto"
                variant="body4"
              >
                of 80
              </Text>
              <Button className="bg-red_300 flex items-center justify-center p-2.5 rounded-md w-[15%]">
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

export default EduviShopPage;
