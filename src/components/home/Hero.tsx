import { CircleCheckBig } from "lucide-react"
import Image from "next/image"
import cover from "../../../public/cover.jpg";
import styles from "./hero.module.css";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroLeft}>
                <h1 className={styles.title}>Lumora.dev</h1>
                <p className={styles.desc}>Welcome to Lumora.dev, your go-to resource for web development tutorials and insights.</p>
            <div className={styles.features}>
                <div className={styles.feature}>
                    <CircleCheckBig /> <span className={styles.featureText}>Interactive Code Tutorials</span>
                </div>
                <div className={styles.feature}>
                    <CircleCheckBig /> <span className={styles.featureText}>Project-Based Learning</span>
                </div>
                <div className={styles.feature}>
                    <CircleCheckBig /> <span className={styles.featureText}>Deep-Dive Articles & Insights</span>
                </div>
            </div>
        </div>
            <div>
                <Image src={cover} alt="cover" width={500} height={500} className="rounded-full" />
            </div>
        </div>
    )
}

export default Hero