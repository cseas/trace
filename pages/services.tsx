import { request, gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";

interface ServicesQuery {
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

const servicesQuery = gql`
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

export default function Services() {
  const { data } = useQuery<ServicesQuery>(["services"], async () => {
    const { metadata } = await request(
      process.env.NEXT_PUBLIC_GRAPHQL!,
      servicesQuery
    );
    return metadata;
  });

  return (
    <pre className="text-sm text-mauve-12">{JSON.stringify(data, null, 4)}</pre>
  );
}
