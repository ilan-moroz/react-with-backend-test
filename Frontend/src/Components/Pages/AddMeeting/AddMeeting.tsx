import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material'
import './AddMeeting.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import OptionSelect from '../OptionSelect/OptionSelect'

// save the new mission in the database
const addNewMeetings = (newMeeting: any) => {
  axios
    .post('http://localhost:8080/api/v1/meetings/newMeeting', newMeeting)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })
}

function AddMeeting(): JSX.Element {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    const startTimeDate = data.startDate.replace('T', ' ')
    const finishTimeDate = data.finishDate.replace('T', ' ')

    const newMeeting = {
      groupKey: data.groupKey,
      meetingInfo: data.meetingInfo,
      meetingRoom: data.meetingRoom,
      startTimeDate: startTimeDate,
      finishTimeDate: finishTimeDate,
    }
    addNewMeetings(newMeeting)
    navigate('/')
  }

  return (
    <div className="AddMeeting">
      {/* add new meeting form */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add New Meeting
          </Typography>
          <br />
          <br />
          <InputLabel htmlFor="groupKey" sx={{ color: 'black' }}>
            Select Group:
          </InputLabel>
          <form onSubmit={handleSubmit(onSubmit)}>
            <OptionSelect
              autoFocus
              {...register('groupKey', { required: true })}
              name="groupKey"
              error={Boolean(errors.groupKey)}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Meeting Information"
              id="meetingInfo"
              autoFocus
              {...register('meetingInfo', { required: true })}
              name="meetingInfo"
              error={Boolean(errors.meetingInfo)}
              helperText={errors.meetingInfo ? 'Meeting info is required' : ''}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Meeting Room"
              id="meetingRoom"
              autoFocus
              {...register('meetingRoom', { required: true })}
              name="meetingRoom"
              error={Boolean(errors.meetingRoom)}
              helperText={errors.meetingRoom ? 'Meeting room is required' : ''}
            />
            <InputLabel htmlFor="startDate" sx={{ color: 'black' }}>
              Meeting start at:
            </InputLabel>
            <TextField
              fullWidth
              id="startDate"
              type="datetime-local"
              {...register('startDate', { required: true })}
              name="startDate"
              error={Boolean(errors.startDate)}
              helperText={
                errors.startDate ? 'Start date and time is required' : ''
              }
            />
            <br />
            <InputLabel htmlFor="startDate" sx={{ color: 'black' }}>
              Meeting finish at:
            </InputLabel>
            <TextField
              type="datetime-local"
              id="finishDate"
              fullWidth
              {...register('finishDate', { required: true })}
              name="finishDate"
              error={Boolean(errors.finishDate)}
              helperText={
                errors.finishDate ? 'Finish date and time is required' : ''
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Meeting
            </Button>
          </form>
          <Grid container></Grid>
        </Box>
      </Container>
    </div>
  )
}

export default AddMeeting
