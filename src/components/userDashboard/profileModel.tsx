import { SpinnerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  CloseButton,
  Divider,
  Editable,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  Spinner,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { profile } from "console";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { modifyAccount } from "utils/api";
import { Purcentage } from "./wallet";

const InputStyle = (props: InputProps & { icon: string }) => (
  <InputGroup>
    <InputLeftElement>
      <Image src={props.icon} />
    </InputLeftElement>
    <Input
      border="1px solid gray"
      bg="blackAlpha.500"
      _placeholder={{ color: "white" }}
      h="10px"
      p="20px"
      placeholder="text here"
      {...props}
    />
  </InputGroup>
);

export const ProfileModel = (props: {
  isOpen: boolean;
  onClose: () => void;
  profile: any;
}) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [userInfos, setUserInfos] = useState({
    name: props.profile.name,
    phone: props.profile.phone,
    email: props.profile.email,
  });

  function changeFun() {
    toast({ status: "warning", title: "start changing" });

    setLoading(() => true);
    modifyAccount(userInfos).then((res) => {
      if (!res)
        return toast({ status: "error", title: "your infos didn't change" });

      toast({ status: "success", title: "you account inoformation changed" });
    });
    setLoading(() => false);
  }
  const ref = useRef(null);
  return (
    <AlertDialog
      {...props}
      size={{ start: "full", md: "full" }}
      leastDestructiveRef={ref}
    >
      <AlertDialogOverlay />

      <AlertDialogContent bg="#" color="white">
        <AlertDialogBody
          as={motion.div}
          opacity={1}
          backdropFilter="blur(10px)"
          border="none"
          p="10px"
          rounded="15px"
        >
          <VStack
            spacing="20px"
            w="full"
            maxW="full"
            p="20px"
            mt="20px"
            pos="relative"
            alignItems="center"
            // h="50vh"
            overflowY="scroll"
            css={{
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              "&::-webkit-scrollbar-track": {
                width: "0px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "white",
                borderRadius: "24px",
              },
            }}
            textAlign="center"
          >
            <CloseButton
              bg="whiteAlpha.400"
              color="white"
              h="30px"
              w="30px"
              size="lg"
              onClick={() => props.onClose()}
            />
            <Purcentage
              bg="blackAlpha.600"
              balance={props.profile.wallet}
              usage={props.profile.usageWallet}
              total={props.profile.usageWallet + props.profile.wallet}
            />
            {/* <VStack
              w="full"
              maxW="400px"
              //  p="20px"
              // border="2px solid gray"
              rounded="10px"
            >
              <VStack
                spacing="0px"
                p="20px"
                bg="rgb(0, 117, 43, 60%)"
                color="whiteAlpha.900"
                fontSize="20px"
                alignItems="start"
                rounded="10px"
                w="full"
              >
                <Text>Total Deposit</Text>
                <Text fontSize="30px">$34 </Text>
              </VStack>
              <VStack
                spacing="0px"
                p="20px"
                bg="rgb(89, 7, 0, 60%)"
                color="whiteAlpha.900"
                fontSize="20px"
                alignItems="start"
                rounded="10px"
                w="full"
              >
                <Text>Current Balance </Text>
                <Text fontSize="30px">$34 </Text>
              </VStack>
            </VStack> */}
            <VStack
              maxW="400px"
              w="full"
              alignItems="start"
              fontSize="20px"
              spacing="10px"
              pt="20px"
              rounded="10px"
              bg="blackAlpha.600"
              p="20px"
            >
              <Text>Name</Text>
              <InputStyle
                icon={"/user.svg"}
                placeholder="change name"
                value={userInfos.name}
                onChange={({ target: { value } }) =>
                  setUserInfos((e) => ({ ...e, name: value }))
                }
              />
              <Divider borderColor="transparent" h="10px" />
              <Text>Email</Text>
              <InputStyle
                icon={"/email.svg"}
                placeholder="change email"
                value={userInfos.email}
                onChange={({ target: { value } }) =>
                  setUserInfos((e) => ({ ...e, email: value }))
                }
              />
              <Divider borderColor="transparent" h="10px" />
              <Text>Phone Number</Text>
              <InputStyle
                icon={"/phone.svg"}
                placeholder="change phone number"
                type="text"
                value={userInfos.phone}
                onChange={({ target: { value } }) =>
                  setUserInfos((e) => ({ ...e, phone: value }))
                }
              />
              <Divider borderColor="transparent" h="10px" />
              <HStack w="full" justifyContent="space-between">
                <Button bg="red">Cancel </Button>
                <Button
                  bg="green"
                  onClick={() => changeFun()}
                  loadingText="changig"
                  isLoading={loading}
                >
                  Change
                </Button>
              </HStack>
            </VStack>
            <Editable defaultValue=""></Editable>
          </VStack>
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  );
};
