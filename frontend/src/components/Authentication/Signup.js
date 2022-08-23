import { FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();

  return (
    <VStack spacing="5px">
      <FormControl id="first-name" color="black" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" color="black" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" color="black" isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder="Enter your password" />
      </FormControl>
    </VStack>
  );
};

export default Signup;
