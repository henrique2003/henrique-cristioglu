import styled from 'styled-components'

export const Container = styled.div``

export const Card = styled.div`
  border-radius: 2px;
  -webkit-box-shadow: 4px 4px 7px 0px rgba(128, 128, 128, 1);
  -moz-box-shadow: 4px 4px 7px 0px rgba(128, 128, 128, 1);
  box-shadow: 4px 4px 7px 0px rgba(128, 128, 128, 1);
  
  img {
    border-radius: 50%;
  }
`

export const Row = styled.div``

export const Column = styled.div`
  @media(max-width: 1000px) {
    padding-bottom: 20px;
  }
`

export const Content = styled.div``

export const Title = styled.h3`
  font-size: 30px;
  letter-spacing: 1px;
  font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
  font-weight: 500;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
  width: 120px;
`

export const Text = styled.p`
  letter-spacing: 1px;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: 19px;
  color: ${({ theme }) => theme.COLORS.OFF_BLACK};
  margin-bottom: 30px;
`

export const ContactLink = styled.a`
  font-size: 17px;
  letter-spacing: 1px;
  font-family: ${({ theme }) => theme.FONTS.OPENSANS};
  border: 1px solid ${({ theme }) => theme.COLORS.GREY};
  border-radius: 5px;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.GREY};
  font-weight: 500;
  padding: 12px 20px;
  
  &:hover {
    text-decoration: none;
    filter: brightness(0.9);
    color: ${({ theme }) => theme.COLORS.WHITE};
    transition: all 0.3s ease;
  }
`
