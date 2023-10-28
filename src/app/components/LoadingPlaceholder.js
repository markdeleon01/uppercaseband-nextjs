import styles from './LoadingPlaceholder.module.css'

export default function LoadingPlaceholder() {

    return (
        <div data-testid='loading' className={ styles.loading }>
            <p>Loading...</p>
        </div>
    )

}