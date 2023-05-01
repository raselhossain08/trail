import {
  HStack,
  Image,
  Text,
  VStack,
  ComponentWithAs,
  IconProps,
  Divider,
  Box,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  DasboardIcon,
  GiftIcon,
  History,
  Person,
  Video,
  WalletIcon,
  WarningIcon,
} from "./icons";
import { useState } from "react";
import state from "utils/state";
import { ProfileModel } from "./userDashboard/profileModel";

export const Profile = () => {
  const profileDiscloser = useDisclosure();
  let wallet = state.useStore((e) => e.infos.wallet);
  let name = state.useStore((e) => e.infos.name).split(" ");

  const profile = state.useStore((e) => e.infos);

  if (name.length > 2) name = name.slice(0, 2);

  const RandomColor = `hsl(${Math.floor(Math.random() * 360)}deg, 100%, 90%)`;

  // if (Name === "") return <Box />;

  return (
    <HStack
      alignItems="center"
      p={{ start: "20px", md: "10px" }}
      spacing={{ start: "20px", md: "10px" }}
      bg="black.0"
      rounded="15px"
      maxH="100px"
      h="auto"
      w="full"
      cursor="pointer"
      as={motion.div}
      whileHover={{ backgroundColor: "rgba(0,0,0,1)" }}
      onClick={() => profileDiscloser.onToggle()}
      //flexDirection="column"
    >
      <ProfileModel {...profileDiscloser} profile={profile} />
      <Image
        src="/ads-project/pic.jpg"
        h="80px"
        // w="50%"
        objectFit="cover"
        bg={RandomColor}
        // p="5px"
        rounded="10px"
      />
      <VStack
        alignItems="start"
        // spacing="20px"
        //  justifyContent="space-between"
        // bg="blue"
        //  spacing={{ start: "20px", md: "10px" }}
        h="full"
        w="50%"
        fontWeight="bold"
        overflow="hidden"
      >
        {name.map((e: string, i: number) => (
          <Text key={i * 90}>{e}</Text>
        ))}
        <HStack>
          <WalletIcon />
          <Text>{": " + wallet + "$"}</Text>
        </HStack>
        {/* <Text bg="purple.500" p="5px" rounded="5px" w="full" textAlign="start">
          Role : user
        </Text>
        <Text bg="green.400" p="5px" rounded="5px" w="full" textAlign="start">
          Sold : ${wallet}
        </Text>
        <Text
          bg="red.600"
          p="5px"
          rounded="5px"
          w="full"
          textAlign="start"
          onClick={() => state.changeView("history")}
        >
          History
        </Text> */}
        {/* {Name.map((e: string, i: number) => (
          <Text key={i}>{e}</Text>
        ))} */}
      </VStack>
    </HStack>
  );
};
export const SupportLeftSideBar = () => (
  <HStack
    p="20px"
    rounded="15px"
    w="full"
    cursor="pointer"
    bg="#1F3D2B"
    color="#8DFFBD"
    fontWeight="bold"
    spacing="10px"
  >
    <Image src="/support-user.svg" />
    <Text> Support 24/7</Text>
  </HStack>
);

export const DashboardItemTitle = (props: {
  name: string;
  icon: ComponentWithAs<"svg", IconProps>;
  action?: string;
  childrens?: {
    name: string;
    action: string;
    icon: ComponentWithAs<"svg", IconProps>;
  }[];
}) => {
  const [view, setView] = useState(false);

  const childProps = {
    p: "5px",
    pl: "10px",
    w: "full",
    rounded: "5px",
    as: motion.div,
    spacing: "10px",
    whileHover: {
      color: "#FF5050",
      backgroundColor: "#460000",
      scale: 1,
      transition: { duration: 0.2, type: "tween" },
    },
  };

  return (
    <VStack
      p="10px"
      pt="15px"
      rounded="10px"
      as={motion.div}
      whileHover={{ backgroundColor: "rgba(0,0,0,1)" }}
      w="full"
      cursor="pointer"
      spacing="0px"
      alignItems="start"
      userSelect="none"
      overflow="hidden"
      onClick={() =>
        props.childrens ? !view && setView(() => !view) : props.action
      }
      pos="relative"
    >
      <HStack
        key="i"
        w="full"
        justifyContent="space-between"
        alignItems="start"
        onClick={() =>
          props.childrens
            ? setView((e) => !e)
            : state.updateState({ place: props.action })
        }
        pos="relative"
      >
        <HStack spacing="20px" alignItems="start" justifyContent="start">
          <props.icon h="23px" w="20px" pt="3px" />
          <Text maxW={{ start: "full", md: "150px" }}>{props.name}</Text>
        </HStack>
        {props.childrens && (
          <Stack
            right="0"
            top="3px"
            pos="absolute"
            h="auto"
            w="20px"
            maxW="20px"
            as={motion.div}
            animate={{
              transform: view ? "rotate( 90deg) " : "rotate( 270deg) ",
            }}
            alignItems="start"
            justifyContent="start"
          >
            <ArrowLeft h="20px" w="20px" />
          </Stack>
        )}
      </HStack>
      {props.childrens && (
        <AnimatePresence exitBeforeEnter>
          {view && (
            <>
              <Divider border="none" h="10px" borderBottom="green" />
              <VStack
                alignItems="start"
                key="u"
                w="full"
                spacing="10px"
                h="0px"
                opacity={0}
                as={motion.div}
                animate={{ height: "auto", opacity: [0, 1, 1] }}
                exit={{
                  height: "0px",
                  opacity: [1, 0],
                  transition: { duration: 0.3, type: "tween" },
                }}
                rounded="10px"
                mt="10px"
                color="#828282"
              >
                <>
                  <Text />
                  {props.childrens.map((e, i) => (
                    <HStack
                      {...childProps}
                      key={i}
                      onClick={() => state.updateState({ place: e.action })}
                    >
                      <e.icon h="20px" w="20px" />
                      <Text> {e.name} </Text>
                    </HStack>
                  ))}
                </>
              </VStack>
            </>
          )}
        </AnimatePresence>
      )}
      <Box
        pos="absolute"
        h="full"
        w="full"
        top="0"
        left="0"
        zIndex={-1}
        as={motion.div}
        animate={{ backgroundColor: view ? "#000000" : "#00000000" }}
      />
    </VStack>
  );
};

export const leftsidebar_Data = [
  [
    {
      name: "dashboard",
      icon: DasboardIcon,
      childrens: [
        { name: "history", icon: History, action: "history" },
        { name: "wallet", icon: WalletIcon, action: "wallet" },
      ],
    },
    { name: "gift cards", icon: GiftIcon, action: "gift" },
    {
      name: "accounts",
      icon: Person,
      childrens: [
        { name: "facebook", icon: DasboardIcon, action: "facebook" },
        { name: "tiktok", icon: DasboardIcon, action: "tiktok" },
        { name: "instagram", icon: DasboardIcon, action: "instagram" },
        { name: "Stripe", icon: DasboardIcon, action: "stripe" },
        { name: "Ltd Uk", icon: DasboardIcon, action: "ltd" },
      ],
    },
    { name: "wise card", icon: WalletIcon, action: "wiseCard" },
    { name: "stripe + Ltd", icon: WalletIcon, action: "StripeLtd" },
  ],
  [
    {
      name: "top up wallet",
      icon: WalletIcon,
      action: "topup",
      // childrens: [
      //   { name: "N26", icon: DasboardIcon, action: "N26" },
      //   { name: "crypto", icon: DasboardIcon, action: "crypto" },

      //   { name: "bank", icon: DasboardIcon, action: "tiktok" },
      //   { name: "paysera", icon: DasboardIcon, action: "instagram" },
      //   { name: "wise", icon: DasboardIcon, action: "instagram" },
      // ],
    },
    {
      action: "tutorial",
      name: "tutorial videos",
      icon: Video,
      childrens: [
        { name: "facebook", icon: DasboardIcon, action: "tutorial" },
        { name: "instagram", icon: DasboardIcon, action: "tutorial" },
        { name: "tiktok", icon: DasboardIcon, action: "tutorial" },
      ],
    },
  ],
];

export const leftSideBarItems = leftsidebar_Data.map((slice, slic_key) => (
  <VStack
    key={slic_key}
    spacing="10px"
    alignItems="end"
    p="10px"
    bg="black.0"
    rounded="10px"
    h="full"
    w="full"
  >
    {slice.map((title, title_key) => (
      <DashboardItemTitle {...title} key={title_key} />
    ))}
  </VStack>
));

export default () => {
  return (
    <VStack
      spacing="10px"
      alignItems="center"
      w="230px"
      minW="230px"
      pt=".85rem"
      display={{ start: "none", md: "flex" }}
    >
      <Profile />
      {leftSideBarItems.map((item) => item)}
      <SupportLeftSideBar />
    </VStack>
  );
};
