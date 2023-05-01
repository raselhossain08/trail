import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  useOutsideClick,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useGiftCode } from "utils/dasboard.action";
import state from "utils/state";

const GiftCodeModal = (props: { isOpen: boolean; onClose: () => void }) => {
  const ref = useRef(null);

  useOutsideClick({
    ref: ref,
    handler: () => props.onClose(),
  });

  const cancelRef = useRef(null);

  return (
    <AlertDialog
      isOpen={props.isOpen}
      onClose={props.onClose}
      size="full"
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay bg="rgb(0,0,0,50%)" />

      <AlertDialogContent bg="transparent">
        <AlertDialogBody as={VStack} justifyContent="center">
          <VStack
            maxW="350px"
            spacing="30px"
            color="white"
            bg="black"
            p="30px"
            rounded="20px"
          >
            <Text
              fontSize={{ start: "20px", md: "25px" }}
              fontWeight="bold"
              textAlign="center"
              ref={ref}
            >
              gift code generated successfully
            </Text>
            <Image src="/ads-project/gift-code.png" />
          </VStack>
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default () => {
  const [code, setCode] = useState("");
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const info = state.useStore((e) => e.infos);

  const giftCodeFun = async () => {
    setLoading(() => true);
    await useGiftCode(code)
      .then((res) => {
        console.log(res);
        if (typeof res == "string")
          return toast({
            title: "error",
            description: res,
            status: "error",
            position: "top-right",
            duration: 3000,
            isClosable: false,
          });
        if (res.msg) {
          onOpen();
          toast({
            title: "gift code used",
            description: "gift code used  ",
            status: "success",
            position: "top-right",
            duration: 3000,
            isClosable: false,
          });
          const newValue: any = { infos: info };
          newValue.infos.wallet = newValue.infos.wallet + res.msg;
          console.log(newValue);
          state.updateState(newValue);

          return;
        }
      })
      .catch((err) => {
        console.log(err);
        return toast({
          title: "error",
          description: "you cant use this code",
          status: "error",
          position: "bottom-right",
          duration: 3000,
          isClosable: false,
        });
      });
    setLoading(() => false);
  };

  return (
    <VStack
      w="full"
      spacing="20px"
      p="20px"
      rounded="15px"
      bg="black.0"
      pb="50px"
    >
      <GiftCodeModal isOpen={isOpen} onClose={onClose} />
      <Image src="/ads-project/gif.gif" w="full" maxW="400px" rounded="5px" />
      <Text fontSize="30px" textAlign="center">
        you can use your code now
      </Text>
      <Text color="#bdbdbd" maxW="300px" textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum,
      </Text>
      <Text />
      <Input
        value={code}
        onChange={({ target: { value } }) => setCode(() => value)}
        // maxW="full"
        // w="300px"
        w={{ start: "full", md: "400px" }}
        placeholder="Code ..."
        rounded="20px"
        _placeholder={{ color: "#f2F2F2" }}
      />
      <Button
        bg="green.500"
        fontSize="16px"
        color="#FFFFFF"
        isLoading={isLoading}
        rounded="20px"
        loadingText="checking"
        onClick={() => giftCodeFun()}
        w={{ start: "full", md: "400px" }}
      >
        redeem code
      </Button>
    </VStack>
  );
};
