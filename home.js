


var titleSelect = document.getElementById("00NHu00000LLlWG");
var provinceSelect = document.getElementById("00NHu00000LLlWB");
var affliationSelect = document.getElementById("00NHu00000LLsJs");

const addOptionsValueToTitleSelect = () => {
    var titleArray = ["Acupuncturist",
        "Audiologist",
        "Cardiology Technologist",
        "Chinese Medicine Practitioner",
        "Chiropodist",
        "Chiropractor",
        "Clinical Counsellor",
        "Counselling Therapist",
        "Dental Assistant",
        "Dental Hygienist",
        "Dental Prosthesis and Appliance Technologist",
        "Dental Surgeon",
        "Dental Technician",
        "Dental Therapist",
        "Dentist",
        "Denturist",
        "Dietician",
        "Guidance counsellor",
        "Hearing Aid Practitioner",
        "Homeopath",
        "Kinesiologist",
        "Laboratory and X-Ray Technologist",
        "Massage Therapist",
        "Medical Diagnostic and Therapeutic Technologist",
        "Medical Electrophysiology Technologist",
        "Medical Laboratory Technologist",
        "Medical Radiation Technologist",
        "Medical Technologist",
        "Midwife",
        "Naturopathic Doctor",
        "Nurse",
        "Nursing Assistant",
        "Occupational Therapist",
        "Optician",
        "Optometrist",
        "Other (fill in the blank)",
        "Paramedic",
        "Pharmacist",
        "Physician",
        "Physiotherapist",
        "Podiatrist",
        "Psychoeducator",
        "Psychologist",
        "Psychotherapist",
        "Recreation Therapist",
        "Respiratory Therapist",
        "Sexologist",
        "Social Worker",
        "Speech and Hearing Health Professional",
        "Speech Language Pathologist"];

    var option = document.createElement("option");
    option.value = "";
    option.text = "--None--";
    titleSelect.add(option);
    for (var i = 0; i < titleArray.length; i++) {
        var option = document.createElement("option");
        option.value = titleArray[i];
        option.text = titleArray[i];
        titleSelect.add(option);
    }
}

addOptionsValueToTitleSelect();

const onChangeProvincialSelect = (evt) => {
    let noneOfAboveMessage = "Thank you for your interest in becoming a PaRx prescriber! Our program is currently available for licensed Canadian healthcare professionals only. Please sign up for our newsletter to stay up to date on the latest news about PaRx!";
    let notAvaliableMessage = "We haven't launched in your territory yet, but will be in touch with more information when we do.";
    let AfflicationProvinceSpecifiedList = [];
    affliationSelect.innerHTML === "";
    switch(evt.target.value) {
        case "none of the above" :
            alert(noneOfAboveMessage);
            break;
        case "AB": 
            AfflicationProvinceSpecifiedList = ["Alberta College of Combined Laboratory and X-Ray Technologists",
                "Alberta College of Medical Diagnostic and Therapeutic Technologists",
                "Alberta College of Occupational Therapists",
                "Alberta College of Optometrists",
                "Alberta College of Paramedics",
                "Alberta College of Pharmacy",
                "Alberta College of Social Workers",
                "Alberta College of Speech-Language Pathologists and Audiologists",
                "Alberta Dental Association and College"];
            for (var i = 0; i < AfflicationProvinceSpecifiedList.length; i++) {
                var option = document.createElement("option");
                option.value = AfflicationProvinceSpecifiedList[i];
                option.text = AfflicationProvinceSpecifiedList[i];
                affliationSelect.add(option);
            };
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

    
}

provinceSelect.addEventListener("change", onChangeProvincialSelect);
