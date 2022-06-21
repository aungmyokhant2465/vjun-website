import { gql } from "@apollo/client";

export const SHOPS = gql`
  query ShopData {
    shop_data {
      address
      id
      map_link
      shop_name
      shop_photo
      created_at
    }
  }
`;
