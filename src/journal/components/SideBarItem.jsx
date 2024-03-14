/* eslint-disable react/prop-types */
import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';


export const SideBarItem = ({ note }) => {

    const dispatch = useDispatch();
    const onClickNote = () => {
        dispatch( setActiveNote(note) )
    }

    const newTitle = useMemo( () => {
        return note.title > 17
            ? note.title.substring(0, 17) + '...'
            : note.title
    }, [note.title] )

    return (

            <ListItem key={ note } disablePadding>
                <ListItemButton onClick={onClickNote}>
                    <ListItemIcon>
                    <TurnedInNot/>
                    </ListItemIcon>

                    <Grid container>
                    <ListItemText primary={ newTitle }/>
                    <ListItemText secondary={ note.body }/>
                    </Grid>
                </ListItemButton>
            </ListItem>
            )
}
