import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const libraryApi = createApi({
  reducerPath: 'libraryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  tagTypes: ['Books', 'Borrows'],
  endpoints: (builder) => ({
    getBooks: builder.query({ query: () => '/books', providesTags: ['Books'] }),
    getBook: builder.query({ query: (id) => `/books/${id}` }),
    createBook: builder.mutation({ query: (data) => ({ url: '/books', method: 'POST', body: data }), invalidatesTags: ['Books'] }),
    updateBook: builder.mutation({ query: ({ id, ...data }) => ({ url: `/books/${id}`, method: 'PATCH', body: data }), invalidatesTags: ['Books'] }),
    deleteBook: builder.mutation({ query: (id) => ({ url: `/books/${id}`, method: 'DELETE' }), invalidatesTags: ['Books'] }),
    borrowBook: builder.mutation({ query: (data) => ({ url: '/borrows', method: 'POST', body: data }), invalidatesTags: ['Borrows', 'Books'] }),
    getBorrowSummary: builder.query({ query: () => '/borrows/summary', providesTags: ['Borrows'] })
  })
});
