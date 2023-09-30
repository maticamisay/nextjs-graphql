const { gql } = require("@apollo/client");

export const CREATE_USER = gql`
  mutation CreateUser($name: String!) {
    createUser(input: { name: $name }) {
      id
      name
    }
  }
`;
