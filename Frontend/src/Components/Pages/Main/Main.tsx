import './Main.css'
import { useState, useEffect } from 'react'
import { Select, MenuItem, Button } from '@mui/material'
import axios from 'axios'
import { Link } from 'react-router-dom'

interface Group {
  groupName: string
  groupKey: string
}

function Main(): JSX.Element {
  const [groupNames, setGroupNames] = useState<Group[]>([])
  const [meetings, setMeetings] = useState([])

  // use effect to get all groups from database
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/meetings/allGroups')
      .then((res) => {
        const groupNames = res.data.map((group: Group) => ({
          groupName: group.groupName,
          groupKey: group.groupKey,
        }))
        setGroupNames(groupNames)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  // handle change function for option select and run getMeetingsInfo with the target value key
  const handleChange = (event: any) => {
    getMeetingsInfo(event.target.value)
  }

  // get all meetings for a specific group with the group key
  const getMeetingsInfo = (key: number) => {
    axios
      .get(`http://localhost:8080/api/v1/meetings/meetingByKey/${key}`)
      .then((res) => {
        setMeetings(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div className="Main">
      {/* select menu with option that map through all the group names*/}
      select a production group:
      <Select onChange={handleChange}>
        {groupNames.map((group: Group) => (
          <MenuItem value={group.groupKey} key={group.groupKey}>
            {group.groupName}
          </MenuItem>
        ))}
      </Select>
      <br /> <br />
      {/* show the table only after option chosen */}
      {meetings.length > 0 && (
        // table for all the meetings
        <table className="paleBlueRows">
          <thead>
            <tr>
              <td>Group Key</td>
              <td>Start Time</td>
              <td>End Time</td>
              <td>Meeting Info</td>
              <td>Meeting Room</td>
              <td>Meeting Duration</td>
            </tr>
          </thead>
          <tbody>
            {meetings.map((meeting: any) => (
              <tr>
                <td>{meeting.groupKey}</td>
                <td>{meeting.startTimeDate}</td>
                <td>{meeting.finishTimeDate}</td>
                <td>{meeting.meetingInfo}</td>
                <td>{meeting.meetingRoom}</td>
                <td>{`${Math.round(
                  (new Date(meeting.finishTimeDate).getTime() -
                    new Date(meeting.startTimeDate).getTime()) /
                    (1000 * 60),
                )} minutes`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <br />
      <br />
      <Link to="/newMeeting">
        <Button variant="outlined">Add Meeting</Button>
      </Link>
    </div>
  )
}

export default Main
