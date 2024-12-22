import { BellRing,Pen,Ban,CheckCheck,OctagonAlert } from 'lucide-react';
import Alert from "./Components/Aletr/Alert"
function App() {
  

  return (
    <>
    <div className='alert-box'>
      <Alert classTitle="upgrade-alert" heading="Upgrade your plan" icon={<BellRing size={30}/>} description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quo harum aperiam, neque error itaque voluptate accusantium atque vel ad! Esse ipsam rem eaque perferendis neque, corrupti minima magnam inventore.'/>
    </div>
    <div className='alert-box'>
      <Alert classTitle="note-alert" heading="Note" icon={<Pen size={30}/>} description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quo harum aperiam, neque error itaque voluptate accusantium atque vel ad! Esse ipsam rem eaque perferendis neque, corrupti minima magnam inventore.'/>
    </div>
    <div className='alert-box'>
      <Alert classTitle="error-alert" heading="Something went wrong" icon={<Ban size={30}/>} >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptatum quas magni eos quos, iste rerum exercitationem, facere ea minima tenetur cum vero cumque nam earum sequi repellat consequuntur perspiciatis.</p>
      </Alert>
    </div>
    <div className='alert-box'>
      <Alert classTitle="success-alert" heading="Your Order has been processed" icon={<CheckCheck size={30}/>} description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quo harum aperiam, neque error itaque voluptate accusantium atque vel ad! Esse ipsam rem eaque perferendis neque, corrupti minima magnam inventore.'/>
    </div>
    <div className='alert-box'>
      <Alert classTitle="tips-alert" heading="Tips & Tricks" icon={<OctagonAlert size={30}/>} description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quo harum aperiam, neque error itaque voluptate accusantium atque vel ad! Esse ipsam rem eaque perferendis neque, corrupti minima magnam inventore.'/>
    </div>
    </>
  )
}

export default App
