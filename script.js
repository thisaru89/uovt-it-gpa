// --- FULL DATASET (STATIC) ---
const commonY1 = {
    sem1: [ {c:"IT103011",n:"Mathematics for ICT I",cr:3,t:"GPA"}, {c:"IT104021",n:"Computer Programming",cr:4,t:"GPA"}, {c:"IT104031",n:"Software Development Practices",cr:4,t:"GPA"}, {c:"IT103041",n:"Digital Electronics",cr:3,t:"GPA"}, {c:"IT103051",n:"Data Communication and Networks",cr:3,t:"GPA"}, {c:"IT103061",n:"Database Design",cr:3,t:"GPA"}, {c:"IT104071",n:"Internet Technologies",cr:4,t:"GPA"}, {c:"LS103101",n:"Communication Skills in English I",cr:3,t:"NG"} ],
    sem2: [ {c:"IT202011",n:"Operating Systems",cr:2,t:"GPA"}, {c:"IT203021",n:"Mathematics for ICT II",cr:3,t:"GPA"}, {c:"IT203031",n:"Computer Architecture",cr:3,t:"GPA"}, {c:"IT204041",n:"Data Structures and Algorithms",cr:4,t:"GPA"}, {c:"IT206051",n:"Database Systems and Programming",cr:6,t:"GPA"}, {c:"IT204061",n:"Visual Programming I",cr:4,t:"GPA"}, {c:"IT206071",n:"Web Programming",cr:6,t:"GPA"}, {c:"IT203081",n:"Computer Networks",cr:3,t:"GPA"}, {c:"LS203111",n:"Communication Skills in English II",cr:3,t:"NG"} ]
};

const curric = {
    software: { ...commonY1,
        sem3: [ {c:"IT304011",n:"Web Technology and Applications",cr:4,t:"GPA"}, {c:"IT304021",n:"Platform Independent Programming",cr:4,t:"GPA"}, {c:"IT306031",n:"Visual Programming II",cr:6,t:"GPA"}, {c:"IT306041",n:"Software Architectures and Design",cr:6,t:"GPA"}, {c:"IT304051",n:"Software Deployment and Evolution",cr:4,t:"GPA"}, {c:"IT304061",n:"Database Implementation",cr:4,t:"GPA"}, {c:"MS304121",n:"Entrepreneurship Development and Management",cr:4,t:"GPA"}, {c:"IT302160",n:"Psychology",cr:2,t:"NG"}, {c:"IT302170",n:"Soft Skills and Personal development",cr:2,t:"NG"} ],
        sem4: [ {c:"IT404010",n:"Mobile Application Development",cr:4,t:"GPA"}, {c:"IT404020",n:"Cloud Based Application Development",cr:4,t:"GPA"}, {c:"IT402030",n:"Human Computer Interaction",cr:2,t:"GPA"}, {c:"IT404041",n:"Real-Time Programming",cr:4,t:"GPA"}, {c:"IT406051",n:"Software Testing and Reliability",cr:6,t:"GPA"}, {c:"IT403061",n:"Enterprise System Technologies and Architectures",cr:3,t:"GPA"}, {c:"IT402070",n:"UX Engineering",cr:2,t:"GPA"}, {c:"MS403130",n:"Research Methodology",cr:3,t:"GPA"}, {c:"IT402170",n:"Meditation & Stress Management",cr:2,t:"NG"}, {c:"EE402911",n:"Energy Management in IT Environment",cr:2,t:"NG"} ],
        sem5: [ {c:"IT514011",n:"Work Based / Industrial Training",cr:14,t:"GPA"} ],
        sem6: [ {c:"IT604011",n:"Professional Issues in Information Technology",cr:4,t:"GPA"}, {c:"IT604021",n:"Enterprise System Design",cr:4,t:"GPA"}, {c:"IT604030",n:"Enterprise Resource Planning Systems",cr:4,t:"GPA"}, {c:"IT604040",n:"Intelligent Systems",cr:4,t:"GPA"}, {c:"IT604051",n:"Information Systems Security and Practices",cr:4,t:"GPA"}, {c:"IT604061",n:"Software Project Management",cr:4,t:"GPA"}, {c:"IT604071",n:"Enterprise Application Development",cr:4,t:"GPA"}, {c:"IT602080",n:"Photography",cr:2,t:"NG"}, {c:"MS602910",n:"Occupational Health and Safety",cr:2,t:"NG"}, {c:"IT604090",n:"Game Development and Programming",cr:4,t:"GPA"}, {c:"IT603100",n:"Digital Marketing",cr:3,t:"GPA"}, {c:"IT612111",n:"Final Year Project (Software Development)",cr:12,t:"GPA"} ]
    },
    network: { ...commonY1,
        sem3: [ {c:"IT304011",n:"Web Technology and Applications",cr:4,t:"GPA"}, {c:"IT304021",n:"Platform Independent Programming",cr:4,t:"GPA"}, {c:"IT304121",n:"Network Administration",cr:4,t:"GPA"}, {c:"IT306131",n:"Internetwork Switching",cr:6,t:"GPA"}, {c:"IT306141",n:"System Administration",cr:6,t:"GPA"}, {c:"IT304151",n:"Wireless Communication",cr:4,t:"GPA"}, {c:"MS304121",n:"Entrepreneurship Development and Management",cr:4,t:"GPA"}, {c:"IT302160",n:"Psychology",cr:2,t:"NG"}, {c:"IT302170",n:"Soft Skills and Personal development",cr:2,t:"NG"} ],
        sem4: [ {c:"IT404010",n:"Mobile Application Development",cr:4,t:"GPA"}, {c:"IT404020",n:"Cloud Based Application Development",cr:4,t:"GPA"}, {c:"IT404121",n:"Internetwork Routing",cr:4,t:"GPA"}, {c:"IT406131",n:"Windows Server Administration",cr:6,t:"GPA"}, {c:"IT406141",n:"Network Systems Implementation",cr:6,t:"GPA"}, {c:"IT404150",n:"Network Programming",cr:4,t:"GPA"}, {c:"IT403160",n:"IoT Device Programming",cr:3,t:"GPA"}, {c:"MS403130",n:"Research Methodology",cr:3,t:"GPA"}, {c:"IT402170",n:"Meditation & Stress Management",cr:2,t:"NG"}, {c:"EE402911",n:"Energy Management in IT Environment",cr:2,t:"NG"} ],
        sem5: [ {c:"IT514011",n:"Work Based / Industrial Training",cr:14,t:"GPA"} ],
        sem6: [ {c:"IT604011",n:"Professional Issues in Information Technology",cr:4,t:"GPA"}, {c:"IT604051",n:"Information Systems Security and Practices",cr:4,t:"GPA"}, {c:"IT604151",n:"Network Project Management",cr:4,t:"GPA"}, {c:"IT604161",n:"Broadband Networks",cr:4,t:"GPA"}, {c:"IT604171",n:"Photonics and Fiber Optics",cr:4,t:"GPA"}, {c:"IT603100",n:"Digital Marketing",cr:3,t:"GPA"}, {c:"IT604030",n:"Enterprise Resource Planning Systems",cr:4,t:"GPA"}, {c:"IT604040",n:"Intelligent Systems",cr:4,t:"GPA"}, {c:"IT602080",n:"Photography",cr:2,t:"NG"}, {c:"MS602910",n:"Occupational Health and Safety",cr:2,t:"NG"}, {c:"IT612111",n:"Final Year Project (Network Development)",cr:12,t:"GPA"} ]
    },
    multimedia: { ...commonY1,
        sem3: [ {c:"IT304011",n:"Web Technology and Applications",cr:4,t:"GPA"}, {c:"IT304021",n:"Platform Independent Programming",cr:4,t:"GPA"}, {c:"IT304071",n:"Fundamentals of Mass Communication and Media Design",cr:4,t:"GPA"}, {c:"IT303081",n:"Art and Design",cr:3,t:"GPA"}, {c:"IT306091",n:"2D and 3D Graphics",cr:6,t:"GPA"}, {c:"IT304101",n:"Video Production Techniques",cr:4,t:"GPA"}, {c:"IT304111",n:"Animation Technology and Applications",cr:4,t:"GPA"}, {c:"MS304121",n:"Entrepreneurship Development and Management",cr:4,t:"GPA"}, {c:"IT302160",n:"Psychology",cr:2,t:"NG"}, {c:"IT302170",n:"Soft Skills and Personal development",cr:2,t:"NG"} ],
        sem4: [ {c:"IT404010",n:"Mobile Application Development",cr:4,t:"GPA"}, {c:"IT404020",n:"Cloud Based Application Development",cr:4,t:"GPA"}, {c:"IT402030",n:"Human Computer Interaction",cr:2,t:"GPA"}, {c:"IT406081",n:"Digital Signal Processing Techniques and Image Processing",cr:6,t:"GPA"}, {c:"IT402090",n:"Audio Editing and Music Production",cr:2,t:"GPA"}, {c:"IT404101",n:"Audio and Video Postproduction Techniques",cr:4,t:"GPA"}, {c:"IT406111",n:"Multimedia Product Development",cr:6,t:"GPA"}, {c:"MS403130",n:"Research Methodology",cr:3,t:"GPA"}, {c:"IT402170",n:"Meditation & Stress Management",cr:2,t:"NG"}, {c:"EE402911",n:"Energy Management in IT Environment",cr:2,t:"NG"} ],
        sem5: [ {c:"IT514011",n:"Work Based / Industrial Training",cr:14,t:"GPA"} ],
        sem6: [ {c:"IT604011",n:"Professional Issues in Information Technology",cr:4,t:"GPA"}, {c:"IT604021",n:"Enterprise System Design",cr:4,t:"GPA"}, {c:"IT604121",n:"Multimedia Project Management",cr:4,t:"GPA"}, {c:"IT603130",n:"Content Management Systems and Frameworks",cr:3,t:"GPA"}, {c:"IT604141",n:"Multimedia Data Processing",cr:4,t:"GPA"}, {c:"IT603100",n:"Digital Marketing",cr:3,t:"GPA"}, {c:"IT602080",n:"Photography",cr:2,t:"NG"}, {c:"MS602910",n:"Occupational Health and Safety",cr:2,t:"NG"}, {c:"IT604090",n:"Game Development and Programming",cr:4,t:"GPA"}, {c:"IT604040",n:"Intelligent Systems",cr:4,t:"GPA"}, {c:"IT612111",n:"Final Year Project (Multimedia and Web)",cr:12,t:"GPA"} ]
    }
};
const pts = {"A+":4.0,"A":4.0,"A-":3.7,"B+":3.3,"B":3.0,"B-":2.7,"C+":2.3,"C":2.0,"C-":1.7,"D+":1.3,"D":1.0,"E":0,"F":0};

// --- STATE MANAGEMENT ---
let deg = "software";
let db = { software: emptySem(), network: emptySem(), multimedia: emptySem() };
let ignoreDB = { software: emptySem(), network: emptySem(), multimedia: emptySem() };
let customDB = { software: emptySemArr(), network: emptySemArr(), multimedia: emptySemArr() }; // Store arrays for custom subs
let c1, c2;

function init() {
    if(localStorage.getItem('uovt_theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        Chart.defaults.color = '#94a3b8';
    }
    if(localStorage.getItem('uovt_final_db')) db = JSON.parse(localStorage.getItem('uovt_final_db'));
    if(localStorage.getItem('uovt_ign')) ignoreDB = JSON.parse(localStorage.getItem('uovt_ign'));
    if(localStorage.getItem('uovt_custom')) customDB = JSON.parse(localStorage.getItem('uovt_custom')); // Load Custom Subjects
    if(localStorage.getItem('uovt_deg')) deg = localStorage.getItem('uovt_deg');
    
    document.getElementById('degSelect').value = deg;
    if(localStorage.getItem('uovt_prof')) {
        const p = JSON.parse(localStorage.getItem('uovt_prof'));
        document.getElementById('profName').value = p.name;
        document.getElementById('profIndex').value = p.index;
    }

    applyTheme();
    renderAll();
}

function emptySem() { return {sem1:{},sem2:{},sem3:{},sem4:{},sem5:{},sem6:{}}; }
function emptySemArr() { return {sem1:[],sem2:[],sem3:[],sem4:[],sem5:[],sem6:[]}; } // Structure for custom subs

function switchDegree() { deg = document.getElementById('degSelect').value; localStorage.setItem('uovt_deg', deg); applyTheme(); renderAll(); }
function applyTheme() {
    document.body.removeAttribute('data-degree');
    if(deg!=='software') document.body.setAttribute('data-degree',deg);
    
    // මෙන්න මෙතන නම වෙනස් කළා "IT" කෑල්ල එකතු කරලා
    const titles = {
        software: 'UOVT IT Result Manager (SOF)', 
        network: 'UOVT IT Result Manager (NET)', 
        multimedia: 'UOVT IT Result Manager (MMW)'
    };
    document.getElementById('brand-text').innerText = titles[deg];
}

// Helper to get ALL subjects (Static + Custom)
function getAllSubjects(sem) {
    const staticSubs = curric[deg][sem] || [];
    // If customDB hasn't been initialized for this degree yet (backward compatibility), fix it
    if(!customDB[deg]) customDB[deg] = emptySemArr();
    const customSubs = customDB[deg][sem] || [];
    
    // Mark custom subjects so we can add a delete button
    const taggedCustom = customSubs.map(s => ({...s, isCustom: true}));
    
    return [...staticSubs, ...taggedCustom];
}

function renderAll() { Object.keys(curric[deg]).forEach(sem => renderSem(sem)); updateDash(); }

function renderSem(sem) {
    const el = document.getElementById(`cont-${sem}`);
    if(!el) return;
    
    const allSubs = getAllSubjects(sem);

    let h = `<div class="glass-card">
        <div style="display:flex;justify-content:space-between;margin-bottom:10px;">
            <strong style="text-transform:uppercase;color:var(--text-sub);">${sem}</strong>
            <div style="display:flex;gap:10px;align-items:center;">
                <span id="sgpa-${sem}" style="color:var(--primary);font-weight:700;">SGPA: 0.00</span>
                <button class="btn-icon" onclick="resetSem('${sem}')" style="font-size:0.7rem;padding:3px 8px;">Reset</button>
            </div>
        </div>
        <div class="table-wrapper">
            <table>
                <thead><tr><th width="30"></th><th>Module</th><th width="50" style="text-align:center;">Cr</th><th width="100">Grade</th></tr></thead>
                <tbody>`;
    
    if(!ignoreDB[deg]) ignoreDB[deg] = emptySem();
    if(!ignoreDB[deg][sem]) ignoreDB[deg][sem] = {};

    allSubs.forEach(s => {
        const g = db[deg][sem][s.c] || "";
        const isIgnored = ignoreDB[deg][sem][s.c] === true;
        
        // Delete button for custom subjects
        const delBtn = s.isCustom 
            ? `<i class="ph ph-trash" onclick="deleteCustomSubject('${sem}', '${s.c}')" style="color:#ef4444; cursor:pointer; margin-left:5px; font-size:14px;"></i>` 
            : '';

        h += `<tr class="${isIgnored ? 'row-disabled' : ''}">
            <td>
                <label class="check-container">
                    <input type="checkbox" class="check-input" onchange="toggleIgnore('${sem}','${s.c}')" ${!isIgnored ? 'checked' : ''}>
                    <div class="check-box"><i class="ph ph-check" style="font-size:12px;"></i></div>
                </label>
            </td>
            <td>
                <b>${s.n}</b> ${delBtn}<br>
                <small>${s.c}</small>
            </td>
            <td style="text-align:center;"><span class="cr-badge">${s.cr}</span></td>
            <td><select class="grade-in" onchange="save('${sem}','${s.c}',this.value)" style="${g?'border-color:var(--primary);color:var(--primary);':''}" ${isIgnored ? 'disabled' : ''}>
                <option value="">-</option>${Object.keys(pts).map(k=>`<option value="${k}" ${g===k?'selected':''}>${k}</option>`).join('')}
            </select></td>
        </tr>`;
    });

    // Add "Add Module" button at the bottom of the table
    h += `</tbody></table></div>
        <button class="btn-icon full-width mt-20" onclick="openAddModal('${sem}')" style="border-style:dashed; opacity:0.7;">+ Add Module</button>
    </div>`;
    
    el.innerHTML = h;
}

// --- CUSTOM SUBJECT LOGIC ---
function openAddModal(sem) {
    document.getElementById('targetSem').value = sem;
    document.getElementById('newSubCode').value = "";
    document.getElementById('newSubName').value = "";
    document.getElementById('newSubCr').value = "";
    document.getElementById('addSubModal').style.display = 'block';
}

function closeAddModal() { document.getElementById('addSubModal').style.display = 'none'; }

function saveNewSubject() {
    const sem = document.getElementById('targetSem').value;
    const code = document.getElementById('newSubCode').value.trim();
    const name = document.getElementById('newSubName').value.trim();
    const cr = parseFloat(document.getElementById('newSubCr').value);
    const type = document.getElementById('newSubType').value;

    if(!code || !name || !cr) { alert("Please fill all fields"); return; }
    
    // Check duplicates
    const all = getAllSubjects(sem);
    if(all.find(s => s.c === code)) { alert("Subject code already exists!"); return; }

    if(!customDB[deg]) customDB[deg] = emptySemArr();
    customDB[deg][sem].push({c:code, n:name, cr:cr, t:type});
    
    localStorage.setItem('uovt_custom', JSON.stringify(customDB));
    closeAddModal();
    renderSem(sem);
    updateDash();
    showToast("Subject Added!");
}

function deleteCustomSubject(sem, code) {
    if(!confirm("Delete this subject?")) return;
    
    // Remove from custom DB
    customDB[deg][sem] = customDB[deg][sem].filter(s => s.c !== code);
    localStorage.setItem('uovt_custom', JSON.stringify(customDB));
    
    // Also clean up any grades saved for this subject
    if(db[deg][sem][code]) delete db[deg][sem][code];
    localStorage.setItem('uovt_final_db', JSON.stringify(db));

    renderSem(sem);
    updateDash();
    showToast("Subject Deleted");
}

function toggleIgnore(sem, code) {
    if(!ignoreDB[deg][sem]) ignoreDB[deg][sem] = {};
    const current = ignoreDB[deg][sem][code] === true;
    ignoreDB[deg][sem][code] = !current;
    localStorage.setItem('uovt_ign', JSON.stringify(ignoreDB));
    renderSem(sem); updateDash();
}

function save(sem, code, val) {
    if(!db[deg]) db[deg] = emptySem();
    db[deg][sem][code] = val;
    localStorage.setItem('uovt_final_db', JSON.stringify(db));
    renderSem(sem); updateDash(); showToast("Saved");
}

function updateDash() {
    let tCr=0, tPts=0;
    let labs=[], dGpa=[];
    
    // 1. Grade Counters (Specific Grades: A+, A, A-...)
    // අපි pts object එකේ තියෙන ඔක්කොම keys ටික අරගෙන 0න් පටන් ගමු
    let counts = {};
    Object.keys(pts).forEach(k => counts[k] = 0);

    Object.keys(curric[deg]).forEach(sem => {
        let sCr=0, sPts=0;
        const allSubs = getAllSubjects(sem);
        
        allSubs.forEach(s => {
            const isIgnored = ignoreDB[deg] && ignoreDB[deg][sem] && ignoreDB[deg][sem][s.c] === true;
            if(!isIgnored) {
                const g = db[deg][sem][s.c];
                
                // GPA Calculation
                if(s.t==='GPA' && g) { 
                    sPts += pts[g]*s.cr; 
                    sCr += s.cr; 
                }

                // Grade Counting (Specific)
                if(g && counts[g] !== undefined) {
                    counts[g]++;
                }
            }
        });
        const sg = sCr>0 ? (sPts/sCr).toFixed(2) : "0.00";
        document.getElementById(`sgpa-${sem}`).innerText = `SGPA: ${sg}`;
        if(sCr>0) { tCr+=sCr; tPts+=sPts; labs.push(sem.toUpperCase()); dGpa.push(sg); }
    });

    const fg = tCr>0 ? (tPts/tCr).toFixed(2) : "0.00";
    document.getElementById('d-gpa').innerText = fg;
    document.getElementById('d-cred').innerText = tCr;

    const cls = document.getElementById('d-class');
    const tar = document.getElementById('d-target');
    
    if(fg>=3.7) { cls.innerText="First Class"; cls.style.color="#059669"; tar.innerText="Maintain!"; }
    else if(fg>=3.3) { cls.innerText="Second Upper"; cls.style.color="#2563eb"; tar.innerText="Next: 3.70"; }
    else if(fg>=2.7) { cls.innerText="Second Lower"; cls.style.color="#d97706"; tar.innerText="Next: 3.30"; }
    else if(fg>=2.0) { cls.innerText="Pass"; cls.style.color="#4b5563"; tar.innerText="Next: 2.70"; }
    else { cls.innerText="Incomplete"; cls.style.color="#dc2626"; tar.innerText="Pass: 2.00"; }

    // 2. Update Charts
    if(c1) c1.destroy();
    const color = deg==='network'?'#059669':(deg==='multimedia'?'#db2777':'#2563eb');
    c1 = new Chart(document.getElementById('gpaChart'), { type:'line', data:{labels:labs, datasets:[{label:'GPA', data:dGpa, borderColor:color, tension:0.4, fill:true, backgroundColor:color+'22'}]}, options:{responsive:true,maintainAspectRatio:false} });

    if(c2) c2.destroy();
    c2 = new Chart(document.getElementById('credChart'), { type:'doughnut', data:{labels:['Done','Left'], datasets:[{data:[tCr, 167-tCr], backgroundColor:[color, '#e2e8f0']}]}, options:{responsive:true,maintainAspectRatio:false, cutout:'70%'} });

    // 3. Update Grade Legend (Specific +, - support)
    const legendEl = document.getElementById('grade-legend');
    if(legendEl) {
        let html = '';
        // අපිට ඕන පිළිවෙලට ලිස්ට් එක හදාගමු
        const order = ["A+","A","A-","B+","B","B-","C+","C","C-","D+","D","E","F"];
        
        order.forEach(gr => {
            if(counts[gr] > 0) {
                // Class එක තීරණය කරන්නේ මුල් අකුරෙන් (A+ නම් A කාණ්ඩයේ පාට)
                const mainClass = `g-${gr.charAt(0)}`; 
                html += `<div class="grade-pill ${mainClass}">${gr}: ${counts[gr]}</div>`;
            }
        });
        
        // මුකුත්ම නැත්නම්
        if(html === '') html = '<span style="font-size:0.8rem; opacity:0.5;">No grades yet</span>';
        
        legendEl.innerHTML = html;
    }
}

// PDF GENERATION
function openExportModal() { document.getElementById('exportModal').style.display = 'block'; }
function closeExportModal() { document.getElementById('exportModal').style.display = 'none'; }

// script.js වල generatePDF function එක මේකෙන් replace කරන්න

function generatePDF() {
    // 1. දැනට තියෙන Theme එක චෙක් කරගන්නවා
    const isDark = document.body.hasAttribute('data-theme');
    
    // 2. Dark Mode නම්, PDF එක හදන්න කලින් ඒක තාවකාලිකව ගලවනවා
    if (isDark) {
        document.body.removeAttribute('data-theme');
    }

    // පාට ටික (දැන් කොහොමත් Light Mode පාට තමයි variable එකට එන්නේ)
    const name = document.getElementById('profName').value;
    const index = document.getElementById('profIndex').value;
    const degree = document.getElementById('degSelect').options[document.getElementById('degSelect').selectedIndex].text;
    const finalGPA = document.getElementById('d-gpa').innerText;
    const finalClass = document.getElementById('d-class').innerText;
    const totalCred = document.getElementById('d-cred').innerText;
    const themeColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();

    let html = `
        <div style="font-family:'Helvetica', sans-serif; color:#000; padding:20px;">
            <style>
                .sem-container { margin-bottom: 20px; }
                .break-now { page-break-before: always; margin-top: 20px; }
                tr { page-break-inside: avoid; }
                /* PDF එක ඇතුලේ අනිවාර්යයෙන්ම කළු අකුරු බව තහවුරු කිරීම */
                table, th, td { border-color: #ccc !important; color: #000000 !important; }
                .grade-pill { color: #fff !important; }
            </style>
            
            <div style="text-align:center; margin-bottom:30px;">
                <h1 style="margin:0; font-size:24px; color:${themeColor}; text-transform:uppercase;">University of Vocational Technology</h1>
                <h3 style="margin:5px 0 15px 0; font-weight:normal; font-size:16px;">Faculty of Information Technology</h3>
                <div style="font-size:12px; font-style:italic; background:#f0f0f0; display:inline-block; padding:5px 15px; border-radius:15px; color:${themeColor};">Unofficial Academic Transcript</div>
            </div>
            
            <table style="width:100%; margin-bottom:25px; font-size:13px; border-collapse: collapse;">
                <tr><td style="font-weight:bold; width:120px; padding:5px;">Student Name:</td><td style="padding:5px;">${name}</td><td style="font-weight:bold; text-align:right; width:100px; padding:5px;">Index No:</td><td style="text-align:right; padding:5px;">${index}</td></tr>
                <tr><td style="font-weight:bold; padding:5px;">Degree:</td><td style="padding:5px;">B.Tech in ${degree}</td><td style="font-weight:bold; text-align:right; padding:5px;">Date:</td><td style="text-align:right; padding:5px;">${new Date().toLocaleDateString()}</td></tr>
            </table>

            <div style="background:#f0f0f0; border-left:5px solid ${themeColor}; padding:20px; margin-bottom:25px; border-radius:4px;">
                <div style="font-size:16px; font-weight:bold; color:${themeColor}; margin-bottom:10px;">Overall Performance</div>
                <div style="display:flex; justify-content:space-between; font-size:14px; font-weight:bold;">
                    <span>GPA: ${finalGPA}</span>
                    <span>Class: ${finalClass}</span>
                    <span>Credits: ${totalCred}</span>
                </div>
            </div>
    `;

    const years = [
        { id: 'exp-year1', sems: ['sem1', 'sem2'] },
        { id: 'exp-year2', sems: ['sem3', 'sem4'] },
        { id: 'exp-year3', sems: ['sem5', 'sem6'] }
    ];

    let isFirstBlock = true;

    years.forEach(year => {
        if(document.getElementById(year.id).checked) {
            year.sems.forEach(sem => {
                const semData = getAllSubjects(sem);
                
                let sCr=0, sPts=0;
                let rows = '';
                semData.forEach(sub => {
                    const isIgnored = ignoreDB[deg] && ignoreDB[deg][sem] && ignoreDB[deg][sem][sub.c] === true;
                    if(!isIgnored) {
                        const g = db[deg][sem][sub.c];
                        let gpVal = '-';
                        if(sub.t==='GPA' && g) { sPts += pts[g]*sub.cr; sCr += sub.cr; gpVal=pts[g].toFixed(2); }
                        else if(sub.t==='NG') gpVal='N/A';
                        
                        rows += `
                            <tr style="border-bottom:1px solid #ccc;">
                                <td style="padding:8px; font-size:12px;">${sub.c} ${sub.isCustom ? '*' : ''}</td>
                                <td style="padding:8px; font-size:12px;">${sub.n}</td>
                                <td style="padding:8px; text-align:center; font-size:12px;">${sub.cr}</td>
                                <td style="padding:8px; text-align:center; font-weight:bold; font-size:12px;">${g || '-'}</td>
                                <td style="padding:8px; text-align:right; font-size:12px;">${gpVal}</td>
                            </tr>
                        `;
                    }
                });

                const sgpa = sCr>0 ? (sPts/sCr).toFixed(2) : "0.00";
                const breakClass = isFirstBlock ? '' : 'break-now';
                isFirstBlock = false;

                html += `
                    <div class="sem-container ${breakClass}">
                        <div style="background:${themeColor}; color:white; padding:8px 12px; font-weight:bold; font-size:13px; display:flex; justify-content:space-between; border-radius:4px 4px 0 0; -webkit-print-color-adjust: exact;">
                            <span>${sem.toUpperCase()}</span>
                            <span>SGPA: ${sgpa}</span>
                        </div>
                        <table style="width:100%; border-collapse:collapse; border:1px solid #ccc; table-layout: fixed;">
                            <thead>
                                <tr style="background:#f0f0f0; font-weight:bold; font-size:12px; -webkit-print-color-adjust: exact;">
                                    <th style="padding:8px; border-bottom:1px solid #ccc; width:15%; color:#000;">Code</th>
                                    <th style="padding:8px; border-bottom:1px solid #ccc; width:50%; color:#000;">Module</th>
                                    <th style="padding:8px; text-align:center; border-bottom:1px solid #ccc; width:10%; color:#000;">Credits</th>
                                    <th style="padding:8px; text-align:center; border-bottom:1px solid #ccc; width:10%; color:#000;">Grade</th>
                                    <th style="padding:8px; text-align:right; border-bottom:1px solid #ccc; width:15%; color:#000;">GPV</th>
                                </tr>
                            </thead>
                            <tbody>${rows}</tbody>
                        </table>
                    </div>
                `;
            });
        }
    });

html += `
    <div style="border-top:1px solid #ccc; margin-top:30px; padding-top:10px; text-align:center; font-size:10px; color:#999;">
        <span>Generated by UoVT IT Result Manager</span>
    </div>
</div>`;

    const opt = {
        margin: 10,
        filename: `UoVT_Result_Report_${index}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(html).save().then(() => {
        closeExportModal();
        showToast("PDF Downloaded!");
    }).finally(() => {
        // 3. වැඩේ ඉවර වුණාම තිබ්බ Theme එක ආපහු දානවා
        if (isDark) {
            document.body.setAttribute('data-theme', 'dark');
        }
    });
}

function saveProfile() {
    const p = { name: document.getElementById('profName').value, index: document.getElementById('profIndex').value };
    localStorage.setItem('uovt_prof', JSON.stringify(p));
    showToast("Profile Updated");
}

function resetSem(sem) {
    if(confirm(`Reset ${sem}?`)) { db[deg][sem] = {}; localStorage.setItem('uovt_final_db', JSON.stringify(db)); renderSem(sem); updateDash(); }
}

function resetAll() { if(confirm("Factory Reset?")) { localStorage.clear(); location.reload(); } }
// IMPORTANT: Updated Export/Import to include Custom Subjects
function exportData() { 
    const backup = {
        db: db,
        custom: customDB, // Save custom subjects too
        ign: ignoreDB
    };
    const a = document.createElement('a'); 
    a.href = "data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(backup)); 
    a.download="sis_bkp_full.json"; 
    a.click(); 
}

function importData(inp) { 
    const r = new FileReader(); 
    r.onload=e=>{ 
        try{ 
            const data = JSON.parse(e.target.result);
            // Handle both old and new backup formats
            if(data.db) {
                db = data.db;
                customDB = data.custom || { software: emptySemArr(), network: emptySemArr(), multimedia: emptySemArr() };
                ignoreDB = data.ign || { software: emptySem(), network: emptySem(), multimedia: emptySem() };
            } else {
                // Fallback for old backups
                db = data;
            }
            
            localStorage.setItem('uovt_final_db', JSON.stringify(db)); 
            localStorage.setItem('uovt_custom', JSON.stringify(customDB)); 
            localStorage.setItem('uovt_ign', JSON.stringify(ignoreDB)); 
            
            renderAll(); 
            showToast("Restored!");
        }catch(e){alert('Error loading file');} 
    }; 
    r.readAsText(inp.files[0]); 
}

function calcTarget() { 
    const tg = parseFloat(document.getElementById('tGPA').value);
    if(!tg) return;
    let cP=0, cC=0, rC=0;
    Object.keys(curric[deg]).forEach(sm=>{ 
        // UPDATE: Use getAllSubjects here too
        const allSubs = getAllSubjects(sm);
        allSubs.forEach(s=>{ 
            const isIgnored = ignoreDB[deg] && ignoreDB[deg][sm] && ignoreDB[deg][sm][s.c] === true;
            if(!isIgnored && s.t==='GPA') { 
                if(db[deg][sm][s.c]) { cP+=pts[db[deg][sm][s.c]]*s.cr; cC+=s.cr; } 
                else rC+=s.cr; 
            } 
        }) 
    });
    const req = ((tg*(cC+rC))-cP)/rC;
    document.getElementById('calcRes').innerText = rC===0 ? "Done!" : (req>4 ? "Impossible" : (req<0 ? "Done!" : `Need Avg: ${req.toFixed(2)}`));
}

function nav(id, btn) {
    document.querySelectorAll('.view-section').forEach(e=>e.classList.remove('active')); document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(e=>e.classList.remove('active')); btn.classList.add('active');
    document.getElementById('pageTitle').innerText = btn.innerText;
    if(window.innerWidth<=768) toggleMenu();
}

function toggleMenu() { 
    const sb = document.getElementById('sidebar');
    const ov = document.getElementById('overlay');
    if(sb.classList.contains('open')) {
        sb.classList.remove('open');
        ov.style.display = 'none';
    } else {
        sb.classList.add('open');
        ov.style.display = 'block';
    }
}

function toggleTheme() { 
    const isDark = document.body.hasAttribute('data-theme');
    
    if (isDark) {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('uovt_theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('uovt_theme', 'dark');
    }
    
    // Chart Colors Update කිරීම (Dark mode නම් සුදු අකුරු, නැත්නම් කළු)
    updateDash(); 
    
    // Chart.js text color change fix
    Chart.defaults.color = isDark ? '#64748b' : '#94a3b8'; 
    Chart.defaults.borderColor = isDark ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)';
}

// Page එක Load වෙද්දි කලින් තිබ්බ Theme එක ගන්න මේ කෑල්ල init() function එක ඇතුලට දාන්න
// (init function එකේ මුලටම දාන්න)
/*
    if(localStorage.getItem('uovt_theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        Chart.defaults.color = '#94a3b8';
    }
*/
function showToast(m) { const t=document.getElementById('toast'); t.innerText=m; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2000); }

init();

