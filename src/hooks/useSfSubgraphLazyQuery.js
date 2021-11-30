import { ApolloClient, InMemoryCache, useLazyQuery } from "@apollo/client";

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

const superfluidSubgraphClient = new ApolloClient({
	uri: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-matic",
	cache: new InMemoryCache(),
	defaultOptions: defaultOptions,
});

export function useSfSubgraphLazyQuery(query, config) {
	return useLazyQuery(query, { client: superfluidSubgraphClient, ...config });
}
