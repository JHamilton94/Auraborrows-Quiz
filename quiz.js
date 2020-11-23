
  //Quiz pieces
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  
  //Possible Styles
  const styles = {
	GEODETRANS: 'geode transcendance',
	FATEDORION: 'fated orion',
	RULINGHARV: 'ruling harvest',
	EARTHCHERUB: 'earthbound cherub',
	TAPEREDAURORA: 'tapered aurora',
	CARNIVALREV: 'carnival reverie',
	SANDSTORMBOHO: 'sandstorm bohemian',
	ANTSIREN: 'antique siren',
	ROOTMEN: 'rooted menagerie',
	VOLTAGEROYALE: 'voltage royale',
	DARKEDEN: 'dark eden',
	HIGHFREQ: 'high frequency'
  }	  
  
  //Styles linked to store page
  const styleLinkMap = new Map();
  styleLinkMap.set(styles.GEODETRANS,    'https://auraborrows.com/shopnow/geode-transendence');
  styleLinkMap.set(styles.FATEDORION,    'https://auraborrows.com/shopnow/fated-orion');
  styleLinkMap.set(styles.RULINGHARV,    'https://auraborrows.com/shopnow/ruling-harvest');
  styleLinkMap.set(styles.EARTHCHERUB,   'https://auraborrows.com/shopnow/earthbound-cherub');
  styleLinkMap.set(styles.TAPEREDAURORA, 'https://auraborrows.com/shopnow/tapered-aurora');
  styleLinkMap.set(styles.CARNIVALREV,   'https://auraborrows.com/shopnow/carnival-reverie');
  styleLinkMap.set(styles.SANDSTORMBOHO, 'https://auraborrows.com/shopnow/sandstorm-bohemian');
  styleLinkMap.set(styles.ANTSIREN,      'https://auraborrows.com/shopnow/antique-siren');
  styleLinkMap.set(styles.ROOTMEN,       'https://auraborrows.com/shopnow/rooted-menagerie');
  styleLinkMap.set(styles.VOLTAGEROYALE, 'https://auraborrows.com/shopnow/voltage-royale');
  styleLinkMap.set(styles.DARKEDEN,      'https://auraborrows.com/shopnow/dark-eden');
  styleLinkMap.set(styles.HIGHFREQ,      'https://auraborrows.com/shopnow/high-frequency');
  
  //Questions
  const questions = [
    {
      question: 'What aspect of yourself are you most proud of out of the following?',
      answers: {
        a: {text: 'My dedication', values: [styles.GEODETRANS, styles.FATEDORION, styles.RULINGHARV]},
        b: {text: 'My youthful spirit', values: [styles.EARTHCHERUB, styles.TAPEREDAURORA, styles.CARNIVALREV]},
        c: {text: 'My laid-back nature', values: [styles.SANDSTORMBOHO, styles.ANTSIREN, styles.ROOTMEN]},
        d: {text: 'My boldness', values: [styles.VOLTAGEROYALE, styles.DARKEDEN, styles.HIGHFREQ]}
      }
    },
    {
		question: 'If you were to describe yourself in a colour palette, which would it be?',
	    answers: {
	      a: {text: 'Blacks, greys, burgundy, maroon', values: [styles.GEODETRANS, styles.FATEDORION, styles.DARKEDEN, styles.RULINGHARV]},
	      b: {text: 'Pastels, soft hues', values: [styles.CARNIVALREV, styles.TAPEREDAURORA, styles.EARTHCHERUB]},
	      c: {text: 'Earth tones', values: [styles.SANDSTORMBOHO, styles.ROOTMEN, styles.ANTSIREN]},
	      d: {text: 'Anything bright', values: [styles.VOLTAGEROYALE, styles.HIGHFREQ]}
	    }
    },
    {
		question: 'When it comes to first impressions, I want people to see that I am...',
	    answers: {
	      a: {text: 'Sophisticated and intelligent', values: [styles.GEODETRANS, styles.FATEDORION, styles.RULINGHARV]},
	      b: {text: 'Free-spirited and easy going', values: [styles.SANDSTORMBOHO, styles.ROOTMEN, styles.ANTSIREN]},
	      c: {text: 'Playful and creative', values: [styles.CARNIVALREV, styles.TAPEREDAURORA, styles.EARTHCHERUB, styles.HIGHFREQ]},
	      d: {text: 'Alluring and mysterious', values: [styles.VOLTAGEROYALE, styles.DARKEDEN]}
	    }
	},
	
    {
		question: 'I am comfortable being the centre of attention',
	    answers: {
	      a: {text: 'Yes, I love it', values: [styles.VOLTAGEROYALE, styles.DARKEDEN, styles.HIGHFREQ]},
	      b: {text: 'I like to be noticed, but not always the focal point', values: [styles.SANDSTORMBOHO, styles.ANTSIREN, styles.EARTHCHERUB, styles.CARNIVALREV]},
	      c: {text: 'I prefer to leave it at first impressions', values: [styles.GEODETRANS, styles.FATEDORION]},
	      d: {text: 'I’d prefer to not be the centre of attention', values: [styles.TAPEREDAURORA, styles.ROOTMEN]}
	    }
    },
    {
		question: 'If I could pick a season to live in forever I’d pick',
	    answers: {
	      a: {text: 'Summer', values: [styles.CARNIVALREV, styles.HIGHFREQ, styles.SANDSTORMBOHO]},
	      b: {text: 'Spring', values: [styles.EARTHCHERUB, styles.ANTSIREN, styles.ROOTMEN]},
	      c: {text: 'Fall', values: [styles.RULINGHARV, styles.DARKEDEN, styles.FATEDORION]},
	      d: {text: 'Winter', values: [styles.VOLTAGEROYALE, styles.GEODETRANS, styles.TAPEREDAURORA]}
	    }
    },
    {
		question: 'When working with others, I generally take on the role of...',
	    answers: {
	      a: {text: 'Group leader, keeping everyone focused, delegating', values: [styles.GEODETRANS]},
	      b: {text: 'Critical thinker, asking prompting questions', values: [styles.FATEDORION]},
	      c: {text: 'Coming up with ideas quickly', values: [styles.HIGHFREQ]},
	      d: {text: 'Active listener, note-taker', values: [styles.ROOTMEN]}
	    }
    },
    {
		question: 'I am hoping to manifest the following into my life primarily...',
	    answers: {
	      a: {text: 'Love (including self-love)', values: [styles.EARTHCHERUB]},
	      b: {text: 'Peace & simplicity', values: [styles.TAPEREDAURORA]},
	      c: {text: 'Fun and joyfulness', values: [styles.CARNIVALREV]},
	      d: {text: 'Travel and adventure', values: [styles.SANDSTORMBOHO]}
	    }
    },
    {
		question: 'Finish the sentence: If someone had to describe me in one word, I’d want that word to be...',
	    answers: {
	      a: {text: 'Ethereal', values: [styles.ANTSIREN]},
	      b: {text: 'Strong', values: [styles.VOLTAGEROYALE]},
	      c: {text: 'Mysterious', values: [styles.DARKEDEN]},
	      d: {text: 'Warm-Hearted', values: [styles.RULINGHARV]}
	    }
    },
    {
		question: 'If you were to be the main character in a movie or tv show it would be a:',
	    answers: {
	      a: {text: 'Drama', values: [styles.GEODETRANS]},
	      b: {text: 'Rom-com', values: [styles.EARTHCHERUB]},
	      c: {text: 'Fantasy', values: [styles.ANTSIREN]},
	      d: {text: 'Coming of age', values: [styles.TAPEREDAURORA]}
	    }
    },
    {
		question: 'The types of people I get along best with are usually described as:',
	    answers: {
	      a: {text: 'Smart - developing ideas and sharing knowledge strengthens a friend group', values: [styles.FATEDORION]},
	      b: {text: 'Drifters - If everyone is on their own journey then we’ll never run out of things to talk about when we’re together', values: [styles.SANDSTORMBOHO]},
	      c: {text: 'Outgoing - having stories that seem unbelievable keeps things interesting', values: [styles.HIGHFREQ]},
	      d: {text: 'Playful - a collective sense of humour gives endless things to laugh about', values: [styles.CARNIVALREV]}
	    }
    },
    {
		question: 'On a date I’d love to:',
	    answers: {
	      a: {text: 'Go to a burlesque show', values: [styles.DARKEDEN]},
	      b: {text: 'Go to a coffee shop', values: [styles.ROOTMEN]},
	      c: {text: 'Go to a fancy dinner', values: [styles.VOLTAGEROYALE]},
	      d: {text: 'Go for a hike', values: [styles.RULINGHARV]}
	    }
    },
    {
		question: 'Out of the following known aesthetics, how would you choose to decorate your space?',
	    answers: {
	      a: {text: 'Rustic & Hygge', values: [styles.RULINGHARV]},
	      b: {text: 'Kawaii & Pastel', values: [styles.CARNIVALREV]},
	      c: {text: 'Minimalism & Urban', values: [styles.ROOTMEN]},
	      d: {text: 'Gothic & Witch', values: [styles.DARKEDEN]}
	    }
    },
    {
		question: 'I am most empowered when I feel',
	    answers: {
	      a: {text: 'Knowledgeable', values: [styles.FATEDORION]},
	      b: {text: 'Reliable', values: [styles.TAPEREDAURORA]},
	      c: {text: 'Peaceful', values: [styles.ANTSIREN]},
	      d: {text: 'Accomplished ', values: [styles.GEODETRANS]}
	    }
    },
    {
		question: 'In an antiques shop I would most likely walk out with',
	    answers: {
	      a: {text: 'An ornate mirror', values: [styles.VOLTAGEROYALE]},
	      b: {text: 'A leg lamp', values: [styles.HIGHFREQ]},
	      c: {text: 'A vintage suitcase', values: [styles.SANDSTORMBOHO]},
	      d: {text: 'A beautiful ring', values: [styles.EARTHCHERUB]}
	    }
    }
  ];
  
  // Quiz functions
  function buildQuiz(){
    // Store HTML output
    const output = [];
    
    // Cycle questions and build HTML
    questions.forEach((currentQuestion, questionNumber) => {
        // Store possible answer
        const answers = [];
      
        // Build possible answer HTML
        for(letter in currentQuestion.answers){
          // Add radio button
          answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${currentQuestion.answers[letter].text}">
            ${currentQuestion.answers[letter].text} <br>
          </label>`
          );
        }
        output.push(
          `<div class="question"> <b>${currentQuestion.question}</b> </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
    
    // Combine all answer HTML
    quizContainer.innerHTML = output.join('');
  }
  

  //Display results
  function showResults(){
    //Gather answers
    const answerContainers=quizContainer.querySelectorAll('.answers');
    	    
    //Store user answers
    var userAnswers = [];
    
    //for each question
    questions.forEach((currentQuestion, questionNumber)=>{
      //find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
      //Get and store answer values
      for(letter in currentQuestion.answers){
    	  if(currentQuestion.answers[letter].text === userAnswer){
    		  userAnswers.push(currentQuestion.answers[letter].values);  
    	  }
      }
    });
    
    //Flatten 2d Array of user answer values
    var values = [];
    for(var i = 0; i < userAnswers.length; i++){
    	for(var j = 0; j < userAnswers[i].length; j++){
    		var currentValue = userAnswers[i][j];
    		values.push(currentValue);
    	}
    }
    
    //Create map tallying most frequent user answer values
    var results = new Map();
    for(var i = 0; i < values.length; i++){
    	if (results.has(values[i])){
    		results.set(values[i], results.get(values[i])+1);
    	} else {
    		results.set(values[i], 1);
    	}
    }
    
    //Find most frequent value in user answer values
    var highestScore = -1;
    var highestCategories = [];
    for(let [category, score] of results){
    	if(score > highestScore){
    		highestScore = score;
    		highestCategories = [category];
    	}else if (score === highestScore){
    		highestCategories.push(category);
    	}
    }
    
    //Display most frequent user answer value
	var outputText = "";
	var linkColor = "#414141";
    if(questions.length !== userAnswers.length){
    	//Not all questions answered
    	outputText = `You need to answer all the questions.`;
    }else if(highestCategories.length === 1){
    	//Single result
    	outputText = `Your style is <a href=${styleLinkMap.get(highestCategories[0])} style="color:${linkColor};text-decoration:underline">${highestCategories[0]}</a>.`;
    }else if (highestCategories.length === 2){
    	//Tie of two detected
    	outputText = `Your styles are <a href=${styleLinkMap.get(highestCategories[0])} style="color:${linkColor};text-decoration:underline">${highestCategories[0]}</a> and <a href=${styleLinkMap.get(highestCategories[1])} style="color:${linkColor};text-decoration:underline">${highestCategories[1]}</a>.`;
    }else{
    	//Tie of more than two detected
    	outputText = `Your styles are `;
    	for(var i = 0; i < highestCategories.length; i++){
    		if (i != highestCategories.length-1){
    			outputText = outputText + `<a href=${styleLinkMap.get(highestCategories[i])} style="color:${linkColor};text-decoration:underline">${highestCategories[i]}</a>, `;
    		}else{
    			outputText = outputText + `and <a href=${styleLinkMap.get(highestCategories[i])} style="color:${linkColor};text-decoration:underline">${highestCategories[i]}</a>.`;
    		}
    	}
    }
    
    resultsContainer.innerHTML=`<b>${outputText}</b>`;
  }
  
  
  // Assemble
  buildQuiz();
  submitButton.addEventListener('click', showResults);
