import Image from 'next/image'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { Poppins, Montserrat, Open_Sans } from '@next/font/google'

import { dev } from '@/assets'
import * as S from './styles'
import themes from '@/themes'
import Link from 'next/link'

const montserrat = Montserrat({ subsets: ['latin'] })

const opensans = Open_Sans({ subsets: ['latin'] })

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

const Introduction: React.FC = () => {
  return (
    <S.Container className="container">
      <S.Row className="row mt-3 px-3 px-sm-0">
        <S.Col className="col-12 col-sm-12 col-md-12 col-lg-6 order-2 order-sm-2 order-md-2 order-lg-1">
          <S.Content className="text mt-lg-5 pt-lg-5">
            <S.Name className={montserrat.className}>Henrique de Melo Cristioglu</S.Name>
            <S.Description className={poppins.className + 'mt-3'}>
              Dev Front-end ReactJs | Back-end NodeJs | Mobile React Nativec
            </S.Description>
            <S.Education className={opensans.className + 'mt-1'}>Cursando Sistema de informação.</S.Education>
            <div className="mt-3">
              <S.ProfessionalLink
                href="https://github.com/henrique2003"
                target="_blank"
                className={opensans.className}
              >
                <FaGithubSquare color='rgb(44, 44, 44)' size={35} />
              </S.ProfessionalLink>
              <S.ProfessionalLink
                href="https://www.linkedin.com/in/henrique-cristioglu-a2b2b2194/"
                target="_blank"
                className={opensans.className}
              >
                <FaLinkedin color='rgb(44, 44, 44)' size={35} />
              </S.ProfessionalLink>
            </div>
          </S.Content>
        </S.Col>
        <S.Col
          className="col-12 col-sm-12 col-md-12 col-lg-6 order-1 order-sm-1 order-md-1 order-lg-2 text-center"
        >
          <Image
            src={dev}
            alt="Desenvolvedor fullstack"
            className="img-fluid"
          />
        </S.Col>
      </S.Row>
      <S.ArrowCtn className="text-center mt-4 mt-sm-4 mt-md-4 mt-lg-0 pt-5 pb-3">
        <Link href="/#activits"
        >
          <IoIosArrowDown size={40} color={themes.COLORS.PRIMARY} />
        </Link>
      </S.ArrowCtn>
    </S.Container>
  )
}

export default Introduction
