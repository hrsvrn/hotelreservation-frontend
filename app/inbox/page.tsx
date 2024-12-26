import { getUserId } from "../lib/actions";
import apiService from "../services/apiService";
import React, { useState, useEffect } from "react";
import Conversation from "../components/inbox/Conversation";

export type UserType={
    id:string;
    name:string;
    avatar_url:string;
}
export type ConversationType ={
    id: string;
    users:UserType[];
}

const InboxPage = async () => {
  const userId = await getUserId();
  if (!userId) {
    return (
      <main className="max-w-[1500px] max-auto px-6 py-12">
        <p>You need to be authenticated to view this page</p>
      </main>
    );
  }
  const coversations=await apiService.get('/api/chat/')
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
      <h1 className="my-6 text-2xl">Inbox</h1>
      {coversations.map((conversation: ConversationType)=>{
        return(
            <Conversation
            key={conversation.id}
            userId={userId}
            conversation={conversation}
            />
        )
      })}
    </main>
  );
};

export default InboxPage;
