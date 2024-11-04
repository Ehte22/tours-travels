import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { toast } from "react-toastify";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/v1/auth",
        credentials: 'include'
    }),
    tagTypes: ["user"],
    endpoints: (builder) => {
        return {
            signUp: builder.mutation({
                query: userData => {
                    return {
                        url: "/signup",
                        method: "POST",
                        body: userData
                    }
                },
            }),

            signIn: builder.mutation({
                query: userData => {
                    return {
                        url: "/signin",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: (data) => {
                    toast.success(data.message)
                    localStorage.setItem("user", JSON.stringify(data.result))
                    return data.result
                },
                transformErrorResponse: (error) => {
                    toast.error(error.data.message)
                    return error
                }
            }),

            signOut: builder.mutation({
                query: () => {
                    return {
                        url: "/signout",
                        method: "POST",
                    }
                },
                transformResponse: data => {
                    toast.success(data.message)
                    localStorage.removeItem("user")
                    return data
                }
            }),

            continueWithGoogle: builder.mutation({
                query: userData => {
                    return {
                        url: "/signin-with-google",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    toast.success(data.message)
                    localStorage.setItem("user", JSON.stringify(data.result))
                    return data.result
                }
            }),

            verifyEmail: builder.mutation({
                query: email => {
                    return {
                        url: "/verify-email",
                        method: "POST",
                        body: email
                    }
                },
                transformResponse: (data) => {
                    toast.success(data.message)
                    return data.result
                },
                transformErrorResponse: (error) => {
                    toast.error(error.data.message)
                    return error
                }
            }),

            verifyOTP: builder.mutation({
                query: otp => {
                    console.log(otp);

                    return {
                        url: "/verify-otp",
                        method: "POST",
                        body: { otp }
                    }
                },
                transformResponse: (data) => {
                    toast.success(data.message)
                    return data.result
                },
                transformErrorResponse: (error) => {
                    toast.error(error.data.message)
                    return error
                }
            }),

            reseetPassword: builder.mutation({
                query: passwordData => {
                    return {
                        url: "/reset-password",
                        method: "PUT",
                        body: passwordData
                    }
                },
                transformResponse: (data) => {
                    toast.success(data.message)
                    return data.result
                },
                transformErrorResponse: (error) => {
                    toast.error(error.data.message)
                    return error
                }
            }),
        }
    }
})

export const {
    useSignUpMutation,
    useSignInMutation,
    useSignOutMutation,
    useContinueWithGoogleMutation,
    useVerifyEmailMutation,
    useVerifyOTPMutation,
    useReseetPasswordMutation
} = authApi
