import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { Logo } from "../icons/Logo"
import { AppleLogo } from "../icons/AppleLogo"
// import Strongs from "./Strongs"
import Privacy from "./Privacy"
// import Feature from "./Feature"
import Footer from "./Footer"
import { GithubIcon } from "../icons/GithubIcon"

export default () => {
  const { t } = useTranslation()

  return (
    <$area>
      <$visual>
        <$visualBg />
        <$container>
          <$mainText>
            <Logo />
            <h1>{t("The Opacity Browser \ndemands nothing from you.")}</h1>
            <p>
              {t(
                "We operate as a non-profit organization, \nprioritizing privacy and focusing solely on providing a smooth \nand convenient web browsing experience."
              )}
            </p>
            <$buttonBox>
              <a
                href="https://apps.apple.com/us/app/opacity-web-browser/id6502774960"
                target="_blank"
              >
                <button>
                  <AppleLogo />
                  {t("Download for MacOS")}
                </button>
              </a>
              <a href="https://github.com/opacity-browser" target="_blank">
                <button>
                  <GithubIcon />
                  GitHub
                </button>
              </a>
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
      {/* <Strongs /> */}
      {/* <Feature /> */}
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
  min-height: 760px;

  @media (max-width: 1400px) {
    min-height: 600px;
  }
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
  width: 55%;

  & > svg {
    width: 52px;
    height: auto;
    filter: invert(100%);
    margin-bottom: 16px;
  }

  h1 {
    font-weight: bold;
    font-size: 52px;
    line-height: 60px;
    color: #000;
    margin-bottom: 25px;
    white-space: pre-line;
    letter-spacing: -0.8px;
    font-family: "Quicksand", "ProximaNova-Regular", "Apple SD Gothic Neo",
      sans-serif;
  }

  & > p {
    font-size: 18px;
    line-height: 28px;
    padding: 0 2px;
    color: #666;
    margin-bottom: 40px;
    font-weight: 500;
    white-space: pre-line;
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
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 35px;
    }
  }
`

const $buttonBox = styled.div`
  display: flex;
  align-items: center;

  a {
    button {
      display: flex;
      align-items: center;
      padding: 10px 20px 10px 18px;
      border: 1px solid rgb(250, 250, 250);
      height: 46px;
      background: #000;
      color: #fff;
      border-radius: 8px;
      cursor: pointer;
      font-size: 15px;
      font-family: "Quicksand", "ProximaNova-Regular", "Apple SD Gothic Neo",
        sans-serif;
      font-weight: 500;
      img {
        line-height: 0;
        display: inline-block;
        margin-right: 10px;
        width: 16px;
        height: auto;
        filter: invert(100%);
        margin-top: -2px;
      }

      transition: 0.3s all;
      &:hover {
        background: #555;
      }
    }

    & + a {
      margin-left: 10px;
      button {
        padding: 10px 22px 10px 18px;
        background: #fff;
        color: #000;
        border: 1px solid #eaeaea;
        &:hover {
          background: #f9f9f9;
          color: #888;
        }
        & > svg {
          width: 19px;
          height: auto;
          margin-right: 8px;
        }
      }
    }
  }

  @media (max-width: 1400px) {
    button {
      padding: 12px 18px 12px 16px;
    }
  }
`

const $mainImage = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const $imageBox = styled.div`
  position: relative;
  // margin-top: -20px;
  .darkmode {
    margin: -25px 0 0 -25px;
  }
  .lightmode {
    position: absolute;
    margin: 25px 0 0 25px;
  }
  img {
    width: 560px;
    height: auto;
  }

  @media (max-width: 1400px) {
    .darkmode {
      margin: -20px 0 0 -20px;
    }
    .lightmode {
      position: absolute;
      margin: 20px 0 0 20px;
    }
    img {
      width: 480px;
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
    background: linear-gradient(to top left, #222, #3f3f3f);
    border-bottom-left-radius: 6px;
    height: calc(100vh + 20px);
    min-height: 760px;

    @media (max-width: 1400px) {
      min-height: 600px;
    }
  }

  @media (max-width: 1400px) {
    min-width: 1200px;
  }
`
