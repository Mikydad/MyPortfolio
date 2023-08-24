import Image from 'next/image'
import Hero from 'public/hero.png'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
const Portfolio = () => {
  return (
  <div className={styles.container}>
  <div className={styles.item}>
  <h1 className={styles.title}>
  Better design for your digital products.
  </h1>
  <p className={styles.desc}>
  Turning your Idea into Reality. We bring toge global tech industry.
  </p>
  <Button text="See Our works" url="/portfolio"/>
  </div>
  <div className={styles.item}>
  <Image src={Hero} className={styles.img}/>
  </div>
  </div> 
     

   
  )
}

export default Portfolio