import { useEffect, useState } from "react";
import { Box, Button, Image, Input, Stack, Text } from "@chakra-ui/react";
import { BsCheck, BsPerson } from "react-icons/bs";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { ImUser } from "react-icons/im";
import { useFormik } from "formik";
export const Wiser = () => {
  const [step, setStep] = useState(1);
  function handleToggle() {
    setStep((prev) => prev + 1);
  }
  const formik = useFormik({
    initialValues: {
      firstName: "",
      phone: "",
      email: "",
      dob: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      handleToggle();
    },
  });
  const content = (
    <section>
      <Stack
        display="grid"
        placeContent="center"
        position="relative"
        h="12rem"
        pb={8}
      >
        <Box
          position="relative"
          display="grid"
          placeContent="center"
          // bg="green.200"
          w="fit-content"
          alignSelf="center"
        >
          <Image
            src="/ezgif.png"
            rounded="10px"
            borderRadius="10px"
            w="203px"
            h="165px"
            maxH="10rem"
          />
        </Box>
        <Box
          position="absolute"
          display="grid"
          placeContent="center"
          left="39%"
          w="15rem"
          bottom="-4"
          alignSelf="center"
        >
          <Image
            src="/wizer.png"
            rounded="10px"
            borderRadius="10px"
            w="150px"
            h="99px"
            maxH="10rem"
          />
        </Box>
      </Stack>
      <Stack
        position="relative"
        display="flex"
        direction="column"
        alignItems="center"
        gap="4"
      >
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
              Payment & Invoice
            </Text>
          </Box>
          <Box w="30rem" pl={8}>
            <Text fontWeight="400" fontSize="0.95rem" color="#BDBDBD">
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
              Discounts & Offers
            </Text>
          </Box>
          <Box w="30rem" pl={8}>
            <Text fontWeight="400" fontSize="0.95rem" color="#BDBDBD">
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
            <Text fontWeight="400" fontSize="0.95rem" color="#BDBDBD">
              We'll worry about the transactions and payment. You can sit back
              and relax while you make your clients happy.
            </Text>
          </Box>
        </Stack>
        <Stack display="flex" direction="row" pt="3" gap="1">
          <Stack
            // spacing={{ start: "5px", md: "20px" }}
            w="full"
            maxWidth="27.5rem"
            h="full"
            maxH="16.375rem"
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
              width="100%"
              height="100%"
            ></iframe>
          </Stack>
          <Stack
            display="flex"
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            w="full"
            py={3}
          >
            <Box display="flex" gap="4">
              <Image src="/card1.png" w="67px" h="41px" />
              <Image src="/card2.png" w="67px" h="41px" />
              <Image src="/card3.png" w="67px" h="41px" />
            </Box>
            <Box>
              <Button bg="#0CA64C" w="250px" onClick={handleToggle}>
                Purchase | $ 10.70
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </section>
  );

  const paymentContent = (
    <Stack
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="4"
      w="full"
      height="full"
    >
      <Stack
        position="relative"
        display="flex"
        direction="column"
        alignItems="center"
        gap="4"
        w="50%"
        h="90%"
        bg="blackAlpha.600"
        px="10"
        py="10"
        rounded="xl"
      >
        <Box
          position="absolute"
          left="4"
          top="4"
          cursor="pointer"
          onClick={() => setStep((prev) => prev - 1)}
        >
          <AiFillCloseCircle fontSize="1.5rem" />
        </Box>
        <Stack w="22rem" position="relative">
          <Text textColor="whiteAlpha.700" fontSize=".85rem">
            Account Cost
          </Text>
          <Text textColor="white" fontSize="1.25rem">
            12 $
          </Text>
        </Stack>
        <Stack
          position="relative"
          bg="#0049AC"
          w="22rem"
          h="190px"
          rounded="md"
          display="flex"
          px="5"
          pt="6"
        >
          <Text fontSize="1.5rem" fontWeight="bold">
            Market
          </Text>
          <Text fontSize="1.5rem" fontWeight="bold">
            Place Accounts
          </Text>
          <Text position="absolute" bottom={2} fontSize="1rem">
            v 1.0
          </Text>
        </Stack>
        <Stack w="22rem" position="relative">
          <Text textColor="whiteAlpha.800" fontSize="1.25rem">
            summary
          </Text>
        </Stack>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          w="22rem"
          borderBottom="1px"
          borderColor="whiteAlpha.300"
          position="relative"
          py="2"
        >
          <Text textColor="white" fontSize=".85rem">
            Item Subtotal :
          </Text>
          <Text textColor="white" fontSize=".85rem">
            12 $
          </Text>
        </Stack>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          w="22rem"
          borderBottom="1px"
          borderColor="whiteAlpha.300"
          position="relative"
          py="2"
        >
          <Text textColor="white" fontSize=".85rem">
            Tax :
          </Text>
          <Text textColor="white" fontSize=".85rem">
            0 $
          </Text>
        </Stack>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          w="22rem"
          borderBottom="1px"
          borderColor="whiteAlpha.300"
          position="relative"
          py="2"
        >
          <Text textColor="white" fontSize=".85rem">
            Order total :
          </Text>
          <Text textColor="white" fontSize=".85rem">
            12 $
          </Text>
        </Stack>
        <Stack
          w="22rem"
          h="6rem"
          bg="#6FCF97"
          display="flex"
          direction="row"
          alignItems="center"
          rounded="md"
          position="relative"
          px="5"
        >
          <Box
            bg="#000"
            w="3rem"
            h="3rem"
            display="grid"
            placeContent="center"
            rounded="md"
          >
            <ImUser color="#fff" fontSize="1.5rem" />
          </Box>
          <Box rounded="md" onClick={handleToggle} cursor="pointer">
            <Text textColor="white" fontSize="1rem">
              Purchase now
            </Text>
            <Text textColor="whiteAlpha.700" fontSize="1rem">
              you total account sold
            </Text>
            <Text textColor="whiteAlpha.700" fontSize=".95rem">
              0.99999999999994676798$
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );

  const formContent = (
    <Stack
      display="flex"
      direction="row"
      h="full"
      alignItems="center"
      px={10}
      justifyContent="space-between"
    >
      <Stack w="22rem">
        <Box
          position="relative"
          display="grid"
          placeContent="center"
          // bg="green.200"
          w="fit-content"
          alignSelf="center"
        >
          <Image
            src="/ezgif.png"
            rounded="10px"
            borderRadius="10px"
            w="203px"
            h="165px"
            maxH="10rem"
          />
        </Box>
        <Box position="relative" w="fit-content">
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
      <Stack w="20rem" display="flex" direction="column" gap={4}>
        <form onSubmit={formik.handleSubmit}>
          <Stack
            w="full"
            display="flex"
            direction="column"
            alignItems="center"
            gap={4}
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
                id="phone"
                name="phone"
                placeholder={"Phone Number"}
                _placeholder={{ color: "#EAEAEA" }}
                type={"tel"}
                bg="#FFFFFF0F"
                px={10}
                onChange={formik.handleChange}
                value={formik.values.phone}
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
                px={10}
                onChange={formik.handleChange}
                value={formik.values.email}
                border={{ start: "2px solid  #FFFFFF2F", md: "none" }}
              />

              <Box position="absolute" left={4} top="5">
                <BsPerson fontSize="1.25rem" />
              </Box>
            </Box>
            <Box w="full" position="relative">
              <Input
                id="dob"
                name="dob"
                rounded="15px"
                placeholder={"Date of Birth"}
                _placeholder={{ color: "#EAEAEA" }}
                type={"date"}
                bg="#FFFFFF0F"
                px={10}
                onChange={formik.handleChange}
                value={formik.values.dob}
                border={{ start: "2px solid  #FFFFFF2F", md: "none" }}
              />
              <Box position="absolute" left={4} top="5">
                <BsPerson fontSize="1.25rem" />
              </Box>
            </Box>
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
      h="45rem"
      rounded="15px"
      bg="black.0"
    >
      {step === 1
        ? content
        : step === 2
        ? paymentContent
        : step === 3
        ? formContent
        : step === 4
        ? successMessage
        : null}
    </Stack>
  );
};
