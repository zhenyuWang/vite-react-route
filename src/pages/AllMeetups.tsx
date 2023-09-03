import { Link } from 'react-router-dom'

function AllMeetups() {
  const list = [
    {
      id: '1',
      title: 'First Meetup',
    },
    {
      id: '2',
      title: 'Second Meetup',
    },
  ]
  return (
    <div>
      <h2>AllMeetups Page</h2>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/meetup/${item.id}`}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AllMeetups
