'use client'
import { Dispatch, SetStateAction } from "react"

type FactionTitleProps = {
  faction: number
  factions: string[]
  setFaction:Dispatch<SetStateAction<number>>
}

const FactionTitle = ({faction, setFaction, factions}: FactionTitleProps) => {
     
  function prevFaction(){
    setFaction(prevFaction => {
      if(prevFaction === 0) return factions.length - 1
      else return --prevFaction
    })
  }

  function nextFaction(){ 
    setFaction(prevFaction => {
      if(prevFaction === factions.length - 1) return 0
      else return ++prevFaction
    })
  }

  return (
    <section className="faction">
      <button onClick={prevFaction}>
        ◀
      </button>
      <p>
        {factions[faction]}        
      </p>
      <button onClick={nextFaction}>
        ▶
      </button>
    </section>
  )
}

export default FactionTitle