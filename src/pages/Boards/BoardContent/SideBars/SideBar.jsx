import { List, ListItem, ListItemIcon, ListItemText, Avatar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BarChartIcon from '@mui/icons-material/BarChart'
import NotificationsIcon from '@mui/icons-material/Notifications'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'






import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import SaveIcon from '@mui/icons-material/Save'
import HomeIcon from '@mui/icons-material/Home'
import AddIcon from '@mui/icons-material/Add'
import PersonIcon from '@mui/icons-material/Person'


// Biểu tượng và tên thương hiệu ở trên cùng
const BrandLogo = () => {
  return (
    <ListItem>
      <ListItemIcon>
        <Avatar src="https://img.thuthuattinhoc.vn/uploads/2019/10/26/hinh-anh-que-huong-con-song-uon-quanh_055458566.jpg" alt="Logo" />
      </ListItemIcon>
      <Typography variant="h6" color="primary">Cookpad</Typography>
    </ListItem>
  )
}

const SideBar = () => {

  const [searchValue, setSearchValue] = useState('')

  return (
    <List>
      {/* Logo và tên thương hiệu */}
      <BrandLogo />

      {/* Menu items */}

      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Trang chủ" />
      </ListItem>

      {/* search */}
      <ListItem button>
        <TextField id="outlined-basic"
          label="Tìm kiếm món ăn"
          type="text"
          size='small'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{color: 'white' }}/>
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize='small'
                sx={{
                  color:'white',
                  cursor:'pointer'
                }}
                onClick = {(e) => setSearchValue('')}
              />
            )
          }}
          sx={{
            minWidth: '120px',
            maxWidth: '180px',
            '& label':{ color:'white' },
            '& input':{ color:'white' },
            '& label.Mui-focused':{ color:'white' },
            '& .MuiOutlinedInput-root':{
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' }
            }
          }}>
        </TextField>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Thêm Món Mới" />
      </ListItem>
      
      <ListItem button>
        <ListItemIcon>
          <SaveIcon />
        </ListItemIcon>
        <ListItemText primary="Món đã lưu" />
      </ListItem>
      
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Món của tôi" />
      </ListItem>
      
    </List>
  )
}

export default SideBar