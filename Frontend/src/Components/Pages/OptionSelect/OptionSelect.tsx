import { ReactNode, useEffect, useState } from 'react'
import './OptionSelect.css'
import axios from 'axios'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'

// this is a component for option select and get all groups from database
// instead of repeat code in Main and AddMeeting i made 1 component

interface Group {
  groupName: string
  groupKey: string
}

interface OptionSelectProps {
  autoFocus?: boolean
  name?: string
  onChange?: (event: SelectChangeEvent<unknown>, child: ReactNode) => void
  error?: boolean
  required?: boolean
}

function OptionSelect(props: OptionSelectProps): JSX.Element {
  const { autoFocus, name, onChange, error, required } = props

  const [groupNames, setGroupNames] = useState<Group[]>([])

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

  return (
    <div className="OptionSelect">
      <Select
        id="groupKey"
        autoFocus={autoFocus}
        name={name}
        onChange={onChange}
        error={error}
        required={required}
      >
        {groupNames.map((group: Group) => (
          <MenuItem value={group.groupKey} key={group.groupKey}>
            {group.groupName}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}

export default OptionSelect
