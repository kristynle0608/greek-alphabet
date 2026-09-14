import CardStyles from './Card.module.css'

function Card() {
    // This function should verify whether the user has clicked the right card
    // That means that Card should receive the answer key along with the card's key
    const clickCard = () => {
        console.log("Click card")
    }
     return (
        <div className={CardStyles.card} onClick={clickCard}>
            <h3>Letter</h3>
        </div>
     )
}

export default Card;