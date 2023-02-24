import Image, { type StaticImageData } from 'next/image'
import * as S from './styles'

interface Props {
  icon: StaticImageData
  title: string
  description: string
}

const ActivitiCard: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <S.Container>
      <div className="p-4">
        <Image src={icon} alt={`icone de ${title}`} />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </div>
    </S.Container>
  )
}

export default ActivitiCard
