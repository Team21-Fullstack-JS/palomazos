import {Box, Container, Tab, Tabs, Typography} from "@mui/material";
import {useState} from "react";
import {ReviewGrid} from "../reviewGrid/ReviewGrid.jsx";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export const ReviewLanding = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
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
                    <Tab label="Palomazos" />
                    <Tab label="Trailers" />
                </Tabs>
            </Box>
            <Box>
                <TabPanel value={value} index={0}>
                    <Box
                        sx={{
                            height: { xs: 200, sm: 210, md: 220, lg: 230, xl: 240, xxl: 250 },
                            overflow: 'none',
                            overflowY: 'scroll'
                        }}
                    >
                        <ReviewGrid />
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box
                        sx={{
                            height: { xs: 200, sm: 210, md: 220, lg: 230, xl: 240, xxl: 250 },
                            overflow: 'none',
                            overflowY: 'scroll'
                        }}
                    >
                        Videos
                    </Box>
                </TabPanel>
            </Box>

        </Container>
    )
}