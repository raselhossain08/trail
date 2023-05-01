import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Button,
  ChakraProps,
  CloseButton,
  Divider,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Pagination from "components/pagination";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getAccounts } from "utils/dasboard.action";
import BuyModal from "./buy.modal";
import { facebookCategories } from "./categories";

const ImageModel = (props: {
  isOpen: boolean;
  onClose: () => void;
  image: string;
}) => {
  const cancelRef = useRef(null);

  return (
    <AlertDialog {...props} size="full" leastDestructiveRef={cancelRef}>
      {/* <AlertDialogOverlay bg="rgb(0,0,0,70%)" /> */}

      <AlertDialogContent bg="rgb(0,0,0,0%)">
        <AlertDialogBody pos="relative" h="full" w="full">
          <CloseButton
            pos="relative"
            top="0"
            left="50%"
            bg="whiteAlpha.400"
            color="white"
            h="30px"
            w="30px"
            size="lg"
            onClick={() => props.onClose()}
          />
          <Stack alignItems="center" justifyContent="center">
            <Box
              as={motion.div}
              onHoverEnd={() => {
                // props.onClose();
              }}
              bg="green"
            >
              <Image src={props.image} rounded="" />
            </Box>
          </Stack>
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// const Account = (props: {
//   category: string;
//   title: string;
//   condition: string[];
//   pic: string;
//   price: number;
// }) => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   console.log(props);

//   return (
//     <Stack p="10px" w={{ start: "full", md: "49%" }} alignItems="start">
//       <BuyModal
//         isOpen={isOpen}
//         onClose={onClose}
//         image={props.pic}
//         title={props.title}
//       />
//       <VStack
//         bg="black.0"
//         spacing="20px"
//         p="20px"
//         rounded="10px"
//         w="full"
//         alignItems="start"
//       >
//         <Image
//           src={props.pic}
//           rounded="5px"
//           borderRadius="10px"
//           w="full"
//           h="full"
//           maxH="200px"
//         />
//         <Text fontWeight="bold" fontSize="20px" h="60px" overflow="hidden">
//           {props.title}
//         </Text>

//         <Text>
//           sme deij eie eihe eih ee ie eiheehi eeh ee ih e eh e ihe ie ehihie he
//           he heh e he e he i iehihei hzihs ehes hrhr hve hir hii isis hv q{" "}
//         </Text>

//         <HStack justifyContent="space-between" w="full">
//           <Text
//             fontWeight="bold"
//             fontSize="20px"
//             bg="green.900"
//             color="green.100"
//             p="10px"
//             rounded="10px"
//           >
//             {props.price} £
//           </Text>
//           <Button
//             p="10px"
//             bg="red.900"
//             color="red.100"
//             rounded="7px"
//             onClick={() => onOpen()}
//           >
//             buy now
//           </Button>
//         </HStack>
//       </VStack>
//     </Stack>
//   );
// };

const Account = (props: {
  _id: string;
  category: string;
  title: string;
  condition: string[];
  pic: string;
  price: number;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const imageDisClosure = useDisclosure();
  const [hover, setHover] = useState(false);

  console.log("props.condition");
  console.log(props.category);

  const ref = useRef(null);

  // console.log("ref.current.offsetWidth");
  // useEffect(() => {
  //   console.log((window as any).innerWidth);
  // }, [window.innerWidth]);

  const isOnTop =
    (window as any).innerWidth < 380 ||
    ((window as any).innerWidth < 1050 && (window as any).innerWidth > 767);
  const image = facebookCategories.filter(
    (e) => e.title === props.category && e
  )[0].image;
  return (
    <Stack p="10px" w={{ start: "full", md: "49%" }} alignItems="start">
      <BuyModal
        isOpen={isOpen}
        onClose={onClose}
        image={props.pic}
        title={props.title}
        _id={props._id}
        price={props.price}
      />
      <ImageModel {...imageDisClosure} image={props.pic} />
      <VStack
        bg="black.0"
        spacing="20px"
        p="20px"
        rounded="10px"
        w="full"
        alignItems="start"
        ref={ref}
      >
        <HStack
          w="full"
          justifyContent="start"
          // alignItems={props.title.split(" ").length > 3 ? "start" : "center"}
          alignItems="center"
          spacing="20px"
        >
          <Image
            src={image}
            rounded="5px"
            borderRadius="10px"
            w="50px"
            h="50px"
            maxH="200px"
          />
          <Text fontWeight="bold" fontSize="20px" overflow="hidden">
            {/* Identity Verified FB Ads Accounts - 10 Ads Acc - Limit 50$ */}
            {props.title}
          </Text>
        </HStack>
        {props.condition.slice(0, 3).map((e, i) => (
          <Text>{"● " + e}</Text>
          // // <VStack
          // //   spacing="10px"
          // //   w="full"
          // //   justifyContent="start"
          // //   alignItems="center"
          // // >
          //   {/* <HStack w="full" alignItems="center">
          //     <Text key={i * 90}> ● Can change Currency and Timezone</Text>
          //   </HStack>
          //   <HStack w="full" alignItems="center">
          //     <Text key={i * 90}>
          //       ● Can be used in any country, No proxy required
          //     </Text>
          //   </HStack>
          //   <HStack w="full" alignItems="center">
          //     <Text key={i * 90}>
          //       ● Login with username, password, 2fa, recovery email
          //     </Text>
          //   </HStack> */}
          // {/* </VStack> */}
        ))}

        {isOnTop && (
          <Text
            fontWeight="bold"
            fontSize="20px"
            bg="#01357B"
            color="#56CCF2"
            p="10px"
            rounded="10px"
            w="full"
            textAlign="center"
            cursor="pointer"
            onClick={() => imageDisClosure.onOpen()}
          >
            view now
          </Text>
        )}

        <HStack justifyContent="space-between" w="full" pos="relative">
          <Text
            fontWeight="bold"
            fontSize="20px"
            bg="green.900"
            color="green.100"
            p="10px"
            rounded="10px"
          >
            {props.price} £
          </Text>

          {!isOnTop && (
            <Text
              as={motion.span}
              onHoverStart={() => setHover(() => true)}
              onHoverEnd={() => setHover(() => false)}
              fontWeight="bold"
              fontSize="20px"
              bg="#01357B"
              color="#56CCF2"
              p="10px"
              rounded="10px"
              onClick={() => imageDisClosure.onOpen()}
              cursor="pointer"
            >
              view now
            </Text>
          )}

          {hover && (
            <Image
              src={props.pic}
              pos="absolute"
              top="120%"
              //  w="500px"
              left="0"
            />
          )}
          <Button
            p="10px"
            bg="red.900"
            color="red.100"
            rounded="7px"
            onClick={() => onOpen()}
          >
            buy now
          </Button>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default (props: ChakraProps & { category: string }) => {
  const [data, setData] = useState<any[] | undefined>();
  const [place, setPlace] = useState(1);

  console.log("props.category");
  console.log(data);

  useState(async () => {
    await getAccounts({ category: props.category })
      .then((res) => {
        console.log(res);
        if (res) setData(() => res);
        else setData(() => undefined);
      })
      .catch((err) => console.log(err));
  });

  if (!data)
    return (
      <HStack
        flexDir="row"
        flexWrap="wrap"
        w="full"
        spacing="0"
        bg="black.0"
        rounded="15px"
        justifyContent="space-between"
        alignItems="start"
        p="10px"
        fontSize="30px"
      >
        <Text w="full" textAlign="center"></Text>
      </HStack>
    );

  return (
    <HStack
      flexDir="row"
      flexWrap="wrap"
      w="full"
      spacing="0"
      bg="black.0"
      rounded="15px"
      justifyContent="space-between"
      alignItems="start"
      p="10px"
    >
      {data.slice((place - 1) * 10, (place - 1) * 10 + 10).map((e, i) => (
        <Account key={i * 34} category={props.category} {...e} />
      ))}
      <Divider borderColor="transparent" h="30px" />
      <Pagination
        setplace={(e: any) => setPlace(() => e)}
        current={place}
        number={data.length}
      />
    </HStack>
  );
};
