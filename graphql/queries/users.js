const { gql } = require("@apollo/client");

export const GET_USERS_WITH_TODOS_COUNT = gql`
  query {
    users {
      id
      name
      role
      todosCount
    }
  }
`;
