import { DayPlan } from './types';

export const ITINERARY_DATA: DayPlan[] = [
  {
    id: "0205",
    dateLabel: "2/5",
    dayOfWeek: "(四)",
    city: "羅馬 Rome",
    // 卡拉卡浴場
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/BathsOfCaracalla.jpg/1200px-BathsOfCaracalla.jpg",
    highlights: "抵達、小眾景點、真理之口",
    accommodation: {
      name: "Madama Lucrezia - Fontana di Trevi & Pantheon",
      address: "Via di Santo Stefano del Cacco, 25, b, 1, 1 00186 Roma",
      checkIn: "15:00 - 0:00 (11:00可寄放行李)",
      bookingPlatform: "Booking.com",
      tax: "扣款 €617.32"
    },
    spots: [
      {
        name: "卡拉卡浴場 & 橘園",
        description: "當天可以到小眾景點走走。卡拉卡浴場(9:00 - last entry 15:30)。",
        tips: ["橘園可看夕陽", "真理之口在附近"]
      },
      {
        name: "Testaccio / Trastevere 區域",
        description: "當地人吃喝走跳的區域，適合晚餐。",
        foods: [
          { name: "Tonnarello (手工義大利麵)", addressQuery: "Tonnarello Rome", note: "低價位，大份量" },
          { name: "La Gattabuia", addressQuery: "La Gattabuia Rome", note: "燉番茄牛尾、Carbonara" }
        ]
      }
    ]
  },
  {
    id: "0206",
    dateLabel: "2/6",
    dayOfWeek: "(五)",
    city: "羅馬 Rome",
    // 萬神殿
    imageUrl: "https://www.pelago.com/img/collections/panth%C3%A9on/1014-0847_pantheon-paris.jpg",
    highlights: "萬神殿、特雷維噴泉、西班牙廣場",
    accommodation: {
      name: "Madama Lucrezia",
      address: "Via di Santo Stefano del Cacco, 25",
      checkIn: "同上",
      bookingPlatform: "Booking.com"
    },
    spots: [
      {
        name: "萬神殿 (Pantheon)",
        description: "古羅馬保存最完整的神廟建築，巨大穹頂與中央圓形天窗(Oculus)。",
        tips: ["建議線上購票避免排隊", "拉斐爾長眠於此"],
        foods: [
          { name: "金杯咖啡 (Tazza d'Oro)", addressQuery: "La Casa del Caffè Tazza d'Oro", note: "女王咖啡豆、咖啡巧克力球" },
          { name: "鹿角咖啡 (Sant'Eustachio)", addressQuery: "Sant' Eustachio Il Caffè", note: "羅馬三大咖啡館之一" },
          { name: "Armando al Pantheon", addressQuery: "Armando al Pantheon", note: "老字號羅馬料理" }
        ]
      },
      {
        name: "特雷維噴泉 (許願池)",
        description: "羅馬最受歡迎的巴洛克噴泉。傳說背對池投擲硬幣可重返羅馬。",
        tips: ["人潮極多，注意財物", "2026年起可能收費"],
        foods: [
          { name: "Melograno Gelato", addressQuery: "Melograno Gelato Rome", note: "知名義式冰淇淋" }
        ]
      },
      {
        name: "西班牙廣場 (Piazza di Spagna)",
        description: "羅馬假期電影場景，破船噴泉。精品街 Via dei Condotti 在正對面。",
        tips: ["禁止在階梯飲食"],
        foods: [
          { name: "Pompi 提拉米蘇", addressQuery: "Pompi Tiramisù", note: "提拉米蘇專賣店" },
          { name: "Osteria Barberini", addressQuery: "Osteria Barberini", note: "松露餐廳" }
        ]
      },
      {
        name: "納沃納廣場 (Piazza Navona)",
        description: "四河噴泉，巴洛克藝術巔峰之作。",
        foods: [
          { name: "Two Sizes", addressQuery: "Two Sizes Rome", note: "必吃提拉米蘇!!" },
          { name: "Cantina e Cucina", addressQuery: "Cantina e Cucina Rome", note: "在Two Sizes隔壁" }
        ]
      }
    ]
  },
  {
    id: "0207",
    dateLabel: "2/7",
    dayOfWeek: "(六)",
    city: "羅馬 Rome",
    // 羅馬競技場
    imageUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/05/1f/c5.jpg",
    highlights: "競技場、古羅馬廣場",
    ticketAlerts: [
      { time: "09:50", title: "羅馬競技場入場 (需提早抵達)", urgent: true }
    ],
    accommodation: {
      name: "Madama Lucrezia",
      address: "Via di Santo Stefano del Cacco, 25",
      checkIn: "同上",
      bookingPlatform: "Booking.com"
    },
    spots: [
      {
        name: "羅馬競技場 (Colosseum)",
        description: "世界七大奇景，角鬥士舞台。請務必攜帶飲用水。",
        tips: ["9:50入場，建議提早", "含閣樓票 (Attic)", "不可退票但可改名"],
        foods: [
          { name: "Pasqualino Al Colosseo", addressQuery: "Pasqualino Al Colosseo", note: "Youtuber推薦" }
        ]
      },
      {
        name: "古羅馬廣場 & 帕拉丁山",
        description: "古羅馬政治經濟中心遺跡與貴族住所。",
        tips: ["同一張票可參觀", "帕拉丁山視野極佳"]
      }
    ]
  },
  {
    id: "0208",
    dateLabel: "2/8",
    dayOfWeek: "(日)",
    city: "龐貝 Pompeii",
    // 龐貝城
    imageUrl: "https://image.cdn-eztravel.com.tw/g0nAwuYSqB4MUW3IDtwCziQL-iS5VgdZVgsCGLhbI6A/g:ce/aHR0cHM6Ly92YWNhdGlvbi5jZG4tZXp0cmF2ZWwuY29tLnR3L2ltZy9WRFIvSVRfMzE1ODY2MjEwLmpwZw.jpg",
    highlights: "龐貝古城一日遊",
    ticketAlerts: [
      { time: "07:20", title: "集合：人民廣場 (Piazza del Popolo)", urgent: true },
      { time: "07:40", title: "準時出發", urgent: true }
    ],
    accommodation: {
      name: "Madama Lucrezia",
      address: "Via di Santo Stefano del Cacco, 25",
      checkIn: "同上",
      bookingPlatform: "Booking.com"
    },
    spots: [
      {
        name: "跟團一日遊 (GetYourGuide)",
        description: "龐貝周邊一日遊。避開羅馬博物館免費日的人潮。",
        tips: ["集合點：人民廣場", "1人€99，共€396"]
      }
    ]
  },
  {
    id: "0209",
    dateLabel: "2/9",
    dayOfWeek: "(一)",
    city: "羅馬 Rome",
    // 梵蒂岡 (聖彼得大教堂)
    imageUrl: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&q=80&w=1000",
    highlights: "梵蒂岡博物館、聖彼得大教堂",
    ticketAlerts: [
      { time: "13:30", title: "梵蒂岡博物館入場", urgent: true }
    ],
    accommodation: {
      name: "Madama Lucrezia",
      address: "Via di Santo Stefano del Cacco, 25",
      checkIn: "最後一晚",
      bookingPlatform: "Booking.com"
    },
    spots: [
      {
        name: "聖彼得大教堂 (St. Peter's Basilica)",
        description: "建議早上先去排隊登頂與參觀，以免人潮過多。",
        tips: ["登頂需購票(電梯€10/樓梯€8)", "聖體傘、聖殤像"],
        foods: [
          { name: "Panino Divino", addressQuery: "Panino Divino Prati", note: "帕尼尼名店" }
        ]
      },
      {
        name: "梵蒂岡博物館 (Vatican Museums)",
        description: "13:30入場。西斯汀禮拜堂(創世紀、最後的審判)。",
        tips: ["不可穿著裸露", "背包需寄存", "雅典學院在拉斐爾畫室"],
        foods: [
          { name: "Il Maritozzo Rosso", addressQuery: "Il Maritozzo Rosso Rome", note: "生乳包推薦" }
        ]
      },
      {
        name: "聖天使堡",
        description: "台伯河畔，適合傍晚拍照。",
        tips: ["Ponte Umberto I橋上拍攝最佳"]
      }
    ]
  },
  {
    id: "0210",
    dateLabel: "2/10",
    dayOfWeek: "(二)",
    city: "Orvieto",
    // 白露里治奧 (天空之城)
    imageUrl: "https://sundaytour.com.tw/upfiles/chinese/attractions/tw_attractions_caty01486612644.jpg",
    highlights: "移動日、天空之城",
    ticketAlerts: [
      { time: "08:20", title: "火車：Roma Termini -> Orvieto", urgent: true },
      { time: "14:00", title: "天空之城包車/巴士出發?", urgent: false }
    ],
    accommodation: {
      name: "Hotel Duomo",
      address: "Vicolo Di Maurizio N 7, 05018 Orvieto",
      checkIn: "14:00 - 23:00",
      tax: "€225.20 (含稅)",
      bookingPlatform: "Booking.com"
    },
    spots: [
      {
        name: "天空之城 (Civita di Bagnoregio)",
        description: "宮崎駿天空之城原型，瀕臨崩塌的古城。",
        tips: ["需搭接駁巴士或包車", "入城費需另購"]
      },
      {
        name: "Orvieto 老城區",
        description: "地下城、主教座堂、聖派翠克井。",
        foods: [
          { name: "Trattoria del Moro Aronne", addressQuery: "Trattoria del Moro Aronne Orvieto", note: "黑松露粗圓麵 (Umbrichelli)" },
          { name: "Trattoria La Palomba", addressQuery: "Trattoria La Palomba Orvieto", note: "在地人氣餐廳" }
        ]
      }
    ]
  },
  {
    id: "0211",
    dateLabel: "2/11",
    dayOfWeek: "(三)",
    city: "佛羅倫斯",
    // 百花大教堂
    imageUrl: "https://i0.wp.com/carollin.tw/wp-content/uploads/pimg/1401006810-578425394_n.jpg?w=1080&ssl=1",
    highlights: "百花大教堂、喬托鐘樓",
    ticketAlerts: [
      { time: "08:20", title: "火車：Orvieto -> Firenze SMN", urgent: true },
      { time: "14:00", title: "爸媽：大教堂內部 (Santa Reparata)", urgent: true },
      { time: "15:00", title: "家維晴：喬托鐘樓登頂", urgent: true }
    ],
    accommodation: {
      name: "Guya Apartment von Mamo Florence",
      address: "Via Faenza, 37, 50123 Florence",
      checkIn: "15:00 (11:30可寄放行李)",
      bookingPlatform: "Airbnb",
      note: "自助入住，前一天收密碼"
    },
    spots: [
      {
        name: "聖母百花大教堂區",
        description: "包含大教堂、洗禮堂(天堂之門)、喬托鐘樓。",
        tips: ["票券不可遲到", "登頂無電梯"],
        foods: [
          { name: "Trattoria Zà Zà", addressQuery: "Trattoria Zà Zà Florence", note: "丁骨牛排名店" },
          { name: "Da Nerbone", addressQuery: "Da Nerbone Florence", note: "中央市場牛肚包" },
          { name: "Grom", addressQuery: "Grom Gelato Florence", note: "連鎖高品質冰淇淋" }
        ]
      },
      {
        name: "中央市場",
        description: "一樓菜市場，二樓美食街。",
        foods: [
          { name: "牛肚包 (Nerbone)", addressQuery: "Da Nerbone", note: "非常有名" }
        ]
      }
    ]
  },
  {
    id: "0212",
    dateLabel: "2/12",
    dayOfWeek: "(四)",
    city: "托斯卡尼",
    // 比薩斜塔
    imageUrl: "https://travelwithmiya.com/wp-content/uploads/2022/06/Pisa-07.jpg",
    highlights: "比薩、錫耶納、聖吉米納諾一日遊",
    ticketAlerts: [],
    accommodation: {
      name: "Guya Apartment",
      address: "Via Faenza, 37",
      checkIn: "續住",
      bookingPlatform: "Airbnb"
    },
    spots: [
      {
        name: "Klook 一日遊",
        description: "包含比薩(Pisa)、錫耶納(Siena)、聖吉米納諾、基安蒂酒莊。",
        tips: ["7:30集合，需提早", "Siena教堂門票現場兌換"]
      },
      {
        name: "錫耶納 (Siena)",
        description: "貝殼廣場、主教堂。",
        tips: ["世界文化遺產"]
      }
    ]
  },
  {
    id: "0213",
    dateLabel: "2/13",
    dayOfWeek: "(五)",
    city: "佛羅倫斯",
    // 大衛像
    imageUrl: "https://i.epochtimes.com/assets/uploads/2020/04/shutterstock_188883485-1-450x299.jpg",
    highlights: "學院美術館(大衛像)、烏菲茲美術館",
    ticketAlerts: [
      { time: "09:00", title: "學院美術館入場 (大衛像)", urgent: true },
      { time: "下午", title: "烏菲茲美術館 (建議預留3小時)", urgent: false }
    ],
    accommodation: {
      name: "Guya Apartment",
      address: "Via Faenza, 37",
      checkIn: "續住",
      bookingPlatform: "Airbnb"
    },
    spots: [
      {
        name: "學院美術館 (Galleria dell'Accademia)",
        description: "必看米開朗基羅真跡《大衛像》。",
        tips: ["不可背大包包"]
      },
      {
        name: "烏菲茲美術館 (Uffizi Gallery)",
        description: "文藝復興藝術寶庫。維納斯的誕生、春。",
        foods: [
          { name: "All'Antico Vinaio", addressQuery: "All'Antico Vinaio Florence", note: "超人氣排隊三明治" }
        ]
      },
      {
        name: "老橋 (Ponte Vecchio)",
        description: "金飾店林立的古老橋樑。",
        tips: ["日落時分最美"]
      },
      {
        name: "米開朗基羅廣場",
        description: "俯瞰佛羅倫斯全景最佳地點。",
        tips: ["推薦看夜景"]
      }
    ]
  },
  {
    id: "0214",
    dateLabel: "2/14",
    dayOfWeek: "(六)",
    city: "威尼斯 Venice",
    // 聖馬可廣場 (面具節)
    imageUrl: "https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2025/03/06/20250306-125316_U29472_M1036329_1f8c.jpeg?KrOezHgx3Z3itqToGstTcg6mozBDH9eK&itok=vdx3zDT0",
    highlights: "面具節嘉年華、聖馬可廣場",
    ticketAlerts: [
      { time: "07:39", title: "火車：Firenze SMN -> Venice S.Lucia", urgent: true }
    ],
    accommodation: {
      name: "Venice Heaven Apartments San Marco",
      address: "CORTE CONTARINA 1570/B, SAN MARCO, 30135 Venice",
      checkIn: "15:00 - 19:00",
      tax: "現場付現城市稅 €32",
      bookingPlatform: "Booking.com"
    },
    spots: [
      {
        name: "威尼斯嘉年華 (Carnevale)",
        description: "面具節期間，聖馬可廣場有許多裝扮者。",
        tips: ["拍照前禮貌詢問 'Foto?'"]
      },
      {
        name: "聖馬可廣場 & 大教堂",
        description: "威尼斯的心臟。歐洲最美的客廳。",
        foods: [
          { name: "Caffè Florian", addressQuery: "Caffè Florian Venice", note: "世界最美咖啡館之一" },
          { name: "Trattoria Al Gazzettino", addressQuery: "Trattoria Al Gazzettino", note: "海鮮料理推薦" }
        ]
      },
      {
        name: "里亞托橋 (Rialto)",
        description: "大運河上最古老的橋。",
        foods: [
          { name: "Taverna San Trovaso", addressQuery: "Taverna San Trovaso", note: "墨魚麵、海鮮拼盤" },
          { name: "Grom", addressQuery: "Grom Gelato Venice", note: "連鎖冰淇淋" }
        ]
      }
    ]
  },
  {
    id: "0215",
    dateLabel: "2/15",
    dayOfWeek: "(日)",
    city: "威尼斯 Venice",
    // 彩色島
    imageUrl: "https://www.sundaytour.com.tw/upfiles/chinese/attractions/tw_attractions_caty1597731679.jpg",
    highlights: "彩色島、玻璃島",
    accommodation: {
      name: "Venice Heaven Apartments",
      address: "CORTE CONTARINA 1570/B",
      checkIn: "續住",
      bookingPlatform: "Booking.com"
    },
    spots: [
      {
        name: "彩色島 (Burano)",
        description: "蕾絲島。色彩繽紛的房屋，適合拍照。",
        tips: ["需搭水上巴士約45分", "Trattoria Da Romano 魚湯燉飯"]
      },
      {
        name: "玻璃島 (Murano)",
        description: "玻璃工藝重鎮。",
        tips: ["可參觀玻璃工廠"]
      }
    ]
  },
  {
    id: "0216",
    dateLabel: "2/16",
    dayOfWeek: "(一)",
    city: "米蘭 Milan",
    // 米蘭大教堂
    imageUrl: "https://image.cdn-eztravel.com.tw/cDa1MfeKOr5MztViEKrWDWfLA2FaThOA4ruq7v_EcEU/g:ce/aHR0cHM6Ly92YWNhdGlvbi5jZG4tZXp0cmF2ZWwuY29tLnR3L2ltZy9WRFIvSVRfMjQ2MTkwMTI5LmpwZw.jpg",
    highlights: "米蘭大教堂、艾曼紐二世拱廊",
    ticketAlerts: [
      { time: "07:57", title: "火車：Venice -> Milan Centrale", urgent: true },
      { time: "全天", title: "最後的晚餐 (週一休館)", urgent: false }
    ],
    accommodation: {
      name: "Airbnb Via Vitruvio",
      address: "Via Vitruvio, 43, Milan, Lombardy 20124",
      checkIn: "14:00 (10:30可寄放)",
      bookingPlatform: "Airbnb",
      note: "自助入住"
    },
    spots: [
      {
        name: "米蘭大教堂 (Duomo di Milano)",
        description: "世界最大哥德式教堂，壯觀的尖塔。",
        tips: ["建議登頂", "地下遺跡"],
        foods: [
          { name: "Panzerotti Luini", addressQuery: "Luini Panzerotti Milan", note: "必吃炸乳酪包" },
          { name: "Spontini", addressQuery: "Pizzeria Spontini Duomo", note: "厚切披薩" }
        ]
      },
      {
        name: "艾曼紐二世拱廊",
        description: "米蘭客廳，購物名店。",
        tips: ["公牛蛋蛋傳說(踩著轉圈)"]
      },
      {
        name: "星巴克臻選烘焙工坊",
        description: "義大利第一家星巴克，極致奢華。",
        tips: ["前身為郵局"]
      }
    ]
  },
  {
    id: "0217",
    dateLabel: "2/17",
    dayOfWeek: "(二)",
    city: "米蘭 -> 台北",
    // 保留原圖
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1000",
    highlights: "回程",
    ticketAlerts: [
      { time: "11:00", title: "爸媽長榮起飛 (MXP T1)", urgent: true },
      { time: "14:30", title: "晴維Easyjet起飛 (MXP T2)", urgent: true }
    ],
    accommodation: {
      name: "溫暖的家",
      address: "Taiwan / Prague",
      checkIn: "-",
      bookingPlatform: "-"
    },
    spots: [
      {
        name: "Malpensa Express 機場快線",
        description: "從米蘭中央車站搭乘，約50分鐘。",
        tips: ["T1與T2有免費接駁"]
      }
    ]
  }
];

export const SAFETY_TIPS = [
  { title: "防盜S鉤", desc: "義大利扒手多，背包拉鍊務必加上S鉤或密碼鎖，貴重物品放包包最深處。" },
  { title: "防割包", desc: "建議使用防割材質的包包，並盡量背在胸前。" },
  { title: "桌巾費 (Coperto)", desc: "餐廳用餐通常會收每人 €2-5 的桌巾費，這是正常的，有些甚至不含在小費內。" },
  { title: "飲用水", desc: "羅馬有許多免費飲水噴泉 (Nasoni)，可自備水壺裝水。" },
  { title: "廁所", desc: "公共廁所通常收費 €0.5 - €1，建議隨身攜帶零錢，或利用咖啡廳消費借用。" }
];

export const TRANSPORT_INFO = [
  { city: "羅馬", station: "Roma Termini", note: "主要車站，扒手極多" },
  { city: "佛羅倫斯", station: "Firenze S.M. Novella (SMN)", note: "市中心車站" },
  { city: "威尼斯", station: "Venezia Santa Lucia", note: "本島車站 (不要在 Mestre 下車)" },
  { city: "米蘭", station: "Milano Centrale", note: "非常大的車站，需預留移動時間" },
  { city: "打票", note: "實體票券上火車前務必在綠色/黃色機器打票，電子票無需" }
];