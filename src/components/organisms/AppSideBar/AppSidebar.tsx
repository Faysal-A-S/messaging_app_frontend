import { getUserlist } from "@/api/user.api";
import Contact from "@/components/molecules/Contact/Contact";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/useDebounce";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const AppSidebar = () => {
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce({ value: search });
  const { data: users, isLoading } = useQuery(
    getUserlist({ search: debouncedSearch })
  );
  const contacts = [
    {
      id: 0,
      name: "Sarah Wilson",
      avatar: "SW",
      lastMessage: "Hey! How are you doing?",
      time: "2m ago",
      unread: 3,
      online: true,
    },
    {
      id: 1,
      name: "Mike Johnson",
      avatar: "MJ",
      lastMessage: "Thanks for the help!",
      time: "15m ago",
      unread: 0,
      online: true,
    },
    {
      id: 2,
      name: "Emma Davis",
      avatar: "ED",
      lastMessage: "See you tomorrow!",
      time: "1h ago",
      unread: 1,
      online: false,
    },
    {
      id: 3,
      name: "Alex Brown",
      avatar: "AB",
      lastMessage: "That sounds great!",
      time: "3h ago",
      unread: 0,
      online: false,
    },
    {
      id: 4,
      name: "Lisa Anderson",
      avatar: "LA",
      lastMessage: "Perfect, let me know",
      time: "5h ago",
      unread: 0,
      online: true,
    },
  ];

  return (
    <div className="text-center py-2 ">
      <div className="p-4">
        <Input
          placeholder="Search by username.."
          className="bg-white/10 text-white placeholder-gray-500 p-3"
        />
      </div>
      <div className="mt-2">
        {contacts.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </div>
    </div>
  );
};

export default AppSidebar;
