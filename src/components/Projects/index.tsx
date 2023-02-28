import { Montserrat } from '@next/font/google'

import projects from '@/mocks/projects'
import ProjectItem from './ProjectItem'
import * as S from './styles'

const montserrat = Montserrat({ subsets: ['latin'] })

const Projects: React.FC = () => {
  return (
    <S.Wrapper className="mt-5 p-2">
      <S.Container className="container">
        <div className="text-center">
          <S.Title className={`${montserrat.className} mx-auto mt-5 col-10 col-sm-10 col-md-8 col-lg-6`}>
            Últimos projetos
          </S.Title>
        </div>
        <S.Row className="row">
          {projects.length > 0 && projects.map(({
            image,
            description,
            links,
            techs,
            title,
            color
          }, index) => (
            <ProjectItem
              key={index}
              image={image}
              description={description}
              links={links}
              techs={techs}
              title={title}
              color={color}
            />
          ))}
        </S.Row>
      </S.Container>
    </S.Wrapper>
  )
}

export default Projects
