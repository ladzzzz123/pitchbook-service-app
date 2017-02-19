export default {
  host: 'http://localhost:3000',
  api: {
    offices: {
      getAll: '/api/offices'
    },
    office: {
      create: '/api/office/create',
      update: '/api/office/update',
      delete: '/api/office/delete',
    }
  }
};
