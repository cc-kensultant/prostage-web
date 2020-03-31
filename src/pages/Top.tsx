/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const style = css`
  color: red;
`

const Top = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p css={style}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Top