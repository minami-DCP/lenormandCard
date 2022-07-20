//５枚のカードを作成
num_card1.innerHTML = "　";
name_card1.innerHTML = "　";
mean_card1.innerHTML = "　";


num_card2.innerHTML = "　";
name_card2.innerHTML = "　";
mean_card2.innerHTML = "　";

num_card3.innerHTML = "　";
name_card3.innerHTML = "　";
mean_card3.innerHTML = "　";

num_card4.innerHTML = "　";
name_card4.innerHTML = "　";
mean_card4.innerHTML = "　";

num_card5.innerHTML = "　";
name_card5.innerHTML = "　";
mean_card5.innerHTML = "　";

//カードのクラスを生成
class Card {
    constructor(number, name, meaning, picture) {
        this.number = number;
        this.name = name;
        this.meaning = meaning;
        this.picture = picture;
    }
}

//ルノルマンカード３６枚分のインスタンスを生成（番号、カード名、意味、イラストURL）
const cavalier = new Card(1, "騎手", "メッセージ、ニュース、若い男性", "illustration/1_cavalier.png");
const clover = new Card(2, "クローバー", "幸運、希望", "illustration/2_clover.png");
const ship = new Card(3, "船", "海外、旅行", "illustration/3_ship.png");
const house = new Card(4, "家", "自宅、プライベート", "illustration/4_house.png");
const tree = new Card(5, "木", "健康、生命", "illustration/5_tree.png");
const clouds = new Card(6, "雲", "混乱、曖昧", "illustration/6_clouds.png");
const snake = new Card(7, "蛇", "裏切り、嫉妬", "illustration/7_snake.png");
const coffin = new Card(8, "棺", "死、終焉", "illustration/8_coffin.png");
const flowers = new Card(9, "花束", "幸福、贈り物", "illustration/9_flowers.png");
const scythe = new Card(10, "鎌（大鎌）", "切断、事故", "illustration/10_scythe.png");
const birchrod = new Card(11, "鞭", "争い、口論", "illustration/11_birchrod.png");
const birds = new Card(12, "鳥", "コミュニケーション、会話", "illustration/12_birds.png");
const children = new Card(13, "子供", "子供、新しいこと", "illustration/13_children.png");
const fox = new Card(14, "狐", "詐欺、陰謀", "illustration/14_fox.png");
const bear = new Card(15, "熊", "パワー、権力", "illustration/15_bear.png");
const star = new Card(16, "星", "幸福、希望", "illustration/16_star.png");
const stork = new Card(17, "コウノトリ", "変化、移転", "illustration/17_stork.png");
const dog = new Card(18, "犬", "友情、誠実、忠誠", "illustration/18_dog.png");
const tower = new Card(19, "塔", "公的、権威", "illustration/19_tower.png");
const garden = new Card(20, "庭園", "社交的、楽しむ", "illustration/20_garden.png");
const mountain = new Card(21, "山", "障害、邪魔", "illustration/21_mountain.png");
const road = new Card(22, "道", "選択、手段", "illustration/22_road.png");
const mice = new Card(23, "ネズミ", "損失、盗難", "illustration/23_mice.png");
const heart = new Card(24, "ハート", "愛、情熱", "illustration/24_heart.png");
const ring = new Card(25, "指輪", "契約、約束、パートナーシップ", "illustration/25_ring.png");
const book = new Card(26, "本", "秘密、本", "illustration/26_book.png");
const letter = new Card(27, "手紙", "手紙、お知らせ", "illustration/27_letter.png");
const gentleman = new Card(28, "紳士", "あなた自身 or パートナー", "illustration/28_gentleman.png");
const lady = new Card(29, "淑女", "あなた自身 or パートナー", "illustration/29_lady.png");
const lilies = new Card(30, "百合", "調和、幸福", "illustration/30_lilies.png");
const sun = new Card(31, "太陽", "成功、幸福", "illustration/31_sun.png");
const moon = new Card(32, "月", "成功、名声", "illustration/32_moon.png");
const key = new Card(33, "鍵", "鍵、解決策", "illustration/33_key.png");
const fish = new Card(34, "魚", "お金、富", "illustration/34_fish.png");
const anchor = new Card(35, "錨", "安定、安心、信頼", "illustration/35_anchor.png");
const cross = new Card(36, "十字架", "運命、宿命", "illustration/36_cross.png");


//数字を入れたら、番号に応じたカードの情報をとってきてくれる関数を定義
function flip(i) {
  let cardNumber = i;
  let flipedCard;
  switch (cardNumber) {
    case 1:
      flipedCard = cavalier;
      break;

    case 2:
      flipedCard = clover;
      break;

    case 3:
      flipedCard = ship;
      break;

    case 4:
      flipedCard = house;
      break;

    case 5:
      flipedCard = tree;
      break;

    case 6:
      flipedCard = clouds;
      break;

    case 7:
      flipedCard = snake;
      break;

    case 8:
      flipedCard = coffin;
      break;

    case 9:
      flipedCard = flowers;
      break;

    case 10:
      flipedCard = scythe;
      break;

    case 11:
      flipedCard = birchrod;
      break;

    case 12:
      flipedCard = birds;
      break;

    case 13:
      flipedCard = children;
      break;

    case 14:
      flipedCard = fox;
      break;

    case 15:
      flipedCard = bear;
      break;

    case 16:
      flipedCard = star;
      break;

    case 17:
      flipedCard = stork;
      break;

    case 18:
      flipedCard = dog;
      break;

    case 19:
      flipedCard = tower;
      break;

    case 20:
      flipedCard = garden;
      break;

    case 21:
      flipedCard = mountain;
      break;

    case 22:
      flipedCard = road;
      break;

    case 23:
      flipedCard = mice;
      break;

    case 24:
      flipedCard = heart;
      break;

    case 25:
      flipedCard = ring;
      break;

    case 26:
      flipedCard = book;
      break;

    case 27:
      flipedCard = letter;
      break;

    case 28:
      flipedCard = gentleman;
      break;

    case 29:
      flipedCard = lady;
      break;

    case 30:
      flipedCard = lilies;
      break;

    case 31:
      flipedCard = sun;
      break;

    case 32:
      flipedCard = moon;
      break;

    case 33:
      flipedCard = key;
      break;

    case 34:
      flipedCard = fish;
      break;

    case 35:
      flipedCard = anchor;
      break;

    case 36:
      flipedCard = cross;
      break;

    default:

  }
  return flipedCard;
}


//------------------------------------------------------------------------
//占うボタンを押した時の挙動ここから
//------------------------------------------------------------------------
document.getElementById("Fortune").addEventListener("click",function(){

//ランダマイザ---------------------------------------------
  /** 重複チェック用配列 */
  var randoms = [];
  /** 最小値と最大値 */
  var min = 1, max = 36;

  /** 重複チェックしながら乱数作成 */
  for(i = min; i <= max; i++){
    while(true){
      var tmp = intRandom(min, max);
      if(!randoms.includes(tmp)){
        randoms.push(tmp);
        break;
      }
    }
  }

  /** min以上max以下の整数値の乱数を返す */
  function intRandom(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min;
  }

  // console.log(randoms);
  // console.log(randoms[0]);
//ランダマイザここまで---------------------------------------------

let actualFlipedCard;
var elem;
  //１枚目のカード
  actualFlipedCard = flip(randoms[0]);
  num_card1.innerHTML = actualFlipedCard.number;
  name_card1.innerHTML = actualFlipedCard.name;
  mean_card1.innerHTML = actualFlipedCard.meaning;
  elem = document.getElementById("image1");
  elem.src = actualFlipedCard.picture;

  //2枚目のカード
  actualFlipedCard = flip(randoms[1]);
  num_card2.innerHTML = actualFlipedCard.number;
  name_card2.innerHTML = actualFlipedCard.name;
  mean_card2.innerHTML = actualFlipedCard.meaning;
  elem = document.getElementById("image2");
  elem.src = actualFlipedCard.picture;

  //3枚目のカード
  actualFlipedCard = flip(randoms[2]);
  num_card3.innerHTML = actualFlipedCard.number;
  name_card3.innerHTML = actualFlipedCard.name;
  mean_card3.innerHTML = actualFlipedCard.meaning;
  elem = document.getElementById("image3");
  elem.src = actualFlipedCard.picture;

  //4枚目のカード
  actualFlipedCard = flip(randoms[3]);
  num_card4.innerHTML = actualFlipedCard.number;
  name_card4.innerHTML = actualFlipedCard.name;
  mean_card4.innerHTML = actualFlipedCard.meaning;
  elem = document.getElementById("image4");
  elem.src = actualFlipedCard.picture;

  //5枚目のカード
  actualFlipedCard = flip(randoms[4]);
  num_card5.innerHTML = actualFlipedCard.number;
  name_card5.innerHTML = actualFlipedCard.name;
  mean_card5.innerHTML = actualFlipedCard.meaning;
  elem = document.getElementById("image5");
  elem.src = actualFlipedCard.picture;

},false);
