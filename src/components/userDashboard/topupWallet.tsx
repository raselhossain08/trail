import {
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { WalletIcon } from "components/icons";
import { useState } from "react";

export const PaymentMobile = (props: {
  text: string;
  svg: string;
  selected: boolean;
}) => (
  <HStack
    w="full"
    bg={props.selected ? "green" : ""}
    rounded="10px"
    p="5px"
    px="20px"
    spacing="10px"
    alignItems="center"
    justifyContent="start"
    cursor="pointer"
    maxW="350px"
    // whileHover={{ backgroundColor: "#000000" }}
    pos="relative"
    // flexDirection={{ start: "row", mds: "row" }}
    py={{ start: "px", mds: "0px" }}
    border="2px solid #FFFFFF00"
    borderColor={props.selected ? "gray" : "gray"}
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
  </HStack>
);

export const PayComponent = () => {
  const [place, setPlace] = useState(100);

  return (
    <VStack
      w="full"
      maxW="400px"
      //      spacing="20px"
      spacing={{ start: "5px", md: "20px" }}
      // bg="whiteAlpha.100"
      p="10px"
      py="20px"
      rounded="10px"
      alignItems="center"
      justifyContent="center"
    >
      <Stack w="full" alignItems="center" onClick={() => setPlace(() => 1)}>
        <PaymentMobile
          selected={place == 1}
          text="And other credit cards"
          svg="/ads-project/visa.svg"
        />
      </Stack>
      <Stack w="full" alignItems="center" onClick={() => setPlace(() => 2)}>
        <PaymentMobile
          selected={place == 2}
          text="Ccp for algerian users"
          svg="/ads-project/ccp.png"
        />
      </Stack>
      <Stack w="full" alignItems="center" onClick={() => setPlace(() => 3)}>
        <PaymentMobile
          selected={place == 3}
          text="BaridiMob payment"
          svg="/ads-project/ccp.png"
        />
      </Stack>
      <Stack w="full" alignItems="center" onClick={() => setPlace(() => 4)}>
        <PaymentMobile
          selected={place == 4}
          text="Secure crypto payment"
          svg="/ads-project/bitcoin.png"
        />
      </Stack>
      <Stack w="full" alignItems="center" onClick={() => setPlace(() => 5)}>
        <PaymentMobile
          selected={place == 5}
          text="wise payment "
          svg="/ads-project/bitcoin.png"
        />
      </Stack>
      <Stack w="full" alignItems="center" onClick={() => setPlace(() => 6)}>
        <PaymentMobile
          selected={place == 6}
          text="Paysera payment"
          svg="/ads-project/bitcoin.png"
        />
      </Stack>
      <HStack
        bg="green.900"
        color="green.100"
        maxW="350px"
        mt="20px"
        rounded="5px"
        px={{ start: "5px", md: "20px" }}
        py="5px"
        spacing="10px"
        cursor="pointer"
        w="full"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <HStack w="auto" h="auto" spacing="0px">
          <WalletIcon h="25px" w="25px" />
          <Button bg="transparent" color="green.100">
            pay now
          </Button>
        </HStack>
      </HStack>
    </VStack>
  );
};

export default () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      w="full"
      h="auto"
      rounded="15px"
      bg={{ start: "", md: "black.0" }}
    >
      <VStack
        //        spacing="20px"
        spacing={{ start: "5px", md: "20px" }}
        w="full"
        maxW="400px"
        p={{ start: "5px", md: "20px" }}
        mt="20px"
        pos="relative"
        alignItems="center"
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
        <Text fontWeight="bold" fontSize="20px" textAlign="center">
          choose your payment method
        </Text>
        {/* <Text
          w="full"
          textAlign="center"
          p="10px"
          bg="green.900"
          color="green.100"
          rounded="5px"
          cursor="pointer"
          fontWeight="bold"
        >
          use your account sold
        </Text> */}
        <PayComponent />
      </VStack>
    </Stack>
  );
};
