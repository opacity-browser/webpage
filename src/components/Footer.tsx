import styled from '@emotion/styled'
import { MapIcon } from '../icons/MapIcon'

export default () => {
  return (
    <$area>
      <$container>
        <p>© 2024 Opacity Browser.</p>
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
  flex-direction: column;

  p {
    font-size: 14px;
    color: #999;
  }

  @media (max-width: 1400px) {
    width: 1200px;
  }
`