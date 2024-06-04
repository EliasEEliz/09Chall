// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `trim()`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    Licensed under the $(license) license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${renderLicenseBadge(data.license)}
## Table Of contents
* [Description](#description)
* [Email](#email)
* [Contact-Me](#contact-me)
${renderLicenseLink(data.license)}
## Description
${data.description}
## Contact-Me
* Name - ${data.name}
* Email - ${data.email}
* Github -[${data.author}](https://github.com/${data.author}/)
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
