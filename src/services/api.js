import axios from 'axios';

const now_play = axios.create({
    baseURL: UPCOMING
})


const [nowPlaying, setNowPlaying] = useState([])

useEffect(() => {
    now_play.get()
        .then(response => {
            setNowPlaying(response.data.results)
            console.log(nowPlaying)
        })
}, [])