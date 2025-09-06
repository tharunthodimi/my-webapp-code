import React, { useState, useEffect, useRef } from "react";
import FlipCard from "./FlipCard";  // Adjust path as necessary
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PeopleIcon from '@mui/icons-material/People';
import VerifiedIcon from '@mui/icons-material/Verified';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import { Container, Grid } from "@mui/material";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Tabs,
  Tab,
  Button,
  TextField,
  Snackbar,
  Alert,
  useMediaQuery,
  CssBaseline,
  Link,
  Card,
  CardContent,
  CardMedia,
  Fade,
  Zoom,
  useScrollTrigger,
  Fab,
  Divider,
  alpha,
  InputAdornment,
  Paper,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Send as SendIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import emailjs from "@emailjs/browser";

// Enhanced theme with more professional color scheme
const theme = createTheme({
  palette: {
    primary: { 
      main: "#0063A0", 
      light: "#4D8EC4",
      dark: "#003C6B"
    },
    secondary: {
      main: "#FF6B35",
      light: "#FF9D68",
      dark: "#C43C03"
    },
    background: { 
      default: "#F8F9FA", 
      paper: "#FFFFFF"
    },
    text: { 
      primary: "#2C2C2C",
      secondary: "#5A5A5A" 
    },
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.2
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.75rem"
    },
    h3: {
      fontWeight: 600,
      fontSize: "2.25rem"
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.75rem"
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.5rem"
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.25rem"
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1.1rem",
      lineHeight: 1.6
    }
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          padding: '10px 24px',
          borderRadius: 8
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          borderRadius: 16,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.12)'
          }
        }
      }
    }
  }
});

// Add Inter font to head
if (typeof document !== 'undefined') {
  const fontLink = document.createElement("link");
  fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
  fontLink.rel = "stylesheet";
  document.head.appendChild(fontLink);
}

const menuItems = ["Home", "Services", "About Us", "Team", "Contact Us"];

const services = [
  {
    title: "NLP Solutions",
    description:
      "Transform unstructured text into actionable insights with NLP, chatbots, sentiment analysis, and more.",
    image: "/Images/nlp.png",
    features: ["Text Classification", "Sentiment Analysis", "Entity Recognition", "Text Generation"]
  },
  {
    title: "Chatbot Development",
    description:
      "Create AI-powered chatbots providing 24/7 personalized customer support and engagement.",
      image: "/Images/chatbot.png",
      features: ["24/7 Availability", "Multi-language Support", "Seamless Integration", "Custom Training"]
  },
  {
    title: "Predictive Analytics",
    description:
      "Leverage machine learning to anticipate trends and optimize decision-making.",
      image: "/Images/PredictiveAnalytics.png",
      features: ["Trend Forecasting", "Pattern Recognition", "Risk Assessment", "Data Visualization"]
  },
  {
    title: "Computer Vision Solutions",
    description:
      "Implement AI-powered image and video analysis for security, quality control, and automation.",
    image: "/Images/ComputerVision.png",
    features: ["Object Detection", "Facial Recognition", "Image Classification", "Video Analytics"]
  },
  {
    title: "Robotic Process Automation (RPA)",
    description:
      "Automate repetitive business tasks to enhance efficiency and reduce operational costs.",
    image: "/Images/RPA.png",
    features: ["Workflow Automation", "Data Extraction", "Process Monitoring", "Integration Services"]
  },
  {
    title: "Cloud AI Services",
    description:
      "Leverage scalable cloud AI platforms for robust, secure, and flexible deployment of AI models.",
    image: "/Images/CloudAIServices.png",
    features: ["Model Deployment", "Scalable Infrastructure", "Data Management", "Security Features"]
  },
  {
    title: "AI Consulting & Strategy",
    description:
      "Benefit from expert advice to develop tailored AI strategies aligned with business objectives.",
    image: "/Images/consulting.png",
    features: ["Roadmap Planning", "Use Case Identification", "Technology Selection", "Change Management"]
  },
];

const teamMembers = [
  {
    name: "Keshava",
    role: "CEO & Founder",
    // photo: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    bio: "15+ years experience in software development."
  },
  {
    name: "Tharun Tej Reddy",
    role: "Head of Development & Co-Founder",
    photo: "/Images/TharunImage.jpg",
    linkedin: "https://in.linkedin.com/in/tharuntejreddythodimi",
    bio: "8 years in AI and software development. IIIT Graduate."
  },
  {
    name: "Sree Mayee Kasireddy",
    role: "Head of Development",  
    photo: "/Images/raju.png",
    linkedin: "https://www.linkedin.com/in/sreemayee/",
    bio: "Full-stack developer with passion for creating intuitive user experiences."
  },
];

// const clients = [
//   { name: "TechCorp", logo: "/Images/logo.jpeg" },
//   { name: "InnovateCo", logo: "/Images/logo.jpeg" },
//   { name: "DataSystems", logo: "/Images/logo.jpeg" },
//   { name: "FutureTech", logo: "/Images/logo.jpeg" },
//   { name: "SmartSolutions", logo: "/Images/logo.jpeg" },
// ];

// Scroll to top component
function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

function SectionTitle({ children, subtitle }) {
  return (
    <Box sx={{ textAlign: "center", mb: 6, mt: 4 }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{ 
          fontWeight: "bold", 
          mb: 1,
          background: `linear(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          display: "inline-block"
        }}
      >
        {children}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 600, mx: "auto" }}>
          {subtitle}
        </Typography>
      )}
      <Divider 
  sx={{
    width: 60,
    height: 4,
    mx: "auto",
    mt: 2,
    borderRadius: 2,
    background: `linear-gradient(90deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`
  }}
/>
      {/* <Divider sx={{ width: 80, height: 4, backgroundColor: theme.palette.secondary.main, mx: "auto", mt: 2, borderRadius: 2 }} /> */}
    </Box>
  );
}

function AnimatedSection({ children, delay = 0 }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  
  useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(entry.isIntersecting);
          }, delay);
        }
      });
    });
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);
  
  return (
    <Fade in={isVisible} timeout={800}>
      <div ref={domRef}>{children}</div>
    </Fade>
  );
}


export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const themeMui = useTheme();
  const isMobile = useMediaQuery(themeMui.breakpoints.down("md"));
  const [activeSection, setActiveSection] = useState("home");
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [tabIndex, setTabIndex] = useState(0);

  const navigateSection = (section) => {
    setActiveSection(section);
    const idx = menuItems.findIndex((item) => item.toLowerCase().replace(" ", "") === section);
    setTabIndex(idx === -1 ? 0 : idx);
    setDrawerOpen(false);
    
    // Smooth scroll to section
    if (section !== "home") {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleTabChange = (_event, newValue) => {
    setTabIndex(newValue);
    const section = menuItems[newValue].toLowerCase().replace(" ", "");
    setActiveSection(section);
    navigateSection(section);
  };

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const sendEmail = () => {
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setSnackbarMsg("Please fill all fields.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    // const serviceID = "service_30jj32a";       // <-- Replace with your EmailJS service ID
    // const templateID = "template_w3eyoud";     // <-- Replace with your EmailJS template ID
    // const publicKey = "yamzBbv7zHDCtYIgr";       // <-- Replace with your EmailJS public key

    const serviceID = "service_ybsmmsc";       // <-- Replace with your EmailJS service ID
    const templateID = "template_x0uizi5";     // <-- Replace with your EmailJS template ID
    const publicKey = "LZ-lNhIuh8BJs6Bsr";       // <-- Replace with your EmailJS public key

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: contactForm.name,
          from_email: contactForm.email,
          message: contactForm.message,
        },
        publicKey
      )
      .then(() => {
        setSnackbarMsg("Message sent successfully! We'll get back to you soon.");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        setContactForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setSnackbarMsg("Failed to send message. Please try again later.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      });
  };

  const HeroSection = () => (
    <Box 
      sx={{ 
        minHeight: "90vh", 
        display: "flex", 
        alignItems: "center",
        background: `linear(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
        position: "relative",
        overflow: "hidden",
        py: 8
      }}
    >
      {/* Decorative elements */}
      <Box 
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `linear(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
          zIndex: 0
        }}
      />
      <Box 
        sx={{
          position: "absolute",
          bottom: -50,
          left: -50,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `linear(135deg, ${alpha(theme.palette.secondary.main, 0.1)} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
          zIndex: 0
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                background: `linear(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: theme.palette.primary.main
              }}
            >
              Digital Transformation, Simplified
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 4, fontSize: "1.25rem", lineHeight: 1.6, color: theme.palette.primary.main }}>
              We help businesses leverage cutting-edge AI and software solutions to drive innovation, 
              improve efficiency, and achieve sustainable growth.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button 
                variant="contained" 
                size="large" 
                onClick={() => navigateSection("contactus")}
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  background: `linear(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
                }}
              >
                Get Started
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                onClick={() => navigateSection("services")}
                sx={{ px: 4, py: 1.5 }}
              >
                Our Services
              </Button>
            </Box>
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <Box 
              component="img"
              src="/Images/logo.jpeg"
              alt="Digital Transformation"
              sx={{
                width: "100%",
                borderRadius: 4,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transform: "perspective(1000px) rotateY(-5deg)",
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: "perspective(1000px) rotateY(0deg)"
                }
              }}
            />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );

  const ClientLogos = () => (
    <Box sx={{ py: 6, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          Your Vision. Our Promise.
        </Typography>
        <Typography variant="subtitle1" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          We’re committed to delivering the solutions you need, exactly as you envision.
          Trust our dedicated team to bring your ideas to life—on time, with quality, and
          with your goals as our top priority.
        </Typography>
        {/* <Box textAlign="center">
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={() => navigateSection("contact")}
          >
            Get Started—Let's Build Together
          </Button>
        </Box> */}
      </Container>
    </Box>
  );
  
  
  // const ClientLogos = () => (
  //   <Box sx={{ py: 6, bgcolor: "background.paper" }}>
  //     <Container maxWidth="lg">
  //       <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
  //         Trusted by innovative companies worldwide
  //       </Typography>
  //       <Grid container justifyContent="center" alignItems="center" spacing={4}>
  //         {clients.map((client, index) => (
  //           <Grid item key={index} xs={6} sm={4} md={2}>
  //             <Box 
  //               component="img" 
  //               src={client.logo} 
  //               alt={client.name}
  //               sx={{ 
  //                 height: 40, 
  //                 filter: "grayscale(100%)", 
  //                 opacity: 0.7, 
  //                 transition: "all 0.3s ease",
  //                 "&:hover": {
  //                   filter: "grayscale(0%)",
  //                   opacity: 1
  //                 }
  //               }} 
  //             />
  //           </Grid>
  //         ))}
  //       </Grid>
  //     </Container>
  //   </Box>
  // );

  // const StatsSection = () => (
  //   <Box sx={{ py: 8, bgcolor: alpha(theme.palette.primary.main, 0.03) }}>
  //     <Container maxWidth="lg">
  //       <Grid container spacing={4} justifyContent="center">
  //         <Grid item xs={6} sm={3} textAlign="center">
  //           <Typography variant="h3" fontWeight="bold" color="primary">
  //             150+
  //           </Typography>
  //           <Typography variant="h6" color="text.secondary">
  //             Projects Completed
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={6} sm={3} textAlign="center">
  //           <Typography variant="h3" fontWeight="bold" color="primary">
  //             50+
  //           </Typography>
  //           <Typography variant="h6" color="text.secondary">
  //             Happy Clients
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={6} sm={3} textAlign="center">
  //           <Typography variant="h3" fontWeight="bold" color="primary">
  //             15+
  //           </Typography>
  //           <Typography variant="h6" color="text.secondary">
  //             Years Experience
  //           </Typography>
  //         </Grid>
  //         <Grid item xs={6} sm={3} textAlign="center">
  //           <Typography variant="h3" fontWeight="bold" color="primary">
  //             25+
  //           </Typography>
  //           <Typography variant="h6" color="text.secondary">
  //             Experts Team
  //           </Typography>
  //         </Grid>
  //       </Grid>
  //     </Container>
  //   </Box>
  // );
   
  const StatsSection = () => (
    <Box sx={{ py: 8, bgcolor: alpha(theme.palette.primary.main, 0.03) }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <EmojiObjectsIcon sx={{ fontSize: 48, color: "primary.main" }} />
            <Typography variant="h6" sx={{ mt: 2 }}>Innovation-Driven</Typography>
            <Typography variant="body2" color="text.secondary">
              Cutting-edge technology, built for tomorrow.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <PeopleIcon sx={{ fontSize: 48, color: "primary.main" }} />
            <Typography variant="h6" sx={{ mt: 2 }}>Expert Team</Typography>
            <Typography variant="body2" color="text.secondary">
              Passionate engineers, designers & consultants.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <VerifiedIcon sx={{ fontSize: 48, color: "primary.main" }} />
            <Typography variant="h6" sx={{ mt: 2 }}>Built on Trust</Typography>
            <Typography variant="body2" color="text.secondary">
              Integrity & openness in every partnership.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} textAlign="center">
            <RocketLaunchIcon sx={{ fontSize: 48, color: "primary.main" }} />
            <Typography variant="h6" sx={{ mt: 2 }}>Startup Spirit</Typography>
            <Typography variant="body2" color="text.secondary">
              Agile, fast, ambitious for your success.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
  
  
  const ServicesSection = () => {
    const [visibleCount, setVisibleCount] = useState(6);
  
    // Function to check if near bottom of scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
  
      if (scrollTop + windowHeight + 100 >= fullHeight) {
          // Load more services when close to bottom
          setVisibleCount((prev) =>
            Math.min(prev + 6, services.length)
          );
      }
    };
  
    useEffect(() => {
      // Only add scroll listener if we're in the services section
      if (activeSection === 'services') {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }
    }, [activeSection]);
  
    const displayedServices = services.slice(0, visibleCount);
  
    return (
      <Box id="services" sx={{ py: 8, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <SectionTitle 
            subtitle="We provide cutting-edge solutions to transform your business and drive innovation"
          >
            Our Services
          </SectionTitle>
  
          <Grid container spacing={4} justifyContent="center">
            {displayedServices.map(({ title, description, image }) => (
              <Grid item xs={12} md={6} lg={4} key={title}>
                <AnimatedSection>
                  <FlipCard 
                    title={title} 
                    description={description} 
                    frontImage={image} 
                  />
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  };
  

  
// const ServicesSection = () => {
//   const [showAll, setShowAll] = useState(false);

//   const displayedServices = showAll ? services : services.slice(0, 6);

//   return (
//     <Box id="services" sx={{ py: 8, bgcolor: "background.default" }}>
//       <Container maxWidth="lg">
//         <SectionTitle 
//           subtitle="We provide cutting-edge solutions to transform your business and drive innovation"
//         >
//           Our Services
//         </SectionTitle>
        
//         <Grid container spacing={4} justifyContent="center">
//           {displayedServices.map(({ title, description, image }) => (
//             <Grid item xs={12} md={6} lg={4} key={title}>
//               <AnimatedSection>
//                 <FlipCard 
//                   title={title} 
//                   description={description} 
//                   frontImage={image} 
//                 />
//               </AnimatedSection>
//             </Grid>
//           ))}
//         </Grid>
        
//         {services.length > 6 && (
//           <Box textAlign="center" sx={{ mt: 6 }}>
//             <Button 
//               variant="outlined" 
//               size="large"
//               onClick={() => setShowAll(true)}
//               disabled={showAll}
//             >
//               {showAll ? "All Services Displayed" : "View All Services"}
//             </Button>
//           </Box>
//         )}
//       </Container>
//     </Box>
//   );
// };

  

  const AboutSection = () => (
    <Box id="aboutus" sx={{ py: 8, bgcolor: "background.paper" }}>
      <Container maxWidth="md">
        <SectionTitle subtitle="Learn about our mission, values, and what makes us different">
          About Us
        </SectionTitle>
  
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" gutterBottom>
            Welcome to Digital Ignite Technologies
          </Typography>
          <Typography paragraph>
            Where innovation meets excellence! We are a startup dedicated to
            transforming the way businesses operate through cutting-edge software
            solutions.
          </Typography>
        </Box>
  
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Vision and Mission
          </Typography>
  
          <Typography variant="h5" gutterBottom>
            Vision
          </Typography>
          <Typography paragraph>
            To be a global leader in software innovation, empowering businesses to
            achieve their full potential through technology.
          </Typography>
  
          <Typography variant="h5" gutterBottom>
            Mission
          </Typography>
          <Typography paragraph>
            To deliver exceptional software solutions that meet the unique needs of our clients.
          </Typography>
        </Box>
  
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Our Values
          </Typography>
          <Box component="ul" sx={{ pl: 3 }}>
            <li><Typography><strong>Innovation</strong>: We embrace change and continuously seek new ways to improve our solutions.</Typography></li>
            <li><Typography><strong>Integrity</strong>: We conduct business with honesty and transparency.</Typography></li>
            <li><Typography><strong>Excellence</strong>: We deliver high-quality solutions that exceed expectations.</Typography></li>
            <li><Typography><strong>Customer Focus</strong>: We prioritize clients’ needs.</Typography></li>
            <li><Typography><strong>Collaboration</strong>: We foster teamwork and collaboration.</Typography></li>
          </Box>
        </Box>
  
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Our Story
          </Typography>
          <Typography paragraph>
            Digital Ignite Technologies was founded by passionate engineers and AI enthusiasts dedicated to innovative solutions.
          </Typography>
        </Box>
  
        <Box>
          <Typography variant="h4" gutterBottom>
            Our Team
          </Typography>
          <Typography paragraph>
            A skilled team with diverse backgrounds united by delivering exceptional solutions.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
  

  const TeamSection = () => (
    <Box id="team" sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <SectionTitle
          subtitle="Meet the talented professionals behind our success"
        >
          Our Team
        </SectionTitle>
        
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map(({ name, role, photo, linkedin, bio }) => (
            <Grid key={name} item xs={12} sm={6} md={3}>
              <AnimatedSection>
                <Card sx={{ textAlign: "center", height: "100%" }}>
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={photo}
                      alt={name}
                    />
                    <Box 
                      sx={{ 
                        position: "absolute", 
                        bottom: 0, 
                        left: 0, 
                        right: 0, 
                        height: "50%", 
                        background: "linear(to top, rgba(0,0,0,0.7), transparent)" 
                      }} 
                    />
                  </Box>
                  <CardContent>
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {bio}
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<LinkedInIcon />}
                    >
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );





  // const ContactSection = () => (
  //   <Box 
  //     id="contactus" 
  //     sx={{ py: 8, bgcolor: "background.paper" }}
  //     onClick={(e) => e.stopPropagation()}
  //     onMouseDown={(e) => e.stopPropagation()}
  //   >
  //     <Container maxWidth="lg">
  //       <SectionTitle
  //         subtitle="Get in touch with us for a free consultation"
  //       >
  //         Contact Us
  //       </SectionTitle>
        
  //       <Grid container spacing={6}>
  //         <Grid item xs={12} md={6}>
  //           <AnimatedSection>
  //             <Typography variant="h5" gutterBottom color="primary">
  //               Let's Talk About Your Project
  //             </Typography>
  //             <Typography variant="body1" paragraph>
  //               We're ready to help you transform your business with our cutting-edge solutions. 
  //               Fill out the form and our team will get back to you within 24 hours.
  //             </Typography>
              
  //             <Box sx={{ mt: 4 }}>
  //               <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
  //                 <EmailIcon color="primary" sx={{ mr: 2 }} />
  //                 <Box>
  //                   <Typography variant="body2" color="text.secondary">Email</Typography>
  //                   <Typography variant="body1">
  //                     <Link href="mailto:digitalignitetech@gmail.com" color="inherit">
  //                       digitalignitetech@gmail.com
  //                     </Link>
  //                   </Typography>
  //                 </Box>
  //               </Box>
                
  //               <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
  //                 <PhoneIcon color="primary" sx={{ mr: 2 }} />
  //                 <Box>
  //                   <Typography variant="body2" color="text.secondary">Phone</Typography>
  //                   <Typography variant="body1">+1 585-281-9581</Typography>
  //                 </Box>
  //               </Box>
                
  //               <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
  //                 <LocationOnIcon color="primary" sx={{ mr: 2, mt: 0.5 }} />
  //                 <Box>
  //                   <Typography variant="body2" color="text.secondary">Address</Typography>
  //                   <Typography variant="body1">
  //                     1234 Ignite Lane, Tech City, Country
  //                   </Typography>
  //                 </Box>
  //               </Box>
  //             </Box>
              
  //             <Box sx={{ mt: 4 }}>
  //               <Typography variant="h6" gutterBottom>Follow Us</Typography>
  //               <Box>
  //                 {/* <IconButton href="https://www.facebook.com/digitalignitetechn" target="_blank">
  //                   <FacebookIcon /> */}
  //                 {/* </IconButton> */}
  //                 <IconButton href="https://instagram.com/digitalignitetechn" target="_blank">
  //                   <InstagramIcon />
  //                 </IconButton>
  //                 <IconButton href="https://www.linkedin.com/company/digital-ignite-technologies/" target="_blank">
  //                   <LinkedInIcon />
  //                 </IconButton>
  //               </Box>
  //             </Box>
  //           </AnimatedSection>
  //         </Grid>
          
  //         <Grid item xs={12} md={6}>
  //           <AnimatedSection delay={200}>
  //             <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
  //               <input
  //                 type="text"
  //                 placeholder="Your Name"
  //                 value={contactForm.name || ""}
  //                 onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
  //                 style={{
  //                   width: '100%',
  //                   padding: '12px',
  //                   margin: '8px 0',
  //                   border: '1px solid #ccc',
  //                   borderRadius: '4px',
  //                   fontSize: '16px'
  //                 }}
  //               />
  //               <input
  //                 type="email"
  //                 placeholder="Email Address"
  //                 value={contactForm.email || ""}
  //                 onChange={(e) =>   setContactForm({ ...contactForm, name: e.target.value })}
  //                 style={{
  //                   width: '100%',
  //                   padding: '12px',
  //                   margin: '8px 0',
  //                   border: '1px solid #ccc',
  //                   borderRadius: '4px',
  //                   fontSize: '16px'
  //                 }}
  //               />
  //               <textarea
  //                 placeholder="Your Message"
  //                 rows={4}
  //                 value={contactForm.message || ""}
  //                 onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
  //                 style={{
  //                   width: '100%',
  //                   padding: '12px',
  //                   margin: '8px 0',
  //                   border: '1px solid #ccc',
  //                   borderRadius: '4px',
  //                   fontSize: '16px',
  //                   resize: 'vertical'
  //                 }}
  //               />
  //               <Button
  //                 variant="contained"
  //                 fullWidth
  //                 size="large"
  //                 sx={{ mt: 3, py: 1.5 }}
  //                 onClick={(e) => {
  //                   e.preventDefault();
  //                   e.stopPropagation();
  //                   sendEmail();
  //                 }}
  //                 startIcon={<SendIcon />}
  //               >
  //                 Send Message
  //               </Button>
  //             </Paper>
  //           </AnimatedSection>
  //         </Grid>
  //       </Grid>
        
  //       <Snackbar
  //         open={snackbarOpen}
  //         autoHideDuration={4000}
  //         onClose={() => setSnackbarOpen(false)}
  //         anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
  //       >
  //         <Alert 
  //           onClose={() => setSnackbarOpen(false)} 
  //           severity={snackbarSeverity} 
  //           sx={{ width: "100%" }}
  //           variant="filled"
  //         >
  //           {snackbarMsg}
  //         </Alert>
  //       </Snackbar>
  //     </Container>
  //   </Box>
  // );

  const ContactSection = () => {
    // Move state inside the component
    const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMsg, setSnackbarMsg] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  
    const sendEmail = (e) => {
      if (e) e.preventDefault();
      
      if (!contactForm.name || !contactForm.email || !contactForm.message) {
        setSnackbarMsg("Please fill all fields.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
        return;
      }
  
      const serviceID = "service_ybsmmsc";
      const templateID = "template_x0uizi5";
      const publicKey = "LZ-lNhIuh8BJs6Bsr";
  
      emailjs
        .send(
          serviceID,
          templateID,
          {
            from_name: contactForm.name,
            from_email: contactForm.email,
            message: contactForm.message,
          },
          publicKey
        )
        .then(() => {
          setSnackbarMsg("Message sent successfully! We'll get back to you soon.");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
          setContactForm({ name: "", email: "", message: "" });
        })
        .catch(() => {
          setSnackbarMsg("Failed to send message. Please try again later.");
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
        });
    };
  
    const handleInputChange = (field, value) => {
      setContactForm(prev => ({ ...prev, [field]: value }));
    };
  
    return (
      <Box 
        id="contactus" 
        sx={{ py: 8, bgcolor: "background.paper" }}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <Container maxWidth="lg">
          <SectionTitle
            subtitle="Get in touch with us for a free consultation"
          >
            Contact Us
          </SectionTitle>
          
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <AnimatedSection>
                <Typography variant="h5" gutterBottom color="primary">
                  Let's Talk About Your Project
                </Typography>
                <Typography variant="body1" paragraph>
                  We're ready to help you transform your business with our cutting-edge solutions. 
                  Fill out the form and our team will get back to you within 24 hours.
                </Typography>
                
                <Box sx={{ mt: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <EmailIcon color="primary" sx={{ mr: 2 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">Email</Typography>
                      <Typography variant="body1">
                        <Link href="mailto:digitalignitetech@gmail.com" color="inherit">
                          digitalignitetech@gmail.com
                        </Link>
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <PhoneIcon color="primary" sx={{ mr: 2 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">Phone</Typography>
                      <Typography variant="body1">+1 585-281-9581</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
                    <LocationOnIcon color="primary" sx={{ mr: 2, mt: 0.5 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">Address</Typography>
                      <Typography variant="body1">
                        1234 Ignite Lane, Tech City, Country
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>Follow Us</Typography>
                  <Box>
                    <IconButton href="https://instagram.com/digitalignitetechn" target="_blank">
                      <InstagramIcon />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/company/digital-ignite-technologies/" target="_blank">
                      <LinkedInIcon />
                    </IconButton>
                  </Box>
                </Box>
              </AnimatedSection>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <AnimatedSection delay={200}>
                <Paper 
                  elevation={3} 
                  sx={{ p: 4, borderRadius: 3 }}
                  component="form"
                  onSubmit={sendEmail}
                >
                  <TextField
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={contactForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="Email Address"
                    variant="outlined"
                    type="email"
                    fullWidth
                    margin="normal"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="Your Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                    value={contactForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SendIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{ mt: 3, py: 1.5 }}
                    startIcon={<SendIcon />}
                  >
                    Send Message
                  </Button>
                </Paper>
              </AnimatedSection>
            </Grid>
          </Grid>
          
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={4000}
            onClose={() => setSnackbarOpen(false)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert 
              onClose={() => setSnackbarOpen(false)} 
              severity={snackbarSeverity} 
              sx={{ width: "100%" }}
              variant="filled"
            >
              {snackbarMsg}
            </Alert>
          </Snackbar>
        </Container>
      </Box>
    );
  };

  
  const HeroWithVideoBackground = () => (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 600, // Adjust height as needed to cover HeroSection area
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          // filter: "brightness(0.6) saturate(0.7)",   // Darken and desaturate video for better contrast
          zIndex: 0,
        }}
        src="/Images/Home.mp4" // Replace with your video file path
      />
      <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bgcolor: "rgba(0, 0, 0, 0.5)", // semi-transparent black overlay
        zIndex: 1,
      }}
      />
      <Box sx={{ position: "relative",
        zIndex: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
        textAlign: "center", }}>
        <HeroSection />
      </Box>
    </Box>
  );
  const sections = {
    home: (
      <>
        <HeroWithVideoBackground />
        <ClientLogos />
        <StatsSection />
        
      </>
    ),
    services: <ServicesSection />,
    aboutus: <AboutSection />,
    team: <TeamSection />,
    contactus: <ContactSection />
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <div id="back-to-top-anchor" />
        <AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: "background.paper" }}>
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigateSection("home")}>
          <Box
                component="img"
                src="/Images/logo.jpeg"
                alt="Logo"
                sx={{ mr: 2,
                  borderRadius: 1,
                  width: 80,
                  height: "auto",}}
              />
              <Typography
                variant="h3"
                sx={{ 
                  fontWeight: "bold", 
                  cursor: "pointer",
                  background: `linear(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: theme.palette.primary.main
                }}
                onClick={() => navigateSection("home")}
              >
                Digital Ignite Technologies
              </Typography>
            </Box>
            
            {isMobile ? (
              <>
                <IconButton color="inherit" edge="end" onClick={toggleDrawer}>
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                  <List sx={{ width: 250, pt: 2 }}>
                    {menuItems.map((text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton
                          onClick={() => navigateSection(text.toLowerCase().replace(" ", ""))}
                          selected={tabIndex === index}
                          sx={{ 
                            borderRadius: 1, 
                            mx: 1, 
                            mb: 0.5,
                            "&.Mui-selected": {
                              backgroundColor: alpha(theme.palette.primary.main, 0.1),
                              color: theme.palette.primary.main,
                              "&:hover": {
                                backgroundColor: alpha(theme.palette.primary.main, 0.2),
                              }
                            }
                          }}
                        >
                          <ListItemText 
                            primary={text} 
                            primaryTypographyProps={{ 
                              fontWeight: tabIndex === index ? 600 : 400 
                            }} 
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                    <ListItem disablePadding>
                      <ListItemButton
                        sx={{ 
                          mt: 2, 
                          mx: 1, 
                          backgroundColor: theme.palette.primary.main,
                          color: "white",
                          "&:hover": {
                            backgroundColor: theme.palette.primary.dark,
                          }
                        }}
                        onClick={() => navigateSection("contactus")}
                      >
                        <ListItemText primary="Get Started" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Drawer>
              </>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Tabs
                  value={tabIndex}
                  onChange={handleTabChange}
                  textColor="primary"
                  indicatorColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                  allowScrollButtonsMobile
                >
                  {menuItems.map((label) => (
                    <Tab 
                      key={label} 
                      label={label} 
                      sx={{ 
                        fontWeight: 500, 
                        fontSize: "1rem",
                        textTransform: "none",
                        minWidth: "auto",
                        px: 2,
                        "&.Mui-selected": {
                          fontWeight: 600,
                        }
                      }} 
                    />
                  ))}
                </Tabs>
                {/* <Button 
                  variant="contained" 
                  onClick={() => navigateSection("contact")}
                  sx={{ 
                    ml: 2,
                    background: `linear(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
                  }}
                >
                  Get Started
                </Button> */}
              </Box>
            )}
          </Toolbar>
        </AppBar>

        <Box component="main" sx={{ flexGrow: 1 }}>
          {sections[activeSection]}
        </Box>

        {/* <Box
          component="footer"
          sx={{
            py: 6,
            px: 2,
            backgroundColor: theme.palette.grey[100],
            mt: "auto",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box
                    component="img"
                    src="/Images/logo.jpeg"
                    alt="Logo"
                    sx={{ mr: 2, borderRadius: 1, width: 20, height: "auto"}}
                  />
                  <Typography variant="h6" fontWeight="bold">
                    Digital Ignite Technologies
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.primary" sx={{ mb: 2 }}>
                  Transforming businesses with innovative AI and software solutions.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <IconButton href="https://www.facebook.com/digitalignitetechnologies" target="_blank" size="small">
                    <FacebookIcon fontSize="small" />
                  </IconButton>
                  <IconButton href="https://instagram.com/digitalignitetechn" target="_blank" size="small">
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                  <IconButton href="https://www.linkedin.com/company/digital-ignite-technologies/" target="_blank" size="small">
                    <LinkedInIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={2}>
                <Typography variant="h6" gutterBottom>Company</Typography>
                <List dense disablePadding>
                  {["About Us", "Services", "Team", "Careers"].map((item) => (
                    <ListItem key={item} disablePadding sx={{ mb: 1 }}>
                      <Link 
                        href="#" 
                        color="text.secondary" 
                        underline="hover" 
                        onClick={() => navigateSection(item.toLowerCase().replace(" ", ""))}
                        sx={{ cursor: "pointer" }}
                      >
                        {item}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" gutterBottom>Services</Typography>
                <List dense disablePadding>
                  {services.map((service) => (
                    <ListItem key={service.title} disablePadding sx={{ mb: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        {service.title}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              
              <Grid item xs={12} md={3}>
                <Typography variant="h6" gutterBottom>Contact</Typography>
                <List dense disablePadding>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <EmailIcon sx={{ fontSize: 16, mr: 1, color: "text.secondary" }} />
                    <Link href="mailto:digitalignitetech@gmail.com" color="text.secondary"  underline="none" sx={{ cursor: "pointer" }} >
                      digitalignitetech@gmail.com
                    </Link>
                  </ListItem>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <PhoneIcon sx={{ fontSize: 16, mr: 1, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">+91 1234567890</Typography>
                  </ListItem>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <LocationOnIcon sx={{ fontSize: 16, mr: 1, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      1234 Ignite Lane, Tech City, Country
                    </Typography>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            
            <Divider sx={{ my: 4 }} />
            
            <Typography variant="body2" color="text.secondary" textAlign="center">
              © {new Date().getFullYear()} Digital Ignite Technologies. All rights reserved.
            </Typography>
          </Container>
        </Box> */}
        

    <Box
      component="footer"
      sx={{
        py: 6,
        px: { xs: 3, md: 6 },
        backgroundColor: theme.palette.grey[100],
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                component="img"
                src="/Images/logo.jpeg"
                alt="Logo"
                sx={{ mr: 2, borderRadius: 1, width: 30, height: "auto" }}
              />
              <Typography variant="h6" fontWeight="bold" color="text.primary">
                Digital Ignite Technologies
              </Typography>
            </Box>
            <Typography variant="body2" color="text.primary" sx={{ mb: 2, fontSize: "0.95rem" }}>
              Transforming businesses with AI.
            </Typography>
            <Box sx={{ mt: 2 }}>
              {/* <IconButton
                href="https://www.facebook.com/digitalignitetechnologies"
                target="_blank"
                size="small"
                aria-label="Facebook"
              >
                <FacebookIcon fontSize="small" />
              </IconButton> */}
              <IconButton
                href="https://instagram.com/digitalignitetechn"
                target="_blank"
                size="small"
                aria-label="Twitter"
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/company/digital-ignite-technologies/"
                target="_blank"
                size="small"
                aria-label="LinkedIn"
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Company
            </Typography>
            <List dense disablePadding>
              {["About Us", "Services", "Team", "Careers"].map((item) => (
                <ListItem key={item} disablePadding sx={{ mb: 1 }}>
                  <Link
                    href="#"
                    color="text.secondary"
                    underline="hover"
                    onClick={() => navigateSection(item.toLowerCase().replace(" ", ""))}
                    sx={{ cursor: "pointer", fontSize: "0.95rem" }}
                  >
                    {item}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Services
            </Typography>
            <List dense disablePadding>
              {services.map((service) => (
                <ListItem key={service.title} disablePadding sx={{ mb: 1 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.95rem" }}>
                    {service.title}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Contact
            </Typography>
            <List dense disablePadding>
              <ListItem disablePadding sx={{ mb: 1, display: "flex", alignItems: "center" }}>
                <EmailIcon sx={{ fontSize: 16, mr: 1, color: "text.secondary" }} />
                <Link
                  href="mailto:digitalignitetech@gmail.com"
                  color="text.secondary"
                  underline="none"
                  sx={{ cursor: "pointer", fontSize: "0.95rem" }}
                >
                  digitalignitetech@gmail.com
                </Link>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1, fontSize: "0.95rem" }}>
                <PhoneIcon sx={{ fontSize: 16, mr: 1, color: "text.secondary" }} />
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.95rem" }}>
                 +1 585-281-9581
                </Typography>
              </ListItem>
              <ListItem disablePadding sx={{ mb: 1, display: "flex", alignItems: "flex-start" }}>
                <LocationOnIcon sx={{ fontSize: 16, mr: 1, color: "text.secondary", mt: 0.4 }} />
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.95rem" }}>
                  1234 Ignite Lane, Tech City, Country
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ fontSize: "0.85rem" }}>
          © {new Date().getFullYear()} Digital Ignite Technologies. All rights reserved.
        </Typography>
      </Container>
    </Box>


        <ScrollTop>
          <Fab color="primary" size="medium" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Box>
    </ThemeProvider>
  );
}