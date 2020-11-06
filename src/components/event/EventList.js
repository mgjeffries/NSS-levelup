import React, { useContext, useEffect } from "react";
import { EventContext } from "./EventProvider.js";
import "./event.css";

export const EventList = (props) => {
  const { events, getEvents, joinEvent } = useContext(EventContext);

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <article className="events">
      <button
        className="btn btn-2 btn-sep icon-create"
        onClick={() => {
          props.history.push({ pathname: "/events/new" });
        }}
      >
        Register New Event
      </button>
      <header className="events__header">
        <h2>Events</h2>
      </header>
      {events.map((event) => {
        return (
          <section key={event.id} className="registration">
            <h3 className="registration__game">{event.game.title}</h3>
            <div>{event.description}</div>
            <div>
              {new Date(event.day).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              @ {event.time}
            </div>
            <button className="btn btn-2" onClick={() => joinEvent(event.id)}>
              Join
            </button>
          </section>
        );
      })}
    </article>
  );
};
