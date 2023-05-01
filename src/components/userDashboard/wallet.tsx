import {
  Box,
  Button,
  ChakraProps,
  Divider,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { WalletIcon } from "components/icons";
import { motion } from "framer-motion";
import { Fragment, useCallback, useMemo, useRef, useState } from "react";
import { redirect } from "react-router-dom";
import state from "utils/state";
import History from "./history";
import { PayComponent } from "./topupWallet";

export const Payment = (props: {
  text: string;
  svg: string;
  selected: boolean;
}) => (
  <Stack
    w="full"
    bg={props.selected ? "" : "black"}
    rounded="20px"
    p="5px"
    px="20px"
    alignItems="center"
    justifyContent="space-between"
    cursor="pointer"
    maxW="350px"
    as={motion.div}
    whileHover={{ backgroundColor: "#000000" }}
    pos="relative"
    flexDirection={{ start: "column", mds: "row" }}
    py={{ start: "20px", mds: "0px" }}
    //    border="3px solid blue"
  >
    <Box
      rounded="full"
      h="20px"
      w={{ start: "20px", mds: "20px" }}
      bg={props.selected ? "blue" : "black"}
      border="3px solid blue"
    />
    <Image src={props.svg} h="50px" p="10px" />
    <Text fontWeight=""> {props.text} </Text>
  </Stack>
);
export const PaymentMobile = (props: {
  text: string;
  svg: string;
  selected: boolean;
}) => (
  <Stack
    w="full"
    bg={props.selected ? "green" : ""}
    border="2px solid #FFFFFF00"
    borderColor={props.selected ? "gray" : "gray"}
    rounded="10px"
    p="5px"
    px="20px"
    alignItems="center"
    justifyContent="space-between"
    cursor="pointer"
    maxW="350px"
    as={motion.div}
    // whileHover={{ backgroundColor: "#000000" }}
    pos="relative"
    flexDirection={{ start: "row", mds: "row" }}
    py={{ start: "0px", mds: "0px" }}
    // borderBottom="2px solid gray"
  >
    <Box
      rounded="full"
      h="20px"
      w={{ start: "20px", mds: "20px" }}
      bg={props.selected ? "green.100" : ""}
      border="3px solid green"
    />
    <Image src={props.svg} h="50px" p="10px" />
    <Text fontWeight=""> {props.text} </Text>
  </Stack>
);

export const MoneyUsageComp = (props: { current: number; usage: number }) => {
  const [data, setData] = useState({
    total: 0,
    usage: 0,
    current: 0,
  });

  const Money = (props: ChakraProps & { wallet: any }) => (
    <Text
      fontWeight="bold"
      //  fontSize="40px"
      fontSize={{ start: "20px", md: "40px" }}
      {...props}
      w="full"
    >
      {props.wallet}
    </Text>
  );

  return (
    <HStack
      w="full"
      //   maxW="400px"
      justifyContent="space-between"
      fontWeight="bold"
      textAlign="center"
      display={{ start: "none", md: "flex" }}
    >
      <VStack
        p="10px"
        rounded="10px"
        bg="black.0"
        border="1px solid gray"
        spacing="0px"
      >
        <Money
          wallet={props.current + props.usage}
          //color="yellow.400"
        />
        <Text fontWeight="light"> Total Deposit </Text>
      </VStack>
      <VStack
        p="10px"
        rounded="10px"
        bg="black.0"
        border="1px solid gray"
        spacing="0px"
      >
        <Money
          wallet={props.usage}
          //color="orange.400"
        />
        <Text fontWeight="light"> usage Balance </Text>
      </VStack>
      <VStack
        p="10px"
        rounded="10px"
        bg="black.0"
        border="1px solid gray"
        spacing="0px"
      >
        <Money
          wallet={props.current}
          //color="green.400"
        />
        <Text fontWeight="light"> Current Balance </Text>
      </VStack>
    </HStack>
  );
};

export const MoneyUsageCompMobile = (props: {
  current: number;
  usage: number;
}) => {
  const Money = (
    props: ChakraProps & { wallet: any; text: string; color: string }
  ) => (
    <HStack
      // w="full"
      p="10px"
      rounded="10px"
      // bg="black.0"
      // border="1px solid gray"
      // spacing="20px"
      // pl="30px"
      //  {...props}
      fontWeight="bold"
      // bg="green.200"
      alignItems="center"
      color=""
      spacing="10px"
    >
      <Image bg="white" w="50px" h="50px" rounded="15px" />

      <VStack alignItems="start" spacing="0px">
        <Text fontWeight="light">{props.text}</Text>
        <Text
          fontWeight="bold"
          //  fontSize="40px"
          // fontSize={{ start: "20px", md: "40px" }}
          fontSize={{ start: "22px", md: "22px" }}
        >
          {props.wallet + " $ "}
        </Text>
      </VStack>
    </HStack>
  );

  return (
    <VStack
      w="full"
      //   maxW="400px"
      justifyContent="space-between"
      fontWeight="bold"
      textAlign="center"
      // display={{ start: "flex", md: "none" }}
    >
      <VStack
        w="full"
        maxW="400px"
        //  p="20px"
        // border="2px solid gray"
        rounded="10px"
      >
        <VStack
          spacing="0px"
          p="20px"
          bg="#85bb65"
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
          bg="#FF0000"
          color="whiteAlpha.900"
          fontSize="20px"
          alignItems="start"
          rounded="10px"
          w="full"
        >
          <Text>Current Balance </Text>
          <Text fontSize="30px">$34 </Text>
        </VStack>
      </VStack>
      {/* <Money
        text=" Total Deposit "
        wallet={props.current + props.usage}
        color="green.900"
      />
      <Money
        text=" Current Balance "
        wallet={props.current}
        color="green.400"
      />
      <Money text=" usage Balance " wallet={props.usage} color="green.400" /> */}
    </VStack>
  );
};

export const Purcentage = (
  props: ChakraProps & { usage: number; total: number; balance: number }
) => (
  <Stack
    w={{ start: "full", md: "full" }}
    maxW="400px"
    flexDir={{ start: "column", md: "row" }}
    justifyContent="space-between"
    alignItems="center"
    bg="black.0"
    rounded="10px"
    p="10px"
    {...props}
  >
    <VStack
      spacing={{ start: "10px", md: "20px" }}
      w="full"
      p={{ start: "5px", md: "10px" }}
    >
      <HStack w="full">
        <Box bg="#ADADAD" h="20px" w="20px" rounded="full" />
        <Text>Total Deposite</Text>
      </HStack>
      <HStack w="full">
        <Box bg="#00B5D8" h="20px" w="20px" rounded="full" />
        <Text>Total Used</Text>
      </HStack>
      <HStack w="full">
        <Box bg="#38A169" h="20px" w="20px" rounded="full" />
        <Text>Account Balance</Text>
      </HStack>
    </VStack>
    <Stack alignItems="center" justifyContent="center">
      <svg
        width="150px"
        height="150px"
        viewBox="0 0 120 120"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#ADADAD"
          strokeWidth="1"
          pathLength="100"
          strokeDasharray="100"
          strokeLinecap="round"
        />
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#00B5D8"
          strokeWidth="5"
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset={Math.floor((props.usage * 100) / props.total) + 100}
          strokeLinecap="round"
        />
        <circle
          cx="60"
          cy="60"
          r="48"
          fill="none"
          stroke="#38A169"
          strokeWidth="5"
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset={
            Math.floor((props.balance * 100) / props.total) + 100
          }
          strokeLinecap="round"
        />
      </svg>
      <VStack color="whiteAlpha.900" pos="absolute" spacing="0">
        <Text>Used Amount</Text>
        <Text fontSize="25px">{props.usage}$</Text>
      </VStack>
    </Stack>
  </Stack>
);

const MoneyDetails = (porps: {
  balance: number;
  usage: number;
  total: number;
}) => (
  <VStack spacing="10px" w={{ start: "full", md: "full" }} maxW="400px">
    <Text
      w="full"
      fontSize="20px"
      bg="green.900"
      color="green.100"
      p="10px"
      px="20px"
      rounded="10px"
    >
      Current Balance : {porps.balance + "$"}
    </Text>

    <Text
      w="full"
      fontSize="20px"
      bg="cyan.900"
      color="cyan.100"
      p="10px"
      px="20px"
      rounded="10px"
    >
      Used Blance : {porps.usage + "$"}
    </Text>
    <Text
      w="full"
      fontSize="20px"
      bg="red.900"
      color="red.100"
      p="10px"
      px="20px"
      rounded="10px"
    >
      Total Deposite : {porps.total + "$"}
    </Text>
  </VStack>
);

export default () => {
  const { wallet, usageWallet } = state.useStore((e) => e.infos);
  // console.log(state.useStore((e) => e));

  console.log("usageWallet");
  console.log(usageWallet);
  console.log(wallet);
  console.log(
    Math.floor((usageWallet + wallet * 100) / (usageWallet + wallet))
  );

  const [place, setPlace] = useState(100);

  const ref = useRef(null);
  // useOutsideClick({
  //   ref: ref,
  //   handler: () => setPlace(() => 100),
  // });

  return (
    <VStack
      w="full"
      alignItems="center"
      justifyContent="center"
      // bg="black.0"
      bg={{ start: "", md: "black.0" }}
      rounded="15px"
      // p="20px"
      p={{ start: "5px", md: "20px" }}
      spacing="30px"
    >
      <Purcentage
        total={wallet + usageWallet}
        usage={usageWallet}
        balance={wallet}
        w="full"
      />
      <MoneyDetails
        total={wallet + usageWallet}
        usage={usageWallet}
        balance={wallet}
      />
      <VStack
        w="full"
        top="20px"
        spacing={{ start: "5px", md: "20px" }}
        maxW="400px"
      >
        <Text
          fontSize="16px"
          fontWeight="bold"
          cursor="pointer"
          textAlign="center"
          w="full"
          // borderBottom="1px solid white"
          // _hover={{ color: "blue", borderColor: "blue" }}
          bg="black.0"
          p="10px"
          rounded="5px"
          onClick={() => state.updateState({ place: "history" })}
        >
          check your payment history
        </Text>
        <Divider pb="10px" w="100px" borderColor="#FFFFFF5F" />
        <Text fontSize="30px">add money</Text>
        <PayComponent />
        {/* <HStack w="full" justifyContent="space-around"> */}
        {/* <Button bg="black" fontSize="16px" borderRadius="5px" rounded="10px">
            telegram
          </Button>

          <Link
            //className="donate-with-crypto"
            as={Button}
            textDecoration="none"
            _hover={{ textDecor: "none" }}
            _active={{ textDecor: "none" }}
            _visited={{ textDecor: "none" }}
            bg="black"
            //py="20px"
            rounded="10px"
            fontWeight="bold"
            href="https://commerce.coinbase.com/checkout/9263b4d7-4cf2-4ba4-9a9a-8bfaee727f5c"
          >
            Crypto
          </Link>
          <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807"></script> */}
        {/* <Button bg="black" fontSize="16px" borderRadius="5px" rounded="10px">
            stripe
          </Button> */}
        {/* </HStack> */}
      </VStack>
      <History />
    </VStack>
  );
};
