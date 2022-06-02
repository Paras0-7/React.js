import styles from './css/Button.module.css'
export const Button = function(props){
    return (
        <button onClick ={props.handler} className={styles.btn}>
            {props.children}
        </button>

    )
}