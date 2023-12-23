import { Box, Typography } from "@mui/material"
import Navbar from "../components/Navbar"

function NotFound() {
    return (
        <>
            <Navbar />
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' pt={9}>
                <Typography variant='h3'>404</Typography>
                <Typography variant='h4'>Page Not Found</Typography>
            </Box>
        </>
    )
}

export default NotFound