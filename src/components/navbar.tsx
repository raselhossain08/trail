import {
  Box,
  ComponentWithAs,
  HStack,
  IconProps,
  Image,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import state from "utils/state";
import {
  EditBoxLine,
  Home_6Line,
  LogoutBoxRLine,
  NotificationBadgeLine,
  Translate_2,
} from "./icons";
import MobileNavbar from "./mobileNavbar";
import NotificationModal from "./userDashboard/notification.modal";

export const Logo = () => (
  <Image src="/ads-project/logo_prev_ui.png" h="75px" />
);

const NavbarButton = (props: { text: string; children?: JSX.Element }) => (
  <Text
    as={motion.span}
    bg="transparent"
    fontWeight="bold"
    p="10px"
    rounded="5px"
    cursor="pointer"
    whileHover={{
      backgroundColor: "#39214F",
      color: "#B565FF",
      transition: { duration: 0.2 },
    }}
    whiteSpace="nowrap"
  >
    {props.text}
    {props.children}
  </Text>
);

export const NavbarIcon = (props: {
  icon: ComponentWithAs<"svg", IconProps>;
  setHover: Dispatch<SetStateAction<number>>;
  place: number;
  i: number;
  label: string;
}) => {
  console.log(props.i == props.place);

  return (
    <Tooltip label={props.label}>
      <VStack
        as={motion.div}
        cursor="pointer"
        w="40px"
        h="40px"
        //bg="gray"
        alignContent="center"
        justifyContent="center"
        whileHover={{
          //  backgroundColor: "#F2F2F2",
          color: "#A550F5",
          transition: { duration: 0.2 },
        }}
        // p="10px"
        onHoverStart={() => props.setHover(() => props.i)}
        onClick={() => props.setHover(() => 100)}
        // onHoverEnd={() => props.setHover(() => 100)}
        rounded="0px"
        pos="relative"
        spacing="0"
      >
        {props.place == props.i && (
          <Box
            as={motion.div}
            layoutId="i"
            //  data-isOpen={hover}
            top="0px"
            left="0"
            h="full"
            w="full"
            pos="absolute"
            zIndex={3}
            rounded="0px"
            borderBottom="2px solid #A550F5"
          />
        )}

        <props.icon h="25px" w="25px" zIndex={4} />
      </VStack>
    </Tooltip>
  );
};

export default () => {
  const [changeBg, setChangeBg] = useState(true);
  const [hover, setHover] = useState(100);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navbarDiscoulser = useDisclosure();

  const NavbarIcons: [ComponentWithAs<"svg", IconProps>, string][] = [
    [
      (props) => (
        <Home_6Line
          {...props}
          onClick={() => {
            state.changeView("home");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        />
      ),
      "home",
    ],
    [
      (props) => (
        <NotificationBadgeLine
          {...props}
          onClick={() => {
            // state.toggelNotification();
            onOpen();
          }}
        />
      ),
      "notification",
    ],
    [EditBoxLine, "blog"],
    //    [Translate_2, "language"],
    [
      (props) => (
        <LogoutBoxRLine
          {...props}
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        />
      ),
      "logout",
    ],
  ];

  const scrollFunction = () => {
    if (window.pageYOffset > 10) setChangeBg(() => true);
    else setChangeBg(() => false);
  };

  const place = state.useStore((e) => e.place);

  useEffect(() => {
    navbarDiscoulser.onClose();
  }, [place]);

  // const place = state.useStore((e) => e.place);

  // console.log("place ;;;;;");
  // console.log(place);

  // useEffect(() => {
  //   console.log("changed .......");
  //   navbarDiscoulser.onClose();
  // }, [place]);

  useEffect(() => {
    scrollFunction();
    window.addEventListener("scroll", (e) => scrollFunction());
    return window.removeEventListener("scroll", (e) => scrollFunction());
  }, []);

  console.log(hover);
  // const N = (e) => <MobileNavbar {...e} />;
  return (
    <Stack
      pos="fixed"
      w="full"
      alignItems="center"
      justifyContent="center"
      h="75px"
      left="0"
      top="0"
      backdropFilter={changeBg ? "blur(20px)" : "none"}
      bg={changeBg ? "black.0" : "none"}
      zIndex={1}
    >
      <HStack
        w="full"
        h="full"
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        borderWidth="1px"
        borderColor="transparent"
        borderBottomColor="#FFFFFF0F"
        //      bg="gray"
        //spacing="270px"
        px="20px"
        pos="relative"
      >
        <NotificationModal isOpen={isOpen} onClose={onClose} />
        <Logo />
        <MobileNavbar {...navbarDiscoulser} />
        <Image
          src="/ads-project/menu-icon.svg"
          cursor="pointer"
          onClick={() => navbarDiscoulser.onOpen()}
          display={{ start: "block", md: "none" }}
        />
        <HStack
          h="full"
          w="400px"
          spacing="30px"
          justifyContent="end"
          alignItems="center"
          as={motion.div}
          onHoverEnd={() => setHover(() => 100)}
          display={{ start: "none", md: "flex" }}
        >
          {NavbarIcons.map((e, i) => (
            <NavbarIcon
              key={i}
              setHover={setHover}
              place={hover}
              i={i}
              icon={e[0]}
              label={e[1]}
            />
          ))}

          {/* <NavbarButton text="home" />
          <NavbarButton text="new release" />
          <NavbarButton text="blog" />
          <NavbarButton text="notifications" />
          <NavbarButton text="language" /> */}
        </HStack>
      </HStack>
    </Stack>
  );
};
