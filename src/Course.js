import Bir from "./images/sayilar/number-one.png";
import Iki from "./images/sayilar/number-2.png";
import Uc from "./images/sayilar/number-3.png";
import Dort from "./images/sayilar/number-four.png";
import Bes from "./images/sayilar/number-5.png";
import Alti from "./images/sayilar/six.png";
import Yedi from "./images/sayilar/seven.png";
import Sekiz from "./images/sayilar/number-8.png";
import Dokuz from "./images/sayilar/number-9.png";
import On from "./images/sayilar/number-10.png";
import './Course.css';

const sayilarMap = {
  Bir,
  Iki,
  Uc,
  Dort,
  Bes,
  Alti,
  Yedi,
  Sekiz,
  Dokuz,
  On,
};

function Course({ sayilarName }) {
  // console.log(Bir);
  // console.log(sayilarName);
  console.log(sayilarMap[sayilarName]);
  return (
    <div>
      <img className="imgw" src={sayilarMap[sayilarName]} alt="sayilar" />
    </div>
  );
}

export default Course;
