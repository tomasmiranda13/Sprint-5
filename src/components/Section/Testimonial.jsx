import './Testimonial.css'


function Testimonial(props) {
  return (
    <>
     <div className='container'>
       <p>{props.text}</p>
       <div className='display-row'>
       <img className='img-size' src={props.img} alt="" /> 
       <div className='name-style'>
        <span className='name'>{props.name}</span>
        <span className='ocupation'>{props.ocupation}</span>
       </div>
       </div>
     </div> 
    </>
  )
}

export default Testimonial
