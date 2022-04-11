import React from "react";
// import Jdata from "./Jdata";
import { useLocation } from "react-router";

const jdata = [
  {
    id: 1,
    position: "Front end developer1",
    description:
      "SharePoint Developer  Salary: Up to $5000  Work Days/ Hours: Mon - Fri / 09:00 AM - 06:00 PM    Jobscope:   Design, development and maintenance of the software applications using Microsoft SharePoint Development toolkit Liaise with users on the requirement, design and testing issues Ensure appropriate documentation is created and maintained throughout the software development lifecycles such as Business Rules, Software Requirement Specifications, design Specification, Interface Requirements, Source Codes, Testing Specifications, Operation manual, Training Manual and other documents as required from time to time   Requirements:   Experience with SharePoint version 2010 or higher Minimum 2 years’ experience with SharePoint server, PowerShell, OOTB features, Configurable features and interaction between SharePoint and IIS, SharePoint Workflow, Web Parts, SharePoint custom applications, CSOM and other APIs Experience and good knowledge of .NET Framework, C#, ASP.NET, JavaScript, and HTML Certified SharePoint and/or ASP.NET Developer Diploma/Degree in Computer Science/Information Technology",
  },
  {
    id: 2,
    position: "Backend developer",
    description:
      "SharePoint Developer  Salary: Up to $5000  Work Days/ Hours: Mon - Fri / 09:00 AM - 06:00 PM    Jobscope:   Design, development and maintenance of the software applications using Microsoft SharePoint Development toolkit Liaise with users on the requirement, design and testing issues Ensure appropriate documentation is created and maintained throughout the software development lifecycles such as Business Rules, Software Requirement Specifications, design Specification, Interface Requirements, Source Codes, Testing Specifications, Operation manual, Training Manual and other documents as required from time to time   Requirements:   Experience with SharePoint version 2010 or higher Minimum 2 years’ experience with SharePoint server, PowerShell, OOTB features, Configurable features and interaction between SharePoint and IIS, SharePoint Workflow, Web Parts, SharePoint custom applications, CSOM and other APIs Experience and good knowledge of .NET Framework, C#, ASP.NET, JavaScript, and HTML Certified SharePoint and/or ASP.NET Developer Diploma/Degree in Computer Science/Information Technology",
  },
  {
    id: 3,
    position: "Data enginee",
    description:
      "SharePoint Developer  Salary: Up to $5000  Work Days/ Hours: Mon - Fri / 09:00 AM - 06:00 PM    Jobscope:   Design, development and maintenance of the software applications using Microsoft SharePoint Development toolkit Liaise with users on the requirement, design and testing issues Ensure appropriate documentation is created and maintained throughout the software development lifecycles such as Business Rules, Software Requirement Specifications, design Specification, Interface Requirements, Source Codes, Testing Specifications, Operation manual, Training Manual and other documents as required from time to time   Requirements:   Experience with SharePoint version 2010 or higher Minimum 2 years’ experience with SharePoint server, PowerShell, OOTB features, Configurable features and interaction between SharePoint and IIS, SharePoint Workflow, Web Parts, SharePoint custom applications, CSOM and other APIs Experience and good knowledge of .NET Framework, C#, ASP.NET, JavaScript, and HTML Certified SharePoint and/or ASP.NET Developer Diploma/Degree in Computer Science/Information Technology",
  },
  {
    id: 4,
    position: "React developer",
    description:
      "SharePoint Developer  Salary: Up to $5000  Work Days/ Hours: Mon - Fri / 09:00 AM - 06:00 PM    Jobscope:   Design, development and maintenance of the software applications using Microsoft SharePoint Development toolkit Liaise with users on the requirement, design and testing issues Ensure appropriate documentation is created and maintained throughout the software development lifecycles such as Business Rules, Software Requirement Specifications, design Specification, Interface Requirements, Source Codes, Testing Specifications, Operation manual, Training Manual and other documents as required from time to time   Requirements:   Experience with SharePoint version 2010 or higher Minimum 2 years’ experience with SharePoint server, PowerShell, OOTB features, Configurable features and interaction between SharePoint and IIS, SharePoint Workflow, Web Parts, SharePoint custom applications, CSOM and other APIs Experience and good knowledge of .NET Framework, C#, ASP.NET, JavaScript, and HTML Certified SharePoint and/or ASP.NET Developer Diploma/Degree in Computer Science/Information Technology",
  },
  {
    id: 5,
    position: "Project managerr",
    description:
      "SharePoint Developer  Salary: Up to $5000  Work Days/ Hours: Mon - Fri / 09:00 AM - 06:00 PM    Jobscope:   Design, development and maintenance of the software applications using Microsoft SharePoint Development toolkit Liaise with users on the requirement, design and testing issues Ensure appropriate documentation is created and maintained throughout the software development lifecycles such as Business Rules, Software Requirement Specifications, design Specification, Interface Requirements, Source Codes, Testing Specifications, Operation manual, Training Manual and other documents as required from time to time   Requirements:   Experience with SharePoint version 2010 or higher Minimum 2 years’ experience with SharePoint server, PowerShell, OOTB features, Configurable features and interaction between SharePoint and IIS, SharePoint Workflow, Web Parts, SharePoint custom applications, CSOM and other APIs Experience and good knowledge of .NET Framework, C#, ASP.NET, JavaScript, and HTML Certified SharePoint and/or ASP.NET Developer Diploma/Degree in Computer Science/Information Technology",
  },
  {
    id: 6,
    position: "Business Analyst",
    description:
      "SharePoint Developer  Salary: Up to $5000  Work Days/ Hours: Mon - Fri / 09:00 AM - 06:00 PM    Jobscope:   Design, development and maintenance of the software applications using Microsoft SharePoint Development toolkit Liaise with users on the requirement, design and testing issues Ensure appropriate documentation is created and maintained throughout the software development lifecycles such as Business Rules, Software Requirement Specifications, design Specification, Interface Requirements, Source Codes, Testing Specifications, Operation manual, Training Manual and other documents as required from time to time   Requirements:   Experience with SharePoint version 2010 or higher Minimum 2 years’ experience with SharePoint server, PowerShell, OOTB features, Configurable features and interaction between SharePoint and IIS, SharePoint Workflow, Web Parts, SharePoint custom applications, CSOM and other APIs Experience and good knowledge of .NET Framework, C#, ASP.NET, JavaScript, and HTML Certified SharePoint and/or ASP.NET Developer Diploma/Degree in Computer Science/Information Technology",
  },
  {
    id: 7,
    position: "Product owner",
    description:
      "SharePoint Developer  Salary: Up to $5000  Work Days/ Hours: Mon - Fri / 09:00 AM - 06:00 PM    Jobscope:   Design, development and maintenance of the software applications using Microsoft SharePoint Development toolkit Liaise with users on the requirement, design and testing issues Ensure appropriate documentation is created and maintained throughout the software development lifecycles such as Business Rules, Software Requirement Specifications, design Specification, Interface Requirements, Source Codes, Testing Specifications, Operation manual, Training Manual and other documents as required from time to time   Requirements:   Experience with SharePoint version 2010 or higher Minimum 2 years’ experience with SharePoint server, PowerShell, OOTB features, Configurable features and interaction between SharePoint and IIS, SharePoint Workflow, Web Parts, SharePoint custom applications, CSOM and other APIs Experience and good knowledge of .NET Framework, C#, ASP.NET, JavaScript, and HTML Certified SharePoint and/or ASP.NET Developer Diploma/Degree in Computer Science/Information Technology",
  },
  {
    id: 8,
    position: "Agile project manager",
    description:
      "SharePoint Developer  Salary: Up to $5000  Work Days/ Hours: Mon - Fri / 09:00 AM - 06:00 PM    Jobscope:   Design, development and maintenance of the software applications using Microsoft SharePoint Development toolkit Liaise with users on the requirement, design and testing issues Ensure appropriate documentation is created and maintained throughout the software development lifecycles such as Business Rules, Software Requirement Specifications, design Specification, Interface Requirements, Source Codes, Testing Specifications, Operation manual, Training Manual and other documents as required from time to time   Requirements:   Experience with SharePoint version 2010 or higher Minimum 2 years’ experience with SharePoint server, PowerShell, OOTB features, Configurable features and interaction between SharePoint and IIS, SharePoint Workflow, Web Parts, SharePoint custom applications, CSOM and other APIs Experience and good knowledge of .NET Framework, C#, ASP.NET, JavaScript, and HTML Certified SharePoint and/or ASP.NET Developer Diploma/Degree in Computer Science/Information Technology",
  },
];

const Jobdesc = () => {
  const params = useLocation();
  console.log("parms", params);
  // alert(params.state.jobid);

  const obj = jdata.filter((item) => item.id === params.state.id);
  console.log("obj ", obj);

  return (
    <>
      <div className="posts">
        {jdata
          .filter((item) => item.id === params.state.jobid)
          .map((post) => {
            return (
              <div key={post.id} className="post">
                <h1> Job description</h1>
                <h4>{post.position}</h4>
                <p>{post.description}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Jobdesc;
