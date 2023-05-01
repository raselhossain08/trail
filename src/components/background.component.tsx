import { Box, HStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default () => {
  return (
    <Box
      pos="fixed"
      h="100vh"
      w="100vw"
      zIndex={-1}
      // filter={{ start: "blur(300px)", md: "blur(400px)" }}
      // css="-webkit-filter: blur(300px); -ms-filter: blur(300px); -moz-filter: blur(300px);"
      overflow="hidden"
      //bg="rgb(260,260,260,10%)"
      // transform={{ start: "rotate(180deg)", md: "rotate(0deg)" }}
    >
      <Image src="/ads-project/background.png" h="full" w="full" />
      {/* <Image
        pos="absolute"
        //  display={{ start: "block", md: "block" }}
        // transform={{ start: "rotate(90deg)", md: "rotate(0deg)" }}
        overflow="visible"
        as={motion.img}
        animate={{
          height: ["100%", "200%", "100%", "100%", "100%", "200%", "100%"],
          left: ["0%", "0%", "0%", "-5%", "0%", "-5%", "5%", "0%", "0%"],
          top: ["0%", "5%", "-5%", "0%", "5%", "0%", "0%", "-5%", "0%"],
          rotate: [
            "0deg",
            "10deg",
            "0deg",
            "-10deg",
            "-20deg",
            "-10deg",
            "0deg",
          ],
          transition: { duration: 100, repeat: Infinity },
        }}
        display={{ start: "block", md: "start" }}
        src="/ads-project/mobile-background.png"
        top="0"
        left="0"
        h="full"
        w="full"
        objectFit="cover"
      />
      <Image
        pos="absolute"
        //  display={{ start: "block", md: "block" }}
        transform={{ start: "rotate(90deg)", md: "rotate(0deg)" }}
        overflow="visible"
        as={motion.img}
        animate={{
          height: ["100%", "200%", "100%", "50%", "100%", "200%", "100%"],
          left: ["0%", "0%", "0%", "-5%", "0%", "-5%", "5%", "0%", "0%"],
          top: ["0%", "5%", "-5%", "0%", "5%", "0%", "0%", "-5%", "0%"],
          rotate: [
            "0deg",
            "90deg",
            "0deg",
            "-90deg",
            "-180deg",
            "-90deg",
            "0deg",
          ],
          transition: { duration: 100, repeat: Infinity },
        }}
        display={{ start: "none", md: "block" }}
        src="/background.png"
        top="0"
        left="0"
        h="full"
        w="full"
        objectFit="cover"
      /> */}
    </Box>
  );
};
