import Image from 'next/image'
import styles from './page.module.css'
const Post = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>MyBLog</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe et atque, non nihil obcaecati nobis eos, possimus mollitia debitis, dicta id optio ullam pariatur accusamus amet veniam similique? Minus, vero.
          </p>
          <div className={styles.author}>
            <Image
              src='https://images.pexels.com/photos/9739345/pexels-photo-9739345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Mikodad</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/9739345/pexels-photo-9739345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam illum totam culpa exercitationem placeat ad perspiciatis nemo officia, harum, autem esse nesciunt vero repudiandae deleniti quos corrupti voluptatum laborum itaque? <br />
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consectetur voluptatibus magni deleniti consequuntur aperiam sint? Numquam, commodi iusto, aliquid eius sapiente asperiores harum repellendus unde quas animi fugiat impedit.       
        </p>
      </div>
    </div>
  )
}

export default Post