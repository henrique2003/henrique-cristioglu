import { desktop, systems, mobile_app } from '@/assets'
import ActivitiCard from '../ActivitiCard'
import * as S from './styles'

const Activits: React.FC = () => {
  return (
    <S.Main className="mt-5 py-4" id="activits">
      <S.Container>
        <div className="text-center">
          <S.Title>Atividades</S.Title>
        </div>
        <S.Row className="mb-3">
          <ActivitiCard
            icon={desktop}
            title='Sites'
            description='Criação de web sites, focado principalmente no design responsivo.'
          />
          <ActivitiCard
            icon={systems}
            title='Sistemas'
            description='Desenvolvimento de sistemas, visando a satisfação do gosto go cliente.'
          />
          <ActivitiCard
            icon={mobile_app}
            title='Aplicativos'
            description='Contrução de aplicativos hibridos, priorizando sempre a experiência do usuário.'
          />
        </S.Row>
      </S.Container>
    </S.Main>
  )
}

export default Activits
