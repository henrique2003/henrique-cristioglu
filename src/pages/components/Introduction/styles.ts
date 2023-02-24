import styled from 'styled-components'

export const Container = styled.div``

export const Row = styled.div``

export const Col = styled.div`

  img {

  }
`

export const Content = styled.div``

export const Name = styled.h2`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
  letter-spacing: 1px;
  font-size: 35px;
  font-weight: 600;
`

export const Description = styled.h3`
  font-size: 22px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.COLORS.GREY};
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  margin-top: 0px;
`

export const Education = styled.p`
  font-size: 18px;
  letter-spacing: 1px;
  font-family: ${({ theme }) => theme.FONTS.OPENSANS};
  margin-top: 15px;
`

export const ProfessionalLink = styled.a`
  font-size: 18px;
  letter-spacing: 1px;
  font-family: ${({ theme }) => theme.FONTS.OPENSANS};
  margin-top: 15px;
  text-decoration: none;
  margin-right: 5px;
`

export const ArrowCtn = styled.div`
  a {
    text-decoration: none;
    cursor: inherit;
  }
`
