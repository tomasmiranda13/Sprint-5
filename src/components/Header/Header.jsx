import './Header.css'
import Nav from './Nav'
import Button from '../Button'

function Header() {
  return (
    <>
      <div className='bkgnd-header'>
       <Nav/>
       <div className='img-center'>
       <img src="images/illustration-intro.png" alt="" />
       </div>
       <div className='text-align'>
       <h1>All your files in one secure location, accesible anywhere</h1>
       <p>Fylo stores all your most important files in one secure location. Access them wherever youu need, share and colavorate with friends family, and co-workers.</p>
       <Button text="Get started"/>
       </div>
      </div>
    </>
  )
}

export default Header
