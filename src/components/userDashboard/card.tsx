import {
  Button,
  ChakraProps,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Fragment } from "react";
import state from "utils/state";

export const Card = (
  props: ChakraProps & { image: string; type: string; button: string }
) => {
  return (
    <Stack
      w={{ start: "full", md: "calc(50% )" }}
      p="10px"

      // display={{ start: "none", md: "flex" }}
    >
      <VStack
        spacing={{ start: "5px", md: "20px" }}
        justifyContent="space-around"
        w="90%"
        h="full"
        maxH="30rem"
        rounded="15px"
        alignItems="start"
        // p="15px"
        p={{ start: "0px", md: "15px" }}
        bg={{ start: "", md: "black.0" }}
        // bg="black.0"
        {...props}
      >
        <Image
          src={props.image}
          rounded="10px"
          borderRadius="10px"
          w="full"
          h="full"
          maxH="10rem"
        />
        <Text fontWeight="bold" fontSize="1.25rem">
          get you professional {props.type} account now from us
        </Text>
        <Text color="#BDBDBD" fontSize="0.85rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </Text>
        <Button
          w="full"
          bg={props.button}
          onClick={() => state.changeView(props.type)}
        >
          purchase now
        </Button>
      </VStack>
    </Stack>
  );
};

export const GiftCard = () => (
  <Stack
    w={{ start: "full", md: "calc(50% )" }}
    // display={{ start: "none", md: "flex" }}
    p="10px"
  >
    <VStack
      spacing="20px"
      w="90%"
      h="full"
      maxH="30rem"
      // maxW="32rem"
      rounded="15px"
      alignItems="start"
      p="15px"
      bg="black.0"
    >
      <Image
        src={"/gift-cover.png"}
        rounded="10px"
        borderRadius="10px"
        w="full"
        h="full"
        maxH="10rem"
      />
      <Text fontWeight="bold" fontSize="1.25rem">
        enter your coupon now and get easy money
      </Text>
      <Text color="#BDBDBD" fontSize="0.85rem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, per inceptos himenaeos.
      </Text>
      <Button w="full" onClick={() => state.changeView("gift")}>
        use your code
      </Button>
    </VStack>
  </Stack>
);

export const MobileCard = (props: {
  logo: any;
  text: any;
  color: string;
  subText: string;
}) => {
  const RandomColor = `hsl(${Math.floor(Math.random() * 360)}deg, 100%, 50%)`;

  return (
    <Stack w="50%" p="10px">
      <VStack
        w="full"
        p="20px"
        justifyContent="center"
        spacing="5px"
        alignItems="center"
        bg={`hsl(${Math.floor(Math.random() * 360)}deg, 100%, 90%)`}
        color="black"
        fontWeight="bold"
        rounded="30px"
      >
        <Image h="30px" w="30px" src={props.logo} />
        {/* <Text />
      <Text fontWeight="light">{props.text}</Text>
      <Text /> */}

        <Text fontSize="25px">{props.subText}</Text>
        <Text fontWeight="light">account</Text>
      </VStack>
    </Stack>
  );
};

export const MobileCards = () => {
  return (
    <Stack
      w="full"
      flexWrap="wrap"
      display={{ start: "none", md: "none" }}
      justifyContent="space-between"
      spacing="0"
      flexDir="row"
    >
      <MobileCard
        logo="/logo/facebook.svg"
        subText="340"
        text="facebook"
        color="#3ceae6"
      />
      <MobileCard
        logo="/logo/instagram.svg"
        subText="180"
        text="instagram"
        color="#d5bafe"
      />
      <MobileCard
        logo="/logo/whatsapp.svg"
        subText="130"
        text="whatsapp"
        color="#edc9aa"
      />
      <MobileCard
        logo="/logo/facebook.svg"
        subText="300"
        text="facebook"
        color="#ffadae"
      />
    </Stack>
  );
};

export default () => (
  <Fragment>
    <Card image="/facebook-cover.png" type="facebook" button="blue" />
    <Card image="/insta-cover.png" type="instagram" button="#CE1736" />
    <Card image="/tiktok-cover.png" type="tiktok" button="#001B31" />
    <GiftCard />
    <MobileCards />
  </Fragment>
);
