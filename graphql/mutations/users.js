const { gql } = require("@apollo/client");

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $password: String!) {
    createUser(input: { name: $name, password: $password }) {
      id
      name
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id) {
      id
      name
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      accessToken
      name
      role
    }
  }
`;

export const REVALIDATE_TOKEN = gql`
  mutation RevalidateToken {
    revalidateToken {
      accessToken
      name
      role
    }
  }
`;
