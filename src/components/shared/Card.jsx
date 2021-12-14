function Card({children, reverse}) {
    return <div className={`card ${reverse && 'reverse'}`}>
            {children}</div>  
return <div className='card'

>
    {children}</div>
}

Card.defaultProps = {
    reverse: false,
}
export default Card
