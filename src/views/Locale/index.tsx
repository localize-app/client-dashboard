import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  ArrayField,
  SingleFieldList,
  ChipField,
  DateField,
  BooleanField,
} from "react-admin";
// import { useParams } from "react-router-dom";

export const LocaleList = () => {
  return (
    <List resource="locales">
      <Datagrid>
        <TextField source="code" />
        <TextField source="language" />
        <BooleanField source="isActive" />
        <ArrayField source="platforms">
          <SingleFieldList>
            <ChipField source="_id" />
          </SingleFieldList>
        </ArrayField>
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <TextField source="id" />
      </Datagrid>
    </List>
  );
};
