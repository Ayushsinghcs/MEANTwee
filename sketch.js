function setup() {
  noCanvas();
  let background = chrome.extension.getBackgroundPage();
  let word = background.word.trim();
let para=createP('Searching for word:'+word);
  para.style('border','2px');

  para.style('color', '#ffffff');
  para.style('font-size', '24px');
  para.style('font-weight', '400px');
  para.style('margin-top', '30px');
  para.style('padding', 'auto');



   para.style('font-family', '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif');




  let url = `https://api.wordnik.com/v4/word.json/${word}/definitions?limit=1&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=7caa0a2957cf4b604e30c0b61cc0df2d169c259bb12950ef9`
 let url2 = `https://api.wordnik.com/v4/word.json/${word}/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=4&api_key=7caa0a2957cf4b604e30c0b61cc0df2d169c259bb12950ef9`
 let ur= `https://api.wordnik.com/v4/word.json/${word}/relatedWords?useCanonical=false&relationshipTypes=antonym&limitPerRelationshipType=5&api_key=7caa0a2957cf4b604e30c0b61cc0df2d169c259bb12950ef9`

  url = url.replace(/\s+/g, '');
  url2 = url2.replace(/\s+/g, '');

  loadJSON(url, gotData);
  loadJSON(url2,gotSameData);
  loadJSON(ur,gotReverseData);

  function gotData(data) {
    var myDiv =createP('Definition : '+data[0].text);
    myDiv.style('color', '#ffffff');
    myDiv.style('font-size', '20px');
    myDiv.style('border-radius', '5px');
    myDiv.style('padding','auto');
    myDiv.style('font-familt','inherit');
    myDiv.style('display','block');
    myDiv.style('font-weight','350');


  }

  function gotSameData(data) {
    var myDiv =createP('Synonyms : '+data[0].words);
    myDiv.style('color', '#ffffff');
    myDiv.style('font-size', '20px');
    myDiv.style('border-radius', '5px');
    myDiv.style('padding','auto');
    myDiv.style('font-familt','inherit');
    myDiv.style('display','block');

    myDiv.style('font-weight','350');


  }

  function gotReverseData(data) {
    var myDiv =createP('Antonyms : '+data[0].words);
    myDiv.style('color', '#ffffff');
    myDiv.style('font-size', '20px');
    myDiv.style('border-radius', '5px');
    myDiv.style('padding','auto');
    myDiv.style('font-familt','inherit');
    myD.style('margin-top', '30px');
    myDiv.style('display','block');

    myDiv.style('font-weight','350');


  }


}
