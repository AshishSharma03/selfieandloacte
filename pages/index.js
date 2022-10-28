import { Box, Button, Container, Stack } from '@mui/material'
import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'

const videoConstraints = {
  facingMode: "user"
};


function Index() {
  const [image,setImage] = useState(null)


    const webcam = useRef(null)

      const capturePhoto = useCallback(()=>{

        const imgsrc = webcam.current.getScreenshot();
        setImage(imgsrc)
      },[webcam])


      if(!image){
        return(

        <Container maxWidth={"sm"}  sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"90vh"}}>

        {/* <Box */}
          <Stack>
          
  
          <Webcam 
              mirrored={true}
              ref={webcam}
              audio={false}
              screenshotQuality={1}
              videoConstraints={videoConstraints}
              screenshotFormat="image/jpeg" 
              imageSmoothing={true}
              />

          <Button onClick={capturePhoto}>TakePhoto</Button>
            </Stack>
                    
        {/* </Box> */}
      </Container>
        )
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