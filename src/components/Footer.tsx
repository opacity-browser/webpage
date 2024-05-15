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
  // background: linear-gradient(to top left, #222, #444);
  background: #f5f5f5;
  display: flex;
  align-items: center;
`

const $container = styled.div`
  width: 1400px;
  // height: 100%;
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
`