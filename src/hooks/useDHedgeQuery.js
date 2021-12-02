import {
	ApolloClient,
	InMemoryCache,
	useQuery,
	useLazyQuery,
} from "@apollo/client";

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

const dhedgeApiClient = new ApolloClient({
	uri: "https://api-v2.dhedge.org/graphql",
	cache: new InMemoryCache(),
	defaultOptions: defaultOptions,
});

export function useDHedgeQuery(query, config) {
	return useQuery(query, { client: dhedgeApiClient, ...config });
}
export function useDHedgeLazyQuery(query, config) {
	return useLazyQuery(query, { client: dhedgeApiClient, ...config });
}
