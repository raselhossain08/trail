import { Box, Text, VStack } from "@chakra-ui/react";
import BackgroundComponent from "components/background.component";
//import LoginComponent from "components/login/login.component";
import Loading from "components/userDashboard/loading";
//import loading from "components/user dashboard/loading";
//import UserDashboard from "components/user dashboard/user.dashboard";
import {
  Fragment,
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  //  BrowserRouter,
  createBrowserRouter,
  // Route,
  RouterProvider,
} from "react-router-dom";
import { isActive } from "utils/login.functions";
import state from "utils/state";

const LazyLogin = lazy(() => import("components/login/login.component"));

const LazyDashboard = lazy(
  () => import("components/userDashboard/user.dashboard")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyLogin />,
  },
  {
    path: "/dashboard",
    element: <LazyDashboard />,
    errorElement: <Text>it's error</Text>,
  },
]);

function App() {
  (window as any).recaptchaOptions = {
    useRecaptchaNet: true,
  };

  return (
    <VStack pos="relative" top="0" m="0" p="0" h="100vh" w="full">
      <BackgroundComponent />
      <Suspense fallback={<Loading />}>
        <RouterProvider
          router={router}
          fallbackElement={<Text>it's error</Text>}
        />
      </Suspense>
    </VStack>
  );
}

export default App;
