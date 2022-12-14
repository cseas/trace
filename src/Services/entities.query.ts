import { gql } from "graphql-request";

export interface EntitiesQuery {
  results: {
    id: string;
    name: string;
    type: string;
    duration: {
      p99: {
        value: number;
        __typename: string;
      };
      avg: {
        value: number;
        __typename: string;
      };
      __typename: string;
    };
    errorCount: {
      avgrate_sec: {
        value: number;
        __typename: string;
      };
      sum: {
        value: number;
        __typename: string;
      };
      __typename: string;
    };
    numCalls: {
      avgrate_sec: {
        value: number;
        __typename: string;
      };
      sum: {
        value: number;
        __typename: string;
      };
      __typename: string;
    };
    __typename: string;
  }[];
}

export const entitiesQuery = gql`
  {
    entities(
      scope: "SERVICE"
      limit: 250
      between: {
        startTime: "2022-12-13T13:30:00.000Z"
        endTime: "2022-12-13T15:30:00.000Z"
      }
      offset: 0
      orderBy: [{ direction: DESC, keyExpression: { key: "name" } }]
    ) {
      results {
        id
        id1: attribute(expression: { key: "id" })
        name: attribute(expression: { key: "name" })
        type
        duration: metric(expression: { key: "duration" }) {
          p99: percentile(size: 99) {
            value
            __typename
          }
          avg {
            value
            __typename
          }
          __typename
        }
        errorCount: metric(expression: { key: "errorCount" }) {
          avgrate_sec: avgrate(units: SECONDS, size: 1) {
            value
            __typename
          }
          sum {
            value
            __typename
          }
          __typename
        }
        numCalls: metric(expression: { key: "numCalls" }) {
          avgrate_sec: avgrate(units: SECONDS, size: 1) {
            value
            __typename
          }
          sum {
            value
            __typename
          }
          __typename
        }
        __typename
      }
      total
      __typename
    }
  }
`;
