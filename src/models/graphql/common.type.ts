const CommonTypeDefs = `
  type PostStatus {
    status: Boolean
    message: String
  }

  type PaginationMetaData {
    limit: Int
    offset: Int
    totalCount: Int
  }

  input AdditionalInput {
    limit: Int
    offset: Int
  }
`;

export default CommonTypeDefs;
