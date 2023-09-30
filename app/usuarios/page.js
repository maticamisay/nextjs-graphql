import UserForm from "@/components/users/UserForm";
import UserList from "@/components/users/UserList";
import { GET_USERS_WITH_TODOS_COUNT } from "@/graphql/queries/users";
import { getClient } from "@/lib/client";
import React from "react";

const UsersPage = async () => {
  const { data } = await getClient().query({
    query: GET_USERS_WITH_TODOS_COUNT,
  });
  
  return (
    <>
      <UserForm />
      <UserList users={data.users} />
    </>
  );
};

export default UsersPage;
