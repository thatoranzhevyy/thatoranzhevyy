const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
        '█'.repeat(passedProgressBarIndex) +
        '░'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `${progressBar}`
}

const readme = `\
<div align="center">
  <img src="https://assets.website-files.com/5e51b3b0337309d672efd94c/5e51cc5933d368febc351897_footer-img.svg">
</div>

⏳ Year progress: ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

You can also watch the progress on [twitter](https://twitter.com/year_progress)
---

[![Progress Bar CI](https://github.com/thatoranzhevyy/thatoranzhevyy/actions/workflows/node.js.yml/badge.svg)](https://github.com/thatoranzhevyy/thatoranzhevyy/actions/workflows/node.js.yml)
`

console.log(readme)
