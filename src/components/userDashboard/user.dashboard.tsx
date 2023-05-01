import { HStack, VStack } from "@chakra-ui/react";
import LeftSideBar from "components/left.side.bar";
import Navbar from "components/navbar";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCategory, userInfos, useWallet } from "utils/api";
import state from "utils/state";
import ContentManagment from "./content.managment";
import Loading from "./loading";

export default () => {
  const token = localStorage.getItem("token");
  const [isReady, setReady] = useState(false);

  //  const name = state.useStore((e) => e.infos.name);

  //if (name) setReady(() => true);
  //if (!isReady)
  // useEffect(() => {
  //   if (!localStorage.getItem("token")) return navigate("/login");
  //   const controller = new AbortController();

  //   (async () => (
  //     console.log("loading"),
  //     await state.userInfos(controller),
  //     controller.abort(),
  //     setReady(() => true)
  //   ))();
  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  //return <Loading />;

  const load = useCallback(async () => {
    return await Promise.all([userInfos(), getCategory()]).then((res) => {
      if (!res[0]) return (window.location.href = "/");
      state.updateState(res.reduce((a, b) => ({ ...a, ...b }), {}));
      state.updateState();
      setReady(() => true);
    });
  }, []);

  useState(load);

  if (!token) window.location.href = "/";

  if (!isReady) return <Loading />;

  return (
    <VStack w="full" maxW="1200px">
      <Navbar />
      <HStack
        // pt="95px"
        pt={{ start: "60px", md: "9 5px" }}
        justifyContent="space-between"
        alignItems="start"
        w="full"
        px={{ start: "0px", md: "20px" }}
        pb="50px"
      >
        <LeftSideBar />
        <ContentManagment />
      </HStack>
    </VStack>
  );
};
