import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
// import { useParams } from "react-router-dom";

export const PlatformList = () => {
  return (
    <List resource="companies">
      <Datagrid>
        {/* <ReferenceField source="_id" reference="s" /> */}
        <TextField source="name" />
        <TextField source="supportedLocales" />
        <TextField source="company" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </Datagrid>
    </List>
  );
};
