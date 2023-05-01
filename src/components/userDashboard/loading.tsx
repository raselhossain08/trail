import { Box, HStack, Skeleton, Stack, VStack } from "@chakra-ui/react";

export const ProfileSkelton = () => (
  <HStack
    alignItems="end"
    p={{ start: "20px", md: "10px" }}
    spacing={{ start: "20px", md: "10px" }}
    rounded="15px"
    maxH="170px"
    h="170px"
    w="full"
  >
    <Skeleton h="full" w="50%" rounded="30px" />
    <VStack alignItems="center" justifyContent="space-between" h="full" w="50%">
      <Skeleton
        bg="purple.500"
        p="0px"
        rounded="20px"
        w="full"
        textAlign="start"
      >
        Role : user
      </Skeleton>
      <Skeleton
        bg="green.400"
        p="0px"
        rounded="20px"
        w="full"
        textAlign="start"
      >
        Sold : £ 10
      </Skeleton>
      <Skeleton bg="red.600" p="0px" rounded="20px" w="full" textAlign="start">
        History
      </Skeleton>
    </VStack>
  </HStack>
);
const LeftSizeBarElmntSkeltopn = () => (
  <VStack
    p="10px"
    pt="15px"
    rounded="10px"
    w="full"
    spacing="0px"
    alignItems="start"
  >
    <HStack w="full" justifyContent="space-between" alignItems="start">
      <HStack spacing="20px" alignItems="start" justifyContent="start">
        <Skeleton h="25px" w="25px" pt="3px" rounded="20px" />
        <Skeleton maxW={{ start: "full", md: "full" }} w="220px" rounded="20px">
          some name here rrr
        </Skeleton>
      </HStack>
    </HStack>
  </VStack>
);

const CardSkelton = () => (
  <Stack w={{ start: "full", md: "calc(50% )" }} p="10px">
    <VStack
      //h="450px"
      spacing="20px"
      justifyContent="space-around"
      w="full"
      rounded="15px"
      alignItems="start"
      p="15px"
      bg="black.0"
    >
      <Skeleton rounded="40px" borderRadius="10px" w="full" />
      <Skeleton fontWeight="bold" rounded="10px">
        get you proffisionel some text account now from us
      </Skeleton>
      <Skeleton h="300px" w="full" rounded="10px">
        dd
      </Skeleton>
      <Skeleton w="full" h="40px" rounded="10px">
        purchase now
      </Skeleton>
    </VStack>
  </Stack>
);

export default () => {
  return (
    <VStack w="full" maxW="1200px">
      <HStack
        pt="95px"
        justifyContent="space-between"
        alignItems="start"
        w="full"
        px="20px"
        pb="50px"
      >
        <VStack
          spacing="30px"
          alignItems="center"
          w="300px"
          pt="0px"
          display={{ start: "none", md: "flex" }}
        >
          <VStack w="300px" bg="black.0" rounded="10px">
            <ProfileSkelton />
          </VStack>
          <VStack w="300px" bg="black.0" rounded="10px">
            <LeftSizeBarElmntSkeltopn />
            <LeftSizeBarElmntSkeltopn />
            <LeftSizeBarElmntSkeltopn />
            <LeftSizeBarElmntSkeltopn />
          </VStack>
          <VStack w="300px" bg="black.0" rounded="10px">
            <LeftSizeBarElmntSkeltopn />
            <LeftSizeBarElmntSkeltopn />
            <LeftSizeBarElmntSkeltopn />
            <LeftSizeBarElmntSkeltopn />
            <LeftSizeBarElmntSkeltopn />
          </VStack>
        </VStack>
        <Stack
          flexDir="row"
          flexWrap="wrap"
          spacing="0"
          w="full"
          //pt="10px"
          maxW="850px"
          justifyContent="start"
        >
          <CardSkelton />
          <CardSkelton />
          <CardSkelton />
          <CardSkelton />
        </Stack>
      </HStack>
    </VStack>
  );
};
