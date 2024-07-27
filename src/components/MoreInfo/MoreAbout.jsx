import React from 'react'
import AboutImg from "../Images/AboutImg.jpg";
import Mission from "../Images/Mission.jpg";
import Vision from "../Images/Vision.jpg";
import Values from "../Images/Values.jpg";
import Team from "../Images/Team.jpg";


const MoreAbout = () => {
  return (
    <div>
      <div className="pt-10px mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[30px]">
        <div className="max-h-[495px] max-w-[586px]">
          <img className="w-[400px]" src={AboutImg} alt="About" />
        </div>
        <div className="flex flex-col items-start gap-4">
          <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
            About Us
          </h5>
          <h1 className="max-w-[485px] font-poppins text-[32px] font-semibold leading-normal text-[#031432]">
            Revolutionizing Mental Health Support Through Community and
            Innovation
          </h1>
          <p className="mb-4 max-w-[485px] text-para">
            Welcome to Care2Gather, where we believe in the power of community
            and support to enhance mental well-being. Our app connects patients
            and doctors through meaningful interactions and events, fostering a
            supportive environment for all.
          </p>
        </div>
      </div>

      {/* ----------------------------------- */}

      <div className="pt-10px mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[30px]">
        <div className="flex flex-col items-start gap-4">
          <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
            Our Mission
          </h5>
          <p className="mb-4 max-w-[485px] text-para">
            Our mission is to improve mental health through innovative
            technology and compassionate community support. We strive to connect
            individuals with the resources and events they need to thrive,
            creating a platform where everyone feels heard and valued.
          </p>
        </div>
        <div className="max-h-[495px] max-w-[586px]">
          <img className="w-[400px]" src={Mission} alt="About" />
        </div>
      </div>

      {/* ----------------------------------- */}
      <div className="pt-10px mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[30px]">
        <div className="max-h-[495px] max-w-[586px]">
          <img className="w-[400px]" src={Vision} alt="About" />
        </div>
        <div className="flex flex-col items-start gap-4">
          <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
            Our Vision
          </h5>
          <p className="mb-4 max-w-[485px] text-para">
            We envision a world where everyone has access to the mental health
            support they need, creating stronger, healthier communities. By
            leveraging technology and fostering community connections, we aim to
            make mental health support accessible to all.
          </p>
        </div>
      </div>

      {/* ----------------------------------- */}
      <div className="pt-10px mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[30px]">
        <div className="flex flex-col items-start gap-4">
          <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
            Our Values
          </h5>
          <p className="mb-4 max-w-[485px] text-para">
            <span className="text-third">Compassion:</span> We believe in
            empathy and understanding as the foundation of our support. <br />
            <span className="text-third">Innovation:</span> We leverage
            cutting-edge technology to provide the best possible support. <br />{" "}
            <span className="text-third">Community:</span> We foster a sense of
            belonging and mutual support. <br />{" "}
            <span className="text-third"> Integrity:</span> We maintain the
            highest standards of privacy and security.
          </p>
        </div>
        <div className="max-h-[495px] max-w-[586px]">
          <img className="w-[450px]" src={Values} alt="About" />
        </div>
      </div>

      {/* ----------------------------------- */}

      <div className="pt-10px mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[30px]">
        <div className="max-h-[495px] max-w-[586px]">
          <img className="w-[400px]" src={Team} alt="About" />
        </div>
        <div className="flex flex-col items-start gap-4">
          <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
            Meet the Team
          </h5>
          <p className="mb-4 max-w-[485px] text-para">
            Vijay S Patil and Naman, Frontend Development: Vijay and Naman lead
            the frontend development, ensuring a seamless and user-friendly
            interface. <br /> Vaishak, AI and Questionnaire: Vaishak handles the
            creation of the questionnaire and AI analysis, ensuring personalized
            and effective grouping of patients. <br /> Shashwath, Backend and
            Routing: Shashwath is in charge of backend development and routing,
            making sure the app runs smoothly and efficiently. <br /> Zayd,
            Database Design and Administration: Zayd is responsible for database
            design and administration, ensuring secure and reliable data
            management.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoreAbout