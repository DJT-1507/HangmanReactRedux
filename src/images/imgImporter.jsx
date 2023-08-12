// I was searching for a way to import multiple images at once, and came across this:
//https://stackoverflow.com/questions/44607396/importing-multiple-files-in-react
//this solution is perfect as it imports all of the images, whilst also making it a re-usable component avoiding DRY coding

import one from "./state1.gif";
import two from "./state2.gif";
import three from "./state3.gif";
import four from "./state4.gif";
import five from "./state5.gif";
import six from "./state6.gif";
import seven from "./state7.gif";
import eight from "./state8.gif";
import nine from "./state9.gif";
import ten from "./state10.gif";
import eleven from "./state11.gif";

const images = {
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven
};

export default images;
