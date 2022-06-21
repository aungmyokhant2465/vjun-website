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

export const BLOG = gql`
  query Blog($id: uuid!) {
    blog_data_by_pk(id: $id) {
      body
      created_at
      id
      title
      title_image_url
      updated_at
    }
  }
`;
