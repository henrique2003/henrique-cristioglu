import styled from 'styled-components'

export const Container = styled.div`
`

export const Row = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`

interface ColumnProps {
  color: string
}

export const Column = styled.div<ColumnProps>`
  margin-top: 80px;
  border: 1px solid ${({ color }) => color};
  border-radius: 3px;
  /* padding-bottom: 15px; */
`

interface TitleProps {
  color: string
}

export const Title = styled.p<TitleProps>`
  color: ${({ color }) => color};
  font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
  font-size: 23px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding-bottom: 4px;
  margin-left: 2px;
  max-width: 200px;
  margin-top: 20px;
`

interface ContentProps {
  color: string
}

export const Content = styled.div<ContentProps>`
  margin-top: 15px;

  article {
    display: flex;
    gap: 10px;

    img {
      width: 25px;
      height: 25px;
    }
  }

  section {
    margin-top: 20px;

    p {
      line-height: 22px;
      color: #6e6e6e;
      font-family: ${({ theme }) => theme.FONTS.OPENSANS};
      font-size: 17px;
      margin-bottom: 30px;
      max-width: 450px;

      @media (max-width: 1200px) {
        margin-bottom: 30px;
      }
    }

    a {
      text-decoration: none;
      border-radius: 5px;
      color: ${({ color }) => color};
      border: 1px solid ${({ color }) => color};
      padding: 7px 20px;
      font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
      font-size: 16px;
      transition: all 0.3s ease;
      margin-right: 10px;

      &:hover {
        background: ${({ color }) => color};
        border: 1px solid ${({ color }) => color};
        color: white;
        transition: all 0.3s ease;
      }
    }
  }
`
