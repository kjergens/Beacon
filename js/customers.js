var CUSTOMERS = {
	AZ : {
		LPCS : {
			name: "Las Puertas Community School",
			num_schools: 1,
			num_stu: "not available",
			num_interims: 0,
			url: "http://www.laspuertascommunityschool.org/",
			consortia: "",
			full_beacon: false,
			paper: "",
			online: "",
			num_summative: 0,
			grades: "6-8"
		} 
	} ,
	CA : {
		SFUSD : {
			name: "San Francisco Unified School District",
			num_schools: 140,
			num_stu: 44000,
			num_interims: 3,
			grades: "3-11",
			url: "http://www.sfusd.edu",
			consortia: "Smarter Balanced",
			full_beacon: true,
			paper: "Yes",
			online: "Pending",
			num_summative: 0,
		},
		LAUSD : {
			name: "Los Angeles Unified School District",
			num_schools: 230,
			num_stu: 54000,
			num_interims: 0,
			url: "http://www.lausd.net",
			consortia: "Smarter Balanced",
			full_beacon: true,
			paper: "No",
			online: "Yes",
			num_summative: 1,
			grades: ""
		},
		MUSD : {
			name: "Mendota Unified School District",
			num_schools: 7,
			num_stu: 2600,
			num_interims: -1,
			url: "http://www.musdaztecs.com/",
			consortia: "Smarter Balanced",
			full_beacon: false,
			paper: "",
			online: "",
			num_summative: -1,
			grades: "2-12"
		},
		PUC : {
			name: "PUC Schools",
			county: "Los Angeles",
			state: "California",
			num_schools: 16,
			num_stu: 4500,
			num_interims: -1,
			url: "http://www.pucschools.org/",
			consortia: "Smarter Balanced",
			full_beacon: false,
			paper: "",
			online: "",
			num_summative: -1,
			grades: "2-12"
		},
		GPUSD : {
			name: "Golden Plains Unified School District",
			county: "Fresno",
			state: "California",
			num_schools: 6,
			num_stu: 1600,
			num_interims: -1,
			url: "http://www.gpusd.org/",
			consortia: "Smarter Balanced",
			full_beacon: true,
			paper: "",
			online: "Yes",
			num_summative: -1,
			grades: "K-12"
		}  
	},
	DC : {
		DCPS : {
			name: "District of Columbia Public Schools",
			num_schools: 93,
			num_stu: 33000,
			num_interims: 0,
			url: "http://dcps.dc.gov/portal/site/DCPS/",
			consortia: "PARCC",
			full_beacon: true,
			paper: "Yes",
			online: "Yes",
			num_summative: -1,
			grades: "2-10"
		} 
	},
	DE : {
		NCCS : {
			name: "New Castle Charter Schools",
			num_schools: 4,
			num_stu: 1400,
			num_interims: 0,
			url: "http://nec.newcastledistrict.org/",
			consortia: "PARCC",
			full_beacon: false,
			paper: "",
			online: "",
			num_summative: -1,
			grades: "3-8"
		} 
	},
	IL : {
		VIC : {
			name: "Victory Education Partners",
			num_schools: "not available",
			num_stu: "not available",
			num_interims: 0,
			url: "http://victoryep.com/",
			consortia: "",
			full_beacon: false,
			paper: "",
			online: "",
			num_summative: -1,
			grades: ""
		}
	},
	IN : {
		EA : {
			name: "East Allen County Schools",
			county: "Allen",
			state: "Indiana",
			num_schools: 14,
			num_stu: 8600,
			num_interims: 0,
			url: "http://www.eacs.k12.in.us/",
			consortia: "none",
			full_beacon: false,
			paper: "",
			online: "Yes",
			num_summative: 0,
			grades: "2-12"
		} 
	},
	NC : {
		GPS : {
			name: "Guilford County Schools",
			county: "Guilford",
			state: "North Carolina",
			num_schools: 22,
			num_stu: 4000,
			num_interims: 0,
			url: "http://www.gcsnc.com/pages/gcsnc",
			consortia: "",
			full_beacon: false,
			paper: "",
			online: "",
			num_summative: 0,
			grades: "6-8"
		},
		NHC : {
			name: "New Hanover County Schools",
			county: "New Hanover",
			state: "North Carolina",
			num_schools: 3,
			num_stu: 800,
			num_interims: -1,
			url: "http://www.gcsnc.com/pages/gcsnc",
			consortia: "",
			full_beacon: false,
			paper: "",
			online: "Yes",
			num_summative: -1,
			grades: "3-8"
		} 
	}, 
	NY : {
		ACH : {
			name: "Achievement First Public Charter Schools",
			num_schools: 11,
			num_stu: 5000,
			num_interims: -1,
			url: "http://www.achievementfirst.org/",
			consortia: "PARCC",
			full_beacon: false,
			paper: "",
			online: "",
			num_summative: -1,
			grades: ""
		},
		PAVE : {
			name: "PAVE Academy Charter School",
			num_schools: 1,
			num_stu: 225,
			num_interims: 0,
			url: "http://www.paveacademy.org/",
			consortia: "PARCC",
			full_beacon: true,
			paper: "Yes",
			online: "Yes",
			num_summative: -1,
			grades: "K-4"
		},
		UCS : {
			name: "Uncommon Schools",
			num_schools: 15,
			num_stu: 857,
			num_interims: 0,
			url: "http://www.uncommonschools.org/",
			consortia: "PARCC",
			full_beacon: true,
			paper: "Yes",
			online: "No",
			num_summative: -1,
			grades: "2-8"
		}  
	},
	VA : {
		CB : {
			name: "College Board",
			county: "various",
			state: "FL,TX, MD, IL, DC, SC,  DE, WA, OH, CA, VA, TN",
			num_schools: 115,
			num_stu: 10000,
			num_interims: 0,
			url: "http://www.collegeboard.org",
			consortia: "n/a",
			full_beacon: true,
			paper: "Yes",
			online: "Yes",
			num_summative: 0,
			grades: "6-8"
		} 
	},
	WA : {
		SPS : {
			name: "Seattle Public schools",
			county: "King",
			state:"Washington",
			num_schools: 42,
			num_stu: 6500,
			num_interims: 3,
			url: "http://www.seattleschools.edu",
			consortia: "Smarter Balanced",
			full_beacon: true,
			paper: "",
			online: "",
			num_summative: 2,
			grades: "2-12"

		} ,
		SPO : {
			name: "Spokane Public schools",
			num_schools: 23,
			num_stu: 11000,
			num_interims: 0,
			url: "http://www.spokaneschools.org",
			consortia: "Smarter Balanced",
			full_beacon: true,
			paper: "",
			online: "",
			num_summative: 0,
			grades: ""
		}
	}
};