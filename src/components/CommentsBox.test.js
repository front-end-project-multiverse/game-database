import {render, screen} from '@testing-library/react'
import  CommentsBox from './CommentsBox'
import {CommentProvider} from '../context/CommentProvider.js'

test('Comments component renders correctly', async () => {
  render(<CommentProvider><CommentsBox /></CommentProvider> )
  expect(screen.getByText(/Overall rating:/i)).toBeVisible()
  expect(screen.getByText(/Your rating:/i)).toBeVisible()
  expect(screen.getByPlaceholderText('Leave a review...')).toBeVisible()
  expect(screen.getAllByRole('radio')).toHaveLength(6)
  expect(screen.getByRole('button')).toHaveTextContent('Submit')
})