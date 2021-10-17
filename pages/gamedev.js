import { useState } from 'react';
import Script from 'next/script';

const chart = `
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#000', 'textColor': '#fff', 'primaryTextColor': '#fff', 'lineColor': '#aaa'}}}%%

flowchart TB

Game[Game]
Quote1[All games use mechanics]
Gameplay[Gameplay]
GameplayDefinition["[ label ] Gameplay could be defined as<br>the combination and interaction of many elements of a game"]
CDefinition[Definition]
CDefinition1[rules that govern and guide the player's actions,<br> as well as the game's response to them.<br> A game's mechanics thus effectively specifies how the game will work for the people who play it.]
CDefinition2[systems of interactions between the player and the game]
CDefinition3[the rules and procedures that guide the player <br>and the game response to the player's moves or actions]

Game --> GameDesignSubgraph
Game --> Gameplay
Gameplay --> GameplayDefinition
Gameplay -- a set of --> GameMechanicSubgraph
GameDesignElements[10-elements-of-good-game-design]
GameDesignElements1[A clear objective]
GameDesignElements2[Constraints]
GameDesignElements3[Interactivity]
GameDesignElements4[Runaway leader killer]
GameDesignElements5[Inertia]
GameDesignElements6[Surprise]
GameDesignElements7[Strategy]
GameDesignElements8[Fun]
GameDesignElements9[Flavor]
GameDesignElements10[A hook]

GameMechanic[Game Mechanic]
KeyGameMechanic[Key Game Mechanics]
GameMechanicElements[Game Mechanic Elements]
GameMechanicElements1[Quantity]
GameMechanicElements2[Spatial]
GameMechanicElements3[State]
GameMechanicElements4[Action]

subgraph GameDesignSubgraph[Game Design]
  GameDesignElements[10-elements-of-good-game-design]
  GameDesignElements1[A clear objective]
  GameDesignElements2[Constraints/Rules]
  GameDesignElements2A[setup]
  GameDesignElements2B[progression of play]
  GameDesignElements2C[resolution]
  GameDesignElements3[Interactivity]
  GameDesignElements4[Runaway leader killer]
  GameDesignElements5[Inertia]
  GameDesignElements6[Surprise]
  GameDesignElements7[Strategy]
  GameDesignElements8[Fun]
  GameDesignElements9[Flavor]
  GameDesignElements10[A hook]

  GameDesignElements --> GameDesignElements1
  GameDesignElements --> GameDesignElements2
  GameDesignElements --> GameDesignElements3
  GameDesignElements --> GameDesignElements4
  GameDesignElements --> GameDesignElements5
  GameDesignElements --> GameDesignElements6
  GameDesignElements --> GameDesignElements7
  GameDesignElements --> GameDesignElements8
  GameDesignElements --> GameDesignElements9
  GameDesignElements --> GameDesignElements10
  GameDesignElements2-->GameDesignElements2A
  GameDesignElements2-->GameDesignElements2B
  GameDesignElements2-->GameDesignElements2C
end

GameDesignSubgraph --> GameMechanicSubgraph

subgraph GameMechanicSubgraph[Game Mechanic]
  GameMechanic-->CDefinition
  CDefinition-->CDefinition1
  CDefinition-->CDefinition2
  CDefinition-->CDefinition3

  GameMechanic-->Quote1

  GameMechanic-->KeyGameMechanic
  KeyGameMechanic1[Turns]
  KeyGameMechanic2[Action points]
  KeyGameMechanic3[Auction or bidding]
  KeyGameMechanic4[Cards]
  KeyGameMechanic5[Capture/eliminate]
  KeyGameMechanic6[Catch-up]
  KeyGameMechanic7[Dice]
  KeyGameMechanic8[Movement]
  KeyGameMechanic9[Risk and reward]
  KeyGameMechanic10[Role-playing]
  KeyGameMechanic11[Tile-laying]
  KeyGameMechanic12[Worker placement]
  KeyGameMechanic13[Game modes]
  KeyGameMechanic14[Victory conditions]
  KeyGameMechanic-->KeyGameMechanic1
  KeyGameMechanic-->KeyGameMechanic2
  KeyGameMechanic-->KeyGameMechanic3
  KeyGameMechanic-->KeyGameMechanic4
  KeyGameMechanic-->KeyGameMechanic5
  KeyGameMechanic-->KeyGameMechanic6
  KeyGameMechanic-->KeyGameMechanic7
  KeyGameMechanic-->KeyGameMechanic8
  KeyGameMechanic-->KeyGameMechanic9
  KeyGameMechanic-->KeyGameMechanic10
  KeyGameMechanic-->KeyGameMechanic11
  KeyGameMechanic-->KeyGameMechanic12
  KeyGameMechanic-->KeyGameMechanic13
  KeyGameMechanic-->KeyGameMechanic14

  GameMechanic-->GameMechanicElements
  GameMechanicElements-->GameMechanicElements1
  GameMechanicElements-->GameMechanicElements2
  GameMechanicElements-->GameMechanicElements3
  GameMechanicElements-->GameMechanicElements4
end`;

export default function Gamedev() {
  const [mermaidIsLoaded, setMermaidIsLoaded] = useState(false);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"
        onLoad={() => setMermaidIsLoaded(true)}
      ></Script>
      {mermaidIsLoaded && (
        <>
          <Script id="mermaidInit">{`mermaid.initialize({ startOnLoad: true });`}</Script>

          <div className="mermaid">{chart}</div>

          <p>Sources:</p>
          <ul>
            <li>https://en.wikipedia.org/wiki/Game_mechanics</li>
            <li>
              https://www.gamedeveloper.com/disciplines/the-4-elements-of-game-mechanics
            </li>
          </ul>
        </>
      )}
    </>
  );
}
