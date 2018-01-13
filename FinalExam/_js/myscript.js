/* SYST24444 myscript.js for Final Exam - Fall 2017
		Friday class - Trafalgar campus - 25587 */
/* DO NOT DELETE THESE COMMENTS (-1 point if deleted) */

// exam02Review


$(document).ready(function () {
	console.log("in ready");
	
	$.ajax({
		type: "GET", url: "exam02XMLDescFT-Fri.xml", dataType: "xml", success: getHF
		
	});
});

function getHF(xml) {
	console.log("in getHF");
	
	
	
	$(".FullName").append($(xml).find("foodDivision:nth(5)").attr("kslog") + " " + $(xml).find("foodDivision:nth(5)").attr("ksname"));

	$(".ExamCode").html("ks181179FT");
}


$(document).on("pagebeforeshow", "#ExamFriXML", function() {
	console.log("in xml");
	$.ajax({
		type: "GET", url: "exam02XMLDescFT-Fri.xml", dataType: "xml", success: getXML
		
	});
});

function getXML(xml) {
	console.log("getXML");
	
	$("#xmlFoodOut").html("");
	
	
	
	$(xml).find("foodDivision[kslog='scharfk']").each(function(){
		$(this).find("descAboutFood").each(function(){
			if($(this).find("vitamins").attr("c") == '2' && $(this).find("calories").attr("fromfat") >= 200) {
				$("#xmlFoodOut").append(
					"<tr>" + 
					"<td>" + $(this).find("vitamins").attr("c") + "</td>" +
					"<td>" + $(this).find("calories").attr("fromfat") + "</td>" +
					
					"</tr>"
				);
			};
			
		})
		
	})
		
	
	
	
	
	
}


$(document).on("pagebeforeshow", "#ExamFriJSON", function() {
	console.log("in json");
	$.ajax({
		type: "GET", url: "exam02JSONPopular-Fri.json", dataType: "json", success: getJson
		
	});
});
function getJson(data) {
	console.log("getJson");

	
	start=data.exam2.plantFiles;
	
	$("#jsonPlantOutput").html("");
	
	for(x=0; x < start.length; x++) {
		//in array
		if(start[x].popular.light == 'Shade' && start[x].botanical == 'Polemonium caeruleum') {
			$("#jsonPlantOutput").append(
				
					"<li>" + start[x].popular.name +  "name / " +  
					start[x].botanical + "has a " + 
					start[x].popular.light + 
					"light requirement / price = " + 
					start[x].priceRate + 
					"</li>"
					
				
			);
		}
	};
	
	$("#jsonPlantOutput").listview("refresh");
	
}


$(document).on("pagebeforeshow", "#ExamFriLocStorage", function() {
	console.log("in storage");
	
	$("#LocalSetStorage").on("click", function() {
		
		localStorage.setItem("studentNumberExam", $("input[name='studentNumberExam']").val());
		localStorage.setItem("studentAmtExam", $("input[name='studentAmtExam']").val());		
		alert("Information for 1179 saved by scharfk");
	});
	
});


$(document).on("pagebeforeshow", "#LocalGetStorage", function() {
	console.log("in storage popup");
	
	studentNumberExam = localStorage.getItem("studentNumberExam");
	studentAmtExam = parseFloat(localStorage.getItem("studentAmtExam"));
	
	finalcost = (studentAmtExam -500).toFixed(2);
	
	
	$("#amtOutputExam").val(finalcost);
	
	
});
