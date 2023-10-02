const { gql } = require("@apollo/client");

export const GET_ALL_TIPS_OF_DAY = gql`
  query {
    allTipsOfDay {
      id
      title
      description
      createdAt
    }
  }
`;
