import { render, screen } from '@testing-library/react'
import App from './App'
test('Should render the header', async () => {
  render(<App />)
  screen.getByText(/loading/i)
  const profileName = await screen.findByText('Vonta')
  const headerImg = screen.getByAltText(/alchemy/i)
  const backgroundColor = screen.getByRole('banner')

  expect(backgroundColor).toHaveStyle(`background: 'var--(grey)'`)
  expect(headerImg).toBeInTheDocument()
  expect(profileName).toBeInTheDocument()
})
