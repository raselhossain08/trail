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
import { signupFunction, SignupInputsType } from "utils/login.functions";

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
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
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
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const [signupInputs, setSignupInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const signup = () => {
    setLoading(() => true);

    const signupResult = signupFunction(signupInputs, props.reRef);

    signupResult.then((e) => {
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
  const cancelRef = useRef(null);

  return (
    <AlertDialog
      {...props}
      size={{ start: "full", md: "md" }}
      scrollBehavior="outside"
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay bg="rgb(0,0,0,50%)" backdropFilter="blur(10px)" />
      <AlertDialogContent bg="rgb(0,0,0,0%)" h="auto" pb="50px">
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
                Sign Up
              </Text>
              <Text fontSize="16px"> Open New Account And Join Us</Text>
              <InputText
                isError={[errors.name !== "", errors.name]}
                placeholder="full name"
                place="name"
                setValue={setSignupInputs}
                value={signupInputs.name}
                icon="/user.svg"
              />
              <InputText
                isError={[errors.email !== "", errors.email]}
                placeholder="email"
                place="email"
                setValue={setSignupInputs}
                value={signupInputs.email}
                icon="/email.svg"
              />
              <InputText
                isError={[errors.phoneNumber !== "", errors.phoneNumber]}
                placeholder="phone number"
                place="phoneNumber"
                setValue={setSignupInputs}
                value={signupInputs.phoneNumber}
                icon="/phone.svg"
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
              <InputText
                isError={[
                  errors.confirmPassword !== "",
                  errors.confirmPassword,
                ]}
                placeholder="confirm password"
                place="confirmPassword"
                type="password"
                setValue={setSignupInputs}
                value={signupInputs.confirmPassword}
                icon="/password.svg"
              />
              <Button
                isLoading={isLoading}
                loadingText="signup"
                w="full"
                bg="blue"
                fontSize="18px"
                onClick={() => signup()}
              >
                Signup Now
              </Button>
            </VStack>
          </Stack>
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  );
};
