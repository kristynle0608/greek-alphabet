import CardStyles from './Card.module.css'

function Card() {
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