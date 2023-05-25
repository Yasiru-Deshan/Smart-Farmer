import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Milestone = () => {
  return (
    <div id="milestone" >
      <center>
        <h1 style={{ fontSize: "40px", paddingTop:'50px' }}>Project Milestones</h1>
      </center>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Project Proposal</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Marks Allocated : 6
          </h4>
          <p>
            A Project Proposal is presented to potential sponsors or clients to
            receive funding or get your project approved.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Progress Presentation I
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Marks Allocated : 10
          </h4>
          <p>
            Progress Presentation I reviews the 50% completetion status of the
            project. This reveals any gaps or inconsistencies in the
            design/requirements.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Research Paper</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Marks Allocated : 10
          </h4>
          <p>
            Describes what you contribute to existing knowledge, giving due
            recognition to all work that you referred in making new knowledge
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Progress Presentation II
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Marks Allocated : 18
          </h4>
          <p>
            Progress Presentation II reviews the 90% completetion status
            demonstration of the project. Along with a Poster presesntation
            which describes the project as a whole.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Website Assessment
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Marks Allocated : 2
          </h4>
          <p>
            The Website helps to promote our research project and reveals all
            details related to the project.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Logbook</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Marks Allocated : 3
          </h4>
          <p>
            Status of the project is validated through the Logbook. This also
            includes, Status documents 1 & 2.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Final Report</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Marks Allocated : 19
          </h4>
          <p>
            Final Report evalutes the completed project done throughout the
            year. Marks mentioned below includes marks for Individual & group
            reports and also Final report.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Final Presentation & Viva
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Marks Allocated : 20
          </h4>
          <p>
            Viva is held individually to assess each members contribution to the
            project.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          //icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Milestone;
