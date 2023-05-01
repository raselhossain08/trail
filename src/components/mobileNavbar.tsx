import {
  CloseButton,
  HStack,
  Modal,
  ModalContent,
  ModalOverlay,
  VStack,
  useOutsideClick,
  useDisclosure,
  ComponentWithAs,
  IconProps,
  Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import state from "utils/state";
import { useTraceUpdate } from "utils/useTrace";
import {
  EditBoxLine,
  Home_6Line,
  LogoutBoxRLine,
  NotificationBadgeLine,
  Translate_2,
} from "./icons";
import { leftSideBarItems, Profile, SupportLeftSideBar } from "./left.side.bar";
import NotificationModal from "./userDashboard/notification.modal";

export const NavbarIcon = (props: {
  icon: ComponentWithAs<"svg", IconProps>;
  label: string;
}) => {
  return (
    <Tooltip label={props.label}>
      <VStack
        cursor="pointer"
        w="40px"
        h="40px"
        alignContent="center"
        justifyContent="center"
        rounded="0px"
        pos="relative"
        spacing="0"
      >
        <props.icon h="25px" w="25px" zIndex={4} />
      </VStack>
    </Tooltip>
  );
};

export default (props: { isOpen: boolean; onClose: () => void }) => {
  const ref = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hover, setHover] = useState(100);
  const navigate = useNavigate();

  //const openNotification = state.useStore((e) => e.notification);
  // if (!openNotification) onOpen();

  // useEffect(() => {
  //   if (!openNotification) onOpen();
  // }, [state.useStore((e) => e.notification)]);

  useOutsideClick({
    ref: ref,
    handler: () => props.onClose(),
  });

  const NavbarIcons: [ComponentWithAs<"svg", IconProps>, string][] = [
    [
      (props: any) => (
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
      (props: any) => (
        <NotificationBadgeLine
          {...props}
          onClick={() => {
            //   state.toggelNotification();
            onOpen();
          }}
        />
      ),
      "notification",
    ],
    [EditBoxLine, "blog"],
    [Translate_2, "language"],
    [
      (props) => (
        <LogoutBoxRLine
          {...props}
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        />
      ),
      "logout",
    ],
  ];

  useTraceUpdate(props);

  return (
    <Modal {...props} size="full" scrollBehavior="outside">
      <ModalOverlay
        bg="rgb(0,0,0,50%)"
        backdropFilter="blur(20px)"
        display={{ start: "block", md: "none" }}
      />

      <ModalContent bg="rbg(0,0,0,0%)" display={{ start: "block", md: "none" }}>
        <VStack
          spacing="10px"
          alignItems="center"
          w="full"
          px="5%"
          pt="30px"
          ref={ref}
        >
          <NotificationModal isOpen={isOpen} onClose={onClose} />

          <HStack w="full" justifyContent="end">
            <CloseButton
              color="white"
              bg="black"
              rounded="5px"
              onClick={() => props.onClose()}
            />
          </HStack>

          <HStack
            h="70Px"
            w="full"
            spacing="30px"
            justifyContent="space-between"
            alignItems="center"
            as={motion.div}
            onHoverEnd={() => setHover(() => 100)}
          >
            {NavbarIcons.map((e, i) => (
              <NavbarIcon key={i} icon={e[0]} label={e[1]} />
            ))}
          </HStack>
          <Profile />

          {leftSideBarItems.map((e) => e)}

          <SupportLeftSideBar />
        </VStack>
      </ModalContent>
    </Modal>
  );
};
