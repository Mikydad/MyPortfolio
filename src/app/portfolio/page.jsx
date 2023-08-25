import styles from './page.module.css'
import Projects from '@/components/projects/Projects'
import Hero from 'public/apps.jpg'

const portfolio = () => {
  const projectText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ';
  return (
    <div className={styles.container}>
      <Projects imgSrc={Hero} text={projectText}/>
      <Projects imgSrc={Hero} text={projectText}/>
      <Projects imgSrc={Hero} text={projectText}/>
      <Projects imgSrc={Hero} text={projectText}/>

    </div>
  )
}

export default portfolio