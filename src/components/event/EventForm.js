import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "../game/GameProvider";
import { EventContext } from "./EventProvider";

export const EventForm = (props) => {
  const { games, getGames } = useContext(GameContext);
  const { createEvent } = useContext(EventContext);
  const [currentEvent, setEvent] = useState({
    game_id: 0,
    day: "",
    time: "12:00:00",
    description: "",
  });

  useEffect(() => {
    getGames();
  }, []);

  const handleControlledInputChange = (changeEvent) => {
    const newEventState = Object.assign({}, currentEvent);
    newEventState[changeEvent.target.name] = changeEvent.target.value;
    console.log(newEventState);
    setEvent(newEventState);
  };

  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Schedule New Event</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="game_id">Game: </label>
          <select
            name="game_id"
            className="form-control"
            value={currentEvent.game_id}
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a game...</option>
            {games.map((game) => (
              <option value={game.id} key={game.id}>
                {game.title}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="day">Day of Event: </label>
          <input
            type="date"
            name="day"
            className="form-control"
            value={currentEvent.day}
            onChange={handleControlledInputChange}
          ></input>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="time">Time of Event: </label>
          <input
            type="time"
            name="time"
            className="form-control"
            value={currentEvent.time}
            onChange={handleControlledInputChange}
          ></input>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Description of Event: </label>
          <input
            type="text"
            name="description"
            className="form-control"
            value={currentEvent.description}
            onChange={handleControlledInputChange}
          ></input>
        </div>
      </fieldset>

      {/* Create the rest of the input fields */}

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();
          const newEvent = {
            gameId: parseInt(currentEvent.game_id),
            day: currentEvent.day,
            time: currentEvent.time,
            description: currentEvent.description,
          };
          createEvent(newEvent);
        }}
        className="btn btn-primary"
      >
        Create Event
      </button>
    </form>
  );
};
