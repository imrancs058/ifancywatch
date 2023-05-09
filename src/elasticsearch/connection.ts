const { Client } = require('@elastic/elasticsearch');

const client = new Client({
  cloud: {
    id: 'first_project:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvJDQxODFmMjVlNWM5ODQxMWJiODQzNDFkNWFhMjE3YmExJDQ3YTA4MzU4NDBmMzRhNDk4ZjMyMGRmYTViYzQzZjU0',
  },
    auth: {
    username: 'elastic',
    password: 'GVOmhdnNBcZRNOEtR1hWjpkY'
  }
});
export default client

