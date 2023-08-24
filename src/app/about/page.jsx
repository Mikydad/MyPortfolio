import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image
      src="https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      fill={true}
      alt='about banner'
      className={styles.img}
      />
      <div className={styles.imgText}>
       <h1 className={styles.imgTitle}>Digital Storytellers</h1>
       <h2 className={styles.imgDesc}>Handcrafting award winning digital projects</h2>
      </div>
    </div>
    <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Who Are We?</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Commodi ullam eveniet recusandae consequuntur enim, 
           voluptates cupiditate aliquam exercitationem <br/><br/>inventore 
           ipsa, sed doloremque quos. Sapiente, nostrum. Architecto 
           placeat tempora culpa beatae.</p>
      </div>
      <div className={styles.item}>
      <h1 className={styles.title}>What We Do?</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Commodi ullam eveniet recusandae consequuntur enim, 
           voluptates cupiditate aliquam exercitationem <br/><br/>inventore 
           ipsa, sed doloremque quos. Sapiente, nostrum. Architecto 
           placeat tempora culpa beatae.</p>
      <Button text="Contact" url="/Contact" />
      </div>
    </div>
    </div>
  )
}

export default About