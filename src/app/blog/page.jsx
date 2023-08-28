import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href='/blog/testId' className={styles.container} key={item.id}>
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
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
        In, adipisci. Harum non neque minima quo veniam perferendis<br />
        maiores, magni nemo accusamus tempore rerum, earum saepe <br />cupiditate
         voluptas vitae ipsa a!</p>
      </div>
    </Link>
      ))}
    </div>
  )
}

export default Blog