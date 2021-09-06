import { gql } from '@apollo/client'

export const GETPRODUCT = gql`
query Query {
    Products {
      title
      price
      imgUrl
      category 
        
      
    }
  }
`