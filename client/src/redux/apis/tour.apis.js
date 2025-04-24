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

            getTourDetails: builder.query({
                query: id => {
                    return {
                        url: `/tour-details/${id}`,
                        method: "GET",
                    }
                },
                transformResponse: (data) => {
                    return data.result
                },
                providesTags: ["tour"]
            }),

            updateTour: builder.mutation({
                query: ({ tourData, id }) => {
                    console.log(tourData, id);

                    return {
                        url: `/update-tour/${id}`,
                        method: "PUT",
                        body: tourData
                    }
                },
                invalidatesTags: ["tour"]
            }),

            deleteTour: builder.mutation({
                query: id => {
                    console.log(id);
                    return {
                        url: `/delete-tour/${id}`,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["tour"]
            }),

        }
    }
})

export const {
    useAddTourMutation,
    useGetToursQuery,
    useGetTourDetailsQuery,
    useUpdateTourMutation,
    useDeleteTourMutation
} = tourApi 
