import {
  Box,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  SimpleGrid,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import TableData from "../Components/TableContainer";

const Admin = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const ieData = async () => {
    try {
      let res = await axios.get(`https://growfin.onrender.com/ieData`);
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedCategory === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((el) => el.category === selectedCategory);
      setFilteredData(filtered);
    }
  }, [data, selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const [companyName, setCompanyName] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let useData = { companyName, category, name, email, phone };

    try {
      let res = await axios.post(
        `https://growfin.onrender.com/ieData`,
        useData
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://growfin.onrender.com/ieData/${id}`);
      ieData(); // Fetch data again after deletion
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ieData();
  }, []);

  return (
    <Box>
      <Flex
        // border="1px solid red"
        bg="black"
        color="white"
      >
        <Box p="30px">
          <Heading as="h6">Add New Data</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Company</FormLabel>
              <Input
                type="text"
                border="1px solid #00ff0a"
                mb={3}
                _hover={{ border: "1px solid #00ff0a", bg: "brand.100" }}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <FormLabel>Category</FormLabel>
              <Select
                border="1px solid #00ff0a"
                mb={3}
                _hover={{ border: "1px solid #00ff0a", bg: "brand.100" }}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Investor">Investor</option>
                <option value="Entrepreneur">Entrepreneur</option>
              </Select>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                border="1px solid #00ff0a"
                mb={3}
                _hover={{ border: "1px solid #00ff0a", bg: "brand.100" }}
                onChange={(e) => setName(e.target.value)}
              />
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                border="1px solid #00ff0a"
                mb={3}
                _hover={{ border: "1px solid #00ff0a", bg: "brand.100" }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel>Phone No.</FormLabel>
              <Input
                type="number"
                border="1px solid #00ff0a"
                mb={3}
                _hover={{ border: "1px solid #00ff0a", bg: "brand.100" }}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                type="submit"
                border="1px solid #00ff0a"
                _hover={{ border: "1px solid #00ff0a", bg: "brand.100" }}
                mb={3}
              />
            </FormControl>
          </form>
        </Box>

        <Box>
          <Heading pt="50px" pb="50px">
            Grow Fin Investor and Entrepreneur
          </Heading>
          <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            maxW="sm"
            mb="40px"
            border="1px solid #00ff0a"
            colorScheme="blackAlpha"
          >
            <option value="">Select Category</option>
            <option value="Investor">Investor</option>
            <option value="Entrepreneur">Entrepreneur</option>
          </Select>
          <TableContainer pb="60px">
            <Table variant="simple">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>Sr.no</Th>
                  <Th>Company Name</Th>
                  <Th>Category</Th>
                  <Th>Email</Th>
                  <Th>Name</Th>
                  <Th>Contact</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredData.map((el) => (
                  <TableData key={el.id} {...el} handleDelete={handleDelete} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>

      {/* <Center p="70px" bg="black" pb="80px"> */}
      {/* <SimpleGrid column={6}> */}

      {/* </SimpleGrid> */}
      {/* </Center> */}

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
export default Admin;
