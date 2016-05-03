var globalLocation = "seattle";
var bio = {
	   "name": "Zachary Foutz",
	   "role": "Web Developer",
	   "contacts": {
			"mobile": "3609900694",
		  	"email": "zacharyfoutz@gmail.com",
		 	"github": "DauntlessTech",
			"twitter": "@ZacharyFoutz",
		 	"locate": "Seatlle"
	},
	"skills"  : ["HTML5", "CSS3", "JavaScript", "JQuery", "NodeJS"],
	"bioPic"  : "images/me_and_noah.png"
};

bio.display = function(){
	var namer = HTMLheaderName.replace("%data%", bio.name);
	var roller = HTMLheaderRole.replace("%data%", bio.role);
	var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var email = HTMLemail.replace("%data%", bio.contacts.email);
	var github = HTMLgithub.replace("%data%", bio.contacts.github);
	var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var locateMe = HTMLlocation.replace("%data%", bio.contacts.locate);

	var contact = mobile + email + github + twitter + locateMe;
	var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("header").prepend(namer + roller + bioPic);
	var i=0;
	$("#topContacts").append(contact + HTMLskillsStart);
	for(skills in bio){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
		i++;
	}

	function locationizer(work_obj){
		var locationArray = [];
		for(job in work_obj.jobs){
			var newLocation = work_obj.jobs[job].location;
			locationArray.push(newLocation);
		}
		return locationArray;
	}
}

var work = {
	"jobs": [
		{
			"employer": "McDonald's",
			"title": "Crew Member",
			"dates": "2013-2014",
			"location": "Silverdale, WA",
			"description": "<ul><li>Customer Service</li> <li>Cash handling</li> <li>Data entry</li> <li>Presentation</li> <li>Team Work</li> </ul> "
		},
		{
			"employer": "Jack In The Box",
			"title": "Crew Member",
			"dates": "2014",
			"location": "Silverdale, WA",
			"description": "<ul><li>Customer Service</li> <li>Cash handling</li> <li>Data entry</li> <li>Presentation</li> <li>Team Work</li> </ul> "
		}
	]
};

work.display = function(){
	$("#workExperience").append('<span class="padded"></span>');
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			gloablLocation = work.jobs[job].location;
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var stringMe = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription + "<br/>";
		$(".work-entry:last").append(stringMe);
	}
}


var education = [];

education.schools = [
	{
		"name": "Olympic College",
		"degree": "AAS",
		"dates": "2014-2017",
		"location": "Bremerton, WA",
		"major": "Computer Science"
	}
]
education.certs = [
	{
		"name": "Udacity",
		"degree": "FEND",
		"dates": "2015",
		"location": "2465 Latham St, Mountain View, CA 94040",
		"major": "Front-End Developer"
	}
]

education.display = function(){
	$("#education").append(HTMLschoolStart);
		var schools = education.schools;
		formatEducation(schools);
		$(".education-entry:last").append('<br/><br/>');
		var certs = education.certs;
		formatEducation(certs);

		function formatEducation(key){
			for(school in key){
				var formattedName = HTMLschoolName.replace("%data%", key[school].name);
				var formattedMajor = HTMLschoolMajor.replace("%data%", key[school].major);
				var formattedDegree = HTMLschoolDegree.replace("%data%", key[school].degree);
				var formattedDates = HTMLschoolDates.replace("%data%", key[school].dates);
				var formattedLocation = HTMLschoolLocation.replace("%data%", key[school].location);

				$(".education-entry").append(formattedName + " - " + formattedDates + "<br/>" +
																		formattedMajor + " | " + formattedDegree + "<br/>" + formattedLocation);
			}
		}
}

var projectData = {
	"projects": [
		{
			"title": "HTML Portfolio Page",
			"dates": "2015",
			"description": "Used for personal and proffesional work that I have produced.",
			"images": ["http://lorempixel.com/400/200/sports/1/"]
		},
		{
			"title": "HTML Portfolio Page",
			"dates": "2015",
			"description": "Used for personal and proffesional work that I have produced.",
			"images": ["http://lorempixel.com/400/200/sports/1/"]
		}
	]
};

projectData.display =  function(){
		for(index in projectData.projects){
			$("#project-header").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projectData.projects[index].title);
				$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projectData.projects[index].dates);
				$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projectData.projects[index].description);
				$(".project-entry:last").append(formattedDescription);
			if(projectData.projects[index].images.length>0){
				for(image in projectData.projects[index].images){
					var formattedImage = HTMLprojectImage.replace("%data%", projectData.projects[index].images[image]);
						$(".project-entry:last").append(formattedImage)
			}
		}
	}
}

bio.display();
work.display();
projectData.display();
education.display();

$(function(){
	$('#projectButton').click(function(){
		toggleSection("project-header", this);
	});
	$('#workButton').click(function(){
		toggleSection("work-header", this);
	});
	$('#eduButton').click(function(){
		toggleSection("education", this);
	});
});

function toggleSection(section, btn) {
	if($(btn).text() == '-'){
		$(btn).text('+');
	}else{
		$(btn).text('-');
	}
	$('#'+section).toggle(500);
}

var address = globalLocation;
 var map = new google.maps.Map(document.getElementById('map-canvas'), {
     mapTypeId: google.maps.MapTypeId.SIMPLE,
     zoom: 10
 });

 var geocoder = new google.maps.Geocoder();
 geocoder.geocode({
    'address': address
 }, function(results, status) {
	if(status == google.maps.GeocoderStatus.OK) {
		new google.maps.Marker({
		  position: results[0].geometry.location,
		  map: map
		});
		map.setCenter(results[0].geometry.location);
	}
});
