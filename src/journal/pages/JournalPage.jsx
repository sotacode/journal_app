import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";

export const JournalApp = ( ) => {
    
    
    
    return (
        <JournalLayout>
            {/* <Typography variant="p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum voluptatem consequatur commodi et est natus velit nisi minima explicabo, cumque ullam sit totam animi eius fugiat, quidem corporis ad aspernatur!</Typography> */}
            <NothingSelectedView />
            {/* <NoteView /> */}

            <IconButton 
                size="large"
                sx={{ 
                    color:'white',
                    backgroundColor:'error.main',
                    ':hover': {  backgroundColor:'error.main', opacity:0.4 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize:30 }}/>
            </IconButton>
        </JournalLayout>
    );
};