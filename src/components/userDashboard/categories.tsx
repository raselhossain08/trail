import {
  Box,
  Divider,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import state from "utils/state";

export const facebookCategories = [
  { image: "/logo/facebook-page-logo.png", title: "Facebook Pages" },
  { image: "/logo/facebook-logo.png", title: "Aged Accounts" },
  { image: "/logo/facebook-logo.png", title: "Clone Accounts" },
  { image: "/logo/facebook-bm-logo.png", title: "Business Manager (bm)" },
  { image: "/logo/vr-user-logo.png", title: "Verified account (2 line)" },
  { image: "/logo/vr-user-logo.png", title: "Verified account (3 line)" },
];

// const Banner = (props: { name: string; pic: string; content: string }) => (
//   <Box
//     w="full"
//     pos="relative"
//     cursor="pointer"
//     onClick={() => state.changeView("category_" + props.name)}
//   >
//     <Box
//       w="full"
//       h="full"
//       pos="absolute"
//       rounded="10px"
//       bgGradient="linear(to-r, black,#00000000)"
//       zIndex={-1}
//     />
//     <Image
//       pos="absolute"
//       top="0"
//       left="0"
//       h="full"
//       w="full"
//       src={props.pic}
//       rounded="10px"
//       zIndex={-2}
//       objectFit="cover"
//     />
//     <VStack
//       spacing="00px"
//       justifyContent="space-between"
//       //pos="absolute"
//       h="full"
//       p="20px"
//       alignItems="baseline"
//       maxW={{ start: "full", md: "50%" }}
//     >
//       <Text fontSize="30px">{props.name}</Text>
//       <Divider borderColor="transparent" h="30px" w="full" />
//       <Text color="#C2C2C2">{props.content}</Text>
//     </VStack>
//   </Box>
// );

const Category = (props: { image: string; title: string }) => (
  <Stack
    p={{ start: "5px", md: "10px" }}
    maxW={{ start: "full", md: "46%" }}
    w="full"
    pos="relative"
    onClick={() => state.changeView("category_" + props.title)}
  >
    {/* <HStack
      h="full"
      w="full"
      p="20px"
      pl="30px"
      rounded="20px"
      spacing="20px"
      // bg="green.100"
      alignItems="center"
      justifyContent="normal"
      fontSize="20px"
      cursor="pointer"
      top="0"
      left="0"
      pos="absolute"
    >
      <Image src={props.image} h="50px" w="50px" rounded="15px" />
      <Text>{props.title} </Text>
    </HStack> */}

    <HStack
      h="full"
      w="full"
      p="20px"
      rounded="20px"
      spacing="20px"
      bg="rgb(0,0,0,25%)"
      pl="20px"
      alignItems="center"
      justifyContent="normal"
      fontSize="20px"
      cursor="pointer"
      backdropFilter="blur(20px)"
    >
      <Image src={props.image} h="50px" w="50px" rounded="15px" />
      <Text>{props.title} </Text>
    </HStack>
  </Stack>
);

export default (props: { type: string }) => {
  // const types = state.useStore((e) => e.type);
  // if (types.length < 0) return <Spinner />;

  const accounts = {
    facebook: facebookCategories,
  };

  return (
    <Stack
      w="full"
      // spacing="20px"
      spacing={{ start: "0px", md: "0" }}
      //      p="20px"
      p={{ start: "5px", md: "20px" }}
      // bg="black.0"
      rounded="15px"
      flexWrap="wrap"
      flexDir="row"
      bg={{ start: "", md: "black.0" }}
    >
      {facebookCategories.map((e, i) => (
        <Category {...e} key={i * 45} />
      ))}
      {/* {types
        .filter((t: any) => t.type === props.type && t)
        .map((e: any, i: number) => (
          <Banner {...e} key={i * 20} />
        ))} */}
    </Stack>
  );
};
