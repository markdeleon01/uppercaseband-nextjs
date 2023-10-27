import styles from './LoadingPlaceholder.module.css'

export default function LoadingPlaceholder() {

    return (
        <div className={ styles.loading }>
            <p>Loading...</p>
        </div>
    )

}