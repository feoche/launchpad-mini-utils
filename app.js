import chalk from "chalk";
import Launchpad from "launchpad-mini";

let buttons = [];

const ROW_LENGTH = 8;

let log = (buttons) => {
  function c(x, y) {
    let color = ``;
    let symbol = ``;
    switch (buttons[x][y] && buttons[x][y].color && buttons[x][y].color._name) {
      case `amber`:
        color = `yellowBright`;
        break;
      case `yellow`:
      case `green`:
      case `red`:
        color = buttons[x][y].color._name;
        break;
      default:
        color = `gray`;
        break;
    }

    if (x === ROW_LENGTH || y === ROW_LENGTH) {
      if (color === `gray`) {
        symbol = `○`;
      } else {
        symbol = `●`;
      }
    } else if (color === `gray`) {
      symbol = `□`;
    } else {
      symbol = `■`;
    }
    return chalk[color](symbol) + ` `;
  }

  console.log(`   ⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ×
 ⁸ ${c(0,8)}${c(1,8)}${c(2,8)}${c(3,8)}${c(4,8)}${c(5,8)}${c(6,8)}${c(7,8)}
 ⁰ ${c(0,0)}${c(1,0)}${c(2,0)}${c(3,0)}${c(4,0)}${c(5,0)}${c(6,0)}${c(7,0)}${c(8,0)}
 ¹ ${c(0,1)}${c(1,1)}${c(2,1)}${c(3,1)}${c(4,1)}${c(5,1)}${c(6,1)}${c(7,1)}${c(8,1)}
 ² ${c(0,2)}${c(1,2)}${c(2,2)}${c(3,2)}${c(4,2)}${c(5,2)}${c(6,2)}${c(7,2)}${c(8,2)}
 ³ ${c(0,3)}${c(1,3)}${c(2,3)}${c(3,3)}${c(4,3)}${c(5,3)}${c(6,3)}${c(7,3)}${c(8,3)}
 ⁴ ${c(0,4)}${c(1,4)}${c(2,4)}${c(3,4)}${c(4,4)}${c(5,4)}${c(6,4)}${c(7,4)}${c(8,4)}
 ⁵ ${c(0,1)}${c(1,5)}${c(2,5)}${c(3,5)}${c(4,5)}${c(5,5)}${c(6,5)}${c(7,5)}${c(8,5)}
 ⁶ ${c(0,1)}${c(1,6)}${c(2,6)}${c(3,6)}${c(4,6)}${c(5,6)}${c(6,6)}${c(7,6)}${c(8,6)}
 ⁷ ${c(0,1)}${c(1,7)}${c(2,7)}${c(3,7)}${c(4,7)}${c(5,7)}${c(6,7)}${c(7,7)}${c(8,7)}
 ʸ`);
};

this.paint = (color, x, y) => {
  buttons[x][y] = {color};
  if (pad) {
    renderPad(pad).then(() => {
      log(buttons);
      return pad;
    });
  }
};

let renderPad = (pad) => {
  if(pad) {
    let promises = [];
    buttons.map(row => item => promises.push(pad.col(item.color)));
    Promise.allSettled(promises).then(() => {
      return pad;
    });
  }
};

let init = () => {
  buttons = [];
  for (let i = 0; i < ROW_LENGTH+1; i++) {
    buttons[i] = new Array(9).fill({color: null});
  }
  log(buttons);
}; init();

export default this;
