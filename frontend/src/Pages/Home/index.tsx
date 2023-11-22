import Cards from '../../Components/Cards/index.tsx'
import './style.ts'
import { useDeezer } from '../../Context/DeezerContext.tsx'

function Home() {

  const { data } = useDeezer()

  return (
    <div>
      <Cards artists={data}/>
    </div>
  )
}

export default Home