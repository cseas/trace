import { gql } from "graphql-request";

export interface MetadataQuery {
  metadata: {
    name: string;
    displayName: string;
    type: string;
    scope: string;
    units: string;
    onlySupportsAggregation: boolean;
    onlySupportsGrouping: boolean;
    supportedAggregations: string[];
    groupable: boolean;
    __typename: string;
  }[];
}

export const metadataQuery = gql`
  {
    metadata {
      name
      displayName
      type
      scope
      units
      onlySupportsAggregation
      onlySupportsGrouping
      supportedAggregations
      groupable
      __typename
    }
  }
`;
