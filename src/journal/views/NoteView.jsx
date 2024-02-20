import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, Typography, TextField } from "@mui/material"
import { ImageGallery } from "../components"




export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{mb: 1}}>
        <Grid item>
            <Typography fontSize={40} fontWeight='light'>Febrero, 2024</Typography>
        </Grid>

        <Grid item>
            <Button color='primary' sx={{padding: 2, borderRadius: 2}}>
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
            />
            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                minRows={6}
                placeholder="Ingrese la descripcion"
                sx={{border: 'none', mb: 1}}
            />

        </Grid>

        <ImageGallery/>
    </Grid>


  )
}
