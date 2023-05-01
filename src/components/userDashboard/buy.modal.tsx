import {
  CloseButton,
  Divider,
  HStack,
  Image,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  Text,
  useOutsideClick,
  useToast,
  VStack,
  useDisclosure,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  Alert,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWallet } from "utils/dasboard.action";
import state from "utils/state";
import BuyInfoAccount from "./buy.info.account";

const AlertComp = (props: {
  isOpen: boolean;
  onClose: () => void;
  fun: () => void;
}) => {
  const cancelRef = useRef(null);

  return (
    <AlertDialog
      {...props}
      size={{ start: "md", md: "md" }}
      leastDestructiveRef={cancelRef}
      isOpen={props.isOpen}
      onOverlayClick={() => props.fun()}
    >
      <AlertDialogOverlay bg="rgb(0,0,0,50%)" />

      <AlertDialogContent bg="rgb(0,0,0,0%)" onClick={() => props.fun()}>
        <AlertDialogBody
          as={motion.div}
          opacity={1}
          bg="blackAlpha.300"
          backdropFilter="blur(20px)"
          border="none"
          p="10px"
          rounded="15px"
        >
          <Alert
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
            rounded="10px"
            as={VStack}
            spacing="20px"
            bg="rgb(0, 128, 0 , 30%)"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="20px">
              purchsae has been complited
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              click anywhere to get get your account information <span /> you
              can copy or download it as you want
            </AlertDescription>
          </Alert>
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default (props: {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  price: number;
  title: string;
  _id: string;
}) => {
  const [loading, setLoading] = useState(false);
  const discloser = useDisclosure();
  const Alertdiscloser = useDisclosure();
  const ref = useRef(null);
  const navigate = useNavigate();
  const [data, setData] = useState<Record<any, any>>({});

  useOutsideClick({
    ref: ref,
    handler: () => () => {},
  });

  const wallet = state.useStore((e) => e.infos.wallet);
  const toaster = useToast();

  const buyFromWallet = async () => {
    if (wallet <= props.price)
      return toaster({
        status: "error",
        title: "purchase error",
        description: "please fill you account",
        duration: 3000,
      });
    setLoading(() => true);
    await useWallet(props._id)
      .then((res) => {
        console.log(res);
        if (res.err)
          return toaster({
            status: "error",
            title: "purchase error",
            description: res.err,
            duration: 3000,
          });
        new Promise((res) => {
          res("");
        })
          .then(() => setData(() => res))
          .then(() => Alertdiscloser.onOpen());
      })
      .catch(() =>
        toaster({
          status: "error",
          title: "purchase error",
          description: "you can't purchase ",
          duration: 3000,
        })
      );
    setLoading(() => false);
  };

  const cancelRef = useRef(null);

  return (
    <AlertDialog
      {...props}
      size={{ start: "md", md: "md" }}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay bg="rgb(0,0,0,50%)" />

      <AlertDialogContent bg="rgb(0,0,0,0%)">
        <AlertDialogBody
          opacity={1}
          bg="blackAlpha.300"
          backdropFilter="blur(20px)"
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
            ref={ref}
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
          >
            <BuyInfoAccount
              onClose={discloser.onClose}
              isOpen={discloser.isOpen}
              accountInfo={data as any}
            />

            <AlertComp
              {...Alertdiscloser}
              fun={() => {
                Alertdiscloser.onClose();
                discloser.onOpen();
              }}
            />

            <VStack
              alignItems="start"
              spacing={{ start: "0px", md: "0px" }}
              w="full"
            >
              <CloseButton
                color="black"
                bg="white"
                rounded="full"
                onClick={() => props.onClose()}
              />
              <Divider height="30px" borderColor="transparent" />
              <Text color="whiteAlpha.700">Account Cost </Text>
              <Text fontSize="30px"> {props.price} $ </Text>
              <Divider h="10px" borderColor="transparent" />
              <VStack
                w="full"
                bg="#2C55FB"
                p="20px"
                rounded="5px"
                spacing="20px"
                alignItems="start"
              >
                <Text fontSize="40px" lineHeight="40px">
                  Market <p /> Place Accounts
                </Text>
                <Text color="whiteAlpha.900">v1.0</Text>
              </VStack>
              <VStack w="full" alignItems="start" spacing="10px" pt="20px">
                <Text fontSize="20px"> Summary </Text>

                <HStack w="full" justifyContent="space-between">
                  <Text>Item Subtotal : </Text>
                  <Text>{props.price} $</Text>
                </HStack>
                <Divider borderColor="rgb(260,260,260,20%)" />
                <HStack w="full" justifyContent="space-between">
                  <Text>Tax : </Text>
                  <Text>0 $</Text>
                </HStack>
                <Divider borderColor="rgb(260,260,260,20%)" />

                <HStack w="full" justifyContent="space-between">
                  <Text>Order Total : </Text>
                  <Text>{props.price} $</Text>
                </HStack>
                <Divider borderColor="rgb(260,260,260,0%)" h="20px" />
                <HStack
                  as={motion.div}
                  whileHover={{ backgroundColor: "#000000" }}
                  w="full"
                  spacing="10px"
                  // border="1px solid gray"
                  rounded="5px"
                  alignItems="center"
                  p="10px"
                  cursor="pointer"
                  bg="green.500"
                  onClick={() => buyFromWallet()}
                >
                  <Image
                    src="user.svg"
                    bg="#000000"
                    h="40px"
                    p="10px"
                    rounded="5px"
                  />
                  <VStack spacing="0" alignItems="start">
                    <Text>Purchase now</Text>
                    <Text color="green.200">
                      you total account sold {wallet}$
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </VStack>
          </VStack>
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  );
};
