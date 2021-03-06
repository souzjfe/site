import {
  Container,
  InternalLinks,
  SectionImage,
  SocialLinks,
  SocialLinksIcons
} from './styles'

import links from './links'

import SectionLinkss from './SectionLinks'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <Container>
      <InternalLinks>
        <SectionImage>
          <img src="/occam.png" alt="OCCAM Engenharia" />
          <span>
            Empresa júnior de Engenharia de computação.{' '}
            <p>
              POLITEC – Sala 492 | Avenida Elisa Rosa Colla Padoan , 100 –
              Fraron. Pato Branco 85503-390.
            </p>
          </span>
        </SectionImage>

        {links.map(link => (
          <SectionLinkss key={link.title} data={link} />
        ))}
      </InternalLinks>

      <SocialLinks>
        <span>Copyright 2020</span>

        <SocialLinksIcons>
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <FaGithub />
          </a>
          <a href="/">
            <FaLinkedin />
          </a>
        </SocialLinksIcons>
      </SocialLinks>
    </Container>
  )
}

export default Footer
