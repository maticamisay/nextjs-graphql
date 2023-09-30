import { gql } from "@apollo/client";

export const CREATE_TODO = gql`
  mutation CreateTodo($title: String!, $completed: Boolean!, $userId: String!) {
    createTodo(
      input: { title: $title, completed: $completed, userId: $userId }
    ) {
      title
      completed
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo(
    $id: String!
    $title: String
    $completed: Boolean
    $userId: String
  ) {
    updateTodo(
      id: $id
      input: { title: $title, completed: $completed, userId: $userId }
    ) {
      id
      title
      completed
      userId {
        id
        name
      }
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: String!) {
    deleteTodo(id: $id) {
      id
      title
      completed
      userId {
        name
      }
    }
  }
`;
