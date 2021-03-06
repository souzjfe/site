import { Container } from '@/styles/pages/Links'
import SEO from '@/components/SEO'
import Link from '@/components/Link'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import BtnTheme from '@/components/BtnTheme'

const Home: React.FC = () => {
  const description = 'OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'
  return (
    <Container>
      <SEO title="HOME" image="/banner.png" description={description} />
      <main>
        <section>
          <h1>OOOPS...</h1>
          <h4>Ainda estamos trabalhando nesse site</h4>
          <p>Não deixe de acompanhar a gente nas redes sociais</p>
          <BtnTheme />
          <Link
            icon={FaInstagram}
            href="https://www.instagram.com/occamengenharia/"
            text="Instagram"
          />
          <Link
            icon={FaLinkedin}
            href="https://www.linkedin.com/company/occamengenharia/"
            text="Linkedin"
          />
          <Link
            icon={FaGithub}
            href="https://github.com/occamengenharia"
            text="Github"
          />

          <img src="occam.png" alt="OCCAM Engenharia" />
        </section>
        <img src="/Isometric.png" alt="Homens trabalando com tecnologia" />
      </main>
    </Container>
  )
}

export default Home
