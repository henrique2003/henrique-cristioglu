import { Montserrat } from '@next/font/google'

import activitCards from '@/mocks/activit-cards'
import ActivitiCard from './ActivitiCard'
import * as S from './styles'

const montserrat = Montserrat({ subsets: ['latin'] })

const Activits: React.FC = () => {
  return (
    <S.Main className="mt-5 py-4" id="activits">
      <S.Container>
        <div className="text-center">
          <S.Title className={montserrat.className}>Atividades</S.Title>
        </div>
        <S.Row className="mb-3">
          {activitCards.map(({ description, icon, title }, index) => (
            <ActivitiCard
              key={index}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </S.Row>
      </S.Container>
    </S.Main>
  )
}

export default Activits
