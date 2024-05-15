import styled from '@emotion/styled'
import { ServerIcon } from '../icons/ServerIcon'
import { LoadingIcon } from '../icons/LoadingIcon'
import { GithubIcon } from '../icons/GithubIcon'

export default () => {
  return (
    <$area>
      <$container>
        <ul>
          <li>
            <h2>
              <ServerIcon />
              <span>We do not have a separate server for the service.</span>
            </h2>
            <p>
              Therefore, we do not collect any user information, allowing you to use it with confidence.<br />
              <span>(To ensure a good user experience, we store information about your browsing history and site history on your computer.)</span>
            </p>
          </li>
          <li>
            <h2>
              <LoadingIcon />
              <span>Your search and visit history is only kept for 7 days.</span>
            </h2>
            <p>
              By default, your browsing and search history is deleted after 7 days.<br />
              <span>(The period can be changed through settings.)</span>
            </p>
          </li>
          <li>
            <h2>
              <GithubIcon />
              <span>Our browser is developed as a 100% open-source project.</span>
            </h2>
            <p>
            As an open-source project, all code can be viewed on GitHub, and you are welcome to participate in the development.<br />
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
      // padding: 5px 0 2px 20px;
      // border-left: 6px solid #333;
      svg {
        display: block;
        width: 40px;
        height: auto;
        margin-bottom: 20px;
      }
      h2 {
        // display: flex;
        // align-items: center;
        font-size: 32px;
        line-height: 32px;
        margin-bottom: 10px;
        color: #222;
        span {
          display: inline-block;
          // margin-left: 20px;
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
`
