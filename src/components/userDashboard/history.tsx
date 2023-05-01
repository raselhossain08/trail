import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ChakraProps,
  Divider,
  HStack,
  Image,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import state from "utils/state";
import AccountInfoModel from "./accountInfoModel";

const history = [
  {
    picture: "/facebook-cover.png",
    name: "facebook pro account ready to go right now",
    price: "$ 23",
    date: new Date(Date.now()),
  },
  {
    picture: "/facebook-cover.png",
    name: "facebook pro account ready to go right now facebook pro account ready to go right nowfacebook pro account ready to go right nowfacebook pro account ready to go right now",
    price: "$ 23",
    date: new Date(Date.now()),
  },
  {
    picture: "/facebook-cover.png",
    name: "facebook pro account ready to go right now",
    price: "$ 23",
    date: new Date(Date.now()),
  },
  {
    picture: "/facebook-cover.png",
    name: "facebook pro account ready to go right now",
    price: "$ 23",
    date: new Date(Date.now()),
  },
];

const Texts = (props: ChakraProps & { children: any }) => (
  <Text w="20%" textAlign="start" {...props}>
    {props.children}
  </Text>
);

export default () => {
  const [accountData, setAccountData] = useState({ password: "", email: "" });
  const discloser = useDisclosure();

  const PurchaseHistory = state.useStore((e) => e.infos.history);
  console.log("PurchaseHistory");
  console.log(PurchaseHistory);

  // useEffect(() => {
  //   console.log("history");
  //   console.log(PurchaseHistory);
  // });

  if (!PurchaseHistory)
    return (
      <VStack
        p="20px"
        w="full"
        alignItems="center"
        spacing="20px"
        bg="black.0"
        rounded="10px"
        justifyContent="start"
      >
        <Text></Text>
        <Image src="/ads-project/no-purchase.png" bg="transparent" />
        <Text fontSize="30px" textAlign="center">
          no purchase yet ?
        </Text>
        <Text color="#BDBDBD" textAlign="center" maxW="300px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </Text>
        <Text></Text>
      </VStack>
    );

  return (
    <VStack
      w="full"
      alignItems="start"
      spacing={{ start: "5px", md: "10px" }}
      bg={{ start: "", md: "black.0" }}
      p={{ start: "0px", md: "15px" }}
      rounded="10px"
    >
      <Text fontWeight="bold" fontSize="30px" pb="20px">
        Purchase History
      </Text>
      <AccountInfoModel {...discloser} />
      <HStack
        w="full"
        justifyContent="space-between"
        p="10px"
        rounded="10px"
        as={motion.div}
        cursor="default"
      >
        <Texts>name</Texts>
        <Texts>price</Texts>
        <Texts>status</Texts>
        <Texts w="50px">details</Texts>
      </HStack>

      {PurchaseHistory.map((e: any, i: number) => {
        const date = new Date(parseInt(e.buyers.date));
        console.log(e);

        return (
          <Stack
            key={i * 45}
            w="full"
            justifyContent="space-between"
            // px="15px"
            px={{ start: "0px", md: "15px" }}
            rounded="10px"
            as={motion.div}
            whileHover={{ backgroundColor: "rgba(0,0,0,0.25)" }}
            cursor="default"
            alignItems="start"
            py="20px"
            flexDir={{ start: "row", md: "row" }}
            spacing="0"
          >
            <Texts fontSize="">{e.title}</Texts>
            <Texts>{"$ " + e.price}</Texts>
            <Texts color="green.500" fontWeight="bold">
              <CheckCircleIcon color="" />
              Success
            </Texts>
            <Texts w="50px">
              <Tooltip label="more info" w="full">
                <Image
                  src="/ads-project/more-icon.svg"
                  bg="black.0"
                  p="5px"
                  rounded="10px"
                  cursor="pointer"
                  onClick={() => {
                    discloser.onOpen();
                  }}
                />
              </Tooltip>
            </Texts>
            {/* <Image src={e.picture} w="20%" pr="10%" rounded="5px" /> */}
            {/* <Text fontSize="20px" w={{ start: "full", md: "auto" }} pb="10px">
              {e.title}
            </Text> */}
            {/* <HStack
              spacing="10px"
              alignItems="center"
              justifyContent={{ start: "space-between", md: "auto" }}
              w={{ start: "full", md: "auto" }}
            >
              <Text lineHeight="30px">
                {date.getFullYear() +
                  "/" +
                  (date.getMonth() + 1) +
                  "/" +
                  date.getDate()}
              </Text>
              <Text
                lineHeight="30px"
                fontWeight="bold"
                p="5px"
                //bg="green.100"
                color="green.400"
                fontSize="23px"
                rounded="5px"
                w="80px"
              >
                {e.price + " $"}
              </Text>
              <Tooltip label="more info">
                <Box
                  p="5px"
                  bg="black.0"
                  rounded="10px"
                  as={motion.div}
                  whileHover={{ backgroundColor: "#000000" }}
                  cursor="pointer"
                  onClick={() => {
                    discloser.onOpen();
                  }}
                >
                  <Image src="/ads-project/more-icon.svg" />
                </Box>
              </Tooltip>
            </HStack> */}
            {/* <Texts>{e.date.getDay() + "/" + e.date.getMonth() + ""}</Texts> */}
            {/* <Texts>i</Texts> */}
          </Stack>
        );
      })}
    </VStack>
  );
};
