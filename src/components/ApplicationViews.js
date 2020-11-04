import React from "react";
import { Route } from "react-router-dom";
import { EventList } from "./event/EventList";
import { EventProvider } from "./event/EventProvider";
import { GameForm } from "./game/GameForm";
import { GameList } from "./game/GameList";
import { GameProvider } from "./game/GameProvider";

export const ApplicationViews = (props) => {
  return (
    <>
      <GameProvider>
        <Route exact path="/">
          <GameList {...props} />
        </Route>
        <Route exact path="/games">
          <GameList {...props} />
        </Route>
        <Route
          exact
          path="/games/new"
          render={(props) => <GameForm {...props} />}
        />
      </GameProvider>

      <EventProvider>
        <Route exact path="/events">
          <EventList />
        </Route>
      </EventProvider>
    </>
  );
};
