import { string } from "yup";

const test1 = [{
    // index: '1',
    question:`
    Employers pay their prescribed 1% through an online payment platform and the RRR of the transaction is documented for record purpose. What is the meaning of RRR`,
    options: [ 'Remita Retrieval Referral', 'Remittal Retrieval Reference', 'Remittal Retrieval Rate', 'Remita Retrieval Reference'],
    correct: 'Remita Retrieval Reference'
},
{
    // index: '2',
    question:'What if informal employee earns #17,000 monthly',
    options: ['2%', '1.5%', '1.8%', '1%'],
    correct: '1.5%'
},
{
    // index: '3',
    question:"Using the prescribed minimum contribution of 1% stipulated by ECA, what will be the total monthly contribution of an employer of 3 staff supposing each staff earns #30,000 monthly",
    options: ['₦1,000', '₦900','₦3,000','₦300'],
    correct: '₦900'
},
{
    // index: '4',
    question:"What year was the Employee Compensation Act enacted",
    options: ['2004', '2010','2014','1993'],
    correct: '2010'
},
{
    // index: '5',
    question:"How many regions and branches does NSITF have?",
    options: ['10 regions & 50 branches', '10 regions and 52 branches','11 regions and 56 branches','50 branches spread across the 6 geopolitical zones'],
    correct: '11 regions and 56 branches'
},
{
    // index: '6',
    question:"ECS stands for",
    options: ['Employee Compensation Scheme', 'Employees Compulsion Scheme','Employees’ Compensation Scheme','Employers Compensation Scheme'],
    correct: 'Employees’ Compensation Scheme'
},
{
    // index: '7',
    question:"The National Provident Fund was established by an Act of Parliament in 1961 to provide a poverty alleviation measure as required by convention No.102 of ILO. What is the full meaning of ILO?",
    options: ['Internal Local Order', 'International Labour Officer','Internal Liaison Officer','International Labour Organisation'],
    correct: 'International Labour Organisation'
},
{
    // index: '8',
    question:"Section 51 of The Employee Compensation Action act Prescribes that a minimum of 1% of the total payroll of an employer be paid to NSITF",
    options: ['True', 'False'],
    correct: 'False'
},
{
    // index: '9',
    question:"The ECS form can be access through all the following, except",
    options: ['NSITF website', 'Employees’ Compensation Act 2010','Regional Offices','Branch Offices'],
    correct: 'Employees’ Compensation Act 2010'
},
{
    // index: '10',
    question:"All but one of the following is a core value of NSITF",
    options: ['Human Capital Development', 'Security of Investable Funds','Professional management and good corporate governance','Ensuring suitable compensation for work done.'],
    correct: 'Ensuring suitable compensation for work done.'
},
{
    // index: '11',
    question:"What is the percentage payable by an employer in the informal sector with a monthly income of #4,800",
    options: ['1%', '2%','3%','4%'],
    correct: '2%'
},
{
    // index: '12',
    question:"How many Local Governments Areas are there in Nigeria",
    options: ['774', '784','775','773'],
    correct: '774'
},
{
    // index: '13',
    question:"According to section 33 of the ECA an Officer of the Fund shall have powers to enter the premises of an employer and inspect records",
    options: ['True', 'False'],
    correct: 'False'
},
{
    // index: '14',
    question:"Since it’s creation, NSITF has evolved from a Provident Fund scheme, to a Social Insurance Scheme, and currently …",
    options: ['Employee Compensation Act', 'Employment Compensation Scheme','Employee Accident and Incident compensation scheme','Employee Compensation Scheme'],
    correct: 'Employee Compensation Scheme'
},
{
    // index: '15',
    question:"What is the full meaning of NSITF",
    options: ['National Social Insurance Trust Fund', 'Nigeria Social Compensation Scheme','Nigeria Social Insurance Trust Fund','Nigeria Provident Fund'],
    correct: 'Nigeria Social Insurance Trust Fund'
},
{
    // index: '16',
    question:"The Pension reform Act 2004 as amended in 2014, replaced the mandate of NSITF as a Pension Scheme Operator with that of the provision of ……..",
    options: ['Social security Insurance service', 'Nigerians Social Insurance Trust Fund','1% payroll enforcement payments','Creation of Trust Fund'],
    correct: 'Social security Insurance service'
},
{
    // index: '17',
    question:"What is the percentage payable where the informal employee earns above #30,000",
    options: ['1.5%', '1.8%','1.25%','1.2%'],
    correct: '1.25%'
},
{
    question:"In Admin, KIV stands for ...............?",
    options: ['Keep In Viewing', 'Keep In View','Keeping information View','Keep in Viewing'],
    correct: 'Keep In View'
},
{
    question:"The objectives of the act can be found in?",
    options: ['Section 1', 'Section 2','Section 3','Section 4'],
    correct: 'Section 1'
},
{
    question:"_________ is a feedback on the quality of service?",
    options: ['Redress', 'Roadside advert & Jingles','Suggestions or complaints','Toll free line'],
    correct: 'Suggestions or complaints'
},
{
    question:"In NSITF, form ECS MR 01 is referred to as ______",
    options: ['Memo Report', 'Memorandum Report','Monitoring Report','Medical report'],
    correct: 'Medical report'
},
{
    question:"All these are qualities of Auditors except......",
    options: ['Objectivity', 'Confidentiality','Competence','Realizability'],
    correct: 'Realizability'
},
{
    question:"Which of these is not part of the requirements for registration under ECS?",
    options: ['CAC Certificate', 'Schedule of Payment','NSITF Official Receipt','Registration Form (ECS.01)'],
    correct: 'NSITF Official Receipt'
},
{
    question:"Operational Audit, Revenue Audit, Claims Audit, Post Payment Audit and Pre-payment Audit are all carried out by Auditors of NSITF",
    options: ['True', 'False'],
    correct: 'True'
},
{
    question:"I.P.P.I.S stands for ____________ Personal ______________ Information ___________ ",
    options: ['International/Payment/System', 'Integrated/Payroll/System','Internally/Payroll/service','Information/Payment/System'],
    correct: 'Integrated/Payroll/System'
},
{
    question:"The fraudulent practice of making phone calls or leaving voice messages purporting to be from reputable companies in order to induce individuals to reveal personal information, such as bank details and credit card numbers is called",
    options: ['Cyberstalking', 'Vishing','Phishing','Smishing'],
    correct: 'Vishing'
},
{
    question:"Which of these is not an Audit document?",
    options: ['Audit Report', 'Audit Plan','Query Form','Stock Register'],
    correct: 'Stock Register'
},
{
    question:"A record arising out of any enquiry examination shall be property of the Board and shall be held in confidence.",
    options: ['True', 'False'],
    correct: 'True'
},
{
    question:"Which section of the ACT empowers an officer to enter any workplace at anytime with or without warrant or notice?",
    options: ['61', '54','36','55'],
    correct: '54'
},
{
    question:"Our customers service principles include these except?",
    options: ['Responsiveness', 'Quality Service','Confidentiality','Hard work'],
    correct: 'Hard work'
},
{
    question:"In _________ department, the request for OPE and report has to be carried out with attached photograph(s) of areas visited.",
    options: ['Enforcement Department', 'Account Department','Informal Sector Department','HSE Department'],
    correct: 'Informal Sector Department'
},
{
    question:"An audit that is carried out as required by law is known as",
    options: ['Special Audit', 'Performance Audit','Statutory Audit','Investigation'],
    correct: 'Statutory Audit'
},
{
    question:"P.G.W stands for?",
    options: ['Principal General Warrant', 'Provisional General Warrant','Public General Warrant','Public Generated Revenue'],
    correct: 'Provisional General Warrant'
},
{
    question:"_____________________is the full meaning of MFA.",
    options: ['Monthly Fund Allocation', 'Monitoring Fund Allocate','Money Fund Allocation','Money Fund Allocate'],
    correct: 'Monthly Fund Allocation'
},
{
    question:"Which of the following information may not be required in reporting the occurrence of injury, death or occupational disease?",
    options: ['Name of the Employee', 'Name of the dependent','Nature and cause of the disease or injury if known','Time and place of occurrence'],
    correct: 'Name of the dependent'
},
{
    question:"Our __________ are an integral part of our success",
    options: ['Customers', 'Stakeholders','Employers','Customers'],
    correct: 'Stakeholders'
},
{
    question:"The Informal sector department regards M.O.U as _______",
    options: ['Memorandum of Unity', 'Memorandum of Union','Memorandum of Understanding','None of the above'],
    correct: 'Memorandum of Understanding'
},
{
    question:"Transparency & accountability is part of _______?",
    options: ['Our service standards', 'What we do','Core Values','Security of investible funds'],
    correct: 'Core Values'
},
{
    question:"Compensation for loss of productivity is in what Section of the Act?",
    options: ['Section 13', 'Section 22','Sectuon 15','None of the above'],
    correct: 'None of the above'
},
{
    question:"All these are required for the renewal of NSITF Certificate except________.",
    options: ['Remita Copy', 'Birth Certificate','Copy of Bank Teller','Clients application letter'],
    correct: 'Birth Certificate'
},
{
    question:"One of the following is needed in Registration of ECS",
    options: ['Bank Account', 'Photograph','Schedule of payment','Schedule of Letter'],
    correct: 'Schedule of payment'
},
{
    question:"Mention 3 duties of corporate affairs department.",
    options: ['Protocol, public relations, media', 'Protocol, Public Relations Tracking','Protocol, Public relations, media consultancy','Protocol, public relationships, media consultancy'],
    correct: 'Protocol, public relations, media consultancy'
},
{
    question:"According to section 51. Every employer who defaults in complying with the requirement under sub-section (1) of this Section commits an offence under this Act.",
    options: ['True', 'False'],
    correct: 'False'
},
{
    question:"Which section of the ECA 2010 provides right for appeal to customers to appeal to the board",
    options: ['Section 12', 'Section 31','Section 55','Section 5'],
    correct: 'Section 55'
},
{
    question:"A formal document that defines Internal Audit, Purpose, Authority, Responsibility and Position within an organization is known as",
    options: ['Audit Charter', 'Internal Control','Safeguard assets Document','Reference Records'],
    correct: 'Audit Charter'
},
{
    question:"The daily ECS collection sheet is only found in _______ Department.",
    options: ['Account Department', 'Claims Department','Informal Sector','Enforcement'],
    correct: 'Informal Sector'
},
{
    question:"What is the keyboard shortcut to lock your PC when you are leaving your desk to attend to your boss or other matters?",
    options: ['Windows logo key + I', 'Windows logo key + J','Windows logo key + K','Windows logo key + L'],
    correct: 'Windows logo key + L'
},
{
    question:"Which of the following departments is not under ED operations?",
    options: ['ICT', 'Claims & Compensation','H.S.E','None of the above'],
    correct: 'None of the above'
},
{
    question:"Audit Process include the following except:",
    options: ['Notification', 'Opening Meeting','Closing Meeting','None of the above'],
    correct: 'None of the above'
},
{
    question:"According to the Staff condition of service, all NSITF staff are eligible for over overtime allowance.",
    options: ['True', 'False'],
    correct: 'False'
},
{
    question:"D.V.E.A.B stands for Department ________ Expenditure _____________ Book",
    options: ['Voucher/Account', 'Allocation/Vote','View/Admin','Vote/Allocation'],
    correct: 'Vote/Allocation'
},
{
    question:"The informal sector has officially stopped functioning.",
    options: ['True', 'False'],
    correct: 'False'
},
{
    question:"What does ISA stand for?",
    options: ['International Statement of Account', 'International Standard on Auditing','Internal Standard for Audit','None of the above'],
    correct: 'International Standard on Auditing'
},
{
    question:"R.B.I.N stands for _________________ Issue Note.",
    options: ['Record Book', 'Remita Book','Receipt Book','Regulation Book'],
    correct: 'Receipt Book'
},
{
    question:"A whole system of control put in place by management is known as_____",
    options: ['Control Standard', 'Internal Control','Office Guide','Internal Checks'],
    correct: 'Internal Control'
},
{
    question:"The allowance that is paid once every three years is called ______",
    options: ['Rent', 'Housing','Furniture','None of the above'],
    correct: 'Furniture'
},
{
    question:"The fraudulent practice of sending emails purporting to be from reputable sources in order to induce individuals to reveal personal information, such as passwords and credit card numbers is called?",
    options: ['Vishing', 'Fishing','Phishing','Cyberstalking'],
    correct: 'Phishing'
},
{
    question:"The sensitization by the Informal Sector Unit of NSITF is to ______",
    options: ['Create Relationship', 'Create awareness','Enrolled Employers','None of the above'],
    correct: 'None of the above'
},
{
    question:"As used in claims processing for compensation, what does MER stand for?",
    options: ['Medicare Expense Report', 'Medical Emergency Refund','Medical Expenses Refund','Medical Expenses Refunding'],
    correct: 'Medical Expenses Refund'
},
{
    question:"If the percentage loss for one phalange of the thumb is 10%, what is the percentage for loss of both phalanges?",
    options: ['75%', '20%','35%','100%'],
    correct: '35%'
},
{
    question:"The First Accident and Claims in informal sector took place in ______ Branch of NSITF.",
    options: ['Kaduna branch', 'Bauchi branch','Abuja branch','Sokoto branch'],
    correct: 'Bauchi branch'
},
{
    question:"In the Informal Sector, rate of contribution for ₦30,000 and above is ______%",
    options: ['1.86%', '1.47%','1.85%','1.46%'],
    correct: '1.46%'
},
{
    question:"The section of ECA 2010 that focuses on compensation for fatal cases is?",
    options: ['9', '14','17','19'],
    correct: '17'
},
{
    question:"Which among these NSITF forms carries BUSINESS SECTOR CATEGORY?",
    options: ['Form ECS 003', 'Form ECS RE 01','Form ECS 002','Form MR 001'],
    correct: 'Form ECS RE 01'
},
{
    question:"The following are elements of value for Money Audit except",
    options: ['Economy', 'Essentials','Efficiency','Effectiveness'],
    correct: 'Essentials'
},
{
    question:"The URL/Website address of the official website of the Nigeria Social Insurance Trust Fund is?",
    options: ['nsitf.net', 'nsitf.com.ng','nsitf.gov.ng','nsitfund.gov.ng'],
    correct: 'nsitf.gov.ng'
},
{
    question:"The informal sector unit of NSITF became functional on _________",
    options: ['26th January 2022', '26th February 2021','26th June 2022','26th July 2021'],
    correct: '26th July 2021'
},
{
    question:"Any bodily injury or disease resulting from Accident or exposure to critical agents and condition in a work place is __________________",
    options: ['Disease', 'Hazard','Injury','None of the above'],
    correct: 'Injury'
},
{
    question:"What is the reporting format of HSE staff in the branches to the General Manager HSE.",
    options: ['HSE staff to Head HSE to GM HSE', 'HSE staff to GM HSE','HSE staff to head HSE to DGM HSE to GM HSE','HSE staff to Head HSE to BM to RM to MD/CE to GM HSE'],
    correct: 'HSE staff to Head HSE to BM to RM to MD/CE to GM HSE'
},
{
    question:"Which of these three components are needed to start a fire",
    options: ['Hydrogen, Oxygen, and water', 'Fuel , Ignition fuel, Carbondioxide','Fuel,  Carbondioxide and Time','None of the above'],
    correct: 'None of the above'
},
{
    question:"Any Occurrence arising out of or in the course of work which result in fatal or non-fatal Occupational injury that may lead to compensation is known as",
    options: ['Accident', 'Injury','Disability','All of the above'],
    correct: 'Accident'
},
{
    question:"Which of the following does not form part of an employer’s common law duty to take care of your health and safety?",
    options: ['Safe work promises', 'Competent fellow employee','Reasonable salaries','Safe work equipment'],
    correct: 'Reasonable salaries'
},
{
    question:"The council on occupational safety and Health act, 2005 is",
    options: ['Nigeria council on occupational safety and Health', 'National council on Occupational safety & Health','A only','A & B only'],
    correct: 'National council on Occupational safety & Health'
},
{
    question:"In the event of an injury or disabling occupational disease to an employee, by how many days should the employee inform the employer of the occurrence?",
    options: ['21', '7','14','1 Month'],
    correct: '14'
},
{
    question:"A review of past accident records indicates that unsafe acts rather than unsafe conditions are ………………… of must accidents",
    options: ['Root cause', 'Unsafe condition','Unsafe act','Bad condition'],
    correct: 'Root cause'
},
{
    question:"Do you walk or run when evacuating a building in an emergency situation",
    options: ['Jumping', 'Run','Walk','Evacuate'],
    correct: 'Walk'
},
{
    question:"Anyone who is not in the Office when the fire alarm sounds must go immediately to the Muster point",
    options: ['True', 'False'],
    correct: 'False'
},
{
    question:"Occupants will wait at the muster point until they are told by the ………………………. That it is safe to re-enter the building",
    options: ['Fire coordinator', 'Fire manager','Fire Officer','Fire Marshal'],
    correct: 'Fire Marshal'
},
{
    question:"A health condition or disorder is called…………",
    options: ['Occupational disease', 'Musculoskeletal disorder','Cancer','Respiratory illnesses'],
    correct: 'Musculoskeletal disorder'
},
{
    question:"As an employer, or a Self-employer person, you are responsible for Health and Safety in your business",
    options: ['True', 'False'],
    correct: 'True'
},
{
    question:"Which of these is not a class of Fire?",
    options: ['Class K', 'Class A','Class B','Class J'],
    correct: 'Class J'
},
{
    question:"Which of these is not an element of Fire triangle?",
    options: ['Oxygen', 'Fuel','Carbondioxide','Heat'],
    correct: 'Carbondioxide'
},
{
    question:"The Following are methods of quenching Fire except",
    options: ['Cooling', 'Starvation','Smothering','Sublimation'],
    correct: 'Sublimation'
},
{
    question:"Where do we need to go to outside the building, when Fire alarm rings?",
    options: ['The gate', 'Muster point','Reception','Admin Office'],
    correct: 'Muster point'
},
{
    question:"Which of these is not a type of Fire alarm system?",
    options: ['Sprinkler', 'Smoke detector','Fire Extinguisher','Alarm bell'],
    correct: 'Fire Extinguisher'
},
{
    question:"What is the acronym for operating Fire Extinguisher?",
    options: ['RASS', 'FASS','PASS','MASS'],
    correct: 'PASS'
},
{
    question:"Work Place inspection are important because",
    options: ['It prevents Injuries and illness', 'It boosts Staff Morale','It ensures safety compliance','All of the above'],
    correct: 'All of the above'
},
{
    question:"Select the correct sequence of the pillars of HSE",
    options: ['Rehabilitations, Compensation and Preventions', 'Preventions, Compensations and Rehabilitations','Preventions, Rehabilitations and Compensations','Preventions, Claims and Compensations'],
    correct: 'Preventions, Rehabilitations and Compensations'
},
{
    question:"Which of these is not a role of HSE Department?",
    options: ['Fire Drill', 'OSH inspection','Staff wellness Management','Maintenance of Office'],
    correct: 'Maintenance of Office'
},
{
    question:"Which of these is not a Personal Protective Equipment?",
    options: ['Safety Boots', 'First Aid Box','Safety Goggles','Ear Plugs'],
    correct: 'First Aid Box'
},
{
    question:"----------- is anything that has potential to cause Harm or damage",
    options: ['Near miss', 'Risk','Hazard','Accident'],
    correct: 'Hazard'
},
{
    question:"What is the First thing to do when you experience a Fire incident?",
    options: ['Jump through the window', 'Press the Fire alarm','Help others escape','Go to the Muster point'],
    correct: 'Press the Fire alarm'
},
{
    question:"A qualified and competent person in an organization who is responsible for monitoring and controlling work place risks and hazards is called_________",
    options: ['Fire warden', 'Security Office','Admin Officer','Safety Officer'],
    correct: 'Safety Officer'
},
{
    question:"What is the aim of Rehabilitating a disabled employee?",
    options: ['To return to Work','To counsel','To pay compensation','For record keeping'],
    correct: 'To return to Work'
},
{
    question:"Which Convention of the ILO established the role of HSE?",
    options: ['Convention 102','Convention 150','Convention 164','Convention 155'],
    correct: 'Convention 155'
},
{
    question:"Which of these is an example of good work place behavior?",
    options: ['Personalize work place value, policies, rules and regulations','Poor planning to safety','Complacent on the Job','Poor planning to safety'],
    correct: 'Personalize work place value, policies, rules and regulations'
},
{
    question:"Asbestosis is an example of an occupational disease",
    options: ['True', 'False'],
    correct: 'True'
},
{
    question:"Which Sections of the act highlighted vocational rehabilitation?",
    options: ['Section 16', 'Section 26','Section 5(2)','Section 2'],
    correct: 'Section 26'
},
{
    question:"An unsafe working condition in a work place include the following except",
    options: ['Untrained worker','Defective PPE','Fail to report injury','unguided Machine'],
    correct: 'Fail to report injury'
},
{
    question:"Good Ergonomics in the work place helps to __________",
    options: ['Reduce Musculoskeletal injury','Increase risk','A & B','None of the above'],
    correct: 'Reduce Musculoskeletal injury'
},
{
    question:"What is the full meaning of Covid 19",
    options: ['CORONA VIRUS DISOLUTION 2019', 'CORONA VIRUS DISABILITY 2019','CORONA VIRUS DISEASE 2019','CORONA VIRUS DI-OXYCLINE 2019'],
    correct: 'CORONA VIRUS DISEASE 2019'
},
{
    question:"In Informal Sector, the 2% is representing_____to_____",
    options: ['₦ 10,000--- ₦ 12,000', '₦ 1,000---₦ 5,000','₦ 5,000----₦ 10,000','None of the above.'],
    correct: '₦ 1,000---₦ 5,000'
},
{
    question:"What is the percentage % different between 1.85% and 1.65%?",
    options: ['20%', '22%','46%','65%'],
    correct: '20%'
},
{
    question:"The sensitization by Informal Sector Unit of NSITF is to ______",
    options: ['Create Relationship', 'Create awareness','Enrolled Employers','None of the above'],
    correct: 'Create awareness'
},
{
    question:"The Department of Informal regards M.O.U as _______",
    options: ['Memorandum of Union', 'Memorandum of Unity','Memorandum of Understanding','None of the above'],
    correct: 'Memorandum of Understanding'
},
{
    question:"The followings are internal Audit roles in the Fund except",
    options: ['Pre-payment Audit', 'Stock taking & Cash count','Departmental Audit','Report and Prosecute Fraud'],
    correct: 'Report and Prosecute Fraud'
},
{
    question:"All these regulate activities of Internal Auditors in NSITF except",
    options: ['Financial Regulations', 'External Auditors Report','Financial Circulars','ECA 2010'],
    correct: 'ECA 2010'
},
{
    question:"Which of these is not an Audit document?",
    options: ['Audit Report', 'Audit Plan','Query Form','Stock Register'],
    correct: 'Stock Register'
},
{
    question:"An Audit that is carried out as required by law is known as",
    options: ['Special Audit', 'Performance Audit','Statutory Audit','Investigation'],
    correct: 'Statutory Audit'
},
{
    question:"Which of these is not an Audit technique?",
    options: ['Computation', 'Observation','Inspection','Information'],
    correct: 'Information'
},
{
    question:"A formal document that defines Internal Audit, Purpose, Authority, Responsibility and Position within an organization is known as",
    options: ['Audit Charter', 'Internal Control','Safeguard assets Document','Reference Records'],
    correct: 'Audit Charter'
},
{
    question:"The followings are element of value for Money Audit except",
    options: ['Economy', 'Essentials','Efficiency','Effectiveness'],
    correct: 'Essentials'
},
{
    question:"A whole system of control put in place by management is known as_____",
    options: ['Control Standard', 'Internal Control','Office Guide','Internal Checks'],
    correct: 'Internal Control'
},
{
    question:"Internal Checks are the day to day checking of activities of an organization to ensure routine system works",
    options: ['True', 'False'],
    correct: 'True'
},
{
    question:"ISA stands for..",
    options: ['International Statement of Account', 'International Standard on Auditing','Internal Standard for Audit','None of the above'],
    correct: 'International Standard on Auditing'
},
{
    question:"Operational Audit, Revenue Audit, Claims Audit, Post Payment Audit and Pre-payment Audit are all carried out by Auditors of NSITF",
    options: ['True', 'False'],
    correct: 'True'
},
{
    question:"A written instruction to assist in the actual conduct of an audit assignment for Audit Staff is Known as",
    options: ['Audit Guide', 'Audit Manual','Audit Programme','None of the Above'],
    correct: 'Audit Guide'
},
{
    question:"The following Documents accompany MSA Returns except",
    options: ['Asset Register', 'Cash Book','Payment voucher','Bank Reconciliation Statement'],
    correct: 'Asset Register'
},
{
    question:"What is a third-party certificate meant for?",
    options: ['Assurance that an asset exists which the Auditor have inspect Personally', 'Asset cannot be trace','Compliance Certificate have been issued.','None of the above'],
    correct: 'Assurance that an asset exists which the Auditor have inspect Personally'
},
{
    question:"Audit Process include the followings except",
    options: ['Notification', 'Opening Meeting','Closing Meeting','None of the Above'],
    correct: 'None of the Above'
},
{
    question:"The Enemy, Kings/Queens of Compliance, Control Cops, Gate Keepers these are names attributed to",
    options: ['Police', 'Auditors','DSS','Accountants'],
    correct: 'Auditors'
},
{
    question:"The technique used by Auditors to verify the authority and authenticity of transactions recorded in the books by referring to invoices, receipts and bills is known as",
    options: ['Vouching', 'Valuations','Confirmation','Corroboration Test'],
    correct: 'Vouching'
},
{
    question:"A set of systems, Principles and Processes by which a Company is governed is known as________",
    options: ['Corporate Governance', 'Internal Control','Audit Objective','None of the Above'],
    correct: 'Corporate Governance'
},
{
    question:"Internal Audit is Part of Internal Control",
    options: ['True', 'False'],
    correct: 'True'
}
]

function shuffleArray(arr: any) {
    arr.sort(() => Math.random() - 0.5);
    // arr.slice
    return arr
  }

shuffleArray(test1)

export default test1