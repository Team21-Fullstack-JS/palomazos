import {Box, Container, Tab, Tabs} from "@mui/material";
import {useState} from "react";
import {ReviewGrid} from "../reviewGrid/ReviewGrid.jsx";
import {TrailersGrid} from "../trailersGrid/TrailersGrid.jsx";
import {Palomazo} from "../palomazo/Palomazo.jsx";

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
            <Box sx={{ width: '100%', marginTop: { lg: '.8rem'} }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                >
                    <Tab label="Palomazo" sx={{ fontSize: {sm: '1rem', lg: '1.1rem'} }} />
                    <Tab label="Críticas" sx={{ fontSize: {sm: '1rem', lg: '1.1rem'} }} />
                    <Tab label="Trailers" sx={{ fontSize: {sm: '1rem', lg: '1.1rem'} }} />
                </Tabs>
            </Box>
            <Container disableGutters={true}>
                <TabPanel value={value} index={0}>
                    <ContainerTabs>
                        <Palomazo />
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
                minHeight: 150,
                height: { xs: 410, sm: 420, md: 430, lg: 440, xl: 450, xxl: 470 },
                overflow: 'none',
                overflowY: 'auto',
                marginTop: {lg: '0.3rem'},
            }}
        >
            {children}
        </Box>
    )
}