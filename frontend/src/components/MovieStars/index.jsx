import{ReactComponent as StarFull} from 'Assets/Img/star-full.svg'
import{ReactComponent as StarHalf} from 'Assets/Img/star-half.svg'
import{ReactComponent as StarEmpty} from 'Assets/Img/star-empty.svg'
import './styles.css'

function MovieStars() {

    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    )
}
export default MovieStars;