// https://github.com/vercel/next.js/blob/canary/examples/with-relay-modern/lib/relay.js
import { useMemo } from "react";
import { Environment, Network, RecordSource, Store } from "relay-runtime";

let relayEnvironment;

const fetchQuery = async (operation, variables) => {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }
  ).then((response) => response.json());
};

const createEnvironment = () => {
  return new Environment({
    // Create a network layer from the fetch function
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
  });
};

export const initEnvironment = (initialRecords) => {
  // Create a network layer from the fetch function
  const environment = relayEnvironment ?? createEnvironment(initialRecords);

  // If your page has Next.js data fetching methods that use Relay, the initial records
  // will get hydrated here
  if (initialRecords) {
    environment.getStore().publish(new RecordSource(initialRecords));
  }
  // For SSG and SSR always create a new Relay environment
  if (typeof window === "undefined") return environment;
  // Create the Relay environment once in the client
  if (!relayEnvironment) relayEnvironment = environment;

  return relayEnvironment;
};

export const useEnvironment = (initialRecords) => {
  const store = useMemo(() => initEnvironment(initialRecords), [initialRecords]);
  return store;
};
