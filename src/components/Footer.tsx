import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default () => {
  const { i18n } = useTranslation()
  const [ currentLang, setLang ] = useState(i18n.language)

  const handleChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value)
  }

  useEffect(() => {
    i18n.changeLanguage(currentLang)
  }, [currentLang])

  return (
    <$area>
      <$container>
        <p>© 2024 Opacity Browser.</p>
        {/* <div>
          <select onChange={handleChangeLang}>
            <option value="en">
              English
            </option>
          </select>
        </div> */}
      </$container>
    </$area>
  )
}


const $area = styled.div`
  height: 160px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  @media (max-width: 1400px) {
    height: 120px;
  }
`

const $container = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: relative;
  z-index: 1;
  justify-content: center;

  p {
    font-size: 14px;
    color: #999;
  }

  div {
    margin-left: 20px;
    select {
      padding: 2px 5px;
      font-size: 12px;
    }
  }

  @media (max-width: 1400px) {
    width: 1200px;
  }
`