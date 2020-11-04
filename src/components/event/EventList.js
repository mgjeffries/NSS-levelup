import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider.js"
import "./event.css"

export const EventList = (props) => {
    const { events, getEvents } = useContext(EventContext)

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <article className="events">
            <header className="events__header">
                <h2>Events</h2>
            </header>
            {
                events.map(event => {
                    return <section key={event.id} className="registration">
                        <h3 className="registration__game">{event.game.title}</h3>
                        <div>{event.description}</div>
                        <div>
                            {
                                new Date(event.day).toLocaleDateString("en-US",
                                {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })
                            }
                            @ {event.time}
                        </div>
                    </section>
                })
            }
        </article >
    )
}