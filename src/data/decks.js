// Dữ liệu Flashcard Decks - Cấu trúc mở rộng cho nhiều skill, volume, topic
// Mỗi deck chứa: skill (Speaking/Writing), volume (Vol 8/9/10), topic, và mảng cards

export const flashcardDecks = [
  // ==========================================
  // SPEAKING VOL 9
  // ==========================================
  {
    id: "sp_v9_hometown",
    skill: "Speaking",
    volume: "Vol 9",
    topic: "Hometown & Accommodation",
    cards: [
      {
        id: 1,
        word: "Local amenities",
        pronunciation: "/ˈləʊkəl əˈmiːnɪtiz/",
        meaning: "các tiện nghi địa phương (công viên, siêu thị, bệnh viện...)",
        example:
          "My neighborhood is great because it has plenty of local amenities.",
        exampleTranslation:
          "Khu dân cư của tôi rất tuyệt vì nó có vô số các tiện nghi địa phương.",
      },
      {
        id: 2,
        word: "Pace of life",
        pronunciation: "/peɪs ɒv laɪf/",
        meaning: "nhịp sống",
        example:
          "I prefer living in the countryside because the pace of life is much slower.",
        exampleTranslation:
          "Tôi thích sống ở nông thôn hơn vì nhịp sống chậm hơn nhiều.",
      },
      {
        id: 3,
        word: "Sense of community",
        pronunciation: "/sɛns ɒv kəˈmjuːnɪti/",
        meaning: "ý thức cộng đồng, tình làng nghĩa xóm",
        example:
          "There is a strong sense of community in my hometown, people always help each other.",
        exampleTranslation:
          "Có một tình làng nghĩa xóm rất mạnh mẽ ở quê tôi, mọi người luôn giúp đỡ lẫn nhau.",
      },
      {
        id: 4,
        word: "Residential area",
        pronunciation: "/ˌrɛzɪˈdɛnʃəl ˈeərɪə/",
        meaning: "khu dân cư",
        example:
          "I live in a quiet residential area on the outskirts of the city.",
        exampleTranslation:
          "Tôi sống trong một khu dân cư yên tĩnh ở ngoại ô thành phố.",
      },
      {
        id: 5,
        word: "Fully-furnished",
        pronunciation: "/ˈfʊli-ˈfɜːnɪʃt/",
        meaning: "được trang bị đầy đủ nội thất",
        example: "I am renting a fully-furnished apartment near my university.",
        exampleTranslation:
          "Tôi đang thuê một căn hộ được trang bị đầy đủ nội thất gần trường đại học.",
      },
      {
        id: 6,
        word: "Affordable rent",
        pronunciation: "/əˈfɔːdəbl rɛnt/",
        meaning: "giá thuê nhà phải chăng",
        example:
          "It's quite difficult to find a place with affordable rent in the city center.",
        exampleTranslation:
          "Khá khó để tìm được một nơi có giá thuê phải chăng ở trung tâm thành phố.",
      },
    ],
  },

  {
    id: "sp_v9_work",
    skill: "Speaking",
    volume: "Vol 9",
    topic: "Work & Study",
    cards: [
      {
        id: 7,
        word: "Career prospects",
        pronunciation: "/kəˈrɪə ˈprɒspɛkts/",
        meaning: "triển vọng nghề nghiệp",
        example:
          "Learning English can significantly improve your career prospects.",
        exampleTranslation:
          "Học tiếng Anh có thể cải thiện đáng kể triển vọng nghề nghiệp của bạn.",
      },
      {
        id: 8,
        word: "Heavy workload",
        pronunciation: "/ˈhɛvi ˈwɜːkləʊd/",
        meaning: "khối lượng công việc lớn",
        example:
          "I often feel stressed due to the heavy workload at the office.",
        exampleTranslation:
          "Tôi thường cảm thấy căng thẳng do khối lượng công việc lớn ở văn phòng.",
      },
      {
        id: 9,
        word: "Academic performance",
        pronunciation: "/ˌækəˈdɛmɪk pəˈfɔːməns/",
        meaning: "thành tích học tập",
        example:
          "Students should focus on improving their academic performance.",
        exampleTranslation:
          "Học sinh nên tập trung vào việc cải thiện thành tích học tập của mình.",
      },
      {
        id: 10,
        word: "Core subject",
        pronunciation: "/kɔː ˈsʌbʤɪkt/",
        meaning: "môn học cốt lõi / môn học chính",
        example:
          "Math and Literature are core subjects in the Vietnamese education system.",
        exampleTranslation:
          "Toán và Văn là các môn học cốt lõi trong hệ thống giáo dục Việt Nam.",
      },
    ],
  },

  {
    id: "sp_v9_leisure",
    skill: "Speaking",
    volume: "Vol 9",
    topic: "Leisure & Entertainment",
    cards: [
      {
        id: 11,
        word: "To unwind",
        pronunciation: "/ʌnˈwaɪnd/",
        meaning: "thư giãn, xả stress",
        example:
          "I usually listen to music to unwind after a long day at work.",
        exampleTranslation:
          "Tôi thường nghe nhạc để thư giãn sau một ngày dài làm việc.",
      },
      {
        id: 12,
        word: "Pastime",
        pronunciation: "/ˈpɑːstaɪm/",
        meaning: "sở thích giải trí",
        example: "Reading is my favorite pastime.",
        exampleTranslation: "Đọc sách là sở thích giải trí yêu thích của tôi.",
      },
    ],
  },

  // ==========================================
  // WRITING VOL 10
  // ==========================================
  {
    id: "wr_v10_task1",
    skill: "Writing",
    volume: "Vol 10",
    topic: "Task 1: Describing Trends",
    cards: [
      {
        id: 13,
        word: "To experience a significant upward trend",
        pronunciation: "",
        meaning: "trải qua một xu hướng tăng đáng kể",
        example:
          "The number of users experienced a significant upward trend from 2020 to 2023.",
        exampleTranslation:
          "Số lượng người dùng đã trải qua một xu hướng tăng đáng kể từ 2020 đến 2023.",
      },
      {
        id: 14,
        word: "To hit a peak of",
        pronunciation: "",
        meaning: "đạt đỉnh ở mức",
        example: "Sales hit a peak of 10,000 units in December.",
        exampleTranslation: "Doanh số đạt đỉnh 10.000 sản phẩm vào tháng 12.",
      },
      {
        id: 15,
        word: "To plateau at",
        pronunciation: "",
        meaning: "ổn định ở mức",
        example: "After a sharp increase, the figure plateaued at around 500.",
        exampleTranslation: "Sau một sự tăng vọt, con số ổn định ở khoảng 500.",
      },
    ],
  },

  {
    id: "wr_v10_task2",
    skill: "Writing",
    volume: "Vol 10",
    topic: "Task 2: Education & Society",
    cards: [
      {
        id: 16,
        word: "To bridge the gap",
        pronunciation: "",
        meaning: "thu hẹp khoảng cách",
        example:
          "Education helps bridge the gap between the rich and the poor.",
        exampleTranslation: "Giáo dục giúp thu hẹp khoảng cách giàu nghèo.",
      },
      {
        id: 17,
        word: "To foster creativity",
        pronunciation: "",
        meaning: "nuôi dưỡng sự sáng tạo",
        example: "Schools should foster creativity among students.",
        exampleTranslation:
          "Trường học nên nuôi dưỡng sự sáng tạo trong học sinh.",
      },
    ],
  },
];
