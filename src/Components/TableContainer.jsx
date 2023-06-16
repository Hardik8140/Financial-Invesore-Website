import { Tr, Td } from "@chakra-ui/react";

const TableData = ({ id, category, company_Name, email, name, phone }) => {
  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{company_Name}</Td>
      <Td>{category}</Td>
      <Td>{email}</Td>
      <Td>{name}</Td>
      <Td>{phone}</Td>
    </Tr>
  );
};

export default TableData;
