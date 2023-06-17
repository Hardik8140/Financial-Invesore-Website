import {
  Box,
  Center,
  Divider,
  Heading,
  Image,
  Select,
  SimpleGrid,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import TableData from "../Components/TableContainer";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const IeData = () => {
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
    ieData();
  }, []);

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

  return (
    <Box
      color="white"
      textAlign="center"
      mb={10}
      bgGradient="linear(to-t, brand.100, black)"
    >
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
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((el) => (
              <TableData key={el.id} {...el} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Box>
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

export default IeData;
