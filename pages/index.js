import { Button } from '@mui/material'
import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'

function Index() {
  const [image,setImage] = useState(null)

    const webcam = useRef(null)

      const capturePhoto = useCallback(()=>{

        const imgsrc = webcam.current.getScreenshot();
        setImage(imgsrc)
      },[webcam])


      if(!image){
        return(
        <div>
            <Webcam
            ref={webcam}
             audio={false}
             screenshotFormat="image/jpeg" 
            />
          <Button onClick={capturePhoto}>TakePhoto</Button>
                    
        </div>)
      }
      
      if(image){
        return(
          <>
          <img src={image}  />
          <Button onClick={() => setImage(null)}>Retake</Button>
          </>
        )
      }

      return(<>
        Loading....
      </>)
    

}

export default Index