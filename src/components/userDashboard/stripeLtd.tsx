import React, { useState } from "react";
import { Box, Button, Image, Input, Stack, Text } from "@chakra-ui/react";
import {
  BsArrowLeftCircle,
  BsCheck,
  BsPerson,
  BsArrowRightCircle,
} from "react-icons/bs";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { ImUser } from "react-icons/im";
import { useFormik } from "formik";

export const StripeLtd = () => {
  const [step, setStep] = useState(1);
  function handleNext() {
    setStep((prev) => prev + 1);
  }
  function handleBack() {
    setStep((prev) => prev - 1);
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      postalCode: "",
      phone: "",
      address: "",
      email: "",
      dob: "",
      iban: "",
      storeLink: "",
      city: "",
      whatsApp: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      handleNext();
    },
  });

  const stripeContent = (
    <section style={{ position: "relative" }}>
      <Box
        position="absolute"
        cursor="pointer"
        zIndex={100}
        top="58%"
        right="10%"
        onClick={handleNext}
      >
        <BsArrowRightCircle color="#0CA64C" fontSize="2rem" />
      </Box>
      <Stack display="grid" placeContent="center" position="relative" h="8rem">
        <Box
          position="relative"
          display="grid"
          placeContent="center"
          // bg="green.200"
          // w="fit-content"
          w="283px"
          h="98px"
          alignSelf="center"
        >
          <Image
            src="/stripeLogo.png"
            rounded="10px"
            borderRadius="10px"
            w="full"
            h="full"
          />
        </Box>
      </Stack>
      <Stack
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          w="full"
          maxWidth="398px"
          h="full"
          maxH="224px"
          rounded="15px"
          display="flex"
          direction="column"
          alignItems="center"
          justify="center"
          bg="black.0"
          cursor="pointer"
        >
          <iframe
            style={{ borderRadius: "10px" }}
            src="https://fast.wistia.net/embed/iframe/wii6w7ge4t"
            title=" [Example Video] Wistia Video Essentials"
            allow="autoplay; fullscreen"
            scrolling="no"
            // width="100%"
            // height="100%"
            width="397px"
            height="224px"
          ></iframe>
        </Stack>
      </Stack>
      <Stack
        position="relative"
        display="flex"
        direction="column"
        alignItems="center"
        gap="2"
        pt={12}
      >
        <Stack
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="0"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Box bg="#0CA64C" rounded="50%">
              <BsCheck color="#fff" fontSize="1.5rem" />
            </Box>
            <Text fontWeight="400" fontSize="1rem">
              Register UK ltd company for non residents
            </Text>
          </Box>
          <Box w="30rem" pl={8}>
            <Text
              fontWeight="400"
              fontSize="0.95rem"
              color="#BDBDBD"
              lineHeight="18px"
            >
              We'll worry about the transactions and payment. You can sit back
              and relax while you make your clients happy.
            </Text>
          </Box>
        </Stack>
        <Stack
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="1"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Box bg="#0CA64C" rounded="50%">
              <BsCheck color="#fff" fontSize="1.5rem" />
            </Box>
            <Text fontWeight="400" fontSize="1rem">
              Recording Stripe with ltd
            </Text>
          </Box>
          <Box w="30rem" pl={8}>
            <Text
              fontWeight="400"
              fontSize="0.95rem"
              color="#BDBDBD"
              lineHeight="18px"
            >
              We'll worry about the transactions and payment. You can sit back
              and relax while you make your clients happy.
            </Text>
          </Box>
        </Stack>
        <Stack
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="1"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Box bg="#0CA64C" rounded="50%">
              <BsCheck color="#fff" fontSize="1.5rem" />
            </Box>
            <Text fontWeight="400" fontSize="1rem">
              How much card
            </Text>
          </Box>
          <Box w="30rem" pl={8}>
            <Text
              fontWeight="400"
              fontSize="0.95rem"
              color="#BDBDBD"
              lineHeight="18px"
            >
              We'll worry about the transactions and payment. You can sit back
              and relax while you make your clients happy.
            </Text>
          </Box>
        </Stack>
      </Stack>
    </section>
  );

  const ukLtdContent = (
    <section style={{ position: "relative" }}>
      <Box
        position="absolute"
        cursor="pointer"
        zIndex={100}
        top="50%"
        left="10%"
        onClick={handleBack}
      >
        <BsArrowLeftCircle color="#0CA64C" fontSize="2rem" />
      </Box>
      <Stack display="grid" placeContent="center" position="relative" h="8rem">
        <Stack
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          position="relative"
          w="11rem"
        >
          <Box
            position="relative"
            display="grid"
            placeContent="center"
            // w="fit-content"
            w="64px"
            h="64px"
            alignSelf="center"
          >
            <Image
              src="/ukImage.png"
              rounded="10px"
              borderRadius="10px"
              w="full"
              h="full"
            />
          </Box>
          <Text fontWeight="400" lineHeight="165%" fontSize="2rem">
            UK ltd
          </Text>
        </Stack>
      </Stack>
      <Stack
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          w="full"
          h="full"
          maxWidth="397px"
          maxH="224px"
          rounded="15px"
          display="flex"
          direction="column"
          alignItems="center"
          justify="center"
          bg="black.0"
          cursor="pointer"
        >
          <iframe
            style={{ borderRadius: "10px" }}
            src="https://fast.wistia.net/embed/iframe/wii6w7ge4t"
            title=" [Example Video] Wistia Video Essentials"
            allow="autoplay; fullscreen"
            scrolling="no"
            // width="100%"
            // height="100%"
            width="397px"
            height="224px"
          ></iframe>
        </Stack>
      </Stack>
      <Stack
        position="relative"
        display="flex"
        direction="column"
        alignItems="center"
        gap="2"
        pt={12}
      >
        <Stack
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Box bg="#0CA64C" rounded="50%">
              <BsCheck color="#fff" fontSize="1.5rem" />
            </Box>
            <Text fontWeight="400" fontSize="1rem">
              Register UK ltd company for non residents
            </Text>
          </Box>
          <Box w="30rem" pl={8}>
            <Text
              fontWeight="400"
              lineHeight="18px"
              fontSize="0.95rem"
              color="#BDBDBD"
            >
              We'll worry about the transactions and payment. You can sit back
              and relax while you make your clients happy.
            </Text>
          </Box>
        </Stack>
        <Stack
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="1"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Box bg="#0CA64C" rounded="50%">
              <BsCheck color="#fff" fontSize="1.5rem" />
            </Box>
            <Text fontWeight="400" fontSize="1rem">
              Recording Stripe with ltd
            </Text>
          </Box>
          <Box w="30rem" pl={8}>
            <Text
              fontWeight="400"
              fontSize="0.95rem"
              color="#BDBDBD"
              lineHeight="18px"
            >
              We'll worry about the transactions and payment. You can sit back
              and relax while you make your clients happy.
            </Text>
          </Box>
        </Stack>
        <Stack
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="1"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Box bg="#0CA64C" rounded="50%">
              <BsCheck color="#fff" fontSize="1.5rem" />
            </Box>
            <Text fontWeight="400" fontSize="1rem">
              How much card
            </Text>
          </Box>
          <Box w="30rem" pl={8}>
            <Text
              fontWeight="400"
              fontSize="0.95rem"
              color="#BDBDBD"
              lineHeight="18px"
            >
              We'll worry about the transactions and payment. You can sit back
              and relax while you make your clients happy.
            </Text>
          </Box>
        </Stack>
        <Box>
          <Button bg="#0CA64C" w="250px" h="41px" onClick={handleNext}>
            Purchase | $ 10.70
          </Button>
        </Box>
      </Stack>
    </section>
  );

  const formContent = (
    <Stack
      display="flex"
      direction="column"
      h="full"
      alignItems="center"
      px={10}
    >
      <Stack display="grid" placeContent="center" position="relative" h="8rem">
        <Box
          position="relative"
          display="grid"
          placeContent="center"
          // bg="green.200"
          // w="fit-content"
          w="283px"
          h="98px"
          alignSelf="center"
        >
          <Image
            src="/stripeLtd.png"
            rounded="10px"
            borderRadius="10px"
            w="full"
            h="full"
          />
        </Box>
      </Stack>
      <Stack w="full" display="flex" direction="column" gap={4}>
        <form onSubmit={formik.handleSubmit}>
          <Stack
            w="full"
            display="flex"
            direction="column"
            alignItems="center"
            gap={4}
          >
            <Stack
              w="full"
              display="flex"
              direction="row"
              alignItems="center"
              gap={2}
            >
              <Box w="full" position="relative">
                <Input
                  rounded="15px"
                  id="firstName"
                  name="firstName"
                  placeholder={"First Name"}
                  _placeholder={{ color: "#EAEAEA" }}
                  type={"text"}
                  bg="#FFFFFF0F"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  px={10}
                  border={{ start: "2px solid  #FFFFFF2F", md: "none" }}
                />
                <Box position="absolute" left={4} top="5">
                  <BsPerson fontSize="1.25rem" />
                </Box>
              </Box>

              <Box w="full" position="relative">
                <Input
                  rounded="15px"
                  id="postalCode"
                  name="postalCode"
                  placeholder={"Code Postal"}
                  _placeholder={{ color: "#EAEAEA" }}
                  type={"text"}
                  bg="#FFFFFF0F"
                  onChange={formik.handleChange}
                  value={formik.values.postalCode}
                  px={10}
                  border={{ start: "2px solid  #FFFFFF2F", md: "none" }}
                />
                <Box position="absolute" left={4} top="5">
                  <BsPerson fontSize="1.25rem" />
                </Box>
              </Box>
            </Stack>

            <Stack
              w="full"
              display="flex"
              direction="row"
              alignItems="center"
              gap={2}
            >
              <Box w="full" position="relative">
                <Input
                  rounded="15px"
                  id="phone"
                  name="phone"
                  placeholder={"Phone Number"}
                  _placeholder={{ color: "#EAEAEA" }}
                  type={"text"}
                  bg="#FFFFFF0F"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  px={10}
                  border={{ start: "2px solid  #FFFFFF2F", md: "none" }}
                />
                <Box position="absolute" left={4} top="5">
                  <BsPerson fontSize="1.25rem" />
                </Box>
              </Box>

              <Box w="full" position="relative">
                <Input
                  rounded="15px"
                  id="address"
                  name="address"
                  placeholder={"Address"}
                  _placeholder={{ color: "#EAEAEA" }}
                  type={"text"}
                  bg="#FFFFFF0F"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  px={10}
                  border={{ start: "2px solid  #FFFFFF2F", md: "none" }}
                />
                <Box position="absolute" left={4} top="5">
                  <BsPerson fontSize="1.25rem" />
                </Box>
              </Box>
            </Stack>

            <Stack
              w="full"
              display="flex"
              direction="row"
              alignItems="center"
              gap={2}
            >
              <Box w="full" position="relative">
                <Input
                  rounded="15px"
                  id="dob"
                  name="dob"
                  placeholder={"date of birth"}
                  _placeholder={{ color: "#EAEAEA" }}
                  type={"date"}
                  bg="#FFFFFF0F"
                  onChange={formik.handleChange}
                  value={formik.values.dob}
                  px={10}
                  border={{ start: "2px solid  #FFFFFF2F", md: "none" }}
                />
                <Box position="absolute" left={4} top="5">
                  <BsPerson fontSize="1.25rem" />
                </Box>
              </Box>

              <Box w="full" position="relative">
                <Input
                  rounded="15px"
                  id="email"
                  name="email"
                  placeholder={"Email"}
                  _placeholder={{ color: "#EAEAEA" }}
                  type={"email"}
                  bg="#FFFFFF0F"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  px={10}
                  border={{ start: "2px solid  #FFFFFF2F", md: "none" }}
                />
                <Box position="absolute" left={4} top="5">
                  <BsPerson fontSize="1.25rem" />
                </Box>
              </Box>
            </Stack>

            <Stack
              w="full"
              display="flex"
              direction="row"
              alignItems="center"
              gap={2}
            >
              <Box w="full" position="relative">
                <Input
                  rounded="15px"
                  id="postalCode"
                  name="postalCode"
                  placeholder={"Code Postal"}
                  _placeholder={{ color: "#EAEAEA" }}
                  type={"text"}
                  bg="#FFFFFF0F"
                  onChange={formik.handleChange}
                  value={formik.values.postalCode}
                  px={10}
                  border={{ start: "2px solid  #FFFFFF2F", md: "none" }}
                />
                <Box position="absolute" left={4} top="5">
                  <BsPerson fontSize="1.25rem" />
                </Box>
              </Box>

              <Box w="full" position="relative">
                <Input
                  rounded="15px"
                  id="iban"
                  name="iban"
                  placeholder={"Iban"}
                  _placeholder={{ color: "#EAEAEA" }}
                  type={"text"}
                  bg="#FFFFFF0F"
                  onChange={formik.handleChange}
                  value={formik.values.iban}
                  px={10}
                  border={{ start: "2px solid  #FFFFFF2F", md: "none" }}
                />
                <Box position="absolute" left={4} top="5">
                  <BsPerson fontSize="1.25rem" />
                </Box>
              </Box>
            </Stack>

            <Stack
              w="full"
              display="flex"
              direction="row"
              alignItems="center"
              gap={2}
            >
              <Box w="full" position="relative">
                <Input
                  rounded="15px"
                  id="city"
                  name="city"
                  placeholder={"City"}
                  _placeholder={{ color: "#EAEAEA" }}
                  type={"text"}
                  bg="#FFFFFF0F"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  px={10}
                  border={{ start: "2px solid  #FFFFFF2F", md: "none" }}
                />
                <Box position="absolute" left={4} top="5">
                  <BsPerson fontSize="1.25rem" />
                </Box>
              </Box>

              <Box w="full" position="relative">
                <Input
                  rounded="15px"
                  id="storeLink"
                  name="storeLink"
                  placeholder={"Store Link"}
                  _placeholder={{ color: "#EAEAEA" }}
                  type={"text"}
                  bg="#FFFFFF0F"
                  onChange={formik.handleChange}
                  value={formik.values.storeLink}
                  px={10}
                  border={{ start: "2px solid  #FFFFFF2F", md: "none" }}
                />
                <Box position="absolute" left={4} top="5">
                  <BsPerson fontSize="1.25rem" />
                </Box>
              </Box>
            </Stack>

            <Stack
              display="flex"
              direction="row"
              alignItems="center"
              width="50%"
            >
              <Box w="full" position="relative">
                <Input
                  rounded="15px"
                  id="whatsApp"
                  name="whatsApp"
                  placeholder={"WhatsApp Number"}
                  _placeholder={{ color: "#EAEAEA" }}
                  type={"text"}
                  bg="#FFFFFF0F"
                  onChange={formik.handleChange}
                  value={formik.values.whatsApp}
                  px={10}
                  border={{ start: "2px solid  #FFFFFF2F", md: "none" }}
                />
                <Box position="absolute" left={4} top="5">
                  <BsPerson fontSize="1.25rem" />
                </Box>
              </Box>
            </Stack>

            <Box>
              <Button bg="#0CA64C" type="submit" w="250px">
                submit & Purchase
              </Button>
            </Box>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );

  const successMessage = (
    <Stack display="flex" alignItems="center" h="full">
      <Stack
        display="grid"
        placeContent="center"
        position="relative"
        pb={8}
        mt="10"
      >
        <Box
          position="relative"
          display="grid"
          placeContent="center"
          w="fit-content"
          alignSelf="center"
        >
          <Image
            src="/wiseCard1.png"
            rounded="10px"
            borderRadius="10px"
            w="160px"
            h="130px"
            maxH="10rem"
          />
        </Box>
      </Stack>
      <Stack
        position="relative"
        w="23rem"
        h="20rem"
        bg="#0CA64C"
        rounded="1.5rem"
        display="flex"
        alignItems="center"
      >
        <Box mt={2}>
          <AiFillCheckCircle fontSize="4rem" color="black" />
        </Box>
        <Box position="absolute" top={-16} right="-5" w="64px" h="64px">
          <Text fontSize="4rem">🎉</Text>
        </Box>
        <Box px={8}>
          <Text fontSize="1.5rem" fontWeight="400" fontStyle="normal">
            Thank you for your order
          </Text>
          <Text pt={8} fontSize="13px" fontWeight="600" fontStyle="normal">
            After 2 days / 3 days, check your email, we will contact you to
            complete the card procedures
          </Text>
        </Box>
        <Box position="relative" h="fit-content" bottom={-3}>
          <Image
            src="/building.png"
            rounded="10px"
            borderRadius="10px"
            w="145px"
            h="151px"
          />
        </Box>
      </Stack>
      <Box position="relative" w="fit-content" top={10}>
        <div className="steps_wrapper">
          <ol className="c-stepper">
            <li className="stepper__item">
              <span className="stepper__desc">
                <BsCheck color="#fff" fontSize="1.5rem" />
              </span>
              <p className="stepper__title">Ordered</p>
            </li>
            <li className="stepper__item">
              <span className="stepper__desc">
                <BsCheck color="#fff" fontSize="1.5rem" />
              </span>
              <p className="stepper__title">Info Process</p>
            </li>
            <li className="stepper__item">
              <span className="stepper__desc">
                <Image
                  src="/timerIcon.png"
                  rounded="10px"
                  borderRadius="10px"
                  w="1rem"
                  h="1rem"
                  maxH="10rem"
                />
              </span>
              <p className="stepper__title">Processing</p>
            </li>
            <li className="stepper__item">
              <span className="stepper__desc">
                {/* <BsCheck color="#fff" fontSize="1.5rem" /> */}
                <Image
                  src="/timerIcon.png"
                  rounded="10px"
                  borderRadius="10px"
                  w="1rem"
                  h="1rem"
                  maxH="10rem"
                />
              </span>
              <p className="stepper__title">Created</p>
            </li>
          </ol>
          <div className="_vl" />
          <div
            className="vl"
            style={
              step === 3
                ? { width: "65%", transition: "all 0.6s" }
                : step === 4
                ? { width: "80%", transition: "all 0.6s" }
                : { width: "0%", transition: "all 0.6s" }
            }
          />
        </div>
      </Box>
    </Stack>
  );
  return (
    <Stack
      mt="4"
      display={"flex"}
      w="70rem"
      // w="full"
      // h="full"
      h="46rem"
      rounded="15px"
      bg="black.0"
    >
      {step === 1
        ? stripeContent
        : step === 2
        ? ukLtdContent
        : step === 3
        ? formContent
        : step === 4
        ? successMessage
        : null}
    </Stack>
  );
};
