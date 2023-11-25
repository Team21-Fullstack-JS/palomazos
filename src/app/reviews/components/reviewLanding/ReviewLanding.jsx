import {Box, Container, Tab, Tabs} from "@mui/material";
import {useState} from "react";
import {Outlet} from "react-router";

export const ReviewLanding = () => {

    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };

    return (
        <Container>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                >
                    <Tab value="reviews" label="Comentarios" />
                    <Tab value="similars" label="Similares" />
                </Tabs>
            </Box>
            <Box>
                <Outlet />
            </Box>

        </Container>
    )
}