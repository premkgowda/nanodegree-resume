var work = {
	"jobs": [
		{
		"employer": "ebay Inc.",
		"title": "Disaster Recovery Analyst" ,
		"location": "San Jose, CA. USA" ,
		"dates":  "Aug 2012 - Present",
		"description": "Oversee Disaster Recovery Program" 
		},

		{
		"employer": "AT&T Inc",
		"title": "Lead Business Analyst/ Project Manager"  ,
		"location": "Washington DC, USA" ,
		"dates": "Sep 2010 - Aug 2012"  ,
		"description": " Oversee project execution and requirements" 
		},

		{
		"employer": "eBay",
		"title":  "Product Manager/ Business System Analyst",
		"location": "San Jose, CA, USA" ,
		"dates":"Feb 2008 - Aug 2010"  ,
		"description": "Product Manage NOC projects" 

		},

		{
		"employer": "Mercury Insurace Group",
		"title": "Business Analyst",
		"location":  "Brea, CA, USA",
		"dates":  "Oct 2006 - Feb 2008",
		"description": "Analyze requirements" 

		},

		{
		"employer": "Allianz Life Insurance company of NA",
		"title":  "Business Analyst",
		"location": "Golden Valley, MN, USA" ,
		"dates": "Mar 2005 - Oct 2006",
		"description": "Business requirements"
		}
]


}

var projects = {
	"projects": [
	{
	"title": "Project A",
	"dates": "2014 - Present",
	"description": "Project A description",
	"image": ["images/197x148.gif"]
	},
	{
	"title": "Project B",
	"dates": "2013 - 2014",
	"description": "Project B description",
	"image": ["images/197x148.gif"]
	}, 

	{
	"title": "Project C",
	"dates": "2012 - 2013",
	"description": "Project C description",
	"image": ["images/197x148.gif"]
	}
	]
}

var bio = {
	"name": "Prem Krishna",
	"role": "Web Developer",
	"welcomeMessage": "My name is Prem Krishna and I am enrolled in Udacity Nanodegree Program. I live in California, USA.",
	"contacts": {
		"mobile": "408-707-4328",
		"email": "premkgowda@gmail.com",
		"github": "premkgowda",
		"location": "San Jose, CA, USA"
		
	},

	"skills": [
	"Product Management", 
	"Project Management", 
	"Business Analysis",
	"Process Improvements",
	"Requirements Analysis",
	"HTML",
	"CSS",
	"Javascript"
	],
	"bioPic": "images/labpit.jpg"
}


var education = {
	"schools": [
	{
	"name": "Illinois Institute of Technology",
	"location": "Chicago, IL, USA",
	"degree": "Masters",
	"majors": "Chemical Engineering",
	"dates":"2002-2004",
	"url":"www.iit.edu"
	},
	
	{
	"name": "R.V. College of Engineering",
	"location": "Bengaluru, Karnataka, India",
	"degree": "Bachelors",
	"majors": "Chemical Engineering",
	"dates":"1997-2001",
	"url":"www.rvce.in.edu"
	}
	],

	"onlineCourses":[
	{
	"title": "Frontend Nanodegree",
	"school": "Udacity",
	"dates": "2014",
	"url": "www.udacity.com"
	}
	]	
}

bio.display = function() {

	formattedName = HTMLheaderName.replace("%data%",bio.name);
	formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	//formattedHeaderContact = HTMLheaderContact.replace("%data%",bio.contacts.github).replace;
	
	$("#header").append(formattedName);
	$("#header").append(formattedRole);
	
	
	//$("#header").append(formattedHeaderContact);
	if (bio.bioPic.length>0) {
		formattedPicture = HTMLbioPic.replace("%data%",bio.bioPic);
		$("#image").append(formattedPicture);
		formattedMessage=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#about-me").append(formattedMessage);
	}

		
	formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").prepend(formattedLocation);
	$("#footerContacts").prepend(formattedLocation);

	formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);

	$("#topContacts").prepend(formattedGithub);
	$("#footerContacts").prepend(formattedGithub);

	formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts").prepend(formattedEmail);
	$("#footerContacts").prepend(formattedEmail);

	formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts").prepend(formattedMobile);
	$("#footerContacts").prepend(formattedMobile);

				

	
	if (bio.skills.length > 0) {

		
		$("#skills-start").append(HTMLskillsStart);
			for (skill in bio.skills){
			
			var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkills);


			}

	}
}


work.display = function() { 	

	for (job in work.jobs) {

		$("#work-start").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle ;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDate);

		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);


	}
}



$(document).click(function(loc) {

 // your code goes here 
 var x = loc.pageX;
 var y = loc.pageY;

 logClicks(x,y);

});

function inName() {

	var aName = bio.name.trim().split(" ");
	aName[0] = aName[0].slice(0,1).toUpperCase() + aName[0].slice(1).toLowerCase();
	aName[1] = aName[1].toUpperCase();

return aName[0] + " " + aName[1];
}

$("#main").append(internationalizeButton);


projects.display = function () {

	for (project in projects.projects) {

		$("#projects-start").append(HTMLprojectStart);
		

		if (projects.projects[project].image.length > 0) {

			for (pic in projects.projects[project].image){

				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].image[pic]);
				$(".project-entry:last").append(formattedImage);
			}
		}


		var formattedTitle =  HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		
		//$("#projects").append(HTMLprojectStart);
		var formattedDates =  HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		//$("#projects").append(HTMLprojectStart);
		var formattedDescription =  HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		
		

		
		

	}

}


	
education.display= function(){

	for (school in education.schools) {

		$("#education-start").append(HTMLschoolStart);
		var formattedSchool = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedSchoolDegree = formattedSchool + formattedDegree;
		$(".education-entry:last").append(formattedSchoolDegree);

		$("#education-start").append(HTMLschoolStart);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		$("#education-start").append(HTMLschoolStart);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		$("#education-start").append(HTMLschoolStart);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);

	}

	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		$("#education").append(HTMLonlineClasses);
		
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		var formattedTitleSchool = formattedTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedTitleSchool);
		
		$("#education").append(HTMLschoolStart);
		var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);

		$("#education").append(HTMLschoolStart);
		var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);





	}

}
projects.display();
education.display();
bio.display();
work.display();

$("#mapDiv").append(googleMap);