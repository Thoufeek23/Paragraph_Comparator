function compareParagraphs() {
    const para1 = document.getElementById("paragraph1").value.trim();
    const para2 = document.getElementById("paragraph2").value.trim();
    const resultDiv = document.getElementById("highlightedText");
  
    // Split both paragraphs into words
    const words1 = para1.split(/\s+/);
    const words2 = para2.split(/\s+/);
  
    // Arrays to hold highlighted text for each paragraph
    let highlightedPara1 = "";
    let highlightedPara2 = "";
  
    const maxLength = Math.max(words1.length, words2.length);
  
    for (let i = 0; i < maxLength; i++) {
      // Check for mismatches and highlight if words are different
      if (words1[i] !== words2[i]) {
        highlightedPara1 += `<span class="diff">${words1[i] || ""}</span> `;
        highlightedPara2 += `<span class="diff">${words2[i] || ""}</span> `;
      } else {
        highlightedPara1 += `${words1[i] || ""} `;
        highlightedPara2 += `${words2[i] || ""} `;
      }
    }
  
    // Display results in the result container
    resultDiv.innerHTML = `
      <h3>Paragraph 1</h3>
      <p>${highlightedPara1.trim()}</p>
      <h3>Paragraph 2</h3>
      <p>${highlightedPara2.trim()}</p>
    `;
  }
  