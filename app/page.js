import Navbar from "@/Components/Navbar/Navbar"
import Feed from "./feed/page"
import { Box } from "@mui/material"


const  Home = () => {
  return (
  <>
  <Box className='bg-black'>
    <Navbar />
    <Feed />
  </Box>
   </>
  )
}
export default Home