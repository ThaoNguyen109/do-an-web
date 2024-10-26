
import { useState } from 'react'
import {
  Box,
  Typography,
  Avatar,
  Button,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider
} from '@mui/material'
import { AccessTime, Group } from '@mui/icons-material'
import SaveIcon from '@mui/icons-material/Save'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'






function RecipeDetail() {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([{ username: 'Tên tài khoản', content: 'Nội dung bình luận' }])

  const handleAddComment = () => {
    setComments([...comments, { username: 'Tên tài khoản', content: comment }])
    setComment('')
  }

  const { ID } = useParams()
  // console.log(ID)
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {

    // Giả sử hàm fetchRecipeDetail để gọi API lấy dữ liệu theo ID
    const fetchRecipeDetail = async (id) => {
      try {
        const response = await fetch(`http://localhost:3000/chitietmonan/${id}`)
        const data = await response.json()
        // console.log(data)
        setRecipe(data) // Cập nhật state với dữ liệu món ăn
      } catch (error) {
        console.error('Lỗi khi lấy chi tiết món ăn:', error)
      }
    }
    fetchRecipeDetail(ID) // Gọi hàm fetch API
  }, [ID])
console.log(recipe)

  if (!recipe) {
    return <Typography>Loading...</Typography>
  }

  
  return (
    <Box sx={{ p: 2, maxWidth: '600px', margin: '0 auto' }}>


      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src="https://img.thuthuattinhoc.vn/uploads/2019/10/26/hinh-anh-que-huong-con-song-uon-quanh_055458566.jpg" alt="anhChiTietTungMon"
          height='300px'/>
   
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AccessTime sx={{ mr: 1 }} />
          <Typography>{recipe.timeNau} phút</Typography>
          <Group sx={{ ml: 3, mr: 1 }} />
          <Typography>{recipe.khauPhan} người</Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          color="primary"
        >
      Lưu món
        </Button>
      </Box>

      <Box sx={{ mt: 2 }}>
    <Typography variant="h4">{recipe.moTa}</Typography>
    <Typography color="text.secondary">{recipe.moTa}</Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6">{recipe.nguyenLieu}</Typography>
        {/* <List>
          <ListItem>
            <ListItemText primary="1. Nguyên liệu 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. Nguyên liệu 2" />
          </ListItem>
        </List> */}
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6">Các bước làm</Typography>
        <Typography paragraph>
          {recipe.step}
        </Typography>
        {/* <Typography paragraph>
          Bước 2: Mô tả chi tiết các bước tiếp theo.
        </Typography> */}
        {/* Add more steps here */}
      </Box>

      <Divider sx={{ my: 3 }} />
      <Box>
        <Typography variant="h6">Bình luận ({comments.length})</Typography>
        <List>
          {comments.map((comment, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar alt={comment.username} />
              </ListItemAvatar>
              <ListItemText
                primary={comment.username}
                secondary={comment.content}
              />
            </ListItem>
          ))}
        </List>

        <TextField
          fullWidth
          label="Viết bình luận"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          multiline
          rows={2}
          variant="outlined"
          sx={{ mt: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddComment}
          sx={{ mt: 2 }}
        >
      Bình luận
        </Button>
      </Box>


        

    </Box>



  )
  
}

export default RecipeDetail
