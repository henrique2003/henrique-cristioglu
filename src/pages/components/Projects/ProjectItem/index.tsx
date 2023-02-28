import Image, { type StaticImageData } from 'next/image'
import { FaReact, FaCss3, FaNodeJs } from 'react-icons/fa'
import { Montserrat, Open_Sans } from '@next/font/google'

import { styled_components, typescript, mongo, sass } from '@/assets'
import * as S from './styles'

const montserrat = Montserrat({ subsets: ['latin'], weight: '400' })

const opensans = Open_Sans({ subsets: ['latin'] })

interface Props {
  image: StaticImageData
  title: string
  techs: string[]
  description: string
  links: {
    site?: string
    github: string
  }
  color: string
}

const ProjectItem: React.FC<Props> = ({ image, title, techs, links, description, color }) => {
  function loadTechs(tech: string): JSX.Element {
    switch (tech) {
      case 'react-native':
        return (
          <FaReact title="react native" size={30} color='#5ac9e7' />
        )
      case 'react':
        return (
          <FaReact title="react native" size={30} color='#5ac9e7' />
        )
      case 'styled-components':
        return (
          <Image
            src={styled_components}
            alt="icone do styled-components"
            title="styled-components"
          />
        )
      case 'typescript':
        return (
          <Image
            src={typescript}
            alt="icone do typescript"
            title="styled-components"
          />
        )
      case 'css':
        return (
          <FaCss3 title="css" size={30} color='#264ce4e5' />
        )
      case 'mongodb':
        return (
          <Image
            src={mongo}
            alt="icone do mongodb"
            title="icone do mongodb"
          />
        )
      case 'nodejs':
        return (
          <FaNodeJs title="nodejs" size={30} color='#539e43' />
        )
      default:
        return (
          <Image
            src={sass}
            alt="icone do sass"
            title="icone do sass"
          />
        )
    }
  }

  return (
    <S.Container className="col-11 mx-auto col-sm-12">
      <S.Row className="row">
        <S.Column className="col-11 mx-auto col-sm-12" color={color}>
          <S.Row className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 p-0 m-0 pr-lg-3">
              <Image
                src={image}
                alt={`Image mostrando o projeto ${title}`}
                title={title}
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 pb-3">
              <S.Title className={montserrat.className} color={color}>{title}</S.Title>
              <S.Content className="content" color={color}>
                <article>
                  {techs.length > 0 && techs.map(techItem => loadTechs(techItem))}
                </article>
                <section>
                  <p className={opensans.className}>{description}</p>
                  {links.site && (
                    <a
                      href={links.site}
                      target="_blanck"
                      className={montserrat.className}
                    >Site</a>
                  )}
                  <a
                    href={links.github}
                    target="_blanck"
                    className={montserrat.className}
                  >Github</a>
                </section>
              </S.Content>
            </div>
          </S.Row>
        </S.Column>
      </S.Row>
    </S.Container>
  )
}

export default ProjectItem
