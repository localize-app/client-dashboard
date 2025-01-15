import { Route } from "react-router-dom";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";

import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";

import { CompanyList } from "./views/Company";
import { PlatformList } from "./views/Platform";
import { LocaleList } from "./views/Locale";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="companies"
      list={CompanyList}
      // edit={EditGuesser}
      // show={ShowGuesser}
    />

    <Resource
      name="platforms"
      list={PlatformList}
      edit={EditGuesser}
      show={ShowGuesser}
    />

    <Resource
      name="locales"
      list={LocaleList}
      // edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
