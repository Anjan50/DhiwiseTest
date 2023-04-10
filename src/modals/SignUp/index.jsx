import React from "react";
import ModalProvider from "react-modal";

import {
  Slider,
  Img,
  Text,
  Line,
  Button,
  Input,
  CheckBox,
  PagerIndicator,
} from "components";
import { useNavigate } from "react-router-dom";

const SignUpModal = (props) => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-auto !w-[74%]"
        overlayClassName="bg-black_900_b2 fixed flex h-full inset-y-[0] w-full"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
          <div className="h-[799px] max-w-[1052px] mx-auto md:px-5 relative w-full">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="m-auto w-full"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="bg-white_A700 flex items-start justify-start mx-2.5 p-[71px] md:px-10 sm:px-5 rounded-[15px] self-stretch">
                    <div className="flex items-start justify-start p-2 self-stretch w-auto md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 gap-[84px] items-center justify-start self-stretch w-auto md:w-full">
                        <div className="flex items-center justify-start self-stretch w-auto">
                          <div className="flex flex-col gap-[25px] items-start justify-start self-stretch w-auto">
                            <Img
                              src="images/img_logo.svg"
                              className="h-[22px] w-[132px]"
                              alt="frame7624"
                            />
                            <Text
                              className="leading-[50.00px] text-black_900 text-left"
                              as="h3"
                              variant="h3"
                            >
                              <>
                                Welcome to
                                <br />
                                Educatsy Online
                                <br />
                                Learning Platform
                              </>
                            </Text>
                            <Img
                              src="images/img_57907191.svg"
                              className="h-[336px] w-[332px]"
                              alt="57907191"
                            />
                          </div>
                        </div>
                        <Line className="bg-gradient  h-[641px] md:h-px md:w-full w-px" />
                        <div className="flex flex-col font-inter gap-6 items-center justify-start self-stretch w-auto">
                          <div className="flex flex-col gap-5 items-center justify-start self-stretch w-auto">
                            <Button
                              className="bg-white_A700 border border-gray_300 border-solid cursor-pointer flex items-center justify-center min-w-[331px] px-[66px] py-[5px] rounded-[10px] w-auto"
                              leftIcon={
                                <Img
                                  src="images/img_google.svg"
                                  className="mr-[23px]"
                                  alt="google"
                                />
                              }
                            >
                              <div className="font-normal md:px-10 not-italic sm:px-5 text-base text-center text-gray_700">
                                Sign in with google
                              </div>
                            </Button>
                            <div className="flex flex-row gap-[11px] items-center justify-start self-stretch w-auto">
                              <div className="bg-gray_700 h-px w-[8%]"></div>
                              <Text
                                className="font-normal not-italic text-center text-gray_700 w-auto"
                                variant="body4"
                              >
                                Or sign in with your email
                              </Text>
                              <div className="bg-gray_700 h-px w-[8%]"></div>
                            </div>
                            <div className="flex flex-col gap-[30px] items-start justify-start self-stretch w-auto">
                              <div className="flex flex-col gap-5 items-start justify-start self-stretch w-auto">
                                <div className="flex flex-col gap-[5px] items-start justify-start self-stretch w-auto">
                                  <Text
                                    className="font-medium text-gray_900 text-left w-auto"
                                    variant="body4"
                                  >
                                    Full name
                                  </Text>
                                  <div className="flex items-center justify-start w-full">
                                    <div className="bg-white_A700 border border-gray_300 border-solid flex items-start justify-start px-[18px] py-2.5 rounded-[10px] w-[370px] sm:w-full">
                                      <Input
                                        wrapClassName="flex w-[36%]"
                                        className="font-normal not-italic p-0 placeholder:text-gray_700 text-base text-gray_700 text-left w-full"
                                        name="frame7856"
                                        placeholder="Enter name"
                                        prefix={
                                          <Img
                                            src="images/img_user_gray_700.svg"
                                            className="mr-[15px] my-px"
                                            alt="user"
                                          />
                                        }
                                      ></Input>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-[5px] items-start justify-start self-stretch w-auto">
                                  <Text
                                    className="font-medium text-gray_900 text-left w-auto"
                                    variant="body4"
                                  >
                                    Email
                                  </Text>
                                  <div className="flex items-center justify-start w-full">
                                    <Input
                                      wrapClassName="bg-white_A700 border border-gray_300 border-solid flex px-[18px] py-2.5 rounded-[10px] w-full"
                                      className="font-normal not-italic p-0 placeholder:text-gray_700 text-base text-gray_700 text-left w-full"
                                      name="frame7857"
                                      placeholder="user@example.com"
                                      prefix={
                                        <Img
                                          src="images/img_message_24_outline.svg"
                                          className="mt-auto mb-0.5 mr-[15px]"
                                          alt="message / 24 / Outline"
                                        />
                                      }
                                    ></Input>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-[5px] items-start justify-start self-stretch w-auto">
                                  <Text
                                    className="font-medium text-gray_900 text-left w-auto"
                                    variant="body4"
                                  >
                                    Password
                                  </Text>
                                  <Input
                                    wrapClassName="bg-white_A700 border border-gray_300 border-solid flex px-[18px] py-4 rounded-[10px] w-full"
                                    className="font-normal not-italic p-0 placeholder:text-gray_700 text-base text-gray_700 text-left w-full"
                                    name="frame7860"
                                    placeholder="*************"
                                    prefix={
                                      <Img
                                        src="images/img_lock_gray_700.svg"
                                        className="mr-[15px] my-px"
                                        alt="lock"
                                      />
                                    }
                                    suffix={
                                      <Img
                                        src="images/img_eye.svg"
                                        className="ml-[35px] my-px"
                                        alt="eye"
                                      />
                                    }
                                  ></Input>
                                </div>
                              </div>
                              <Button
                                className="common-pointer bg-red_300 cursor-pointer font-medium min-w-[368px] md:px-10 sm:px-5 px-[158px] py-2.5 rounded-[10px] text-base text-center text-white_A700 w-auto"
                                onClick={() => navigate("/home1")}
                              >
                                Sign In
                              </Button>
                            </div>
                          </div>
                          <CheckBox
                            className="font-medium text-base text-gray_700 text-left"
                            inputClassName="mr-[5px]"
                            name="iagreedtothe"
                            id="iagreedtothe2"
                            label="I agreed to the Terms & Conditions"
                          ></CheckBox>
                          <div className="flex flex-row gap-1 items-start justify-start self-stretch w-auto">
                            <Text
                              className="font-medium text-gray_700 text-left w-auto"
                              variant="body4"
                            >
                              Don’t have an account?
                            </Text>
                            <Text
                              className="common-pointer font-medium text-left text-red_300 w-auto"
                              variant="body4"
                              onClick={() => navigate("/login")}
                            >
                              Sign in
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-[50%] h-2.5 border-red_300 border border-solid bg-white_A700 w-2.5 relative" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-[50%] h-2 bg-deep_orange_400_7f w-2 relative"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="absolute bottom-[13%] flex h-2.5 left-[23%] w-9"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 border-red_300 border border-solid bg-white_A700 w-2.5 relative"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-deep_orange_400_7f w-2 relative"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block mx-[2.50px]"
              unselectedWrapperCss="inline-block mx-[2.50px]"
            />
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default SignUpModal;
