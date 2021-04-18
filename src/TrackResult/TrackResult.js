import React from "react";
import { Box, Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

export default function TrackSearchResult(props) {

    function PlaySong() {
        props.chooseTrack(props.track)
    }

    return (

        <Box class="result">
            <Grid container spacing={3} style={{ cursor: "pointer" }} onClick={PlaySong}>
                <Grid item xs={0} style={{ display: "flex", flexDirection: "row-reverse"}} >
                    <Typography variant="b1">
                        <Grid item xs={12} style={{padding: "12px"}}>
                            {props.track.title}
                            <Grid item xs={12} style={{ color: "#676461"}}>
                                {props.track.artist}
                            </Grid>
                        </Grid>
                    </Typography>
                    <img src={props.track.albumUrl} style={{ height: "64px", width: "64px" }} />
                </Grid>
            </Grid>
        </Box>
    )
}