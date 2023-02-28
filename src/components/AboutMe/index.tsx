import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { Poppins, Montserrat, Open_Sans } from '@next/font/google'

import themes from '@/themes'
import { henrique } from '@/assets'
import * as S from './styles'

const montserrat = Montserrat({ subsets: ['latin'] })

const opensans = Open_Sans({ subsets: ['latin'] })

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

const AboutMe: React.FC = () => {
  return (
    <S.Container className='container'>
      <S.Card className='mt-5 p-3 mb-3'>
        <S.Row className="row">
          <S.Column className="col-12 col-sm-12 col-md-8 col-lg-4 mx-md-auto img-sobre">
            <Image src={henrique} alt="Image de perfil de Henrique" className="img-fluid" />
          </S.Column>
          <S.Column className="col-12 col-sm-12 col-md-12 col-lg-8">
            <S.Content className="px-2 mt-2 mt-sm-2 mt-md-0 mt-lg-4">
              <S.Title className={montserrat.className}>Sobre</S.Title>
              <S.Text className={poppins.className + 'mt-4'}>
                Dedicado a aprender novas tecnologias, busco sempre usar meus
                conhecimentos e experiências para desenvolver os melhores
                sites/sistemas. Estou atualmente trabalhando com a stack JS com
                ReactJs no front-end, NodeJs no back-end e React Native no
                Mobile.
              </S.Text>
              <S.ContactLink
                href="https://api.whatsapp.com/send?phone=5511959426382"
                target="_blank"
                className={opensans.className + 'btn'}
              >
                <FaWhatsapp size={20} color={themes.COLORS.WHITE} /> Entrar em contato
              </S.ContactLink>
            </S.Content>
          </S.Column>
        </S.Row>
      </S.Card>
    </S.Container>
  )
}

export default AboutMe
