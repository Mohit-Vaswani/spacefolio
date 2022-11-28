export const InfoCard = ({props}) => {
    return(
        <article>
            <img src={props.image} alt="Image"/>
            <p>{props.info}</p>
        </article>
    )
}