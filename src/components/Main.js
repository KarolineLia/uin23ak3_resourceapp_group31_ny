import ressurser from '../ressurser'
import Categorypage from './Categorypage'

export default function Main() {
    return(
        <>
        {resources.map((info) => {
            return(
                <Categorypage name={info.title} link={info.url} cat={info.category} />
            )
        })}
        </>
    )
}