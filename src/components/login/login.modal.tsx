import {
  Button,
  CloseButton,
  FormControl,
  FormErrorMessage,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  Stack,
  Text,
  useOutsideClick,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginFunction } from "utils/login.functions";

const InputText = (props: {
  value: string;
  setValue: Dispatch<SetStateAction<typeof defualtSignUpInputs>>;
  isError: [boolean, string];
  placeholder: string;
  place: keyof typeof defualtSignUpInputs;
  type?: string;
  icon: string;
}) => (
  <FormControl isInvalid={props.isError[0]}>
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<Image src={props.icon} mt="20px" />}
      />
      <Input
        rounded="15px"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(v) =>
          props.setValue((e) => {
            (e as any)[props.place] = v.target.value;
            return { ...e };
          })
        }
        _placeholder={{ color: "#EAEAEA" }}
        type={props.type}
        bg="#FFFFFF0F"
        border={{ start: "2px solid  #FFFFFF2F", md: "none" }}
      />
    </InputGroup>

    <FormErrorMessage>{props.isError[0] && props.isError[1]}</FormErrorMessage>
  </FormControl>
);

const defualtSignUpInputs = {
  email: "",
  password: "",
};

export default (props: {
  isOpen: boolean;
  onClose: () => void;
  reRef: any;
}) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [signupInputs, setSignupInputs] = useState({
    email: "",
    password: "",
  });

  const signup = () => {
    setLoading(() => true);

    const signupResult = loginFunction(signupInputs, props.reRef);

    signupResult.then((e) => {
      setLoading(false);
      if (e === undefined) {
        toast({
          title: "successfully login",
          status: "success",
          duration: 3000,
          isClosable: false,
        });
        navigate("/");
      } else {
        toast({
          title: "error",
          description: e.err,
          status: "error",
          duration: 3000,
          isClosable: false,
        });
        setErrors((m) => {
          m = defualtSignUpInputs;
          m[e.place as "email" | "password"] = e.err;
          return m;
        });
      }
    });
  };

  const ref = useRef(null);
  useOutsideClick({
    ref: ref,
    handler: () => props.onClose(),
  });

  console.log(" signup modal render");

  const cancelRef = useRef(null);

  return (
    <AlertDialog
      {...props}
      size={{ start: "full", md: "md" }}
      scrollBehavior="outside"
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay bg="rgb(0,0,0,50%)" backdropFilter="blur(10px)" />
      <AlertDialogContent bg="rgb(0,0,0,0%)" h="100vh">
        <AlertDialogBody
          bg={{ start: "black", md: "black.0" }}
          border="none"
          p="20px"
          rounded="20px"
        >
          <Stack w="full" justifyContent="center" alignItems="center">
            <VStack
              spacing="20px"
              w="full"
              maxW="400px"
              ref={ref}
              pos="relative"
            >
              <CloseButton
                bg="white"
                color="black"
                pos="absolute"
                left="0%"
                display={{ start: "block", md: "none" }}
                onClick={() => props.onClose()}
              />
              <Text fontWeight="bold" fontSize="20px">
                Login
              </Text>
              <Text fontSize="16px" textAlign="center">
                Welcome Back, There New Events For You
              </Text>

              <InputText
                isError={[errors.email !== "", errors.email]}
                placeholder="email"
                place="email"
                setValue={setSignupInputs}
                value={signupInputs.email}
                icon="/email.svg"
              />

              <InputText
                isError={[errors.password !== "", errors.password]}
                placeholder="password"
                place="password"
                type="password"
                setValue={setSignupInputs}
                value={signupInputs.password}
                icon="/password.svg"
              />

              <Button
                isLoading={isLoading}
                loadingText="login"
                w="full"
                bg="blue"
                fontSize="18px"
                onClick={() => signup()}
              >
                Login Now
              </Button>
            </VStack>
          </Stack>
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  );
};
