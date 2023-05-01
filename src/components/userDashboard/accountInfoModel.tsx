import {
  Button,
  CloseButton,
  HStack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default (props: { isOpen: boolean; onClose: () => void }) => {
  const cancelRef = useRef(null);

  return (
    <AlertDialog
      {...props}
      isCentered
      size={{ start: "md", md: "md" }}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay bg="rgb(0,0,0,100%)" />

      <AlertDialogContent bg="rgb(0,0,0,20%)">
        <AlertDialogBody
          opacity={1}
          bg="rgb(0,0,0,20%)"
          backdropFilter="blur(10px)"
          border="none"
          p="10px"
          rounded="15px"
        >
          <VStack
            spacing="20px"
            // w="full"
            //  maxW="full"
            p="20px"
            mt="20px"
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
            textAlign="center"
          >
            <CloseButton
              bg="whiteAlpha.400"
              color="white"
              h="30px"
              w="30px"
              size="lg"
              onClick={() => props.onClose()}
            />
            <Text fontSize="30px">account details</Text>
            <HStack
              w="auto"
              // maxW="300px"
              justifyContent="space-between"
            >
              <Button color="red.100" bg="red.900">
                view
              </Button>
              <Button color="green.100" bg="green.900">
                download
              </Button>
            </HStack>
            <Text fontSize="30px">other details you wanna see here </Text>
          </VStack>
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  );
};
