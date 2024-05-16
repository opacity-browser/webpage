import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

export default () => {
  const { t } = useTranslation()

  return (
    <$area>
      <$container>
        <$left>
          <$contentBox>
            <h2>{t('Tracker Blocking')}</h2>
            <p>{t('Trackers can be blocked at three levels.')}</p>
            <figure>
              <img src="/imgs/certificate.png" alt="" />
            </figure>
          </$contentBox>
        </$left>
        <$center>
          <$contentBox>
            <h2>{t('Cleanup')}</h2>
            <p>{t('All saved user data can be deleted in settings.')}</p>
            <figure>
              <img src="/imgs/settings.png" alt="" />
            </figure>
          </$contentBox>
        </$center>
        <$right>
          <$contentBox>
            <h2>{t('Contact Us')}</h2>
            <p>{t('If you have any questions, please contact us.')}</p>
            <figure>
              <img src="/imgs/contact.png" alt="" />
            </figure>
          </$contentBox>
        </$right>
      </$container>
    </$area>
  )
}


const $area = styled.div`
  height: 900px;
  background: #f5f5f5;
  display: flex;
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
  padding-bottom: 7%;

  @media (max-width: 1400px) {
    width: 1200px;
    padding-bottom: 8%;
  }
`

const $left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 33.3333%;
  img {
    width: 300px;
    height: auto;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`

const $contentBox = styled.div`
  position: relative;
  width: 350px;
  height: 500px;
  background: linear-gradient(to top left, #222, #555);
  border-radius: 6px;
  padding: 30px;
  color: #fff;
  word-break: keep-all;
  h2 {
    font-size: 28px;
    margin-bottom: 15px;
    font-weight: bold;
  }
  p {
    font-size: 18px;
    line-height: 22px;
  }

  @media (max-width: 1400px) {
    h2 {
      font-size: 26px;
      margin-bottom: 14px;
    }
    p {
      font-size: 17px;
      line-height: 20px;
    }
  }
`

const $contentBoxWhite = styled.div`
  width: 300px;
  height: 500px;
  background: #f5f5f5;
  border: 1px solid #444;
`

const $center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 33.3333%;
  img {
    width: 300px;
    height: auto;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`

const $right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 33.3333%;
  img {
    width: 300px;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`