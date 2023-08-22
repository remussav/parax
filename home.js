


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
    licensingBodySelect.innerHTML = "";
    professionsSelect.innerHTML = "";
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
                "Canadian Therapeutic Recreation Association",
                "College and Association of Respiratory Therapists of Alberta",  
                "College of Acupuncturists of Alberta",   
                "College of Alberta Dental Assistants",   
                "College of Alberta Denturists",  
                "College of Alberta Psychologists",  
                "College of Chiropractors of Alberta",  
                "College of Dental Surgeons of Alberta",
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
                "Licensed Practical Nurse",
                "Medical Diagnostic and Therapeutic Technologist",
                "Medical Laboratory Technologist",
                "Midwife",
                "Naturopathic Doctor",
                "Nurse Practitioner",
                "Occupational Therapist",
                "Optician",
                "Optometrist",
                "Orthodontist",
                "Paramedic",
                "Pharmacist",
                "Physician",
                "Physiotherapist",
                "Podiatrist",
                "Psychologist",
                "Recreation Therapist",
                "Registered Nurse",
                "Registered Psychiatric Nurse",
                "Respiratory Therapist",
                "Social Worker",
                "Speech Language Pathologist",
                "None of the above"];
            break;
        case "BC": 
            licensingArrayProvinceSpecifiedList = ["BC Association of Clinical Counsellors",
                "British Columbia College of Nurses and Midwives", 
                "British Columbia College of Oral Health Professionals", 
                "British Columbia College of Social Workers",  
                "Canadian Therapeutic Recreation Association",
                "College of Chiropractors of British Columbia", 
                "College of Dietitians of British Columbia", 
                "College of Massage Therapists of British Columbia", 
                "College of Naturopathic Physicians of British Columbia", 
                "College of Occupational Therapists of British Columbia", 
                "College of Opticians of British Columbia", 
                "College of Optometrists of British Columbia", 
                "College of Pharmacists of British Columbia", 
                "College of Physical Therapists of British Columbia", 
                "College of Physicians and Surgeons of British Columbia",
                "College of Psychologists of British Columbia", 
                "College of Speech and Hearing Health Professionals of British Columbia", 
                "College of Traditional Chinese Medicine Practitioners and Acupuncturists of British Columbia",
                "Emergency Medical Assistants Licensing Board"];
             professionsOptionsList = ["Acupuncturist",
                "Audiologist",
                "Chiropractor",
                "Clinical Counsellor",
                "Dental Hygienist",
                "Dental Technician",
                "Dentist",
                "Denturist",
                "Dietician",
                "Licensed Practical Nurse"
                "Massage Therapist",
                "Midwife",
                "Naturopathic Doctor",
                "Nurse Practitioner",
                "Occupational Therapist",
                "Optician",
                "Optometrist",
                "Orthodontist",
                "Paramedic",
                "Pharmacist",
                "Pharmacy Technician",
                "Physician",
                "Physiotherapist",
                "Psychologist",
                "Recreation Therapist",
                "Registered Nurse",
                "Registered Psychiatric Nurse",
                "Social Worker",
                "Speech and Hearing Health Professional",
                "Traditional Chinese Medicine Practitioner",
                "None of the above"];
            break;
        case "MB": 
            licensingArrayProvinceSpecifiedList = ["Canadian Therapeutic Recreation Association",
                "College of Audiologists and Speech – Language Pathologists of Manitoba",
                "College of Audiologists and Speech-Language Pathologists of Manitoba",
                "College of Dental Hygienists of Manitoba",
                "College of Dietitians of Manitoba",
                "College of Licensed Practical Nurses of Manitoba",
                "College of Medical Laboratory Technologists of Manitoba",
                "College of Midwives of Manitoba",
                "College of Occupational Therapists of Manitoba",
                "College of Paramedics of Manitoba",
                "College of Pharmacists of Manitoba",
                "College of Physicians & Surgeons of Manitoba",
                "College of Physiotherapists of Manitoba",
                "College of Podiatrists of Manitoba",
                "College of Registered Nurses of Manitoba",
                "College of Registered Nurses of Manitoba",
                "College of Registered Psychiatric Nurses of Manitoba",
                "Denturist Association of Manitoba",
                "Manitoba Association of Optometrists",
                "Manitoba Association of Registered Respiratory Therapists",
                "Manitoba Chiropractors Association",
                "Manitoba College of Social Workers",
                "Manitoba Dental Association",
                "Manitoba Dental Association",
                "Manitoba Dental Association",
                "Manitoba Naturopathic Association",
                "Opticians of Manitoba",
                "Psychological Association of Manitoba",
                "None of the above"];
             professionsOptionsList = ["Audiologist",
                "Chiropractor",
                "Dental Assistant",
                "Dental Hygienist",
                "Dentist",
                "Denturist",
                "Dietician",
                "Licensed Practical Nurse",
                "Medical Laboratory Technologist",
                "Midwife",
                "Naturopathic Doctor",
                "Nurse Practitioner",
                "Occupational Therapist",
                "Optician",
                "Optometrist",
                "Orthodontist",
                "Paramedic",
                "Pharmacist",
                "Physician",
                "Physiotherapist",
                "Podiatrist",
                "Psychologist",
                "Recreation Therapist",
                "Registered Nurse",
                "Registered Psychiatric Nurse",
                "Respiratory Therapist",
                "Social Worker",
                "Speech Language Pathologist",
                "None of the above"];
            break;
         case "NB": 
            licensingArrayProvinceSpecifiedList = ["Association of New Brunswick Licensed Practical Nurses",
                "Canadian Therapeutic Recreation Association",
                "College of Counselling Therapists of New Brunswick",
                "College of Massage Therapy New Brunswick",
                "College of Physicians and Surgeons of New Brunswick",
                "College of Physiotherapists of New Brunswick",
                "College of Psychologists of New Brunswick",
                "Midwifery Council of New Brunswick",
                "New Brunswick Association of Dietitians",
                "New Brunswick Association of Medical Radiation Technologists",
                "New Brunswick Association of Occupational Therapists",
                "New Brunswick Association of Optometrists",
                "New Brunswick Association of Respiratory Therapists",
                "New Brunswick Association of Social Workers",
                "New Brunswick Chiropractors' Association",
                "New Brunswick College of Dental Hygienists",
                "New Brunswick Dental Society",
                "New Brunswick Dental Technicians' Association",
                "New Brunswick Denturists' Society",
                "New Brunswick Pharmacists' Association",
                "New Brunswick Podiatry Association",
                "New Brunswick Society of Cardiology Technologists",
                "New Brunswick Society of Medical Laboratory Technologists",
                "New Brunswick Association of Speech-Language Pathologists and Audiologists",
                "Nurses' Association of New Brunswick",
                "Opticians' Association of New Brunswick",
                "Paramedic Association of New Brunswick",
                "None of the above"];
             professionsOptionsList = ["Audiologist",
                "Cardiology Technologist",
                "Chiropractor",
                "Counselling Therapist",
                "Dental Hygienist",
                "Dental Technician",
                "Dentist",
                "Denturist",
                "Dietician",
                "Licensed Practical Nurse",
                "Massage Therapist",
                "Medical Laboratory Technologist",
                "Medical Radiation Technologist",
                "Midwife",
                "Nurse Practitioner",
                "Occupational Therapist",
                "Optician",
                "Optometrist",
                "Orthodontist",
                "Paramedic",
                "Pharmacist",
                "Physician",
                "Physiotherapist",
                "Podiatrist",
                "Psychologist",
                "Recreation Therapist",
                "Registered Nurse",
                "Respiratory Therapist",
                "Social Worker",
                "Speech Language Pathologist",
                "None of the above"];
            break;
          case "NS": 
            licensingArrayProvinceSpecifiedList = ["Canadian Therapeutic Recreation Association",
                "College of Dental Hygienists of Nova Scotia",
                "College of Occupational Therapists of Nova Scotia",
                "College of Physicians and Surgeons of Nova Scotia",
                "Denturist Licensing Board",
                "Midwifery Regulatory Council of Nova Scotia",
                "Nova Scotia Association of Medical Radiation Technologists",
                "Nova Scotia Board of Examiners in Psychology",
                "Nova Scotia College of Audiologists and Speech-Language Pathologists",
                "Nova Scotia College of Chiropractors",
                "Nova Scotia College of Counselling Therapists",
                "Nova Scotia College of Dispensing Opticians",
                "Nova Scotia College of Medical Laboratory Technologists",
                "Nova Scotia College of Nursing",
                "Nova Scotia College of Optometrists",
                "Nova Scotia College of Pharmacists",
                "Nova Scotia College of Physiotherapists",
                "Nova Scotia College of Respiratory Therapists",
                "Nova Scotia College of Social Workers",
                "Nova Scotia Dental Technicians Association",
                "Nova Scotia Dietetic Association",
                "Provincial Dental Board of Nova Scotia",
                "None of the above"];
             professionsOptionsList = ["Audiologist",
                "Chiropractor",
                "Counselling Therapist",
                "Dental Hygienist",
                "Dental Technician",
                "Dentist",
                "Denturist",
                "Dietician",
                "Licensed Practical Nurse",
                "Medical Laboratory Technologist",
                "Medical Radiation Technologist",
                "Midwife",
                "Nurse Practitioner",
                "Occupational Therapist",
                "Optician",
                "Optometrist",
                "Orthodontist",
                "Pharmacist",
                "Physician",
                "Physiotherapist",
                "Psychologist",
                "Recreation Therapist",
                "Registered Nurse",
                "Respiratory Therapist",
                "Social Worker",
                "None of the above"];
            break;
          case "NL": 
            licensingArrayProvinceSpecifiedList = ["Canadian Therapeutic Recreation Association",
                "College of Audiology and Speech-Language Pathology of Newfoundland and Labrador",
                "College of Licensed Practical Nurses of Newfoundland and Labrador",
                "College of Massage Therapists Newfoundland",
                "College of Midwives of Newfoundland and Labrador",
                "College of Physicians and Surgeons of Newfoundland and Labrador",
                "College of Registered Nurses of Newfoundland and Labrador",
                "College of Traditional Chinese Medicine Practitioners and Acupuncturists of Newfoundland and Labrador",
                "Denturist Association of Newfoundland & Labrador",
                "Newfoundland & Labrador Pharmacy Board",
                "Newfoundland and Labrador Chiropractic Board",
                "Newfoundland and Labrador College of Dental Hygienists",
                "Newfoundland and Labrador College of Dietitians",
                "Newfoundland and Labrador College of Medical Laboratory Sciences",
                "Newfoundland and Labrador College of Optometrists",
                "Newfoundland and Labrador College of Physiotherapists",
                "Newfoundland and Labrador College of Respiratory Therapists",
                "Newfoundland and Labrador College of Social Workers",
                "Newfoundland and Labrador Dental Board",
                "Newfoundland and Labrador Psychology Board",
                "Newfoundland Labrador Occupational Therapy Board",
                "The Dispensing Opticians Board of Newfoundland and Labrador",
                "None of the above"];
             professionsOptionsList = ["Acupuncturist",
                "Audiologist",
                "Chiropractor",
                "Dental Hygienist",
                "Dentist",
                "Denturist",
                "Dietician",
                "Licensed Practical Nurse",
                "Massage Therapist",
                "Medical Laboratory Technologist",
                "Midwife",
                "Nurse Practitioner",
                "Occupational Therapist",
                "Optician",
                "Optometrist",
                "Orthodontist",
                "Pharmacist",
                "Physician",
                "Physiotherapist",
                "Psychologist",
                "Recreation Therapist",
                "Registered Nurse",
                "Respiratory Therapist",
                "Social Worker",
                "Speech Language Pathologist",
                "Traditional Chinese Medicine Practitioner",
                "None of the above"];
            break;
        case "PE": 
            licensingArrayProvinceSpecifiedList = ["Canadian Therapeutic Recreation Association",
                "College of Allied Health Professionals of PEI",
                "College of Counselling Therapy of Prince Edward Island",
                "College of Dental Hygienists of Prince Edward Island",
                "College of Dietitians of Prince Edward Island",
                "College of Licensed Practical Nurses of Prince Edward Island",
                "College of Massage Therapists of Prince Edward Island",
                "College of Physicians and Surgeons of Prince Edward Island",
                "Denturist Society of Prince Edward Island",
                "P.E.I. Board of Dispensing Opticians",
                "Prince Edward Island Chiropractic Association",
                "Prince Edward Island College of Optometrists",
                "Prince Edward Island College of Pharmacists",
                "Prince Edward Island College of Physiotherapists",
                "Prince Edward Island Dental Council",
                "Prince Edward Island Occupational Therapists Registration Board",
                "Prince Edward Island Psychologists Registration Board",
                "Prince Edward Island Social Work Registration Board",
                "Prince Edward Island Speech and Hearing Association",
                "Registered Nurses of Prince Edward Island",
                "None of the above"];
             professionsOptionsList = ["Audiologist",
                "Chiropractor",
                "Counselling Therapist",
                "Dental Hygienist",
                "Dentist",
                "Denturist",
                "Dietician",
                "Licensed Practical Nurse",
                "Massage Therapist",
                "Medical Radiation Technologist",
                "Midwife",
                "Nurse Practitioner",
                "Occupational Therapist",
                "Optician",
                "Optometrist",
                "Orthodontist",
                "Pharmacist",
                "Physician",
                "Physiotherapist",
                "Psychologist",
                "Recreation Therapist",
                "Registered Nurse",
                "Respiratory Therapist",
                "Social Worker",
                "None of the above"];
            break;
          case "SK": 
            licensingArrayProvinceSpecifiedList = ["Canadian Therapeutic Recreation Association",
                "Chiropractors' Association of Saskatchewan",
                "College of Dental Surgeons of Saskatchewan",
                "College of Physicians and Surgeons of Saskatchewan",
                "College of Registered Nurses of Saskatchewan",
                "Denturist Society of Saskatchewan",
                "Registered Psychiatric Nurses Association of Saskatchewan",
                "Saskatchewan Association of Licensed Practical Nurses",
                "Saskatchewan Association of Medical Radiation Technologists",
                "Saskatchewan Association of Naturopathic Practitioners",
                "Saskatchewan Association of Optometrists",
                "Saskatchewan Association of Social Workers",
                "Saskatchewan Association of Speech-Language Pathologists and Audiologists",
                "Saskatchewan College of Midwives",
                "Saskatchewan College of Opticians",
                "Saskatchewan College of Paramedics",
                "Saskatchewan College of Pharmacy Professionals",
                "Saskatchewan College of Physical Therapists",
                "Saskatchewan College of Podiatrists",
                "Saskatchewan College of Psychologists",
                "Saskatchewan College of Respiratory Therapists",
                "Saskatchewan Dental Assistants' Association",
                "Saskatchewan Dental Hygienists' Association",
                "Saskatchewan Dental Therapists Association",
                "Saskatchewan Dietitians Association",
                "Saskatchewan Society of Medical Laboratory Technologists",
                "Saskatchewan Society of Occupational Therapists",
                "None of the above"];
             professionsOptionsList = ["Audiologist",
                "Chiropractor",
                "Dental Assistant",
                "Dental Hygienist",
                "Dental Technician",
                "Dentist",
                "Denturist",
                "Dietician",
                "Licensed Practical Nurse",
                "Medical Laboratory Technologist",
                "Medical Radiation Technologist",
                "Midwife",
                "Naturopathic Doctor",
                "Nurse Practitioner",
                "Occupational Therapist",
                "Optician",
                "Optometrist",
                "Orthodontist",
                "Paramedic",
                "Pharmacist",
                "Physician",
                "Physiotherapist",
                "Podiatrist",
                "Psychologist",
                "Recreation Therapist",
                "Registered Nurse",
                "Registered Psychiatric Nurse",
                "Respiratory Therapist",
                "Social Worker",
                "Speech Language Pathologist",
                "None of the above"];
            break;
          case "ON": 
            licensingArrayProvinceSpecifiedList = ["Canadian Therapeutic Recreation Association",
                "College of Audiologists and Speech-Language Pathologists of Ontario",
                "College of Chiropodists of Ontario",
                "College of Chiropractors of Ontario",
                "College of Dental Hygienists of Ontario",
                "College of Dental Technologists of Ontario",
                "College of Denturists of Ontario",
                "College of Dietitians of Ontario",
                "College of Homeopaths of Ontario",
                "College of Kinesiologists of Ontario",
                "College of Massage Therapists of Ontario",
                "College of Medical Laboratory Technologists of Ontario",
                "College of Medical Radiation Technologists of Ontario",
                "College of Midwives of Ontario",
                "College of Naturopaths of Ontario",
                "College of Nurses of Ontario",
                "College of Occupational Therapists of Ontario",
                "College of Opticians of Ontario",
                "College of Optometrists of Ontario",
                "College of Physicians and Surgeons of Ontario",
                "College of Physiotherapists of Ontario",
                "College of Psychologists of Ontario",
                "College of Registered Psychotherapists and Registered Mental Health Therapists of Ontario",
                "College of Respiratory Therapists in Ontario",
                "College of Traditional Chinese Medicine Practitioners and Acupuncturists of Ontario",
                "Ontario College of Pharmacists",
                "Ontario College of Social Workers and Social Service Workers",
                "Royal College of Dental Surgeons of Ontario",
                "None of the above"];
             professionsOptionsList = ["Acupuncturist",
                "Audiologist",
                "Chiropodist",
                "Chiropractor",
                "Dental Hygienist",
                "Dental Technician",
                "Dentist",
                "Denturist",
                "Dietician",
                "Homeopath",
                "Kinesiologist",
                "Massage Therapist",
                "Medical Laboratory Technologist",
                "Medical Radiation Technologist",
                "Midwife",
                "Naturopathic Doctor",
                "Nurse Practitioner",
                "Occupational Therapist",
                "Optician",
                "Optometrist",
                "Orthodontist",
                "Pharmacist",
                "Physician",
                "Physiotherapist",
                "Psychologist",
                "Psychotherapist",
                "Recreation Therapist",
                "Registered Nurse",
                "Registered Practical Nurse",
                "Respiratory Therapist",
                "Social Worker",
                "Speech Language Pathologist",
                "Traditional Chinese Medicine Practitioner",
                "None of the above"];
            break;
        case "QC": 
            licensingArrayProvinceSpecifiedList = ["Association canadienne des loisirs thérapeutiques",
                "Collège des médecins du Québec",
                "Fédération des kinésiologues du Québec",
                "Ordre des Acupuncteurs du Québec",
                "Ordre des audioprothésistes du Québec",
                "Ordre des chiropraticiens du Québec",
                "Ordre des conseillers et conseillères d'orientation du Québec",
                "Ordre des dentistes du Québec",
                "Ordre des denturologistes du Québec",
                "Ordre des diététistes-nutritionnistes du Québec",
                "Ordre des ergothérapeutes du Québec",
                "Ordre des Hygiénistes Dentaires du Québec",
                "Ordre des infirmières et infirmiers auxiliaires du Québec",
                "Ordre des infirmières et infirmiers du Québec",
                "Ordre des opticiens d’ordonnances du Québec",
                "Ordre des optométristes du Québec",
                "Ordre des orthophonistes et audiologists du Québec",
                "Ordre des pharmaciens du Québec",
                "Ordre des podiatres du Québec",
                "Ordre des psychoéducateurs et psychoéducatrices du Québec",
                "Ordre des psychologues du Québec",
                "Ordre des sages-femmes du Québec",
                "Ordre des technologues en imagerie médicale, en radio-oncologie et en électrophysiologie médicale du Québec",
                "Ordre des technologues en prothèses et appareils dentaires du Québec",
                "Ordre des travailleurs sociaux et des thérapeutes conjugaux et familiaux du Québec",
                "Ordre professionnel de la physiothérapie du Québec",
                "Ordre professionnel des inhalothérapeutes du Québec",
                "Ordre professionnel des sexologues du Québec",
                "Ordre professionnel des technologistes médicaux du Québec",
                "None of the above"];
             professionsOptionsList = ["Acupuncturist",
                "Audiologist",
                "Chiropractor",
                "Dental Hygienist",
                "Dental Prosthesis and Appliance Technologist",
                "Dentist",
                "Denturist",
                "Dietician",
                "Guidance Counsellor",
                "Hearing Aid Practitioner",
                "Kinesiologist",
                "Medical Electrophysiology Technologist",
                "Medical Laboratory Technologist",
                "Medical Radiation Technologist",
                "Medical Technologist",
                "Midwife",
                "Nurse Practitioner",
                "Nursing Assistant",
                "Occupational Therapist",
                "Optician",
                "Optometrist",
                "Orthodontist",
                "Pharmacist",
                "Physician",
                "Physiotherapist",
                "Podiatrist",
                "Psychoeducator"
                "Psychologist",
                "Recreation Therapist",
                "Registered Nurse",
                "Registered Practical Nurse",
                "Respiratory Therapist",
                "Sexologist",
                "Social Worker",
                "Speech and Hearing Health Professional",
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
