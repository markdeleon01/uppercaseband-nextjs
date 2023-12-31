import styles from './ErrorDisplay.module.css'

export default function ErrorDisplay({ error, reset }) {

    return (
        <div data-testid='error' className={ styles.error }>
            <p>An error occurred:  { error.message }</p>
            <button data-testid='retry' onClick={ () => { reset() }}>Retry</button>
        </div>
    )
}
