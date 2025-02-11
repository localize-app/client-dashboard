// import { Route } from "react-router-dom";
// import {
//   Admin,
//   Resource,
//   ListGuesser,
//   EditGuesser,
//   ShowGuesser,
// } from "react-admin";

// import { Layout } from "./Layout";
// import { dataProvider } from "./dataProvider";
// import authProvider from "./authProvider";

// import { CompanyList } from "./views/Company";
// import { PlatformList } from "./views/Platform";
// import { LocaleList } from "./views/Locale";

// export const App = () => (
//   <Admin
//     layout={Layout}
//     dataProvider={dataProvider}
//     authProvider={authProvider}
//   >
//     <Resource
//       name="companies"
//       list={CompanyList}
//       // edit={EditGuesser}
//       // show={ShowGuesser}
//     />

//     <Resource
//       name="platforms"
//       list={PlatformList}
//       edit={EditGuesser}
//       show={ShowGuesser}
//     />

//     <Resource
//       name="locales"
//       list={LocaleList}
//       // edit={EditGuesser}
//       show={ShowGuesser}
//     />
//   </Admin>
// );



import * as React from 'react';
import { useState } from 'react';
import { Admin, Resource, ListGuesser, Layout, Menu, MenuItemLink, nanoLightTheme, nanoDarkTheme } from 'react-admin';
import authProvider from "./authProvider";
import dataProvider from './dataProvider';
// import { OrganizationList } from './organizations';
// import { PhraseList } from './phrases';

const MyMenu = () => {
  const [showSubMenu1, setShowSubMenu1] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const [showSubMenu3, setShowSubMenu3] = useState(false);

  return (
    <Menu>
      {/* <MenuItemLink to="/organizations" primaryText="Organizations" /> */}
      {/* <MenuItemLink to="/phrases" primaryText="Phrases" /> */}
      <MenuItemLink
        to="#"
        primaryText="Manage Organization"
        onClick={() => setShowSubMenu1(!showSubMenu1)

        }
      />
      {showSubMenu1 && (
        <>
          <MenuItemLink to="/organizations" primaryText="Organization Overview" />
          <MenuItemLink to="/teams" primaryText="Teams" />
          <MenuItemLink to="/activity-stream" primaryText="Activity Stream" />
          <MenuItemLink to="/submenu4" primaryText="Api Keys" />
          <MenuItemLink to="/submenu5" primaryText="Settings" />
        </>
      )}



      <MenuItemLink
        to="#"
        primaryText="Manage Project"
        onClick={() => setShowSubMenu2(!showSubMenu2)}
      />
      {showSubMenu2 && (
        <>
          <MenuItemLink to="/sub2menu1" primaryText="Project Overview" />
          <MenuItemLink to="/sub2menu2" primaryText="Languages" />
          <MenuItemLink to="/sub2menu3" primaryText="Web Hooks" />
          <MenuItemLink to="/sub2menu4" primaryText="Style Guide" />
          <MenuItemLink to="/sub2menu5" primaryText="Integrations" />
          <MenuItemLink to="/sub2menu5" primaryText="Task Manager" />
          <MenuItemLink to="/sub2menu5" primaryText="Widgets" />
          <MenuItemLink to="/sub2menu5" primaryText="Settings" />
        </>
      )}




      <MenuItemLink
        to="#"
        primaryText="Manage Phrases"
        onClick={() => setShowSubMenu3(!showSubMenu3)}
      />
      {showSubMenu3 && (
        <>
          <MenuItemLink to="/phrases" primaryText="Manage Phrases" />
          <MenuItemLink to="/sub3menu2" primaryText="Cat Tools" />
          <MenuItemLink to="/sub3menu3" primaryText="Glossary" />
          <MenuItemLink to="/sub3menu4" primaryText="File Import-Export" />
          <MenuItemLink to="/sub3menu5" primaryText="In-Context-Editor" />
          <MenuItemLink to="/sub3menu5" primaryText="Page Manager" />
          <MenuItemLink to="/sub3menu5" primaryText="Lable Manger" />
          <MenuItemLink to="/sub3menu5" primaryText="Dynamic Phrases Manager" />
        </>
      )}



    </Menu>
  );
};

const MyLayout = (props) => <Layout {...props} menu={MyMenu} />;

const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    layout={MyLayout}
    theme={nanoLightTheme}
    darkTheme={nanoDarkTheme}
  >
    {/* ///////// Manage Org.///////// */}
    <Resource name="organizations" list={ListGuesser} />
    <Resource name="teams" list={ListGuesser} />
    <Resource name="activitystreams" list={ListGuesser} />
    <Resource name="api-keys" list={ListGuesser} />


    {/* //////// Manage Proj.///////// */}
    <Resource name="project-overview" list={ListGuesser} />
    <Resource name="languages" list={ListGuesser} />
    <Resource name="web-hooks" list={ListGuesser} />
    <Resource name="style-guide" list={ListGuesser} />
    <Resource name="integrations" list={ListGuesser} />

    {/* /////////Phrases //////// */}
    <Resource name="manage-phrases" list={ListGuesser} />
    <Resource name="file-import-export" list={ListGuesser} />
    <Resource name="glossary" list={ListGuesser} />



  </Admin>
);

export default App;