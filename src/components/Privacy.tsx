import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import { ServerIcon } from '../icons/ServerIcon'
import { LoadingIcon } from '../icons/LoadingIcon'
import { GithubIcon } from '../icons/GithubIcon'

export default () => {
  const { t } = useTranslation()

  return (
    <$area>
      <$container>
        <ul>
          <li>
            <h2>
              <ServerIcon />
              <span>{t('We do not have a separate server for the service.')}</span>
            </h2>
            <p>
              {t('Therefore, we are unable to collect any information. Feel free to use our service with peace of mind.')}<br />
              <span>({t('To ensure a good user experience, we store information about your browsing history and site history on your computer.')})</span>
            </p>
          </li>
          <li>
            <h2>
              <LoadingIcon />
              <span>{t('Your search and visit history is only kept for 7 days.')}</span>
            </h2>
            <p>
              {t('By default, it is deleted after 7 days, and you can change the retention period through settings.')}<br />
            </p>
          </li>
          <li>
            <h2>
              <GithubIcon />
              <span>{t('Our browser is developed as a open-source project.')}</span>
            </h2>
            <p>
            {t('As an open-source project, all code can be viewed on GitHub, and you are welcome to participate in the development.')}<br />
              <a href="https://github.com/opacity-browser" target="_blank">https://github.com/opacity-browser</a>
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
  padding-top: 4%;

  ul {
    li {
      &:not(:first-of-type) {
        margin-top: 40px;
      }
      svg {
        display: block;
        width: 40px;
        height: auto;
        margin-bottom: 20px;
      }
      h2 {
        font-size: 32px;
        line-height: 32px;
        margin-bottom: 10px;
        color: #222;
        font-weight: bold;
        span {
          display: inline-block;
        }
      }
      p {
        font-size: 18px;
        line-height: 26px;
        span {
          color: #aeaeae;
        }
      }

      a {
        display: inline-block;
        position: relative;
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
    padding-top: 6%;
    ul {
      li {
        svg {
          width: 36px;
          margin-bottom: 18px;
        }
        h2 {
          font-size: 30px;
          line-height: 30px;
          margin-bottom: 8px;
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
