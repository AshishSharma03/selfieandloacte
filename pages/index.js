import { Box, Button, Stack } from '@mui/material'
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
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"90vh"}}>
          <Stack>

            <Webcam
            ref={webcam}
            audio={false}
            screenshotFormat="image/jpeg" 
            />
          <Button onClick={capturePhoto}>TakePhoto</Button>
            </Stack>
                    
        </Box>)
      }
      
      if(image){
        return(
          <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"90vh"}}>
            <Stack>
          <img src={image}  />
          <Button onClick={() => setImage(null)}>Retake</Button>
            </Stack>
          </Box>
        )
      }

      return(<>
        Loading....
      </>)
    

}

export default Index