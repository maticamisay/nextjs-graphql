const { gql } = require("@apollo/client");

export const GET_TODOS = gql`
  query {
    todos {
      id
      title
      completed
      userId {
        id
        name
      }
    }
    users {
      id
      name
    }
  }
`;
