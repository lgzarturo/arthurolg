import { FaSquareXTwitter } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { LuMoonStar, LuSun } from "react-icons/lu";
import avatarImg from '../../assets/lgzarturo.jpg';
import CV from '../../assets/WebDeveloper-ArturoLopez.pdf';
import Presentation from '../../assets/Perfil_Profesional_Arturo_Lopez.pdf'
import { useTheme } from "../../common/ThemeContext";
import styles from './HeroStyles.module.css';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? <LuMoonStar /> : <LuSun />;
  const themeIconClass = theme === 'light' ? styles.light : styles.dark;

  const handleClick = (e) => {
    e.preventDefault();
    const event_category = e.currentTarget.getAttribute('data-category');
    const event_label = e.currentTarget.getAttribute('data-label');
    const event = e.currentTarget.getAttribute('data-event');
    const href = e.currentTarget.getAttribute('href');
    window.dataLayer.push({
      event,
      event_category,
      event_label,
      event_value: href
    });

    setTimeout(() => {
      window.open(href, '_blank');
    }, 250);
  }

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={avatarImg}
          alt="Arturo Lopez - Avatar" />
        <themeIcon.type
          className={styles.colorModeIcon}
          onClick={toggleTheme} />
      </div>
      <div className={styles.info}>
        <h1>
          Arturo <br />Lopez
        </h1>
        <h2>Java Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/lgzarturo"
            data-category="linkedin"
            data-label="linkedin_profile"
            data-event="social_click"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}>
            <GrLinkedin className={themeIconClass} />
          </a>
          <a href="https://github.com/lgzarturo"
            data-category="github"
            data-label="github_profile"
            data-event="social_click"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}>
            <GrGithub className={themeIconClass} />
          </a>
          <a href="https://x.com/arturolgdev"
            data-category="x"
            data-label="x_profile"
            data-event="social_click"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}>
            <FaSquareXTwitter className={themeIconClass} />
          </a>
          <a href="https://github.com/lgzarturo/arthurolg/blob/main/README.md"
            data-category="github"
            data-label="arthurolg_github_profile"
            data-event="click"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}>
            <FiExternalLink className={themeIconClass} />
          </a>
        </span>
        <p className={styles.description}>
          Mi enfoque es el desarrollo de productos de software de calidad, con un alto nivel de compromiso y responsabilidad.
        </p>
        <a href={CV}
          download
          data-category="download"
          data-label="arthurolg_pdf_cv"
          data-event="conversion"
          onClick={handleClick}>
          <button className="hover">Descargar Curriculum</button>
        </a>
        <a href={Presentation}
          download
          data-category="download"
          data-label="arthurolg_pdf_presentation"
          data-event="conversion"
          onClick={handleClick}>
          <button className="hover">Presentación</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
