const { exec } = require('child_process');

dir = exec("npm audit", function (err, stdout, stderr) {
    console.log(stdout);
    const criticalVulnerabilities = stdout.match(/\d+ critical/g)[0].match(/\d+/)[0];
    const highVulnerabilities = stdout.match(/\d+ high/g)[0].match(/\d+/)[0];
    const color = criticalVulnerabilities > 0 ||  highVulnerabilities > 0 ? '\x1b[31m' : '\x1b[32m';
    const reset = '\x1b[0m';
    const bold = '\x1b[1m';
    console.log('=============================== Vulnerability Report ===============================');
    console.log(`${bold}${color}Critical Vulnerabilities:\t${criticalVulnerabilities} ${reset}`);
    console.log(`${bold}${color}High Vulnerabilities:\t\t${highVulnerabilities} ${reset}`);
    console.log('================================================================================');
    if(criticalVulnerabilities > 0 ||  highVulnerabilities > 0){
        process.exit(1);
    }
});

