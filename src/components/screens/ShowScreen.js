import MovieContainer from "../containers/MovieContainer"

const ShowScreen = ({ navigation, route }) => {

    return (
        <MovieContainer navigation={navigation} route={route} />
    )
}

export default ShowScreen