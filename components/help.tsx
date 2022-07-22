import styles from './help.module.css'

export default function HelpMessage() {

    return (
        <div className={styles.help}>
            <p className={styles.helpp}>Hey there, you, browsing this website! If you have a minute to give me, <a className={styles.helppa} rel="noreferer" href="https://library.jae.fi/doku.php?id=help_me">I need your help</a>!</p>
        </div>
    )
}
