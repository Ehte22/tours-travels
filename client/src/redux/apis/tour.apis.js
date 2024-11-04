import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const tourApi = createApi({
    reducerPath: "tourApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/tour" }),
    tagTypes: ["tour"],
    endpoints: (builder) => {
        return {
            addTour: builder.mutation({
                query: tourData => {
                    return {
                        url: "/add-tour",
                        method: "POST",
                        body: tourData
                    }
                },
                invalidatesTags: ["tour"]
            }),
            getTours: builder.query({
                query: () => {
                    return {
                        url: "/get-tours",
                        method: "GET",
                    }
                },
                transformResponse: (data) => {
                    return data.result
                },
                providesTags: ["tour"]
            }),

        }
    }
})

export const { useAddTourMutation, useGetToursQuery } = tourApi 
