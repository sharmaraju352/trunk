class CoverageTotalReporter {
    constructor(opts) {
        this.opts = opts;
    }

    getJestTotal() {
        const { lines, statements, functions, branches } = this.summary;
        const total = (lines.pct + statements.pct + functions.pct + branches.pct) / 4;
        return total.toFixed(2);
    }

    printTotal(total) {
        const prefix = 'Jest Total';
        const color = total < 60 ? '\x1b[31m' : '\x1b[32m';
        const reset = '\x1b[0m';
        const bold = '\x1b[1m';
        const smallPercentage = total < 60 ? '(< 60%)' : '';

        const label = prefix + Array(20 - prefix.length).fill(' ').join('');
        const output = `${label}: ${total}%`;

        console.log('=============================== Coverage Total ===============================');
        console.log(`${bold}${color}${output} ${smallPercentage}${reset}`);
        console.log('================================================================================');
        if(total < 60) {
            process.exit(1);
        }
    }

    onRunComplete(_, report) {
        if (!report.coverageMap) return;

        const { data: summary } = report.coverageMap.getCoverageSummary();
        this.summary = summary;

        this.printTotal(this.getJestTotal());
    }
}

module.exports = CoverageTotalReporter;
