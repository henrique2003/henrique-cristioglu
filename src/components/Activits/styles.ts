import styled from 'styled-components'

export const Main = styled.div`
  background: ${({ theme }) => theme.COLORS.GRAY}; 
`

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media(max-width: 1250px) {
    padding: 0 30px;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 25px;

  @media(max-width: 800px) {
    flex-direction: column;
  }
`

export const Title = styled.h3`
  font-size: 35px;
  letter-spacing: 1px;
  font-family: ${({ theme }) => theme.FONTS.MONTSERRAT}; 
  color: ${({ theme }) => theme.COLORS.WHITE}; 
  font-weight: 500;
`
