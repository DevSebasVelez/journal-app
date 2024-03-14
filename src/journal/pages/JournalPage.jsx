import { useDispatch, useSelector } from "react-redux"
import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"

import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { startNewNote } from "../../store/journal/thunks"



export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal );

  const onClickNewNote = () => {
    dispatch( startNewNote() )
  }

  return (
    <JournalLayout>

      {
        (!active) ? <NothingSelectedView/> : <NoteView/>
      }
      


      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.8},
          position: 'fixed',
          right: 50,
          bottom: 30,
          }}
        onClick={ onClickNewNote }
        disabled={ isSaving }
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>
    </JournalLayout>
  )
}
