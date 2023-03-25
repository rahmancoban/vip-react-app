
const Person = ({ name, duration, img, href }) => {
    return (
        <div className="person">
            <a href={href} target='_blank' rel="noreferrer"><img src={img} alt={name} className='img' /></a>

            <div>
                <h4>{name}</h4>
                <p>{duration}</p>
            </div>
        </div>
    )
}
export default Person