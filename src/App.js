import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Container,
  Grid,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FlipCard from "./FlipCard";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00AEEF", // LIGHT_BLUE
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#2C2C2C", // DARK_GRAY
    },
  },
  typography: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
});

const services = [
  {
    title: "NLP Solutions",
    description:
      "Transform unstructured text into actionable insights with our NLP solutions including chatbots, sentiment analysis, document classification, and more.",
    image: "https://source.unsplash.com/random/400x300/?ai,nlp",
  },
  {
    title: "Chatbot Development",
    description:
      "Enhance customer engagement and automate support with intelligent AI-powered chatbots offering personalized, 24/7 assistance.",
    image: "https://source.unsplash.com/random/400x300/?chatbot,ai",
  },
  {
    title: "Predictive Analytics",
    description:
      "Anticipate trends and customer behaviors with machine learning models enabling proactive decision making with accurate forecasting.",
    image: "https://source.unsplash.com/random/400x300/?analytics,machinelearning",
  },
];

const content = {
  home: (
    <Box>
      <Typography paragraph>
        Welcome to Digital Ignite Technologies! Where AI innovation meets
        comprehensive software expertise.
      </Typography>
      <Typography paragraph>
        Transforming ideas into reality with innovative software solutions.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Our Expertise
      </Typography>
      <Typography paragraph>
        At Digital Ignite Technologies, we specialize in delivering top-notch
        software solutions tailored to your business needs. Our team of experts
        is dedicated to providing exceptional service and innovative
        solutions.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Why Choose Us?
      </Typography>
      <ul>
        <li>
          <strong>Innovative Solutions</strong>: We leverage the latest
          technologies to deliver cutting-edge solutions that drive results.
        </li>
        <li>
          <strong>Client-Centric Approach</strong>: We prioritize your needs and
          work closely with you to understand your unique requirements.
        </li>
        <li>
          <strong>Expert Team</strong>: Our team brings a wealth of experience
          and expertise to every project.
        </li>
        <li>
          <strong>Timely Delivery</strong>: We understand the importance of
          deadlines and strive to deliver projects on time.
        </li>
      </ul>
      <Typography variant="h5" gutterBottom>
        Our Services
      </Typography>
      <ul>
        <li>AI Solutions</li>
        <li>Software Development</li>
        <li>Data Analytics</li>
        <li>Cloud Solutions</li>
        <li>IT Consulting</li>
        <li>UI/UX Design</li>
        <li>Chatbot Development</li>
      </ul>
      <Typography paragraph>
        Ready to take your business to the next level? Contact us today!
      </Typography>
    </Box>
  ),
  about: (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to Digital Ignite Technologies
      </Typography>
      <Typography paragraph>
        Where innovation meets excellence! We are a startup dedicated to
        transforming the way businesses operate through cutting-edge software
        solutions.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Vision and Mission
      </Typography>
      <Typography variant="h6">Vision</Typography>
      <Typography paragraph>
        To be a global leader in software innovation, empowering businesses to
        achieve their full potential through technology.
      </Typography>
      <Typography variant="h6">Mission</Typography>
      <Typography paragraph>
        To deliver exceptional software solutions that meet the unique needs of
        our clients.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Our Values
      </Typography>
      <ul>
        <li>
          <strong>Innovation</strong>: We embrace change and continuously seek
          new ways to improve our solutions.
        </li>
        <li>
          <strong>Integrity</strong>: We conduct business with honesty and
          transparency.
        </li>
        <li>
          <strong>Excellence</strong>: We deliver high-quality solutions that
          exceed expectations.
        </li>
        <li>
          <strong>Customer Focus</strong>: We prioritize clients’ needs.
        </li>
        <li>
          <strong>Collaboration</strong>: We foster teamwork and collaboration.
        </li>
      </ul>
      <Typography variant="h5" gutterBottom>
        Our Story
      </Typography>
      <Typography paragraph>
        Digital Ignite Technologies was founded by passionate engineers and AI
        enthusiasts dedicated to innovative solutions.
      </Typography>
      <Typography variant="h5" gutterBottom>Our Team</Typography>
      <Typography paragraph>
        A skilled team with diverse backgrounds united by delivering exceptional
        solutions.
      </Typography>
    </Box>
  ),
  contact: (
    <Box>
      <Typography variant="h4" gutterBottom>
        We'd love to hear from you!
      </Typography>
      <Typography paragraph>
        Whether you have a question, feedback, or just want to say hello, feel
        free to reach out to us.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Get in touch
      </Typography>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:digitalignitetech@gmail.com">
            digitalignitetech@gmail.com
          </a>
        </li>
        <li>
          <strong>Phone:</strong> +91 1234567890
        </li>
        <li>
          <strong>Address:</strong> 1234 Ignite Lane, Tech City, Country
        </li>
      </ul>
      <Typography variant="h5" gutterBottom>
        Follow us on
      </Typography>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/company/digital-ignite-technologies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/DigitalIgniteTech"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/digitalignitetechnologies"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
      </ul>
    </Box>
  ),
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div hidden={value !== index} {...other} style={{ paddingTop: "2rem" }}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (_event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <AppBar position="sticky" color="primary" elevation={4}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
              Digital Ignite Technologies
            </Typography>
            <Tabs
              value={tabIndex}
              onChange={handleChange}
              textColor="inherit"
              indicatorColor="secondary"
            >
              <Tab label="Home" />
              <Tab label="Services" />
              <Tab label="About Us" />
              <Tab label="Contact Us" />
            </Tabs>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ flexGrow: 1, mt: 4, mb: 8 }}>
          <TabPanel value={tabIndex} index={0}>
            {content.home}
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <Grid container justifyContent="center" spacing={2}>
              {services.map(({ title, description, image }) => (
                <Grid item key={title}>
                  <FlipCard title={title} description={description} frontImage={image} />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={tabIndex} index={2}>
            {content.about}
          </TabPanel>
          <TabPanel value={tabIndex} index={3}>
            {content.contact}
          </TabPanel>
        </Container>

        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2025 Digital Ignite Technologies. All rights reserved.
          </Typography>
        </Box>
      </div>
    </ThemeProvider>
  );
}
