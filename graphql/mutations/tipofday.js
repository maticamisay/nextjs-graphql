const { gql } = require("@apollo/client");

export const CREATE_TIP_OF_DAY = gql`
  mutation CreateTipOfDay($title: String!, $description: String!) {
    createTipOfDay(input: { title: $title, description: $description }) {
      title
      description
    }
  }
`;
