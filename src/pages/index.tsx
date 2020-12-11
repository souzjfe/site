import * as Styles from '@/styles/pages/Home'
import {FaCaretRight, FaCaretLeft} from 'react-icons/fa';
import SEO from '@/components/SEO'

const Home: React.FC = () => {
  const description = 'OCCAM Engenharia, Empresa Júnior de Computação UTFPR-PB'
  return (
    <Styles.Page>
        <Styles.Initial>
          <main>
            <h1>Soluções Simples, Resultados Inovadores</h1>
            <div>
              <img src="animacao.gif" alt="logo animada OCCAM"/>

              <div>
                <FaCaretLeft />
                <span>O novo site da OCCAM está aqui!</span>
                <FaCaretRight />
              </div>
            </div>
          </main>
        </Styles.Initial>
        <Styles.Actuation>Area de Atuacao</Styles.Actuation>
        <Styles.Members>Mombros</Styles.Members>
        <Styles.Footer>footer</Styles.Footer>
    </Styles.Page>
  )
}

export default Home
