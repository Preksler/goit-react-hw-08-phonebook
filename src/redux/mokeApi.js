import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62fd23396e617f88dea58465.mockapi.io/api/v1' }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
        getAllContacts: builder.query({
            query: () => `/contacts`,
                providesTags: ['Contact'],
        }),
        addContact: builder.mutation({
            query: ({ name, phone }) => ({
                url: '/contacts',
                method: 'POST',
                body: { name, phone },
            }),
            invalidatesTags: ['Contact']
        }),
        deleteContact: builder.mutation({
            query: id => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact']
        }),
    }),
})

export const {
    useGetAllContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation,
} = contactsApi;