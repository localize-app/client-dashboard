import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  ArrayField,
  SingleFieldList,
  ChipField,
  DateField,
} from "react-admin";
// import { useParams } from "react-router-dom";

export const CompanyList = () => {
  return (
    <List resource="companies">
      <Datagrid>
        {/* <ReferenceField source="id" reference="s" /> */}
        {/* <TextField source="id" /> */}
        <TextField source="name" />
        <TextField source="description" />

        <TextField source="platforms" />

        <ArrayField source="users">
          <SingleFieldList>
            <ChipField source="_id" />
          </SingleFieldList>
        </ArrayField>

        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </Datagrid>
    </List>
  );
};
