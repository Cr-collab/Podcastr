/**
 * // spa
 *   useEffect(() => {
    fetch('http://localhost:3333/episodes')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])
 */
// ssr
// ssg

interface HomeProps {
  episodes: Object
}

export default function Home({ episodes }: HomeProps) {
  console.log(episodes)
  return <h1>Hello World!</h1>
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3333/episodes')

  const data = await response.json()

  return {
    props: {
      episodes: data
    }
  }
}
