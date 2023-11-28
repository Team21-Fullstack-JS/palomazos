import {Box, Container, Tab, Tabs} from "@mui/material";
import {useState} from "react";
import {ReviewGrid} from "../reviewGrid/ReviewGrid.jsx";
import {TrailersGrid} from "../trailersGrid/TrailersGrid.jsx";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 1 }}>
                    {children}
                </Box>
            )}
        </Box>
    );
}

export const ReviewLanding = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container disableGutters>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                >
                    <Tab label="Palomazo" />
                    <Tab label="Críticas" />
                    <Tab label="Trailers" />
                </Tabs>
            </Box>
            <Container disableGutters={true}>
                <TabPanel value={value} index={0}>
                    <ContainerTabs>
                        Mi review personal
                    </ContainerTabs>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ContainerTabs>
                        <ReviewGrid />
                    </ContainerTabs>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ContainerTabs>
                        <TrailersGrid />
                    </ContainerTabs>
                </TabPanel>
            </Container>

        </Container>
    )
}

function ContainerTabs({ children }) {
    return (
        <Box
            sx={{
                minHeight: 80,
                height: { xs: 'auto', sm: 320, md: 330, lg: 340, xl: 350, xxl: 370 },
                overflow: 'none',
                overflowY: 'scroll',
            }}
        >
            {children}
        </Box>
    )
}