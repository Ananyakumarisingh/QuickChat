import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Box, Text, Tabs, TabList, TabPanel, Tab, TabPanels } from "@chakra-ui/react";
import Signup from "../components/Authentication/Signup";
import Login from "../components/Authentication/Login";

const HomePage = () => {

  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("UserInfo"));
    
    if (user) history.push("/");
  }, [history]);

  return <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="45px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        textAlign="center"
      >
        <Text fontSize="4xl" color="black" fontFamily="Work sans">
          QuickChat
        </Text>
      </Box>
      <Box
        p={3}
        bg={"white"}
        w="100%"
        borderWidth="1px"
        textAlign="center"
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
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
    </Container>;
};

export default HomePage