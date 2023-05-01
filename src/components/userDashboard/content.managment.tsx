import { Box, HStack, Stack, VStack } from "@chakra-ui/react";
import { lazy, useState } from "react";
import state from "utils/state";
import Accounts from "./accounts";
import Card, { GiftCard } from "./card";
import Categories from "./categories";
import GiftRedeem from "./gift-redeem";
import History from "./history";
import { Wiser } from "./Wiser";
import { StripeLtd } from "./stripeLtd";
import TopupWallet from "./topupWallet";
import Tutorial from "./tutorial";
import Wallet from "./wallet";
import Warranty from "./warranty";

// const Warranty = lazy(() => import("./warranty"));
// const Accounts = lazy(() => import("./accounts"));
// const Wallet = lazy(() => import("./wallet"));
// const Tutorial = lazy(() => import("./tutorial"));
// const History = lazy(() => import("./history"));
// const GiftRedeem = lazy(() => import("./gift-redeem"));

export default () => {
  const place = state.useStore((state) => state.place);

  console.log(place);

  useState(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  let Comp = () => <Card />;
  if (place == "card") return <HStack></HStack>;
  if (place == "wallet") Comp = () => <Wallet />;
  if (place == "history") Comp = () => <History />;
  if (place == "tutorial") Comp = () => <Tutorial />;
  if (place == "warranty") Comp = () => <Warranty />;
  if (place == "gift") Comp = () => <GiftRedeem />;
  if (place == "gift") Comp = () => <GiftRedeem />;
  if (place == "facebook") Comp = () => <Categories type="facebook" />;
  if (place == "instagram") Comp = () => <Categories type="instagram" />;
  if (place == "tiktok") Comp = () => <Categories type="tiktok" />;
  if (place == "stripe") Comp = () => <Categories type="stripe" />;
  if (place == "ltd") Comp = () => <Categories type="ltd" />;
  if (place == "topup") Comp = () => <TopupWallet />;
  if (place == "wiseCard") Comp = () => <Wiser />;
  if (place == "StripeLtd") Comp = () => <StripeLtd />;
  if (`${place}`.split("_")[0] === "category")
    Comp = () => <Accounts category={place.split("_")[1]} />;

  return (
    <Stack
      flexDir="row"
      flexWrap="wrap"
      spacing="0"
      w="full"
      //pt="10px"
      maxW="850px"
      // bg="green"
      justifyContent="start"
    >
      <Comp />
    </Stack>
  );
};
