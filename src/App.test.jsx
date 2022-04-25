import { render, screen } from '@testing-library/react'
import App from './App'
test('Should render the header', async () => {
  render(<App />)
  screen.getByText(/loading/i)
  const profileName = await screen.findByText('Vonta')
  expect(profileName).toBeInTheDocument()

  const headerImg = await screen.getByAltText(/alchemy/i)
  expect(headerImg).toBeInTheDocument()
})
