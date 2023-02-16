import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";

export const SideBar = ( {drawerWidth = 240} ) => {
    
    
    
    return (
        <Box
            component='nav'
            sx={{ width: {sm:drawerWidth}, flexShrink: {sm: 0} }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: {xs: 'block'},
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">Nelson Rivera</Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                      ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'].map(month=>(
                        <ListItem key={month} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={month}/>
                                    <ListItemText secondary={'Do qui amet magna amet ea cupidatat sunt nostrud cillum.'}/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                      ))   
                    }
                </List>

            </Drawer>
            
        </Box>
    );
};