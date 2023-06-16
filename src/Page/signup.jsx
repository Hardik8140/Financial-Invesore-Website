import {
  Box,
  Center,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let useData = { name, email, password, phone };

    try {
      let res = await axios.post(`https://growfin.onrender.com/users`, useData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Center p="70px" bg="black" pb="80px">
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Heading color="white" textDecoration="underline" mb={3}>
              Create Your Account..
            </Heading>
            <FormLabel color="white">Name :</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              w="400px"
              border="1px solid #00ff0a"
              color="white"
              _hover={{ border: "1px solid #00ff0a", bg: "brand.100" }}
              mb={3}
            />
            <FormLabel color="white">Email :</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              w="400px"
              border="1px solid #00ff0a"
              color="white"
              _hover={{ border: "1px solid #00ff0a", bg: "brand.100" }}
              mb={3}
            />
            <FormLabel color="white">Password :</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              w="400px"
              border="1px solid #00ff0a"
              color="white"
              _hover={{
                border: "1px solid #00ff0a",
                bg: "brand.100",
                boxShadow: "lg",
              }}
              mb={3}
            />
            <FormLabel color="white">Phone :</FormLabel>
            <Input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              w="400px"
              border="1px solid #00ff0a"
              color="white"
              _hover={{
                border: "1px solid #00ff0a",
                bg: "brand.100",
                boxShadow: "lg",
              }}
              mb={3}
            />
          </FormControl>
          <Input
            type="submit"
            placeholder="Sign Up"
            w="400px"
            border="1px solid #00ff0a"
            color="white"
            mt={5}
            _hover={{
              color: "black",
              fontWeight: "bold",
              cursor: "pointer",
              bg: "#00ff0a",
              textDecoration: "underline",
            }}
          />
        </form>
      </Center>

      <Box
        color="white"
        textAlign="center"
        mb={10}
        bgGradient="linear(to-t, brand.100, black)"
      >
        <SimpleGrid columns={3} mb="80px">
          <Box>
            <Heading mb={8}>Company</Heading>
            <RouterLink>About Us</RouterLink>
            <br />
            <RouterLink>Grow Fin Blog</RouterLink>
            <br />
            <RouterLink>Careers</RouterLink>
            <br />
            <RouterLink>Award and Recognition</RouterLink>
            <br />
            <RouterLink>Contact Us</RouterLink>
            <br />
          </Box>
          <Box>
            <Heading mb={8}>Need Help?</Heading>
            <RouterLink>Member Login</RouterLink>
            <br />
            <RouterLink>Sign Up</RouterLink>
            <br />
            <RouterLink>Made Connections</RouterLink>
            <br />
            <RouterLink>How to use Grow Fin.com</RouterLink>
            <br />
            <RouterLink>Premium Membership</RouterLink>
            <br />
            <RouterLink>Customer Support</RouterLink>
            <br />
            <RouterLink>Site Map</RouterLink>
            <br />
          </Box>
          <Box>
            <Heading mb={8}>Privacy and You</Heading>
            <RouterLink>Term of Use</RouterLink>
            <br />
            <RouterLink>Privacy Policy</RouterLink>
            <br />
            <RouterLink>Be Safe Online</RouterLink>
            <br />
            <RouterLink>Report Misuse</RouterLink>
            <br />
          </Box>
        </SimpleGrid>
        <Center>
          <Box
            w="90%"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Box color="white" w="50%" display="flex">
              <Text mr="20px">Home</Text>
              <Text mr="20px">Category</Text>
              <Text mr="20px">Testimonials</Text>
              <Text mr="20px">About us</Text>
            </Box>
            <Box display="flex" justifyContent="space-between" w="15%">
              <Image src="facebook.png" boxSize="20px" />
              <Image src="twitter.png" boxSize="20px" />
              <Image src="instagram.png" boxSize="20px" />
              <Image src="linkedin.png" boxSize="20px" />
            </Box>
          </Box>
        </Center>
        <Center>
          <Divider colorScheme="#00ff0a" />
        </Center>
        <Box color="white" display="flex" justifyContent="space-evenly" w="90%">
          <Text mr="200px">copyright Event Partners. All right reserved</Text>
          <Text>Privacy Policy | Support</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
