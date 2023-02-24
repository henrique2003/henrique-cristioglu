import styled from 'styled-components'

export const Container = styled.div` 
  background: ${({ theme }) => theme.COLORS.OFF_WHITE};
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
  width: 100%;

  img {
    width: 50%;
    max-width: 50px;
    height: 50%;
    max-height: 50px;
  }

  @media(max-width: 800px) {
    max-width: 450px;
    margin: 0 auto;
  }
`

export const Title = styled.h4`
  margin-top: 10px;
  letter-spacing: 1px;
  font-size: 23px;
  font-family: ${({ theme }) => theme.FONTS.OPENSANS};
`

export const Description = styled.p`
  letter-spacing: 1px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
`
