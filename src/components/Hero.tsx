import styles from "../styles/components/Hero.module.scss"
import {
    RiGithubFill,
    RiInstagramLine,
    RiTwitterFill,
    RiLinkedinLine,
    RiGitlabLine,
} from "react-icons/ri"

function Hero() {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.name}>Christianto Chen</div>
                <div className={styles.title}>Software Engineer</div>
                <div className={styles.media}>
                    <a href="https://github.com/christiantochen" target="_blank" title="Connect with me on Github">
                        <RiGithubFill className={styles.medialink} />
                    </a>
                    <a href="https://twitter.com/christiantochen" target="_blank" title="Connect with me on Twitter">
                        <RiTwitterFill className={styles.medialink} />
                    </a>
                </div>
                <a href="mailto:christianto_chen@live.com" className={styles.email}>
                    christianto_chen@live.com
                </a>
            </div>
        </div>
    )
}

export default Hero