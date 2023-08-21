import './Feature.css'

function Feature(props) {
  return (
    <>
 <div className='feature-style'>
    <img className='icon' src={props.image} alt="" />
    <h3 className='h3-bottom-space'>{props.title}</h3>
    <p>{props.description}</p>
 </div>
    </>
  )
}

export default Feature
