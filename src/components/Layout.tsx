import styled from '@emotion/styled'
import { Logo } from '../icons/Logo'
import { AppleLogo } from '../icons/AppleLogo'
import Strongs from './Strongs'
import Privacy from './Privacy'
import Feature from './Feature'
import Footer from './Footer'

export default () => {
  return (
    <$area>
      <$visual>
        <$visualBg />
        <$container>
          <$mainText>
            <Logo />
            <h1>The Opacity Browser<br />demands nothing from you.</h1>
            <p>We do not collect any user information whatsoever.</p>
            <$buttonBox>
              <button>
                <AppleLogo />
                {/* Download for MacOS */}
                Currently under review
              </button>
              {/* <$version><p><span>v</span>1.0.0</p></$version> */}
            </$buttonBox>
          </$mainText>
          <$mainImage>
            <$imageBox>
              <figure className="lightmode">
                <img src="/imgs/lightmode.png" alt="opacity browser preview" />
              </figure>
              <figure className="darkmode">
                <img src="/imgs/darkmode.png" alt="opacity browser preview" />
              </figure>
            </$imageBox>
          </$mainImage>
        </$container>
      </$visual>
      <Privacy />
      <Strongs />
      <Feature />
      <Footer />
    </$area>
  )
}

const $area = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 1400px) {
    min-width: 1200px;
  }
`

const $visual = styled.div`
  height: 100%;
  min-height: 800px;
`

const $container = styled.div`
  width: 1400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: relative;
  z-index: 1;

  @media (max-width: 1400px) {
    width: 1200px;
  }
`

const $mainText = styled.div`
  width: 50%;
  padding-bottom: 5%;

  svg {
    width: 50px;
    height: auto;
    filter: invert(100%);
    margin-bottom: 20px;
  }
  
  h1 {
    font-weight: bold;
    font-size: 52px;
    line-height: 62px;
    color: #000;
    margin-bottom: 25px;
  }

  & > p {
    font-size: 22px;
    padding: 0 2px;
    color: #999;
    margin-bottom: 40px;
  }

  @media (max-width: 1400px) {
    svg {
      width: 45px;
    }
    h1 { 
      font-size: 46px;
      line-height: 54px;
      margin-bottom: 20px;
    }

    & > p {
      font-size: 20px;
      margin-bottom: 35px;
    }
  }
`

const $buttonBox = styled.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    border: 0;
    padding: 14px 18px;
    background: #000;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
    img {
      line-height: 0;
      display: inline-block;
      margin-right: 10px;
      width: 16px;
      height: auto;
      filter: invert(100%);
      margin-top: -2px;
    }

    opacity: 0.2;
    // opacity: 1;
    // transition: 0.3s opacity;
    // &:hover {
    //   opacity: 0.6;
    // }
  }

  @media (max-width: 1400px) {
    button {
      padding: 12px 16px;
    }
  }
`

const $version = styled.div`
  font-size: 14px;
  margin: 1px 0 0 10px;
  color: #999;
  p {
    span {
      display: inline-block;
      margin-right: 2px;
    }
  }
`

const $mainImage = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const $imageBox = styled.div`
  position: relative;
  .darkmode {
    margin: -30px 0 0 -30px;
  }
  .lightmode {
    position: absolute;
    margin: 30px 0 0 30px;
  }
  img {
    width: 640px;
    height: auto;
  }

  @media (max-width: 1400px) {
    .darkmode {
      margin: -25px 0 0 -25px;
    }
    .lightmode {
      position: absolute;
      margin: 25px 0 0 25px;
    }
    img {
      width: 540px;
    }
  }
`

const $visualBg = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  min-height: 800px;

  &::before {
    content: "";
    width: 65%;
    background: #f5f5f5;
  }

  &::after {
    content: "";
    width: 35%;
    background: linear-gradient(to top left, #222, #555);
    border-bottom-left-radius: 18px;
  }

  @media (max-width: 1400px) {
    min-width: 1200px;
  }
`