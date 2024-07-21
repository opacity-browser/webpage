import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { useTranslation } from "react-i18next"
import { ServerIcon } from "../icons/ServerIcon"
import { LoadingIcon } from "../icons/LoadingIcon"
import { GithubIcon } from "../icons/GithubIcon"
import { ShieldIcon } from "../icons/ShieldIcon"

export default () => {
  const { t } = useTranslation()

  return (
    <$area>
      <$container>
        <ul>
          <li>
            <h2>
              <ServerIcon />
              <span>
                {t("We do not have a separate server for the service.")}
              </span>
            </h2>
            <p>
              {t(
                "Therefore, we are unable to collect any information. Feel free to use our service with peace of mind."
              )}
              <br />
              <span>
                (
                {t(
                  `For a better user experience, information about search history and site records is stored on the user's computer.`
                )}
                )
              </span>
            </p>
          </li>
          <li>
            <h2>
              <LoadingIcon />
              <span>
                {t("Search and visit history is only kept for 7 days.")}
              </span>
            </h2>
            <p>
              {t(
                "By default, it is completely deleted after 7 days, and you can change the retention period through settings."
              )}
              <br />
            </p>
          </li>
          <li>
            <h2>
              <ShieldIcon />
              <span>
                {t(
                  "Protect your browsing experience from web trackers and ads."
                )}
              </span>
            </h2>
            <p>
              {t(
                "Block a variety of ads and trackers using tracker blocklists, including 'tracker-blocklists' from duckduckgo."
              )}
              <br />
              <span>
                (
                <a
                  href="https://github.com/duckduckgo/tracker-blocklists"
                  target="_blank"
                >
                  tracker-blocklists
                </a>{" "}
                provided by duckduckgo)
              </span>
            </p>
          </li>
          <li>
            <h2>
              <GithubIcon />
              <span>
                {t("Our browser is developed as a open-source software.")}
              </span>
            </h2>
            <p>
              {t(
                "You can check or contribute to the code on GitHub as it is open-source software."
              )}
              <br />
              <span>
                (
                <a href="https://github.com/opacity-browser" target="_blank">
                  https://github.com/opacity-browser
                </a>
                )
              </span>
            </p>
          </li>
        </ul>
      </$container>
    </$area>
  )
}

const $area = styled.div`
  height: 1000px;
  background: #f5f5f5;
  display: flex;
  @media (max-width: 1400px) {
    height: 900px;
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
  padding-top: 40px;

  ul {
    li {
      &:not(:first-of-type) {
        margin-top: 45px;
      }
      svg {
        display: block;
        width: 36px;
        height: auto;
        margin-bottom: 12px;
        stroke-width: 2;
      }
      h2 {
        font-size: 32px;
        line-height: 32px;
        margin-bottom: 8px;
        color: #222;
        font-weight: 500;
        font-family: "Quicksand", "ProximaNova-Regular", "Apple SD Gothic Neo",
          sans-serif;
        // letter-spacing: -0.3px;
        span {
          display: inline-block;
        }
      }
      p {
        font-size: 18px;
        line-height: 22px;
        span {
          font-size: 17px;
          color: #888;
        }
      }

      a {
        display: inline-block;
        position: relative;
        font-size: 17px;
        color: #888;
        transition: color 0.3s;
        &:hover {
          color: #444;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 8px;
          background: #333;
          opacity: 0.1;
        }
      }
    }
  }

  @media (max-width: 1400px) {
    width: 1200px;
    ul {
      li {
        svg {
          width: 34px;
          margin-bottom: 12px;
        }
        h2 {
          font-size: 28px;
          line-height: 28px;
          margin-bottom: 6px;
        }
        p {
          font-size: 17px;
          line-height: 22px;
        }
        a {
          &::before {
            height: 7px;
          }
        }
      }
    }
  }
`
