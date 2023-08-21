


var professionsSelect = document.getElementById("00NHu00000LLlWG");
var provinceSelect = document.getElementById("00NHu00000LLlWB");
var licensingBodySelect = document.getElementById("00NHu00000LLsJs");

const addOptionsValueToProfessionsSelect = (professionsArray) => {
    var option = document.createElement("option");
    for (var i = 0; i < professionsArray.length; i++) {
        var option = document.createElement("option");
        option.value = professionsArray[i];
        option.text = professionsArray[i];
        professionsSelect.add(option);
    }
}

const addOptionsValueToLicensingBodySelect = (licensingBodyArray) => {
    var option = document.createElement("option");
    for (var i = 0; i < licensingBodyArray.length; i++) {
        var option = document.createElement("option");
        option.value = licensingBodyArray[i];
        option.text = licensingBodyArray[i];
        licensingBodySelect.add(option);
    }
}

const onChangeProvincialSelect = (evt) => {
    let noneOfAboveMessage = "Thank you for your interest in becoming a PaRx prescriber! Our program is currently available for licensed Canadian healthcare professionals only. Please sign up for our newsletter to stay up to date on the latest news about PaRx!";
    let notAvaliableMessage = "We haven't launched in your territory yet, but will be in touch with more information when we do.";
    let licensingArrayProvinceSpecifiedList = [];
    let professionsOptionsList = [];
    licensingBodySelect.innerHTML === "";
    professionsSelect.innerHTML === "";
    switch(evt.target.value) {
        case "none of the above" :
            alert(noneOfAboveMessage);
            break;
        case "AB": 
            licensingArrayProvinceSpecifiedList = ["Alberta College of Combined Laboratory and X-Ray Technologists",
                "Alberta College of Medical Diagnostic and Therapeutic Technologists",
                "Alberta College of Occupational Therapists",  
                "Alberta College of Optometrists",  
                "Alberta College of Paramedics",  
                "Alberta College of Pharmacy",  
                "Alberta College of Social Workers",  
                "Alberta College of Speech-Language Pathologists and Audiologists",   
                "Alberta Dental Association and College",  
                "Canadian Therapeutic Recreation Association",
                "College and Association of Respiratory Therapists of Alberta",  
                "College of Acupuncturists of Alberta",   
                "College of Alberta Dental Assistants",   
                "College of Alberta Denturists",  
                "College of Alberta Psychologists",  
                "College of Chiropractors of Alberta",  
                "College of Dental Technologists of Alberta",   
                "College of Dietitians of Alberta",  
                "College of Hearing Aid Practitioners of Alberta",  
                "College of Licensed Practical Nurses of Alberta",  
                "College of Medical Laboratory Technologists of Alberta",  
                "College of Midwives of Alberta",  
                "College of Naturopathic Doctors of Alberta",  
                "College of Opticians of Alberta",  
                "College of Physicians and Surgeons of Alberta",  
                "College of Physiotherapists of Alberta",   
                "College of Podiatric Physicians of Alberta",  
                "College of Registered Dental Hygienists of Alberta",  
                "College of Registered Nurses of Alberta",  
                "College of Registered Psychiatric Nurses of Alberta"];
             professionsOptionsList = ["Acupuncturist",
                "Audiologist",
                "Chiropractor",
                "Dental Assistant",
                "Dental Hygienist",
                "Dental Technician",
                "Dentist",
                "Denturist",
                "Dietician",
                "Hearing Aid Practitioner",
                "Laboratory and X-Ray Technologist",
                "Medical Diagnostic and Therapeutic Technologist",
                "Medical Laboratory Technologist",
                "Midwife",
                "Naturopathic Doctor",
                "Registered Nurse",
                "Nurse Practitioner",
                "Occupational Therapist",
                "Optician",
                "Optometrist",
                "Orthodontist",
                "Paramedic",
                "Pharmacist",
                "Physician (Family)",
                "Physician (Specialist)",
                "Physiotherapist",
                "Podiatrist",
                "Practical Nurse",
                "Psychiatric Nurse",
                "Psychologist",
                "Respiratory Therapist",
                "Recreation Therapist",
                "Social Worker",
                "Speech Language Pathologist",
                "None of the above"];
            break;
        case "YK" :
            alert(notAvaliableMessage);
            break;
        case "NT" :
            alert(notAvaliableMessage);
            break;
        case "NU" :   
            alert(notAvaliableMessage);
            break;
        case "":
            alert("Please select the Canadian province of you practice to continue.")
        default:
            break;
    }

    addOptionsValueToProfessionsSelect(professionsOptionsList);
    addOptionsValueToLicensingBodySelect(licensingArrayProvinceSpecifiedList);
    
}

provinceSelect.addEventListener("change", onChangeProvincialSelect);
