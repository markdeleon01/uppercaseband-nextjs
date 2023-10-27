import styles from './ErrorDisplay.module.css'

export default function ErrorDisplay({ error, reset }) {

    return (
        <div className={ styles.error }>
            <p>An error occurred:  { error.message }</p>
            <button onClick={ () => { reset() }}>Retry</button>
        </div>
    )
}