'use client'
import {useState} from 'react'
import FactionTitle from '../components/FactionTitle'
import '../styles/main.css'

const Main = () => {
    let factions = ["Monsters", "Nilfgaard", "Northern Realms", "Scoia'tael"]
    const [faction, setFaction] = useState(0)
 
    return (
        <main className="main">
            <FactionTitle factions={factions} faction={faction} setFaction={setFaction} />
        </main>
    )
}

export default Main