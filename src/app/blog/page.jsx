import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
    <Link href='/blog/testId' className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
        src='https://images.pexels.com/photos/17485819/pexels-photo-17485819/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-ways-in-which-ai-can-solve-important-problems-it-was-created-by-vincent-schwenk-as-part-of-the-visualis.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt=''
        width={400}
        height={250}
        className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>How to be good at Cooding</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
        In, adipisci. Harum non neque minima quo veniam perferendis<br />
        maiores, magni nemo accusamus tempore rerum, earum saepe <br />cupiditate
         voluptas vitae ipsa a!</p>
      </div>
    </Link>
    <Link href='/blog/testId' className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
        src='https://images.pexels.com/photos/17485819/pexels-photo-17485819/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-ways-in-which-ai-can-solve-important-problems-it-was-created-by-vincent-schwenk-as-part-of-the-visualis.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt=''
        width={400}
        height={250}
        className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>How to be good at Cooding</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
        In, adipisci. Harum non neque minima quo veniam perferendis<br />
        maiores, magni nemo accusamus tempore rerum, earum saepe <br />cupiditate
         voluptas vitae ipsa a!</p>
      </div>
    </Link>
    <Link href='/blog/testId' className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
        src='https://images.pexels.com/photos/17485819/pexels-photo-17485819/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-ways-in-which-ai-can-solve-important-problems-it-was-created-by-vincent-schwenk-as-part-of-the-visualis.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt=''
        width={400}
        height={250}
        className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>How to be good at Cooding</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
        In, adipisci. Harum non neque minima quo veniam perferendis<br />
        maiores, magni nemo accusamus tempore rerum, earum saepe <br />cupiditate
         voluptas vitae ipsa a!</p>
      </div>
    </Link>
    </div>
  )
}

export default Blog