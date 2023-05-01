import {
  Box,
  Button,
  ChakraProps,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { getCategory } from "utils/api";

const TutosBanner = () => {
  return (
    <Stack
      w="full"
      h="auto"
      bg="black.0"
      mt={"1"}
      alignItems="start"
      rounded="10px"
      flexDirection={{ start: "column", md: "row" }}
    >
      <VStack
        alignItems="flex-start"
        w="full"
        maxW={{ start: "none", md: "400px" }}
        p="20px"
        spacing="30px"
      >
        <Text
          fontSize={{ start: "30px", md: "48px" }}
          lineHeight={{ start: "30px", md: "48px" }}
          fontWeight="bold"
          textAlign="left"
        >
          let us lead you to the moon
        </Text>
        <Text color="#BDBDBD" textAlign="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </Text>
        <Button
          color="white"
          bg="rgb(260,260,260,25%)"
          // bg="red.600"
          borderRadius="0px"
          rounded="5px"
        >
          check our youtube chanel
        </Button>
      </VStack>
      {/* <Box h="300px" w="calc(100% - 400px)" bg="gray" pos="relative" /> */}
      <Box
        w={{ start: "full", md: "calc(100% - 400px)" }}
        h="300px"
        pos="relative"
      >
        <Image
          w={{ start: "150px", mds: "200px", md: "150px", lg: "200px" }}
          src="/ads-project/6200_7_05_prev_ui 1.png"
          pos="absolute"
          top="0"
          left="0"
        />
        <Image
          w={{ start: "150px", mds: "200px", md: "150px", lg: "200px" }}
          src="/ads-project/500_94_prev_ui1 1.png"
          pos="absolute"
          top="calc(65% - 80px)"
          right="0"
        />
        <Image
          w={{ start: "150px", mds: "200px", md: "150px", lg: "200px" }}
          src="/ads-project/500_94_prev_ui 1.png"
          pos="absolute"
          bottom="-120px"
          left="calc(50% - 100px)"
        />
      </Box>
    </Stack>
  );
};

export const VideoLinkCard = (props: ChakraProps & { url: string }) => {
  return (
    <Stack
      // spacing={{ start: "5px", md: "20px" }}
      w="full"
      maxWidth="27.5rem"
      h="full"
      maxH="16.375rem"
      rounded="15px"
      display="flex"
      direction="column"
      alignItems="center"
      justify="center"
      bg="black.0"
      // bg="black"
      cursor="pointer"
    >
      {/* <Image src="/videoIcon.png" w="69px" h="33px" /> */}
      <iframe
        // src="https://fast.wistia.net/embed/iframe/wii6w7ge4t"
        src={props.url}
        title=" [Example Video] Wistia Video Essentials"
        allow="autoplay; fullscreen"
        scrolling="no"
        width="100%"
        height="100%"
      ></iframe>
    </Stack>
  );
};
const VideosCardContainer = () => (
  <Stack
    width="full"
    h="full"
    display="flex"
    direction="column"
    alignItems="center"
    justify="center"
    gap="4rem"
  >
    <Stack
      w="full"
      h="full"
      maxH="16.375rem"
      px="10px"
      display="flex"
      direction={{ start: "column", md: "row" }}
      gap="1rem"
    >
      <VideoLinkCard url="https://fast.wistia.net/embed/iframe/wii6w7ge4t" />
      <VideoLinkCard url="https://fast.wistia.net/embed/iframe/wii6w7ge4t" />
    </Stack>
    <Stack
      w="full"
      h="full"
      maxH="16.375rem"
      px="10px"
      display="flex"
      direction={{ start: "column", md: "row" }}
      gap="1rem"
    >
      <VideoLinkCard url="https://fast.wistia.net/embed/iframe/wii6w7ge4t" />
      <VideoLinkCard url="https://fast.wistia.net/embed/iframe/wii6w7ge4t" />
    </Stack>
  </Stack>
);

export default () => {
  return (
    <VStack
      w="full"
      rounded="15px"
      justifyContent="space-between"
      // spacing="0"
      spacing={{ start: "5px", md: "8" }}
      flexDir="row"
      gap="1rem"
      flexWrap="wrap"
    >
      <TutosBanner />
      <VideosCardContainer />
    </VStack>
  );
};
