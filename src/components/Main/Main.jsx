import Feature from './Feature'
import './Main.css'
import Section from '../Section/Section'

function Main() {

  return (
    <>
    <div className='bkgnd-main'>
    <div className='features-wrap' >
      <Feature image='icons/icon-access-anywhere.svg' title="Access your files, anywhere" description="The ability to use a smartphone, tablet, or computer to accces your account means your files follow you everywhere."/>
      <Feature image='icons/icon-security.svg' title="Access your files, anywhere" description="The ability to use a smartphone, tablet, or computer to accces your account means your files follow you everywhere."/>
      <Feature image='icons/icon-collaboration.svg' title="Real time collaboration" description="The ability to use a smartphone, tablet, or computer to accces your account means your files follow you everywhere."/>
      <Feature image='icons/icon-any-file.svg' title="Access your files, anywhere" description="The ability to use a smartphone, tablet, or computer to accces your account means your files follow you everywhere."/>
      </div>
      <div className='article-style'>
      <img src="images/illustration-stay-productive.png" alt="" />
      <div className='article-text'>
      <h2>Stay productive, wherever you are</h2>
      <p  className='p-font-size'>Never let location be an issue when accessing your files. Fylo has you <br/>Covered all your file storage needs</p> 
      <p className='p-font-size'>Securely share files and folders with friends, family and collagues for live <br /> collaboration. No email attachments required</p>
      <div><a href=""><u>See how Fylo works</u></a> <img src="icons/icon-arrow.svg" alt="" /></div>
      </div>
      </div> 
      <Section/>
      </div>
    </>
  )
}

export default Main
