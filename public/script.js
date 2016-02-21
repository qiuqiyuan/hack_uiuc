var occupations = ['Chief executives and legislators', 'General and Operations Managers', 'Advertising and Promotions Managers', 'arketing and Sales Managers', 'Public Relations and Fundraising Managers', 'Administrative Services Managers', 'Computer and Information Systems Managers', 'Financial Managers', 'Compensation and Benefits Managers', 'Human Resources Managers', 'Training and Development Managers', 'Industrial Production Managers', 'Purchasing Managers', 'Transportation, Storage, and Distribution Managers', 'Farmers, Ranchers, and Other Agricultural Managers', 'Constructions Managers', 'Education Administrators', 'Architectural and Engineering Managers', 'Food Service Managers', 'Morticians, Undertakers, and Funeral Directors', 'Miscellaneous Managers, Including Funeral Service Managers and Postmasters and Mail Superintendents', 'Gaming Managers', 'Lodging Managers', 'edical and Health Services Managers', 'Natural Science Managers', 'Property, Real Estate, and Community Association Managers', 'Social and Community Service Managers', 'Emergency Management Directors', 'Agents and Business Managers of Artists, Performers, and Athletes', 'Buyers and Purchasing Agents, Farm Products', 'Wholesale and Retail Buyers, Except Farm Products', 'Purchasing Agents, Except Wholesale, Retail, and Farm Products', 'Claims Adjusters, Appraisers, Examiners, and Investigators', 'Compliance Officers', 'Transportation Security Screeners', 'Cost Estimators', 'Human Resource Workers', 'Compensation, Benefits, and Job Analysis Specialists', 'Training and Development Specialists', 'Logisticians', 'anagement Analysts', 'Meeting, Convention, and Event Planners', 'Fundraisers', 'arket Research Analysts and Marketing Specialists', 'Business Operations Specialists, All Other', 'Accountants and Auditors', 'Appraisers and Assessors of Real Estate', 'Budget Analysts', 'Credit Analysts', 'Financial Analysts', 'Personal Financial Advisors', 'Insurance Underwriters', 'Financial Examiners', 'Credit Counselors and Loan Officers', 'Tax Examiners and Collectors, and Revenue Agents', 'Tax Preparers', 'Financial Specialists, All Other', 'Computer and Information Research Scientists', 'Computer Systems Analysts', 'Computer Occupations, All Other', 'Computer Network Architects', 'Information Security Analysts', 'Web Developers', 'Computer Programmers', 'Software Developers, Applications and Systems Software', 'Computer Support Specialists', 'Database Administrators', 'Network and Computer Systems Administrators', 'Actuaries', 'Miscellaneous mathematical science occupations, including mathematicians and statisticians', 'Operations Research Analysts', 'Architects, Except Naval', 'Surveyors, Cartographers, and Photogrammetrists', 'Aerospace Engineers', 'Biomedical and agricultural engineers', 'Chemical Engineers', 'Civil Engineers', 'Computer Hardware Engineers', 'Electrical and Electronics Engineers', 'Environmental Engineers', 'Industrial Engineers, including Health and Safety', 'arine Engineers and Naval Architects', 'aterials Engineers', 'echanical Engineers', 'Petroleum, mining and geological engineers, including mining safety engineers', 'iscellaneous engineeers including nuclear engineers', 'Drafters', 'Engineering Technicians, Except Drafters', 'Surveying and Mapping Technicians', 'Agricultural and Food Scientists', 'Biological Scientists', 'Conservation Scientists and Foresters', 'Medical Scientists, and Life Scientists, All Other', 'Astronomers and Physicists', 'Atmospheric and Space Scientists', 'Chemists and Materials Scientists', 'Environmental Scientists and Geoscientists', 'Physical Scientists, All Other', 'Economists', 'arket and Survey Researchers', 'Psychologists', 'Miscellaneous Social Scientists, Including Survey Researchers and Sociologists', 'Urban and Regional Planners', 'Agricultural and Food Science Technicians', 'Biological Technicians', 'Chemical Technicians', 'Geological and Petroleum Technicians', 'Nuclear Technicians', 'Social Science Research Assistants', 'Miscellaneous Life, Physical, and Social Science Technicians', 'Counselors', 'Social Workers', 'Probation Officers and Correctional Treatment Specialists', 'Social and Human Service Assistants', 'Miscellaneous Community and Social Service Specialists, Including Health Educators and Community Health Workers', 'Clergy', 'Directors, Religious Activities and Education', 'Religious Workers, All Other', 'Judicial Law Clerks', 'Lawyers, and judges, magistrates, and other judicial workers', 'Paralegals and Legal Assistants', 'iscellaneous Legal Support Workers', 'Postsecondary Teachers', 'Preschool and Kindergarten Teachers', 'Elementary and Middle School Teachers', 'Secondary School Teachers', 'Special Education Teachers', 'Other Teachers and Instructors', 'Archivists, Curators, and Museum Technicians', 'Librarians', 'Library Technicians', 'Teacher Assistants', 'Other Education, Training, and Library Workers', 'Artists and Related Workers', 'Designers', 'Actors', 'Producers and Directors', 'Athletes, Coaches, Umpires, and Related Workers', 'Dancers and Choreographers', 'Musicians, Singers, and Related Workers', 'Entertainers and Performers, Sports and Related Workers, All Other', 'Announcers', 'News Analysts, Reporters and Correspondents', 'Public Relations Specialists', 'Editors', 'Technical Writers', 'Writers and Authors', 'iscellaneous Media and Communication Workers', 'Broadcast and Sound Engineering Technicians and Radio Operators, and media and communication equipment workers, all other', 'Photographers', 'Television, Video, and Motion Picture Camera Operators and Editors', 'Chiropractors', 'Dentists', 'Dieticians and Nutritionists', 'Optometrists', 'Pharmacists', 'Physicians and Surgeons', 'Physician Assistants', 'Podiatrists', 'Registered Nurses', 'Nurse Anesthetists', 'Nurse Practitioners, and Nurse Midwives', 'Audiologists', 'Occupational Therapists', 'Physical Therapists', 'Radiation Therapists', 'Recreational Therapists', 'Respiratory Therapists', 'Speech Language Pathologists', 'Other Therapists, Including Exercise Physiologists', 'Veterinarians', 'Health Diagnosing and Treating Practitioners, All Other', 'Clinical Laboratory Technologists and Technicians', 'Dental Hygienists', 'Diagnostic Related Technologists and Technicians', 'Emergency Medical Technicians and Paramedics', 'Health Practitioner Support Technologists and Technicians', 'Licensed Practical and Licensed Vocational Nurses', 'edical Records and Health Information Technicians', 'Opticians, Dispensing', 'iscellaneous Health Technologists and Technicians', 'Other Healthcare Practitioners and Technical Occupations', 'Nursing, Psychiatric, and Home Health Aides', 'Occupational Therapy Assistants and Aides', 'Physical Therapist Assistants and Aides', 'assage Therapists', 'Dental Assistants', 'edical Assistants', 'edical Transcriptionists', 'Pharmacy Aides', 'Veterinary Assistants and Laboratory Animal Caretakers', 'Phlebotmists', 'Healthcare Support Workers, All Other, Including Medical Equipment Preparers', 'First-Line Supervisors of Correctional Officers', 'First-Line Supervisors of Police and Detectives', 'First-Line Supervisors of Fire Fighting and Prevention Workers', 'Supervisors, Protective Service Workers, All Other', 'Firefighters', 'Fire Inspectors', 'Bailiffs, Correctional Officers, and Jailers', 'Detectives and Criminal Investigators', 'iscellaneous law enforcement workers', 'Police Officers', 'Animal Control Workers', 'Private Detectives and Investigators', 'Security Guards and Gaming Surveillance Officers', 'Crossing Guards', 'Transportation Security Screeners', 'Lifeguards and Other Recreational, and All Other Protective Service Workers', 'Chefs and Head Cooks', 'First-Line Supervisors of Food Preparation and Serving Workers', 'Cooks', 'Food Preparation Workers', 'Bartenders', 'Combined Food Preparation and Serving Workers, Including Fast Food', 'Counter Attendant, Cafeteria, Food Concession, and Coffee Shop', 'Waiters and Waitresses', 'Food Servers, Nonrestaurant', 'iscellaneous food preparation and serving related workers including dining room and cafeteria attendants and bartender helpers', 'Dishwashers', 'Host and Hostesses, Restaurant, Lounge, and Coffee Shop', 'First-Line Supervisors of Housekeeping and Janitorial Workers', 'First-Line Supervisors of Landscaping, Lawn Service, and Groundskeeping Workers', 'Janitors and Building Cleaners', 'aids and Housekeeping Cleaners', 'Pest Control Workers', 'Grounds Maintenance Workers', 'First-Line Supervisors of Gaming Workers', 'First-Line Supervisors of Personal Service Workers', 'Animal Trainers', 'Nonfarm Animal Caretakers', 'Gaming Services Workers', 'otion Picture Projectionists', 'Ushers, Lobby Attendants, and Ticket Takers', 'iscellaneous Entertainment Attendants and Related Workers', 'Embalmers and Funeral Attendants', 'Barbers', 'Hairdressers, Hairstylists, and Cosmetologists', 'iscellaneous Personal Appearance Workers', 'Baggage Porters, Bellhops, and Concierges', 'Tour and Travel Guides', 'Transportation Attendants', 'Childcare Workers', 'Personal Care Aides', 'Recreation and Fitness Workers', 'Residential Advisors', 'Personal Care and Service Workers, All Other', 'First-Line Supervisors of Retail Sales Workers', 'First-Line Supervisors of Non-Retail Sales', 'Cashiers', 'Counter and Rental Clerks', 'Parts Salespersons', 'Retail Salespersons', 'Advertising Sales Agents', 'Insurance Sales Agents', 'Securities, Commodities, and Financial Services Sales Agents', 'Travel Agents', 'Sales Representatives, Services, All Other', 'Sales Representatives, Wholesale and Manufacturing', 'Models, Demonstrators, and Product Promoters', 'Real Estate Brokers and Sales Agents', 'Sales Engineers', 'Telemarketers', 'Door-to-Door Sales Workers, News and Street Vendors, and Related Workers', 'Sales and Related Workers, All Other', 'First-Line Supervisors of Office and Administrative Support Workers', 'Switchboard Operators, Including Answering Service', 'Telephone Operators', 'Communications Equipment Operators, All Other', 'Bill and Account Collectors', 'Billing and Posting Clerks', 'Bookkeeping, Accounting, and Auditing Clerks', 'Gaming Cage Workers', 'Payroll and Timekeeping Clerks', 'Procurement Clerks', 'Tellers', 'Brokerage Clerks', 'Correspondent clerks and order clerks', 'Court, Municipal, and License Clerks', 'Credit Authorizers, Checkers, and Clerks', 'Customer Service Representatives', 'Eligibility Interviewers, Government Programs', 'File Clerks', 'Hotel, Motel, and Resort Desk Clerks', 'Interviewers, Except Eligibility and Loan', 'Library Assistants, Clerical', 'Loan Interviewers and Clerks', 'New Account Clerks', 'Human Resources Assistants, Except Payroll and Timekeeping', 'Receptionists and Information Clerks', 'Reservation and Transportation Ticket Agents and Travel Clerks', 'Information and Record Clerks, All Other', 'Cargo and Freight Agents', 'Couriers and Messengers', 'Dispatchers', 'Meter Readers, Utilities', 'Postal Service Clerks', 'Postal Service Mail Carriers', 'Postal Service Mail Sorters, Processors, and Processing Machine Operators', 'Production, Planning, and Expediting Clerks', 'Shipping, Receiving, and Traffic Clerks', 'Stock Clerks and Order Fillers', 'Weighers, Measurers, Checkers, and Samplers, Recordkeeping', 'Secretaries and Administrative Assistants', 'Computer Operators', 'Data Entry Keyers', 'Word Processors and Typists', 'Insurance Claims and Policy Processing Clerks', 'Mail Clerks and Mail Machine Operators, Except Postal Service', 'Office Clerks, General', 'Office Machine Operators, Except Computer', 'Proofreaders and Copy Markers', 'Statistical Assistants', 'Office and Administrative Support Workers, All Other', 'iscellaneous office and administrative support workers including desktop publishers', 'Financial Clerks, All Other', 'First-Line Supervisors of Farming, Fishing, and Forestry Workers', 'Agricultural Inspectors', 'Graders and Sorters, Agricultural Products', 'iscellaneous agricultural workers including animal breeders', 'Fishing and hunting workers', 'Forest and Conservation Workers', 'Logging Workers', 'First-Line Supervisors of Construction Trades and Extraction Workers', 'Boilermakers', 'Brickmasons, Blockmasons, and Stonemasons', 'Carpenters', 'Carpet, Floor, and Tile Installers and Finishers', 'Cement Masons, Concrete Finishers, and Terrazzo Workers', 'Construction Laborers', 'Paving, Surfacing, and Tamping Equipment Operators', 'Construction equipment operators except paving, surfacing, and tamping equipment operators', 'Drywall Installers, Ceiling Tile Installers, and Tapers', 'Electricians', 'Glaziers', 'Insulation Workers', 'Painters, Construction and Maintenance', 'Paperhangers', 'Pipelayers, Plumbers, Pipefitters, and Steamfitters', 'Plasterers and Stucco Masons', 'Reinforcing Iron and Rebar Workers', 'Roofers', 'Sheet Metal Workers', 'Structural Iron and Steel Workers', 'Helpers, Construction Trades', 'Construction and Building Inspectors', 'Elevator Installers and Repairers', 'Fence Erectors', 'Hazardous Materials Removal Workers', 'Highway Maintenance Workers', 'Rail-Track Laying and Maintenance Equipment Operators', 'Miscellaneous construction workers including solar Photovaltaic Installers, and septic tank servicers and sewer pipe cleaners', 'Derrick, rotary drill, and service unit operators, and roustabouts, oil, gas, and mining', 'Earth Drillers, Except Oil and Gas', 'Explosives Workers, Ordnance Handling Experts, and Blasters', 'ining Machine Operators', 'iscellaneous extraction workers including roof bolters and helpers', 'First-Line Supervisors of Mechanics, Installers, and Repairers', 'Computer, Automated Teller, and Office Machine Repairers', 'Radio and Telecommunications Equipment Installers and Repairers', 'Avionics Technicians', 'Electric Motor, Power Tool, and Related Repairers', 'Electrical and electronics repairers, transportation equipment, and industrial and utility', 'Electronic Equipment Installers and Repairers, Motor Vehicles', 'Electronic Home Entertainment Equipment Installers and Repairers', 'Security and Fire Alarm Systems Installers', 'Aircraft Mechanics and Service Technicians', 'Automotive Body and Related Repairers', 'Automotive Glass Installers and Repairers', 'Automotive Service Technicians and Mechanics', 'Bus and Truck Mechanics and Diesel Engine Specialists', 'Heavy Vehicle and Mobile Equipment Service Technicians and Mechanics', 'Small Engine Mechanics', 'Miscellaneous Vehicle and Mobile Equipment Mechanics, Installers, and Repairers', 'Control and Valve Installers and Repairers', 'Heating, Air Conditioning, and Refrigeration Mechanics and Installers', 'Home Appliance Repairers', 'Industrial and Refractory Machinery Mechanics', 'Maintenance and Repair Workers, General', 'Maintenance Workers, Machinery', 'illwrights', 'Electrical Power-Line Installers and Repairers', 'Telecommunications Line Installers and Repairers', 'Precision Instrument and Equipment Repairers', 'Coin, Vending, and Amusement Machine Servicers and Repairers', 'Other Installation, Maintenance, and Repair Workers Including Wind Turbine Service Technicians, and Commercial Divers, and Signal and Track Switch Repairers', 'Locksmiths and Safe Repairers', 'anufactured Building and Mobile Home Installers', 'Riggers', 'Helpers--Installation, Maintenance, and Repair Workers', 'First-Line Supervisors of Production and Operating Workers', 'Aircraft Structure, Surfaces, Rigging, and Systems Assemblers', 'Electrical, Electronics, and Electromechanical Assemblers', 'Engine and Other Machine Assemblers', 'Structural Metal Fabricators and Fitters', 'iscellaneous Assemblers and Fabricators', 'Bakers', 'Butchers and Other Meat, Poultry, and Fish Processing Workers', 'Food and Tobacco Roasting, Baking, and Drying Machine Operators and Tenders', 'Food Batchmakers', 'Food Cooking Machine Operators and Tenders', 'Food Processing Workers, All Other', 'Computer Control Programmers and Operators', 'Extruding and Drawing Machine Setters, Operators, and Tenders, Metal and Plastic', 'Forging Machine Setters, Operators, and Tenders, Metal and Plastic', 'Rolling Machine Setters, Operators, and Tenders, metal and Plastic', 'Cutting, Punching, and Press Machine Setters, Operators, and Tenders, Metal and Plastic', 'Drilling and Boring Machine Tool Setters, Operators, and Tenders, Metal and Plastic', 'Grinding, Lapping, Polishing, and Buffing Machine Tool Setters, Operators, and Tenders, Metal and Plastic', 'Lathe and Turning Machine Tool Setters, Operators, and Tenders, Metal and Plastic', 'Miscellaneous metal workers and plastic workers including milling and planing machine setters, and multiple machine tool setters, and lay-out workers', 'achinists', 'Metal Furnace Operators, Tenders, Pourers, and Casters', 'Model Makers and Patternmakers, Metal and Plastic', 'Molders and Molding Machine Setters, Operators, and Tenders, Metal and Plastic', 'Tool and Die Makers', 'Welding, Soldering, and Brazing Workers', 'Heat Treating Equipment Setters, Operators, and Tenders, Metal and Plastic', 'Plating and Coating Machine Setters, Operators, and Tenders, Metal and Plastic', 'Tool Grinders, Filers, and Sharpeners', 'Print Binding and Finishing Workers', 'Printing Machine Operators', 'Prepress Technicians and Workers', 'Laundry and Dry-Cleaning Workers', 'Pressers, Textile, Garment, and Related Materials', 'Sewing Machine Operators', 'Shoe and Leather Workers and Repairers', 'Shoe Machine Operators and Tenders', 'Tailors, Dressmakers, and Sewers', 'Textile bleaching and dyeing, and cutting machine setters, operators, and tenders', 'Textile Knitting and Weaving Machine Setters, Operators, and Tenders', 'Textile Winding, Twisting, and Drawing Out Machine Setters, Operators, and Tenders', 'Upholsterers', 'Miscellaneous textile, apparel, and furnishings workers except upholsterers', 'Cabinetmakers and Bench Carpenters', 'Furniture Finishers', 'iscellaneous woodworkers including model makers and patternmakers', 'Sawing Machine Setters, Operators, and Tenders, Wood', 'Woodworking Machine Setters, Operators, and Tenders, Except Sawing', 'Power Plant Operators, Distributors, and Dispatchers', 'Stationary Engineers and Boiler Operators', 'Water Wastewater Treatment Plant and System Operators', 'iscellaneous Plant and System Operators', 'Chemical Processing Machine Setters, Operators, and Tenders', 'Crushing, Grinding, Polishing, Mixing, and Blending Workers', 'Cutting Workers', 'Extruding, Forming, Pressing, and Compacting Machine Setters, Operators, and Tenders', 'Furnace, Kiln, Oven, Drier, and Kettle Operators and Tenders', 'Inspectors, Testers, Sorters, Samplers, and Weighers', 'Jewelers and Precious Stone and Metal Workers', 'Medical, Dental, and Ophthalmic Laboratory Technicians', 'Packaging and Filling Machine Operators and Tenders', 'Painting Workers', 'Photographic Process Workers and Processing Machine Operators', 'Other production workers including semiconductor processors and cooling and freezing equipment operators', 'Adhesive Bonding Machine Operators and Tenders', 'Cleaning, Washing, and Metal Pickling Equipment Operators and Tenders', 'Etchers and Engravers', 'Molders, Shapers, and Casters, Except Metal and Plastic', 'Paper Goods Machine Setters, Operators, and Tenders', 'Tire Builders', 'Helpers--Production Workers', 'Supervisors of Transportation and Material Moving Workers', 'Aircraft Pilots and Flight Engineers', 'Air Traffic Controllers and Airfield Operations Specialists', 'Flight Attendants', 'Ambulance Drivers and Attendants, Except Emergency Medical Technicians', 'Bus Drivers', 'Driver/Sales Workers and Truck Drivers', 'Taxi Drivers and Chauffeurs', 'Motor Vehicle Operators, All Other', 'Locomotive Engineers and Operators', 'Railroad Brake, Signal, and Switch Operators', 'Railroad Conductors and Yardmasters', 'Subway, Streetcar, and Other Rail Transportation Workers', 'Sailors and marine oilers, and ship engineers', 'Ship and Boat Captains and Operators', 'Parking Lot Attendants', 'Automotive and Watercraft Service Attendants', 'Transportation Inspectors', 'Transportation Attendants, Except Flight Attendants', 'iscellaneous transportation workers including bridge and lock tenders and traffic technicians', 'Crane and Tower Operators', 'Dredge, Excavating, and Loading Machine Operators', 'Conveyor operators and tenders, and hoist and winch operators', 'Industrial Truck and Tractor Operators', 'Cleaners of Vehicles and Equipment', 'Laborers and Freight, Stock, and Material Movers, Hand', 'achine Feeders and Offbearers', 'Packers and Packagers, Hand', 'Pumping Station Operators', 'Refuse and Recyclable Material Collectors', 'Miscellaneous material moving workers including shuttle car operators, and tank car, truck, and ship loaders', 'ilitary Officer Special and Tactical Operations Leaders', 'First-Line Enlisted Military Supervisors', 'ilitary Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members', 'Military, Rank Not Specified', 'Unemployed, with No Work Experience in the Last 5 Years or Earlier or Never Worked'];

var occ_2_jobid = {};
$.getJSON( "occupations.json", function(data) {
    for( key in data ) {
        occ_2_jobid[data[key]] = key;
    }
});

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};


$('#occupation-input .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'occupations',
  source: substringMatcher(occupations)
});

$("#job-input").keyup(function(e){
    if(e.keyCode == 13) {
        var job_desc = $("#job-input").val();
        var id = occ_2_jobid[job_desc];
        $.ajax({ url: "query?job_id=" + id  })
        .done( function(data)  {
            makeChart(data);
        })
    }
});

$('.twitter-typeahead')
   .on('mouseenter', '.tt-suggestion', function(e){
      $('.tt-cursor', $(this).closest('.tt-menu')).removeClass('tt-cursor');
      $(this).addClass('tt-cursor');
   })                  
   .on('mouseleave', '.tt-suggestion', function(e){
      $('.tt-cursor', $(this).closest('.tt-menu')).removeClass('tt-cursor');
   });
