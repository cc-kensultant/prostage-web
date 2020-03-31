/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import useSWR from 'swr'
import { fetcher } from '../../utils/fetcher'
import { Hello } from '../../components/Hello'

export type SampleData = {
  employee_name: string,
  employee_salary: number,
}

const style = css`
  color: red;
`

export const Top = () => {
  const { data } = useSWR('https://dummy.restapiexample.com/api/v1/employees', fetcher)
  
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
      <ul>
        {data && data.data.map((d: SampleData) => (
          <li key={d.employee_name}>
            <p>{d.employee_name}</p>
            <p>{d.employee_salary}</p>
          </li>
        ))}
      </ul>
      <Hello>
        <p>Hello</p>
      </Hello>
    </div>
  );
}