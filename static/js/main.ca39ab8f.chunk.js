(this.webpackJsonptandem=this.webpackJsonptandem||[]).push([[0],{12:function(e,t,r){"use strict";r.r(t);var o=r(0),i=r(1),c=r(5),a=r.n(c),n=r(2);function s(e){var t=e.handleUpload,r=e.fetchData,c=e.setModal,a=Object(i.useState)(""),s=Object(n.a)(a,2),l=s[0],h=s[1];return Object(i.useEffect)((function(){c(!0)}),[c]),Object(o.jsx)("div",{className:"upload-page",children:Object(o.jsxs)("div",{className:"welcome-buttons",children:[Object(o.jsxs)("label",{className:"welcome-button",htmlFor:"file",children:[" Upload JSON File",Object(o.jsx)("input",{className:"upload",id:"file",type:"file",name:"file",onChange:t})]}),Object(o.jsx)("div",{className:"welcome-button",onClick:function(){return r(l)},children:Object(o.jsx)("input",{className:"api",type:"text",placeholder:"Paste JSON API link here",value:l,onChange:function(e){return h(e.target.value)}})}),Object(o.jsx)("div",{className:"welcome-button",onClick:function(){return c(!0)},children:"See Sample State"})]})})}function l(e){var t=e.highScore,r=e.clearHighScore,c=e.quickStart,a=e.handleUpload,l=e.fetchData,h=e.setModal,u=Object(i.useState)(!1),d=Object(n.a)(u,2),m=d[0],f=d[1],b=Object(o.jsxs)("div",{className:"welcome-buttons",children:[Object(o.jsx)("div",{className:"welcome-button",onClick:c,children:"Quickstart"}),Object(o.jsx)("div",{className:"welcome-button",onClick:function(){return f(!0)},children:"Use my own file"})]});return Object(o.jsxs)("div",{className:"welcome",children:[Object(o.jsxs)("div",{className:"welcome-high",children:["High Score: ".concat(t),Object(o.jsx)("div",{className:"welcome-high-button",onClick:r,children:"Clear High Score"})]}),Object(o.jsx)("h1",{children:"Darrick's Trivia Game!"}),m?Object(o.jsx)(s,{handleUpload:a,fetchData:l,setModal:h}):b]})}function h(e){var t=e.setModal,r=Object(o.jsxs)("pre",{className:"sample-state",children:["Use a file with this sample state:",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),JSON.stringify({question:"What is 1+1?",correct:"2",incorrect:["3","4","5"]},void 0,2)]});return Object(o.jsx)("div",{className:"modal-background",onClick:function(){return t(!1)},children:Object(o.jsx)("div",{className:"modal-child",onClick:function(e){return e.stopPropagation()},children:r})})}var u=r(3);function d(){return Object(o.jsxs)("div",{className:"social",children:[Object(o.jsx)("a",{href:"https://www.linkedin.com/in/darrick-yong/",children:Object(o.jsx)(u.c,{className:"linkedin"})}),Object(o.jsx)("a",{href:"https://github.com/darrickyong",children:Object(o.jsx)(u.b,{className:"github"})}),Object(o.jsx)("a",{href:"https://angel.co/u/darrick-yong",children:Object(o.jsx)(u.a,{className:"angel"})})]})}var m=function(e){var t=e.currentQuestion,r=e.choices,c=e.increment,a=Object(i.useState)(""),s=Object(n.a)(a,2),l=s[0],h=s[1],u=Object(i.useState)(!1),d=Object(n.a)(u,2),m=d[0],f=d[1],b=function(e){m||(f(!m),h(e.target.innerText))},g=Object(o.jsx)("div",{className:"question-next",style:{visibility:m?"visible":"hidden"},onClick:function(e){e.preventDefault(),l===t.correct&&c("score"),c("counter"),h(""),f(!m)},children:"Next"});return Object(o.jsxs)("div",{className:"question",children:[t.question,r.map((function(e,r){return Object(o.jsx)("div",{className:m&&e===t.correct?"question-choice correct":m&&e===l?"question-choice incorrect":"question-choice",onClick:b,children:e},r)})),g]})};var f=function(e){var t=e.score,r=e.resetGame,i=e.setTriviaData,c=e.highScore,a=e.setHighScore;(!localStorage.highScore||t>localStorage.highScore)&&(localStorage.highScore=t);var n,s=Math.max(c,localStorage.highScore);switch(!0){case t<3:n="Yikes...";break;case t<7:n="You can do better...";break;case t<10:n="Almost there...";break;default:n="Perfect score!"}return Object(o.jsxs)("div",{className:"result",children:[Object(o.jsx)("div",{className:"score",children:"High Score: ".concat(s)}),Object(o.jsx)("div",{className:"score",children:"You scored ".concat(t," out of 10. ").concat(n)}),Object(o.jsxs)("div",{className:"result-buttons",children:[Object(o.jsx)("div",{className:"result-button",onClick:r,children:"Retry with same questions"}),Object(o.jsx)("div",{className:"result-button",onClick:function(){a(s),i([])},children:"Start Over"})]})]})};var b=function(e){var t=e.triviaData,r=e.setTriviaData,c=e.highScore,a=e.setHighScore,s=function(e,t){for(var r=new Array(t),o=e.length,i=new Array(o);t--;){var c=Math.floor(Math.random()*o);r[t]=e[c in i?i[c]:c],i[c]=--o in i?i[o]:o}return r},l=Object(i.useState)(0),h=Object(n.a)(l,2),u=h[0],d=h[1],b=Object(i.useState)(0),g=Object(n.a)(b,2),p=g[0],w=g[1],j=Object(i.useState)(s(t,10)),y=Object(n.a)(j,2),v=y[0],O=(y[1],v[u]),S=O?O.incorrect.concat(O.correct):null,q=O?s(S,4):null;return O?Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)("div",{className:"game-counter",children:"Question ".concat(u+1," of 10")}),Object(o.jsx)(m,{currentQuestion:O,choices:q,increment:function(e){"score"===e?w(p+1):"counter"===e&&d(u+1)}})]}):Object(o.jsx)(f,{score:p,highScore:c,setHighScore:a,resetGame:function(){d(0),w(0)},setTriviaData:r})};var g=function(e){var t=e.errors;return Object(o.jsx)("div",{className:"errors",style:{visibility:t.length?"visible":"hidden"},children:t.map((function(e,t){return Object(o.jsx)("div",{children:e},t)}))})},p=r(6);var w=function(){var e=Object(i.useState)(!1),t=Object(n.a)(e,2),r=t[0],c=t[1],a=Object(i.useState)([]),s=Object(n.a)(a,2),u=s[0],m=s[1],f=Object(i.useState)([]),w=Object(n.a)(f,2),j=w[0],y=w[1],v=Object(i.useState)(localStorage.highScore||0),O=Object(n.a)(v,2),S=O[0],q=O[1],k=function(e){if(!(e instanceof Array))return!1;var t="string"==typeof e.question,r="string"==typeof e.correct,o=e.incorrect.every((function(e){return"string"==typeof e}))&&3===e.incorrect.length;return t&&r&&o},x=function(e){var t=JSON.parse(e.target.result);k(t[0])?(y([]),m(t)):y(["Please check that the JSON format is correct."])};return Object(o.jsxs)("div",{children:[r?Object(o.jsx)(h,{setModal:c}):null,Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(d,{}),u.length?Object(o.jsx)(b,{triviaData:u,setTriviaData:m,highScore:S,setHighScore:q}):Object(o.jsx)(l,{highScore:S,clearHighScore:function(){q(0),localStorage.highScore=0},quickStart:function(e){m(p)},handleUpload:function(e){var t=new FileReader;if(t.onload=x,"application/json"===e.target.files[0].type)t.readAsText(e.target.files[0]);else{var r=e.target.files[0].type.split("/")[1].toUpperCase();y(["You uploaded a ".concat(r," file. Please upload a JSON file instead.")])}},fetchData:function(e){e.length&&fetch(e).then((function(e){return e.json()})).then((function(e){k(e[0])?(y([]),m(e)):y(["Please check that the JSON format is correct."])}))},setModal:c}),Object(o.jsx)(g,{errors:j})]})]})};a.a.render(Object(o.jsx)(w,{}),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"question":"What was Tandem previous name?","incorrect":["Tandem","Burger Shack","Extraordinary Humans"],"correct":"Devmynd"},{"question":"In Shakespeare\'s play Julius Caesar, Caesar\'s last words were...","incorrect":["Iacta alea est!","Vidi, vini, vici","Aegri somnia vana"],"correct":"Et tu, Brute?"},{"question":"A group of tigers are referred to as:","incorrect":["Chowder","Pride","Destruction"],"correct":"Ambush"},{"question":"What is the top speed an average cat can travel?","incorrect":["42 mph","13 mph","9 mph"],"correct":"31 mph"},{"question":"A cat can jump to _____ times its own height:","incorrect":["3","9","7"],"correct":"5"},{"question":"What is the only letter that doesn\'t appear in a US state name?","incorrect":["M","Z","X"],"correct":"Q"},{"question":"What is the name for a cow-bison hybrid?","incorrect":["Cowson","Bicow","Mooson"],"correct":"Beefalo"},{"question":"What is the largest freshwater lake in the world?","incorrect":["Lake Baikal","Lake Michigan","Lake Victoria"],"correct":"Lake Superior"},{"question":"In a website address bar, what does WWW stand for?","incorrect":["Wild Wild West","War World Web","What what what"],"correct":"World Wide Web"},{"question":"In a game of bingo, what number is represented by the name two little ducks?","incorrect":["20","55","77"],"correct":"22"},{"question":"According to Greek mythology, who was the first woman on Earth?","incorrect":["Lilith","Eve","Hera"],"correct":"Pandora"},{"question":"In which European city would you find Orly airport?","incorrect":["London","Belgium","Munich"],"correct":"Paris"},{"question":"Where would you find the Sea of Tranquility?","incorrect":["California","Siberia","China"],"correct":"The Moon"},{"question":"Which artist painted \'Girl with a Pearl Earrin\'?","incorrect":["Van Gogh","Picasso","Da Vinci"],"correct":"Vermeer"},{"question":"What is the official name for the \'hashtag\' symbol?","incorrect":["Number sign","Hash Sign","Pound"],"correct":"Octothorpe"},{"question":"Not American at all, where is apple pie from?","incorrect":["Japan","Ethiopia","Canada"],"correct":"England"},{"question":"What is the national animal of Scotland?","incorrect":["Bear","Rabbit","Seal"],"correct":"Unicorn"},{"question":"Where in the world is the only place where Canada is *due south*","incorrect":["Alaska","Russia","Washington"],"correct":"Detroit"},{"question":"Approximately how many grapes go into a bottle of wine?","incorrect":["500","200","1000"],"correct":"700"},{"question":"How much does a US One Dollar Bill cost to make?","incorrect":["$0.25","$1","$5"],"correct":"$0.05"},{"question":"The Vatican bank has the only ATM in the world that allows users to do what?","incorrect":["Receive withdrawls in rosary beads","Vote for the Pope","Purchase indulgences"],"correct":"Perform transactions in Latin"},{"question":"In a standard set of playing cards, which is the only king without a moustache?","correct":"Hearts","incorrect":["Spades","Diamonds","Clubs"]},{"question":"In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?","correct":"Key","incorrect":["Sword","Pen","Cellphone"]},{"question":"What is the defining characteristic of someone who is described as hirsute?","correct":"Hairy","incorrect":["Rude","Funny","Tall"]},{"question":"Scotch whisky and Drambuie make up which cocktail?","correct":"Rusty Nail","incorrect":["Screwdriver","Sex on the Beach","Manhattan"]},{"question":"On a dartboard, what number is directly opposite No. 1?","correct":"19","incorrect":["20","12","15"]},{"question":"What alcoholic drink is made from molasses?","correct":"Rum","incorrect":["Gin","Vodka","Whisky"]},{"question":"Which American president appears on a one dollar bill?","correct":"George Washington","incorrect":["Thomas Jefferson","Abraham Lincoln","Benjamin Franklin"]},{"question":"Which language is NOT Indo-European?","correct":"Hungarian","incorrect":["Russian","Greek","Latvian"]},{"question":"What geometric shape is generally used for stop signs?","correct":"Octagon","incorrect":["Hexagon","Circle","Triangle"]},{"question":"What is the name of the Jewish New Year?","correct":"Rosh Hashanah","incorrect":["Elul","New Year","Succoss"]},{"question":"Which one of the following rhythm games was made by Harmonix?","correct":"Rock Band","incorrect":["Meat Beat Mania","Guitar Hero Live","Dance Dance Revolution"]},{"question":"In 2013 how much money was lost by Nigerian scams?","correct":"$12.7 Billion","incorrect":["$95 Million","$956 Million","$2.7 Billion"]},{"question":"A factiod is what?","correct":"A falsehood","incorrect":["Useless trivia","A tiny fact","A scientific figure"]},{"question":"Which of the following buildings is example of a structure primarily built in the Art Deco architectural style?","correct":"Niagara Mohawk Building","incorrect":["Taipei 101","One Detroit Center","Westendstrasse 1"]},{"question":"Which Italian automobile manufacturer gained majority control of U.S. automobile manufacturer Chrysler in 2011?","correct":"Fiat","incorrect":["Maserati","Alfa Romeo","Ferrari"]},{"question":"What is the romanized Japanese word for \'university\'?","correct":"Daigaku","incorrect":["Toshokan","Jimusho","Shokudou"]},{"question":"What is the Swedish word for \'window\'?","correct":"Fonster","incorrect":["Hal","Skarm","Ruta"]},{"question":"What is the romanized Chinese word for \'airplane\'?","correct":"Feiji","incorrect":["Qiche","Zongxian","Huojian"]},{"question":"What is the Italian word for \'tomato\'?","correct":"Pomodoro","incorrect":["Aglio","Cipolla","Peperoncino"]},{"question":"Which of the following languages does NOT use gender as a part of its grammar?","correct":"Turkish","incorrect":["German","Danish","Polish"]},{"question":"Which American-owned brewery led the country in sales by volume in 2015?","correct":"D. G. Yuengling and Son, Inc","incorrect":["Anheuser Busch","Boston Beer Company","Miller Coors"]},{"question":"The new One World Trade Center in Manhattan, New York City was designed by which architect? ","correct":"David Childs","incorrect":["Bjarke Ingels","Michael Arad","Fumihiko Maki"]},{"question":"According to Sherlock Holmes, \'If you eliminate the impossible, whatever remains, however improbable, must be the...\'","correct":"Truth","incorrect":["Answer","Cause","Source"]},{"question":"What was the first ever London Underground line to be built?","correct":"Metropolitan Line","incorrect":["Circle Line","Bakerloo Line","Victoria Line"]},{"question":"According to Fair Works Australia, how long do you have to work to get Long Service Leave?","correct":"7 years","incorrect":["2 years","8 years","6 months"]},{"question":"According to the 2014-2015 Australian Bureau of Statistics, what percentage of Australians were born overseas?","correct":"28%","incorrect":["13%","20%","7%"]},{"question":"In a 1994 CBS interview, Microsoft co-founder Bill Gates performed what unusual trick on camera?","correct":"Jumping over an office chair","incorrect":["Jumping backwards over a desk","Standing on his head","Typing on a keyboard during a handstand"]},{"question":"Apple co-founder Steve Jobs died from complications of which form of cancer?","correct":"Pancreatic","incorrect":["Bone","Liver","Stomach"]},{"question":"Computer manufacturer Compaq was acquired for $25 billion dollars in 2002 by which company?","correct":"Hewlett-Packard","incorrect":["Toshiba","Asus","Dell"]},{"question":"Which slogan did the fast food company, McDonald\'s, use before their \'I\'m Lovin\' It\' slogan?","correct":"We Love to See You Smile","incorrect":["Why Pay More!?","Have It Your Way","Making People Happy Through Food"]},{"question":"Which candy is NOT made by Mars?","correct":"Almond Joy","incorrect":["M&M\'s","Twix","Snickers"]},{"question":"Which company\'s original slogan was \'Don\'t be evil\'?","correct":"Google","incorrect":["Apple","Yahoo","Microsoft"]},{"question":"The Quadrangularis Reversum is best described as which of the following?","correct":"A percussion instrument","incorrect":["A building in Oxford University","A chess move","A geometric theorem"]},{"question":"Which of the following is the IATA code for Manchester Airport?","correct":"MAN","incorrect":["EGLL","LHR","EGCC"]},{"question":"According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?","correct":"Plum","incorrect":["Apple","Peach","Pear"]},{"question":"Which church\'s interior in Vatican City was designed in 1503 by renaissance architects including Bramante, Michelangelo and Bernini?","correct":"St. Peter\'s Basilica","incorrect":["Catania Cathedral","St. Mark\'s Basilica","The Duomo of Florence"]},{"question":"Which American manufactured submachine gun was informally known by the American soldiers that used it as \'Grease Gun\'?","correct":"M3","incorrect":["Colt 9mm","Thompson","MAC-10"]},{"question":"Located in Chile, El Teniente is the world\'s largest underground mine for what metal?","correct":"Copper","incorrect":["Iron","Nickel","Silver"]},{"question":"A statue of Charles Darwin sits in what London museum?","correct":"Natural History Museum","incorrect":["Tate","British Museum","Science Museum"]},{"question":"How many furlongs are there in a mile?","correct":"Eight","incorrect":["Two","Four","Six"]},{"question":"What is the weight of a Gold Bar in Fallout: New Vegas?","correct":"35 Pounds","incorrect":["30 Pounds","40 Pounds","32.50 Pounds"]},{"question":"What is the closest planet to our solar system\'s sun?","correct":"Mercury","incorrect":["Mars","Jupiter","Earth"]},{"question":"What is the name of NASA\'s most famous space telescope?","correct":"Hubble Space Telescope","incorrect":["Big Eye","Death Star","Millenium Falcon"]},{"question":"Earth is located in which galaxy?","correct":"The Milky Way Galaxy","incorrect":["The Mars Galaxy","The Galaxy Note","The Black Hole"]},{"question":"The word \'abulia\' means which of the following?","correct":"The inability to make decisions","incorrect":["The inability to stand up","The inability to concentrate on anything","A feverish desire to rip one\'s clothes off"]},{"question":"The word \'astasia\' means which of the following?","correct":"The inability to stand up","incorrect":["The inability to make decisions","The inability to concentrate on anything","A feverish desire to rip one\'s clothes off"]},{"question":"The Canadian $1 coin is colloquially known as a what?","correct":"Loonie","incorrect":["Boolie","Foolie","Moodie"]},{"question":"When was the Playstation 3 released?","correct":"November 11, 2006","incorrect":["January 8, 2007","December 25, 2007","July 16, 2006"]}]')}},[[12,1,2]]]);
//# sourceMappingURL=main.ca39ab8f.chunk.js.map