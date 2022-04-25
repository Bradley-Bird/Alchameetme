import { render, screen } from '@testing-library/react'
import Profile from '../../components/Profile/Profile'
const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', () => {
  render(<Profile user={user} likes={user.likes} />)

  const profileName = screen.getByText('Vonta')
  const profileMotto = screen.getByText('Res Non Verba')
  const likesHeader = screen.getByRole('heading', { name: 'Interests' })
  const likesList = screen.getByRole('list')
  const avatar = screen.getByRole('img')

  expect(avatar).toEqual(user.avatar)
  expect(likesHeader).toBeInTheDocument()
  expect(likesList).toBeInTheDocument()
  expect(likesList.children.length).toEqual(user.likes.length)
  expect(profileName).toBeInTheDocument()
  expect(profileMotto).toBeInTheDocument()

  screen.debug()
})
