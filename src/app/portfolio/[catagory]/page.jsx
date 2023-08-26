import Button from '@/components/Button/Button'
import styles from './page.module.css' 
import Image from 'next/image'
const Category = ({params}) => {
  return (
    <div className={styles.container}>
    <h1 className={styles.catTitle}>{params.catagory}</h1>
    <div className={styles.item}>
    <div className={styles.content}>
    <h1 className={styles.title}>My Restaurant Website</h1>
    <p className={styles.desc}>This Web uses free API to give you food.</p>
    <Button text='see More' url='#' />
    </div>
    <div className={styles.imgContainer}>
    <Image 
    className={styles.img}
    fill={true}
    src='https://images.pexels.com/photos/4237148/pexels-photo-4237148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    alt=''
    />
    </div>
    </div>

    <div className={styles.item}>
    <div className={styles.content}>
    <h1 className={styles.title}>My First Project</h1>
    <p className={styles.desc}>This is Airbnb Clone</p>
    <Button text='see More' url='#' />
    </div>
    <div className={styles.imgContainer}>
    <Image 
    className={styles.img}
    fill={true}
    src='https://images.pexels.com/photos/4237148/pexels-photo-4237148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    alt=''
    />
    </div>
    </div>

    <div className={styles.item}>
    <div className={styles.content}>
    <h1 className={styles.title}>My Flutter App</h1>
    <p className={styles.desc}>This is my flutter App</p>
    <Button text='see More' url='#' />
    </div>
    <div className={styles.imgContainer}>
    <Image 
    className={styles.img}
    fill={true}
    src='https://images.pexels.com/photos/4237148/pexels-photo-4237148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    alt=''
    />
    </div>
    </div> 


    </div>
  )
}

export default Category