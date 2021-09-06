import { gql } from '@apollo/client'

export const LOGIN = gql`
mutation login($username: String!, $password: String!) {
    login(username:$username, password:$password){
        token
        user {
            _id
        }
    }
}`

export const SIGNUP = gql`
mutation signup($username: String!, $email: String!, $password: String!) {
    signup(username:$username, email:$email, password:$password){
        token 
        user {
            _id
        }
    }
}
`
export const uploadFileMutation = gql`
mutation UploadFile($file: Upload!) {
    uploadFile(file: $file)
}`

export const ADDPRODUCT = gql`
mutation addProduct(
    $title: String!,
     $price: Int!,
      $imgUrl: String!
       $postedBy: ID, 
       $category: ID){
    addProduct(
        title: $title,
         price: $price,
          imgUrl: $imgUrl,
          postedBy: $postedBy,
          category: $category
          ) {
              title
              price
              imgUrl
              postedBy
              category

    }
}
`