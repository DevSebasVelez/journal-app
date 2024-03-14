import { useEffect, useMemo, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Button, Grid, Typography, TextField, IconButton } from "@mui/material"
import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

import { useFormWithValidations } from "../../hooks/useFormWithValidations";
import { ImageGallery } from "../components";
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal"




export const NoteView = () => {

    const dispatch = useDispatch();
    const { active:note, messageSave, isSaving } = useSelector( state => state.journal );
    const { body, title, date, onInputChange, formState } = useFormWithValidations( note );

    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date])

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch( setActiveNote(formState) )
    }, [formState])


    useEffect(() => {
      if ( messageSave.length > 0 ) {
        Swal.fire('Nota Actualizada', messageSave, 'success');
      }
    }, [messageSave])


    const onSaveNote = () => {
        dispatch( startSaveNote() )
    }

    const onFileInputChange = ({target}) =>{
        if ( target.files === 0 ) return;

        dispatch( startUploadingFiles(target.files) );
    }

    const onDelete = () => {
        dispatch( startDeletingNote() )
    }

    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            direction='row'
            justifyContent='space-between'
            sx={{mb: 1}}>
            <Grid item>
                <Typography fontSize={40} fontWeight='light'>{ dateString }</Typography>
            </Grid>

            <Grid item>

                <input
                    type="file"
                    multiple
                    onChange={onFileInputChange}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                />

                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined/>
                </IconButton>

                <Button
                    color='primary' sx={{padding: 2, borderRadius: 2}}
                    onClick={ onSaveNote }
                    disabled={ isSaving }
                >
                    <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese el titulo"
                    label="Titulo"
                    sx={{border: 'none', mb: 1}}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    minRows={6}
                    placeholder="Ingrese la descripción"
                    sx={{border: 'none', mb: 1}}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />

            </Grid>

            <Grid container justifyContent='end'>
                <Button
                    onClick={onDelete}
                    color="error"
                >
                    <DeleteOutline />
                    Eliminar nota
                </Button>
            </Grid>

            <ImageGallery images={ note.imageUrls }/>
        </Grid>


  )
}
