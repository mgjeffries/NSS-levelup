import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "../game/GameProvider";

export const EventForm = (props) => {
  const { games, getGames } = useContext(GameContext);
  const [currentEvent, setEvent] = useState({});

  useEffect(() => {
    getGames();
  }, []);

  const handleControlledInputChange = () => {};

  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Schedule New Event</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="gameId">Game: </label>
          <select
            name="gameId"
            className="form-control"
            value={currentEvent.gameId}
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a game...</option>
            {games.map((game) => (
              <option></option>
            ))}
          </select>
        </div>
      </fieldset>

      {/* Create the rest of the input fields */}

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          // Create the event
        }}
        className="btn btn-primary"
      >
        Create Event
      </button>
    </form>
  );
};
