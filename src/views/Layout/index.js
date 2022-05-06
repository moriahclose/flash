import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from 'react-query';
import "../../styles/index.css";

import Navigtaion from "../../components/Navigation";
import { UsersAPI } from "../../api";

export default function Layout() {
    const queryClient = new QueryClient();
    const [ userId, setUserId ] = useState(localStorage.getItem('flash-user-id'));

    const { isLoading, isError, data: decks, error } = useQuery(
        `users/${userId}/decks`,
        () => UsersAPI.getDecks(userId),
        {
            enabled: !!userId
        }
    );


    return (
        <QueryClientProvider client={queryClient}>
            <section className="min-h-full">
                <Navigtaion />

                <main className="w-5/6 mx-auto px-24 py-12">
                    <Outlet />
                </main>
            </section>
        </QueryClientProvider>
    );

}