import { gql } from "@apollo/client";

export const SHOPS = gql`
  query ShopData($search: String!) {
    shop_data(where: { address: { _ilike: $search } }) {
      address
      id
      map_link
      shop_name
      shop_photo
      created_at
      phone
      note
    }
  }
`;

export const BLOGS = gql`
  query Blogs {
    blog_data {
      id
      title
      title_image_url
      body
    }
  }
`;

export const BLOG = gql`
  query Blog($id: uuid!) {
    blog_data_by_pk(id: $id) {
      body
      id
      title
      title_image_url
    }
  }
`;

export const PRODUCTS = gql`
  query MyQuery {
    products(limit: 6, order_by: { created_at: asc }) {
      product_image_url
      name
    }
  }
`;
