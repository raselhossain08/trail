import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  CloseButton,
  HStack,
  Image,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export const Title = (props: { title: string; subTitle: string }) => {
  const toast = useToast();
  const [isCopied, setCopied] = useState(false);
  return (
    <VStack alignItems="statrt" w="full" spacing="10px">
      <Text> {props.title} </Text>

      <HStack
        w="full"
        alignItems="center"
        justifyContent="space-between"
        // bg="rgb(34, 34, 34,10%)"
        bg="rgb(14, 146, 255, 20%)"
        backdropFilter="blur(20px)"
        p="10px"
        rounded="10px"
      >
        <Text color="#8E8E8E">{props.subTitle}</Text>
        <Image
          src="/copie.svg"
          p="5px"
          rounded="10px"
          bg={isCopied ? "green.500" : ""}
          onClick={() => {
            navigator.clipboard.writeText(props.subTitle);
            setCopied(() => true);
            toast({
              title: "Copied !",
              status: "success",
              duration: 2000,
            });
          }}
        />
      </HStack>
    </VStack>
  );
};

export default (props: {
  isOpen: boolean;
  onClose: () => void;
  accountInfo: {
    email: string;
    password: string;
    user: string;
    accounEmail: string;
    accountEmailPassword: string;
    id: string;
    emailRecuperation: string;
  };
}) => {
  const cancelRef = useRef(null);

  return (
    <AlertDialog
      {...props}
      size={{ start: "md", md: "xl" }}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay bg="rgb(0,0,0,0%)" />

      <AlertDialogContent bg="rgb(0,0,0,0%)">
        <AlertDialogBody
          opacity={1}
          // bg="blackAlpha.300"
          //  backdropFilter="blur(20px)"
          border="none"
          p="10px"
          rounded="15px"
        >
          <VStack
            // spacing="20px"
            w="full"
            maxW="full"
            // p="20px"
            mt="20px"
            pos="relative"
            alignItems="center"
            spacing="0"
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
          >
            <VStack
              maxW="600px"
              spacing="10px"
              w="full"
              p="20px"
              bg="rgb(0, 0, 0, 50%)"
              pt="40px"
              rounded="20px 20px 0px 0px"
              backdropFilter="blur(100px)"
            >
              <HStack w="full" justifyContent="space-between" pb="20px">
                <Text fontSize="20px">Account Details</Text>
                <CloseButton
                  bg="#545454"
                  color="white"
                  rounded="full"
                  onClick={() => props.onClose()}
                />
              </HStack>
              <Title title="User" subTitle={props.accountInfo.user} />
              <Title title="Password" subTitle={props.accountInfo.password} />
              <Title
                title="Account Email"
                subTitle={props.accountInfo.accounEmail}
              />
              <Title
                title="Account Email Password"
                subTitle={props.accountInfo.accountEmailPassword}
              />
              <Title title="ID" subTitle={props.accountInfo.id} />
              <Title
                title="Email recuperation"
                subTitle={props.accountInfo.emailRecuperation}
              />
            </VStack>
            <HStack
              alignItems="center"
              justifyContent="start"
              w="full"
              p="20px"
              bg="rgb(0, 0, 0,10%)"
              backdropFilter="blur(10px)"
              rounded="0px 0px 20px 20px"
            >
              <HStack
                // bg="#8A8A8A"
                bg="rgb(230, 84, 222, 50%)"
                p="10px"
                rounded="10px"
                cursor="pointer"
                onClick={() => {
                  const fileContent = `email : ${props.accountInfo.email}\npassword : ${props.accountInfo.password}\nuser : ${props.accountInfo.user}\naccount email : ${props.accountInfo.accounEmail}\naccount email password : ${props.accountInfo.accountEmailPassword}\nid : ${props.accountInfo.id} \nemail recuperation : ${props.accountInfo.emailRecuperation}`;
                  const blob = new Blob([fileContent], { type: "text/plain" });
                  const url = URL.createObjectURL(blob);
                  const link = document.createElement("a");
                  link.download = "account-info.txt";
                  // navigate(url);
                  link.href = url;
                  link.click();
                }}
              >
                <Image src="/user.svg" p="5px" rounded="full" />
                <Text color="white">download</Text>
              </HStack>
            </HStack>
          </VStack>
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  );
};
