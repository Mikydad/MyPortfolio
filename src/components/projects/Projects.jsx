import Image from 'next/image'
import styles from './projects.module.css'

const Projects = ({imgSrc, text}) => {
  return (
    <div className={styles.container}>
    <Image src={imgSrc} className={styles.img} />
    <p>{text}</p>
    </div>
  )
}

export default Projects