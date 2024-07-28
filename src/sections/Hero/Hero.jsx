import { GrGithub, GrLinkedin } from "react-icons/gr";
import { LuMoonStar, LuSun } from "react-icons/lu";
import avatarImg from '../../assets/lgzarturo.jpg';
import CV from '../../assets/Profile-ArturoLopez.pdf';
import { useTheme } from "../../common/ThemeContext";
import styles from './HeroStyles.module.css';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? <LuMoonStar /> : <LuSun />;
  const themeIconClass = theme === 'light' ? styles.light : styles.dark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={avatarImg} alt="Arturo Lopez - Avatar" />
        <themeIcon.type className={styles.colorModeIcon} onClick={toggleTheme} />
      </div>
      <div className={styles.info}>
        <h1>
          Arturo <br />Lopez
        </h1>
        <h2>Java Developer</h2>
        <span>
          <a href="https://linkedin.com/me/lgzarturo" target="_blank">
            <GrLinkedin className={themeIconClass} />
          </a>
          <a href="https://github.com/lgzarturo" target="_blank">
            <GrGithub className={themeIconClass} />
          </a>
        </span>
        <p className={styles.description}>
          Mi enfoque es el desarrollo de productos de software de calidad, con un alto nivel de compromiso y responsabilidad.
        </p>
        <a href={CV} download>
          <button className="hover">Descargar CV</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
