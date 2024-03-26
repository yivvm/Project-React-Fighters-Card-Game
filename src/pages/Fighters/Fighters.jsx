import './fighters.css'
import Card from '../../Card/Card'
import { useState } from 'react'

export default function Fighters() {
    const [firstSelected, setFirstSelected] = useState();
    // const [secondSelected, setSecondSelected] = useState("");

    const [cards, setCards] = useState([
        {
            // id: 1,
            name: 'Jacke',
            attack: 25,
            health: 135,
        },
        {
            // id: 1,
            name: 'Jake',
            attack: 5,
            health: 15,
        },
        {
            // id: 2, 
            name: 'Jake2',
            attack: 6,
            health: 20,
        },
        {
            // id: 3, 
            name: 'Jake3',
            attack: 3,
            health: 25,
        },
        {
            // id: 4, 
            name: 'Jake4',
            attack: 7,
            health: 30,
        },
        {
            // id: 5, 
            name: 'Jake5',
            attack: 8,
            health: 35,
        },
        {
            // id: 6, 
            name: 'Jake6',
            attack: 2,
            health: 40,
        },
        {
            // id: 7, 
            name: 'Jake7',
            attack: 15,
            health: 45,
        }
    ])

    function handleSelected(id) {
        let secondSelected = -1;
        
        console.log('clicked id: ', id)
        console.log('firstselected: ', firstSelected)
        console.log(!firstSelected == false)

        if (!(firstSelected + 1)) {
            setFirstSelected(id);
            console.log('firstSelected ID: ', firstSelected)
            console.log('first selected: ', cards[id])
        } else {
            secondSelected = id;
            console.log('second selected: ', cards[id])

            setFirstSelected(-1)
        } 

        if ((firstSelected+1) && (secondSelected+1) && secondSelected !== firstSelected) {
            const fightersArray = [...cards];
            // Just found out: change const fightersArray = cards; into const fightersArray = [...cards]; , it works.

            fightersArray[secondSelected].health -= fightersArray[firstSelected].attack

            console.log(fightersArray)
            setCards(fightersArray)
        } else if ((firstSelected+1) && (secondSelected+1) && secondSelected === firstSelected) {
            console.log('The second card cannot be the same as the first card. Click on two cards that differ from each other.')
        }
    }

  return (
    <div className="Fighters">
        {/* <h2>{firstSelected}</h2> */}
        {/* <h2>{secondSelected}</h2> */}
        {cards.map((item, index) => {
            return (
                <Card 
                    key={index} 
                    id={index}
                    name={item.name} 
                    attack={item.attack} 
                    health={item.health} 
                    handleSelected={handleSelected}
                />
            )
        })}
    </div>
  )
}
