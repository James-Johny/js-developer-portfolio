function updateProfileInfo(profileData) {


    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = `Foto de ${profileData.name}`
    console.log(photo.alt)

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name


    const job = document.getElementById('profile.job')
    job.innerText = profileData.job


    const location = document.getElementById('profile.location')
    location.innerText = profileData.location


    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`


    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}`).join("");
}


function movePDF(event, id) {
    const pdf = document.getElementById(id);
    if (pdf) {
        pdf.style.display = "block";
        pdf.style.left = (event.clientX + 15) + "px";
        pdf.style.top = (event.clientY + 15) + "px";
    }
}

function hidePDF(id) {
    const pdf = document.getElementById(id);
    if (pdf) {
        pdf.style.display = "none";
    }
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');
    
    portfolio.innerHTML = profileData.portfolio.map((project, index) => {
        const uniqueId = `pdf-${index}`;
        
        return `
        <li>
            <h3 ${project.github ? 'class="github"' : ''} 
                onmousemove="movePDF(event, '${uniqueId}')" 
                onmouseout="hidePDF('${uniqueId}')"
                style="cursor: default; display: inline-block;">
                ${project.name}
            </h3>
            <a href="${project.url}" target="_blank">${project.url}</a>
            
            <div class="pdf-floating-container" id="${uniqueId}" 
                 style="display:none; position: fixed; z-index: 999; pointer-events: none; 
                        overflow: hidden; width: 500px; height: 300px; border: 1px solid #ccc; 
                        box-shadow: 5px 5px 15px rgba(0,0,0,0.3); background: #fff;">
                <embed 
                    type="application/pdf" 
                    src="${project.certificate}#toolbar=0&navpanes=0" 
                    style="width: 500px; height: 350px; margin-top: -45px;" 
                />
            </div>
        </li>
        `;
    }).join('');
}


function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
        <li>
        <h3 class="title">${experience.name}</h3>
        <p class="period">${experience.period}</p>
        <p>${experience.description}</p>
        `
    }).join('')
}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateProfessionalExperience(profileData);
})()

