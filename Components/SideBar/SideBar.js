import { Stack } from "@mui/material";
import './sidebar.css'
import { categories } from "@/utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory}) => {
  return (
   <Stack 
    direction='row'
    sx={{
      overflowY: 'auto',
      height: {sx: 'auto', md: '95%'},
      flexDirection: { md: 'column'}
    }}
   >
    {
      categories.map((category)=> (
        <button
          onClick={()=>{
          setSelectedCategory(category.name)
        }}
        className="category-Btn"
        style={{
         background: category.name === selectedCategory && "#FC1503", 
         color: '#fff',

        }}
        key={category.name}>
          <span style={{ color: category.name === selectedCategory ? '#fff' : '#ff0000', marginRight: '15px'}}>{category.icon}</span>
          <span style={{ opacity: category.name === selectedCategory ? '' : '.8' }}>{category.name}</span>
        </button>
      ))
    }

   </Stack>
  )
}

export default SideBar