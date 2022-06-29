import { useQuery, gql } from '@apollo/client'

const PastLaunches = () => {
  const FILMS_QUERY = gql`
    {
      launchesPast(limit: 20) {
        launch_date_local
        launch_site {
          site_name
        }
        mission_name
        id
      }
    }
  `

  const { data, loading, error } = useQuery(FILMS_QUERY)

  if (loading) return 'Loading...'
  if (error) return <pre>{error.message}</pre>
  const myStyle={
    backgroundImage: 
"url('https://cdn.pixabay.com/photo/2016/05/01/21/20/earth-1365995_960_720.jpg')",
    height:'75vh',
    marginTop:'1px',
    fontSize:'20px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor:'transparent',
    opacity: 0.8
        
};
const hStyle = { color: 'white', fontSize:'10px', };
  return (
    <div className='relative h-screen flex justify-center items-center flex-col gap-5 bg-slate-200' style={myStyle}>
      <p className='text-3xl text-solink-blue font-bold flex items-center'>SpaceX Past Launches!</p>
      <ul style={ hStyle } >
        {data.launchesPast.map((launch) => (
          <li key={launch.id}>
            {launch.mission_name},{launch.launch_date_local},
            {launch.launch_site.site_name}{' '}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PastLaunches
