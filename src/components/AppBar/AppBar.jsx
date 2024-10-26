import { useState } from 'react'
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as trelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menu/Profiles'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'


import ResponsiveAppBar from './Menu/Menu'
import AddIcon from '@mui/icons-material/Add'

function AppBar() {

  const [searchValue, setSearchValue] = useState('')
  return (
    <Box sx={{
      height:(theme) => theme.trello. appBarHeight,
      width:'100%',
      display:'flex',
      alignItems:'center',
      paddingX: 2,
      justifyContent:'space-between',
      gap: 2,
      overflowX: 'auto',
      bgcolor: (theme) => ( theme.palette.mode === 'dark'? '#2c3e50' : '#1565c0')
    }}>
      <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
        <AppsIcon sx={{ color:'white' }}/>
        <Box sx={{ display:'flex', alignItems:'center', gap:0.5 }}>
          <SvgIcon component={trelloIcon} fontSize ="small" inheritViewBox sx={{ color:'white' }}/>
          <Typography variant="span" sx={{ fontSize:'1.2rem', fontWeight:'bold', color:'white' }}>Bếp</Typography>
        </Box>
        <Box sx={{ display:{ xs: 'none', md:'flex' }, gap: 1 }}>
          <ResponsiveAppBar />
        </Box>


      </Box>
      {/* box right */}
      <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
        {/* <Button sx={{ border:'1px solid' }} variant="contained" startIcon = {<AddIcon/>} >Viết món mới</Button> */}
        <Box sx={{ border:'1px solid white', height:'35px', width:'100px' }}>
          <Typography sx={{ color:'white', textAlign:'center', marginTop:'5px' }}>80 điểm</Typography>
        </Box>
        <TextField id="outlined-basic"
          label="Search....."
          type="text"
          size='small'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }}/>
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
          }}
        />

        <ModeSelect> </ModeSelect>
        <Tooltip title="Notifications">
          <Badge color="warning" variant="dot" sx={{ cursor:'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'white' }}/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor:'pointer', color: 'white' }} />
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  )
}
export default AppBar