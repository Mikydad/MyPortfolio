import Image from "next/image"
import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
    <div>@2023 MyNextBlog</div>
    <div>
      <div className={styles.social}>
      <Image src='/1.png' alt="footerlogo" height={15} width={15} className="icons"/>
      <Image src='/2.png' alt="footerlogo" height={15} width={15} lassName="icons"/>
      <Image src='/3.png' alt="footerlogo" height={15} width={15} lassName="icons"/>
      <Image src='/4.png' alt="footerlogo" height={15} width={15} lassName="icons"/>
    </div>
    </div>
    </div>
  )
}

export default Footer