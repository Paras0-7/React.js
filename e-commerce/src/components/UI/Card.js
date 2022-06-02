import styles from './css/Card.module.css'
export const Card = function(props){

    const className = `${styles.card} ${props.className}`
    return (
        <div className={className}>{props.children}</div>

    )
}