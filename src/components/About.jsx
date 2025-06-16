import verticals from "/logos/the-verticals.svg";
import expand from "/logos/expand.svg";
import gitam from "/logos/gitam.svg";
import { Link } from "react-router";
import { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="skills bg-white p-4">
        <h5 className="text-xl font-bold text-center">About</h5>
        <p className="text-center mt-3 leading-8 text-gray-600">
          Results-oriented IT Professional with 7.4 years of hands-on experience
          in the design, development, and implementation of dynamic web
          applications. Proficient in front-end and back-end technologies
          including HTML5, CSS3, Bootstrap, JavaScript, React.js, jQuery, Ajax,
          PHP, and database management using MySQL, and MSSQL. Demonstrated
          expertise in building responsive, user-friendly web interfaces and
          robust server-side logic. Adept at collaborating with cross-functional
          teams, troubleshooting issues, and delivering high-quality solutions
          that meet business requirements. Passionate about continuous learning
          and staying current with emerging web technologies.
        </p>
      </div>
      <div className="mt-4 exp bg-white p-4">
        <h5 className="text-xl font-bold text-center">Experience</h5>
        <div>
          <div className="flex gap-x-3">
            <div className="min-w-14 text-end">
              <span className="text-xs text-gray-500 dark:text-neutral-400">
                FEB 2018 - MAY 2019
              </span>
            </div>

            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
              </div>
            </div>

            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                <img className="w-14 h-5" src={verticals} alt="Verticals" />
                The Verticals
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                Workes as Web Developer
              </p>
            </div>
          </div>

          <div className="flex gap-x-3">
            <div className="min-w-14 text-end">
              <span className="text-xs text-gray-500 dark:text-neutral-400">
                MAY 2019 - FEB 2021
              </span>
            </div>

            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
              </div>
            </div>

            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                <img className="w-14 h-5" src={expand} alt="Expand" />
                Expand Software Solutions
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                Workes as Software Enginner
              </p>
            </div>
          </div>

          <div className="flex gap-x-3">
            <div className="min-w-14 text-end">
              <span className="text-xs text-gray-500 dark:text-neutral-400">
                FEB 2021 - JUN 2025
              </span>
            </div>

            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
              </div>
            </div>

            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                <img className="w-14 h-5" src={gitam} alt="GITAM" />
                GITAM
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                Workes as Sr. Software Enginner
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="projects bg-white mt-4 p-4">
        <h5 className="text-xl font-bold text-center">Projects</h5>
        <div className="mt-3 pb-3 leading-8 text-gray-600 border-b-1 border-gray-100">
          <h6 className="font-semibold text-lg">
            Travel Desk Management System
          </h6>
          <p>
            Developed a Travel Desk Management System to optimize travel booking
            and approval processes. The system handles requests for flights,
            trains, local transportation (car, goods), buses, and
            accommodations, incorporating a two-level approval process and
            seamless integration with vendor portals.
          </p>
          <div className="pl-3">
            <p className="font-bold">Key Features:</p>
            <ul className="text-sm leading-6 list-disc pl-8">
              <li>
                <span className="font-semibold">Key Features:</span> Accepts
                travel requests via email and a web portal.
              </li>
              <li>
                <span className="font-semibold">Approval Workflow:</span>{" "}
                Implements a two-level approval process (Level 1 and Level 2).
              </li>
              <li>
                <span className="font-semibold">Travel Agent Portal:</span>{" "}
                Requests are forwarded to the travel agent for processing.
              </li>
              <li>
                <span className="font-semibold">Vendor Interaction:</span>{" "}
                Agents forward approved requests to vendors, who book the
                tickets.{" "}
              </li>
              <li>
                <span className="font-semibold">Verification:</span> Ensures
                bookings are verified and confirmed with the requester.{" "}
              </li>
              <li>
                <span className="font-semibold">Notifications:</span> Integrates
                email notifications for request updates and approvals.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-3 pb-3 leading-8 text-gray-600 border-b-1 border-gray-100">
          <h6 className="font-semibold text-lg">
            Kitchen Inventory Management System
          </h6>
          <p>
            Developed a Kitchen Inventory Management System to streamline
            inventory control and request processes within a kitchen
            environment. The system features three main modules: Store,
            Approvers (HODs), and Kitchen.
          </p>
          <div className="pl-3">
            <p className="font-bold">Key Modules and Processes:</p>
            <ul className="text-sm leading-6 list-decimal pl-6">
              <li className="font-semibold">
                Store Module:
                <ul className="font-normal list-disc pl-6">
                  <li>
                    <span className="font-semibold">Invoice Management: </span>
                    Manages invoices from vendors.
                  </li>
                  <li>
                    <span className="font-semibold">tem Management: </span>
                    Updates inventory with new items and modifies existing items
                    based on invoices.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Inventory Visibility:{" "}
                    </span>
                    Displays newly added and updated items to the kitchen staff.
                  </li>
                </ul>
              </li>
              <li className="font-semibold">
                Approvers Module:
                <ul className="font-normal list-disc pl-6">
                  <li>
                    <span className="font-semibold">HOD Approval: </span>
                    Inventory requests from the kitchen are reviewed and modified by the Head of Department (HOD) and Head of Institute (HOI).
                  </li>
                  <li>
                    <span className="font-semibold">Approval Workflow: </span>
                    Requests must be approved by both HOD and HOI before being forwarded to the Store module.
                  </li>
                </ul>
              </li>
              <li className="font-semibold">
                Kitchen Module:
                <ul className="font-normal list-disc pl-6">
                  <li>
                    <span className="font-semibold">Request Creation: </span>
                    Kitchen staff can request items needed for cooking by adding them to a cart and raising an inventory request.
                  </li>
                  <li>
                    <span className="font-semibold">Request Submission: </span>
                    Requests are sent to the HOD for review and modification, then to the HOI for final approval.
                  </li>
                </ul>
              </li>
              <li className="font-semibold">
                Storekeeper:
                <ul className="font-normal list-disc pl-6">
                  <li>
                    <span className="font-semibold">Indent Issuance: </span>
                    Upon final approval, the storekeeper processes the request and issues the indent for the items.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-3 pb-3 leading-8 text-gray-600 border-b-1 border-gray-100">
          <h6 className="font-semibold text-lg">Loan Calculators</h6>
          <div
            className="flex align-baseline
"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
              height="15px"
              width="15px"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 59.669 59.669"
              xml:space="preserve"
              className="mt-2"
            >
              <path d="M55.868,3.8c-2.446-2.446-5.709-3.793-9.189-3.793c-3.479,0-6.743,1.347-9.189,3.793l-9.07,9.07  c-3.275,3.275-4.42,7.876-3.461,12.09c-0.941-0.212-1.91-0.333-2.9-0.333c-3.479,0-6.743,1.347-9.188,3.793L3.8,37.491  c-5.066,5.066-5.066,13.312,0,18.378c2.446,2.446,5.709,3.793,9.189,3.793s6.743-1.347,9.189-3.793l9.07-9.07  c3.275-3.275,4.42-7.876,3.461-12.09c0.941,0.212,1.91,0.333,2.9,0.333c3.48,0,6.744-1.347,9.189-3.793l9.071-9.07  C60.936,17.112,60.936,8.867,55.868,3.8z M28.42,43.97l-9.07,9.07c-1.69,1.69-3.95,2.621-6.361,2.621s-4.67-0.931-6.361-2.621  c-3.507-3.508-3.507-9.214,0-12.722l9.071-9.07c1.69-1.69,3.949-2.621,6.36-2.621c1.724,0,3.366,0.483,4.782,1.372l-7.752,7.752  c-0.781,0.781-0.781,2.047,0,2.828c0.39,0.391,0.902,0.586,1.414,0.586s1.024-0.195,1.414-0.586l7.753-7.753  C31.852,36.3,31.44,40.949,28.42,43.97z M53.04,19.35l-9.071,9.07c-1.69,1.69-3.949,2.621-6.361,2.621  c-1.724,0-3.365-0.483-4.781-1.372l7.752-7.752c0.781-0.781,0.781-2.047,0-2.828c-0.78-0.781-2.048-0.781-2.828,0l-7.753,7.753  c-2.182-3.474-1.77-8.122,1.25-11.143l9.07-9.07c1.69-1.69,3.95-2.621,6.361-2.621c2.412,0,4.67,0.931,6.361,2.621  s2.621,3.949,2.621,6.361C55.661,15.401,54.73,17.66,53.04,19.35z" />
            </svg>{" "}
            &nbsp;
            <Link to={"https://www.tlgbuilder.com/new-home-vs-resale-calculator/"} target="_blank">
              New Home vs Resale Calculator
            </Link>{" "}
            &nbsp; | &nbsp;
            <Link to={"https://www.tlgbuilder.com/new-home-vs-renting-calculator/"} target="_blank">
              New Home vs Renting Calculator
            </Link>
          </div>
          <p>
            Developed interactive loan calculators to compare financial
            scenarios between new homes and resale or comparison homes. The
            calculators enable users to make informed decisions by presenting
            clear comparisons of cost breakdowns, savings, and loan terms.
          </p>
          <div className="pl-3">
            <p className="font-bold">Responsibilities:</p>
            <ul className="text-sm leading-6 list-disc pl-8">
              <li>
                Designed and developed the full front-end and back-end of the
                calculators.
              </li>
              <li>
                Integrated real-time calculations with dynamic form inputs.
              </li>
              <li>Ensured responsiveness and cross-browser compatibility.</li>
              <li>
                Worked closely with stakeholders to deliver user-friendly
                financial tools.
              </li>
            </ul>
          </div>
        </div>
        {showMore && (
          <>
            <div className="mt-3 pb-3 leading-8 text-gray-600 border-b-1 border-gray-100">
              <h6 className="font-semibold text-lg">GITAM</h6>
              <div className="flex align-baseline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                  height="15px"
                  width="15px"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 59.669 59.669"
                  xml:space="preserve"
                  className="mt-2"
                >
                  <path d="M55.868,3.8c-2.446-2.446-5.709-3.793-9.189-3.793c-3.479,0-6.743,1.347-9.189,3.793l-9.07,9.07  c-3.275,3.275-4.42,7.876-3.461,12.09c-0.941-0.212-1.91-0.333-2.9-0.333c-3.479,0-6.743,1.347-9.188,3.793L3.8,37.491  c-5.066,5.066-5.066,13.312,0,18.378c2.446,2.446,5.709,3.793,9.189,3.793s6.743-1.347,9.189-3.793l9.07-9.07  c3.275-3.275,4.42-7.876,3.461-12.09c0.941,0.212,1.91,0.333,2.9,0.333c3.48,0,6.744-1.347,9.189-3.793l9.071-9.07  C60.936,17.112,60.936,8.867,55.868,3.8z M28.42,43.97l-9.07,9.07c-1.69,1.69-3.95,2.621-6.361,2.621s-4.67-0.931-6.361-2.621  c-3.507-3.508-3.507-9.214,0-12.722l9.071-9.07c1.69-1.69,3.949-2.621,6.36-2.621c1.724,0,3.366,0.483,4.782,1.372l-7.752,7.752  c-0.781,0.781-0.781,2.047,0,2.828c0.39,0.391,0.902,0.586,1.414,0.586s1.024-0.195,1.414-0.586l7.753-7.753  C31.852,36.3,31.44,40.949,28.42,43.97z M53.04,19.35l-9.071,9.07c-1.69,1.69-3.949,2.621-6.361,2.621  c-1.724,0-3.365-0.483-4.781-1.372l7.752-7.752c0.781-0.781,0.781-2.047,0-2.828c-0.78-0.781-2.048-0.781-2.828,0l-7.753,7.753  c-2.182-3.474-1.77-8.122,1.25-11.143l9.07-9.07c1.69-1.69,3.95-2.621,6.361-2.621c2.412,0,4.67,0.931,6.361,2.621  s2.621,3.949,2.621,6.361C55.661,15.401,54.73,17.66,53.04,19.35z" />
                </svg>{" "}
                &nbsp;
                <Link to={"https://gitam.edu"}>https://gitam.edu</Link>
              </div>
              <p>
                Developed and maintained the official GITAM University website
                using the Drupal Content Management System (CMS). The website
                serves as an integrated platform providing detailed information
                on academic programs, courses, syllabi, faculty profiles,
                events, fee structures, scholarships, and other academic
                resources.
              </p>
              <div className="pl-3">
                <p className="font-bold">Key Features:</p>
                <ul className="text-sm leading-6 list-disc pl-8">
                  <li>
                    Dynamic content management for departments, faculty, and
                    academic programs.
                  </li>
                  <li>Event calendar and news modules for timely updates.</li>
                  <li>
                    Secure admin dashboard for content editors and site
                    administrators.
                  </li>
                  <li>
                    Responsive design for seamless access on mobile and desktop
                    devices.
                  </li>
                  <li>
                    Search functionality for quick navigation of courses,
                    departments, and faculty.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-3 pb-3 leading-8 text-gray-600 border-b-1 border-gray-100">
              <h6 className="font-semibold text-lg">Lexaclass</h6>
              <div
                className="flex align-baseline
"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                  height="15px"
                  width="15px"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 59.669 59.669"
                  xml:space="preserve"
                  className="mt-2"
                >
                  <path d="M55.868,3.8c-2.446-2.446-5.709-3.793-9.189-3.793c-3.479,0-6.743,1.347-9.189,3.793l-9.07,9.07  c-3.275,3.275-4.42,7.876-3.461,12.09c-0.941-0.212-1.91-0.333-2.9-0.333c-3.479,0-6.743,1.347-9.188,3.793L3.8,37.491  c-5.066,5.066-5.066,13.312,0,18.378c2.446,2.446,5.709,3.793,9.189,3.793s6.743-1.347,9.189-3.793l9.07-9.07  c3.275-3.275,4.42-7.876,3.461-12.09c0.941,0.212,1.91,0.333,2.9,0.333c3.48,0,6.744-1.347,9.189-3.793l9.071-9.07  C60.936,17.112,60.936,8.867,55.868,3.8z M28.42,43.97l-9.07,9.07c-1.69,1.69-3.95,2.621-6.361,2.621s-4.67-0.931-6.361-2.621  c-3.507-3.508-3.507-9.214,0-12.722l9.071-9.07c1.69-1.69,3.949-2.621,6.36-2.621c1.724,0,3.366,0.483,4.782,1.372l-7.752,7.752  c-0.781,0.781-0.781,2.047,0,2.828c0.39,0.391,0.902,0.586,1.414,0.586s1.024-0.195,1.414-0.586l7.753-7.753  C31.852,36.3,31.44,40.949,28.42,43.97z M53.04,19.35l-9.071,9.07c-1.69,1.69-3.949,2.621-6.361,2.621  c-1.724,0-3.365-0.483-4.781-1.372l7.752-7.752c0.781-0.781,0.781-2.047,0-2.828c-0.78-0.781-2.048-0.781-2.828,0l-7.753,7.753  c-2.182-3.474-1.77-8.122,1.25-11.143l9.07-9.07c1.69-1.69,3.95-2.621,6.361-2.621c2.412,0,4.67,0.931,6.361,2.621  s2.621,3.949,2.621,6.361C55.661,15.401,54.73,17.66,53.04,19.35z" />
                </svg>{" "}
                &nbsp;
                <Link to={"https://app.lexaclass.com/register"}>
                  https://app.lexaclass.com/register
                </Link>
              </div>
              <p>
                Developed a web-based application for managing a flexible laptop
                purchase scheme, allowing users(students and staff) to browse
                available laptops, make purchases via full payment or select
                installment plans. The system supports down payments of 10%,
                25%, or 50%, and automates the calculation and tracking of
                remaining installments.
              </p>
            </div>
            <div className="mt-3 pb-3 leading-8 text-gray-600 border-b-1 border-gray-100">
              <h6 className="font-semibold text-lg">
                Laptop Purchase Scheme System
              </h6>
              <p>
                We implemented product for enrolling the students to classes.
                Provided roles with admin, family and instructor. Admin can able
                to do the enrolments to classes. If students don’t want to come
                or they want to drop the class admin initiate the
                refund/transfer that particular class. We provided admin side as
                well as guest flow to register/enrolled class. We are provided
                parties enrolment also.Modules are in Class Enrollments, Refund,
                Transfer, Report generations, Party Enrollments, Family
                Registrations, Manage multiple organization with same product.
              </p>
              <div className="pl-3">
                <p className="font-bold">Key Features:</p>
                <ul className="text-sm leading-6 list-disc pl-8">
                  <li>Admin interface to manage and list available laptops.</li>
                  <li>
                    User portal to select laptops, view specifications, and
                    choose payment options.
                  </li>
                  <li>
                    Dynamic pricing logic based on down payment and installment
                    plan.
                  </li>
                  <li>Installment tracking with payment history.</li>
                  <li>Secure authentication and role-based access control.</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 pb-3 leading-8 text-gray-600 border-b-1 border-gray-100">
              <h6 className="font-semibold text-lg">
                Employee Anniversary & Birthday Notification System
              </h6>
              <p>
                Developed an automated notification system to recognize employee
                birthdays and work anniversaries. The system sends personalized
                emails and messages to employees at 9:00 AM on the relevant day.
                Additionally, an HR dashboard was implemented to display a daily
                list of employees celebrating birthdays or work anniversaries,
                including name and years of service.
              </p>
              <div className="pl-3">
                <p className="font-bold">Key Features:</p>
                <ul className="text-sm leading-6 list-disc pl-8">
                  <li>
                    Scheduled email and message notifications for birthdays and
                    work anniversaries
                  </li>
                  <li>
                    Personalized content with employee name and years of
                    service.
                  </li>
                  <li>
                    HR dashboard displaying real-time list of employees
                    celebrating events.
                  </li>
                  <li>
                    Daily trigger mechanism using scheduled tasks or cron jobs.
                  </li>
                  <li>Data fetched dynamically from the employee database.</li>
                </ul>
              </div>
            </div>
          </>
        )}
        <div className="text-center mt-3">
          <Link onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show more"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
