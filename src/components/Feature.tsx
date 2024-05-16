import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import { MapIcon } from '../icons/MapIcon'

export default () => {
  const { t } = useTranslation()

  return (
    <$area>
      <$container>
        <h2>
          <MapIcon />
          <span>Features</span>
        </h2>
        <$featureList>
        <ul>
          <li>
            <p>
              {t('Tracker blocking updates')}<br />
              <span>({t('The current tracker blocking feature is an early version and has many shortcomings.')})</span>
            </p>
          </li>
          <li>
            <p>
              {t('Add search function to search history and visit history')}
            </p>
          </li>
          <li>
            <p>
              {t('Add AD blocking')}
            </p>
          </li>
          <li>
            <p>
              {t('Implementing the getUserMedia function')}<br />
              <span>({t('We currently do not provide web camera and microphone features.')})</span>
            </p>
          </li>
          <li>
            <p>{t('Add download history view')}</p>
          </li>
        </ul>
        </$featureList>
      </$container>
    </$area>
  )
}


const $area = styled.div`
  height: 700px;
  background: #f5f5f5;
  display: flex;
`

const $featureList = styled.div`
  width: 100%;
  ul {
    li {
      margin-left: 15px;
      list-style: disc;
      &:not(:first-of-type) {
        margin-top: 10px;
      }
      p {
        font-size: 20px;
        line-height: 24px;
        span {
          color: #aeaeae;
          font-size: 16px;
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
  flex-direction: column;

  svg {
    display: block;
    width: 40px;
    height: auto;
    margin-bottom: 20px;
  }

  h2 {
    width: 100%;
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 15px;
    color: #222;
    font-weight: bold;
    span {
      display: inline-block;
    }
  }

  @media (max-width: 1400px) {
    width: 1200px;
  }
`
