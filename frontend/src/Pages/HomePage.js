import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  TabList,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
// import { useEffect } from "react";
// import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from "react-router-dom";
const HomePage = () => {
  //We are checking if the user is already logged in or not, if yes, then redirect to the chat page
  const history = useHistory();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      {/* Box is just like a div in html. */}
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Let's talk
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="solid-rounded">
          <TabList mb="1em">
            <Tab border={"1px solid blue"}>Login</Tab>
            <Tab border={"1px solid blue"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
