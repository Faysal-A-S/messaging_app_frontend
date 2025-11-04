import React from "react";

type Contact = {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
};

type ContactProps = {
  contact: Contact;
};

const Contact: React.FC<ContactProps> = ({ contact }) => {
  const active = true;
  return (
    <div
      className={`w-full flex justify-between gap-6 px-4 py-3 cursor-pointer items-center ${active && "bg-white/10"}`}
    >
      <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-gray-700 flex items-center justify-center text-white font-semibold ">
        {contact.name.slice(0, 2)}
      </div>
      <div className="text-start shrink-0 flex-1">
        <p className="text-white font-semibold">{contact.name}</p>
        <div className="text-white/80">{contact.lastMessage}</div>
      </div>
      <div className="shrink-0  flex flex-col gap-1 items-end">
        <p className="text-white/80 text-sm">{contact.time}</p>
        <div className="shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white font-semibold text-xs">
          {contact.unread}
        </div>
      </div>
    </div>
  );
};

export default Contact;
