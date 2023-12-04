import "./Resume.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Avatar, Paper, Typography, Button, Link } from "@mui/material/";
import { KeyboardArrowRight, Download } from "@mui/icons-material/";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {
  LocationOn,
  LocalPhone,
  GitHub,
  Instagram,
} from "@mui/icons-material/";
import pfp from "../resources/pfp.jpg";
import { Tilt } from "react-tilt";

const Resume = () => {
  const downloadAsPdf = () => {
    const input = document.getElementById("pdf-content");
    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 210, 297);
      pdf.save("resume.pdf");
    });
  };

  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <div className="main">
      <Paper elevation={0} className="resume" id="pdf-content">
        <div className="left">
          {/* Profile */}
          <div className="pfp">
            <Tilt options={defaultOptions} style={{ height: 150, width: 150 }}>
              <Avatar src={pfp} sx={{ width: 150, height: 150 }} />
            </Tilt>
          </div>

          {/* Contact */}

          <Typography variant="h5" component="h2" className="leftTitle" mt={6}>
            Contact
          </Typography>

          <hr style={{ width: "250px" }} />

          <Typography variant="body1" mt={2}>
            <LocationOn fontSize="small" />
            Address
          </Typography>
          <Typography variant="body2">25 Park Place</Typography>
          <Typography variant="body1" mt={2}>
            <LocalPhone fontSize="small" /> Phone
          </Typography>
          <Typography variant="body2">(+1) XXX-XXX-XXXX</Typography>
          <Typography variant="body1" mt={2}>
            <GitHub fontSize="small" /> GitHub
          </Typography>
          <Link
            href="https://www.github.com/"
            underline="hover"
            color="inherit"
          >
            <Typography variant="body2">github.com/</Typography>
          </Link>
                 

          {/* Education */}

          <Typography variant="h5" component="h2" className="leftTitle" mt={6}>
            Education
          </Typography>

          <hr style={{ width: "250px" }} />
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body2" mt={2}>
                  2019
                </Typography>
                <Typography variant="body2">School</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body2" mt={2}>
                  2020-2023
                </Typography>
                <Typography variant="body1">Computer Science</Typography>
                <Typography variant="body2">
                  GSU Atlanta
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>

          {/* Pro Skills */}

          <Typography variant="h5" component="h2" className="leftTitle" mt={6}>
            Skills
          </Typography>

          <hr style={{ width: "250px" }} />

          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> HTML5
          </Typography>
          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> CSS3
          </Typography>
          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> React JS
          </Typography>
          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> Python
          </Typography>
        </div>
        <div className="right">
          {/* Title */}

          <Typography variant="h4" component="h2">
            Firstname, Lastname
          </Typography>
          <Typography variant="h5" component="h2">
            Developer
          </Typography>

          {/* Profile */}
          <Typography variant="h5" component="h2" className="leftTitle" mt={6}>
            Profile
          </Typography>

          <div className="line">
            <hr style={{ width: "250px" }} />
          </div>

          <Typography variant="body1">
            <ul>
              <li>
                Mus placerat eget sed ipsum inceptos primis. Volutpat massa arcu eget posuere duis accumsan efficitur eros penatibus ante.
              </li>
              <li>
                Fames efficitur libero malesuada netus non. Suspendisse rutrum hendrerit sit accumsan vulputate sed volutpat potenti at dui fames. Magna velit molestie maecenas pharetra inceptos morbi dolor montes duis.
              </li>
              <li>
                Platea taciti lectus potenti ex rhoncus aliquet. Urna augue potenti luctus primis donec arcu.
              </li>
            </ul>
          </Typography>

          {/* Experience  */}
          <Typography variant="h5" component="h2" className="leftTitle" mt={6}>
            Experience
          </Typography>

          <div className="line">
            <hr style={{ width: "250px" }} />
          </div>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body2">
                  May - Aug 2023
                </Typography>
                <Typography variant="body2">
                  ABCD Co.
                </Typography>
                <Typography variant="body2">
                  Internship: Developer
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body2" mt={3}>
                  Aug 2022 - May 2023
                </Typography>
                <Typography variant="body2">Internship</Typography>
                <Typography variant="body2">
                  Co op: XYZ Co
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>

          {/* Tools */}
          <Typography variant="h5" component="h2" className="leftTitle" mt={6}>
            Tools
          </Typography>

          <div className="line">
            <hr style={{ width: "250px" }} />
          </div>

          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> VS Code
          </Typography>
          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> Spark
          </Typography>
          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> MySQL
          </Typography>
          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> Spider
          </Typography>
          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> Github
          </Typography>
        </div>
      </Paper>
      <Button
        variant="contained"
        onClick={downloadAsPdf}
        endIcon={<Download />}
      >
        Download as PDF
      </Button>
    </div>
  );
};

export default Resume;
