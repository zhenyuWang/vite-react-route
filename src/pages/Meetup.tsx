import { useParams } from 'react-router-dom'

function NewMeetup() {
  const { id } = useParams()
  return <div>NewMeetup: {id}</div>
}

export default NewMeetup
