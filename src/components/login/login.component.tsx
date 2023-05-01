import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Highlight,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import ReCAPTCHA from "react-google-recaptcha";
import { Fragment, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginFunction, LoginInputsTypes } from "utils/login.functions";
import LoginModal from "./login.modal";
import SignupModal from "./signup.modal";

const WelcomeComponent = () => (
  <VStack
    w="full"
    maxW="600px"
    spacing="20px"
    display={{ start: "none", md: "flex" }}
    h="full"
    alignItems="start"
    justifyContent="space-between"
  >
    <Box w="full" h="300px" rounded="15px">
      <iframe
        src="https://fast.wistia.net/embed/iframe/wii6w7ge4t"
        title=" [Example Video] Wistia Video Essentials"
        allow="autoplay; fullscreen"
        // allowtransparency="true"
        // frameborder="0"
        scrolling="no"
        className="wistia_embed"
        name="wistia_embed"
        // msallowfullscreen
        width="100%"
        height="100%"
      ></iframe>
      <script
        src="https://fast.wistia.net/assets/external/E-v1.js"
        async
      ></script>
      {/* <iframe
        width="560"
        height="315"
        src="https://gitnawi.wistia.com/medias/rfyl15c32p"
        //        src="https://gitnawi.wistia.com/medias/rfyl15c32p?embedType=iframe&videoFoam=true&videoWidth=640"
        // src="https://www.youtube-nocookie.com/embed/mcWOk8-Bj80"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: "15px", width: "100%" }}
      ></iframe> */}
    </Box>

    <HStack
      w="full"
      spacing="20px"
      bg="black.0"
      p="20px"
      alignItems="start"
      rounded="15px"
    >
      <VStack
        spacing="10px"
        justifyContent="space-between"
        alignItems="start"
        h="full"
      >
        <HStack w="full" alignItems="end">
          <Text fontSize="20px" fontWeight="bold">
            Some title about fb problem or titkok
          </Text>
          <Image
            src="/login-person.png"
            h="inherit"
            w="50%"
            display={{ start: "none", md: "block", lg: "none" }}
          />
        </HStack>
        <Image
          src="/login-person.png"
          h="inherit"
          w="calc(100% - 0px)"
          px="20px"
          rounded="10px"
          bg="rgb(0,0,0,25%)"
          display={{ start: "block", md: "none" }}
        />

        <Text color="#828282">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </Text>
      </VStack>
      <Image
        src="/login-person.png"
        h="inherit"
        w="50%"
        display={{ start: "none", lg: "block" }}
      />
    </HStack>
  </VStack>
);

const WelcomeTo = () => (
  <VStack
    spacing="10px"
    justifyContent="space-between"
    alignItems="start"
    bg={{ start: "none", md: "black.0" }}
    p="20px"
    rounded="15px"
    textAlign={{ start: "center", md: "start" }}
  >
    <Text fontSize={{ start: "20px", md: "30px" }} fontWeight="bold" w="full">
      Welcome to name
    </Text>
    <Text color="#828282">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
      libero et velit interdum, ac aliquet odio mattis.
    </Text>
  </VStack>
);

const LoginForm = (props: { reRef: any }) => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const defaultLoginInputs = {
    email: "",
    password: "",
  };

  const [errors, setErrors] = useState(defaultLoginInputs);

  const login = (inputs: { email: string; password: string }) => {
    setLoading(true);
    const loginResult = loginFunction(inputs, props.reRef);

    loginResult.then((e) => {
      setLoading(false);
      if (e === undefined) {
        toast({
          title: "successfully login",
          status: "success",
          duration: 3000,
          isClosable: false,
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "error",
          description: e.err,
          status: "error",
          duration: 3000,
          isClosable: false,
        });
        setErrors((m) => {
          m = defaultLoginInputs;
          m[e.place as "email" | "password"] = e.err;
          return m;
        });
      }
    });
  };

  const isEmailError = errors.email !== "";
  const isPasswordError = errors.password !== "";

  return (
    <Fragment>
      <FormControl
        isInvalid={isEmailError}
        display={{ start: "none", md: "block" }}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Image src="/email.svg" mt="20px" />}
          />
          <Input
            rounded="10px"
            borderRadius="5px"
            placeholder="email . . ."
            isInvalid={true}
            errorBorderColor="red"
            _placeholder={{ color: "#EAEAEA" }}
            value={email}
            onChange={(v) => setEmail((e: any) => v.target.value)}
            border={{ start: "2px solid gray", md: "none" }}
          />
        </InputGroup>

        <FormErrorMessage>{isEmailError && errors.email}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={isPasswordError}
        display={{ start: "none", md: "block" }}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Image src="/password.svg" mt="20px" />}
          />
          <Input
            isInvalid={true}
            errorBorderColor="red"
            placeholder="password . . ."
            type={show ? "text" : "password"}
            _placeholder={{ color: "#EAEAEA" }}
            w="full"
            p="30px"
            value={password}
            onChange={(v) => setPassword((e: any) => v.target.value)}
            border={{ start: "2px solid gray", md: "none" }}
            rounded="10px"
          />
          <InputRightElement
            children={
              <Button
                m="7px"
                py="5px"
                w="70px"
                top="0"
                pos="absolute"
                right="0"
                bg="black.0"
                onClick={() => setShow(!show)}
                fontSize="18px"
              >
                {show ? "hide" : "show"}
              </Button>
            }
          />
        </InputGroup>
        <FormErrorMessage>
          {isPasswordError && errors.password}
        </FormErrorMessage>
      </FormControl>
      <Button
        isLoading={isLoading}
        w="full"
        bg="blue"
        loadingText="login"
        onClick={() => login({ email, password })}
        display={{ start: "none", md: "flex" }}
      >
        Login
      </Button>
    </Fragment>
  );
};

const LoginInputs = (props: { reRef: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const loginDisclosur = useDisclosure();

  return (
    <VStack
      w="full"
      spacing="20px"
      p="20px"
      bg={{ start: "none", md: "black.0" }}
      rounded="15px"
    >
      <SignupModal isOpen={isOpen} onClose={onClose} reRef={props.reRef} />
      <LoginModal
        isOpen={loginDisclosur.isOpen}
        onClose={loginDisclosur.onClose}
        reRef={props.reRef}
      />

      <LoginForm reRef={props.reRef} />
      <Button
        w="full"
        bg="blue"
        onClick={() => loginDisclosur.onOpen()}
        display={{ start: "flex", md: "none" }}
      >
        Login
      </Button>
      <HStack w="full" justifyContent="center">
        <Box w="full" h="2px" bg="white" />
        <Text px="10px">or</Text>
        <Box w="full" h="2px" bg="white" />
      </HStack>
      <Button w="full" bg="black" onClick={onOpen}>
        Signup
      </Button>
    </VStack>
  );
};

export const Support = () => (
  <Text
    p="20px"
    bg={{ start: "none", md: "black.0" }}
    rounded="15px"
    fontSize="16px"
  >
    You need help ?
    <Highlight
      query="be free to reach us on telegram"
      styles={{ color: "#0049AC", cursor: "pointer" }}
    >
      Be free to reach us on telegram
    </Highlight>
  </Text>
);

export default () => {
  const reRef = useRef(null);

  return (
    <Stack h="full" w="full" justifyContent="center" alignItems="center">
      <Stack
        h="full"
        w="full"
        justifyContent={{ start: "start", md: "center" }}
        alignItems="center"
        p={{ start: "10px", md: "none" }}
      >
        <HStack
          backdropFilter="blur(10px)"
          p={{ start: "0px", md: "20px" }}
          rounded="20px"
          bg="black.0"
          justifyContent="space-between"
          w="full"
          h="auto"
          maxW="1200px"
          alignItems="start"
          spacing={{ start: "0px", md: "20px" }}
        >
          <WelcomeComponent />
          <VStack
            w="full"
            maxW={{ start: "full", md: "400px" }}
            spacing="20px"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              w="full"
              h="300px"
              rounded="15px"
              px="20px"
              pt="50px"
              display={{ start: "block", md: "none" }}
            >
              <Box w="100px" pos="fixed" left="0">
                <ReCAPTCHA
                  className="g-recaptcha"
                  sitekey="6LdvLnYjAAAAAE2UQjy9bYZHpX9-cwcyopWu5QsQ"
                  size="invisible"
                  ref={reRef}
                  onChange={(e) => console.log(e)}
                />
              </Box>
              <iframe
                src="https://fast.wistia.net/embed/iframe/wii6w7ge4t"
                title=" [Example Video] Wistia Video Essentials"
                allow="autoplay; fullscreen"
                // allowtransparency="true"
                // frameborder="0"
                scrolling="no"
                className="wistia_embed"
                name="wistia_embed"
                // msallowfullscreen
                width="100%"
                height="100%"
              ></iframe>
              <script
                src="https://fast.wistia.net/assets/external/E-v1.js"
                async
              ></script>
              {/* <script
                src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
                async
                defer
              ></script>
              {/* <div
                class="g-recaptcha"
                data-sitekey="_your_site_key_"
                data-callback="onSubmit"
                data-size="invisible"
              ></div> */}
              {/* <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/mcWOk8-Bj80"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: "15px", width: "100%" }}
              ></iframe> */}
              {/* <iframe
                width="560"
                height="315"
                src="https://gitnawi.wistia.com/medias/rfyl15c32p?embedType=iframe&videoFoam=true&videoWidth=640"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: "15px", width: "100%" }}
              ></iframe> */}
            </Box>

            <WelcomeTo />
            <LoginInputs reRef={reRef} />
            <Support />
          </VStack>
        </HStack>
      </Stack>
    </Stack>
  );
};
