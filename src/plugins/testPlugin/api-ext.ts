import gql from "graphql-tag";

export const adminApiExtension = gql`
  extend type Query {
    test: ProductList
    createSellerr: String
  }
`;
