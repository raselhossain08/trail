import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { warranty } from "utils/dasboard.action";

const WarrentyItem = (props: { data: any }) => (
  <AccordionItem
    border="none"
    py="10px"
    as={motion.div}
    p="10px"
    rounded="10px"
    whileHover={{ backgroundColor: "rgba(0,0,0,0.3)" }}
  >
    <h2>
      <AccordionButton _expanded={{ bg: "black" }} p="10px" rounded="5px">
        <Box flex="1" textAlign="left">
          {props.data.title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} color="#bdbdbd">
      {props.data.content}
    </AccordionPanel>
  </AccordionItem>
);

const Warrenty = (props: { data: any[] }) => (
  <Accordion allowMultiple w="full" bg="black.0" p="10px" rounded="10px">
    {props.data.map((e, i) => (
      <WarrentyItem key={i * 23} data={e} />
    ))}
  </Accordion>
);

export default () => {
  const [data, setData] = useState<any[]>([]);
  useState(() => {
    warranty().then((res) => {
      console.log(res?.msg[0].title);

      if (res) setData(() => res.msg as any as any[]);
    });
  });

  return (
    <VStack
      p="20px"
      w="full"
      alignItems="center"
      spacing="20px"
      bg="black.0"
      rounded="10px"
      justifyContent="start"
    >
      <Text></Text>
      <Image src="/ads-project/profile.png" w="150px" />
      <Text fontSize="30px" textAlign="center">
        you have a problem sir ?
      </Text>
      <Text color="#BDBDBD" textAlign="center" maxW="400px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </Text>
      <Text></Text>
      {/* {data.length > 0 && <Warrenty data={data} />} */}
      <Accordion allowMultiple w="full" bg="black.0" p="10px" rounded="10px">
        <WarrentyItem
          // key={i * 23}
          data={{
            title: "some title here",
            content:
              "okjsjkhsdq hqs sdds qus sd udsq sd gds GU g qs sdqug sd gu  sdg sd gsd gsdq  g",
          }}
        />
      </Accordion>
      <Text cursor="pointer" _hover={{ borderBottom: "2px solid white" }}>
        you still have a problem ? reach us on telegram
      </Text>
    </VStack>
  );
};
