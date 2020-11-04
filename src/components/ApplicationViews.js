import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList"
import { GameProvider } from "./game/GameProvider"

export const ApplicationViews = () => {
    return <>
        <GameProvider>
            <Route exact path="/">
                <GameList />
            </Route>
        </GameProvider>
    </>
}
