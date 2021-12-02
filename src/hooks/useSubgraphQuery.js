import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";

const defaultOptions = {
	watchQuery: {
		// fetchPolicy: "no-cache",
		fetchPolicy: "network-only",
		errorPolicy: "ignore",
	},
	query: {
		fetchPolicy: "network-only",
		errorPolicy: "all",
	},
};

const subgraphClient = new ApolloClient({
	uri: "https://api.thegraph.com/subgraphs/name/dhedge/dhedge-v2-polygon",
	cache: new InMemoryCache(),
	defaultOptions: defaultOptions,
});

export function useSubgraphQuery(query, config) {
	return useQuery(query, { client: subgraphClient, ...config });
}
