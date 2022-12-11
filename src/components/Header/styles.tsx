import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Header = styled.header`
  display: flex;
  width: fit-content;
  max-width: 600px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const ImagePane = styled.div`
  width: 20%;
  min-width: 80px;
  height: 100%;
  @media only screen and (max-width: 320px) {
    display: none;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img{
    width: 90%;
    height: auto;
    border-radius: 100%;
    object-fit:cover;
  }
`

export const DetailsPane = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100px;

  h1 {
    font-size: 1.45rem;
    margin-bottom: 5px;

  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 18px;
    color: ${colors.secondary};

    margin-top: 5px;
  }
`

export const Nav = styled.div`
  color: ${colors.secondary};
  
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;

    padding: 0;
    margin: 0;
  }
  ul li{
    flex: 1 1 0;
    margin: 4px;
    margin-bottom: 2px;
    font-weight: 700;

    transition: 0.25s;
  }

  ul li:hover{
    transform: translate(0, -2px);
  }

  ul li:first-child{
    flex: 1.5 1.5 0;
    color: ${colors.highlight}
  }

  hr{
    border: 1px solid ${colors.secondary};
    box-sizing: border-box;
    margin: 4px;
  }
`
