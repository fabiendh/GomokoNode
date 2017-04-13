
(function($) {

    "use strict";

    $.gomoku = function(el, options) {

        var score_team1 = document.getElementById("score_team1");
        var score_team2 = document.getElementById("score_team2");
        var turnNd_human = false;
        var turnNd_ai = false;

        var defaults = {
                board_size: 19,     //  the board's size, in number of cells; the board is square
                ai_first: null,     //  should the AI move first? possible values are true/false or null for random
                                    //  whoever plays first, plays white
                endgame: null       //  callback function to execute when game ends;
                                    //  the callback function takes one boolean argument, indicating whether the computer
                                    //  won or not
            },



            game = this, board = [], board_size, cells, is_player_turn = false,

            init = function() {

                game.settings = $.extend({}, defaults, options);
                game.board = el;

                // to make the code shorter, i'll use the "board_size" private property instead of "game_settings.board_size"
                // public property throughout the code
                board_size = game.settings.board_size;

      if (IAvsIA === false) {
                // create the board, as a table and bind a single delegated event to handle clicks on table's cells
                var table = $('<table id="plateau">').on('click', 'td', function() {


                        // do nothing if is not the player's turn, or the cell is already occupied
                        if (!is_player_turn || board[cells.index(this)]) return false;

                        // show player's move on the board
                        show_move(cells.index(this), 2);

                        // let the computer make its move
                        computer_move();

                    }), i, row;

                var col = 0;
                var lin = 0;
                // iterate as many times as the square root of board_size
                for (i = 0; i < board_size * board_size; i++) {

                    // we start with empty cells on the board
                    board[i] = 0;

                    // once we add all the cells to a row, we add the row to the table
                    if (!(i % board_size))
                    {
                      col++;
                      lin = 0;
                      table.append(row = $('<tr>'));
                    }
                    lin++;
                    var col2 = col - 1;
                    var lin2 = lin - 1;
                    // add cells to rows
                    if (i==140 || i==141 || i==142 || i==143 || i==144 || i==159 || i==160 || i==161 || i==162 || i==163 || i==178 || i==179 || i==180 || i==181 || i==182 || i==197 || i==198 || i==199 || i==200 || i==201 || i==216 || i==217 || i==218 || i==219 || i==220) {
                      row.append($('<td id="'+i+'" class="black_background col'+col2+' lin'+lin2+'">'));
                    }
                    else {
                      row.append($('<td id="'+i+'" class="col'+col2+' lin'+lin2+'">'));
                    }

                }

                // append the table to the DOM
                game.board.append(table);

                // cache all the board's cells
                // we'll use this to highlight cells as the game goes on
                cells = $('td', game.board);

                // if the computer starts
                // (we use +.5|0 instead of Math.round)
                if (game.settings.ai_first || (null === game.settings.ai_first && Math.random()+.5|0)) {

                    // we'll use this to make sure that whoever plays first move, plays white
                    game.settings.ai_first = 1;
                    $(".scorep2").addClass("play");
                    // it plays the center of the board
                    // ~~ is short hand for Math.floor
                    show_move(~~(board_size / 2) * (1 + board_size), game.settings.ai_first);
                    turnNd_ai = true;

                // we'll use this to make sure that whoever plays first move, plays white
              } else{
                $(".scorep1").addClass("play");
                game.settings.ai_first = 2;
              }

              if (turnNd_ai !== true || turnNd_human === true) {
                //show_move(~~(board_size / 2) * (1 + board_size), 1);
                turnNd_human = true;
              }
                is_player_turn = true;
      }

      else {

        var col = 0;
        var lin = 0;
        var table = $('<table id="plateau">')
        // iterate as many times as the square root of board_size
        for (i = 0; i < board_size * board_size; i++) {

          // we start with empty cells on the board
          board[i] = 0;

          // once we add all the cells to a row, we add the row to the table
          if (!(i % board_size))
          {
            col++;
            lin = 0;
            table.append(row = $('<tr>'));
          }
          lin++;
          var col2 = col - 1;
          var lin2 = lin - 1;
          // add cells to rows
          if (i==140 || i==141 || i==142 || i==143 || i==144 || i==159 || i==160 || i==161 || i==162 || i==163 || i==178 || i==179 || i==180 || i==181 || i==182 || i==197 || i==198 || i==199 || i==200 || i==201 || i==216 || i==217 || i==218 || i==219 || i==220) {
            row.append($('<td id="'+i+'" class="black_background col'+col2+' lin'+lin2+'">'));
          }
          else {
            row.append($('<td id="'+i+'" class="col'+col2+' lin'+lin2+'">'));
          }

        }

        //setTimeout("",500000);

        // append the table to the DOM
        game.board.append(table);

        // cache all the board's cells
        // we'll use this to highlight cells as the game goes on
        cells = $('td', game.board);
        var time = ""
        if (status === "0") {
          do {
            //callWS();
            //var test = callWS();
            time = setTimeout(callWS(),500000);
          } while (status === "0");
        }
          clearTimeout(time);
          computer_move();

      }

      // if the computer starts
      // (we use +.5|0 instead of Math.round)
      /*if (game.settings.ai_first || (null === game.settings.ai_first && Math.random()+.5|0)) {

      // we'll use this to make sure that whoever plays first move, plays white
      game.settings.ai_first = 1;
      $(".scorep2").addClass("play");
      // it plays the center of the board
      // ~~ is short hand for Math.floor
      show_move(~~(board_size / 2) * (1 + board_size), 1);
      turnNd_ai = true;

      // we'll use this to make sure that whoever plays first move, plays white
    } else{
    $(".scorep1").addClass("play");
    game.settings.ai_first = 2;
  }

  if (turnNd_ai !== true || turnNd_human === true) {
  show_move(~~(board_size / 2) * (1 + board_size), 1);
  turnNd_human = true;
}
is_player_turn = true;*/
},

            show_move = function(index, type) {

  if (IAvsIA === false) {
              if (turnNd_human === true) {
                //$(cells[index]).addClass('p' + Math.abs(type - game.settings.ai_first));
      //show_move(~~(board_size / 3) * (1 + board_size), 1);
      var numLin = $(cells[index])[0].className.indexOf("lin")+3;
      var numCol = $(cells[index])[0].className.indexOf("col")+3;
      var lin = $(cells[index])[0].className.substring(numLin, numLin+2);
      var col = $(cells[index])[0].className.substring(numCol, numCol+2);
      lin = parseInt(lin);
      col = parseInt(col);
      console.log(ip);
      $.ajax({
        url : ip+'play/'+lin+"/"+col+"/"+IdJoueur1, // La ressource cibl�e
        type : 'GET', // Le type de la requ�te HTTP.
        data : '',
        success: function(data) { // Je r�cup�re la r�ponse du fichier PHP
          console.log(data); // J'affiche cette r�ponse
          if (data.code==200) {

          }
          else {
            var error = 1;
          }
        }
      });

      $.ajax({
        url : ip+'turn/'+IdJoueur1, // La ressource cibl�e
        type : 'GET', // Le type de la requ�te HTTP.
        data : '',
        async : false,
        success: function(data) { // Je r�cup�re la r�ponse du fichier PHP
          console.log(data); // J'affiche cette r�ponse
          if (data.code==200) {
            status = data.status;
            tableau = data.tableau;
            nbTenaillesJ1 = data.nbTenaillesJ1;
            nbTenaillesJ2 = data.nbTenaillesJ2;
            dernierCoupX = data.dernierCoupX;
            dernierCoupY = data.dernierCoupY;
            prolongation = data.prolongation;
            finPartie = data.finPartie;
            detailFinPartie = data.detailFinPartie;
            numTour = data.numTour;

            document.getElementById('score_team1').innerHTML = nbTenaillesJ1;
            document.getElementById('score_team2').innerHTML = nbTenaillesJ2;
          }
          else {
            var error = 1;
          }
        }
      });
                turnNd_human = false;
                show_move(~~(board_size / 2) * (1 + board_size), game.settings.ai_first);
              }else{
                // save the move
                board[index] = type;
      console.log($(cells[index]));
      console.log($(cells[index])[0].className);
      var numLin = $(cells[index])[0].className.indexOf("lin")+3;
      var numCol = $(cells[index])[0].className.indexOf("col")+3;
      var lin = $(cells[index])[0].className.substring(numLin, numLin+2);
      var col = $(cells[index])[0].className.substring(numCol, numCol+2);
      lin = parseInt(lin);
      col = parseInt(col);
      console.log(ip);
      $.ajax({
        url : ip+'play/'+lin+"/"+col+"/"+IdJoueur2, // La ressource cibl�e
        type : 'GET', // Le type de la requ�te HTTP.
        data : '',
        success: function(data) { // Je r�cup�re la r�ponse du fichier PHP
          console.log(data); // J'affiche cette r�ponse
          if (data.code==200) {

          }
          else {
            var error = 1;
          }
        }
      });

      $.ajax({
        url : ip+'turn/'+IdJoueur2, // La ressource cibl�e
        type : 'GET', // Le type de la requ�te HTTP.
        data : '',
        async : false,
        success: function(data) { // Je r�cup�re la r�ponse du fichier PHP
          console.log(data); // J'affiche cette r�ponse
          if (data.code==200) {
            status = data.status;
            tableau = data.tableau;
            nbTenaillesJ1 = data.nbTenaillesJ1;
            nbTenaillesJ2 = data.nbTenaillesJ2;
            dernierCoupX = data.dernierCoupX;
            dernierCoupY = data.dernierCoupY;
            prolongation = data.prolongation;
            finPartie = data.finPartie;
            detailFinPartie = data.detailFinPartie;
            numTour = data.numTour;

            document.getElementById('score_team1').innerHTML = nbTenaillesJ1;
            document.getElementById('score_team2').innerHTML = nbTenaillesJ2;
          }
          else {
            var error = 1;
          }
        }
      });
                // highlight the played cell
                // (whoever played the first move, plays with white)
                $(cells[index]).addClass('p' + Math.abs(type - game.settings.ai_first));
                $(".scorep1").toggleClass("play");
                $(".scorep2").toggleClass("play");
                fuckYou(index);
                checkWin();
                //computer_defense(index);
            }
          }
  else {
    // save the move
    board[index] = type;

    // highlight the played cell
    // (whoever played the first move, plays with white)
    $(cells[index]).addClass('p' + Math.abs(type - game.settings.ai_first));
    var numLin = $(cells[index])[0].className.indexOf("lin")+3;
    var numCol = $(cells[index])[0].className.indexOf("col")+3;
    var lin = $(cells[index])[0].className.substring(numLin, numLin+2);
    var col = $(cells[index])[0].className.substring(numCol, numCol+2);
    lin = parseInt(lin);
    col = parseInt(col);

    $.ajax({
      url : ip+'play/'+lin+"/"+col+"/"+IdJoueur1, // La ressource cibl�e
      type : 'GET', // Le type de la requ�te HTTP.
      data : '',
      async : false,
      success: function(data) { // Je r�cup�re la r�ponse du fichier PHP
        console.log(data); // J'affiche cette r�ponse
        if (data.code==200) {

        }
        else {
          var error = 1;
        }
      }
    });

    $(".scorep1").toggleClass("play");
    $(".scorep2").toggleClass("play");
    status = "0";
    if (status === "0") {
      do {
        //callWS();
        //var test = callWS();
        setTimeout(callWS(),500000);
      } while (status === "0");
    }

      computer_move();
  }
},
            computer_move = function() {

              if (turnNd_ai === true) {
                for (i=159;i<164;i++) {
                  if (board[i] !== 0) {
                  }else{
                    board[i] = 3;
                  }
                }
                for (i=178;i<183;i++){
                  if (board[i] !== 0) {
                  }else{
                    board[i] = 3;
                  }
                }
                for (i=197;i<202;i++){
                  if (board[i] !== 0) {
                  }else{
                    board[i] = 3;
                  }
                }
                for (i=216;i<221;i++){
                  if (board[i] !== 0) {
                  }else{
                    board[i] = 3;
                  }
                }
                for (i=235;i<239;i++){
                  if (board[i] !== 0) {
                  }else{
                    board[i] = 3;
                  }
                }

                //show_move(~~(board_size / 3) * (1 + board_size), game.settings.ai_first);
                //turnNd_ai = false;

              }

                var i, j, k, l, m, n, position, type, line, total_cells, consecutive_cells, empty_sides, best_score,
                    cell_score, direction_score, score;

                // set this flag to false so that the player cannot move while the computer is thinking
                is_player_turn = false;

                //console.log(index);
                // iterate through all the board's cells
                for (i = board_size * board_size; i--;) {

                    // skip to next cell if this cell is owned by the computer
                    if (board[i] == 1) continue;

                    // by default, the best move is the first free cell
                    // (position, attack, defense)
                    else if (!board[i] && undefined === best_score) best_score = [i, 0, 0];

                    // we will give a "score" to the position, based on its surroundings horizontally, vertically and
                    // on both diagonals; for example: for a row like 000XXPXX000 (where "0" means empty, "X" represents
                    // the opponent's pieces and "P" is the position for which we are determining the "score", we would
                    // check 0|00XXP|XX000, 00|0XXPX|X000, 000|XXPXX|000, 000X|XPXX0|00, 000XX|PXX00|0, and then we would
                    // do the same on the vertical, and on both diagonals)

                    // cell's default score (attack and defense)
                    cell_score = [0, 0];

                    // the 4 directions to check: vertical, horizontal, diagonal /, diagonal \ (in this order)
                    for (j = 4; j--;) {

                        // the default score for the direction we're checking
                        direction_score = [0, 0];

                        // check the 5 possible outcomes, as described above
                        // (if we're checking whether the player won, we'll do this iteration only once, checking for 5 in a row)
                        for (k = (!board[i] ? 5 : 1); k--;) {

                            // initialize the type of cells we're looking for,
                            // and the array with the cells on the current direction
                            type = board[i] || undefined; line = [];

                            // check the 5 pieces for each possible outcome, plus the 2 sides
                            for (l = 7; l--;) {

                                // used to compute position
                                m = -5 + k + l;
                                n = i % board_size;

                                if (

                                    // vertical
                                    ((j === 0 &&
                                    (position = i + (board_size * m)) !== false &&
                                    n == position % board_size) ||

                                    // horizontal
                                    (j == 1 &&
                                    (position = i + m) !== false &&
                                    ~~(position / board_size) == ~~(i / board_size)) ||

                                    // diagonal /
                                    (j == 2 &&
                                    (position = i - (board_size * m) + m) !== false &&
                                    ((position > i && position % board_size < n) ||
                                    (position < i && position % board_size > n) ||
                                    position == i)) ||

                                    // diagonal \
                                    (j == 3 &&
                                    (position = i + (board_size * m) + m) !== false &&
                                    ((position < i && position % board_size < n) ||
                                    (position > i && position % board_size > n)) ||
                                    position == i)) &&

                                    // the position is not off-board
                                    position >= 0 && position < board_size * board_size &&
                                    // the cell is of the same type as the ones we are looking for
                                    // or, we are checking the score for an empty cell, the current position is empty,
                                    // or is "undefined" (meaning we didn't yet find any non-empty cells)
                                    (board[position] == type || (!board[i] && (!board[position] || undefined === type)) ||

                                    // or we're just checking the sides
                                    !l || l == 6)

                                ) {

                                    // add position to the line
                                    line.push(position);

                                    // if we're not just checking the sides,
                                    // this is not an empty cell, and is of the same type as the ones we're looking for,
                                    // update the type of cells we're looking for
                                    // (we use ^ instead of !=)
                                    if (l && l ^ 6 && undefined === type && board[position]) type = board[position];

                                // if the computed position is off-board, but this is a side-cell, save it as "undefined"
                                } else if (!l || l == 6) line.push(undefined);

                                // skip the rest of the test if we found this row to be "non-compliant"
                                // (a different type of cell than the ones we're looking for, one of the 5 cells is off-board)
                                else break;

                            }

                            // if we added exactly 7 position to our line, and the line is not containing *only* empty cells
                            if (line.length == 7 && undefined !== type) {

                                // if we are checking whether the player won, set this flag so that later on we do not
                                // overwrite the value of the cell
                                m = (board[i] ? true : false);

                                // calculate the score when setting the current cell to the same type as the other ones we found
                                board[i] = type;

                                // calculate the number of consecutive cells we get like this
                                // (we'll do this by looking in our "line" array)
                                consecutive_cells = 0; total_cells = 0; empty_sides = 0;

                                // the total number of cells of the same type
                                for (l = 5; l--;) if (board[line[l + 1]] == type) total_cells++;

                                // look to the left of the current cell
                                for (l = line.indexOf(i) - 1; l >= 0; l--)

                                    // if the cell is of the same type, increment the number of consecutive cells
                                    if (board[line[l]] == type) consecutive_cells++;

                                    // otherwise
                                    else {

                                        // if the adjacent cell is empty, increment the number of empty sides
                                        // we have to use === 0 (instead of !) because it can also be "undefined"
                                        if (board[line[l]] === 0) empty_sides++;

                                        // don't look further
                                        break;

                                    }

                                // look to the right of the current cell
                                for (l = line.indexOf(i); l < line.length; l++)

                                    // if the cell is of the same type, increment the number of consecutive cells
                                    if (board[line[l]] == type) consecutive_cells++;

                                    // otherwise
                                    else {

                                        // if the adjacent cell is empty, increment the number of empty sides
                                        // we have to use === 0 (instead of !) because it can also be "undefined"
                                        if (board[line[l]] === 0) empty_sides++;

                                        // don't look further
                                        break;

                                    }

                                // give a score to the row based on the array below (number of cells/empty sides)
                                score = [[0, 1], [2, 3], [4, 12], [10, 64], [256, 256]][consecutive_cells >= total_cells ? Math.min(consecutive_cells, 5) - 1 : total_cells - 1][consecutive_cells >= total_cells ? (empty_sides ? empty_sides - 1 : 0) : 0];

                                // reset the cell's value (unless we are looking to see if the player won)
                                if (!m) board[i] = 0;

                                // if the player won, update the score
                                else if (score >= 256) score = 1024;

                                // if, so far, this is the best attack/defense score (depending on the value of "type")
                                // for this direction, update it
                                if (score > direction_score[type - 1]) direction_score[type - 1] = score;

                            }

                        }

                        // update the cell's attack and defense score
                        // (we simply sum the best scores of all 4 directions)
                        for (k = 2; k--;) cell_score[k] += direction_score[k];

                    }

                    // used below
                    j = cell_score[0] + cell_score[1];
                    k = best_score[1] + best_score[2];

                    // if
                    if (

                        // cell's attack + defense score is better than the current best attack and defense score
                        (j > k ||

                        // or, cell's score is equal to the best score, but computer's move is better or equal to the player's,
                        // and the current best move is not *exactly* the same
                        (j == k && cell_score[0] >= best_score[1])) &&

                        // we're checking the score of an empty cell, or we're checking to see if the player won and he won
                        // (we don't update the score when checking if the player won *unless* the player actually won)
                        (!board[i] || cell_score[1] >= 1024)

                    // update best score (position, attack, defense)
                    ) best_score = [i, cell_score[0], cell_score[1]];

                }
              //&& NumJoueur1 == 1
              //&& NumJoueur1 == 2
              if (IAvsIA === true) {

                if (nbTenaillesJ1 == 10 || NumJoueur1 == 1) {
                  return game.settings.endgame.apply(null, [0]);

                  //break;
                }
                else if (nbTenaillesJ2 == 10 || NumJoueur1 == 1) {
                  return game.settings.endgame.apply(null, [best_score[2] < 1024]);
                }
                else if (nbTenaillesJ2 == 10 || NumJoueur1 == 2) {
                  return game.settings.endgame.apply(null, [0]);
                }
                else if (nbTenaillesJ1 == 10 || NumJoueur1 == 2) {
                  return game.settings.endgame.apply(null, [best_score[2] < 1024]);
                }
              }
                computer_defense(i);
                // unless player won, play the best move
                if (best_score[2] < 1024) show_move(best_score[0], 1);

                // if somebody won
                if ((best_score[1] >= 256 || best_score[2] >= 1024) && typeof game.settings.endgame == 'function')

                    // fire the callback function, and do not go further
                    return game.settings.endgame.apply(null, [best_score[2] < 1024]);
                    //console.log(game.settings.endgame);

                // set this flag back to true, so that the user can have his turn
                is_player_turn = true;


                for (i = 0; i < board_size * board_size; i++) {

                  if (board[i] === 3) {
                  board[i] = 0;
                  }
                }
                turnNd_ai = false;

              eraseMotherFuckerUrPenaile(best_score[0]);
              checkWin();
            },
callWS = function() {
              $.ajax({
                url : ip+'turn/'+IdJoueur1, // La ressource cibl�e
                type : 'GET', // Le type de la requ�te HTTP.
                data : '',
                async : false,
                success: function(data) { // Je r�cup�re la r�ponse du fichier PHP
                  console.log(data); // J'affiche cette r�ponse
                  if (data.code==200) {
                    status = data.status;
                    tableau = data.tableau;
                    nbTenaillesJ1 = data.nbTenaillesJ1;
                    nbTenaillesJ2 = data.nbTenaillesJ2;
                    dernierCoupX = data.dernierCoupX;
                    dernierCoupY = data.dernierCoupY;
                    prolongation = data.prolongation;
                    finPartie = data.finPartie;
                    detailFinPartie = data.detailFinPartie;
                    numTour = data.numTour;

                    //NumJoueur1 = 1;

                    if (status == 1) {
                      //NumJoueur1 a tester si 1 ou non
                      document.getElementById('score_team1').innerHTML = nbTenaillesJ1;
                      document.getElementById('score_team2').innerHTML = nbTenaillesJ2;

                      if (NumJoueur1 == 1) {
                        //$(".col"+dernierCoupY+" lin"+dernierCoupX).addClass("p1");
                        //setTimeout("",500000);
                        document.getElementsByClassName("col"+dernierCoupY+" lin"+dernierCoupX)[0].className += " p0";
                        $(".scorep1").toggleClass("play");
                        $(".scorep2").toggleClass("play");
                        //setTimeout("",500000);
                      }
                      else {
                        //$(".col"+dernierCoupY+" lin"+dernierCoupX).addClass("p0");
                        //setTimeout("",500000);
                        document.getElementsByClassName("col"+dernierCoupY+" lin"+dernierCoupX)[0].className += " p1";
                        $(".scorep1").toggleClass("play");
                        $(".scorep2").toggleClass("play");
                        //setTimeout("",500000);
                      }
                    }
                  }
                  else {
                    var error = 1;
                  }
                }
              });
            },


            eraseMotherFuckerUrPenaile = function(index) {
              for (var i = board_size * board_size; i--;) {
                  // Horizontal
                  if ((board[index] === 1 && board[index+1] === 2 && board[index+2] === 2 && board[index+3] === 1)) {
                    board[index+1] = 0;
                    board[index+2] = 0;
                    document.getElementById(index+1).removeAttribute("class");
                    document.getElementById(index+2).removeAttribute("class");
                    score_team2.innerHTML=parseInt(score_team2.innerHTML)+2;
                  }
                  if ((board[index] === 1 && board[index-1] === 2 && board[index-2] === 2 && board[index-3] === 1)) {
                    board[index-1] = 0;
                    board[index-2] = 0;
                    document.getElementById(index-1).removeAttribute("class");
                    document.getElementById(index-2).removeAttribute("class");
                    score_team2.innerHTML=parseInt(score_team2.innerHTML)+2;
                  }
                  // Vertical
                  if ((board[index] === 1 && board[index+19] === 2 && board[index+38] === 2 && board[index+57] === 1)) {
                    board[index+19] = 0;
                    board[index+38] = 0;
                    document.getElementById(index+19).removeAttribute("class");
                    document.getElementById(index+38).removeAttribute("class");
                    score_team2.innerHTML=parseInt(score_team2.innerHTML)+2;
                  }
                  if ((board[index] === 1 && board[index-19] === 2 && board[index-38] === 2 && board[index-57] === 1)) {
                    board[index-19] = 0;
                    board[index-38] = 0;
                    document.getElementById(index-19).removeAttribute("class");
                    document.getElementById(index-38).removeAttribute("class");
                    score_team2.innerHTML=parseInt(score_team2.innerHTML)+2;
                  }
                  // Diagonal /
                  if ((board[index] === 1 && board[index+18] === 2 && board[index+36] === 2 && board[index+54] === 1)) {
                    board[index+18] = 0;
                    board[index+36] = 0;
                    document.getElementById(index+18).removeAttribute("class");
                    document.getElementById(index+36).removeAttribute("class");
                    score_team2.innerHTML=parseInt(score_team2.innerHTML)+2;
                  }
                  if ((board[index] === 1 && board[index-18] === 2 && board[index-36] === 2 && board[index-54] === 1)) {
                    board[index-18] = 0;
                    board[index-36] = 0;
                    document.getElementById(index-18).removeAttribute("class");
                    document.getElementById(index-36).removeAttribute("class");
                    score_team2.innerHTML=parseInt(score_team2.innerHTML)+2;
                  }
                  // Diagonal \
                  if ((board[index] === 1 && board[index+20] === 2 && board[index+40] === 2 && board[index+60] === 1)) {
                    board[index+20] = 0;
                    board[index+40] = 0;
                    document.getElementById(index+20).removeAttribute("class");
                    document.getElementById(index+40).removeAttribute("class");
                    score_team2.innerHTML=parseInt(score_team2.innerHTML)+2;
                  }
                  if ((board[index] === 1 && board[index-20] === 2 && board[index-40] === 2 && board[index-60] === 1)) {
                    board[index-20] = 0;
                    board[index-40] = 0;
                    document.getElementById(index-20).removeAttribute("class");
                    document.getElementById(index-40).removeAttribute("class");
                    score_team2.innerHTML=parseInt(score_team2.innerHTML)+2;
                  }
            }
          },



          fuckYou = function(index) {
              for (var i = board_size * board_size; i--;) {
                  // Horizontal
                  if ((board[index] === 2 && board[index+1] === 1 && board[index+2] === 1 && board[index+3] === 2)){
                    board[index+1] = 0;
                    board[index+2] = 0;
                    document.getElementById(index+1).removeAttribute("class");
                    document.getElementById(index+2).removeAttribute("class");
                    score_team1.innerHTML=parseInt(score_team1.innerHTML)+2;
                  }
                  if ((board[index] === 2 && board[index-1] === 1 && board[index-2] === 1 && board[index-3] === 2)){
                    board[index-1] = 0;
                    board[index-2] = 0;
                    document.getElementById(index-1).removeAttribute("class");
                    document.getElementById(index-2).removeAttribute("class");
                    score_team1.innerHTML=parseInt(score_team1.innerHTML)+2;
                  }
                  // Vertical
                  if ((board[index] === 2 && board[index+19] === 1 && board[index+38] === 1 && board[index+57] === 2)) {
                    board[index+19] = 0;
                    board[index+38] = 0;
                    document.getElementById(index+19).removeAttribute("class");
                    document.getElementById(index+38).removeAttribute("class");
                    score_team1.innerHTML=parseInt(score_team1.innerHTML)+2;
                  }
                  if ((board[index] === 2 && board[index-19] === 1 && board[index-38] === 1 && board[index-57] === 2)) {
                    board[index-19] = 0;
                    board[index-38] = 0;
                    document.getElementById(index-19).removeAttribute("class");
                    document.getElementById(index-38).removeAttribute("class");
                    score_team1.innerHTML=parseInt(score_team1.innerHTML)+2;
                  }
                  // Diagonal /
                  if ((board[index] === 2 && board[index+18] === 1 && board[index+36] === 1 && board[index+54] === 2)) {
                    board[index+18] = 0;
                    board[index+36] = 0;
                    document.getElementById(index+18).removeAttribute("class");
                    document.getElementById(index+36).removeAttribute("class");
                    score_team1.innerHTML=parseInt(score_team1.innerHTML)+2;
                  }
                  if ((board[index] === 2 && board[index-18] === 1 && board[index-36] === 1 && board[index-54] === 2)) {
                    board[index-18] = 0;
                    board[index-36] = 0;
                    document.getElementById(index-18).removeAttribute("class");
                    document.getElementById(index-36).removeAttribute("class");
                    score_team1.innerHTML=parseInt(score_team1.innerHTML)+2;
                  }
                  // Diagonal \
                  if ((board[index] === 2 && board[index+20] === 1 && board[index+40] === 1 && board[index+60] === 2)) {
                    board[index+20] = 0;
                    board[index+40] = 0;
                    document.getElementById(index+20).removeAttribute("class");
                    document.getElementById(index+40).removeAttribute("class");
                    score_team1.innerHTML=parseInt(score_team1.innerHTML)+2;
                  }
                  if ((board[index] === 2 && board[index-20] === 1 && board[index-40] === 1 && board[index-60] === 2)) {
                    board[index-20] = 0;
                    board[index-40] = 0;
                    document.getElementById(index-20).removeAttribute("class");
                    document.getElementById(index-40).removeAttribute("class");
                    score_team1.innerHTML=parseInt(score_team1.innerHTML)+2;
                  }
            }
        },

            computer_defense = function(index) {
              for (var i = board_size * board_size; i--;) {
                if(board[index] === 1) {
                  // Horizontal
                  if (((board[index+1] === 2 && board[index-1] === 0) || (board[index-1] === 2 && board[index+1] === 0)) && (board[index] === 1)) {
                    board[index] = 3;
                  }
                  //if((board[index+1] === 1 && board[index-1] === 2 && board[index+2]===0) || (board[index-1] === 1 && board[index+1] === 2 && board[index-2]===0)){
                  //}
                  // Vertical
                  if (((board[index+19] === 2 && board[index-19] === 0) || (board[index-19] === 2 && board[index+19] === 0)) && (board[index] === 1)) {
                    board[index] = 3;
                  }
//                  if((board[index+19] === 1 && board[index-19] === 2 && board[index+38]===0) || (board[index-19] === 1 && board[index+19] === 2 && board[index-38]===0)){
//                  }
                  // Diagonal /
                  if (((board[index+18] === 2 && board[index-18] === 0) || (board[index-18] === 2 && board[index+18] === 0)) && (board[index] === 1)) {
                    board[index] = 3;
                  }
//                  if((board[index+18] === 1 && board[index-18] === 2 && board[index+36]===0) || (board[index-18] === 1 && board[index+18] === 2 && board[index-36]===0)){
//                  }
                  // Diagonal \
                  if (((board[index+20] === 2 && board[index-20] === 0) || (board[index-20] === 2 && board[index+20] === 0)) && (board[index] === 1)) {
                    board[index] = 3;
                  }
//                  if((board[index+20] === 1 && board[index-20] === 2 && board[index+40]===0) || (board[index-20] === 1 && board[index+20] === 2 && board[index-40]===0)){
//                  }
               }
            }
          },

            computer_attack = function() {
              for (i = board_size * board_size; i--;) {
                if(board[i] === 2) {
                  // Horizontal
                  if((board[i+1] === 2 && board[i-1] === 1 && board[i+2]===0) || (board[i-1] === 2 && board[i+1] === 1 && board[i-2]===0)){
                    // mange le
                  }
                  // Vertical
                  if((board[i+19] === 2 && board[i-19] === 1 && board[i+38]===0) || (board[i-19] === 2 && board[i+19] === 1 && board[i-38]===0)){
                    // mange le
                  }
                  // Diagonal /
                  if((board[i+18] === 2 && board[i-18] === 1 && board[i+36]===0) || (board[i-18] === 2 && board[i+18] === 1 && board[i-36]===0)){
                    // mange le
                  }
                  // Diagonal \
                  if((board[i+20] === 2 && board[i-20] === 1 && board[i+40]===0) || (board[i-20] === 2 && board[i+20] === 1 && board[i-40]===0)){
                    // mange le
                  }

              }
              }
            },

            checkWin = function () {
              if (parseInt(score_team1.innerHTML) === 10) {
                //alert('Team 1 Win !');
                return game.settings.endgame.apply(null, [0]);
              }
              if (parseInt(score_team2.innerHTML) === 10) {
                //alert('Team 2 Win !');
                return game.settings.endgame.apply(null, [1024]);
              }
            };

        // unleash less than 2KB of awesome!
        init();



    };

})(jQuery);
