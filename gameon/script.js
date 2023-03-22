(function(){
        "use strict"
        console.log("reading js");

            var startGame = document.getElementById('startgame');
            var gameControl = document.getElementById('gamecontrol');
            var game = document.getElementById('game');
            var score = document.getElementById('score');
            var actionArea = document.getElementById('actions');

            var gameData = {
                dice: ['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png'],
                players: ['player 1', 'player 2'],
                score: [0,0],
                roll1: 0,
                roll2: 0,
                rollsum: 0,
                index: 0,
                gameEnd : 29
            };

            startgame.addEventListener("click", function(){
                //randomly set game index
                gameData.index = Math.round(Math.random());
                console.log(gameData.index);

                gameControl.innerHTML='<h2>The Game has Started</h2>';
                gameControl.innerHTML+='<button id="quit">Quit Game</button>';

                document.getElementById('quit').addEventListener("click", function(){
                    location.reload();
                });

                console.log("set up the turn");
                setUpTurn();

            });

            function setUpTurn() {
                game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
                actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
                document.getElementById('roll').addEventListener('click', function(){
                    console.log("roll the dice now");
                    throwDice();
                });
            }

            function throwDice(){
                actionArea.innerHTML = '';
                gameData.roll1 = Math.floor(Math.random() * 6)+1;
                gameData.roll2 = Math.floor(Math.random() * 6)+1;
                game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
                //dice needs to be one less than roll1 and roll2, also put images of dice on screen
                game.innerHTML += 
                    `<img src="${gameData.dice[gameData.roll1-1]}">
                    <img src="${gameData.dice[gameData.roll2-1]}">`;
                gameData.rollSum = gameData.roll1 + gameData.roll2;
                console.log(gameData.rollSum);

                //case statement if two 1's are rolled
                if (gameData.rollSum === 2){
                    console.log("snake eyes have been rolled");
                    game.innerHTML += '<p>Snake Eyes! Score is reset!</p>';
                    gameData.score[gameData.index] = 0;
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    showCurrentScore();
                    setTimeout(setUpTurn, 2000);
                    
                }
                //case statement if either dice is a 1
                else if (gameData.roll1 === 1 || gameData.roll2 === 1){
                    console.log("one of the two dice was a 1");
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    game.innerHTML += `<p>one of the dice is a 1, switching to ${gameData.players[gameData.index]}</p>`;
                    showCurrentScore();
                    setTimeout(setUpTurn, 2000);
                    
                }
                //if neither die is a 1
                else{
                    console.log("no 1's were rolled");
                    gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                    actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass to next player</button>';

                    document.getElementById('rollagain').addEventListener('click', function(){
                        setUpTurn();
                    });

                    document.getElementById('pass').addEventListener('click', function(){
                        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                        setUpTurn();
                    });
                }
                console.log(gameData.score);
                showCurrentScore();
                checkWinCond();
            }

            function checkWinCond(){
                if(gameData.score[gameData.index] > gameData.gameEnd){
                    score.innerHTML = `<h2>${gameData.players[gameData.index]} wins! Their final score was ${gameData.score[gameData.index]} points</h2>`;

                    actionArea.innerHTML = '';
                    document.getElementById('quit').innerHTML = "Start new game?";
                }
                else {
                    score.innerHTML = `<p>Current Score:</p> <p><strong>${gameData.players[0]}:
                        ${gameData.score[0]}</strong></p> <p><strong>${gameData.players[1]}: ${gameData.score[1]}</strong></p>`;
                        
                }
            }
            
            function showCurrentScore(){
                score.innerHTML = `<p>Current Score:</p> <p><strong>${gameData.players[0]}:
                        ${gameData.score[0]}</strong></p> <p><strong>${gameData.players[1]}: ${gameData.score[1]}</strong></p>`;
            }
    }())