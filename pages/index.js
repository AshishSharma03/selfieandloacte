import { Height } from '@mui/icons-material'
import { Button, Container,Box, IconButton, Dialog, Typography } from '@mui/material'
import React,{useCallback, useEffect, useRef, useState} from 'react'
import Webcam from 'react-webcam'
import CameraIcon from '@mui/icons-material/Camera';
import Image from 'next/image';

const videoConstraints ={
  height:660,
  width:360,
  facingMode : 'environment'
  }


function Index() {

  const webcam = useRef(null)
  const [image, setImage] = useState(null)
  const [Kheight, setheight] = useState(null)
  const [KWidth, setWidtg] = useState(null)
  const [opnePic ,setOpenPic] = useState(false)

    useEffect(()=>{
      setheight(screen.height)
      setWidtg(screen.width)
    },[])

  const capturePhoto = useCallback(async =>{
    const imgsrc =  webcam.current.getScreenshot();
    setImage(imgsrc);
    setOpenPic(true)
  },[webcam])

  const onUserMedia = (e) =>{
  
    console.log("")
  }


  if(KWidth && Kheight){

    
    return (
      <Container maxWidth={"sm"} sx={{display:'flex',justifyContent:"center",alignItems:"center"}}>
       

            <Webcam 
            ref={webcam}
            audio={false}
            height={Kheight}
            width={KWidth}
            mirrored={true}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            onUserMedia={onUserMedia}
            />
        <Box sx={{position:"absolute",bottom:"0px",padding:"10px"}}>
        <IconButton onClick={capturePhoto} variant="contained"   sx={{backgroundColor:"red",fontSize:"30px",color:"white"}}>
          <CameraIcon fontSize='large'/>
        </IconButton>
        {/* <Button onClick={() => setImage(null)}>Refresh</Button> */}
        </Box>
            <Dialog 
            fullScreen
            open={opnePic}
            
            >
              <Container maxWidth="sm" >


          
            {
              image && (
                <div>
                <Image src={image} alt="Screenshot"  width={KWidth} height={Kheight}/>
                </div>
                )
              } 

         <Box sx={{position:"absolute",bottom:"0px",padding:"10px"}}>
        <Button onClick={() => {setImage(null);setOpenPic(false)}}>Refresh</Button>
        </Box>
        </Container>
              </Dialog>

      </Container>
      
      )
    }


    return <>Loading..</>
}



// export async function getServerSideProps(){

//     const res = await fetch("https://dummyjson.com/products");
//     const data = await res.json();

//     return { props: {data} }

// }













export default Index


