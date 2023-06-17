import { Tr, Td, Button } from "@chakra-ui/react";

const TableData = ({
  id,
  category,
  company_Name,
  email,
  name,
  phone,
  handleDelete,
}) => {
  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{company_Name}</Td>
      <Td>{category}</Td>
      <Td>{email}</Td>
      <Td>{name}</Td>
      <Td>{phone}</Td>
      <Td>
        <Button onClick={() => handleDelete(id)}>Delete</Button>
      </Td>
    </Tr>
  );
};

export default TableData;
