// import simpleRestProvider from "ra-data-simple-rest";

// export const dataProvider = simpleRestProvider(
//   import.meta.env.VITE_SIMPLE_REST_URL,
// );

import { DataProvider } from 'react-admin';
import organizations from '../data/Manage-organization/organization-overview.json';
import teams from '../data/Manage-organization/team.json';
import activitystream from '../data/Manage-organization/activity-stream.json';
import phrases from '../data/Phrases/manage-phrases.json';


const dataProvider: DataProvider = {
  getList: async (resource) => {
    if (resource === 'organizations') {
      return { data: organizations, total: organizations.length };
    }
    if (resource === 'teams') {
      return { data: teams, total: teams.length };
    }
    if (resource === 'activity-stream') {
      return { data: activitystream, total: activitystream.length };
    }
    if (resource === 'phrases') {
      return { data: phrases, total: phrases.length };
    }
    throw new Error(`Resource ${resource} not found`);
  },
  // getOne: async (resource, params) => {
  //   const data = resource === 'organizations' ? organizations : phrases;
  //   const record = data.find((item) => item.id === params.id);
  //   if (!record) throw new Error('Record not found');
  //   return { data: record };
  // },
  // Implement other methods (getMany, create, update, delete, etc.) as needed
  // getMany: async () => ({ data: [] }),
  // getManyReference: async () => ({ data: [], total: 0 }),
  // create: async () => ({ data: {} }),
  // update: async () => ({ data: {} }),
  // updateMany: async () => ({ data: [] }),
  // delete: async () => ({ data: {} }),
  // deleteMany: async () => ({ data: [] }),
};

export default dataProvider;