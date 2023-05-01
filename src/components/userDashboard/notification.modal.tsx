import {
  AspectRatio,
  Box,
  HStack,
  Image,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  Text,
  useOutsideClick,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { getNotification } from "utils/dasboard.action";

const NotificationElemnt = (props: {
  pic: string;
  title: string;
  content: string;
}) => (
  <HStack
    w="full"
    //spacing="10px"
    spacing={{ start: "5px", md: "10px" }}
    justifyContent="start"
    alignItems="center"
    // bg="rgb(0,0,0,50%)"
    bg={{ start: "rgb(0,0,0,20%)", md: "rgb(0,0,0,50%)" }}
    p={{ start: "5px", md: "20px" }}
    rounded="30px"
    cursor="pointer"
    backdropFilter="blur(20px)"
  >
    {/* <Text fontWeight="bold" w="50px" h="50px" bg="red" rounded="5px">
      pic
    </Text> */}
    <Image h="50px" w="50px" src="/ads-project/gift-code.png" />
    <Box />
    <VStack
      w="calc(100% - 60px)"
      spacing={{ start: "0px", md: "10px" }}
      //    spacing="10px"
      alignItems="start"
    >
      <Text fontWeight="bold">{props.title}</Text>
      <Text color="#bdbdbd">{props.content}</Text>
    </VStack>
  </HStack>
);

export default (props: { isOpen: boolean; onClose: () => void }) => {
  const [data, setData] = useState<any[] | undefined>();

  const ref = useRef(null);
  useOutsideClick({
    ref: ref,
    handler: () => () => {},
  });

  if (props.isOpen && !data)
    getNotification()
      .then((res) => {
        if (!res) return setData(() => undefined);
        return setData(() => res.reverse());
      })
      .catch((err) => setData(() => undefined));

  // console.log("===>>>   data");
  // console.log(data);
  const cancelRef = useRef(null);

  return (
    <AlertDialog
      {...props}
      size={{ start: "xl", md: "xl" }}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay bg="rgb(0,0,0,20%)" />

      <AlertDialogContent bg="rgb(0,0,0,20%)">
        <AlertDialogBody
          as={motion.div}
          opacity={0}
          animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
          bg={{ start: "rgb(0,0,0,30%)" }}
          backdropFilter="blur(10px)"
          border="none"
          p="10px"
          rounded="15px"
        >
          <VStack
            spacing={{ start: "5px", md: "20px" }}
            w="full"
            maxW="full"
            p={{ start: "5px", md: "20px" }}
            ref={ref}
            pos="relative"
            alignItems="start"
            h="50vh"
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
            <Text fontWeight="bold" fontSize="20px">
              notification
            </Text>
            <Text></Text>
            {!data ? (
              <Text>no notification</Text>
            ) : (
              data.map((e, i) => <NotificationElemnt {...e} key={i * 43} />)
            )}
          </VStack>
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  );
};
