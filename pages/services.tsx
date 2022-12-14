import { request } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import { entitiesQuery } from "../src/Services/entities.query";
import type { EntitiesQuery } from "../src/Services/entities.query";

export default function Services() {
  const { data } = useQuery<EntitiesQuery>(["entities"], async () => {
    const { entities } = await request(
      process.env.NEXT_PUBLIC_GRAPHQL!,
      entitiesQuery
    );
    return entities;
  });

  return (
    <>
      {data?.results.map((service, index) => (
        <p key={index}>{service.name}</p>
      ))}
      <pre className="text-sm text-mauve-12">
        {JSON.stringify(data, null, 4)}
      </pre>
    </>
  );
}
