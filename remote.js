"use strict";

const {
  keyboard,
  Key,
  mouse,
  left,
  right,
  up,
  down,
  screen,
  Point,
  sleep,
} = require("@nut-tree/nut-js");

const skuList = [
  "B08WTFG5BX",
  "B08XNLLPY7",
  "B096L2R3GP",
  "B08XQX96RN",
  "B08WS5X6F5",
  "B08W8DGK3X",
  "B08WHJPBFX",
  "B08WGTL4CW",
  "B08WM28PVH",
  "B08WPJ5P4R",
  "B08WT47L8B",
  "B08WPRMVWB",
  "B08X4V8N5Q",
  "B08X4VJ6SB",
];

const goToTasks = async () => {
  await mouse.move([{ x: 1097, y: 870 }]);
  await mouse.leftClick();
  await mouse.move([{ x: 43, y: 173 }]);
  await mouse.leftClick();
  await mouse.move([{ x: 200, y: 161 }]);
  await mouse.leftClick();
};

const createNewTasks = async (sku) => {
  await mouse.move([{ x: 1188, y: 66 }]);
  await mouse.leftClick();
  await mouse.move([{ x: 420, y: 445 }]);
  await mouse.leftClick();
  await mouse.move([{ x: 420, y: 472 }]);
  await mouse.leftClick();
  await mouse.move([{ x: 400, y: 450 }]);
  await mouse.leftClick();
  await keyboard.type(sku);
  await mouse.move([{ x: 800, y: 450 }]);
  await mouse.leftClick();
  await keyboard.type("900");
  await mouse.move([{ x: 1000, y: 300 }]);
  await mouse.leftClick();
  await keyboard.type("3070ti");
  await mouse.move([{ x: 1000, y: 450 }]);
  await mouse.leftClick();
  await keyboard.type("2000");
  await mouse.move([{ x: 420, y: 520 }]);
  await mouse.leftClick();
  await mouse.move([{ x: 420, y: 550 }]);
  await mouse.leftClick();
  await mouse.move([{ x: 600, y: 520 }]);
  await mouse.leftClick();
  await mouse.move([{ x: 600, y: 590 }]);
  await mouse.leftClick();
  await mouse.move([{ x: 1000, y: 594 }]);
  await mouse.leftClick();
  await mouse.move([{ x: 1188, y: 66 }]);
  await mouse.leftClick();
};

(async () => {
  await goToTasks();

  for (let i = 0; i < skuList.length; i++) {
    await createNewTasks(skuList[i]);
  }
})();
