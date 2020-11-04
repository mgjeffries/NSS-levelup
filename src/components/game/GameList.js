import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import "./game.css"
export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])

    return (
        <article className="games">
            <h2>Games:</h2>
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <h3 className="game__title">{game.title} by {game.maker}</h3>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__skillLevel">Skill level is {game.skill_level}</div>
                    </section>
                })
            }
        </article>
    )
}