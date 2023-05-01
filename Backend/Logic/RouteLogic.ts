import { NewMeeting } from '../Models/NewMeeting'
import dalMySQL from '../Utils/dalMySQL'

const allGroups = async () => {
  const SQLcommand = `
  SELECT * FROM meetings.production;
   `
  return dalMySQL.execute(SQLcommand)
}

const meetingsByKey = async (key: number) => {
  const SQLcommand = `
  SELECT * FROM meetings.meetingTable WHERE groupKey = ${key};
    `
  return dalMySQL.execute(SQLcommand)
}

const addMeeting = async (newMeeting: NewMeeting) => {
  const SQLcommand = `
      INSERT INTO meetings.meetingTable 
      (groupKey, startTimeDate, finishTimeDate, meetingInfo, meetingRoom)
      VALUES ('${newMeeting.groupKey}', '${newMeeting.startTimeDate}', 
      '${newMeeting.finishTimeDate}', '${newMeeting.meetingInfo}', '${newMeeting.meetingRoom}');`
  dalMySQL.execute(SQLcommand)
}

export default {
  allGroups,
  meetingsByKey,
  addMeeting,
}
