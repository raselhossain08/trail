import { ChakraProps, HStack, Text, transition } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default (
  props: ChakraProps & { number: number; current: number; setplace: any }
) => {
  const max = Math.floor(props.number / 10) + 1;

  const place = props.current;

  const paginationItems = (i: number, max: number) => {
    let array: any = [];

    for (let index = i - 1; index <= i + 1 && index <= max; index++)
      if (!(index < 1)) array.push(index);

    return array as number[];
  };

  const Elmnt = (prop: {
    text: string;
    empty?: boolean;
    selected?: boolean;
  }) => (
    <Text
      p="10px"
      px={{ start: "20px", md: "20px" }}
      fontWeight="bold"
      bg={prop.empty ? "" : prop.selected ? "#125298" : "black.0"}
      rounded="5px"
      cursor="pointer"
      as={motion.div}
      whileHover={{
        backgroundColor: prop.empty ? "rgba(0,0,0,0)" : "#125298",
        transition: { duration: 0.2 },
      }}
      onClick={() => {
        !prop.selected && props.setplace(parseInt(prop.text));
      }}
    >
      {`${prop.text}`}
    </Text>
  );

  return (
    <HStack spacing={{ start: "20px", mds: "20px" }} {...props} w="full">
      {paginationItems(place, max).map((e, i) => {
        console.log(e);

        const isEmpty = e == 0 ? ". . ." : e;
        return (
          <Elmnt
            key={i}
            text={isEmpty.toString()}
            selected={place == e}
            empty={e === 0}
          />
        );
      })}
    </HStack>
  );
};
