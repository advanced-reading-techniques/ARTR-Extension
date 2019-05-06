// const fs = require('fs');

function handleFileSelect(event) {
  const file = event.target.files;
  const name = file[0].name;
  const size = file[0].size;
  const type = file[0].type;
  const dateModified = file[0].lastModifiedDate
    ? file[0].lastModifiedDate.toLocaleDateString()
    : 'n/a';

  document.querySelector('#file-info').innerHTML = `
      <li>Name: ${name} </li>
      <li>Size: ${size} bytes </li>
      <li>Type: ${type} </li>
      <li>Last Modified: ${dateModified} </li>
  `;

  const reader = new FileReader();
  reader.onload = function(event) {
    // NOTE: event.target point to FileReader
    var contents = event.target.result;
    var lines = contents.split('\n');
    //////
    document.querySelector('#file-content').innerHTML = contents;
  };

  reader.readAsText(file[0]);
}

document
  .querySelector('#text-file')
  .addEventListener('change', handleFileSelect, false);
