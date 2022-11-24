import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const treeApi = createApi({
    reducerPath: 'api/tree',
    baseQuery: fetchBaseQuery({ baseUrl: 'https:/localhost:3001' }),
    endpoints: (build) => ({
        getTree: build.query({
            query: () => ({
                url: '/tree'
            })
        })
    })
});