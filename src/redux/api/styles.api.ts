import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const stylesApi = createApi({
	reducerPath: "api/styles",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3002/styles" }),
	endpoints: (build) => ({
		getStyles: build.query({
			query: (nodeID: string) => ({
				params: {
					nodeID,
				},
				url: "",
			}),
		}),
	}),
});

export const { useLazyGetStylesQuery } = stylesApi;
