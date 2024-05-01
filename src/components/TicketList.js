import React from "react";
import TicketItem from "./TicketItem";

export default function TicketList({ tickets, dispatch }) {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicketItem
          key={ticket.id}
          dispatch={dispatch}
          ticket={ticket}
        ></TicketItem>
      ))}
    </div>
  );
}
