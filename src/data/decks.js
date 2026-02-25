// Dữ liệu Flashcard Decks - IELTS Speaking Vol 9
// Nguồn: ZIM IELTS Speaking Vol 9
// Cấu trúc: skill, volume, topic, part, và mảng cards (có đầy đủ meaning + note)

export const flashcardDecks = [
  // ==========================================
  // P1.1 - Your Home
  // ==========================================
  {
    id: "sp_s1_p1_home",
    skill: "Speaking",
    volume: "9",
    topic: "Your Home",
    part: "P1.1",
    cards: [
      {
        id: 1,
        word: "Hub",
        pronunciation: "/hʌb/",
        meaning: "trung tâm hoạt động",
        note: "Thường được sử dụng để chỉ trung tâm hoặc nơi nổi bật của một lĩnh vực hoặc hoạt động nào đó.",
        example:
          "Currently, I'm living in an apartment in the city center, and it's like having my own little hub.",
        exampleTranslation:
          "Hiện tại, tôi đang sống trong một căn hộ ở trung tâm thành phố, cảm giác như có trung tâm hoạt động riêng của mình.",
      },
      {
        id: 2,
        word: "Bustling",
        pronunciation: "/ˈbʌs.lɪŋ/",
        meaning: "nhộn nhịp",
        note: "Thường dùng để mô tả một nơi có nhiều người và hoạt động, không yên tĩnh.",
        example: "It's a bustling, lively place to be.",
        exampleTranslation: "Đó là một nơi nhộn nhịp và sôi động.",
      },
      {
        id: 3,
        word: "Cozy",
        pronunciation: "/ˈkəʊ.zi/",
        meaning: "ấm cúng",
        note: "Mô tả một không gian thoải mái, thường là nhỏ và ấm áp, tạo cảm giác thân thuộc và dễ chịu.",
        example:
          "I've got a house in the suburbs, and it's a cozy and private space.",
        exampleTranslation:
          "Tôi có một căn nhà ở ngoại ô, và đó là một không gian ấm cúng và riêng tư.",
      },
      {
        id: 4,
        word: "Retreat",
        pronunciation: "/rɪˈtriːt/",
        meaning: "nơi nghỉ ngơi, nơi ẩn dật yên tĩnh",
        note: "Thường được sử dụng để chỉ một không gian yên tĩnh nơi mọi người có thể thư giãn và tách biệt khỏi môi trường xô bồ.",
        example: "It's a quiet retreat away from city noise.",
        exampleTranslation:
          "Đó là một nơi nghỉ ngơi yên tĩnh tránh xa tiếng ồn đô thị.",
      },
      {
        id: 5,
        word: "Go-to spot",
        pronunciation: "/ˈɡəʊ.tuː spɒt/",
        meaning: "địa điểm ưa thích",
        note: '"Go-to spot" thường dùng để chỉ một nơi cụ thể mà một người thường xuyên quay lại vì sự thoải mái, tiện ích hoặc niềm vui mà nó mang lại.',
        example: "My go-to spot is definitely the living room.",
        exampleTranslation:
          "Địa điểm ưa thích của tôi chắc chắn là phòng khách.",
      },
      {
        id: 6,
        word: "Kick back",
        pronunciation: "/kɪk bæk/",
        meaning: "thư giãn hoàn toàn",
        note: "Thường được dùng trong ngữ cảnh nghỉ ngơi hoặc thư giãn một cách thoải mái.",
        example:
          "It's the perfect spot to kick back and relax or have friends over for a movie night.",
        exampleTranslation:
          "Đó là nơi hoàn hảo để thư giãn hoặc mời bạn bè đến xem phim.",
      },
      {
        id: 7,
        word: "Whip up",
        pronunciation: "/ˈwɪp.ɪŋ ʌp/",
        meaning: "nấu nhanh",
        note: "Được sử dụng khi mô tả việc chuẩn bị thức ăn một cách nhanh chóng và dễ dàng.",
        example: "I love whipping up new dishes in the kitchen.",
        exampleTranslation: "Tôi thích nấu nhanh các món ăn mới trong bếp.",
      },
      {
        id: 8,
        word: "Heart of the home",
        pronunciation: "/hɑːrt əv ðə həʊm/",
        meaning: "trái tim của ngôi nhà",
        note: "Cụm từ này thường được dùng để chỉ phòng bếp hoặc phòng khách, nơi mọi người trong gia đình tụ họp và dành thời gian cho nhau, coi đó như là nơi gắn kết và quan trọng nhất trong ngôi nhà.",
        example: "The kitchen is really the heart of the home for me.",
        exampleTranslation:
          "Nhà bếp thực sự là trái tim của ngôi nhà đối với tôi.",
      },
      {
        id: 9,
        word: "Keepsakes",
        pronunciation: "/ˈkiːp.seɪks/",
        meaning: "vật kỷ niệm",
        note: "Được giữ lại như một cách để nhớ về một sự kiện, người, hoặc nơi nào đó.",
        example:
          "I've got all sorts of photos and keepsakes everywhere that bring back good memories.",
        exampleTranslation:
          "Tôi có đủ loại ảnh và vật kỷ niệm khắp nơi gợi lại những kỷ niệm đẹp.",
      },
      {
        id: 10,
        word: "Homey",
        pronunciation: "/ˈhəʊ.mi/",
        meaning: "ấm cúng, tạo cảm giác như ở nhà",
        note: "Thường dùng để mô tả một không gian ấm cúng và thoải mái, tạo cảm giác thân thuộc như khi ở nhà.",
        example:
          "Comfy cushions, candles, and a stash of good books make it super homey.",
        exampleTranslation:
          "Gối êm, nến thơm và kho sách hay khiến nơi này cực kỳ ấm cúng.",
      },
      {
        id: 11,
        word: "Airy",
        pronunciation: "/ˈeə.ri/",
        meaning: "thông thoáng, thoáng đãng",
        note: "Mô tả không gian rộng rãi, thoáng đãng, thường có nhiều không khí và ánh sáng tự nhiên.",
        example:
          "What makes my place great is the light – it's bright and airy.",
        exampleTranslation:
          "Điều làm cho nơi ở của tôi tuyệt vời là ánh sáng – sáng sủa và thông thoáng.",
      },
      {
        id: 12,
        word: "Cramped",
        pronunciation: "/kræmpt/",
        meaning: "chật chội, bí bách",
        note: "Được dùng khi không gian sống hoặc làm việc bị hạn chế, gây cảm giác bức bối.",
        example:
          "The layout is really open, so it never feels cramped or cluttered.",
        exampleTranslation:
          "Bố cục rất mở, nên không bao giờ cảm thấy chật chội hay lộn xộn.",
      },
    ],
  },

  // ==========================================
  // P1.2 - What You Do (Work)
  // ==========================================
  {
    id: "sp_s1_p2_work",
    skill: "Speaking",
    volume: "9",
    topic: "What You Do – Work",
    part: "P1.2",
    cards: [
      {
        id: 13,
        word: "Eye-catching",
        pronunciation: "/ˈaɪˌkætʃ.ɪŋ/",
        meaning: "thu hút ánh nhìn, nổi bật",
        note: "Thường được dùng để mô tả thiết kế hay một đối tượng nào đó rất nổi bật và dễ thu hút sự chú ý ngay lập tức.",
        example: "I love turning ideas into an eye-catching design.",
        exampleTranslation:
          "Tôi thích biến ý tưởng thành những thiết kế thu hút ánh nhìn.",
      },
      {
        id: 14,
        word: "Branding",
        pronunciation: "/ˈbræn.dɪŋ/",
        meaning: "xây dựng thương hiệu",
        note: "Là một phần quan trọng trong marketing, liên quan đến việc tạo ra một hình ảnh đặc biệt và dễ nhận diện cho sản phẩm hoặc công ty.",
        example:
          "I work in graphic design – think logos, websites, and branding.",
        exampleTranslation:
          "Tôi làm trong lĩnh vực thiết kế đồ họa – logo, website và xây dựng thương hiệu.",
      },
      {
        id: 15,
        word: "Pediatric care",
        pronunciation: "/ˌpiː.diˈæt.rɪk keər/",
        meaning: "chăm sóc nhi khoa",
        note: "Đây là lĩnh vực chuyên môn trong ngành y tập trung vào việc chăm sóc sức khỏe của trẻ em.",
        example: "I'm a nurse, working mostly in pediatric care.",
        exampleTranslation:
          "Tôi là y tá, chủ yếu làm việc trong lĩnh vực chăm sóc nhi khoa.",
      },
      {
        id: 16,
        word: "Rewarding",
        pronunciation: "/rɪˈwɔː.dɪŋ/",
        meaning: "đáng giá, mang lại sự thỏa mãn",
        note: "Thường được dùng để mô tả công việc hoặc hoạt động mang lại cảm giác thành tựu và hài lòng.",
        example:
          "It's challenging but incredibly rewarding, especially when I see my patients getting better.",
        exampleTranslation:
          "Công việc thách thức nhưng cực kỳ đáng giá, nhất là khi thấy bệnh nhân bình phục.",
      },
      {
        id: 17,
        word: "Fascinated by",
        pronunciation: "/ˈfæs.ɪˌneɪ.tɪd ˈbaɪ/",
        meaning: "bị cuốn hút bởi",
        note: "Thường dùng để chỉ một sự hứng thú mạnh mẽ với một điều gì đó, đặc biệt là khi sự thích thú đó bắt đầu từ khi còn nhỏ.",
        example:
          "Ever since I was a kid, I've been fascinated by drawing and design.",
        exampleTranslation:
          "Từ khi còn nhỏ, tôi đã bị cuốn hút bởi vẽ và thiết kế.",
      },
      {
        id: 18,
        word: "No-brainer",
        pronunciation: "/ˈnoʊˌbreɪ.nər/",
        meaning: "quyết định hiển nhiên, không cần suy nghĩ",
        note: "Cụm từ này thường được dùng khi một quyết định là quá rõ ràng hoặc dễ dàng, không cần suy nghĩ nhiều.",
        example: "Pursuing a career in graphic design was a no-brainer for me.",
        exampleTranslation:
          "Theo đuổi sự nghiệp thiết kế đồ họa là quyết định hiển nhiên với tôi.",
      },
      {
        id: 19,
        word: "Stumble into",
        pronunciation: "/ˈstʌm.bəld ˈɪn.tuː/",
        meaning: "tình cờ bắt đầu, vô tình bước vào",
        note: "Cụm từ này thường dùng để mô tả việc tình cờ phát hiện hoặc bắt đầu làm một điều gì đó mà không có kế hoạch từ trước.",
        example: "I stumbled into nursing later in life.",
        exampleTranslation:
          "Tôi tình cờ bước vào nghề điều dưỡng khi đã lớn tuổi hơn.",
      },
      {
        id: 20,
        word: "Soul-searching",
        pronunciation: "/ˈsoʊlˌsɝː.tʃɪŋ/",
        meaning: "tự kiểm điểm, suy ngẫm sâu sắc về bản thân",
        note: "Dùng để chỉ quá trình tự suy ngẫm nghiêm túc về bản thân hoặc cuộc sống của mình.",
        example:
          "After doing some soul-searching, I realized I wanted to make a real difference.",
        exampleTranslation:
          "Sau khi tự suy ngẫm sâu sắc, tôi nhận ra mình muốn tạo ra sự khác biệt thực sự.",
      },
      {
        id: 21,
        word: "Hit my stride",
        pronunciation: "/hɪt maɪ straɪd/",
        meaning: "bắt đầu làm việc hiệu quả, tìm được nhịp độ tốt",
        note: "Cụm từ này thường dùng khi ai đó tìm được nhịp độ làm việc tốt của mình, sau khi đã qua một khoảng thời gian khởi động.",
        example: "I tend to hit my stride in the afternoon.",
        exampleTranslation:
          "Tôi thường tìm được nhịp độ làm việc hiệu quả vào buổi chiều.",
      },
      {
        id: 22,
        word: "All systems go",
        pronunciation: "/ɔːl ˈsɪs.təmz ɡoʊ/",
        meaning: "sẵn sàng tổng lực",
        note: "Cụm từ này thường được sử dụng để biểu thị sự sẵn sàng hoàn toàn để bắt đầu hoặc tiếp tục một hoạt động.",
        example: "After lunch, I'm all systems go.",
        exampleTranslation:
          "Sau bữa trưa, tôi hoàn toàn sẵn sàng và làm việc hết công suất.",
      },
      {
        id: 23,
        word: "Hit the ground running",
        pronunciation: "/hɪt ðə ɡraʊnd ˈrʌn.ɪŋ/",
        meaning: "bắt đầu nhanh chóng và hăng hái ngay từ đầu",
        note: "Cụm từ này thường được sử dụng khi ai đó bắt đầu một công việc hoặc hoạt động mới một cách nhanh chóng và hiệu quả ngay từ đầu.",
        example: "I hit the ground running as soon as I wake up.",
        exampleTranslation: "Tôi bắt đầu hăng hái ngay khi vừa thức dậy.",
      },
      {
        id: 24,
        word: "Peak",
        pronunciation: "/piːk/",
        meaning: "đỉnh cao (về năng lượng hoặc hiệu suất)",
        note: "Đỉnh cao ở đây có thể hiểu là thời điểm mà một người cảm thấy mình có nhiều năng lượng và sáng tạo nhất.",
        example: "My energy and creativity are at their peak in the morning.",
        exampleTranslation:
          "Năng lượng và sự sáng tạo của tôi đạt đỉnh cao vào buổi sáng.",
      },
    ],
  },

  // ==========================================
  // P1.2 - What You Do (Study)
  // ==========================================
  {
    id: "sp_s1_p2_study",
    skill: "Speaking",
    volume: "9",
    topic: "What You Do – Study",
    part: "P1.2",
    cards: [
      {
        id: 25,
        word: "Marine life",
        pronunciation: "/məˈriːn laɪf/",
        meaning: "sinh vật biển, đời sống dưới biển",
        note: "Thuật ngữ này thường được sử dụng để mô tả tất cả các loài sinh vật sống trong môi trường biển.",
        example: "I'm studying biology, specifically focusing on marine life.",
        exampleTranslation:
          "Tôi đang học sinh học, tập trung cụ thể vào sinh vật biển.",
      },
      {
        id: 26,
        word: "Dive deep",
        pronunciation: "/daɪv diːp/",
        meaning: "nghiên cứu sâu, tìm hiểu kỹ lưỡng",
        note: "Cụm từ này được dùng để chỉ việc tìm hiểu kỹ lưỡng và sâu sắc về một chủ đề nào đó.",
        example: "It's amazing to dive deep into this subject.",
        exampleTranslation:
          "Thật tuyệt khi được nghiên cứu sâu vào môn học này.",
      },
      {
        id: 27,
        word: "Ancient civilizations",
        pronunciation: "/ˈeɪn.ʃənt ˌsɪv.ə.laɪˈzeɪ.ʃənz/",
        meaning: "các nền văn minh cổ đại",
        note: "Cụm từ này thường được sử dụng để mô tả các xã hội hoặc văn minh đã tồn tại từ rất lâu trước đây.",
        example:
          "I'm majoring in history, with a keen interest in ancient civilizations.",
        exampleTranslation:
          "Tôi học chuyên ngành lịch sử, với niềm quan tâm đặc biệt vào các nền văn minh cổ đại.",
      },
      {
        id: 28,
        word: "Piecing together",
        pronunciation: "/ˈpiː.sɪŋ təˈɡeð.ər/",
        meaning: "ghép các mảnh lại để hiểu rõ vấn đề",
        note: "Cụm từ này được dùng khi mô tả quá trình lắp ghép các thông tin hoặc dữ liệu để hiểu rõ một vấn đề hoặc tình huống.",
        example:
          "It's like being a detective, piecing together stories from the past.",
        exampleTranslation:
          "Giống như một thám tử, ghép các mảnh câu chuyện từ quá khứ lại với nhau.",
      },
      {
        id: 29,
        word: "Hooked on",
        pronunciation: "/hʊkt ɒn/",
        meaning: "mê mẩn, say mê không dứt ra được",
        note: "Dùng để chỉ tình trạng say mê hoặc không thể ngừng quan tâm đến một sự việc hoặc chủ đề nào đó.",
        example: "For as long as I can remember, I've been hooked on biology.",
        exampleTranslation: "Từ lâu tôi đã mê mẩn môn sinh học.",
      },
      {
        id: 30,
        word: "Natural choice",
        pronunciation: "/ˈnætʃ.ər.əl tʃɔɪs/",
        meaning: "lựa chọn tự nhiên, hiển nhiên",
        note: "Dùng để chỉ một quyết định hoặc lựa chọn dễ dàng và rõ ràng, thường dựa trên sở thích cá nhân hoặc hoàn cảnh.",
        example:
          "Studying marine biology was a natural choice – it's been my dream field since I was young.",
        exampleTranslation:
          "Học sinh học biển là lựa chọn hiển nhiên – đó là lĩnh vực tôi mơ ước từ nhỏ.",
      },
      {
        id: 31,
        word: "Grew over time",
        pronunciation: "/ɡruː ˈəʊ.və taɪm/",
        meaning: "phát triển dần theo thời gian",
        note: "Dùng để chỉ quá trình tăng trưởng, phát triển hoặc thay đổi dần dần theo thời gian.",
        example: "My love for history grew over time.",
        exampleTranslation:
          "Tình yêu của tôi với lịch sử phát triển dần theo thời gian.",
      },
      {
        id: 32,
        word: "It clicked",
        pronunciation: "/klɪkt/",
        meaning: "chợt hiểu ra, cảm thấy phù hợp đột ngột",
        note: "Thường dùng để chỉ khoảnh khắc một ý tưởng hoặc khái niệm trở nên rõ ràng hoặc dễ hiểu một cách đột ngột.",
        example:
          "The stories, the mysteries, the way history shapes our world – it all just clicked for me.",
        exampleTranslation:
          "Những câu chuyện, bí ẩn, cách lịch sử định hình thế giới – tất cả chợt trở nên rõ ràng và phù hợp với tôi.",
      },
      {
        id: 33,
        word: "Absorb information",
        pronunciation: "/əbˈzɔːrb ˌɪn.fəˈmeɪ.ʃən/",
        meaning: "tiếp thu thông tin",
        note: "Thường dùng để chỉ việc hiểu và lĩnh hội thông tin một cách triệt để.",
        example:
          "I find it easier to absorb information and concentrate on my studies in the morning.",
        exampleTranslation:
          "Tôi thấy dễ tiếp thu thông tin và tập trung học tập hơn vào buổi sáng.",
      },
      {
        id: 34,
        word: "In the zone",
        pronunciation: "/ɪn ðə zəʊn/",
        meaning: "trong trạng thái tập trung cao độ",
        note: "Cụm từ này được dùng để mô tả một trạng thái tập trung tối đa, thường khi làm việc hoặc hoạt động nghệ thuật.",
        example: "Post-lunch, I'm fully in the zone.",
        exampleTranslation:
          "Sau bữa trưa, tôi hoàn toàn trong trạng thái tập trung cao độ.",
      },
    ],
  },

  // ==========================================
  // P1.3 - The Area Where You Live
  // ==========================================
  {
    id: "sp_s1_p3_area",
    skill: "Speaking",
    volume: "9",
    topic: "The Area Where You Live",
    part: "P1.3",
    cards: [
      {
        id: 35,
        word: "Fresh start",
        pronunciation: "/freʃ stɑːt/",
        meaning: "khởi đầu mới",
        note: "Thường được sử dụng khi mô tả sự bắt đầu lại từ đầu hoặc thay đổi đáng kể trong cuộc sống.",
        example: "It's a fresh start in a new neighborhood.",
        exampleTranslation: "Đó là một khởi đầu mới ở một khu phố mới.",
      },
      {
        id: 36,
        word: "Lay of the land",
        pronunciation: "/leɪ əv ðə lænd/",
        meaning: "hiểu biết về khu vực hoặc tình hình tổng thể",
        note: "Thường dùng để chỉ việc làm quen cách một nơi hoặc tình hình cụ thể được tổ chức hoặc hoạt động.",
        example: "I'm still figuring out the lay of the land.",
        exampleTranslation:
          "Tôi vẫn đang tìm hiểu địa hình và cách mọi thứ hoạt động ở đây.",
      },
      {
        id: 37,
        word: "Part of who I am",
        pronunciation: "/pɑːt əv huː aɪ æm/",
        meaning: "một phần của bản thân, gắn liền với bản sắc cá nhân",
        note: "Dùng để diễn đạt ý niệm rằng một điều gì đó, như một nơi cư trú, đã trở nên quan trọng và gắn liền với bản sắc cá nhân.",
        example:
          "It's become more than just a place to live; it's a part of who I am.",
        exampleTranslation:
          "Nơi này đã trở thành hơn là chỗ ở; nó là một phần của con người tôi.",
      },
      {
        id: 38,
        word: "Grown along with",
        pronunciation: "/ɡrəʊn əˈlɒŋ wɪð/",
        meaning: "phát triển cùng với",
        note: "Được dùng khi mô tả sự phát triển hoặc thay đổi cùng lúc với một thứ khác, chẳng hạn như một địa điểm hay một quá trình.",
        example:
          "I've seen the area change and grow, and it feels like I've grown along with it.",
        exampleTranslation:
          "Tôi đã thấy khu vực này thay đổi và phát triển, và cảm giác như tôi cũng lớn lên cùng nó.",
      },
      {
        id: 39,
        word: "Green space",
        pronunciation: "/ɡriːn speɪs/",
        meaning: "không gian xanh (công viên, vườn cây)",
        note: "Thường được dùng để chỉ các khu vực có cảnh quan thiên nhiên như công viên hoặc khu vườn, đặc biệt quan trọng trong môi trường đô thị.",
        example: "A bit more green space or a park would be great.",
        exampleTranslation:
          "Sẽ tuyệt vời nếu có thêm không gian xanh hoặc công viên.",
      },
      {
        id: 40,
        word: "Modern amenities",
        pronunciation: "/ˈmɒd.ən əˈmiː.nɪ.tiz/",
        meaning: "tiện nghi hiện đại",
        note: "Dùng để mô tả các tiện ích hay đặc điểm của một nơi ở hoặc tòa nhà, phản ánh tiêu chuẩn hoặc lối sống hiện đại.",
        example: "Some more modern amenities would make life here even better.",
        exampleTranslation:
          "Thêm các tiện nghi hiện đại sẽ làm cuộc sống ở đây tốt hơn nữa.",
      },
      {
        id: 41,
        word: "Cozy vibe",
        pronunciation: "/ˈkəʊ.zi vaɪb/",
        meaning: "không khí ấm cúng, dễ chịu",
        note: "Thường dùng để mô tả cảm giác thoải mái và dễ chịu của một không gian sống, tạo cảm giác như ở nhà.",
        example:
          "It's got everything I need – a cozy vibe, friendly neighbors, and it's peaceful.",
        exampleTranslation:
          "Nơi này có tất cả những gì tôi cần – không khí ấm cúng, hàng xóm thân thiện và yên bình.",
      },
      {
        id: 42,
        word: "Spoil the balance",
        pronunciation: "/spɔɪl ðə ˈbæl.əns/",
        meaning: "phá vỡ sự cân bằng hoàn hảo",
        note: "Dùng để diễn đạt việc làm hỏng hay làm mất đi sự cân đối hoặc hài hòa của một tình huống hoặc môi trường nào đó.",
        example:
          "Changing anything might just spoil the perfect balance I've found here.",
        exampleTranslation:
          "Thay đổi bất cứ điều gì có thể phá vỡ sự cân bằng hoàn hảo mà tôi đã tìm thấy ở đây.",
      },
      {
        id: 43,
        word: "Mix of ages",
        pronunciation: "/mɪks əv eɪdʒɪz/",
        meaning: "sự đa dạng về độ tuổi",
        note: "Thường dùng để chỉ sự phong phú về độ tuổi của người dân trong một khu vực, từ trẻ em đến người già.",
        example:
          "It's a real mix of ages around here – young families, professionals, and retirees.",
        exampleTranslation:
          "Đây thực sự là nơi đa dạng về độ tuổi – gia đình trẻ, người đi làm và người về hưu.",
      },
      {
        id: 44,
        word: "Character",
        pronunciation: "/ˈkær.ək.tər/",
        meaning: "đặc trưng, bản sắc riêng (của nơi chốn)",
        note: "Thường dùng để mô tả tính cách đặc biệt hoặc độc đáo của một người, địa điểm hoặc môi trường.",
        example:
          "The age diversity adds a lot of character to the neighborhood.",
        exampleTranslation:
          "Sự đa dạng về độ tuổi tạo thêm nhiều bản sắc cho khu phố.",
      },
      {
        id: 45,
        word: "Lively",
        pronunciation: "/ˈlaɪ.vli/",
        meaning: "sôi động, đầy sức sống",
        note: "Dùng để chỉ một không khí hoặc môi trường đầy năng lượng và hoạt bát.",
        example:
          "It's mostly young professionals which makes for a pretty lively vibe.",
        exampleTranslation:
          "Chủ yếu là người trẻ đi làm, tạo nên một không khí khá sôi động.",
      },
      {
        id: 46,
        word: "Age diversity",
        pronunciation: "/eɪdʒ daɪˈvɜː.sɪ.ti/",
        meaning: "sự đa dạng về độ tuổi trong cộng đồng",
        note: "Thường dùng để chỉ sự phong phú và đa dạng về lứa tuổi trong một nhóm người hoặc cộng đồng.",
        example:
          "Sometimes I wish there was a bit more age diversity in my neighborhood.",
        exampleTranslation:
          "Đôi khi tôi ước khu phố mình có thêm một chút đa dạng về độ tuổi.",
      },
      {
        id: 47,
        word: "Boutiques",
        pronunciation: "/buːˈtiːks/",
        meaning: "cửa hàng thời trang nhỏ, độc đáo",
        note: "Được dùng để chỉ các cửa hàng nhỏ chuyên bán hàng thời trang hoặc hàng độc đáo, thường có tính chất cao cấp hoặc độc quyền.",
        example:
          "We've got loads of shops around, from big supermarkets to cute little boutiques.",
        exampleTranslation:
          "Xung quanh có rất nhiều cửa hàng, từ siêu thị lớn đến các cửa hàng thời trang nhỏ dễ thương.",
      },
      {
        id: 48,
        word: "Essentials",
        pronunciation: "/ɪˈsen.ʃəlz/",
        meaning: "hàng hóa thiết yếu",
        note: "Dùng để chỉ những vật dụng hoặc hàng hóa cần thiết cho cuộc sống hàng ngày.",
        example:
          "There are a few essentials, but for anything special, I have to travel a bit.",
        exampleTranslation:
          "Có một vài hàng thiết yếu, nhưng để mua đồ đặc biệt thì tôi phải đi xa hơn.",
      },
      {
        id: 49,
        word: "Trade-off",
        pronunciation: "/ˈtreɪd ɒf/",
        meaning: "sự đánh đổi, chấp nhận điểm bất lợi để có lợi ích khác",
        note: "Thường được sử dụng khi mô tả việc phải lựa chọn giữa hai yếu tố đều có giá trị nhưng không tương thích, cần phải có sự thỏa hiệp.",
        example: "It's a trade-off for living in a quieter area.",
        exampleTranslation:
          "Đó là sự đánh đổi khi chọn sống ở khu vực yên tĩnh hơn.",
      },
    ],
  },

  // ==========================================
  // P1.4 - Sunglasses
  // ==========================================
  {
    id: "sp_s2_p4_sunglasses",
    skill: "Speaking",
    volume: "9",
    topic: "Sunglasses",
    part: "P1.4",
    cards: [
      {
        id: 50,
        word: "Go-to accessory",
        pronunciation: "/ˈɡoʊ.tuː əkˈses.ə.ri/",
        meaning: "phụ kiện ưa chuộng",
        note: "Thường dùng để chỉ một món phụ kiện mà người ta thích sử dụng thường xuyên hoặc cảm thấy tin cậy.",
        example:
          "They're like my go-to accessory, especially on sunny days or when I'm driving.",
        exampleTranslation:
          "Chúng như phụ kiện ưa chuộng của tôi, đặc biệt vào những ngày nắng hoặc khi lái xe.",
      },
      {
        id: 51,
        word: "Add a bit of style",
        pronunciation: "/æd ə bɪt əv staɪl/",
        meaning: "tăng thêm phong cách",
        note: "Dùng để mô tả việc tạo thêm nét đẹp hoặc phong cách cho trang phục hoặc diện mạo tổng thể.",
        example: "Plus, they add a bit of style to whatever I'm wearing.",
        exampleTranslation:
          "Ngoài ra, chúng còn tăng thêm phong cách cho bất kỳ trang phục nào tôi mặc.",
      },
      {
        id: 52,
        word: "Super bright",
        pronunciation: "/ˈsuː.pər braɪt/",
        meaning: "cực kỳ sáng, chói",
        note: "Dùng để mô tả ánh sáng rất mạnh hoặc chói lóa, thường ám chỉ ánh nắng mặt trời gay gắt.",
        example:
          "I don't feel the need to wear sunglasses unless it's super bright out.",
        exampleTranslation:
          "Tôi không thấy cần đeo kính râm trừ khi trời cực kỳ chói.",
      },
      {
        id: 53,
        word: "Occasional thing",
        pronunciation: "/əˈkeɪ.ʒən.əl θɪŋ/",
        meaning: "thứ dùng thỉnh thoảng",
        note: "Thường dùng để chỉ một hoạt động hoặc sử dụng một thứ gì đó không thường xuyên, chỉ vào những dịp cụ thể.",
        example: "I guess they're more of an occasional thing for me.",
        exampleTranslation:
          "Tôi nghĩ chúng chỉ là thứ tôi dùng thỉnh thoảng thôi.",
      },
      {
        id: 54,
        word: "Fashion statement",
        pronunciation: "/ˈfæʃ.ən ˈsteɪt.mənt/",
        meaning: "phát ngôn thời trang, thứ thể hiện phong cách cá nhân",
        note: "Dùng để chỉ một món đồ giúp thể hiện phong cách cá nhân hoặc quan điểm thời trang.",
        example: "I think of them as both a fashion statement and a necessity.",
        exampleTranslation:
          "Tôi coi chúng vừa là phát ngôn thời trang vừa là vật dụng thiết yếu.",
      },
      {
        id: 55,
        word: "Worth the investment",
        pronunciation: "/wɜːrθ ðə ɪnˈvest.mənt/",
        meaning: "đáng để đầu tư",
        note: "Dùng để chỉ một thứ gì đó có giá trị hoặc lợi ích đủ để biện minh cho việc chi tiêu.",
        example:
          "Quality sunglasses last longer and protect your eyes better, so they're worth the investment.",
        exampleTranslation:
          "Kính râm chất lượng tốt bền hơn và bảo vệ mắt tốt hơn, nên đáng để đầu tư.",
      },
      {
        id: 56,
        word: "Budget-friendly",
        pronunciation: "/ˈbʌdʒ.ɪt ˈfrend.li/",
        meaning: "phù hợp với ngân sách, không quá đắt",
        note: "Dùng để chỉ một thứ gì đó không quá đắt đỏ, phù hợp với khả năng tài chính.",
        example:
          "I'd rather keep it budget-friendly since I tend to misplace them often.",
        exampleTranslation:
          "Tôi muốn giữ mức giá phù hợp với ngân sách vì tôi hay để thất lạc chúng.",
      },
      {
        id: 57,
        word: "Break the bank",
        pronunciation: "/breɪk ðə bæŋk/",
        meaning: "tốn kém, tiêu tốn quá nhiều tiền",
        note: "Thường dùng để mô tả một việc chi tiêu quá mức hoặc quá đắt đỏ so với khả năng tài chính.",
        example: "I go for something that looks good but won't break the bank.",
        exampleTranslation: "Tôi chọn thứ trông đẹp nhưng không quá tốn kém.",
      },
      {
        id: 58,
        word: "Practical",
        pronunciation: "/ˈpræk.tɪ.kəl/",
        meaning: "thực dụng, hữu ích",
        note: "Thường dùng để chỉ một thứ gì đó có ích và hợp lý, có thể được sử dụng trong cuộc sống hàng ngày.",
        example:
          "I think sunglasses can be a great gift – they're practical and stylish.",
        exampleTranslation:
          "Tôi nghĩ kính râm là món quà tuyệt vời – vừa thực dụng vừa thời trang.",
      },
      {
        id: 59,
        word: "Special occasion",
        pronunciation: "/ˈspeʃ.əl əˈkeɪ.ʒən/",
        meaning: "dịp đặc biệt",
        note: "Dùng để chỉ một thời điểm hoặc sự kiện quan trọng, thường liên quan đến việc kỷ niệm hoặc tổ chức.",
        example:
          "I'd definitely consider buying them a pair for a special occasion.",
        exampleTranslation:
          "Tôi chắc chắn sẽ cân nhắc mua cho họ một cặp vào dịp đặc biệt.",
      },
      {
        id: 60,
        word: "Put them down",
        pronunciation: "/pʊt ðɛm daʊn/",
        meaning: "đặt xuống (rồi quên mất)",
        note: "Thường dùng để chỉ việc để một vật gì đó ở một nơi nào đó và sau đó quên nó.",
        example:
          "I tend to put them down and forget them, or they fall out of my bag.",
        exampleTranslation:
          "Tôi hay đặt chúng xuống rồi quên mất, hoặc chúng rơi ra khỏi túi.",
      },
      {
        id: 61,
        word: "Spend a fortune",
        pronunciation: "/spɛnd ə ˈfɔr.tʃuːn/",
        meaning: "tiêu rất nhiều tiền",
        note: "Dùng để chỉ việc chi tiêu một lượng lớn tiền, thường cho thấy sự đầu tư đáng kể.",
        example:
          "It's why I don't spend a fortune on them – I know there's a good chance they won't be with me for long.",
        exampleTranslation:
          "Đó là lý do tôi không tiêu quá nhiều tiền vào chúng – vì biết chúng sẽ không ở với tôi lâu.",
      },
      {
        id: 62,
        word: "Keep track of",
        pronunciation: "/kiːp træk əv/",
        meaning: "theo dõi, quản lý",
        note: "Thường dùng để chỉ việc duy trì sự nhận thức hoặc thông tin về một người hoặc một vật nào đó.",
        example:
          "I always keep them in a case when I'm not wearing them. It helps me keep track of them.",
        exampleTranslation:
          "Tôi luôn để chúng trong hộp khi không đeo. Điều đó giúp tôi không bị thất lạc.",
      },
      {
        id: 63,
        word: "Hesitant",
        pronunciation: "/ˈhez.ɪ.tənt/",
        meaning: "do dự, không chắc chắn",
        note: "Dùng để chỉ cảm giác không chắc chắn hoặc thiếu tự tin khi đưa ra quyết định hoặc hành động.",
        example: "I'm a bit hesitant to buy sunglasses for someone else.",
        exampleTranslation: "Tôi hơi do dự khi mua kính râm cho người khác.",
      },
      {
        id: 64,
        word: "Personal choice",
        pronunciation: "/ˈpɜː.sən.əl tʃɔɪs/",
        meaning: "sự lựa chọn cá nhân",
        note: "Thường dùng để mô tả quyết định dựa trên sở thích hoặc niềm tin cá nhân, không bị ảnh hưởng bởi ý kiến của người khác.",
        example:
          "It's tricky because they're such a personal choice – the style, fit, all that.",
        exampleTranslation:
          "Thật khó vì đó là sự lựa chọn cá nhân – kiểu dáng, độ vừa vặn, tất cả mọi thứ.",
      },
    ],
  },

  // ==========================================
  // P1.5 - Feeling Bored
  // ==========================================
  {
    id: "sp_s2_p5_bored",
    skill: "Speaking",
    volume: "9",
    topic: "Feeling Bored",
    part: "P1.5",
    cards: [
      {
        id: 65,
        word: "Hardly ever",
        pronunciation: "/ˈhɑːd.li ˈev.ər/",
        meaning: "hầu như không bao giờ",
        note: "Dùng để chỉ một hành động hoặc trạng thái xảy ra rất hiếm, gần như là không.",
        example:
          "I hardly ever feel bored – there's always something to do or something new to learn.",
        exampleTranslation:
          "Tôi hầu như không bao giờ cảm thấy chán – luôn có việc để làm hoặc điều mới để học.",
      },
      {
        id: 66,
        word: "Occupied",
        pronunciation: "/ˈɒk.jʊ.paɪd/",
        meaning: "bận rộn, có việc để làm",
        note: "Thường được dùng để chỉ tình trạng có việc làm, hoạt động hoặc một sự quan tâm cụ thể chiếm hết thời gian.",
        example: "I manage to keep myself pretty occupied.",
        exampleTranslation: "Tôi luôn giữ cho mình khá bận rộn.",
      },
      {
        id: 67,
        word: "Run out of",
        pronunciation: "/rʌn aʊt əv/",
        meaning: "cạn kiệt, hết",
        note: "Dùng để chỉ việc sử dụng hết một thứ gì đó, không còn lại nữa.",
        example:
          "Sometimes it feels like I've run out of interesting things to do.",
        exampleTranslation:
          "Đôi khi tôi cảm thấy như đã hết những thứ thú vị để làm.",
      },
      {
        id: 68,
        word: "Be stuck inside",
        pronunciation: "/stʌk ɪnˈsaɪd/",
        meaning: "mắc kẹt bên trong, không thể ra ngoài",
        note: "Thường được dùng khi ai đó không thể ra khỏi nhà hoặc một không gian cụ thể do điều kiện bên ngoài hoặc hạn chế khác.",
        example:
          "I get bored especially when I'm stuck inside or have some free time with no plans.",
        exampleTranslation:
          "Tôi thấy chán đặc biệt khi mắc kẹt trong nhà hoặc có thời gian rảnh mà không có kế hoạch.",
      },
      {
        id: 69,
        word: "Hanging out",
        pronunciation: "/ˈhæŋ.ɪŋ aʊt/",
        meaning: "đi chơi, tụ tập",
        note: "Thường dùng để chỉ việc dành thời gian cùng bạn bè hoặc gia đình một cách thư giãn.",
        example: "Hanging out with friends made each day pretty fun.",
        exampleTranslation:
          "Việc tụ tập với bạn bè làm cho mỗi ngày trở nên khá thú vị.",
      },
      {
        id: 70,
        word: "Dragged on",
        pronunciation: "/dræɡd ɒn/",
        meaning: "kéo dài lê thê",
        note: "Thường dùng để chỉ một tình huống hoặc sự kiện tiếp diễn quá lâu, gây cảm giác nhàm chán hoặc mệt mỏi.",
        example:
          "There were times when school felt like it dragged on forever.",
        exampleTranslation:
          "Có những lúc trường học cảm giác như kéo dài mãi không hết.",
      },
      {
        id: 71,
        word: "Monotonous",
        pronunciation: "/məˈnɒt.ən.əs/",
        meaning: "đơn điệu, nhàm chán",
        note: "Dùng để chỉ một hoạt động hoặc tình huống không thay đổi, thiếu sự đa dạng và hấp dẫn.",
        example: "Sitting in a classroom all day could get really monotonous.",
        exampleTranslation:
          "Ngồi trong lớp học cả ngày có thể trở nên thực sự đơn điệu.",
      },
      {
        id: 72,
        word: "Lack of action",
        pronunciation: "/læk əv ˈæk.ʃən/",
        meaning: "thiếu hoạt động, không có gì xảy ra",
        note: "Dùng để mô tả tình trạng không có sự kiện, hoạt động hoặc sự thay đổi nào diễn ra.",
        example: "I get bored when there's a lack of action.",
        exampleTranslation: "Tôi cảm thấy chán khi thiếu hoạt động.",
      },
      {
        id: 73,
        word: "On the move",
        pronunciation: "/ɒn ðə muːv/",
        meaning: "đang hoạt động, luôn di chuyển",
        note: "Thường được dùng để chỉ ai đó liên tục di chuyển hoặc tham gia vào các hoạt động khác nhau.",
        example:
          "I'm someone who likes to be on the move or engaged in something exciting.",
        exampleTranslation:
          "Tôi là người thích luôn hoạt động hoặc tham gia vào điều gì đó hấp dẫn.",
      },
      {
        id: 74,
        word: "Routine",
        pronunciation: "/ruːˈtiːn/",
        meaning: "công việc hàng ngày lặp đi lặp lại",
        note: "Thường được dùng để mô tả những công việc hoặc hoạt động thường xuyên và có tính chất lặp đi lặp lại, thiếu sự mới mẻ.",
        example:
          "Routine stuff gets to me the most – like repetitive chores or paperwork.",
        exampleTranslation:
          "Những việc lặp đi lặp lại làm tôi chán nhất – như việc nhà hay giấy tờ hành chính.",
      },
      {
        id: 75,
        word: "Zoning out",
        pronunciation: "/ˈzəʊ.nɪŋ aʊt/",
        meaning: "mất tập trung, đầu óc lơ đễnh",
        note: "Dùng để chỉ tình trạng mất tập trung, không chú ý vào công việc hoặc hoạt động đang thực hiện.",
        example:
          "It feels like there's no end to it sometimes, and I find myself zoning out.",
        exampleTranslation:
          "Đôi khi cảm giác như không có hồi kết, và tôi thấy mình bắt đầu lơ đễnh.",
      },
      {
        id: 76,
        word: "Boredom creeping in",
        pronunciation: "/ˈbɔː.dəm ˈkriː.pɪŋ ɪn/",
        meaning: "cảm giác chán chường dần dần xuất hiện",
        note: "Dùng để mô tả sự xuất hiện từ từ của cảm giác chán nản hoặc mệt mỏi.",
        example:
          "Whenever I feel boredom creeping in, I dive into my hobbies or try something new.",
        exampleTranslation:
          "Mỗi khi cảm thấy cơn chán chường dần ập đến, tôi lao vào sở thích hoặc thử điều gì đó mới.",
      },
      {
        id: 77,
        word: "Dive into",
        pronunciation: "/daɪv ˈɪn.tuː/",
        meaning: "lao vào làm, bắt đầu hăng hái",
        note: "Dùng để chỉ việc bắt đầu một hoạt động một cách hứng thú và nhanh chóng.",
        example:
          "I dive into my hobbies or try something new whenever I feel bored.",
        exampleTranslation:
          "Tôi lao vào sở thích hoặc thử điều gì đó mới mỗi khi cảm thấy chán.",
      },
      {
        id: 78,
        word: "Hit up",
        pronunciation: "/hɪt ʌp/",
        meaning: "liên hệ với ai đó",
        note: "Dùng để chỉ việc liên lạc với ai đó, thường là để mời họ tham gia một hoạt động hoặc trò chuyện.",
        example: "I usually hit up a friend or family to hang out or chat.",
        exampleTranslation:
          "Tôi thường liên hệ với bạn bè hoặc gia đình để đi chơi hoặc trò chuyện.",
      },
      {
        id: 79,
        word: "Shake off",
        pronunciation: "/ʃeɪk ɒf/",
        meaning: "thoát khỏi, loại bỏ",
        note: "Dùng để chỉ việc loại bỏ hoặc vượt qua một điều gì đó không mong muốn hoặc khó chịu, ví dụ như cảm giác chán chường.",
        example:
          "Just getting out of the house and meeting people is enough to shake off the boredom.",
        exampleTranslation:
          "Chỉ cần ra khỏi nhà và gặp gỡ mọi người là đủ để thoát khỏi cơn chán.",
      },
    ],
  },

  // ==========================================
  // P1.6 - Colours
  // ==========================================
  {
    id: "sp_s2_p6_colours",
    skill: "Speaking",
    volume: "9",
    topic: "Colours",
    part: "P1.6",
    cards: [
      {
        id: 80,
        word: "Calming",
        pronunciation: "/ˈkɑː.mɪŋ/",
        meaning: "mang lại cảm giác yên bình, thư giãn",
        note: "Thường được dùng để mô tả một màu sắc hoặc không gian mang lại cảm giác thư giãn và bình yên.",
        example:
          "I've always been a fan of blue. It's just so calming and versatile.",
        exampleTranslation:
          "Tôi luôn yêu thích màu xanh. Nó rất yên bình và linh hoạt.",
      },
      {
        id: 81,
        word: "Versatile",
        pronunciation: "/ˈvɜː.sə.taɪl/",
        meaning: "đa năng, linh hoạt, dùng được trong nhiều tình huống",
        note: "Dùng để mô tả một thứ có thể sử dụng được trong nhiều tình huống khác nhau hoặc có nhiều công dụng.",
        example:
          "Blue is just so calming and versatile – it fits almost every mood and setting.",
        exampleTranslation:
          "Xanh lam thật yên bình và linh hoạt – phù hợp với hầu hết mọi tâm trạng và hoàn cảnh.",
      },
      {
        id: 82,
        word: "Warm colours",
        pronunciation: "/wɔːm ˈkʌl.əz/",
        meaning: "màu ấm (đỏ, cam, vàng)",
        note: "Thường được dùng để mô tả các màu sắc rực rỡ, nổi bật như đỏ, cam và vàng.",
        example: "Sometimes I'm into warm colours like red or orange.",
        exampleTranslation: "Đôi khi tôi thích màu ấm như đỏ hoặc cam.",
      },
      {
        id: 83,
        word: "Cooler tones",
        pronunciation: "/ˈkuː.lər təʊnz/",
        meaning: "màu mát (xanh lam, xanh lá, tím)",
        note: "Dùng để mô tả các màu sắc mang lại cảm giác nhẹ nhàng, dễ chịu như xanh dương, xanh lá và tím.",
        example: "Other times I prefer cooler tones like green or purple.",
        exampleTranslation:
          "Những lúc khác tôi lại thích màu mát như xanh lá hoặc tím.",
      },
      {
        id: 84,
        word: "Standing out",
        pronunciation: "/ˈstænd.ɪŋ aʊt/",
        meaning: "nổi bật, thu hút sự chú ý",
        note: "Dùng để chỉ việc thu hút sự chú ý hoặc khác biệt so với môi trường xung quanh.",
        example: "I was all about standing out and having fun with my clothes.",
        exampleTranslation:
          "Tôi chỉ muốn nổi bật và vui vẻ với trang phục của mình.",
      },
      {
        id: 85,
        word: "Go-to choices",
        pronunciation: "/ˈɡoʊ.tuː tʃɔɪ.sɪz/",
        meaning: "lựa chọn ưa thích, hay dùng nhất",
        note: "Thường dùng để mô tả những sự lựa chọn thường xuyên hoặc phổ biến của một người trong một tình huống cụ thể.",
        example: "Bright yellows, pinks, and greens were my go-to choices.",
        exampleTranslation:
          "Vàng tươi, hồng và xanh lá là những màu tôi hay chọn nhất.",
      },
      {
        id: 86,
        word: "Muted tones",
        pronunciation: "/ˈmjuː.tɪd təʊnz/",
        meaning: "màu nhẹ nhàng, không chói",
        note: "Dùng để mô tả các màu sắc không quá chói lọi hoặc rực rỡ, có tính chất dịu dàng và không gây chú ý mạnh.",
        example: "I was more into muted tones even as a kid.",
        exampleTranslation: "Tôi thích màu nhẹ nhàng ngay cả khi còn nhỏ.",
      },
      {
        id: 87,
        word: "Neutral colours",
        pronunciation: "/ˈnjuː.trəl ˈkʌl.əz/",
        meaning: "màu trung tính (trắng, đen, xám, be)",
        note: "Thường được dùng để chỉ các màu sắc không rực rỡ hoặc không mang hướng cụ thể nào, dễ dàng phối hợp với các màu khác.",
        example: "I preferred wearing darker or more neutral colours.",
        exampleTranslation:
          "Tôi thích mặc những màu tối hơn hoặc màu trung tính hơn.",
      },
      {
        id: 88,
        word: "Soft grey",
        pronunciation: "/sɒft ɡreɪ/",
        meaning: "xám nhạt, xám nhẹ",
        note: "Dùng để mô tả một màu xám nhẹ, không quá đậm hay chói, thường mang lại cảm giác dịu dàng và tinh tế.",
        example: "I'd probably go for a soft grey for my room's walls.",
        exampleTranslation: "Tôi có thể sẽ chọn màu xám nhạt cho tường phòng.",
      },
      {
        id: 89,
        word: "Backdrop",
        pronunciation: "/ˈbæk.drɒp/",
        meaning: "phông nền, bối cảnh nền",
        note: "Thường được dùng để chỉ bối cảnh hoặc nền tảng cho một không gian, sự kiện, hoặc tình huống.",
        example: "It's the perfect backdrop that isn't too overpowering.",
        exampleTranslation: "Đó là phông nền hoàn hảo mà không quá áp đảo.",
      },
      {
        id: 90,
        word: "Extension of my style",
        pronunciation: "/ɪkˈsten.ʃən əv maɪ staɪl/",
        meaning: "sự mở rộng của phong cách cá nhân",
        note: "Dùng để mô tả cách một thứ gì đó (như màu sắc của xe hơi) phản ánh hoặc bổ sung cho phong cách cá nhân của một người.",
        example: "I see the car colour as an extension of my own style.",
        exampleTranslation:
          "Tôi coi màu xe là sự mở rộng của phong cách cá nhân mình.",
      },
      {
        id: 91,
        word: "Flashy",
        pronunciation: "/ˈflæʃ.i/",
        meaning: "lòe loẹt, quá bắt mắt",
        note: "Dùng để chỉ một thứ gì đó rực rỡ, bắt mắt, thường một cách quá mức hoặc không phù hợp.",
        example:
          "As long as it's not something too flashy, I'm good with any colour.",
        exampleTranslation:
          "Miễn là không quá lòe loẹt, tôi chấp nhận bất kỳ màu nào.",
      },
      {
        id: 92,
        word: "Practicality",
        pronunciation: "/prækˈtɪk.əl.ɪ.ti/",
        meaning: "tính thực tế, sự thực dụng",
        note: "Thường được dùng để chỉ tính cách hoặc hành vi thực dụng, tập trung vào tính năng hơn là ngoại hình.",
        example: "Practicality over appearance, that's my take.",
        exampleTranslation:
          "Thực dụng hơn ngoại hình, đó là quan điểm của tôi.",
      },
      {
        id: 93,
        word: "Vibrant teal",
        pronunciation: "/ˈvaɪ.brənt tiːl/",
        meaning: "xanh ngọc bích sáng, rực rỡ",
        note: "Dùng để mô tả một màu xanh ngọc bích rực rỡ, đầy sức sống và năng lượng.",
        example: "I'd love to paint my walls a vibrant teal.",
        exampleTranslation:
          "Tôi muốn sơn tường bằng màu xanh ngọc bích rực rỡ.",
      },
      {
        id: 94,
        word: "Splash of personality",
        pronunciation: "/splæʃ əv ˌpɜː.səˈnæl.ɪ.ti/",
        meaning: "nét cá tính nổi bật",
        note: "Dùng để chỉ một sự biểu hiện nhỏ nhưng đáng chú ý của tính cách cá nhân thông qua trang trí hoặc phong cách.",
        example:
          "I think it's a great way to add a splash of personality to my room.",
        exampleTranslation:
          "Tôi nghĩ đó là cách tuyệt vời để thêm nét cá tính vào phòng mình.",
      },
    ],
  },

  // ==========================================
  // P1.7 - Collecting Things
  // ==========================================
  {
    id: "sp_s2_p7_collecting",
    skill: "Speaking",
    volume: "9",
    topic: "Collecting Things",
    part: "P1.7",
    cards: [
      {
        id: 95,
        word: "Philatelist",
        pronunciation: "/fɪˈlæt.ə.lɪst/",
        meaning: "người sưu tầm tem",
        note: "Một từ chuyên ngành thú vị, thường liên quan đến những người có đam mê sâu sắc với tem.",
        example:
          "My grandad was quite the philatelist, and I inherited the hobby from him.",
        exampleTranslation:
          "Ông tôi là người sưu tầm tem, và tôi thừa hưởng sở thích đó từ ông.",
      },
      {
        id: 96,
        word: "Vintage",
        pronunciation: "/ˈvɪn.tɪdʒ/",
        meaning: "cổ điển, có giá trị từ quá khứ",
        note: "'Vintage' thường gợi lên nét đẹp, giá trị của quá khứ trong tâm trí người nghe.",
        example:
          "I'm particularly drawn to those vintage stamps from the early 20th century.",
        exampleTranslation:
          "Tôi đặc biệt bị thu hút bởi những con tem cổ điển từ đầu thế kỷ 20.",
      },
      {
        id: 97,
        word: "End up gathering dust",
        pronunciation: "/ɛnd ʌp ˈɡæðərɪŋ dʌst/",
        meaning: "cuối cùng chỉ để tích bụi, bị bỏ xó",
        note: "Cụm từ này thường được sử dụng để mô tả việc đồ vật không được sử dụng và bị bỏ quên trong một khoảng thời gian dài.",
        example:
          "I've never been the kind of person to hoard things where they end up gathering dust.",
        exampleTranslation:
          "Tôi chưa bao giờ là kiểu người tích trữ đồ đạc rồi để chúng tích bụi.",
      },
      {
        id: 98,
        word: "Minimalist approach",
        pronunciation: "/ˈmɪnɪməlɪst əˈproʊtʃ/",
        meaning: "cách tiếp cận tối giản",
        note: "Cụm từ này thường được sử dụng để mô tả việc tiếp cận một vấn đề hoặc một lối sống với tinh thần đơn giản và sự tối giản, tập trung vào những yếu tố quan trọng nhất.",
        example: "I prefer to take a more minimalist approach to life.",
        exampleTranslation:
          "Tôi thích tiếp cận cuộc sống theo hướng tối giản hơn.",
      },
      {
        id: 99,
        word: "Handicrafts",
        pronunciation: "/ˈhændi.kræft/",
        meaning: "hàng thủ công",
        note: "'Handicrafts' không chỉ là sản phẩm, mà còn là biểu hiện của truyền thống và bản sắc văn hóa.",
        example:
          "In Vietnam, collecting traditional handicrafts tends to be a big deal.",
        exampleTranslation:
          "Ở Việt Nam, việc sưu tầm hàng thủ công truyền thống là điều rất phổ biến.",
      },
      {
        id: 100,
        word: "Cultural heritage",
        pronunciation: "/ˈkʌltʃərəl ˈhɛrɪtɪdʒ/",
        meaning: "di sản văn hóa",
        note: "Một khái niệm rộng lớn, nói lên tầm quan trọng của việc bảo tồn và truyền bá văn hóa.",
        example:
          "Each piece tells a story, echoing the rich cultural heritage of different regions.",
        exampleTranslation:
          "Mỗi vật phẩm kể một câu chuyện, phản ánh di sản văn hóa phong phú của các vùng khác nhau.",
      },
      {
        id: 101,
        word: "Limited edition",
        pronunciation: "/ˈlɪmɪtɪd ɪˈdɪʃən/",
        meaning: "phiên bản giới hạn",
        note: "'Limited edition' thường làm tăng giá trị sưu tầm và là dấu hiệu của sự độc đáo và hiếm có.",
        example:
          "It's all about collecting limited edition sneakers among the younger crowd.",
        exampleTranslation:
          "Việc sưu tầm giày phiên bản giới hạn đang rất thịnh hành trong giới trẻ.",
      },
      {
        id: 102,
        word: "Fly off the shelves",
        pronunciation: "/flaɪ ɒf ðə ʃɛlvz/",
        meaning: "bán đắt như tôm tươi, hết hàng rất nhanh",
        note: "Cụm từ này thường được sử dụng để miêu tả sự phổ biến và độ hot của một sản phẩm, khiến chúng được bán hết một cách nhanh chóng.",
        example:
          "Brands keep dropping special editions that just fly off the shelves.",
        exampleTranslation:
          "Các thương hiệu liên tục ra phiên bản đặc biệt và chúng bán hết như tôm tươi.",
      },
      {
        id: 103,
        word: "Scouring",
        pronunciation: "/ˈskaʊərɪŋ/",
        meaning: "tìm kiếm kỹ lưỡng, lùng sục",
        note: "Thường dùng để mô tả việc tìm kiếm cẩn thận và tỉ mỉ, đặc biệt khi tìm kiếm mặt hàng đặc biệt hoặc hiếm.",
        example:
          "For many enthusiasts, scouring online marketplaces is the go-to method.",
        exampleTranslation:
          "Với nhiều người đam mê, lùng sục các chợ trực tuyến là phương pháp ưa thích.",
      },
      {
        id: 104,
        word: "Thrill of the chase",
        pronunciation: "/θrɪl əv ðə tʃeɪs/",
        meaning: "cảm giác hồi hộp khi theo đuổi",
        note: "Cụm từ này thường được sử dụng để mô tả niềm vui hoặc sự hứng thú khi theo đuổi một mục tiêu hoặc sở thích.",
        example: "It's all about the thrill of the chase, isn't it?",
        exampleTranslation:
          "Tất cả là vì cảm giác hồi hộp khi theo đuổi, phải không?",
      },
      {
        id: 105,
        word: "Swap",
        pronunciation: "/swɒp/",
        meaning: "trao đổi, đổi chác",
        note: "Được sử dụng khi mô tả việc đổi chác mặt hàng giữa các cá nhân, thường là trong cộng đồng sưu tầm hoặc nhóm có sở thích chung.",
        example:
          "A lot of collectors I know often swap items with fellow aficionados.",
        exampleTranslation:
          "Nhiều người sưu tầm tôi biết thường trao đổi đồ với những người cùng sở thích.",
      },
      {
        id: 106,
        word: "Cement the community together",
        pronunciation: "/sɪˈment ðə kəˈmjuː.nɪ.ti təˈɡeðər/",
        meaning: "gắn kết cộng đồng",
        note: "Thường được sử dụng để mô tả cách mà các hành động hoặc sự kiện cụ thể giúp xây dựng và duy trì mối quan hệ chặt chẽ giữa các thành viên trong một nhóm.",
        example:
          "It's these little gestures that really cement the community together.",
        exampleTranslation:
          "Chính những cử chỉ nhỏ đó thực sự gắn kết cộng đồng lại với nhau.",
      },
      {
        id: 107,
        word: "Resonates",
        pronunciation: "/ˈrɛzəˌneɪts/",
        meaning: "vang vọng, gợi lên cảm xúc sâu sắc",
        note: "Thường được sử dụng để mô tả cách một cái gì đó có thể kích thích mạnh mẽ đến cảm xúc hoặc ký ức của một người.",
        example:
          "People dive into collecting because there's something that just resonates with them on a deep level.",
        exampleTranslation:
          "Mọi người đắm chìm vào việc sưu tầm vì có điều gì đó thực sự gợi lên cảm xúc sâu sắc trong họ.",
      },
      {
        id: 108,
        word: "Brings back a memory",
        pronunciation: "/brɪŋz bæk ə ˈmɛməri/",
        meaning: "gợi lại kỷ niệm",
        note: "Cụm từ này thường được sử dụng để mô tả cảm giác khi một đối tượng hoặc kích thích giác quan nào đó làm cho một người nhớ về một sự kiện, khoảnh khắc cụ thể trong quá khứ.",
        example: "Each item tells a story or brings back a memory.",
        exampleTranslation:
          "Mỗi vật phẩm kể một câu chuyện hoặc gợi lại một kỷ niệm.",
      },
      {
        id: 109,
        word: "Bridge to forming friendships",
        pronunciation: "/brɪdʒ tə ˈfɔː.mɪŋ ˈfrɛndʃɪps/",
        meaning: "cầu nối để tạo dựng tình bạn",
        note: "Sử dụng để mô tả cách mà một hoạt động hoặc sở thích cụ thể giúp mọi người kết nối và phát triển mối quan hệ.",
        example: "Collecting is pretty much a bridge to forming friendships.",
        exampleTranslation: "Sưu tầm thực sự là cầu nối để tạo dựng tình bạn.",
      },
      {
        id: 110,
        word: "Connect with history or culture",
        pronunciation: "/kəˈnɛkt wɪð ˈhɪstəri ɔːr ˈkʌltʃər/",
        meaning: "kết nối với lịch sử hoặc văn hóa",
        note: "Thường được dùng để mô tả cách thức mà việc sưu tầm giúp một người cảm thấy gần gũi hơn với quá khứ hoặc với di sản văn hóa.",
        example:
          "Collecting can be a way to connect with history or culture, adding another layer of meaning.",
        exampleTranslation:
          "Sưu tầm có thể là cách để kết nối với lịch sử hoặc văn hóa, thêm một tầng ý nghĩa khác.",
      },
    ],
  },

  // ==========================================
  // P1.8 - Memory
  // ==========================================
  {
    id: "sp_s2_p8_memory",
    skill: "Speaking",
    volume: "9",
    topic: "Memory",
    part: "P1.8",
    cards: [
      {
        id: 111,
        word: "Jogging my memory",
        pronunciation: "/ˈdʒɒɡ.ɪŋ maɪ ˈmɛm.ə.ri/",
        meaning: "cố gắng nhớ lại",
        note: "Thường được sử dụng khi cố gắng kích thích trí nhớ để nhớ lại thông tin cụ thể.",
        example:
          "It feels like I'm constantly jogging my memory for the everyday stuff.",
        exampleTranslation:
          "Cảm giác như tôi liên tục phải cố gắng nhớ lại những việc hàng ngày.",
      },
      {
        id: 112,
        word: "On its toes",
        pronunciation: "/ɒn ɪts təʊz/",
        meaning: "sẵn sàng hành động, luôn tỉnh táo",
        note: "Cụm từ này thường được sử dụng để mô tả tình trạng cảnh giác hoặc sẵn sàng đối phó với tình huống.",
        example:
          "My brain is always on its toes, trying to keep everything straight.",
        exampleTranslation:
          "Não tôi luôn trong trạng thái tỉnh táo, cố gắng ghi nhớ mọi thứ.",
      },
      {
        id: 113,
        word: "Sharp as a tack",
        pronunciation: "/ʃɑːp æz ə tæk/",
        meaning: "rất thông minh, tư duy sắc bén",
        note: "Được sử dụng để mô tả khả năng tư duy nhanh nhạy hoặc trí nhớ tốt.",
        example: "My memory needs to be sharp as a tack for my job.",
        exampleTranslation: "Trí nhớ của tôi cần phải sắc bén cho công việc.",
      },
      {
        id: 114,
        word: "Dropping the ball",
        pronunciation: "/ˈdrɒp.ɪŋ ðə bɔːl/",
        meaning: "mắc lỗi, không hoàn thành trách nhiệm",
        note: "Thường được sử dụng trong ngữ cảnh công việc hoặc tình huống cần sự chú ý và cẩn trọng.",
        example:
          "There's no room for slip-ups because dropping the ball could mean serious repercussions.",
        exampleTranslation:
          "Không có chỗ cho sai lầm vì mắc lỗi có thể dẫn đến hậu quả nghiêm trọng.",
      },
      {
        id: 115,
        word: "Details just stick with me",
        pronunciation: "/ˈdiː.teɪlz ʤʌst stɪk wɪð miː/",
        meaning: "chi tiết dễ dàng bám vào tôi, tôi nhớ chi tiết rất lâu",
        note: "Thường được sử dụng khi ai đó có khả năng nhớ lâu các thông tin hoặc sự kiện cụ thể mà không cần nỗ lực nhiều.",
        example:
          "It's like details just stick with me, especially when it comes to faces and names.",
        exampleTranslation:
          "Các chi tiết cứ dễ dàng bám vào tôi, đặc biệt là khuôn mặt và tên người.",
      },
      {
        id: 116,
        word: "Go-to person",
        pronunciation: "/ˈɡəʊ.tuː ˈpɜː.sən/",
        meaning: "người được tin cậy, người mọi người tìm đến",
        note: "Dùng để mô tả một người mà mọi người thường tìm đến khi cần sự giúp đỡ hoặc thông tin trong một lĩnh vực cụ thể.",
        example:
          "I'm the go-to person in my circle for recalling who said what.",
        exampleTranslation:
          "Tôi là người mọi người trong nhóm tìm đến khi cần nhớ lại ai đã nói gì.",
      },
      {
        id: 117,
        word: "Has their moments",
        pronunciation: "/hæz ðeər ˈməʊ.mənts/",
        meaning: "đôi khi cũng mắc lỗi, không phải lúc nào cũng hoàn hảo",
        note: "Cụm từ này được sử dụng để chỉ những lúc mà ai đó có thể quên lãng hoặc không thể nhớ chính xác.",
        example:
          "Everyone has their moments – sometimes I walk into a room and forget why I'm there.",
        exampleTranslation:
          "Ai cũng có lúc quên – đôi khi tôi bước vào phòng và quên mất mình vào đó để làm gì.",
      },
      {
        id: 118,
        word: "Running joke",
        pronunciation: "/ˈrʌn.ɪŋ dʒəʊk/",
        meaning: "trò đùa thường xuyên được nhắc lại",
        note: "Được sử dụng để mô tả một trò đùa hoặc tình huống hài hước được nhắc lại nhiều lần, thường là bên trong một nhóm hoặc gia đình.",
        example: "It's a bit of a running joke in my family.",
        exampleTranslation: "Đó là trò đùa thường xuyên trong gia đình tôi.",
      },
      {
        id: 119,
        word: "Brain decides to take a holiday",
        pronunciation: "/breɪn dɪˈsaɪdz tə teɪk ə ˈhɒl.ɪ.deɪ/",
        meaning: "não quyết định nghỉ ngơi (cách nói hài hước về việc quên)",
        note: "Cách nói hài hước để mô tả lúc quên lãng, như thể não bộ cần một kỳ nghỉ.",
        example: "It's like my brain just decides to take a holiday sometimes.",
        exampleTranslation:
          "Đôi khi cảm giác như não tôi tự quyết định đi nghỉ vậy.",
      },
      {
        id: 120,
        word: "Part of being human",
        pronunciation: "/pɑːt əv ˈbiː.ɪŋ ˈhjuː.mən/",
        meaning: "một phần của việc là con người (ai cũng có khiếm khuyết)",
        note: "Cụm từ này được sử dụng để nhấn mạnh rằng mọi người đều có những thiếu sót và đó là điều bình thường.",
        example:
          "I'll forget where I've put my keys. It's all part of being human, I guess.",
        exampleTranslation:
          "Tôi hay quên chìa khóa để đâu. Đó là một phần của việc là con người thôi.",
      },
      {
        id: 121,
        word: "Concerted effort",
        pronunciation: "/kənˈsɜː.tɪd ˈɛf.ət/",
        meaning: "nỗ lực quyết tâm, cố gắng có chủ ý",
        note: "Được sử dụng để mô tả hành động tích cực và có chủ ý nhằm đạt được một mục tiêu cụ thể.",
        example:
          "I make a concerted effort to keep things organized and on track.",
        exampleTranslation:
          "Tôi nỗ lực quyết tâm để giữ mọi thứ ngăn nắp và đúng kế hoạch.",
      },
      {
        id: 122,
        word: "Systems in place",
        pronunciation: "/ˈsɪs.təmz ɪn pleɪs/",
        meaning: "hệ thống đã được thiết lập sẵn",
        note: "Thường được sử dụng để mô tả việc có các phương pháp hoặc kế hoạch được sắp xếp trước để quản lý hoặc tổ chức công việc.",
        example:
          "It's about having systems in place – lists, reminders, that sort of thing.",
        exampleTranslation:
          "Quan trọng là phải có hệ thống sẵn – danh sách, nhắc nhở, những thứ như vậy.",
      },
      {
        id: 123,
        word: "Today's fast-paced world",
        pronunciation: "/təˈdeɪz fæst-peɪst wɜːrld/",
        meaning: "thế giới hiện đại với sự thay đổi nhanh chóng và bận rộn",
        note: "Cụm từ này được sử dụng để mô tả tốc độ phát triển và cuộc sống hối hả trong xã hội ngày nay.",
        example:
          "Having a good memory is like having a superpower in today's fast-paced world.",
        exampleTranslation:
          "Có trí nhớ tốt giống như có siêu năng lực trong thế giới hiện đại hối hả ngày nay.",
      },
      {
        id: 124,
        word: "Key to lifelong learning and personal growth",
        pronunciation: "/kiː tə ˈlaɪf.lɒŋ ˈlɜː.nɪŋ ænd ˈpɜː.sən.əl ɡrəʊθ/",
        meaning: "chìa khóa cho việc học tập suốt đời và phát triển cá nhân",
        note: "Được sử dụng để nhấn mạnh tầm quan trọng của việc tiếp tục học hỏi và phát triển bản thân trong suốt cuộc đời.",
        example:
          "A good memory is the key to lifelong learning and personal growth.",
        exampleTranslation:
          "Trí nhớ tốt là chìa khóa cho việc học tập suốt đời và phát triển cá nhân.",
      },
      {
        id: 125,
        word: "Not the be-all and end-all",
        pronunciation: "/nɒt ðə biː ɔːl ænd ɛnd ɔːl/",
        meaning: "không phải là tất cả, không phải yếu tố duy nhất",
        note: "Cụm từ này được sử dụng để chỉ rằng mặc dù điều gì đó có thể quan trọng, nhưng nó không phải là yếu tố duy nhất cần xem xét.",
        example: "Memory is important, but it's not the be-all and end-all.",
        exampleTranslation:
          "Trí nhớ quan trọng, nhưng nó không phải là tất cả.",
      },
      {
        id: 126,
        word: "Forte",
        pronunciation: "/ˈfɔːr.teɪ/",
        meaning: "điểm mạnh, thế mạnh của một người",
        note: "Từ này thường được sử dụng để chỉ điểm mạnh, khả năng hay kỹ năng đặc biệt của một người trong một lĩnh vực cụ thể.",
        example: "For some, creative thinking is their forte.",
        exampleTranslation:
          "Với một số người, tư duy sáng tạo là thế mạnh của họ.",
      },
    ],
  },

  // ==========================================
  // P1.9 - Losing Things
  // ==========================================
  {
    id: "sp_s2_p9_losing",
    skill: "Speaking",
    volume: "9",
    topic: "Losing Things",
    part: "P1.9",
    cards: [
      {
        id: 127,
        word: "Keeping track of",
        pronunciation: "/ˈkiː.pɪŋ træk əv/",
        meaning: "theo dõi, quản lý vị trí của đồ vật",
        note: "Cụm từ này thường được sử dụng để mô tả việc quản lý hoặc nhớ vị trí của các vật dụng cá nhân.",
        example: "I'm pretty good at keeping track of my belongings.",
        exampleTranslation: "Tôi khá giỏi trong việc theo dõi đồ đạc của mình.",
      },
      {
        id: 128,
        word: "A spot for everything and everything in its spot",
        pronunciation: "/ə spɒt fɔːr ˈɛv.ri.θɪŋ ænd ˈɛv.ri.θɪŋ ɪn ɪts spɒt/",
        meaning: "một chỗ cho mọi thứ và mọi thứ đều ở đúng chỗ",
        note: "Cụm từ này được sử dụng để nhấn mạnh tầm quan trọng của việc tổ chức và sắp xếp đồ đạc một cách có hệ thống.",
        example:
          "It's all about having a spot for everything and everything in its spot.",
        exampleTranslation:
          "Tất cả là về việc có một chỗ cho mọi thứ và mọi thứ đều ở đúng chỗ của nó.",
      },
      {
        id: 129,
        word: "Scatterbrained",
        pronunciation: "/ˈskæt.ər.breɪnd/",
        meaning: "đãng trí, hay quên, không tập trung",
        note: "Thường được sử dụng để mô tả một người thường xuyên quên hoặc mất trật tự trong việc quản lý đồ đạc.",
        example:
          "I can be a bit scatterbrained when it comes to my personal items.",
        exampleTranslation: "Tôi hay bị đãng trí khi quản lý đồ cá nhân.",
      },
      {
        id: 130,
        word: "Caught up in the moment",
        pronunciation: "/kɔːt ʌp ɪn ðə ˈməʊ.mənt/",
        meaning: "bị cuốn vào khoảnh khắc hiện tại",
        note: "Cụm từ này được sử dụng để mô tả tình trạng một người bị phân tâm bởi những gì đang diễn ra và quên mất những việc khác.",
        example:
          "I just get caught up in the moment and forget to pay attention to where I put things.",
        exampleTranslation:
          "Tôi hay bị cuốn vào khoảnh khắc và quên chú ý đến việc mình để đồ ở đâu.",
      },
      {
        id: 131,
        word: "Game changer",
        pronunciation: "/ˈɡeɪm ˌtʃeɪndʒər/",
        meaning: "bước ngoặt, thứ thay đổi cuộc chơi",
        note: "Thường được dùng để mô tả điều gì đó mang lại sự thay đổi lớn trong cách mọi người tiếp cận hoặc suy nghĩ về một vấn đề.",
        example:
          "Labeling things can be a game changer when it comes to staying organized.",
        exampleTranslation:
          "Việc dán nhãn đồ vật có thể là bước ngoặt giúp giữ mọi thứ ngăn nắp.",
      },
      {
        id: 132,
        word: "Patting down your pockets",
        pronunciation: "/ˈpætɪŋ daʊn jʊr ˈpɑkɪts/",
        meaning: "vỗ nhẹ các túi để kiểm tra đồ đạc",
        note: "Hành động này thường được thực hiện khi bạn muốn đảm bảo rằng bạn đã mang theo tất cả các vật dụng cần thiết trước khi rời đi.",
        example:
          "Develop the habit of patting down your pockets for your phone, wallet, keys.",
        exampleTranslation:
          "Hãy tập thói quen vỗ nhẹ các túi để kiểm tra điện thoại, ví và chìa khóa.",
      },
      {
        id: 133,
        word: "Second nature",
        pronunciation: "/ˈsɛkənd ˈneɪtʃər/",
        meaning: "bản năng thứ hai, thói quen tự nhiên như bản năng",
        note: "Dùng để mô tả một kỹ năng hoặc thói quen trở nên tự nhiên như bản năng do được lặp lại nhiều lần.",
        example:
          "It might seem a bit much at first, but it becomes second nature after a while.",
        exampleTranslation:
          "Ban đầu có vẻ hơi nhiều, nhưng sau một thời gian nó sẽ trở thành bản năng thứ hai.",
      },
      {
        id: 134,
        word: "To misplace items",
        pronunciation: "/tuː mɪsˈpleɪs ˈaɪtəmz/",
        meaning: "để đồ sai chỗ, đặt nhầm chỗ",
        note: "Cụm từ này thường được sử dụng để mô tả hành động vô tình đặt đồ vật không đúng chỗ, gây ra sự mất đồ hoặc khó khăn trong việc tìm kiếm chúng.",
        example:
          "Some people have a million things running through their mind, making it easy to misplace items.",
        exampleTranslation:
          "Một số người có quá nhiều thứ trong đầu, khiến họ dễ để đồ sai chỗ.",
      },
      {
        id: 135,
        word: "Meticulously",
        pronunciation: "/məˈtɪk.jʊ.ləs.li/",
        meaning: "tỉ mỉ, kỹ lưỡng đến từng chi tiết",
        note: "Dùng để mô tả hành động hoặc thói quen làm việc với sự chú ý cao độ đến từng chi tiết nhỏ.",
        example:
          "There are those who are meticulously organized, with everything in its rightful place.",
        exampleTranslation:
          "Có những người cực kỳ tỉ mỉ trong việc sắp xếp, mọi thứ đều ở đúng chỗ của nó.",
      },
      {
        id: 136,
        word: "Prone to",
        pronunciation: "/prəʊn tuː/",
        meaning: "có khuynh hướng, dễ bị",
        note: "Thường được dùng để chỉ một xu hướng hoặc khả năng mắc phải một điều gì đó không mong muốn.",
        example:
          "People who are always on the go are more prone to losing things.",
        exampleTranslation:
          "Những người luôn bận rộn di chuyển dễ bị mất đồ hơn.",
      },
      {
        id: 137,
        word: "Sedentary",
        pronunciation: "/ˈsed.ən.ter.i/",
        meaning: "ít vận động, ngồi nhiều",
        note: "Mô tả một lối sống hoặc công việc không đòi hỏi nhiều hoạt động thể chất.",
        example:
          "Individuals with a more sedentary lifestyle have fewer opportunities to lose things.",
        exampleTranslation:
          "Những người sống lối sống ít vận động hơn ít có cơ hội để mất đồ hơn.",
      },
      {
        id: 138,
        word: "Stumble upon",
        pronunciation: "/ˈstʌm.bəl əˌpɒn/",
        meaning: "tình cờ tìm thấy",
        note: "Dùng để mô tả việc tình cờ phát hiện ra điều gì đó một cách bất ngờ.",
        example:
          "If I stumbled upon something that someone had clearly lost, I'd make it my mission to find the owner.",
        exampleTranslation:
          "Nếu tôi tình cờ tìm thấy thứ gì đó ai đó rõ ràng đã mất, tôi sẽ cố tìm chủ nhân.",
      },
      {
        id: 139,
        word: "Paying it forward",
        pronunciation: "/ˈpeɪ.ɪŋ ɪt ˈfɔː.wərd/",
        meaning: "trả ơn bằng cách làm điều tốt với người khác",
        note: "Mô tả một hành động tích cực, truyền cảm hứng cho người khác hành động tốt đẹp.",
        example:
          "There's something incredibly rewarding about reuniting someone with their lost belongings. It's all about paying it forward.",
        exampleTranslation:
          "Có điều gì đó rất đáng giá khi đoàn tụ ai đó với đồ đạc bị mất của họ. Tất cả là về tinh thần truyền điều tốt đẹp.",
      },
      {
        id: 140,
        word: "Reliable",
        pronunciation: "/rɪˈlaɪ.ə.bəl/",
        meaning: "đáng tin cậy",
        note: "Mô tả một người hoặc vật có thể được tin tưởng để thực hiện hoặc cung cấp những gì cần thiết.",
        example:
          "There's a formal process in place, making it safer and more reliable for the item to be claimed back.",
        exampleTranslation:
          "Có quy trình chính thức, giúp việc nhận lại đồ an toàn và đáng tin cậy hơn.",
      },
    ],
  },

  // ==========================================
  // P1.10 - Video Games
  // ==========================================
  {
    id: "sp_s2_p10_videogames",
    skill: "Speaking",
    volume: "9",
    topic: "Video Games",
    part: "P1.10",
    cards: [
      {
        id: 141,
        word: "Adrenaline-pumping action game",
        pronunciation: "/əˈdrɛnəlɪn ˈpʌmpɪŋ ˈækʃən ɡeɪm/",
        meaning: "trò chơi hành động đầy kịch tính, kích thích adrenaline",
        note: "Cụm từ này thường được sử dụng để mô tả các trò chơi video mang tính hành động mạnh mẽ, tạo ra trải nghiệm kịch tính và hấp dẫn.",
        example:
          "Whether it's an adrenaline-pumping action game, I find myself completely immersed.",
        exampleTranslation:
          "Dù là trò chơi hành động kịch tính, tôi luôn thấy mình bị cuốn vào hoàn toàn.",
      },
      {
        id: 142,
        word: "Intricate role-playing game",
        pronunciation: "/ˈɪn.trɪ.kət ˈroʊl pleɪɪŋ ɡeɪm/",
        meaning: "trò chơi nhập vai phức tạp và chi tiết",
        note: "Cụm từ này thường được sử dụng để mô tả các trò chơi nhập vai phức tạp với nhiều cốt truyện phụ và nhiệm vụ để khám phá.",
        example:
          "An intricate role-playing game allows me to explore vast worlds with deep storylines.",
        exampleTranslation:
          "Trò chơi nhập vai phức tạp cho phép tôi khám phá những thế giới rộng lớn với cốt truyện sâu sắc.",
      },
      {
        id: 143,
        word: "Appeal",
        pronunciation: "/əˈpiːl/",
        meaning: "sức hấp dẫn, sức thu hút",
        note: "Dùng để mô tả điều gì đó có khả năng thu hút sự chú ý hoặc tạo ra sự quan tâm từ người khác.",
        example:
          "I can see the appeal of video games in terms of graphics and storytelling.",
        exampleTranslation:
          "Tôi có thể thấy sức hấp dẫn của video game về mặt đồ họa và cốt truyện.",
      },
      {
        id: 144,
        word: "A personal preference",
        pronunciation: "/ə ˈpɜːr.sənəl ˈprɛfərəns/",
        meaning: "sở thích cá nhân",
        note: "Cụm từ này thường được sử dụng để chỉ sự ưa thích hoặc lựa chọn cá nhân mà mỗi người có thể có trong các tình huống khác nhau.",
        example:
          "I prefer more active or outdoor activities. It's just a personal preference really.",
        exampleTranslation:
          "Tôi thích các hoạt động năng động hoặc ngoài trời hơn. Đó chỉ là sở thích cá nhân thôi.",
      },
      {
        id: 145,
        word: "Inclined towards",
        pronunciation: "/ɪnˈklaɪnd təˈwɔːdz/",
        meaning: "có xu hướng thích, thiên về",
        note: "Dùng để mô tả sự thiên vị hoặc sở thích cá nhân đối với một điều gì đó.",
        example: "I've always been more inclined towards solo gaming.",
        exampleTranslation:
          "Tôi luôn có xu hướng thích chơi game một mình hơn.",
      },
      {
        id: 146,
        word: "A rich, narrative-driven single-player game",
        pronunciation: "/ə rɪtʃ ˈnærətɪv ˌdrɪvən ˈsɪŋɡəl ˈpleɪər ɡeɪm/",
        meaning: "trò chơi đơn với cốt truyện sâu sắc và cuốn hút",
        note: "Cụm từ này thường được sử dụng để mô tả các trò chơi máy tính mà cốt truyện là yếu tố quan trọng nhất, thường có chiều sâu và tương tác cao.",
        example:
          "There's something about diving into a rich, narrative-driven single-player game that captivates me.",
        exampleTranslation:
          "Có gì đó về việc đắm mình vào một trò chơi đơn với cốt truyện sâu sắc khiến tôi mê hoặc.",
      },
      {
        id: 147,
        word: "Camaraderie",
        pronunciation: "/ˌkæm.əˈrɑː.dər.i/",
        meaning: "tình bạn, tình đồng đội",
        note: "Dùng để mô tả mối quan hệ thân thiết và tình bạn giữa những người thường xuyên dành thời gian với nhau.",
        example:
          "It's not just about the game itself, but the camaraderie and the laughs we share.",
        exampleTranslation:
          "Không chỉ là về trò chơi, mà còn là tình bạn và những tiếng cười chúng tôi chia sẻ.",
      },
      {
        id: 148,
        word: "Commiserate",
        pronunciation: "/kəˈmɪz.ə.reɪt/",
        meaning: "cảm thông, chia sẻ nỗi buồn",
        note: "Dùng để mô tả việc chia sẻ sự cảm thông hoặc thể hiện sự đồng cảm với nỗi buồn hoặc khó khăn của người khác.",
        example:
          "It's always more fun to celebrate a victory or commiserate over a loss together.",
        exampleTranslation:
          "Luôn vui hơn khi cùng nhau ăn mừng chiến thắng hoặc cảm thông khi thua.",
      },
      {
        id: 149,
        word: "Excessively",
        pronunciation: "/ɪkˈses.ɪ.vli/",
        meaning: "quá mức, thái quá",
        note: "Dùng để mô tả một hành động hoặc tình trạng vượt quá mức độ cần thiết hoặc mong muốn.",
        example: "Some people do play computer games excessively.",
        exampleTranslation: "Một số người chơi game máy tính quá mức.",
      },
      {
        id: 150,
        word: "Hooked",
        pronunciation: "/hʊkt/",
        meaning: "bị nghiện, không thể dừng lại",
        note: "Mô tả việc trở nên rất hứng thú hoặc phụ thuộc vào một hoạt động nào đó đến mức không thể dừng lại.",
        example:
          "It's easy to get hooked, especially with games designed to keep you engaged for hours.",
        exampleTranslation:
          "Rất dễ bị nghiện, đặc biệt với những game được thiết kế để giữ bạn chơi hàng giờ.",
      },
      {
        id: 151,
        word: "Moderation",
        pronunciation: "/ˌmɒd.əˈreɪ.ʃən/",
        meaning: "điều độ, vừa phải",
        note: "Mô tả việc tránh xa sự thái quá hoặc cực đoan, đặc biệt trong hành vi hoặc quan điểm của bản thân.",
        example:
          "Most people play computer games in moderation, using them as a form of relaxation.",
        exampleTranslation:
          "Hầu hết mọi người chơi game điều độ, dùng chúng như một hình thức thư giãn.",
      },
      {
        id: 152,
        word: "Quantum leap",
        pronunciation: "/ˈkwɒn.təm liːp/",
        meaning: "bước tiến lớn, đột phá",
        note: "Dùng để mô tả một sự tiến bộ lớn và đột phá.",
        example:
          "Modern computer games have seen a quantum leap in terms of technology.",
        exampleTranslation:
          "Game máy tính hiện đại đã có một bước tiến lớn về công nghệ.",
      },
      {
        id: 153,
        word: "Hyper-realistic graphics",
        pronunciation: "/ˈhaɪpər rɪˈælɪstɪk ˈɡræfɪks/",
        meaning: "đồ họa có tính chân thực cực cao",
        note: "Cụm từ này chỉ các hình ảnh số rất giống với thế giới thực, thường được sử dụng trong trò chơi video để tạo ra trải nghiệm chân thực.",
        example:
          "Nowadays, we're talking about hyper-realistic graphics and advanced AI.",
        exampleTranslation:
          "Ngày nay, chúng ta đang nói về đồ họa cực kỳ chân thực và AI tiên tiến.",
      },
      {
        id: 154,
        word: "Globally connected community",
        pronunciation: "/ˈɡləʊ.bəl.li kəˈnɛk.tɪd kəˈmjuː.nɪ.ti/",
        meaning: "cộng đồng kết nối toàn cầu",
        note: "Mô tả cách mà công nghệ internet đã biến thế giới trở nên liên kết chặt chẽ hơn qua các hoạt động chung.",
        example:
          "Computer games have evolved from a solitary activity to a globally connected community experience.",
        exampleTranslation:
          "Game đã phát triển từ hoạt động một mình thành trải nghiệm cộng đồng kết nối toàn cầu.",
      },
      {
        id: 155,
        word: "Break down geographical and cultural barriers",
        pronunciation:
          "/breɪk daʊn ˌdʒiː.əˈɡræf.ɪ.kəl ænd ˈkʌl.tʃər.əl ˈbær.ɪ.əz/",
        meaning: "phá vỡ rào cản địa lý và văn hóa",
        note: "Chỉ việc loại bỏ những trở ngại về không gian và sự khác biệt văn hóa, cho phép mọi người kết nối một cách dễ dàng hơn.",
        example:
          "You can connect with players from around the world, breaking down geographical and cultural barriers.",
        exampleTranslation:
          "Bạn có thể kết nối với người chơi khắp thế giới, phá vỡ rào cản địa lý và văn hóa.",
      },
    ],
  },
  // ==========================================
  // P1.11 - Crowded Places
  // ==========================================
  {
    id: "sp_s3_p11_crowded",
    skill: "Speaking",
    volume: "9",
    topic: "Crowded Places",
    part: "P1.11",
    cards: [
      {
        id: 156,
        word: "Buzzing",
        pronunciation: "/ˈbʌz.ɪŋ/",
        meaning: "nhộn nhịp, đầy tiếng ồn và hoạt động",
        note: "Dùng để mô tả nơi chốn hoặc hoạt động sôi động và đầy ắp tiếng ồn.",
        example:
          "The city is always buzzing with people and traffic at almost any time of the day.",
        exampleTranslation:
          "Thành phố luôn nhộn nhịp với người và xe cộ hầu như suốt cả ngày.",
      },
      {
        id: 157,
        word: "Congestion",
        pronunciation: "/kənˈdʒes.tʃən/",
        meaning: "ùn tắc, tình trạng đông đúc",
        note: "Thường được dùng để chỉ tình trạng đông đúc, ùn tắc, đặc biệt là trong giao thông hoặc với số lượng người.",
        example:
          "Living in the city means dealing with congestion and the hustle and bustle regularly.",
        exampleTranslation:
          "Sống ở thành phố đồng nghĩa với việc thường xuyên đối mặt với ùn tắc và sự hối hả.",
      },
      {
        id: 158,
        word: "Relaxed pace",
        pronunciation: "/rɪˈlækst peɪs/",
        meaning: "nhịp sống thư thái, chậm rãi",
        note: "Dùng để mô tả một lối sống hoặc tốc độ hoạt động chậm rãi, không gấp gáp.",
        example:
          "The city where I reside has a more relaxed pace of life compared to larger cities.",
        exampleTranslation:
          "Thành phố tôi sống có nhịp sống thư thái hơn so với các thành phố lớn.",
      },
      {
        id: 159,
        word: "Spacious",
        pronunciation: "/ˈspeɪ.ʃəs/",
        meaning: "rộng rãi, thoáng đãng",
        note: "Mô tả một nơi có nhiều không gian, không chật chội, tạo cảm giác thoải mái và tự do.",
        example:
          "The streets are more open and it generally feels more spacious and calm.",
        exampleTranslation:
          "Đường phố rộng hơn và nhìn chung cảm giác rộng rãi và yên tĩnh hơn.",
      },
      {
        id: 160,
        word: "Unique energy and vibrancy",
        pronunciation: "/juːˈniːk ˈɛnərdʒi ænd ˈvaɪbrənsi/",
        meaning: "năng lượng và sức sống đặc biệt",
        note: "Cụm từ này thường được sử dụng để mô tả một không khí hoặc cảm xúc đặc biệt và sôi động mà không giống với bất kỳ điều gì khác.",
        example:
          "There's just this unique energy and vibrancy in crowded places that you can't find anywhere else.",
        exampleTranslation:
          "Có một năng lượng và sức sống đặc biệt ở những nơi đông đúc mà bạn không thể tìm thấy ở nơi khác.",
      },
      {
        id: 161,
        word: "Hustle and bustle",
        pronunciation: "/ˈhʌs.əl ənd ˈbʌs.əl/",
        meaning: "nhộn nhịp, hối hả, ồn ào",
        note: "Dùng để mô tả không khí hoạt động sôi động và ồn ào, thường thấy ở những nơi đông đúc.",
        example: "The hustle and bustle of a busy market somehow energizes me.",
        exampleTranslation:
          "Sự hối hả nhộn nhịp của một khu chợ đông đúc bằng cách nào đó lại tiếp thêm năng lượng cho tôi.",
      },
      {
        id: 162,
        word: "Not my cup of tea",
        pronunciation: "/nɒt maɪ kʌp ɒv tiː/",
        meaning: "không phải sở thích của tôi",
        note: "Một cách nói thông thường để biểu thị rằng bạn không thích hoặc không hứng thú với điều gì đó.",
        example:
          "Crowded places aren't really my cup of tea – I find them a bit overwhelming.",
        exampleTranslation:
          "Những nơi đông đúc thực sự không phải sở thích của tôi – tôi thấy chúng hơi quá tải.",
      },
      {
        id: 163,
        word: "Overwhelming",
        pronunciation: "/ˌoʊ.vərˈwɛl.mɪŋ/",
        meaning: "quá tải, áp đảo, khó xử lý",
        note: "Mô tả cảm giác bị áp đảo bởi số lượng lớn, cường độ cao của một điều gì đó, khiến cho người ta cảm thấy khó khăn trong việc xử lý.",
        example: "I find crowded places a bit overwhelming and stressful.",
        exampleTranslation:
          "Tôi thấy những nơi đông đúc hơi quá tải và căng thẳng.",
      },
      {
        id: 164,
        word: "Packed",
        pronunciation: "/pækt/",
        meaning: "chật kín người, đông đúc",
        note: "Thường dùng để mô tả một không gian có rất nhiều người và ít không gian trống.",
        example: "I went to a concert in the city. It was packed!",
        exampleTranslation:
          "Tôi đến một buổi hòa nhạc ở thành phố. Nơi đó chật kín người!",
      },
      {
        id: 165,
        word: "Electric",
        pronunciation: "/ɪˈlek.trɪk/",
        meaning: "sôi động, hứng khởi, căng tràn năng lượng",
        note: "Dùng để miêu tả không khí hoặc cảm giác hào hứng và căng tràn năng lượng.",
        example:
          "There's something about the energy in a crowd at a live music event that's just electric.",
        exampleTranslation:
          "Có điều gì đó trong không khí của đám đông tại sự kiện âm nhạc trực tiếp thật sự sôi động và hứng khởi.",
      },
      {
        id: 166,
        word: "Festive atmosphere",
        pronunciation: "/ˈfɛs.tɪv ˈæt.mə.sfiər/",
        meaning: "không khí lễ hội, vui tươi rộn ràng",
        note: "Dùng để mô tả bầu không khí vui tươi, rộn ràng thường thấy trong các buổi lễ, tiệc tùng hoặc dịp kỷ niệm.",
        example:
          "People were shopping for gifts, enjoying seasonal treats, and soaking up the festive atmosphere.",
        exampleTranslation:
          "Mọi người mua sắm quà, thưởng thức đặc sản theo mùa và đắm mình trong không khí lễ hội.",
      },
      {
        id: 167,
        word: "A sense of excitement and vitality",
        pronunciation: "/ə sɛns ʌv ɪkˈsaɪtmənt ænd vaɪˈtælɪti/",
        meaning: "cảm giác hứng khởi và sức sống",
        note: "Cụm từ này thường được sử dụng để miêu tả cảm giác hứng khởi và sự sôi nổi, thường được kết hợp với sự tràn đầy năng lượng và sự hăng hái.",
        example:
          "Being part of a bustling environment injects a sense of excitement and vitality.",
        exampleTranslation:
          "Việc hòa mình vào môi trường nhộn nhịp mang lại cảm giác hứng khởi và sức sống.",
      },
      {
        id: 168,
        word: "Exhilarating",
        pronunciation: "/ɪɡˈzɪləreɪtɪŋ/",
        meaning: "làm cho cảm thấy hứng thú và tràn đầy năng lượng",
        note: "Dùng để diễn đạt cảm giác được tiếp thêm năng lượng và sự sôi nổi, thường trong các môi trường đông người.",
        example:
          "It's the atmosphere and the collective vibe that many find exhilarating.",
        exampleTranslation:
          "Chính bầu không khí và năng lượng tập thể mà nhiều người cảm thấy cực kỳ hứng thú.",
      },
      {
        id: 169,
        word: "Calmness and serenity",
        pronunciation: "/ˈkɑːm.nəs ænd sɪˈrɛnəti/",
        meaning: "sự yên tĩnh và thanh thản",
        note: "Cụm từ này thường được sử dụng để miêu tả trạng thái tĩnh lặng và yên bình, nơi không có sự xáo trộn hoặc hỗn loạn, mang lại cảm giác thư thái và an lạc.",
        example:
          "Quiet parks and secluded beaches offer calmness and serenity that allow for relaxation.",
        exampleTranslation:
          "Công viên yên tĩnh và bãi biển vắng vẻ mang lại sự yên tĩnh và thanh thản giúp thư giãn.",
      },
      {
        id: 170,
        word: "Introspection",
        pronunciation: "/ˌɪntrəˈspɛkʃən/",
        meaning: "sự tự kiểm soát, suy ngẫm nội tâm",
        note: "Chỉ hành động nhìn vào bên trong và xem xét suy nghĩ cùng cảm xúc của mình, thường tìm kiếm sự bình yên và tĩnh lặng.",
        example:
          "The calmness and serenity of quiet places allow for relaxation and introspection.",
        exampleTranslation:
          "Sự yên tĩnh của những nơi vắng lặng cho phép thư giãn và suy ngẫm nội tâm.",
      },
    ],
  },

  // ==========================================
  // P1.12 - Advertisements
  // ==========================================
  {
    id: "sp_s3_p12_advertisements",
    skill: "Speaking",
    volume: "9",
    topic: "Advertisements",
    part: "P1.12",
    cards: [
      {
        id: 171,
        word: "Stick in my mind",
        pronunciation: "/stɪk ɪn maɪ maɪnd/",
        meaning: "in sâu vào trí nhớ, khó quên",
        note: "Cụm từ này thường được sử dụng khi muốn diễn đạt việc một sự kiện, trải nghiệm hoặc thông tin nào đó làm ấn tượng mạnh và vẫn còn đọng lại trong tâm trí sau một khoảng thời gian dài.",
        example:
          "It's the way they tell a story or use humor that makes ads stick in my mind.",
        exampleTranslation:
          "Chính cách họ kể chuyện hoặc dùng humor khiến quảng cáo in sâu vào trí nhớ tôi.",
      },
      {
        id: 172,
        word: "Catchy",
        pronunciation: "/ˈkætʃ.i/",
        meaning: "dễ nhớ, thu hút ngay lập tức",
        note: "Thường ám chỉ đến những giai điệu hoặc khẩu hiệu quảng cáo mà mọi người có thể dễ dàng nhớ lâu sau khi nghe.",
        example:
          "Sometimes jingles or slogans can be really catchy, and I find myself humming them.",
        exampleTranslation:
          "Đôi khi những giai điệu hay khẩu hiệu có thể rất dễ nhớ, và tôi thấy mình ngân nga chúng.",
      },
      {
        id: 173,
        word: "Out of the ordinary",
        pronunciation: "/ˌaʊt əv ðə ˈɔːr.dɪ.ner.i/",
        meaning: "khác thường, nổi bật, đặc biệt",
        note: "Cụm từ này mô tả một thứ gì đó không theo lẽ thường, đặc biệt nổi bật hoặc đáng chú ý so với cái bình thường.",
        example:
          "Unless an ad is really out of the ordinary, it usually fades from memory pretty quickly.",
        exampleTranslation:
          "Trừ khi quảng cáo thực sự khác thường, nó thường mờ dần khỏi trí nhớ khá nhanh.",
      },
      {
        id: 174,
        word: "Fades from memory",
        pronunciation: "/feɪdz frɒm ˈmɛməri/",
        meaning: "phai mờ khỏi trí nhớ, dần bị quên đi",
        note: "Cụm từ này thường được sử dụng khi muốn diễn đạt việc một sự kiện, trải nghiệm hoặc thông tin nào đó dần mất đi trong ký ức sau một thời gian dài không được nhắc đến.",
        example:
          "If an ad isn't related to something I'm interested in, it usually fades from memory quickly.",
        exampleTranslation:
          "Nếu quảng cáo không liên quan đến thứ gì tôi quan tâm, nó thường phai mờ khỏi trí nhớ nhanh chóng.",
      },
      {
        id: 175,
        word: "Informative",
        pronunciation: "/ɪnˈfɔːr.mə.tɪv/",
        meaning: "mang tính thông tin, bổ ích",
        note: "Cụm từ này được dùng để mô tả quảng cáo hoặc bất kỳ nội dung nào cung cấp thông tin, kiến thức hoặc tin tức bổ ích.",
        example:
          "Sometimes ads are quite informative – I've discovered some interesting products through them.",
        exampleTranslation:
          "Đôi khi quảng cáo khá bổ ích – tôi đã khám phá một số sản phẩm thú vị qua chúng.",
      },
      {
        id: 176,
        word: "Entertaining",
        pronunciation: "/ˌen.təˈteɪ.nɪŋ/",
        meaning: "giải trí, thú vị",
        note: "Cụm từ này nói về quảng cáo hoặc nội dung khiến người xem cảm thấy thú vị, vui vẻ và không cảm thấy nhàm chán.",
        example:
          "I don't mind watching ads – sometimes they're quite informative or entertaining.",
        exampleTranslation:
          "Tôi không ngại xem quảng cáo – đôi khi chúng khá bổ ích hoặc giải trí.",
      },
      {
        id: 177,
        word: "Intrusive",
        pronunciation: "/ɪnˈtruː.sɪv/",
        meaning: "xâm phạm, gây phiền nhiễu, không được mời mà đến",
        note: "Cụm từ này dùng để mô tả cái gì đó gây phiền nhiễu hoặc không được mong muốn, như quảng cáo xuất hiện gián đoạn thời gian giải trí hoặc công việc.",
        example:
          "Ads can be a bit intrusive, so I try to use that time productively instead.",
        exampleTranslation:
          "Quảng cáo có thể hơi xâm phạm, vì vậy tôi cố dùng thời gian đó một cách hiệu quả hơn.",
      },
      {
        id: 178,
        word: "Productively",
        pronunciation: "/prəˈdʌk.tɪv.li/",
        meaning: "một cách hiệu quả, có năng suất",
        note: "Cụm từ này được dùng để mô tả việc sử dụng thời gian một cách có ích, thay vì chỉ lãng phí nó.",
        example:
          "Whenever an ad pops up, I try to use that time productively instead.",
        exampleTranslation:
          "Mỗi khi quảng cáo xuất hiện, tôi cố dùng thời gian đó một cách hiệu quả.",
      },
      {
        id: 179,
        word: "Loud and flashy",
        pronunciation: "/laʊd ænd ˈflæʃi/",
        meaning: "ồn ào và lòe loẹt, quá nổi bật",
        note: "Cụm từ này thường được sử dụng để mô tả các vật phẩm, sự kiện hoặc phong cách có sự xuất hiện rực rỡ và nổi bật, thường làm nổi bật sự chú ý của mọi người.",
        example:
          "I prefer ads that are creative over those that are just loud and flashy without much substance.",
        exampleTranslation:
          "Tôi thích quảng cáo sáng tạo hơn những quảng cáo chỉ ồn ào và lòe loẹt mà không có nhiều nội dung.",
      },
      {
        id: 180,
        word: "Without much substance",
        pronunciation: "/wɪˈðaʊt mʌtʃ ˈsʌbstəns/",
        meaning: "thiếu nội dung sâu sắc, hời hợt",
        note: "Cụm từ này thường được sử dụng để miêu tả cái gì đó không có nhiều giá trị hoặc ý nghĩa sâu sắc, thường chỉ là hình thức mà thiếu đi sự chất lượng hay ý nghĩa.",
        example:
          "I dislike ads that are loud and flashy without much substance.",
        exampleTranslation:
          "Tôi không thích những quảng cáo ồn ào và lòe loẹt mà thiếu nội dung.",
      },
      {
        id: 181,
        word: "Repetitive",
        pronunciation: "/rɪˈpɛtɪtɪv/",
        meaning: "lặp đi lặp lại, nhàm chán",
        note: "Thường được dùng để mô tả một hành động hoặc mẫu thông tin xuất hiện nhiều lần một cách nhàm chán.",
        example:
          "The advertisement I disliked most was overly repetitive and had an annoying jingle.",
        exampleTranslation:
          "Quảng cáo tôi ghét nhất là lặp đi lặp lại quá mức và có một giai điệu khó chịu.",
      },
      {
        id: 182,
        word: "Manipulative",
        pronunciation: "/məˈnɪpjʊlətɪv/",
        meaning: "có tính thao túng, lợi dụng tâm lý người khác",
        note: "Mô tả một chiến lược hoặc cách tiếp cận nhằm điều khiển người khác một cách không công bằng để đạt được lợi ích riêng.",
        example:
          "The ad felt a bit manipulative, trying too hard to push the product without providing real value.",
        exampleTranslation:
          "Quảng cáo đó có vẻ hơi thao túng, cố quá để đẩy sản phẩm mà không cung cấp giá trị thực sự.",
      },
      {
        id: 183,
        word: "Unique opportunity",
        pronunciation: "/juːˈniːk ˌɒp.əˈtjuː.nɪ.ti/",
        meaning: "cơ hội độc đáo, hiếm có",
        note: "Được dùng để mô tả một trải nghiệm hiếm có, cung cấp một cái nhìn sâu sắc hoặc giá trị không thể tìm thấy trong các hoàn cảnh thông thường.",
        example:
          "Being in an advertisement would be a fun experience and a unique opportunity to see how marketing works.",
        exampleTranslation:
          "Xuất hiện trong quảng cáo sẽ là trải nghiệm thú vị và cơ hội độc đáo để thấy cách marketing hoạt động.",
      },
      {
        id: 184,
        word: "Marketing campaigns",
        pronunciation: "/ˈmɑː.kɪ.tɪŋ kæmˈpeɪnz/",
        meaning: "chiến dịch tiếp thị",
        note: "Mô tả các hoạt động có tổ chức nhằm quảng bá một sản phẩm hoặc dịch vụ cụ thể, thường thông qua nhiều kênh truyền thông và quảng cáo.",
        example:
          "It sounds like a unique opportunity to see how marketing campaigns are put together behind the scenes.",
        exampleTranslation:
          "Nghe có vẻ là cơ hội độc đáo để thấy các chiến dịch tiếp thị được tổ chức như thế nào ở hậu trường.",
      },
      {
        id: 185,
        word: "Low profile",
        pronunciation: "/loʊ ˈproʊ.faɪl/",
        meaning: "sống kín đáo, tránh sự chú ý của công chúng",
        note: "Dùng để mô tả việc một người chọn sống một cách kín đáo, tránh sự chú ý của công chúng.",
        example: "I prefer to keep a low profile and enjoy my privacy.",
        exampleTranslation:
          "Tôi thích sống kín đáo và tận hưởng sự riêng tư của mình.",
      },
      {
        id: 186,
        word: "Privacy",
        pronunciation: "/ˈpraɪ.və.si/",
        meaning: "sự riêng tư",
        note: "Nhấn mạnh tầm quan trọng của việc được sống mà không bị người khác quan sát hoặc làm phiền.",
        example:
          "The idea of being recognized by strangers isn't appealing – I value my privacy.",
        exampleTranslation:
          "Ý tưởng bị người lạ nhận ra không hấp dẫn với tôi – tôi coi trọng sự riêng tư.",
      },
    ],
  },

  // ==========================================
  // P1.13 - Cakes and Other Sweet Things
  // ==========================================
  {
    id: "sp_s3_p13_cakes",
    skill: "Speaking",
    volume: "9",
    topic: "Cakes and Other Sweet Things",
    part: "P1.13",
    cards: [
      {
        id: 187,
        word: "Adored",
        pronunciation: "/əˈdɔːr/",
        meaning: "yêu mến, vô cùng thích",
        note: "Thường được dùng để mô tả một cảm giác yêu thích hoặc tôn trọng sâu sắc đối với một người hoặc vật.",
        example: "As a child, I absolutely adored cakes and sweets.",
        exampleTranslation:
          "Khi còn nhỏ, tôi vô cùng yêu thích bánh và đồ ngọt.",
      },
      {
        id: 188,
        word: "Special treats",
        pronunciation: "/ˈspɛʃəl triːts/",
        meaning: "phần thưởng đặc biệt (thường là đồ ngọt)",
        note: "Cụm từ này thường được sử dụng để chỉ những phần thưởng là bánh kẹo hoặc các đồ ngọt tương tự, thường dành cho dịp đặc biệt.",
        example:
          "It was the excitement and joy that came with those special treats, especially during birthdays.",
        exampleTranslation:
          "Đó là sự hứng khởi và niềm vui đến cùng với những phần thưởng đặc biệt đó, nhất là vào dịp sinh nhật.",
      },
      {
        id: 189,
        word: "Savory",
        pronunciation: "/ˈseɪ.vər.i/",
        meaning: "mặn, hương vị đậm đà (không ngọt)",
        note: "Dùng để mô tả thức ăn không ngọt, thường có hương vị mặn hoặc cay.",
        example: "I preferred savory snacks over sweet ones as a child.",
        exampleTranslation: "Khi còn nhỏ, tôi thích đồ ăn vặt mặn hơn đồ ngọt.",
      },
      {
        id: 190,
        word: "Taste buds",
        pronunciation: "/teɪst bʌdz/",
        meaning: "vị giác, gai vị giác trên lưỡi",
        note: "Được dùng để mô tả các cơ quan cảm nhận nhỏ trên lưỡi, giúp chúng ta nhận biết được các hương vị khác nhau như ngọt, đắng, chua, mặn.",
        example:
          "I just found other types of food more appealing to my taste buds.",
        exampleTranslation:
          "Tôi chỉ thấy các loại thức ăn khác hấp dẫn hơn với vị giác của mình.",
      },
      {
        id: 191,
        word: "Hit and miss",
        pronunciation: "/hɪt ænd mɪs/",
        meaning: "lúc được lúc không, không ổn định",
        note: "Dùng để mô tả một điều gì đó không ổn định, có thể thành công hoặc thất bại tùy lần.",
        example:
          "My baking was a bit of a hit and miss initially, with some attempts turning out better than others.",
        exampleTranslation:
          "Việc nướng bánh của tôi ban đầu lúc được lúc không, với một số lần thành công hơn những lần khác.",
      },
      {
        id: 192,
        word: "Satisfaction",
        pronunciation: "/ˌsæt.ɪsˈfæk.ʃən/",
        meaning: "sự hài lòng, cảm giác thỏa mãn",
        note: "Mô tả cảm giác tích cực khi bạn hoàn thành một mục tiêu hoặc mong muốn của mình được thỏa mãn.",
        example:
          "There's a certain satisfaction in seeing your creation come to life and sharing it with others.",
        exampleTranslation:
          "Có một sự hài lòng nhất định khi thấy sáng tạo của mình thành hình và chia sẻ với người khác.",
      },
      {
        id: 193,
        word: "From scratch",
        pronunciation: "/frəm ˈskrætʃ/",
        meaning: "từ đầu, từ nguyên liệu gốc, không có sẵn gì",
        note: "Dùng để mô tả việc bắt đầu một công việc hoặc dự án mà không dựa vào bất kỳ sự hỗ trợ nào sẵn có.",
        example:
          "The idea of creating something from scratch that can bring joy to others is quite appealing to me.",
        exampleTranslation:
          "Ý tưởng tạo ra điều gì đó từ đầu có thể mang lại niềm vui cho người khác khá hấp dẫn với tôi.",
      },
      {
        id: 194,
        word: "Appealing",
        pronunciation: "/əˈpiː.lɪŋ/",
        meaning: "hấp dẫn, thu hút",
        note: "Mô tả điều gì đó thu hút sự chú ý và làm bạn muốn tham gia hoặc biết thêm.",
        example:
          "The idea of creating something from scratch is quite appealing to me.",
        exampleTranslation:
          "Ý tưởng tạo ra thứ gì đó từ đầu khá hấp dẫn với tôi.",
      },
      {
        id: 195,
        word: "Delicacies",
        pronunciation: "/ˈdel.ɪ.kə.siːz/",
        meaning: "đặc sản, món ăn ngon hiếm có",
        note: "Thường được dùng để mô tả thực phẩm ngon, độc đáo và thường liên quan đến văn hóa địa phương hoặc truyền thống.",
        example:
          "Without these sweet delicacies, the Lunar New Year festival wouldn't feel complete.",
        exampleTranslation:
          "Nếu không có những đặc sản ngọt này, lễ Tết Nguyên Đán sẽ không trọn vẹn.",
      },
      {
        id: 196,
        word: "Symbolize",
        pronunciation: "/ˈsɪm.bə.laɪz/",
        meaning: "tượng trưng cho, mang ý nghĩa biểu tượng",
        note: "Dùng để chỉ việc một vật, sự vật hay hành động mang ý nghĩa biểu tượng cho điều gì đó, thường liên quan đến văn hóa, tín ngưỡng.",
        example:
          "Bánh chưng and Bánh tét not only are delicious but also symbolize prosperity and togetherness.",
        exampleTranslation:
          "Bánh chưng và bánh tét không chỉ ngon mà còn tượng trưng cho sự thịnh vượng và đoàn kết.",
      },
      {
        id: 197,
        word: "Take center stage",
        pronunciation: "/teɪk ˈsɛntər steɪdʒ/",
        meaning: "trở thành tâm điểm, được chú ý nhất",
        note: "Được dùng để chỉ điều gì đó hoặc ai đó nhận được nhiều sự chú ý, thường trong một sự kiện hoặc tình huống cụ thể.",
        example:
          "Birthdays are definitely a time when sweet treats take center stage.",
        exampleTranslation:
          "Sinh nhật chắc chắn là lúc những món ngọt trở thành tâm điểm.",
      },
      {
        id: 198,
        word: "Playful moment",
        pronunciation: "/ˈpleɪ.fəl ˈmoʊ.mənt/",
        meaning: "khoảnh khắc vui vẻ, tinh nghịch",
        note: "Dùng để mô tả một thời điểm thoải mái, vui vẻ, thường trong bối cảnh giải trí hoặc kỷ niệm.",
        example:
          "There's always that playful moment of making a wish before blowing out the candles.",
        exampleTranslation:
          "Luôn có khoảnh khắc vui vẻ đó là ước một điều gì đó trước khi thổi nến.",
      },
      {
        id: 199,
        word: "Sweet tooth",
        pronunciation: "/swiːt tuːθ/",
        meaning: "thích ăn đồ ngọt",
        note: "Dùng để mô tả một người rất thích ăn đồ ngọt, thường xuyên tìm kiếm và thưởng thức các món tráng miệng.",
        example: "I must admit, I have a bit of a sweet tooth.",
        exampleTranslation: "Tôi phải thừa nhận rằng tôi khá thích đồ ngọt.",
      },
      {
        id: 200,
        word: "The perfect ending",
        pronunciation: "/ðə ˈpɜːfɪkt ˈɛndɪŋ/",
        meaning: "kết thúc hoàn hảo",
        note: "Cụm từ này thường được dùng để nói về một kết thúc mà người nói cảm thấy rất hài lòng và thỏa mãn.",
        example:
          "Finishing a meal with a dessert just feels like the perfect ending.",
        exampleTranslation:
          "Kết thúc bữa ăn bằng món tráng miệng luôn cảm giác như kết thúc hoàn hảo.",
      },
      {
        id: 201,
        word: "Balanced diet",
        pronunciation: "/ˈbælənst ˈdaɪət/",
        meaning: "chế độ ăn cân đối, ăn uống lành mạnh",
        note: "Một khái niệm quan trọng trong dinh dưỡng, nhấn mạnh sự cần thiết của việc tiêu thụ đa dạng và cân đối các loại thực phẩm để đảm bảo sức khỏe tốt.",
        example:
          "I try to maintain a balanced diet, so I tend to avoid extra sugar.",
        exampleTranslation:
          "Tôi cố duy trì chế độ ăn cân đối nên có xu hướng tránh đường dư thừa.",
      },
    ],
  },

  // ==========================================
  // P1.14 - Money
  // ==========================================
  {
    id: "sp_s3_p14_money",
    skill: "Speaking",
    volume: "9",
    topic: "Money",
    part: "P1.14",
    cards: [
      {
        id: 202,
        word: "Splurging",
        pronunciation: "/splɜːdʒɪŋ/",
        meaning: "chi tiêu hoang phí, tiêu xài mạnh tay",
        note: "Thường được dùng để mô tả việc chi tiêu một lượng tiền lớn vào một thứ không cần thiết hoặc xa xỉ.",
        example:
          "I believe in enjoying the fruits of my labor, which sometimes means splurging on things that bring me joy.",
        exampleTranslation:
          "Tôi tin vào việc tận hưởng thành quả lao động, đôi khi có nghĩa là tiêu xài mạnh tay vào những thứ mang lại niềm vui.",
      },
      {
        id: 203,
        word: "Striking a balance",
        pronunciation: "/ˈstraɪkɪŋ ə ˈbæləns/",
        meaning: "tìm sự cân bằng, tìm điểm dung hòa",
        note: "Dùng để mô tả việc tìm ra một điểm cân bằng giữa hai thái cực, như tiết kiệm và chi tiêu.",
        example:
          "It's all about striking a balance between saving and living life to the fullest.",
        exampleTranslation:
          "Tất cả là về việc tìm sự cân bằng giữa tiết kiệm và sống hết mình.",
      },
      {
        id: 204,
        word: "Frugal",
        pronunciation: "/ˈfruːɡəl/",
        meaning: "tiết kiệm, không lãng phí",
        note: "Một tính từ mô tả một người không tiêu nhiều tiền hoặc tài nguyên và luôn cố gắng tiết kiệm.",
        example:
          "To be honest, I'm quite frugal – I prioritize saving over spending.",
        exampleTranslation:
          "Thành thật mà nói, tôi khá tiết kiệm – tôi ưu tiên để dành hơn chi tiêu.",
      },
      {
        id: 205,
        word: "Thoughtful purchases",
        pronunciation: "/ˈθɔːtfʊl ˈpɜː.tʃəsɪz/",
        meaning: "mua sắm có suy nghĩ, mua có cân nhắc kỹ",
        note: "Được dùng để mô tả việc mua sắm một cách có chọn lọc, dựa trên sự cân nhắc kỹ lưỡng về giá trị và tác động của món hàng.",
        example:
          "I'm more about making thoughtful purchases and investing in things that have long-term value.",
        exampleTranslation:
          "Tôi thiên về việc mua sắm có cân nhắc và đầu tư vào những thứ có giá trị lâu dài.",
      },
      {
        id: 206,
        word: "Methodical",
        pronunciation: "/məˈθɒdɪkəl/",
        meaning: "có phương pháp, có hệ thống",
        note: "Thường được dùng để mô tả một cách tiếp cận có tổ chức, bài bản và theo kế hoạch.",
        example:
          "I'm quite methodical when it comes to saving money – I adhere to a strict budget.",
        exampleTranslation:
          "Tôi khá có phương pháp khi tiết kiệm tiền – tôi tuân theo một ngân sách chặt chẽ.",
      },
      {
        id: 207,
        word: "Out of sight, out of mind",
        pronunciation: "/aʊt əv saɪt, aʊt əv maɪnd/",
        meaning: "xa mặt cách lòng, không thấy thì không nhớ",
        note: "Cụm từ này được dùng để chỉ việc khi không thấy vật gì đó, bạn sẽ dễ dàng quên lãng nó, ở đây áp dụng cho tiền bạc để giúp tiết kiệm.",
        example:
          "The out of sight, out of mind approach really helps me save without feeling the pinch.",
        exampleTranslation:
          "Cách tiếp cận 'xa mặt cách lòng' thực sự giúp tôi tiết kiệm mà không cảm thấy thiếu thốn.",
      },
      {
        id: 208,
        word: "Live within my means",
        pronunciation: "/lɪv wɪðɪn maɪ miːnz/",
        meaning: "sống trong khả năng tài chính, không tiêu quá thu nhập",
        note: "Được dùng để mô tả việc chi tiêu không vượt quá thu nhập, một nguyên tắc cơ bản của việc quản lý tài chính cá nhân.",
        example:
          "I don't really have a budget, but I try to live within my means.",
        exampleTranslation:
          "Tôi không có ngân sách cụ thể, nhưng tôi cố sống trong khả năng tài chính của mình.",
      },
      {
        id: 209,
        word: "Seizing opportunities",
        pronunciation: "/ˈsiːzɪŋ ˌɒpəˈtjuːnɪtiz/",
        meaning: "nắm bắt cơ hội",
        note: "Cụm từ này nhấn mạnh việc tận dụng những cơ hội có ích khi chúng xuất hiện, trong trường hợp này là để tiết kiệm tiền.",
        example:
          "It's more about seizing opportunities to save rather than following a strict regimen.",
        exampleTranslation:
          "Quan trọng hơn là nắm bắt cơ hội để tiết kiệm hơn là tuân theo một chế độ nghiêm ngặt.",
      },
      {
        id: 210,
        word: "Household chores",
        pronunciation: "/ˈhaʊshoʊld ˌtʃɔːrz/",
        meaning: "công việc nhà, việc gia đình",
        note: "Được dùng để mô tả các công việc hàng ngày cần được thực hiện để quản lý một gia đình, như dọn dẹp, nấu ăn, và giặt giũ.",
        example:
          "My parents provide me with pocket money for assisting with household chores.",
        exampleTranslation:
          "Bố mẹ cho tôi tiền tiêu vặt để hỗ trợ làm việc nhà.",
      },
      {
        id: 211,
        word: "Financial independence",
        pronunciation: "/faɪˈnænʃəl ˌɪndɪˈpɛndəns/",
        meaning: "độc lập tài chính",
        note: "Đây là một mục tiêu quan trọng trong quản lý tài chính cá nhân, nhấn mạnh tầm quan trọng của việc có khả năng tự quản lý tài chính mà không phụ thuộc vào người khác.",
        example:
          "It's their way of teaching me the value of hard work and financial independence.",
        exampleTranslation:
          "Đó là cách họ dạy tôi giá trị của sự chăm chỉ và độc lập tài chính.",
      },
      {
        id: 212,
        word: "Contributing to the household",
        pronunciation: "/kənˈtrɪbjutɪŋ tuː ðə ˈhaʊshoʊld/",
        meaning: "đóng góp cho gia đình, làm tròn trách nhiệm gia đình",
        note: "Dùng để chỉ việc tham gia vào các công việc hàng ngày của gia đình, như một phần của trách nhiệm và nghĩa vụ của mỗi thành viên.",
        example:
          "My parents believe that contributing to the household is part of being a family member.",
        exampleTranslation:
          "Bố mẹ tôi tin rằng đóng góp cho gia đình là một phần của việc là thành viên trong nhà.",
      },
      {
        id: 213,
        word: "Exceptional efforts",
        pronunciation: "/ɪkˈsɛpʃənl ˈɛfərts/",
        meaning: "nỗ lực xuất sắc, vượt trội hơn thường",
        note: "Dùng để mô tả hành động hoặc công sức vượt trội so với mức bình thường, thường được công nhận hoặc khen ngợi bởi người khác.",
        example:
          "They do occasionally reward me for exceptional efforts beyond the usual tasks.",
        exampleTranslation:
          "Đôi khi họ thưởng cho tôi vì những nỗ lực xuất sắc vượt ngoài các việc thường ngày.",
      },
      {
        id: 214,
        word: "Prosperity",
        pronunciation: "/prɒˈspɛr.ɪ.ti/",
        meaning: "sự thịnh vượng, giàu có",
        note: "Thường liên quan đến sự giàu có, thành công hoặc có một cuộc sống tốt đẹp.",
        example:
          "Giving money to kids is seen as a way to wish them luck and prosperity.",
        exampleTranslation:
          "Việc cho tiền trẻ con được coi là cách chúc các em may mắn và thịnh vượng.",
      },
      {
        id: 215,
        word: "The thought behind the gift",
        pronunciation: "/ðə θɔt bɪˈhaɪnd ðə ɡɪft/",
        meaning: "tình cảm và lòng thành đằng sau món quà",
        note: "Cụm từ này thường được sử dụng để chỉ sự quan tâm và tình cảm mà người tặng muốn diễn đạt thông qua việc tặng quà.",
        example:
          "The thought behind the gift is what counts, showing you really know and care about them.",
        exampleTranslation:
          "Tình cảm đằng sau món quà mới là điều quan trọng, thể hiện bạn thực sự biết và quan tâm đến họ.",
      },
    ],
  },

  // ==========================================
  // P1.15 - Social Media
  // ==========================================
  {
    id: "sp_s3_p15_socialmedia",
    skill: "Speaking",
    volume: "9",
    topic: "Social Media",
    part: "P1.15",
    cards: [
      {
        id: 216,
        word: "Active (on social media)",
        pronunciation: "/ˈæk.tɪv/",
        meaning: "tích cực, hoạt động nhiều (trên mạng xã hội)",
        note: "Trong ngữ cảnh này, 'tích cực' dùng để mô tả việc tham gia nhiệt tình vào các hoạt động hoặc sự kiện trên mạng xã hội.",
        example: "Yeah, I'm pretty active on social media.",
        exampleTranslation: "Ừ, tôi khá tích cực trên mạng xã hội.",
      },
      {
        id: 217,
        word: "Stay connected with",
        pronunciation: "/steɪ kəˈnɛktɪd wɪð/",
        meaning: "duy trì sự kết nối với ai đó",
        note: "Nói về việc duy trì mối quan hệ với bạn bè và gia đình thông qua mạng xã hội.",
        example:
          "It's a big part of how I stay connected with friends and keep up with what's happening.",
        exampleTranslation:
          "Đó là một phần lớn trong việc tôi duy trì kết nối với bạn bè và cập nhật những gì đang xảy ra.",
      },
      {
        id: 218,
        word: "Disconnect",
        pronunciation: "/ˌdɪs.kəˈnɛkt/",
        meaning: "ngắt kết nối, tạm rời mạng xã hội",
        note: "Ở đây, 'ngắt kết nối' nói về việc tạm thời xa rời mạng xã hội để tập trung vào cuộc sống thực và mối quan hệ ngoại tuyến.",
        example:
          "It's nice to disconnect and enjoy the moment without feeling the need to share everything online.",
        exampleTranslation:
          "Thật tốt khi ngắt kết nối và tận hưởng khoảnh khắc mà không cảm thấy cần phải chia sẻ mọi thứ lên mạng.",
      },
      {
        id: 219,
        word: "Way back",
        pronunciation: "/weɪ bæk/",
        meaning: "từ lâu, từ rất xưa",
        note: "Dùng để mô tả một khoảng thời gian rất xa xưa, thường là vài năm hoặc thậm chí vài thập kỷ trước.",
        example:
          "I first got into social media way back, probably around when I was in middle school.",
        exampleTranslation:
          "Tôi bắt đầu dùng mạng xã hội từ lâu, có lẽ khoảng khi tôi học trung học cơ sở.",
      },
      {
        id: 220,
        word: "Catch on",
        pronunciation: "/kætʃ ɒn/",
        meaning: "trở nên phổ biến, được đón nhận rộng rãi",
        note: "Được dùng khi mô tả sự tăng cường về độ nhận biết hoặc sự ưa chuộng của một điều gì đó trong công chúng.",
        example:
          "It was all about MySpace and then Facebook when it started to catch on.",
        exampleTranslation:
          "Lúc đầu là MySpace rồi đến Facebook khi nó bắt đầu trở nên phổ biến.",
      },
      {
        id: 221,
        word: "Late to the party",
        pronunciation: "/leɪt tə ðə ˈpɑːr.ti/",
        meaning: "chậm chân, bắt đầu muộn hơn người khác",
        note: "Dùng để mô tả việc bắt đầu sử dụng hoặc tham gia vào một xu hướng sau khi nhiều người khác đã biết đến hoặc tham gia từ trước.",
        example: "I was actually a bit late to the social media party.",
        exampleTranslation:
          "Tôi thực ra hơi chậm chân trong việc tham gia mạng xã hội.",
      },
      {
        id: 222,
        word: "Useful tool",
        pronunciation: "/ˈjuːs.fəl tuːl/",
        meaning: "công cụ hữu ích",
        note: "Được dùng để chỉ một thứ gì đó giúp đạt được mục tiêu hoặc thực hiện công việc một cách hiệu quả hơn.",
        example:
          "Once I saw the value in it, social media became a useful tool for keeping in touch.",
        exampleTranslation:
          "Khi tôi thấy giá trị của nó, mạng xã hội trở thành công cụ hữu ích để giữ liên lạc.",
      },
      {
        id: 223,
        word: "Incredibly",
        pronunciation: "/ɪnˈkrɛdəbli/",
        meaning: "cực kỳ, vô cùng",
        note: "Được dùng để nhấn mạnh mức độ phổ biến hoặc ảnh hưởng của mạng xã hội trong cuộc sống hàng ngày.",
        example: "Social media is incredibly popular where I live.",
        exampleTranslation: "Mạng xã hội cực kỳ phổ biến ở nơi tôi sống.",
      },
      {
        id: 224,
        word: "A vital part of daily life",
        pronunciation: "/ə ˈvaɪtəl pɑːrt ʌv ˈdeɪli laɪf/",
        meaning: "một phần rất quan trọng trong cuộc sống hằng ngày",
        note: "Cụm từ này thường được sử dụng để chỉ một yếu tố hoặc khía cạnh cần thiết mà là một phần không thể thiếu trong cuộc sống hàng ngày.",
        example: "It's become a vital part of daily life for a lot of people.",
        exampleTranslation:
          "Nó đã trở thành một phần rất quan trọng trong cuộc sống hàng ngày của nhiều người.",
      },
      {
        id: 225,
        word: "Traditional forms of communication",
        pronunciation: "/trəˈdɪʃənl fɔrmz əv kəˌmjunɪˈkeɪʃən/",
        meaning: "hình thức giao tiếp truyền thống",
        note: "Mô tả cách mà mọi người đã giao tiếp với nhau trước khi mạng xã hội trở nên phổ biến.",
        example:
          "A significant portion of the population still prefers traditional forms of communication.",
        exampleTranslation:
          "Một bộ phận đáng kể dân số vẫn ưa các hình thức giao tiếp truyền thống.",
      },
      {
        id: 226,
        word: "Internet accessibility",
        pronunciation: "/ˈɪntərˌnɛt ˌæksɛˈsɪbɪlɪti/",
        meaning: "khả năng tiếp cận internet",
        note: "Nói về mức độ dễ dàng mà người dân có thể sử dụng internet, bao gồm cả các vấn đề liên quan đến cơ sở hạ tầng và chi phí.",
        example:
          "Cultural preferences and internet accessibility issues play a big role in social media adoption.",
        exampleTranslation:
          "Sở thích văn hóa và các vấn đề về khả năng tiếp cận internet đóng vai trò lớn trong việc áp dụng mạng xã hội.",
      },
      {
        id: 227,
        word: "Scrolling through",
        pronunciation: "/ˈskroʊ.lɪŋ θruː/",
        meaning: "lướt (mạng xã hội, trang web)",
        note: "Được dùng để mô tả hành động xem thông tin trên mạng xã hội hoặc trang web bằng cách kéo màn hình lên xuống.",
        example:
          "I think I spend too much time scrolling through social media.",
        exampleTranslation:
          "Tôi nghĩ tôi dành quá nhiều thời gian để lướt mạng xã hội.",
      },
      {
        id: 228,
        word: "Addictive",
        pronunciation: "/əˈdɪk.tɪv/",
        meaning: "gây nghiện",
        note: "Nói về tính chất của mạng xã hội khiến người dùng muốn tiếp tục sử dụng một cách không kiểm soát được.",
        example:
          "It starts as a quick check, but before I know it, hours have gone by. It's kind of addictive.",
        exampleTranslation:
          "Ban đầu chỉ kiểm tra nhanh, nhưng trước khi tôi biết thì đã qua mấy tiếng. Nó khá gây nghiện.",
      },
      {
        id: 229,
        word: "Conscious",
        pronunciation: "/ˈkɒn.ʃəs/",
        meaning: "ý thức, có nhận thức về",
        note: "Được dùng để mô tả việc nhận biết và phản ứng với môi trường xung quanh mình, trong trường hợp này là việc sử dụng mạng xã hội một cách có kiểm soát.",
        example:
          "I'm conscious of not letting social media take over too much of my day.",
        exampleTranslation:
          "Tôi có ý thức không để mạng xã hội chiếm quá nhiều thời gian trong ngày.",
      },
    ],
  },

  // ==========================================
  // P1.16 - Singing
  // ==========================================
  {
    id: "sp_s3_p16_singing",
    skill: "Speaking",
    volume: "9",
    topic: "Singing",
    part: "P1.16",
    cards: [
      {
        id: 230,
        word: "Humming",
        pronunciation: "/ˈhʌm.ɪŋ/",
        meaning: "ngân nga, hát nhẹ không mở miệng",
        note: "Được dùng để mô tả hành động hát nhẹ nhàng không mở miệng, thường là khi một người cảm thấy thoải mái hoặc vui vẻ.",
        example:
          "Whether I'm in the shower or driving, I'm always humming or belting out a tune.",
        exampleTranslation:
          "Dù tắm hay lái xe, tôi luôn ngân nga hoặc hát vang một bài.",
      },
      {
        id: 231,
        word: "Belt out a tune",
        pronunciation: "/bɛlt aʊt eɪ tuːn/",
        meaning: "hát vang, hát to và đầy năng lượng",
        note: "Nói về việc hát với âm lượng lớn và đầy năng lượng, thường thể hiện sự hứng khởi hoặc cảm xúc mạnh mẽ.",
        example:
          "I find myself humming or belting out a tune whenever I feel good.",
        exampleTranslation:
          "Tôi thấy mình ngân nga hoặc hát vang một bài mỗi khi cảm thấy vui.",
      },
      {
        id: 232,
        word: "Self-conscious",
        pronunciation: "/ˌselfˈkɒn.ʃəs/",
        meaning: "tự ti, e ngại về bản thân",
        note: "Được dùng để mô tả cảm giác không thoải mái hoặc lo lắng về bản thân, đặc biệt là trong các tình huống xã hội hoặc khi thể hiện bản thân trước người khác.",
        example:
          "I'm pretty self-conscious about my voice, so I tend to avoid singing in front of others.",
        exampleTranslation:
          "Tôi khá tự ti về giọng hát nên có xu hướng tránh hát trước mặt người khác.",
      },
      {
        id: 233,
        word: "Perform",
        pronunciation: "/pərˈfɔːrmt/",
        meaning: "trình diễn, biểu diễn",
        note: "Từ này thường được sử dụng trong nhiều ngữ cảnh khác nhau, từ thực hiện một công việc hàng ngày đến biểu diễn trên sân khấu hoặc trình diễn nghệ thuật.",
        example:
          "I enjoy music a lot, but I just prefer listening to it rather than performing it myself.",
        exampleTranslation:
          "Tôi rất thích âm nhạc, nhưng tôi thích nghe hơn là tự mình biểu diễn.",
      },
      {
        id: 234,
        word: "Singing along to my favorite tunes",
        pronunciation: "/ˈsɪŋɪŋ əˈlɔŋ tuː maɪ ˈfeɪvərɪt tjuːnz/",
        meaning: "hát theo bài hát yêu thích",
        note: "Cụm từ này thường được sử dụng để miêu tả việc tham gia vào việc hát cùng với âm nhạc yêu thích, thường là một trải nghiệm vui vẻ và giải trí.",
        example:
          "I find myself humming or singing along to my favorite tunes quite often.",
        exampleTranslation:
          "Tôi thấy mình thường xuyên ngân nga hoặc hát theo các bài hát yêu thích.",
      },
      {
        id: 235,
        word: "Pick-me-up",
        pronunciation: "/ˈpɪk.miː.ʌp/",
        meaning: "thứ làm bạn phấn chấn, tiếp thêm năng lượng",
        note: "Thường được dùng để mô tả một hoạt động hoặc thứ gì đó giúp cải thiện tâm trạng hoặc tăng cường năng lượng một cách nhanh chóng.",
        example:
          "Singing has this incredible way of lifting my spirits when I need a quick pick-me-up.",
        exampleTranslation:
          "Ca hát có cách tuyệt vời để nâng cao tinh thần khi tôi cần thứ gì đó tiếp thêm năng lượng.",
      },
      {
        id: 236,
        word: "Special occasions",
        pronunciation: "/ˈspɛʃəl əˈkeɪʒənz/",
        meaning: "những dịp đặc biệt",
        note: "Được dùng để mô tả các sự kiện không thường xuyên xảy ra nhưng được kỷ niệm một cách trang trọng hoặc vui vẻ.",
        example:
          "I tend to only sing on special occasions or when I'm really feeling the music.",
        exampleTranslation:
          "Tôi thường chỉ hát vào những dịp đặc biệt hoặc khi thực sự cảm nhận được âm nhạc.",
      },
      {
        id: 237,
        word: "Feeling the music",
        pronunciation: "/ˈfiːlɪŋ ðə ˈmjuːzɪk/",
        meaning: "cảm nhận được âm nhạc, bị âm nhạc cuốn hút",
        note: "Mô tả trạng thái mà trong đó âm nhạc tác động mạnh mẽ tới cảm xúc hoặc tinh thần của một người, khiến họ muốn thể hiện qua việc hát hoặc nhảy.",
        example:
          "I sing in a moment of privacy when I'm really feeling the music.",
        exampleTranslation:
          "Tôi hát một mình khi thực sự cảm nhận được âm nhạc.",
      },
      {
        id: 238,
        word: "Vocal technique",
        pronunciation: "/ˈvoʊ.kəl tɛkˈniːk/",
        meaning: "kỹ thuật giọng hát",
        note: "Mô tả cách một người sử dụng giọng của mình khi hát, bao gồm cách kiểm soát hơi thở, phát âm, và độ cao của âm thanh.",
        example:
          "I decided to take singing lessons because I wanted to improve my vocal technique.",
        exampleTranslation:
          "Tôi quyết định học hát vì muốn cải thiện kỹ thuật giọng hát.",
      },
      {
        id: 239,
        word: "Boosted my confidence",
        pronunciation: "/bʊstɪd maɪ ˈkɒnfɪdəns/",
        meaning: "tăng cường sự tự tin",
        note: "Nói về việc cải thiện khả năng tin vào bản thân và khả năng của mình, đặc biệt trong việc biểu diễn trước công chúng.",
        example:
          "The singing lessons not only improved my voice but also boosted my confidence in performing.",
        exampleTranslation:
          "Các buổi học hát không chỉ cải thiện giọng tôi mà còn tăng cường sự tự tin khi biểu diễn.",
      },
      {
        id: 240,
        word: "Made the leap",
        pronunciation: "/meɪd ðə liːp/",
        meaning: "đưa ra quyết định táo bạo, bước ra khỏi vùng an toàn",
        note: "Cụm từ này thường được sử dụng để mô tả việc thực hiện một bước ngoạn mục hoặc quyết định mạo hiểm.",
        example:
          "I've thought about taking singing lessons but I've never quite made the leap.",
        exampleTranslation:
          "Tôi đã nghĩ đến việc học hát nhưng chưa bao giờ thực sự quyết định làm.",
      },
      {
        id: 241,
        word: "Expressing yourself",
        pronunciation: "/ɪkˈsprɛsɪŋ jɔːˈsɛlf/",
        meaning: "biểu đạt bản thân, thể hiện cảm xúc",
        note: "Mô tả việc sử dụng lời nói, hành động, hoặc âm nhạc để thể hiện cảm xúc hoặc suy nghĩ của một người.",
        example:
          "There's something about expressing yourself through music that can lift your spirits.",
        exampleTranslation:
          "Có điều gì đó trong việc biểu đạt bản thân qua âm nhạc có thể nâng cao tinh thần.",
      },
      {
        id: 242,
        word: "Lift your spirits",
        pronunciation: "/lɪft jɔːr ˈspɪrɪts/",
        meaning: "làm bạn cảm thấy vui vẻ hơn, nâng cao tinh thần",
        note: "Dùng để chỉ việc cải thiện tâm trạng của ai đó, thường qua một hành động hoặc sự kiện tích cực.",
        example:
          "Expressing yourself through music can lift your spirits and spread joy.",
        exampleTranslation:
          "Biểu đạt bản thân qua âm nhạc có thể nâng cao tinh thần và lan tỏa niềm vui.",
      },
      {
        id: 243,
        word: "A source of joy",
        pronunciation: "/ə sɔːrs ʌv dʒɔɪ/",
        meaning: "một nguồn vui, điều mang lại hạnh phúc",
        note: "Cụm từ này thường được sử dụng để mô tả một nguồn gốc hoặc yếu tố gì đó mang lại niềm vui và hạnh phúc cho người khác.",
        example:
          "For some, singing might be a source of joy and a way to express emotions.",
        exampleTranslation:
          "Với một số người, ca hát có thể là nguồn vui và cách thể hiện cảm xúc.",
      },
      {
        id: 244,
        word: "Universal key to happiness",
        pronunciation: "/ˌjuːnɪˈvɜːsəl kiː tə ˈhæpɪnəs/",
        meaning: "chìa khóa chung để đạt được hạnh phúc",
        note: "Biểu thị ý tưởng về một phương pháp hoặc giải pháp có thể mang lại hạnh phúc cho mọi người, mặc dù thực tế điều này có thể không áp dụng được cho tất cả.",
        example: "Singing is not a universal key to happiness for everyone.",
        exampleTranslation:
          "Ca hát không phải là chìa khóa chung để đạt được hạnh phúc cho mọi người.",
      },
    ],
  },

  // ==========================================
  // P1.17 - News
  // ==========================================
  {
    id: "sp_s3_p17_news",
    skill: "Speaking",
    volume: "9",
    topic: "News",
    part: "P1.17",
    cards: [
      {
        id: 245,
        word: "Keep up with the news",
        pronunciation: "/kiːp ʌp wɪð ðə nuz/",
        meaning: "cập nhật tin tức mới, theo dõi tin tức",
        note: "Cụm từ này thường được sử dụng để mô tả việc duy trì sự hiểu biết về các sự kiện và tin tức mới nhất, thường thông qua việc đọc báo, xem tin tức hoặc truy cập trang web tin tức.",
        example:
          "I do make it a point to keep up with the news, both by watching it on TV and reading articles online.",
        exampleTranslation:
          "Tôi luôn chú ý cập nhật tin tức, cả bằng cách xem TV lẫn đọc bài viết trực tuyến.",
      },
      {
        id: 246,
        word: "Stay informed",
        pronunciation: "/steɪ ɪnˈfɔːmd/",
        meaning: "giữ được thông tin cập nhật, luôn nắm bắt thông tin",
        note: "Nói về việc liên tục cập nhật kiến thức hoặc thông tin mới về các sự kiện hoặc tình hình hiện tại.",
        example:
          "It's important for me to stay informed about what's happening around the world.",
        exampleTranslation:
          "Điều quan trọng với tôi là luôn nắm bắt thông tin về những gì đang xảy ra trên thế giới.",
      },
      {
        id: 247,
        word: "Information overload",
        pronunciation: "/ˌɪnfərˈmeɪʃən ˌoʊvərˈloʊd/",
        meaning: "quá tải thông tin",
        note: "Mô tả tình trạng một người phải đối mặt với quá nhiều thông tin cùng một lúc, dẫn đến sự mệt mỏi hoặc căng thẳng.",
        example:
          "Sometimes the constant stream of news can be a bit too much, leading to information overload.",
        exampleTranslation:
          "Đôi khi dòng tin tức liên tục có thể hơi nhiều, dẫn đến quá tải thông tin.",
      },
      {
        id: 248,
        word: "Protecting my mental health",
        pronunciation: "/prəˈtɛktɪŋ maɪ ˈmɛntəl hɛlθ/",
        meaning: "bảo vệ sức khỏe tâm thần",
        note: "Nói về việc thực hiện các bước cần thiết để chăm sóc sự ổn định và hạnh phúc về mặt tâm lý.",
        example:
          "For me, it's about finding a balance and protecting my mental health.",
        exampleTranslation:
          "Với tôi, đó là về việc tìm sự cân bằng và bảo vệ sức khỏe tâm thần.",
      },
      {
        id: 249,
        word: "Impactful",
        pronunciation: "/ˈɪmpæktfəl/",
        meaning: "có ảnh hưởng lớn, tạo tác động mạnh",
        note: "Được dùng để mô tả một sự kiện, hành động, hoặc cá nhân tạo ra một sự thay đổi đáng kể hoặc ấn tượng mạnh mẽ.",
        example:
          "I remember individuals who've made headlines, especially those involved in impactful events.",
        exampleTranslation:
          "Tôi nhớ những cá nhân đã lên trang nhất báo, đặc biệt là những người liên quan đến các sự kiện có ảnh hưởng lớn.",
      },
      {
        id: 250,
        word: "Environmental activist",
        pronunciation: "/ɪnˌvaɪrənˈmɛntəl ˈæktɪvɪst/",
        meaning: "nhà hoạt động môi trường",
        note: "Là người đấu tranh cho các vấn đề liên quan đến bảo vệ môi trường, từ chống biến đổi khí hậu đến bảo tồn đa dạng sinh học.",
        example:
          "One person that comes to mind is a young environmental activist leading global climate change movements.",
        exampleTranslation:
          "Một người xuất hiện trong đầu tôi là một nhà hoạt động môi trường trẻ dẫn đầu các phong trào biến đổi khí hậu toàn cầu.",
      },
      {
        id: 251,
        word: "Broader issues",
        pronunciation: "/ˈbrɔːdər ˈɪʃuːz/",
        meaning: "vấn đề rộng lớn, vấn đề có phạm vi lớn",
        note: "Nói về các chủ đề hoặc vấn đề có phạm vi lớn, ảnh hưởng đến nhiều người hoặc lĩnh vực khác nhau.",
        example:
          "I tend to focus more on the broader issues and events rather than individual stories.",
        exampleTranslation:
          "Tôi có xu hướng tập trung vào các vấn đề rộng lớn và sự kiện hơn là các câu chuyện cá nhân.",
      },
      {
        id: 252,
        word: "Movements",
        pronunciation: "/ˈmuːvmənts/",
        meaning: "phong trào (xã hội, chính trị)",
        note: "Được dùng để mô tả những nỗ lực tập thể nhằm đạt được một mục tiêu chung, thường liên quan đến thay đổi xã hội hoặc chính trị.",
        example:
          "There are definitely moments and movements that catch my attention and make me think more deeply.",
        exampleTranslation:
          "Chắc chắn có những khoảnh khắc và phong trào thu hút sự chú ý và khiến tôi suy nghĩ sâu hơn.",
      },
      {
        id: 253,
        word: "Overcoming adversity",
        pronunciation: "/ˌoʊ.vərˈkʌm.ɪŋ ədˈvɜːr.sɪ.ti/",
        meaning: "vượt qua khó khăn, nghịch cảnh",
        note: "Thường được dùng để mô tả hành động của một người đối mặt và giành chiến thắng trước những thách thức trong cuộc sống.",
        example:
          "I find news about ordinary people really fascinating, whether it's a story of someone overcoming adversity.",
        exampleTranslation:
          "Tôi thấy tin tức về người bình thường rất thú vị, dù đó là câu chuyện ai đó vượt qua khó khăn.",
      },
      {
        id: 254,
        word: "Add a personal touch to the news",
        pronunciation: "/æd ə ˈpɜːrsənəl tʌtʃ tuː ðə nuz/",
        meaning:
          "thêm dấu ấn cá nhân vào tin tức, khiến tin tức trở nên gần gũi hơn",
        note: "Cụm từ này thường được sử dụng để mô tả việc cá nhân hóa hoặc tùy biến tin tức bằng cách thêm vào quan điểm hoặc cảm xúc của bản thân.",
        example:
          "Stories from ordinary people add a personal touch to the news and remind us of the shared human experience.",
        exampleTranslation:
          "Những câu chuyện từ người bình thường thêm dấu ấn cá nhân vào tin tức và nhắc nhở chúng ta về trải nghiệm chung của con người.",
      },
      {
        id: 255,
        word: "Make informed decisions",
        pronunciation: "/meɪk ɪnˈfɔːrmd dɪˈsɪʒənz/",
        meaning: "đưa ra quyết định sáng suốt dựa trên thông tin đầy đủ",
        note: "Cụm từ này thường được sử dụng để mô tả việc đưa ra quyết định sau khi đã nghiên cứu kỹ lưỡng và sử dụng thông tin đúng đắn.",
        example:
          "Knowing the latest developments enables me to make informed decisions.",
        exampleTranslation:
          "Nắm bắt các diễn biến mới nhất giúp tôi đưa ra quyết định sáng suốt.",
      },
      {
        id: 256,
        word: "The world's state",
        pronunciation: "/ðə wɜːrldz steɪt/",
        meaning: "hiện trạng của thế giới",
        note: "Cụm từ này thường được sử dụng để chỉ tình hình hiện tại của thế giới, bao gồm một loạt các yếu tố và vấn đề có ảnh hưởng đến cuộc sống của mọi người.",
        example:
          "It's about being a responsible citizen who's aware of the world's state.",
        exampleTranslation:
          "Đó là về việc trở thành một công dân có trách nhiệm, nhận thức được hiện trạng của thế giới.",
      },
      {
        id: 257,
        word: "Constant stream",
        pronunciation: "/ˈkɒnstənt striːm/",
        meaning: "dòng thông tin liên tục, không ngừng nghỉ",
        note: "Mô tả việc liên tục nhận được thông tin mà không ngừng nghỉ, thường qua các phương tiện truyền thông hoặc mạng xã hội.",
        example:
          "Sometimes the constant stream of information can be overwhelming.",
        exampleTranslation:
          "Đôi khi dòng thông tin liên tục có thể gây quá tải.",
      },
      {
        id: 258,
        word: "Mental peace",
        pronunciation: "/ˈmentl piːs/",
        meaning: "bình yên tinh thần",
        note: "Nói về trạng thái tâm lý mà ở đó một người cảm thấy yên bình và không bị áp đảo bởi lo lắng hoặc stress.",
        example:
          "For me, it's about finding a balance between being informed and maintaining mental peace.",
        exampleTranslation:
          "Với tôi, đó là về việc tìm sự cân bằng giữa việc nắm bắt thông tin và duy trì bình yên tinh thần.",
      },
    ],
  },
  // ==========================================
  // P1.18 - Musical Instruments
  // ==========================================
  {
    id: "sp_s4_p18_instruments",
    skill: "Speaking",
    volume: "9",
    topic: "Musical Instruments",
    part: "P1.18",
    cards: [
      {
        id: 259,
        word: "Express myself creatively",
        pronunciation: "/ɪkˈsprɛs maɪˈsɛlf kriˈeɪ.tɪv.li/",
        meaning: "thể hiện bản thân một cách sáng tạo",
        note: "Cụm từ này thường được sử dụng để mô tả quá trình sử dụng nghệ thuật, viết lách, âm nhạc, hoặc các hình thức sáng tạo khác như một phương tiện để biểu đạt danh tính cá nhân hoặc cảm xúc.",
        example:
          "I started learning guitar as a way to express myself creatively and unwind after school.",
        exampleTranslation:
          "Tôi bắt đầu học guitar như một cách để thể hiện bản thân một cách sáng tạo và thư giãn sau giờ học.",
      },
      {
        id: 260,
        word: "Unwind",
        pronunciation: "/ʌnˈwaɪnd/",
        meaning: "thư giãn, giải tỏa căng thẳng",
        note: "Thường được sử dụng để chỉ hành động giảm căng thẳng hoặc mệt mỏi sau một khoảng thời gian làm việc hoặc hoạt động căng thẳng. Nó thường bao gồm các hoạt động giúp bình tâm và giảm lo lắng.",
        example:
          "Playing guitar is my favorite way to unwind after a long day.",
        exampleTranslation:
          "Chơi guitar là cách yêu thích của tôi để thư giãn sau một ngày dài.",
      },
      {
        id: 261,
        word: "Therapeutic",
        pronunciation: "/ˌθer.əˈpjuː.tɪk/",
        meaning: "mang tính chữa bệnh, có tác dụng chữa lành",
        note: "Tính từ này thường được sử dụng để mô tả các hoạt động, phương pháp điều trị, hoặc môi trường thúc đẩy quá trình chữa lành và đóng góp tích cực cho sức khỏe thể chất hoặc tinh thần.",
        example:
          "I find playing guitar not only enjoyable but also therapeutic, especially when improvising.",
        exampleTranslation:
          "Tôi thấy chơi guitar không chỉ thú vị mà còn có tác dụng chữa lành, đặc biệt khi ứng tấu.",
      },
      {
        id: 262,
        word: "Dedication",
        pronunciation: "/ˌded.ɪˈkeɪ.ʃən/",
        meaning: "sự tận tâm, sự cống hiến",
        note: "Tính từ này thường mô tả mức độ cam kết hoặc tận tâm mà một người dành cho công việc, sở thích, hoặc mục tiêu cụ thể. Sự tận tâm thể hiện qua thái độ làm việc miệt mài và không ngừng nghỉ.",
        example:
          "I've always admired people who can play instruments – I think it requires a lot of dedication and skill.",
        exampleTranslation:
          "Tôi luôn ngưỡng mộ những người chơi nhạc cụ – tôi nghĩ điều đó đòi hỏi rất nhiều sự tận tâm và kỹ năng.",
      },
      {
        id: 263,
        word: "Appreciate",
        pronunciation: "/əˈpriː.ʃi.eɪt/",
        meaning: "đánh giá cao, biết ơn, trân trọng",
        note: "Động từ này có hai nghĩa chính: nhận ra hoặc đánh giá cao giá trị to lớn của một điều gì đó, hoặc cảm thấy biết ơn đối với điều gì đó hay ai đó.",
        example:
          "I do enjoy listening to music and appreciate the talent and effort that musicians put into their work.",
        exampleTranslation:
          "Tôi thích nghe nhạc và đánh giá cao tài năng và công sức mà các nhạc sĩ bỏ vào tác phẩm của họ.",
      },
      {
        id: 264,
        word: "Musical genres",
        pronunciation: "/ˈmjuː.zɪ.kəl ˈʒɒn.rəz/",
        meaning: "các thể loại âm nhạc",
        note: "Thể loại âm nhạc được phân loại dựa trên các đặc điểm riêng biệt về phong cách, nhịp điệu, và cách sử dụng các nhạc cụ. Ví dụ phổ biến bao gồm jazz, rock, classical, và pop.",
        example:
          "I particularly enjoyed learning about different musical genres and how each has influenced various cultures.",
        exampleTranslation:
          "Tôi đặc biệt thích tìm hiểu về các thể loại âm nhạc khác nhau và cách mỗi thể loại ảnh hưởng đến các nền văn hóa.",
      },
      {
        id: 265,
        word: "Inspiring",
        pronunciation: "/ɪnˈspaɪə.rɪŋ/",
        meaning: "truyền cảm hứng, khơi dậy cảm hứng",
        note: "Tính từ này thường được sử dụng để mô tả cá nhân, sự kiện, hoặc tác phẩm nghệ thuật có khả năng khơi dậy cảm hứng hoặc thúc đẩy người khác hành động, sáng tạo, hoặc nỗ lực vì một mục tiêu.",
        example:
          "Learning about music was not only educational but also inspiring, as it opened my eyes to the diverse world of music.",
        exampleTranslation:
          "Học về âm nhạc không chỉ mang tính giáo dục mà còn truyền cảm hứng, vì nó mở ra cho tôi thế giới âm nhạc đa dạng.",
      },
      {
        id: 266,
        word: "Formally study",
        pronunciation: "/ˈfɔːr.məl.i ˈstʌd.i/",
        meaning: "học một cách chính thức, học có hệ thống",
        note: "Cụm từ này thường ám chỉ việc học tập tại các cơ sở giáo dục như trường học hay đại học, nơi có một khung chương trình học bài bản và có hệ thống.",
        example:
          "I haven't formally studied music in school, but I've taken it upon myself to learn online.",
        exampleTranslation:
          "Tôi chưa học âm nhạc một cách chính thức ở trường, nhưng tôi tự học qua mạng.",
      },
      {
        id: 267,
        word: "Curriculum",
        pronunciation: "/kəˈrɪk.jʊ.ləm/",
        meaning: "chương trình học",
        note: "'Curriculum' liên quan đến tổng thể các môn học và nội dung được dạy trong một cơ sở giáo dục. Nó định hình nội dung giáo dục mà học sinh hoặc sinh viên sẽ được học trong suốt khoá học.",
        example:
          "Our curriculum was more focused on science and mathematics, so music education was somewhat limited.",
        exampleTranslation:
          "Chương trình học của chúng tôi tập trung nhiều hơn vào khoa học và toán học, nên giáo dục âm nhạc khá hạn chế.",
      },
      {
        id: 268,
        word: "Brain development",
        pronunciation: "/breɪn dɪˈvel.əp.mənt/",
        meaning: "sự phát triển của não",
        note: "Đây là quá trình xảy ra suốt đời nhưng đặc biệt quan trọng trong giai đoạn trẻ em và thiếu niên. Hoạt động thể chất, dinh dưỡng, và tương tác xã hội có thể ảnh hưởng lớn đến sự phát triển này.",
        example:
          "Music lessons do more than just teach kids how to play instruments; they help with brain development.",
        exampleTranslation:
          "Học nhạc không chỉ dạy trẻ cách chơi nhạc cụ; chúng còn giúp phát triển não bộ.",
      },
      {
        id: 269,
        word: "Boost coordination",
        pronunciation: "/buːst koʊˌɔːr.dɪˈneɪ.ʃən/",
        meaning: "tăng cường khả năng phối hợp tay-mắt",
        note: "Cụm từ này thường liên quan đến việc cải thiện khả năng điều khiển các bộ phận của cơ thể một cách đồng bộ và hiệu quả, có thể thông qua luyện tập hoặc thể thao.",
        example: "Music lessons improve focus and even boost coordination.",
        exampleTranslation:
          "Học nhạc cải thiện sự tập trung và thậm chí tăng cường khả năng phối hợp.",
      },
      {
        id: 270,
        word: "Compulsory",
        pronunciation: "/kəmˈpʌl.sər.i/",
        meaning: "bắt buộc, không thể tránh khỏi",
        note: "Từ này được sử dụng để mô tả một điều gì đó không thể tránh khỏi trong các tình huống nhất định, như các quy định pháp luật hoặc các quy tắc trong một tổ chức.",
        example:
          "I don't think music should be compulsory – maybe schools should offer it as an option instead.",
        exampleTranslation:
          "Tôi không nghĩ âm nhạc nên là bắt buộc – có lẽ trường nên cung cấp nó như một lựa chọn thay thế.",
      },
      {
        id: 271,
        word: "Get the hang of",
        pronunciation: "/ɡɛt ðə hæŋ ʌv/",
        meaning: "nắm bắt được, làm quen và thành thạo",
        note: "Cụm từ này thường được sử dụng để mô tả quá trình trở nên thành thạo hơn trong một kỹ năng hoặc công việc sau một thời gian luyện tập hoặc thử nghiệm.",
        example:
          "I think it's pretty easy to get the hang of an instrument if you really like music.",
        exampleTranslation:
          "Tôi nghĩ khá dễ để nắm bắt được nhạc cụ nếu bạn thực sự thích âm nhạc.",
      },
      {
        id: 272,
        word: "Have a knack for",
        pronunciation: "/hæv ə næk fɔːr/",
        meaning: "có năng khiếu, có tài tự nhiên về điều gì",
        note: "Cụm từ này được dùng để chỉ khả năng tự nhiên hoặc đặc biệt giỏi về một lĩnh vực cụ thể, không nhất thiết phải liên quan đến việc được đào tạo bài bản.",
        example: "Learning an instrument is easy if you have a knack for it.",
        exampleTranslation: "Học nhạc cụ dễ dàng nếu bạn có năng khiếu về nó.",
      },
      {
        id: 273,
        word: "Tough",
        pronunciation: "/tʌf/",
        meaning: "khó khăn, thử thách",
        note: "Từ này có nhiều nghĩa tùy theo ngữ cảnh. Khi mô tả tình huống, nó ám chỉ độ khó khăn hoặc thử thách cần vượt qua.",
        example:
          "To be honest, I find learning an instrument pretty tough – it's not just about playing some notes.",
        exampleTranslation:
          "Thành thật mà nói, tôi thấy học nhạc cụ khá khó – không chỉ đơn giản là chơi vài nốt nhạc.",
      },
      {
        id: 274,
        word: "Commitment",
        pronunciation: "/kəˈmɪt.mənt/",
        meaning: "sự cam kết, sự tận tụy",
        note: "'Commitment' ám chỉ một nghĩa vụ hoặc trách nhiệm mạnh mẽ mà một người cam kết theo đuổi hoặc thực hiện, thường được sử dụng để mô tả sự dành trọn vẹn sức lực, thời gian cho một mục đích cụ thể.",
        example:
          "For most of us, learning an instrument is a real commitment if you want to get good at it.",
        exampleTranslation:
          "Với hầu hết chúng ta, học nhạc cụ là một cam kết thực sự nếu bạn muốn giỏi.",
      },
    ],
  },

  // ==========================================
  // P1.19 - Travelling
  // ==========================================
  {
    id: "sp_s4_p19_travelling",
    skill: "Speaking",
    volume: "9",
    topic: "Travelling",
    part: "P1.19",
    cards: [
      {
        id: 275,
        word: "Vibe",
        pronunciation: "/vaɪb/",
        meaning: "không khí, cảm giác, năng lượng đặc trưng",
        note: "Từ 'vibe' thường dùng để mô tả cảm giác tổng thể mà một nơi, sự kiện hoặc người mang lại. Nó là một khái niệm rất trực giác và có thể được sử dụng để nói về những cảm nhận tích cực hoặc tiêu cực.",
        example:
          "Every place has its own vibe and hidden gems, and I love discovering them.",
        exampleTranslation:
          "Mỗi nơi đều có không khí và vẻ đẹp riêng, và tôi thích khám phá chúng.",
      },
      {
        id: 276,
        word: "Thrilling",
        pronunciation: "/ˈθrɪl.ɪŋ/",
        meaning: "hồi hộp, thú vị, mang lại cảm giác mạnh",
        note: "'Thrilling' thường được dùng để mô tả trải nghiệm gây cảm giác mạnh, như xem một bộ phim hành động hay khi tham gia vào một hoạt động mạo hiểm. Nó có liên quan đến cảm giác phấn khích và sự hài lòng.",
        example:
          "It's just thrilling to step out of my everyday life and dive into something completely different.",
        exampleTranslation:
          "Thật hồi hộp khi bước ra khỏi cuộc sống hàng ngày và đắm mình vào điều gì đó hoàn toàn khác.",
      },
      {
        id: 277,
        word: "Familiar",
        pronunciation: "/fəˈmɪl.i.ər/",
        meaning: "quen thuộc, đã biết từ lâu",
        note: "'Familiar' dùng để chỉ điều gì đó đã được biết đến từ lâu hoặc gắn bó chặt chẽ. Nó có thể áp dụng cho mọi thứ từ một địa điểm, một người, một đối tượng, đến một tình huống.",
        example: "I prefer staying close to home where everything is familiar.",
        exampleTranslation: "Tôi thích ở gần nhà nơi mọi thứ đều quen thuộc.",
      },
      {
        id: 278,
        word: "Comfort zone",
        pronunciation: "/ˈkʌm.fərt zəʊn/",
        meaning: "vùng thoải mái, vùng an toàn",
        note: "'Comfort zone' đề cập đến tình trạng hoặc không gian mà trong đó một người cảm thấy thoải mái và an toàn nhất, không gặp rủi ro hay thách thức.",
        example:
          "I enjoy my comfort zone and think there's a lot to appreciate right here without going too far.",
        exampleTranslation:
          "Tôi thích vùng thoải mái của mình và nghĩ có nhiều thứ để trân trọng ngay đây mà không cần đi xa.",
      },
      {
        id: 279,
        word: "A quick weekend away",
        pronunciation: "/ə kwɪk ˈwiːkˌɛnd əˈweɪ/",
        meaning: "kỳ nghỉ cuối tuần ngắn",
        note: "Cụm từ này thường được sử dụng để mô tả một chuyến đi nhanh, thường là để thư giãn và thoát khỏi cuộc sống hàng ngày, không đi quá xa và chỉ kéo dài hai đến ba ngày.",
        example:
          "Could be a quick weekend away or a longer holiday – I'm not picky as long as I'm going somewhere.",
        exampleTranslation:
          "Có thể là kỳ nghỉ cuối tuần ngắn hoặc kỳ nghỉ dài hơn – tôi không kén chọn miễn là được đi đâu đó.",
      },
      {
        id: 280,
        word: "Picky",
        pronunciation: "/ˈpɪk.i/",
        meaning: "kén chọn, khó tính",
        note: "Từ 'picky' thường được dùng để mô tả người có xu hướng chọn lọc một cách kỹ càng, đôi khi đến mức quá mức, đặc biệt là về chất lượng hoặc chi tiết.",
        example: "I'm not picky as long as I'm going somewhere new.",
        exampleTranslation:
          "Tôi không kén chọn miễn là được đến nơi nào đó mới.",
      },
      {
        id: 281,
        word: "Homebody",
        pronunciation: "/ˈhoʊmˌbɒd.i/",
        meaning: "người thích ở nhà, không thích ra ngoài",
        note: "'Homebody' dùng để chỉ một người thường xuyên chọn ở nhà thay vì đi ra ngoài. Họ thường cảm thấy thoải mái nhất khi ở trong môi trường gia đình của mình.",
        example:
          "I'm quite a homebody so I'm perfectly happy spending my free time relaxing at home.",
        exampleTranslation:
          "Tôi khá thích ở nhà nên hoàn toàn hạnh phúc khi dành thời gian rảnh thư giãn tại nhà.",
      },
      {
        id: 282,
        word: "Local attractions",
        pronunciation: "/ˈloʊ.kəl əˈtræk.ʃənz/",
        meaning: "điểm tham quan địa phương",
        note: "'Local attractions' có thể bao gồm một loạt các địa điểm như bảo tàng, công viên, di tích lịch sử, và các khu vui chơi giải trí. Chúng là những nơi thường được khuyên tham quan khi đến một khu vực nhất định.",
        example:
          "I enjoy spending my free time relaxing at home or enjoying local attractions.",
        exampleTranslation:
          "Tôi thích dành thời gian rảnh thư giãn ở nhà hoặc khám phá các điểm tham quan địa phương.",
      },
      {
        id: 283,
        word: "Bustling cities",
        pronunciation: "/ˈbʌs.lɪŋ ˈsɪt.iz/",
        meaning: "các thành phố nhộn nhịp, sôi động",
        note: "'Bustling' được sử dụng để mô tả những nơi có rất nhiều hoạt động, thường là thương mại hoặc xã hội, điển hình là những khu vực đô thị đông đúc.",
        example:
          "There's so much diversity here – from bustling cities to serene countryside.",
        exampleTranslation:
          "Có rất nhiều sự đa dạng ở đây – từ các thành phố nhộn nhịp đến vùng nông thôn yên bình.",
      },
      {
        id: 284,
        word: "Serene countryside",
        pronunciation: "/sɪˈriːn ˈkʌn.tri.saɪd/",
        meaning: "vùng nông thôn yên bình, thanh thản",
        note: "'Serene' chỉ sự yên tĩnh và thanh bình, thường được sử dụng để mô tả các khu vực ngoại ô hoặc nông thôn không bị ảnh hưởng bởi sự hối hả của đô thị.",
        example:
          "I love exploring different regions, from bustling cities to serene countryside.",
        exampleTranslation:
          "Tôi thích khám phá các vùng khác nhau, từ thành phố nhộn nhịp đến nông thôn yên bình.",
      },
      {
        id: 285,
        word: "Jetting off",
        pronunciation: "/ˈdʒɛt.ɪŋ ɒf/",
        meaning: "khởi hành bằng máy bay, bay đến nơi xa",
        note: "Cụm từ này thường được dùng để mô tả việc bắt đầu một chuyến đi, đặc biệt là những chuyến đi du lịch hay đến những nơi xa. Nó gợi lên hình ảnh của việc lên máy bay và bay đến một điểm đến mới.",
        example:
          "I love jetting off to different countries, experiencing vastly different cultures, languages, and food.",
        exampleTranslation:
          "Tôi thích bay đến các quốc gia khác nhau, trải nghiệm những nền văn hóa, ngôn ngữ và ẩm thực rất khác biệt.",
      },
      {
        id: 286,
        word: "Stunning natural scenery",
        pronunciation: "/ˈstʌn.ɪŋ ˈnæʧ.rəl ˈsiː.nər.i/",
        meaning: "cảnh quan thiên nhiên hùng vĩ, tuyệt đẹp",
        note: "'Stunning' được dùng để mô tả cảnh quan thiên nhiên cực kỳ đẹp, có thể làm cho người xem ngạc nhiên hoặc mê mẩn. Các ví dụ điển hình bao gồm những ngọn núi cao chót vót, hồ nước trong xanh, và các khu rừng rộng lớn.",
        example:
          "I enjoy exploring parts of Asia for its vibrant cultures and stunning natural scenery.",
        exampleTranslation:
          "Tôi thích khám phá các vùng của châu Á vì văn hóa sôi động và cảnh quan thiên nhiên hùng vĩ.",
      },
      {
        id: 287,
        word: "A rush of adrenaline",
        pronunciation: "/ə rʌʃ əv æd.rəˈniː.lɪn/",
        meaning: "cảm giác phấn khích mạnh, luồng adrenaline",
        note: "'A rush of adrenaline' thường được sử dụng để mô tả trạng thái cơ thể tăng cường năng lượng đột ngột do phản ứng với cảm xúc mạnh như hồi hộp, sợ hãi, hoặc căng thẳng.",
        example:
          "Travelling is like a rush of adrenaline; every new place brings excitement and a bit of mystery.",
        exampleTranslation:
          "Du lịch giống như luồng adrenaline; mỗi nơi mới mang lại sự hứng khởi và chút bí ẩn.",
      },
      {
        id: 288,
        word: "Incredibly liberating",
        pronunciation: "/ɪnˈkrɛd.ə.bli ˈlɪb.ər.eɪ.tɪŋ/",
        meaning: "cảm giác tự do phi thường, giải phóng hoàn toàn",
        note: "'Incredibly liberating' thường được dùng để mô tả cảm giác thoát khỏi các hạn chế hoặc ràng buộc truyền thống, mang lại cảm giác tự do đặc biệt và mạnh mẽ.",
        example:
          "Being somewhere where no one knows me is incredibly liberating – I can truly relax and be myself.",
        exampleTranslation:
          "Ở nơi không ai biết tôi là cảm giác tự do phi thường – tôi có thể thực sự thư giãn và là chính mình.",
      },
      {
        id: 289,
        word: "Exhilarating",
        pronunciation: "/ɪɡˈzɪl.ər.eɪ.tɪŋ/",
        meaning: "làm sảng khoái, hứng khởi cao độ",
        note: "'Exhilarating' dùng để mô tả trải nghiệm hay hoạt động gây cảm giác hồi hộp và thích thú, thường liên quan đến cảm giác hưng phấn cao độ.",
        example: "The whole travel experience is just exhilarating.",
        exampleTranslation:
          "Toàn bộ trải nghiệm du lịch thực sự rất sảng khoái.",
      },
      {
        id: 290,
        word: "Anxious",
        pronunciation: "/ˈæŋk.ʃəs/",
        meaning: "lo lắng, bồn chồn",
        note: "'Anxious' mô tả cảm giác lo âu hoặc bồn chồn về một sự kiện sắp xảy ra hoặc kết quả không chắc chắn. Cảm giác này có thể ảnh hưởng đến tâm trạng và hành động hàng ngày.",
        example:
          "Traveling can make me a bit anxious – I worry about things going wrong, like missing a connection.",
        exampleTranslation:
          "Du lịch có thể khiến tôi hơi lo lắng – tôi lo về những sự cố như lỡ chuyến kết nối.",
      },
      {
        id: 291,
        word: "Settle into the rhythm of",
        pronunciation: "/ˈset.əl ˈɪn.tuː ðə ˈrɪð.əm əv/",
        meaning: "thích nghi với nhịp độ, dần quen với",
        note: "Cụm từ này dùng để mô tả quá trình thích nghi với một lối sống hoặc thói quen mới, dần dần cảm thấy thoải mái và quen với một môi trường hoặc tình huống mới.",
        example:
          "Once I settle into the rhythm of being on the road, I usually start to enjoy myself more.",
        exampleTranslation:
          "Khi đã thích nghi với nhịp điệu của chuyến đi, tôi thường bắt đầu tận hưởng nhiều hơn.",
      },
    ],
  },

  // ==========================================
  // P1.20 - Transport
  // ==========================================
  {
    id: "sp_s4_p20_transport",
    skill: "Speaking",
    volume: "9",
    topic: "Transport",
    part: "P1.20",
    cards: [
      {
        id: 292,
        word: "Zone out",
        pronunciation: "/zoʊn aʊt/",
        meaning: "lơ đãng, để đầu óc nghỉ ngơi, không tập trung vào gì",
        note: "Trong ngữ cảnh này, 'zone out' được sử dụng để mô tả hành động cho phép bản thân tạm thời ngừng suy nghĩ về các công việc hoặc môi trường xung quanh, thay vào đó là cho phép tâm trí nghỉ ngơi hoặc mơ mộng.",
        example:
          "I like that the bus gives me some time to read or just zone out before starting my day.",
        exampleTranslation:
          "Tôi thích việc xe buýt cho tôi thời gian để đọc hoặc chỉ để đầu óc nghỉ ngơi trước khi bắt đầu ngày mới.",
      },
      {
        id: 293,
        word: "Public transport",
        pronunciation: "/ˈpʌb.lɪk ˈtræns.pɔːrt/",
        meaning: "phương tiện giao thông công cộng",
        note: "'Public transport' bao gồm các dịch vụ vận chuyển hàng loạt như xe buýt, tàu điện, và tàu điện ngầm, được quản lý bởi các tổ chức hoặc chính quyền. Đây là lựa chọn vận chuyển tiết kiệm và thân thiện với môi trường.",
        example:
          "It's better for the environment to use public transport instead of driving alone.",
        exampleTranslation:
          "Sử dụng phương tiện giao thông công cộng thay vì lái xe một mình tốt hơn cho môi trường.",
      },
      {
        id: 294,
        word: "Flexibility",
        pronunciation: "/ˌflɛk.sɪˈbɪl.ɪ.ti/",
        meaning: "tính linh hoạt, khả năng thích ứng",
        note: "'Flexibility' mô tả khả năng thích ứng hoặc thay đổi một cách dễ dàng để phù hợp với các điều kiện khác nhau. Tính từ này không chỉ dùng trong bối cảnh thể chất mà còn áp dụng trong quản lý và kế hoạch.",
        example:
          "I enjoy the flexibility of leaving whenever I'm ready, not tied to a schedule.",
        exampleTranslation:
          "Tôi thích sự linh hoạt khi có thể xuất phát bất cứ lúc nào sẵn sàng, không bị ràng buộc vào lịch trình.",
      },
      {
        id: 295,
        word: "Get ready for the day ahead",
        pronunciation: "/ɡɛt ˈrɛdi fɔːr ðə deɪ əˈhɛd/",
        meaning: "chuẩn bị cho ngày mới",
        note: "Cụm từ này thường được sử dụng để mô tả quá trình chuẩn bị tâm thế và các công việc cần thiết trước khi bắt đầu một ngày làm việc hoặc học tập.",
        example:
          "Listening to podcasts during the drive helps me get ready for the day ahead.",
        exampleTranslation:
          "Nghe podcast trong khi lái xe giúp tôi chuẩn bị sẵn sàng cho ngày mới.",
      },
      {
        id: 296,
        word: "Reliable",
        pronunciation: "/rɪˈlaɪ.ə.bəl/",
        meaning: "đáng tin cậy, nhất quán",
        note: "'Reliable' mô tả một người, dịch vụ, hoặc sản phẩm mà bạn có thể trông cậy vào một cách thường xuyên và liên tục, cung cấp kết quả nhất quán và chính xác.",
        example:
          "Most people prefer driving because public transportation isn't very reliable.",
        exampleTranslation:
          "Hầu hết mọi người thích lái xe vì phương tiện công cộng không đáng tin cậy lắm.",
      },
      {
        id: 297,
        word: "Widespread",
        pronunciation: "/ˈwaɪd.spred/",
        meaning: "phổ biến rộng rãi, lan rộng",
        note: "'Widespread' được dùng để mô tả điều gì đó rộng rãi, từ các vấn đề, xu hướng, đến các sản phẩm, ảnh hưởng đến nhiều khu vực hoặc số lượng lớn người.",
        example:
          "Public transportation isn't very reliable or widespread in my hometown.",
        exampleTranslation:
          "Phương tiện giao thông công cộng không đáng tin cậy hoặc phổ biến lắm ở quê tôi.",
      },
      {
        id: 298,
        word: "Downtown",
        pronunciation: "/ˈdaʊn.taʊn/",
        meaning: "trung tâm thành phố, khu trung tâm",
        note: "'Downtown' thường được dùng để chỉ khu vực trung tâm sầm uất của một thành phố, nơi tập trung các hoạt động kinh doanh, mua sắm, và giải trí.",
        example:
          "Public transport is great for students and people who work downtown where parking can be a nightmare.",
        exampleTranslation:
          "Phương tiện công cộng rất tốt cho học sinh và những người làm việc ở trung tâm thành phố nơi việc đỗ xe có thể là cơn ác mộng.",
      },
      {
        id: 299,
        word: "A quick drive",
        pronunciation: "/ə kwɪk draɪv/",
        meaning: "một chuyến lái xe ngắn, lái xe nhanh",
        note: "'A quick drive' được sử dụng để mô tả một chuyến đi ngắn bằng xe hơi, thường là trong một khoảng cách không xa, ngụ ý rằng chuyến đi không mất nhiều thời gian.",
        example:
          "My work is just about 3 kilometers away – a quick drive of about 10 minutes.",
        exampleTranslation:
          "Công việc của tôi chỉ cách khoảng 3 km – một chuyến lái xe nhanh khoảng 10 phút.",
      },
      {
        id: 300,
        word: "Without much traffic",
        pronunciation: "/wɪˈðaʊt mʌtʃ ˈtræf.ɪk/",
        meaning: "không có nhiều xe cộ, đường thông thoáng",
        note: "'Without much traffic' thường được sử dụng để mô tả tình trạng các con đường ít xe cộ, điều này làm cho việc đi lại trở nên dễ dàng và nhanh chóng hơn.",
        example: "It's a quick drive, about 10 minutes without much traffic.",
        exampleTranslation:
          "Chỉ mất khoảng 10 phút lái xe khi đường không đông xe cộ.",
      },
      {
        id: 301,
        word: "The commute",
        pronunciation: "/ðə kəˈmjuːt/",
        meaning: "quãng đường đi làm hoặc đi học hàng ngày",
        note: "'The commute' mô tả quãng đường mà một người đi làm hoặc đi học thường xuyên từ nhà đến nơi làm việc hoặc trường học và ngược lại. Đây là một phần quan trọng của cuộc sống hàng ngày.",
        example:
          "The commute takes me about an hour by train, but I don't mind it much.",
        exampleTranslation:
          "Quãng đường đi làm mất khoảng một tiếng bằng tàu, nhưng tôi không ngại lắm.",
      },
      {
        id: 302,
        word: "Catch up on",
        pronunciation: "/kætʃ ʌp ɒn/",
        meaning: "bắt kịp, làm những việc đã bỏ lỡ hoặc chậm trễ",
        note: "'Catch up on' thường được dùng để mô tả việc dành thời gian để hoàn thành công việc hoặc nhiệm vụ mà bạn đã không thể làm trong một thời gian, như đọc báo cáo, trả lời email, hoặc xem chương trình bỏ lỡ.",
        example:
          "I can use the commute time to catch up on emails, read, or just relax.",
        exampleTranslation:
          "Tôi có thể dùng thời gian đi lại để bắt kịp email, đọc sách, hoặc chỉ thư giãn.",
      },
    ],
  },
  // ==========================================
  // P1.21 - Science
  // ==========================================
  {
    id: "sp_s5_p21_science",
    skill: "Speaking",
    volume: "9",
    topic: "Science",
    part: "P1.21",
    cards: [
      {
        id: 303,
        word: "Make sense",
        pronunciation: "/meɪk sɛns/",
        meaning: "có lý, hợp lý, dễ hiểu",
        note: "Thường được sử dụng để mô tả một ý tưởng, lời giải thích, hoặc lập luận mà dễ dàng được hiểu và chấp nhận.",
        example:
          "Science classes are packed with 'aha' moments when complex things suddenly make sense.",
        exampleTranslation:
          "Các buổi học khoa học đầy những khoảnh khắc 'à ra vậy' khi những thứ phức tạp đột nhiên trở nên có lý.",
      },
      {
        id: 304,
        word: "Brings the textbooks to life",
        pronunciation: "/brɪŋz ðə ˈtɛkstbʊks tə laɪf/",
        meaning: "làm cho sách giáo khoa trở nên sinh động",
        note: "Được dùng để miêu tả việc giáo viên hay phương pháp giảng dạy biến nội dung sách giáo khoa từ những thông tin khô khan trở nên hấp dẫn và dễ hiểu, thường qua các ví dụ thực tế hoặc hoạt động tương tác.",
        example: "Doing experiments really brings the textbooks to life!",
        exampleTranslation:
          "Làm thí nghiệm thực sự làm cho sách giáo khoa trở nên sinh động!",
      },
      {
        id: 305,
        word: "Challenging",
        pronunciation: "/ˈtʃælɪndʒɪŋ/",
        meaning: "thách thức, đòi hỏi sự cố gắng",
        note: "Thường được dùng để mô tả một nhiệm vụ hay tình huống đòi hỏi sự cố gắng, sáng tạo, và quyết tâm cao để đạt được thành công.",
        example:
          "I find science classes a bit challenging, especially when it comes to memorizing all those formulas.",
        exampleTranslation:
          "Tôi thấy các lớp khoa học hơi thách thức, đặc biệt khi phải ghi nhớ tất cả những công thức đó.",
      },
      {
        id: 306,
        word: "Formulas",
        pronunciation: "/ˈfɔːr.mjʊ.lə/",
        meaning: "công thức (toán học, hóa học)",
        note: "Trong toán học hoặc hóa học, 'formulas' được dùng để chỉ những biểu thức chuẩn mực dùng để giải quyết vấn đề cụ thể. Có thể áp dụng trong nhiều tình huống khác nhau với những điều chỉnh phù hợp.",
        example:
          "I find physics challenging especially when it comes to memorizing all those formulas.",
        exampleTranslation:
          "Tôi thấy vật lý khó, đặc biệt khi phải ghi nhớ tất cả các công thức đó.",
      },
      {
        id: 307,
        word: "Tiny cells",
        pronunciation: "/ˈtaɪ.ni sɛlz/",
        meaning: "tế bào nhỏ",
        note: "Trong sinh học, 'cells' là các đơn vị cơ bản nhất của sự sống. Thuật ngữ 'tiny' nhấn mạnh kích thước nhỏ bé của chúng, thường không thể nhìn thấy bằng mắt thường mà cần dùng kính hiển vi.",
        example:
          "I'm really into understanding how living things work, from tiny cells to complex ecosystems.",
        exampleTranslation:
          "Tôi thực sự thích tìm hiểu cách các sinh vật sống hoạt động, từ tế bào nhỏ đến hệ sinh thái phức tạp.",
      },
      {
        id: 308,
        word: "Complex ecosystems",
        pronunciation: "/kəmˈplɛks ˈiː.koʊˌsɪs.təmz/",
        meaning: "hệ sinh thái phức tạp",
        note: "Được dùng để mô tả sự tương tác giữa các sinh vật sống và môi trường vật lý xung quanh chúng, trong đó các thành phần đều phụ thuộc lẫn nhau. 'Complex' chỉ sự phức tạp của mối quan hệ.",
        example:
          "Biology is like exploring a whole new world, from tiny cells to complex ecosystems.",
        exampleTranslation:
          "Sinh học giống như khám phá một thế giới hoàn toàn mới, từ tế bào nhỏ đến hệ sinh thái phức tạp.",
      },
      {
        id: 309,
        word: "I've never been particularly drawn to",
        pronunciation: "/aɪv ˈnɛvər bɪn pərˈtɪk.jə.lər.li drɔːn tuː/",
        meaning: "tôi chưa bao giờ thực sự hứng thú với",
        note: "Câu này bày tỏ sự thiếu hứng thú hoặc không có sự thu hút đặc biệt đối với điều gì đó. Thường dùng để mô tả cá nhân cảm thấy thờ ơ hoặc không quan tâm mạnh mẽ tới một sở thích hoặc hoạt động nào đó.",
        example:
          "I've never been particularly drawn to any one science subject, to be honest.",
        exampleTranslation:
          "Thành thật mà nói, tôi chưa bao giờ thực sự hứng thú với bất kỳ môn khoa học nào.",
      },
      {
        id: 310,
        word: "Accessible",
        pronunciation: "/ækˈses.ə.bəl/",
        meaning: "dễ tiếp cận, dễ hiểu với mọi người",
        note: "Được sử dụng để mô tả một nơi, thông tin, hoặc nguồn tài nguyên có thể dễ dàng truy cập hoặc sử dụng bởi mọi người.",
        example:
          "Shows like 'Cosmos' really open up the universe to me, making complex topics super accessible and fun.",
        exampleTranslation:
          "Những chương trình như 'Cosmos' thực sự mở ra vũ trụ cho tôi, làm cho các chủ đề phức tạp rất dễ tiếp cận và thú vị.",
      },
      {
        id: 311,
        word: "A window into the mysteries of",
        pronunciation: "/ə ˈwɪn.doʊ ˈɪn.tuː ðə ˈmɪs.tər.iz əv/",
        meaning: "cái nhìn sâu vào những điều bí ẩn của",
        note: "Thường được dùng để miêu tả một phương pháp hoặc cách thức mà qua đó có thể hiểu được các khía cạnh phức tạp hoặc không rõ ràng của một vấn đề hoặc lĩnh vực nghiên cứu.",
        example:
          "Science programs are like a window into the mysteries of space and nature.",
        exampleTranslation:
          "Các chương trình khoa học giống như cái nhìn sâu vào những điều bí ẩn của không gian và tự nhiên.",
      },
      {
        id: 312,
        word: "A comedy series",
        pronunciation: "/ə ˈkɒm.ə.di ˈsɪə.riːz/",
        meaning: "một loạt phim hài",
        note: "Loại hình giải trí này bao gồm nhiều tập, mỗi tập đều nhằm mục đích tạo tiếng cười và giải trí cho khán giả. Các tình huống hài hước và mâu thuẫn giữa các nhân vật là trọng tâm chính.",
        example:
          "I usually prefer something lighter like a comedy series rather than heavy science shows.",
        exampleTranslation:
          "Tôi thường thích xem thứ gì đó nhẹ nhàng hơn như một loạt phim hài thay vì những chương trình khoa học nặng nề.",
      },
      {
        id: 313,
        word: "After a long day",
        pronunciation: "/ˈɑːf.tər ə lɒŋ deɪ/",
        meaning: "sau một ngày dài mệt mỏi",
        note: "Thường được dùng để bày tỏ sự giải tỏa hoặc thư giãn sau khi trải qua nhiều giờ làm việc hoặc hoạt động nặng nhọc.",
        example: "Science shows can be a bit heavy for me after a long day.",
        exampleTranslation:
          "Các chương trình khoa học có thể hơi nặng nề với tôi sau một ngày dài.",
      },
      {
        id: 314,
        word: "A nice day out",
        pronunciation: "/ə naɪs deɪ aʊt/",
        meaning: "một ngày vui chơi ngoài trời",
        note: "Cụm từ này thường được sử dụng khi nói về việc dành thời gian ngoài trời cho các hoạt động giải trí. Nó nhấn mạnh đến việc trải nghiệm thời gian chất lượng, thư giãn hoặc vui vẻ.",
        example:
          "Science museums are great for learning and fun at the same time – a nice day out for everyone.",
        exampleTranslation:
          "Bảo tàng khoa học tuyệt vời cho việc học và vui chơi cùng một lúc – một ngày vui chơi ngoài trời cho mọi người.",
      },
      {
        id: 315,
        word: "Amusement parks",
        pronunciation: "/əˈmjuːz.mənt pɑːrks/",
        meaning: "công viên giải trí",
        note: "Là nơi giải trí được thiết kế để cung cấp sự vui vẻ và hấp dẫn cho mọi lứa tuổi, bao gồm các trò chơi, tàu lượn siêu tốc và các hình thức giải trí khác.",
        example:
          "Science museums aren't very popular compared to shopping malls or amusement parks.",
        exampleTranslation:
          "Bảo tàng khoa học không phổ biến lắm so với trung tâm thương mại hay công viên giải trí.",
      },
      {
        id: 316,
        word: "More active entertainment options",
        pronunciation: "/mɔːr ˈæk.tɪv ˌɛn.təˈteɪn.mənt ˈɒp.ʃənz/",
        meaning: "các lựa chọn giải trí năng động hơn",
        note: "Ám chỉ những hoạt động giải trí mà yêu cầu sự tham gia tích cực về thể chất, như leo núi, chèo thuyền kayak, hoặc chơi các môn thể thao.",
        example:
          "People here tend to prefer more active entertainment options over visiting museums.",
        exampleTranslation:
          "Mọi người ở đây có xu hướng thích các lựa chọn giải trí năng động hơn hơn là tham quan bảo tàng.",
      },
    ],
  },

  // ==========================================
  // P1.22 - Public Transport
  // ==========================================
  {
    id: "sp_s5_p22_publictransport",
    skill: "Speaking",
    volume: "9",
    topic: "Public Transport",
    part: "P1.22",
    cards: [
      {
        id: 317,
        word: "Hassle",
        pronunciation: "/ˈhæs.əl/",
        meaning: "phiền toái, rắc rối không mong muốn",
        note: "Thường được sử dụng để mô tả một tình huống hoặc nhiệm vụ gây ra sự bực bội hoặc khó chịu. Nó có thể liên quan đến nhiều nỗ lực không cần thiết hoặc rắc rối không mong muốn.",
        example:
          "Public transport helps me avoid the hassle of finding parking downtown.",
        exampleTranslation:
          "Phương tiện công cộng giúp tôi tránh phiền toái khi phải tìm chỗ đỗ xe ở trung tâm.",
      },
      {
        id: 318,
        word: "Save on gas",
        pronunciation: "/seɪv ɒn ɡæs/",
        meaning: "tiết kiệm xăng, giảm chi phí xăng",
        note: "Được dùng khi nói về việc giảm thiểu lượng xăng dùng trong xe hơi hoặc các phương tiện khác. Điều này không chỉ giúp giảm chi phí cá nhân mà còn có lợi cho môi trường.",
        example:
          "Using public transport is a great way to save on gas and do a bit for the environment.",
        exampleTranslation:
          "Sử dụng phương tiện công cộng là cách tuyệt vời để tiết kiệm xăng và đóng góp một chút cho môi trường.",
      },
      {
        id: 319,
        word: "Flexible",
        pronunciation: "/ˈflek.sɪ.bəl/",
        meaning: "linh hoạt, dễ thích ứng",
        note: "Mô tả khả năng thích ứng hoặc điều chỉnh dễ dàng theo yêu cầu hoặc điều kiện thay đổi. Có thể áp dụng cho tình huống như thời gian làm việc, kế hoạch.",
        example:
          "I prefer driving because it's more flexible with my schedule.",
        exampleTranslation:
          "Tôi thích lái xe vì nó linh hoạt hơn với lịch trình của tôi.",
      },
      {
        id: 320,
        word: "Crowded",
        pronunciation: "/ˈkraʊ.dɪd/",
        meaning: "đông đúc, chật chội",
        note: "Được sử dụng để mô tả một không gian có quá nhiều người hoặc vật, khiến cho việc di chuyển trở nên khó khăn và có thể cảm thấy chật chội.",
        example:
          "I find it more comfortable to drive than to be on a crowded bus or train.",
        exampleTranslation:
          "Tôi thấy lái xe thoải mái hơn là đi trên xe buýt hay tàu đông đúc.",
      },
      {
        id: 321,
        word: "All the time",
        pronunciation: "/ɔːl ðə taɪm/",
        meaning: "luôn luôn, suốt, liên tục",
        note: "Được sử dụng để mô tả một hành động hoặc sự kiện xảy ra một cách thường xuyên hoặc liên tục, không có nghỉ ngơi hoặc gián đoạn.",
        example:
          "I used public transport all the time as a child – my school was quite far from home.",
        exampleTranslation:
          "Tôi đi phương tiện công cộng suốt khi còn nhỏ – trường học khá xa nhà.",
      },
      {
        id: 322,
        word: "Took the bus",
        pronunciation: "/tʊk ðə bʌs/",
        meaning: "đi xe buýt (quá khứ)",
        note: "Cụm từ này chỉ việc sử dụng phương tiện giao thông công cộng là xe buýt để đi từ nơi này đến nơi khác. Đây là một lựa chọn vận chuyển phổ biến trong các thành phố.",
        example:
          "My school was quite far from home, so I took the bus every day.",
        exampleTranslation:
          "Trường học khá xa nhà nên tôi đi xe buýt mỗi ngày.",
      },
      {
        id: 323,
        word: "Drove me to school",
        pronunciation: "/droʊv miː tə skuːl/",
        meaning: "lái xe đưa tôi đến trường",
        note: "Cụm từ này mô tả hành động của một người lái xe và đưa người nói đến trường, thường là trong bối cảnh gia đình hoặc bạn bè.",
        example:
          "My parents usually drove me to school and other activities when I was a child.",
        exampleTranslation:
          "Bố mẹ thường lái xe đưa tôi đến trường và các hoạt động khác khi tôi còn nhỏ.",
      },
      {
        id: 324,
        word: "Well-developed",
        pronunciation: "/ˈwel dɪˈvel.əpt/",
        meaning: "phát triển tốt, hoàn thiện",
        note: "Thường được dùng để miêu tả một cá nhân, một ý tưởng, hoặc một hệ thống đã đạt đến một trình độ phát triển cao hoặc phức tạp. Nó thể hiện sự trưởng thành hoặc sự hoàn thiện trong nhiều khía cạnh.",
        example:
          "Most people prefer using their own cars because our public transport system isn't very well-developed.",
        exampleTranslation:
          "Hầu hết mọi người thích dùng xe riêng vì hệ thống giao thông công cộng của chúng tôi chưa phát triển tốt lắm.",
      },
      {
        id: 325,
        word: "Rely on",
        pronunciation: "/rɪˈlaɪ ɒn/",
        meaning: "phụ thuộc vào, dựa vào",
        note: "Thường được dùng để mô tả một sự phụ thuộc vào người khác hoặc một thứ gì đó để thực hiện công việc hoặc để đạt được kết quả mong muốn.",
        example:
          "A lot of people in my country rely on public transport, especially during rush hour.",
        exampleTranslation:
          "Nhiều người ở đất nước tôi phụ thuộc vào phương tiện giao thông công cộng, đặc biệt trong giờ cao điểm.",
      },
      {
        id: 326,
        word: "A lifesaver",
        pronunciation: "/ˈlaɪfˌseɪ.vər/",
        meaning: "cứu cánh, thứ giúp ích rất nhiều trong lúc khó khăn",
        note: "Dùng để mô tả một người hoặc một thứ gì đó cung cấp sự hỗ trợ quan trọng trong lúc khó khăn hoặc nguy cấp.",
        example:
          "Buses and trains are a lifesaver especially during rush hour when parking is a nightmare.",
        exampleTranslation:
          "Xe buýt và tàu là cứu cánh đặc biệt trong giờ cao điểm khi việc đỗ xe là cơn ác mộng.",
      },
      {
        id: 327,
        word: "More frequent services",
        pronunciation: "/mɔːr ˈfriː.kwənt ˈsɜː.vɪsɪz/",
        meaning: "các dịch vụ thường xuyên hơn, tần suất cao hơn",
        note: "Cụm từ này đề cập đến việc gia tăng tần suất hoạt động của các dịch vụ giao thông công cộng, như xe buýt, tàu điện, để giảm thời gian chờ đợi và phục vụ tốt hơn nhu cầu di chuyển.",
        example:
          "Public transport is getting better each year, with new routes and more frequent services.",
        exampleTranslation:
          "Giao thông công cộng ngày càng tốt hơn mỗi năm, với các tuyến đường mới và dịch vụ thường xuyên hơn.",
      },
      {
        id: 328,
        word: "Reduce my carbon footprint",
        pronunciation: "/rɪˈdjuːs maɪ ˈkɑː.bən ˈfʊt.prɪnt/",
        meaning: "giảm lượng khí thải carbon của tôi",
        note: "Cụm từ này mô tả việc giảm thiểu tác động tiêu cực đến môi trường bằng cách giảm lượng khí thải carbon do hoạt động cá nhân gây ra, chẳng hạn như đi lại, sử dụng điện, hoặc tiêu thụ thực phẩm.",
        example:
          "Using public transport more is a good way to reduce my carbon footprint.",
        exampleTranslation:
          "Sử dụng phương tiện công cộng nhiều hơn là cách tốt để giảm lượng khí thải carbon của tôi.",
      },
      {
        id: 329,
        word: "Switch",
        pronunciation: "/swɪtʃ/",
        meaning: "chuyển đổi, thay đổi sang thứ khác",
        note: "Được sử dụng khi muốn mô tả việc thay đổi hoặc chuyển đổi từ một lựa chọn, hành động hoặc sản phẩm này sang một lựa chọn khác. Ví dụ: 'switch jobs' (chuyển việc), 'switch channels' (chuyển kênh).",
        example:
          "I enjoy the comfort of my own car too much to switch unless there's a significant improvement in service.",
        exampleTranslation:
          "Tôi thích sự thoải mái của xe riêng quá nhiều để chuyển đổi trừ khi có sự cải thiện đáng kể về dịch vụ.",
      },
      {
        id: 330,
        word: "Significant improvement",
        pronunciation: "/sɪɡˈnɪf.ɪ.kənt ɪmˈpruːv.mənt/",
        meaning: "sự cải thiện đáng kể",
        note: "Thường dùng để chỉ một sự thay đổi tích cực hoặc tiến bộ lớn trong một vấn đề hoặc tình huống. Nó nhấn mạnh sự khác biệt rõ ràng và quan trọng trước và sau sự cải thiện.",
        example:
          "I won't switch to public transport unless there's a significant improvement in service.",
        exampleTranslation:
          "Tôi sẽ không chuyển sang phương tiện công cộng trừ khi có sự cải thiện đáng kể về dịch vụ.",
      },
    ],
  },

  // ==========================================
  // Writing - Task 1: Recycled Paper Process
  // ==========================================
  {
    id: "wr_task1_recycled_paper",
    skill: "Writing",
    volume: "9",
    topic: "Process / Environment",
    part: "Task 1 - Recycled Paper",
    cards: [
      {
        id: 1,
        word: "Mechanical process",
        pronunciation: "/məˈkænɪkəl ˈprɒsɛs/",
        meaning: "Quá trình cơ khí, liên quan tới máy móc",
        note: "Dùng để mô tả một quy trình được vận hành hoặc điều khiển bởi máy móc hoặc cơ chế vật lý. Thường dùng trong Task 1 dạng Process để giới thiệu tổng quan.",
        example:
          "The production of paper is a mechanical process in many modern factories.",
        exampleTranslation:
          "Việc sản xuất giấy là một quá trình cơ khí ở nhiều nhà máy hiện đại.",
      },
      {
        id: 2,
        word: "Placed onto",
        pronunciation: "/pleɪst ˈɒntə/",
        meaning: "Được đặt lên",
        note: "Cụm động từ thể bị động, dùng để mô tả hành động đặt vật lên trên một bề mặt. Phổ biến trong Task 1 dạng Process khi mô tả từng bước của quy trình.",
        example: "The ingredients were carefully placed onto the baking tray.",
        exampleTranslation: "Các nguyên liệu được cẩn thận đặt lên khay nướng.",
      },
      {
        id: 3,
        word: "Slurry",
        pronunciation: "/ˈslʌri/",
        meaning: "Hỗn hợp lỏng (dạng bùn nhão)",
        note: "Danh từ chỉ hỗn hợp bán lỏng, thường là các hạt mịn lơ lửng trong nước. Đây là từ chuyên ngành thường xuất hiện trong các bài viết về quy trình sản xuất công nghiệp hoặc xây dựng.",
        example:
          "The slurry was used in the construction site to lay the foundation.",
        exampleTranslation:
          "Hỗn hợp lỏng được sử dụng trong công trường xây dựng để đặt nền móng.",
      },
      {
        id: 4,
        word: "Sieved",
        pronunciation: "/sɪvd/",
        meaning: "Được rây, được sàng lọc",
        note: "Động từ thể bị động, mô tả quá trình lọc vật liệu qua rây để loại bỏ các hạt lớn hoặc tạp chất. Dùng trong mô tả quy trình sản xuất hoặc chế biến thực phẩm.",
        example:
          "The flour was sieved to ensure its fineness before being used for baking.",
        exampleTranslation:
          "Bột được rây để đảm bảo độ mịn trước khi sử dụng để nướng bánh.",
      },
      {
        id: 5,
        word: "Homogeneous",
        pronunciation: "/ˌhɒməˈdʒiːniəs/",
        meaning: "Đồng nhất, có cùng bản chất hoặc cấu trúc",
        note: "Tính từ mô tả sự đồng đều về thành phần hoặc cấu trúc. Thường dùng trong các bài viết khoa học hoặc mô tả kết quả của một quá trình xử lý. Cặp từ đối nghĩa: heterogeneous (không đồng nhất).",
        example: "The solution was stirred until it became homogeneous.",
        exampleTranslation:
          "Dung dịch được khuấy cho đến khi trở nên đồng nhất.",
      },
      {
        id: 6,
        word: "Impurities",
        pronunciation: "/ɪmˈpjʊərɪtiz/",
        meaning: "Tạp chất",
        note: "Danh từ số nhiều chỉ các chất không mong muốn hoặc làm bẩn một hỗn hợp. Thường xuất hiện trong bài viết về quy trình lọc, làm sạch hoặc xử lý vật liệu.",
        example:
          "The water was treated to remove any impurities before consumption.",
        exampleTranslation:
          "Nước đã được xử lý để loại bỏ bất kỳ tạp chất nào trước khi sử dụng.",
      },
      {
        id: 7,
        word: "Laid out on",
        pronunciation: "/leɪd aʊt ɒn/",
        meaning: "Được trải ra trên",
        note: "Cụm động từ thể bị động, mô tả hành động sắp xếp hoặc trải đều vật liệu lên một bề mặt. Phổ biến trong Task 1 dạng Process khi mô tả giai đoạn cuối của quy trình sản xuất.",
        example: "The documents were neatly laid out on the table for review.",
        exampleTranslation:
          "Các tài liệu được trải gọn gàng ra trên bàn để xem xét.",
      },
      {
        id: 8,
        word: "Ready for distribution and use",
        pronunciation: "/ˈrɛdi fə ˌdɪstrɪˈbjuːʃən ænd juːz/",
        meaning: "Sẵn sàng cho việc phân phối và sử dụng",
        note: "Cụm từ kết thúc bài Task 1 dạng Process, dùng để chỉ trạng thái hoàn thiện của sản phẩm cuối cùng. Đây là cách diễn đạt tự nhiên và học thuật để kết thúc mô tả một quy trình.",
        example:
          "The vaccines were ready for distribution and use in the affected regions.",
        exampleTranslation:
          "Vắc xin đã sẵn sàng cho việc phân phối và sử dụng ở các khu vực bị ảnh hưởng.",
      },
    ],
  },

  // ==========================================
  // Writing - Task 2: Famous People as Role Models (Sample 1 - Positive)
  // ==========================================
  {
    id: "wr_task2_role_models_positive",
    skill: "Writing",
    volume: "9",
    topic: "Society / Celebrity",
    part: "Task 2 - Role Models (Positive View)",
    cards: [
      {
        id: 9,
        word: "Inspirational figures",
        pronunciation: "/ɪnˌspɪərəˈʃənl ˈfɪɡəz/",
        meaning: "Những hình tượng truyền cảm hứng",
        note: "Danh từ ghép dùng để chỉ những cá nhân truyền cảm hứng hoặc thúc đẩy người khác thông qua hành động hoặc thành tựu của họ. Thường xuất hiện trong bài Task 2 về người nổi tiếng, thần tượng, hay hình mẫu lý tưởng.",
        example:
          "Historical leaders like Mahatma Gandhi are often seen as inspirational figures due to their impactful life stories.",
        exampleTranslation:
          "Các nhà lãnh đạo lịch sử như Mahatma Gandhi thường được coi là những nhân vật truyền cảm hứng nhờ những câu chuyện về cuộc đời đầy sức ảnh hưởng của họ.",
      },
      {
        id: 10,
        word: "Catalyst for positive growth",
        pronunciation: "/ˈkætəlɪst fə ˈpɒzɪtɪv ɡrəʊθ/",
        meaning: "Chất xúc tác cho sự phát triển tích cực",
        note: "Cụm danh từ ẩn dụ mạnh, dùng 'catalyst' theo nghĩa bóng để chỉ yếu tố kích thích sự thay đổi hoặc phát triển. Rất ấn tượng trong câu thesis statement của phần mở bài Task 2.",
        example:
          "Technological innovation has been a catalyst for positive growth in many industries.",
        exampleTranslation:
          "Sự đổi mới của công nghệ đã là chất xúc tác cho sự phát triển tích cực trong nhiều ngành công nghiệp.",
      },
      {
        id: 11,
        word: "Hard work and perseverance",
        pronunciation: "/hɑːd wɜːk ænd ˌpɜːsɪˈvɪərəns/",
        meaning: "Sự chăm chỉ và kiên trì",
        note: "Cụm danh từ phổ biến trong các bài viết về thành công, hình mẫu, hoặc phát triển cá nhân. Thường đi kèm với các động từ như 'exemplify', 'demonstrate', 'require'.",
        example:
          "Their achievements, often the result of hard work and perseverance, provide tangible examples for young individuals to emulate.",
        exampleTranslation:
          "Những thành tựu của họ, thường là kết quả của sự chăm chỉ và kiên trì, cung cấp những ví dụ hữu hình cho những người trẻ noi theo.",
      },
      {
        id: 12,
        word: "Dedication and resilience",
        pronunciation: "/ˌdɛdɪˈkeɪʃən ænd rɪˈzɪliəns/",
        meaning: "Sự tận tụy và kiên cường",
        note: "Cặp danh từ thể hiện hai phẩm chất quan trọng của người thành công. 'Dedication' nghĩa là cam kết, tận tâm; 'resilience' nghĩa là khả năng vượt qua khó khăn, bật dậy sau thất bại. Thường dùng để mô tả người nổi tiếng là hình mẫu.",
        example:
          "Her dedication and resilience were key factors in her successful career.",
        exampleTranslation:
          "Sự tận tụy và kiên cường của cô ấy là những yếu tố then chốt trong sự nghiệp thành công của cô.",
      },
      {
        id: 13,
        word: "A strong work ethic",
        pronunciation: "/ə strɒŋ wɜːk ˈɛθɪk/",
        meaning: "Đạo đức làm việc tốt, tinh thần làm việc chăm chỉ",
        note: "Cụm danh từ chỉ hệ thống các nguyên tắc đạo đức tập trung vào tầm quan trọng của sự chăm chỉ và cần cù. Rất phổ biến trong các bài viết về nghề nghiệp, thành công, hoặc phẩm chất cá nhân.",
        example:
          "Employees with a strong work ethic are highly valued in any organization.",
        exampleTranslation:
          "Những nhân viên có đạo đức làm việc tốt sẽ được đánh giá cao ở bất kỳ tổ chức nào.",
      },
      {
        id: 14,
        word: "Ignite a passion for excellence",
        pronunciation: "/ɪɡˈnaɪt ə ˈpæʃən fər ˈɛksələns/",
        meaning: "Khơi dậy niềm đam mê với sự xuất sắc",
        note: "Cụm động từ ẩn dụ mạnh, dùng 'ignite' (thắp lên) theo nghĩa bóng. Phù hợp trong phần thân bài Task 2 khi lập luận về tác động tích cực của người nổi tiếng lên thế hệ trẻ.",
        example:
          "The influence of such role models can ignite a passion for excellence and a strong work ethic among the youth.",
        exampleTranslation:
          "Sự ảnh hưởng của những hình mẫu như vậy có thể khơi dậy niềm đam mê với sự xuất sắc và tinh thần làm việc chăm chỉ trong giới trẻ.",
      },
      {
        id: 15,
        word: "Social and cultural awareness",
        pronunciation: "/ˈsəʊʃəl ænd ˈkʌltʃərəl əˈweənəs/",
        meaning: "Nhận thức về xã hội và văn hóa",
        note: "Cụm danh từ chỉ sự hiểu biết hoặc ý thức về các vấn đề xã hội và văn hóa. Thường xuất hiện trong các bài Task 2 về người nổi tiếng, giáo dục, hoặc toàn cầu hóa.",
        example:
          "Traveling abroad often enhances a person's social and cultural awareness.",
        exampleTranslation:
          "Du lịch nước ngoài thường tăng cường nhận thức xã hội và văn hóa của một người.",
      },
      {
        id: 16,
        word: "Environmental conservation efforts",
        pronunciation: "/ɪnˌvaɪrənˈmɛntl ˌkɒnsəˈveɪʃən ˈɛfəts/",
        meaning: "Những nỗ lực bảo tồn môi trường",
        note: "Cụm danh từ chỉ các hành động nhằm bảo vệ môi trường tự nhiên khỏi tổn hại. Phổ biến trong các bài Task 2 về môi trường, người nổi tiếng hoạt động xã hội, hoặc trách nhiệm cộng đồng.",
        example:
          "The community's environmental conservation efforts helped to restore the local park.",
        exampleTranslation:
          "Những nỗ lực bảo tồn môi trường của cộng đồng đã giúp phục hồi công viên địa phương.",
      },
      {
        id: 17,
        word: "Famous personalities",
        pronunciation: "/ˈfeɪməs ˌpɜːsəˈnælɪtiz/",
        meaning: "Những cá nhân nổi tiếng và có ảnh hưởng",
        note: "Cụm danh từ dùng thay thế cho 'celebrities' hoặc 'famous people' để tránh lặp từ trong bài viết. Thể hiện vốn từ vựng phong phú - điều được đánh giá cao trong IELTS Writing.",
        example:
          "Famous personalities often use their status to promote charitable causes.",
        exampleTranslation:
          "Những nhân vật nổi tiếng thường sử dụng địa vị của mình để thúc đẩy các hoạt động từ thiện.",
      },
      {
        id: 18,
        word: "Pivotal contribution",
        pronunciation: "/ˈpɪvətl ˌkɒntrɪˈbjuːʃən/",
        meaning: "Đóng góp then chốt, đóng góp mang tính quyết định",
        note: "Cụm danh từ mạnh, 'pivotal' nghĩa là then chốt, có vai trò quyết định. Dùng để nhấn mạnh tầm quan trọng của một đóng góp. Thường xuất hiện trong phần kết luận để tổng kết tác động của người nổi tiếng.",
        example:
          "Her research made a pivotal contribution to the field of renewable energy.",
        exampleTranslation:
          "Nghiên cứu của cô ấy đã đóng góp then chốt vào lĩnh vực năng lượng tái tạo.",
      },
    ],
  },

  // ==========================================
  // Writing - Task 2: Famous People as Role Models (Sample 2 - Negative outweighs)
  // ==========================================
  {
    id: "wr_task2_role_models_negative",
    skill: "Writing",
    volume: "9",
    topic: "Society / Celebrity",
    part: "Task 2 - Role Models (Negative View)",
    cards: [
      {
        id: 19,
        word: "Increasingly revered",
        pronunciation: "/ɪnˈkriːsɪŋli rɪˈvɪəd/",
        meaning: "Ngày càng được tôn kính, ngày càng được kính trọng",
        note: "Cụm trạng từ + động từ bị động. 'Revered' mang nghĩa tôn kính sâu sắc hơn 'respected'. Dùng trong mở bài để mô tả xu hướng ngưỡng mộ người nổi tiếng ngày càng gia tăng.",
        example:
          "The scientist was increasingly revered for her contribution to renewable energy.",
        exampleTranslation:
          "Nhà khoa học này ngày càng được kính trọng vì đóng góp của bà vào năng lượng tái tạo.",
      },
      {
        id: 20,
        word: "Significant influence",
        pronunciation: "/sɪɡˈnɪfɪkənt ˈɪnfluəns/",
        meaning: "Ảnh hưởng đáng kể",
        note: "Cụm danh từ phổ biến và linh hoạt trong Task 2. Có thể dùng 'exert a significant influence on' (tác động ảnh hưởng lớn đến) để thể hiện cấu trúc đa dạng. Đây là cách diễn đạt học thuật hơn 'have a big effect on'.",
        example:
          "The teacher's significant influence on her students helped shape their future.",
        exampleTranslation:
          "Ảnh hưởng đáng kể của giáo viên đối với học sinh của cô ấy đã giúp hình thành tương lai của họ.",
      },
      {
        id: 21,
        word: "Source of inspiration",
        pronunciation: "/sɔːs əv ˌɪnspɪˈreɪʃən/",
        meaning: "Nguồn cảm hứng",
        note: "Cụm danh từ thông dụng và ấn tượng. Có thể dùng trong body paragraph để thừa nhận mặt tích cực trước khi đưa ra lập luận phản bác (concession). Biến thể: 'serve as a source of inspiration for'.",
        example: "Nature is often a source of inspiration for artists.",
        exampleTranslation:
          "Thiên nhiên thường là nguồn cảm hứng cho các nghệ sĩ.",
      },
      {
        id: 22,
        word: "Overcoming adversity",
        pronunciation: "/ˌəʊvəˈkʌmɪŋ ədˈvɜːsɪti/",
        meaning: "Vượt qua nghịch cảnh",
        note: "Cụm danh từ/động từ thể hiện tinh thần kiên cường. 'Adversity' là danh từ trang trọng chỉ hoàn cảnh khó khăn. Thường xuất hiện khi dẫn chứng về người nổi tiếng vượt khó (ví dụ: Malala, Nelson Mandela).",
        example:
          "Figures like Malala Yousafzai exemplify resilience and determination in overcoming adversity.",
        exampleTranslation:
          "Những nhân vật như Malala Yousafzai là ví dụ điển hình về sự kiên cường và quyết tâm vượt qua nghịch cảnh.",
      },
      {
        id: 23,
        word: "Unrealistic standards",
        pronunciation: "/ˌʌnrɪəˈlɪstɪk ˈstændədz/",
        meaning: "Chuẩn mực không thực tế",
        note: "Cụm danh từ quan trọng khi lập luận về tác hại của người nổi tiếng. Thường đi kèm: 'promote/set unrealistic standards of beauty, success, and lifestyle'. Từ đồng nghĩa: unattainable expectations.",
        example:
          "Unrealistic standards in social media can affect self-esteem.",
        exampleTranslation:
          "Những chuẩn mực không thực tế trên mạng xã hội có thể ảnh hưởng đến sự tự tin.",
      },
      {
        id: 24,
        word: "Unattainable lifestyle",
        pronunciation: "/ˌʌnəˈteɪnəbl ˈlaɪfstaɪl/",
        meaning: "Lối sống không thể đạt được, lối sống xa tầm với",
        note: "Tính từ 'unattainable' (không thể đạt được) kết hợp với 'lifestyle' tạo ra cụm từ mạnh trong lập luận phản bác ảnh hưởng tiêu cực của người nổi tiếng. Thường xuất hiện khi đề cập đến Kardashians hoặc các influencer.",
        example:
          "Some celebrities project an unattainable lifestyle that leads young people to unhealthy comparisons.",
        exampleTranslation:
          "Một số người nổi tiếng thể hiện lối sống xa tầm với, dẫn đến những so sánh không lành mạnh ở giới trẻ.",
      },
      {
        id: 25,
        word: "Body image issues",
        pronunciation: "/ˈbɒdi ˈɪmɪdʒ ˈɪʃuːz/",
        meaning: "Vấn đề về hình ảnh cơ thể, mặc cảm ngoại hình",
        note: "Cụm danh từ quan trọng trong các bài về tác động tâm lý của truyền thông và người nổi tiếng. Thể hiện sự am hiểu về các vấn đề xã hội, giúp bài viết có chiều sâu hơn.",
        example:
          "Unrealistic beauty standards promoted by celebrities can lead to body image issues among teenagers.",
        exampleTranslation:
          "Các tiêu chuẩn sắc đẹp không thực tế được người nổi tiếng quảng bá có thể dẫn đến vấn đề về hình ảnh cơ thể ở thanh thiếu niên.",
      },
      {
        id: 26,
        word: "Skewed sense of reality",
        pronunciation: "/skjuːd sɛns əv riˈæləti/",
        meaning: "Nhận thức méo mó về thực tế",
        note: "'Skewed' nghĩa là lệch lạc, bóp méo. Cụm từ này diễn tả sự hiểu biết sai lệch về thực tế do ảnh hưởng của người nổi tiếng hoặc truyền thông. Rất ấn tượng trong bài IELTS Task 2 Band 7+.",
        example:
          "Overexposure to celebrity culture can lead to a skewed sense of reality among the youth.",
        exampleTranslation:
          "Tiếp xúc quá nhiều với văn hóa người nổi tiếng có thể dẫn đến nhận thức méo mó về thực tế ở giới trẻ.",
      },
      {
        id: 27,
        word: "Impressionable young minds",
        pronunciation: "/ɪmˈprɛʃənəbl jʌŋ maɪndz/",
        meaning: "Những tâm hồn trẻ dễ bị ảnh hưởng",
        note: "'Impressionable' là tính từ chỉ người dễ bị tác động bởi môi trường xung quanh, đặc biệt là trẻ em và thanh thiếu niên. Cụm từ này nhấn mạnh sự dễ tổn thương của giới trẻ trước các ảnh hưởng tiêu cực.",
        example:
          "The controversial behavior of some celebrities can set poor examples for impressionable young minds.",
        exampleTranslation:
          "Hành vi gây tranh cãi của một số người nổi tiếng có thể tạo ra những tiền lệ xấu cho những tâm hồn trẻ dễ bị ảnh hưởng.",
      },
      {
        id: 28,
        word: "Substantially outweighed",
        pronunciation: "/səbˈstænʃəli ˌaʊtˈweɪd/",
        meaning: "Nặng hơn hoặc quan trọng hơn đáng kể",
        note: "Cụm từ quan trọng trong bài 'outweigh' essay (dạng bài lợi hại). Thường dùng trong kết luận: 'the benefits are substantially outweighed by the drawbacks'. Đây là cách diễn đạt học thuật, trang trọng hơn 'much more than'.",
        example:
          "The benefits of the policy are substantially outweighed by its negative consequences.",
        exampleTranslation:
          "Lợi ích của chính sách đó bị lu mờ đáng kể bởi những hậu quả tiêu cực của nó.",
      },
      {
        id: 29,
        word: "Detrimental effects",
        pronunciation: "/ˌdɛtrɪˈmɛntl ɪˈfɛkts/",
        meaning: "Tác động có hại, ảnh hưởng tiêu cực",
        note: "Cụm danh từ trang trọng thường dùng thay cho 'negative effects' hoặc 'bad effects'. 'Detrimental' (có hại) mạnh hơn 'negative' và thể hiện trình độ từ vựng cao hơn. Đồng nghĩa: adverse effects, harmful consequences.",
        example: "The detrimental effects of smoking are well-documented.",
        exampleTranslation:
          "Những tác động có hại của việc hút thuốc đã được ghi chép kỹ lưỡng.",
      },
      {
        id: 30,
        word: "Mental and emotional well-being",
        pronunciation: "/ˈmɛntl ænd ɪˈməʊʃənl ˈwɛlˌbiːɪŋ/",
        meaning: "Sức khỏe tinh thần và cảm xúc",
        note: "Cụm danh từ quan trọng trong các bài Task 2 liên quan đến sức khỏe tâm lý, ảnh hưởng của truyền thông, hoặc giáo dục. Phân biệt: 'mental health' (sức khỏe tâm thần - mang tính y tế hơn) và 'well-being' (trạng thái tổng thể tốt).",
        example:
          "Excessive social media use can negatively impact the mental and emotional well-being of teenagers.",
        exampleTranslation:
          "Sử dụng mạng xã hội quá mức có thể ảnh hưởng tiêu cực đến sức khỏe tinh thần và cảm xúc của thanh thiếu niên.",
      },
    ],
  },
  // ==========================================
  // W1 - Task 1: Temporary Migrant Workers (Table)
  // ==========================================
  {
    id: "wr_w1_task1_migrant_workers",
    skill: "Writing",
    volume: "9",
    topic: "Migration / Society",
    part: "Task 1 - Temporary Migrant Workers Table",
    cards: [
      {
        id: 31,
        word: "The largest counts",
        pronunciation: "/ðə ˈlɑːdʒɪst kaʊnts/",
        meaning: "Số lượng lớn nhất trong một nhóm đã được xác định rõ",
        note: "Cụm danh từ dùng 'counts' (số đếm) thay cho 'numbers' hoặc 'figures' để tránh lặp từ trong Task 1 dạng Table. 'By far' thường đi kèm để nhấn mạnh sự chênh lệch lớn: 'the largest counts by far'.",
        example:
          "Among the different species, sparrows had the largest counts in the bird survey.",
        exampleTranslation:
          "Trong số các loài khác nhau, chim sẻ có số lượng lớn nhất trong cuộc khảo sát về chim.",
      },
      {
        id: 32,
        word: "Relative to",
        pronunciation: "/ˈrɛlətɪv tuː/",
        meaning: "So với, tương quan đến cái gì đó",
        note: "Cụm giới từ trang trọng dùng thay cho 'compared to' hoặc 'in comparison with'. Thường xuất hiện trong Task 1 khi so sánh số liệu tương đối (per capita, per 1,000 people) với số liệu tuyệt đối. Ví dụ: 'low relative to the population'.",
        example:
          "The cost of living in the city is high relative to rural areas.",
        exampleTranslation:
          "Chi phí sinh hoạt trong thành phố cao so với khu vực nông thôn.",
      },
      {
        id: 33,
        word: "Similar rises",
        pronunciation: "/ˈsɪmɪlə raɪzɪz/",
        meaning: "Sự tăng trưởng tương tự nhau",
        note: "Cụm danh từ dùng để mô tả xu hướng tăng giống nhau ở nhiều đối tượng. Đây là cách diễn đạt học thuật hơn 'the same increase'. Thường đi với cấu trúc 'similar rises could be seen in...' trong Task 1 dạng Table hoặc Bar chart.",
        example:
          "The two companies experienced similar rises in their stock prices after the announcement.",
        exampleTranslation:
          "Hai công ty đã trải qua sự tăng giá cổ phiếu tương tự sau thông báo.",
      },
      {
        id: 34,
        word: "Significant proportional dependence",
        pronunciation: "/sɪɡˈnɪfɪkənt prəˈpɔːʃənl dɪˈpɛndəns/",
        meaning: "Sự phụ thuộc tỷ lệ đáng kể",
        note: "Cụm danh từ chuyên ngành, rất ấn tượng trong Task 1 khi phân tích số liệu per capita hoặc tỷ lệ phần trăm. 'Proportional' nhấn mạnh sự so sánh theo tỷ lệ chứ không theo số tuyệt đối — thể hiện tư duy phân tích số liệu sâu.",
        example:
          "There is a significant proportional dependence of energy consumption on population size.",
        exampleTranslation:
          "Có một sự phụ thuộc tỷ lệ đáng kể giữa việc tiêu thụ năng lượng vào kích thước dân số.",
      },
      {
        id: 35,
        word: "A close similarity",
        pronunciation: "/ə kləʊs sɪˈmɪlærɪti/",
        meaning: "Sự tương đồng chặt chẽ, mức độ giống nhau cao",
        note: "Cụm danh từ dùng để chỉ ra sự giống nhau đáng kể giữa hai số liệu. Thường đi với cấu trúc bị động: 'a close similarity was observed in...'. Đây là cách diễn đạt trang trọng hơn 'the figures were similar'.",
        example:
          "There is a close similarity between the twins' interests and hobbies.",
        exampleTranslation:
          "Có một sự tương đồng chặt chẽ giữa sở thích và thú vui của hai anh em sinh đôi.",
      },
      {
        id: 36,
        word: "Had climbed to",
        pronunciation: "/hæd klaɪmd tuː/",
        meaning: "Đã tăng lên đến (mức cụ thể)",
        note: "Cụm động từ ở thì quá khứ hoàn thành, dùng 'climb' theo nghĩa bóng để chỉ sự tăng lên. Thể hiện văn phong học thuật hơn 'increased to' hay 'rose to'. Các động từ tương tự: surged to, jumped to, soared to.",
        example:
          "By 2006, the number of workers in the United States had climbed to 678,000.",
        exampleTranslation:
          "Đến năm 2006, số lượng công nhân ở Hoa Kỳ đã tăng lên đến 678.000.",
      },
      {
        id: 37,
        word: "Nearly double that of",
        pronunciation: "/ˈnɪəli ˈdʌbl ðæt əv/",
        meaning: "Gần gấp đôi so với",
        note: "Cụm so sánh quan trọng trong Task 1, dùng để thể hiện tương quan bội số giữa hai số liệu. Tương tự: 'roughly twice as high as', 'approximately double'. Đây là cách diễn đạt tự nhiên và học thuật khi chênh lệch xấp xỉ 2 lần.",
        example:
          "New Zealand's ratio was nearly double that of Australia, standing at 21.1 per 1,000 people.",
        exampleTranslation:
          "Tỷ lệ của New Zealand gần gấp đôi so với Úc, ở mức 21,1 trên 1.000 người.",
      },
      {
        id: 38,
        word: "In that order",
        pronunciation: "/ɪn ðæt ˈɔːdə/",
        meaning: "Theo thứ tự đó, theo thứ tự đã nêu",
        note: "Cụm từ dùng thay thế cho 'respectively' để chỉ các số liệu tương ứng theo thứ tự đã liệt kê. Thường đặt cuối câu sau khi đã nêu nhiều số liệu cho nhiều đối tượng. Ví dụ: 'at 2.3 and 4.4, in that order'.",
        example:
          "The figures for the US and UK were 2.3 and 4.4, in that order.",
        exampleTranslation:
          "Các số liệu của Hoa Kỳ và Vương quốc Anh lần lượt là 2,3 và 4,4, theo thứ tự đó.",
      },
      {
        id: 39,
        word: "The lowest among all nations listed",
        pronunciation: "/ðə ˈləʊɪst əˈmʌŋ ɔːl ˈneɪʃənz ˈlɪstɪd/",
        meaning: "Thấp nhất trong tất cả các quốc gia được liệt kê",
        note: "Cụm so sánh nhất dùng trong Task 1 để xác định vị trí đặc biệt của một số liệu. Từ 'listed' (được liệt kê) thể hiện sự gắn kết với biểu đồ, phù hợp hơn với văn phong Task 1 so với 'the lowest of all'.",
        example:
          "There were only 65,000 temporary migrant workers in New Zealand, the lowest among all nations listed.",
        exampleTranslation:
          "Chỉ có 65.000 lao động nhập cư tạm thời ở New Zealand, thấp nhất trong tất cả các quốc gia được liệt kê.",
      },
    ],
  },

  // ==========================================
  // W1 - Task 2: Animal Extinction (Sample 1 - Disagree)
  // ==========================================
  {
    id: "wr_w1_task2_extinction_disagree",
    skill: "Writing",
    volume: "9",
    topic: "Environment / Animal",
    part: "Task 2 - Animal Extinction (Disagree)",
    cards: [
      {
        id: 40,
        word: "Inevitable process",
        pronunciation: "/ɪnˈɛvɪtəbl ˈprəʊsɛs/",
        meaning: "Quá trình không thể tránh khỏi",
        note: "Cụm danh từ dùng 'inevitable' (tất yếu, không thể tránh khỏi) để mô tả những sự kiện hoặc quy trình xảy ra chắc chắn. Thường xuất hiện trong mở bài để thừa nhận quan điểm đối lập trước khi phản bác. Đồng nghĩa: unavoidable process, inescapable occurrence.",
        example: "Aging is an inevitable process for all living organisms.",
        exampleTranslation:
          "Lão hóa là quá trình không thể tránh khỏi đối với mọi sinh vật.",
      },
      {
        id: 41,
        word: "Ecological health",
        pronunciation: "/ˌiːkəˈlɒdʒɪkəl hɛlθ/",
        meaning: "Sức khỏe sinh thái, trạng thái cân bằng của hệ sinh thái",
        note: "Cụm danh từ chỉ trạng thái khỏe mạnh và cân bằng của một hệ sinh thái. Phổ biến trong các bài Task 2 về môi trường, động vật, hoặc bảo tồn. Cấu trúc hay: 'sustaining ecological health' (duy trì sức khỏe sinh thái).",
        example:
          "Protecting the ecological health of the ocean is essential for marine life.",
        exampleTranslation:
          "Bảo vệ sức khỏe sinh thái của đại dương là điều cần thiết cho sinh vật biển.",
      },
      {
        id: 42,
        word: "A ripple effect",
        pronunciation: "/ə ˈrɪpl ɪˈfɛkt/",
        meaning: "Hiệu ứng lan tỏa, hiệu ứng dây chuyền",
        note: "Cụm danh từ ẩn dụ quan trọng, mô tả tình huống một sự kiện tạo ra các hệ quả lan rộng như sóng gợn trên mặt nước. Cấu trúc hay: 'trigger a ripple effect' (kích hoạt hiệu ứng lan tỏa). Dùng trong nhiều chủ đề: kinh tế, môi trường, xã hội.",
        example:
          "The financial crisis in one country had a ripple effect on the global economy.",
        exampleTranslation:
          "Cuộc khủng hoảng tài chính ở một quốc gia đã tạo ra hiệu ứng lan tỏa đối với nền kinh tế toàn cầu.",
      },
      {
        id: 43,
        word: "Interconnectedness",
        pronunciation: "/ˌɪntəkəˈnɛktɪdnəs/",
        meaning: "Sự liên kết, trạng thái được kết nối với nhau",
        note: "Danh từ trừu tượng (abstract noun) chỉ bản chất kết nối qua lại giữa các yếu tố trong một hệ thống. Rất ấn tượng trong bài về hệ sinh thái, toàn cầu hóa, hoặc kinh tế. Từ dẫn vào hay: 'This interconnectedness underscores...' (Sự liên kết này nhấn mạnh...).",
        example:
          "The pandemic highlighted the interconnectedness of global economies.",
        exampleTranslation:
          "Đại dịch làm nổi bật sự liên kết giữa các nền kinh tế toàn cầu.",
      },
      {
        id: 44,
        word: "Ecological balance and stability",
        pronunciation: "/ˌiːkəˈlɒdʒɪkəl ˈbæləns ænd stəˈbɪlɪti/",
        meaning: "Sự cân bằng và ổn định sinh thái",
        note: "Cụm danh từ kép dùng để chỉ trạng thái lý tưởng của một hệ sinh thái. Hai từ 'balance' và 'stability' bổ sung ý nghĩa cho nhau: cân bằng (tỷ lệ các loài hài hòa) và ổn định (bền vững theo thời gian). Thường xuất hiện ở cuối đoạn thân bài như một 'link sentence'.",
        example:
          "Conservation programs aim to maintain ecological balance and stability in the forest.",
        exampleTranslation:
          "Các chương trình bảo tồn hướng tới duy trì sự cân bằng và ổn định sinh thái trong rừng.",
      },
      {
        id: 45,
        word: "Largely attributable to",
        pronunciation: "/ˈlɑːdʒli əˈtrɪbjʊtəbl tuː/",
        meaning: "Phần lớn là do, chủ yếu được quy cho",
        note: "Cụm từ trang trọng và học thuật dùng để chỉ nguyên nhân chính của một sự kiện. Quan trọng trong bài viết vì giúp thể hiện lập luận nhân-quả một cách tinh tế. Cấu trúc: 'S + is/are largely attributable to + N/V-ing'. Đồng nghĩa: mainly due to, primarily caused by.",
        example:
          "The success of the project is largely attributable to the team's hard work.",
        exampleTranslation:
          "Thành công của dự án phần lớn do sự làm việc chăm chỉ của nhóm.",
      },
      {
        id: 46,
        word: "Dwindling numbers",
        pronunciation: "/ˈdwɪndlɪŋ ˈnʌmbəz/",
        meaning: "Số lượng ngày càng giảm sút",
        note: "'Dwindling' là tính từ/phân từ hiện tại của 'dwindle' (giảm dần, teo nhỏ dần), mạnh hơn 'decreasing' và mang sắc thái lo ngại hơn. Thường dùng khi nói về quần thể sinh vật đang suy giảm. Cặp từ quan trọng: dwindling population, dwindling resources.",
        example:
          "The dwindling numbers of the tiger population in the wild are a cause for concern.",
        exampleTranslation:
          "Số lượng giảm sút của cá thể hổ trong tự nhiên là một nguyên nhân đáng lo ngại.",
      },
      {
        id: 47,
        word: "Human encroachment",
        pronunciation: "/ˈhjuːmən ɪnˈkrəʊtʃmənt/",
        meaning: "Sự xâm lấn của con người (vào khu vực tự nhiên)",
        note: "'Encroachment' (danh từ của 'encroach') nghĩa là xâm phạm từ từ vào không gian của người/vật khác. Từ này mang hàm ý tiêu cực và mô tả chính xác việc con người dần lấn chiếm môi trường tự nhiên. Thường đi với: human encroachment into/on forests/rainforests/habitats.",
        example:
          "Human encroachment into rainforests has threatened numerous species with extinction.",
        exampleTranslation:
          "Sự xâm lấn của con người vào rừng mưa nhiệt đới đã đe dọa nhiều loài động vật.",
      },
      {
        id: 48,
        word: "Human responsibility and intervention",
        pronunciation: "/ˈhjuːmən rɪˌspɒnsɪˈbɪlɪti ænd ˌɪntəˈvɛnʃən/",
        meaning: "Trách nhiệm và sự can thiệp của con người",
        note: "Cụm danh từ kép thường xuất hiện cùng nhau để nhấn mạnh cả nghĩa vụ đạo đức ('responsibility') lẫn hành động thực tế ('intervention'). Đây là cách diễn đạt mạnh mẽ trong bài về môi trường, động vật, hoặc biến đổi khí hậu.",
        example:
          "Human responsibility and intervention are crucial in combating climate change.",
        exampleTranslation:
          "Trách nhiệm và sự can thiệp của con người là rất quan trọng trong việc chống lại biến đổi khí hậu.",
      },
      {
        id: 49,
        word: "Conservation efforts",
        pronunciation: "/ˌkɒnsəˈveɪʃən ˈɛfəts/",
        meaning: "Nỗ lực bảo tồn",
        note: "Cụm danh từ cực kỳ phổ biến trong các bài Task 2 về môi trường. Dùng trong nhiều ngữ cảnh: 'engage in conservation efforts', 'global conservation efforts', 'aligning conservation efforts with sustainable development goals'. Đồng nghĩa: preservation initiatives, wildlife protection measures.",
        example:
          "Global conservation efforts are increasing to save endangered species from extinction.",
        exampleTranslation:
          "Nỗ lực bảo tồn toàn cầu đang gia tăng để cứu các loài có nguy cơ tuyệt chủng.",
      },
    ],
  },

  // ==========================================
  // W1 - Task 2: Animal Extinction (Sample 2 - Partly Agree)
  // ==========================================
  {
    id: "wr_w1_task2_extinction_partly",
    skill: "Writing",
    volume: "9",
    topic: "Environment / Animal",
    part: "Task 2 - Animal Extinction (Partly Agree)",
    cards: [
      {
        id: 50,
        word: "A natural phenomenon",
        pronunciation: "/ə ˈnætʃərəl fɪˈnɒmɪnən/",
        meaning: "Hiện tượng tự nhiên",
        note: "Cụm danh từ trang trọng, 'phenomenon' (số ít) / 'phenomena' (số nhiều) là từ gốc Hy Lạp chỉ sự kiện hoặc sự vật có thể quan sát được. Dùng trong mở bài để xác nhận một sự thật trước khi đưa ra lập luận phức tạp hơn. Đồng nghĩa: a natural occurrence, a natural event.",
        example:
          "Eclipses are considered a natural phenomenon that have fascinated humans for centuries.",
        exampleTranslation:
          "Nhật thực và nguyệt thực được coi là hiện tượng tự nhiên đã làm say mê con người hàng thế kỷ.",
      },
      {
        id: 51,
        word: "Evolutionary processes",
        pronunciation: "/ˌiːvəˈluːʃənəri ˈprəʊsɛsɪz/",
        meaning: "Quá trình tiến hóa",
        note: "Cụm danh từ số nhiều chỉ các chuỗi thay đổi tự nhiên dẫn đến sự xuất hiện của các loài mới. Từ 'evolutionary' (thuộc về tiến hóa) là tính từ quan trọng trong các bài về động vật, khoa học, hoặc lịch sử tự nhiên. Đi kèm với: natural selection (chọn lọc tự nhiên).",
        example:
          "The evolutionary processes have led to the rich diversity of species we see on Earth today.",
        exampleTranslation:
          "Quá trình tiến hóa đã dẫn đến sự đa dạng và phong phú về các loài mà chúng ta thấy trên Trái Đất ngày nay.",
      },
      {
        id: 52,
        word: "Natural cycle of life and extinction",
        pronunciation: "/ˈnætʃərəl ˈsaɪkl əv laɪf ænd ɪkˈstɪŋkʃən/",
        meaning: "Chu kỳ tự nhiên của sự sống và tuyệt chủng",
        note: "Cụm danh từ dài nhưng giàu ý nghĩa, thể hiện quan điểm rằng tuyệt chủng là một phần bình thường trong vòng đời của Trái Đất. Dùng trong bài 'partly agree' để thừa nhận sự tuyệt chủng tự nhiên là hợp lý trước khi lập luận về tuyệt chủng do con người.",
        example:
          "The natural cycle of life and extinction has been a constant part of Earth's history.",
        exampleTranslation:
          "Chu kỳ tự nhiên của sự sống và tuyệt chủng đã là một phần không thể thiếu trong lịch sử Trái Đất.",
      },
      {
        id: 53,
        word: "Prehistoric predators",
        pronunciation: "/ˌpriːhɪˈstɒrɪk ˈprɛdətəz/",
        meaning: "Động vật săn mồi tiền sử",
        note: "'Prehistoric' (tiền sử) chỉ thời kỳ trước khi có lịch sử được ghi chép. 'Predator' (động vật săn mồi) là từ quan trọng trong bài về hệ sinh thái và chuỗi thức ăn. Cụm từ này thường dùng như dẫn chứng lịch sử khi lập luận về tuyệt chủng tự nhiên.",
        example:
          "The extinction of certain prehistoric predators allowed for the flourishing of other species.",
        exampleTranslation:
          "Sự tuyệt chủng của một số động vật săn mồi tiền sử đã tạo điều kiện cho các loài khác phát triển phong phú.",
      },
      {
        id: 54,
        word: "Human-induced factors",
        pronunciation: "/ˈhjuːmən ɪnˈdjuːst ˈfæktəz/",
        meaning: "Các yếu tố do con người gây ra",
        note: "'Human-induced' là tính từ ghép (dấu gạch nối) nghĩa là 'được gây ra bởi con người'. Đây là cụm từ học thuật quan trọng, trang trọng hơn 'caused by humans'. Thường đi kèm: human-induced climate change, human-induced habitat loss.",
        example:
          "Climate change is largely driven by human-induced factors such as fossil fuel combustion and deforestation.",
        exampleTranslation:
          "Biến đổi khí hậu phần lớn được thúc đẩy bởi các yếu tố do con người gây ra như đốt cháy nhiên liệu hóa thạch và phá rừng.",
      },
      {
        id: 55,
        word: "Habitat destruction",
        pronunciation: "/ˈhæbɪtæt dɪˈstrʌkʃən/",
        meaning: "Sự phá hủy môi trường sống",
        note: "Cụm danh từ cực kỳ phổ biến trong bài về môi trường và động vật. 'Habitat' là môi trường sống tự nhiên của một loài. Đây là một trong những nguyên nhân hàng đầu gây tuyệt chủng. Các cụm liên quan: habitat loss (mất môi trường sống), habitat degradation (suy thoái môi trường sống).",
        example:
          "Habitat destruction due to urban expansion is a major threat to wildlife conservation.",
        exampleTranslation:
          "Sự phá hủy môi trường sống do sự mở rộng đô thị là một mối đe dọa lớn đối với bảo tồn động vật hoang dã.",
      },
      {
        id: 56,
        word: "On the brink of extinction",
        pronunciation: "/ɒn ðə brɪŋk əv ɪkˈstɪŋkʃən/",
        meaning: "Trên bờ vực của sự tuyệt chủng",
        note: "'Brink' nghĩa là bờ vực, cạnh của một vực thẳm hoặc điểm nguy hiểm. 'On the brink of' là thành ngữ quen dùng để diễn tả trạng thái sắp xảy ra điều gì đó nguy hiểm. Tương đương: 'on the verge of extinction', 'critically endangered'.",
        example:
          "Many species, such as the Amur leopard, are on the brink of extinction due to human activities.",
        exampleTranslation:
          "Nhiều loài, như báo Amur, đang trên bờ vực tuyệt chủng do hoạt động của con người.",
      },
      {
        id: 57,
        word: "Sustainable development goals",
        pronunciation: "/səˈsteɪnəbl dɪˈvɛləpmənt ɡəʊlz/",
        meaning: "Các mục tiêu phát triển bền vững",
        note: "Cụm danh từ chỉ 17 mục tiêu của Liên Hợp Quốc (SDGs) nhằm đạt được tương lai bền vững và công bằng cho toàn thế giới. Viết tắt là SDGs, thường được viết hoa. Dùng trong nhiều chủ đề Task 2: môi trường, giáo dục, y tế, kinh tế.",
        example:
          "The Sustainable Development Goals include targets for environmental protection, poverty reduction, and education improvement.",
        exampleTranslation:
          "Các Mục tiêu Phát triển Bền vững bao gồm các mục tiêu về bảo vệ môi trường, giảm nghèo và cải thiện giáo dục.",
      },
      {
        id: 58,
        word: "Species loss",
        pronunciation: "/ˈspiːʃiːz lɒs/",
        meaning: "Sự biến mất của các loài, sự mất đi đa dạng sinh học",
        note: "Cụm danh từ ngắn gọn và học thuật dùng thay cho 'extinction of species'. 'Species' vừa là danh từ số ít vừa số nhiều (không thêm 's'). Thường xuất hiện trong kết luận để tóm tắt vấn đề chính. Cụm hay: 'prevent species loss', 'accelerating species loss'.",
        example:
          "Species loss in tropical rainforests is a critical issue, as these ecosystems are home to a large number of unique organisms.",
        exampleTranslation:
          "Sự biến mất của các loài trong các khu rừng mưa nhiệt đới là một vấn đề quan trọng, vì những hệ sinh thái này là nơi sinh sống của một số lượng lớn các sinh vật độc đáo.",
      },
      {
        id: 59,
        word: "An ethical imperative",
        pronunciation: "/ən ˈɛθɪkəl ɪmˈpɛrətɪv/",
        meaning: "Mệnh lệnh đạo đức, nghĩa vụ đạo đức bắt buộc",
        note: "'Imperative' (danh từ/tính từ) nghĩa là điều bắt buộc phải làm, không thể bỏ qua. Kết hợp với 'ethical' tạo thành cụm mạnh mẽ về nghĩa vụ đạo đức. Dùng trong bài khi lập luận về trách nhiệm của con người: 'it becomes an ethical imperative for humans to...'.",
        example:
          "It becomes an ethical imperative for humans to take responsibility and action to prevent species extinctions caused by our own activities.",
        exampleTranslation:
          "Việc con người chịu trách nhiệm và hành động để ngăn chặn sự tuyệt chủng của các loài do chính hoạt động của chúng ta gây ra đã trở thành một mệnh lệnh đạo đức.",
      },
      {
        id: 60,
        word: "Discernment in conservation",
        pronunciation: "/dɪˈsɜːnmənt ɪn ˌkɒnsəˈveɪʃən/",
        meaning:
          "Sự sáng suốt trong bảo tồn, khả năng phân biệt và lựa chọn đúng đắn trong bảo tồn",
        note: "'Discernment' là danh từ trừu tượng chỉ khả năng phán đoán và phân biệt điều đúng sai một cách tinh tế. Đây là từ nâng cao (Band 7.5+), thể hiện tư duy phản biện. Cụm 'the need for discernment in conservation efforts' xuất hiện trong kết luận bài partly agree.",
        example:
          "This balanced approach underlines the need for discernment in conservation efforts.",
        exampleTranslation:
          "Cách tiếp cận cân bằng này nhấn mạnh sự cần thiết của sự sáng suốt trong các nỗ lực bảo tồn.",
      },
    ],
  },
  // ==========================================
  // W3 - Task 1: Employment Rates Bar Chart
  // ==========================================
  {
    id: "wr_w3_task1_employment_rates",
    skill: "Writing",
    volume: "9",
    topic: "Work / Society",
    part: "Task 1 - Employment Rates Bar Chart",
    cards: [
      {
        id: 61,
        word: "Employment rates",
        pronunciation: "/ɪmˈplɔɪmənt reɪts/",
        meaning: "Tỷ lệ người có việc làm so với tổng số lực lượng lao động",
        note: "Cụm danh từ cơ bản nhưng quan trọng trong Task 1 về lao động, kinh tế hoặc nhân khẩu học. Phân biệt: 'employment rate' (tỷ lệ có việc làm) ≠ 'unemployment rate' (tỷ lệ thất nghiệp). Dùng kèm động từ: rise, fall, remain stable, fluctuate.",
        example:
          "The employment rates have increased significantly over the past year.",
        exampleTranslation:
          "Tỷ lệ người có việc làm đã tăng đáng kể trong năm qua.",
      },
      {
        id: 62,
        word: "Demographics",
        pronunciation: "/ˌdɛməˈɡræfɪks/",
        meaning: "Nhân khẩu học, dữ liệu thống kê về các nhóm dân số",
        note: "Danh từ số nhiều chỉ các đặc điểm dân số như tuổi, giới tính, thu nhập. Trong Task 1 dạng biểu đồ so sánh hai nhóm (nam/nữ, độ tuổi...), 'both demographics' là cách diễn đạt học thuật và tự nhiên hơn 'both groups'. Cấu trúc hay: 'leading in both demographics'.",
        example:
          "The marketing campaign was tailored according to the demographics of the region.",
        exampleTranslation:
          "Chiến dịch tiếp thị được điều chỉnh theo nhân khẩu học của khu vực.",
      },
      {
        id: 63,
        word: "Age cohort",
        pronunciation: "/eɪdʒ ˈkəʊhɔːt/",
        meaning:
          "Nhóm tuổi, một nhóm người được xếp vào cùng nhóm dựa trên độ tuổi",
        note: "'Cohort' là từ học thuật dùng thay cho 'group' hoặc 'bracket'. Trang trọng và chính xác hơn 'age group'. Dùng trong Task 1 khi đề cập đến một nhóm tuổi cụ thể: 'this age cohort', 'the 60-64 age cohort'. Từ đồng nghĩa: age group, age bracket.",
        example: "The study focused on the age cohort of 18-25 year olds.",
        exampleTranslation:
          "Nghiên cứu này tập trung vào nhóm tuổi từ 18-25 tuổi.",
      },
      {
        id: 64,
        word: "Prominent",
        pronunciation: "/ˈprɒmɪnənt/",
        meaning: "Nổi bật, đáng chú ý, dễ nhận biết",
        note: "Tính từ dùng thay cho 'significant', 'notable' hoặc 'noticeable' khi mô tả sự thay đổi hoặc xu hướng đặc biệt đáng chú ý. Cụm hay trong Task 1: 'the most prominent decrease/increase' (sự giảm/tăng đáng chú ý nhất). Thể hiện vốn từ vựng phong phú hơn 'the biggest'.",
        example:
          "She is a prominent figure in the field of environmental conservation.",
        exampleTranslation:
          "Cô ấy là một nhân vật nổi bật trong lĩnh vực bảo vệ môi trường.",
      },
      {
        id: 65,
        word: "Stark contrast",
        pronunciation: "/stɑːk ˈkɒntrɑːst/",
        meaning: "Sự tương phản lớn và rõ rệt",
        note: "'Stark' nhấn mạnh mức độ tương phản rất rõ ràng và mạnh mẽ, mạnh hơn 'sharp contrast' hay 'clear difference'. Cấu trúc chuẩn: 'This was in stark contrast to...' — cách mở đầu câu rất ấn tượng trong Task 1 khi so sánh hai xu hướng trái ngược nhau.",
        example:
          "The stark contrast between the rich and the poor in the city is alarming.",
        exampleTranslation:
          "Sự tương phản rõ rệt giữa giàu và nghèo ở thành phố đang ở mức đáng báo động.",
      },
      {
        id: 66,
        word: "Upward trends",
        pronunciation: "/ˈʌpwəd trɛndz/",
        meaning: "Xu hướng tăng",
        note: "Cụm danh từ mô tả chiều hướng tăng của dữ liệu. Đối nghĩa: 'downward trends' (xu hướng giảm). Cấu trúc hay: 'showed upward trends' (cho thấy xu hướng tăng). Tương đương: 'an upward trajectory', 'a rising trend'. Phổ biến trong Task 1 dạng bar chart, line graph.",
        example:
          "The company has been experiencing upward trends in sales for the last three quarters.",
        exampleTranslation:
          "Doanh thu của công ty đã có xu hướng tăng trong ba quý vừa qua.",
      },
      {
        id: 67,
        word: "Closely followed by",
        pronunciation: "/ˈkləʊsli ˈfɒləʊd baɪ/",
        meaning: "Theo sát sau đó là, đứng ngay phía sau là",
        note: "Cụm từ quan trọng trong Task 1 khi liệt kê số liệu theo thứ tự xếp hạng. Dùng sau khi nêu số liệu cao nhất/thấp nhất, rồi dùng 'closely followed by' để giới thiệu số liệu đứng ngay sau. Ví dụ: '85% in Japan, closely followed by 79% in Belgium'.",
        example:
          "Japan had the highest employment rate, closely followed by Belgium at 79%.",
        exampleTranslation:
          "Nhật Bản có tỷ lệ việc làm cao nhất, theo sát là Bỉ với 79%.",
      },
      {
        id: 68,
        word: "Falling negligibly",
        pronunciation: "/ˈfɔːlɪŋ ˈnɛɡlɪdʒɪbli/",
        meaning: "Giảm không đáng kể",
        note: "'Negligibly' (trạng từ) = một cách không đáng kể, gần như không thay đổi. Đây là từ nâng cao, thể hiện trình độ cao hơn 'slightly' hay 'a little'. Dùng khi số liệu thay đổi rất ít. Tương đương: marginally, minimally, insignificantly.",
        example:
          "Belgium's employment rate remained the lowest despite also falling negligibly from 8% to 7%.",
        exampleTranslation:
          "Tỷ lệ việc làm của Bỉ vẫn là thấp nhất mặc dù cũng giảm không đáng kể từ 8% xuống 7%.",
      },
      {
        id: 69,
        word: "The former / the latter",
        pronunciation: "/ðə ˈfɔːmə/ /ðə ˈlætə/",
        meaning:
          "Cái/người đầu tiên (được nhắc đến) / Cái/người thứ hai (được nhắc đến)",
        note: "Cặp đại từ thay thế cực kỳ hữu dụng trong Task 1 để tránh lặp từ khi nhắc lại hai đối tượng vừa đề cập. 'The former' = đối tượng được nhắc đầu tiên; 'the latter' = đối tượng được nhắc sau. Ví dụ: 'the US and Australia... the former rising from 36% to 39% and the latter from 16% to 18%'.",
        example:
          "The US and Australia showed upward trends, with the former rising from 36% to 39% and the latter from 16% to 18%.",
        exampleTranslation:
          "Hoa Kỳ và Úc cho thấy xu hướng tăng, với nước đầu tiên tăng từ 36% lên 39% và nước thứ hai từ 16% lên 18%.",
      },
    ],
  },

  // ==========================================
  // W3 - Task 2: Extraterrestrial Life (Sample 1 - Agree with view 2)
  // ==========================================
  {
    id: "wr_w3_task2_space_disagree",
    skill: "Writing",
    volume: "9",
    topic: "Science / Space / Government",
    part: "Task 2 - Extraterrestrial Life (Prioritize Earth)",
    cards: [
      {
        id: 70,
        word: "Extraterrestrial life",
        pronunciation: "/ˌɛkstrətəˈrɛstriəl laɪf/",
        meaning: "Sự sống ngoài Trái Đất",
        note: "'Extraterrestrial' (tính từ) = ngoài Trái Đất, từ gốc Latin 'extra' (bên ngoài) + 'terra' (đất). Đây là từ chủ đề quan trọng trong bài về khoa học không gian. Viết tắt: ET. Cụm liên quan: the search for extraterrestrial life (tìm kiếm sự sống ngoài Trái Đất).",
        example:
          "Scientists continue to search for signs of extraterrestrial life in the universe.",
        exampleTranslation:
          "Các nhà khoa học tiếp tục tìm kiếm dấu hiệu của sự sống ngoài Trái Đất trong vũ trụ.",
      },
      {
        id: 71,
        word: "Imprudent",
        pronunciation: "/ɪmˈpruːdənt/",
        meaning: "Không thận trọng, hấp tấp, thiếu suy xét",
        note: "Tính từ trang trọng chỉ hành động thiếu cân nhắc về hậu quả. Mạnh hơn và học thuật hơn 'unwise' hay 'foolish'. Đối nghĩa: prudent (thận trọng, khôn ngoan). Dùng trong bài để đánh giá một quyết định chi tiêu hoặc chính sách là không hợp lý.",
        example:
          "It was imprudent of him to invest all his savings in one company.",
        exampleTranslation:
          "Anh ấy thật hấp tấp khi đầu tư toàn bộ tiết kiệm vào một công ty.",
      },
      {
        id: 72,
        word: "Scientific advancement",
        pronunciation: "/ˌsaɪənˈtɪfɪk ədˈvɑːnsmənt/",
        meaning: "Tiến bộ trong lĩnh vực khoa học",
        note: "Cụm danh từ thể hiện sự phát triển và đột phá trong khoa học. 'Advancement' trang trọng hơn 'progress' hay 'development'. Cấu trúc hay: 'unparalleled opportunities for scientific advancement' (cơ hội tiến bộ khoa học vô song). Đồng nghĩa: scientific progress, breakthroughs in science.",
        example:
          "The discovery of the Higgs boson was a major scientific advancement.",
        exampleTranslation:
          "Việc phát hiện ra hạt Higgs là một bước tiến lớn trong khoa học.",
      },
      {
        id: 73,
        word: "Invaluable insight into",
        pronunciation: "/ɪnˈvæljuəbl ˈɪnsaɪt ˈɪntə/",
        meaning: "Hiểu biết vô cùng quý giá và sâu sắc về",
        note: "'Invaluable' = cực kỳ có giá trị (không thể định giá được) — lưu ý: KHÔNG có nghĩa là 'không có giá trị'. Đây là từ dễ nhầm. Cụm 'provide invaluable insight into' là cấu trúc học thuật rất hay. Đồng nghĩa: profound understanding of, deep knowledge about.",
        example:
          "Her research provides invaluable insight into the effects of climate change.",
        exampleTranslation:
          "Nghiên cứu của cô ấy cung cấp hiểu biết quý giá về ảnh hưởng của biến đổi khí hậu.",
      },
      {
        id: 74,
        word: "The long-term survival of humanity",
        pronunciation: "/ðə ˈlɒŋtɜːm səˈvaɪvəl əv hjuːˈmænɪti/",
        meaning: "Sự tồn tại lâu dài của loài người",
        note: "Cụm danh từ mạnh, thường xuất hiện khi lập luận về tầm quan trọng của nghiên cứu không gian, công nghệ, hoặc phát triển bền vững. 'Humanity' (nhân loại) trang trọng hơn 'humans' hay 'people'. Dùng như lý do cuối cùng, có tính chiến lược dài hạn.",
        example:
          "Climate change poses a threat to the long-term survival of humanity.",
        exampleTranslation:
          "Biến đổi khí hậu đặt ra mối đe dọa cho sự tồn tại lâu dài của loài người.",
      },
      {
        id: 75,
        word: "Justifiable",
        pronunciation: "/ˈdʒʌstɪfaɪəbl/",
        meaning: "Có thể biện hộ, có thể chứng minh là đúng hoặc hợp lý",
        note: "Tính từ phái sinh từ 'justify' (biện minh, chứng minh tính hợp lý). Thường xuất hiện trong dạng phủ định 'not justifiable' hoặc 'unjustifiable' khi phản bác một lập luận. Cấu trúc hay: 'allocating funds to X is not justifiable given...'.",
        example:
          "The company's decision to expand was justifiable given the increase in demand.",
        exampleTranslation:
          "Quyết định mở rộng của công ty là hợp lý do nhu cầu ngày càng tăng.",
      },
      {
        id: 76,
        word: "Substantial investment",
        pronunciation: "/səbˈstænʃəl ɪnˈvɛstmənt/",
        meaning: "Khoản đầu tư lớn, đầu tư đáng kể",
        note: "'Substantial' (đáng kể, lớn) là tính từ học thuật quan trọng, trang trọng hơn 'large' hay 'big'. Thường đi với: substantial investment, substantial improvement, substantial amount. Cặp đôi hay: 'require substantial investment' (đòi hỏi đầu tư lớn).",
        example:
          "The government made a substantial investment in renewable energy projects.",
        exampleTranslation:
          "Chính phủ đã đầu tư lớn vào các dự án năng lượng tái tạo.",
      },
      {
        id: 77,
        word: "Ethical and practical implications",
        pronunciation: "/ˈɛθɪkəl ænd ˈpræktɪkəl ˌɪmplɪˈkeɪʃənz/",
        meaning: "Hệ lụy về mặt đạo đức và thực tiễn",
        note: "'Implications' (hệ lụy, tác động tiềm ẩn) là danh từ học thuật quan trọng. 'Ethical implications' liên quan đến đạo đức; 'practical implications' liên quan đến tính khả thi thực tế. Cụm hay: 'pose ethical and practical implications for...' (đặt ra các hệ lụy về đạo đức và thực tiễn cho...).",
        example:
          "The new technology poses ethical and practical implications for privacy.",
        exampleTranslation:
          "Công nghệ mới đặt ra hệ lụy về mặt đạo đức và thực tiễn cho quyền riêng tư.",
      },
      {
        id: 78,
        word: "Earthly challenges",
        pronunciation: "/ˈɜːθli ˈtʃælɪndʒɪz/",
        meaning:
          "Những thách thức trên Trái Đất, các vấn đề hiện hữu của thế giới",
        note: "'Earthly' (thuộc về Trái Đất) tạo sự tương phản rõ ràng với 'space' hay 'extraterrestrial'. Từ này mang tính thơ văn nhẹ, phù hợp khi muốn nhấn mạnh sự đối lập giữa các vấn đề trên mặt đất vs. không gian vũ trụ. Tương đương: terrestrial issues, problems on Earth.",
        example:
          "Tackling climate change is one of the biggest earthly challenges we face.",
        exampleTranslation:
          "Giải quyết biến đổi khí hậu là một trong những thách thức lớn nhất mà chúng ta đang đối mặt trên Trái Đất.",
      },
      {
        id: 79,
        word: "Fascinating endeavor",
        pronunciation: "/ˈfæsɪneɪtɪŋ ɪnˈdɛvə/",
        meaning: "Nỗ lực vô cùng thú vị và cuốn hút",
        note: "'Endeavor' (danh từ/động từ) là từ trang trọng chỉ nỗ lực, công việc đòi hỏi nhiều cố gắng. Trang trọng hơn 'effort' hay 'attempt'. 'Fascinating' nhấn mạnh tính hấp dẫn, kỳ diệu. Cụm này thường dùng trong kết luận khi thừa nhận điểm tích cực của quan điểm đối lập.",
        example: "Exploring the depths of the ocean is a fascinating endeavor.",
        exampleTranslation: "Khám phá đáy đại dương là một việc rất hấp dẫn.",
      },
      {
        id: 80,
        word: "Resource allocation",
        pronunciation: "/rɪˈsɔːs ˌæləˈkeɪʃən/",
        meaning: "Sự phân bổ nguồn lực (tài chính, nhân lực...)",
        note: "Cụm danh từ chuyên ngành quan trọng trong các bài về chính phủ, kinh tế, giáo dục. 'Allocation' = sự phân bổ, phân phối có chủ đích. Cấu trúc hay: 'the balance of resource allocation must favor...' (sự cân bằng trong phân bổ nguồn lực phải ưu tiên...). Đồng nghĩa: distribution of funds, budget allocation.",
        example:
          "Effective resource allocation is crucial for the success of any organization.",
        exampleTranslation:
          "Việc phân bổ nguồn lực hiệu quả là điều quan trọng cho sự thành công của bất kỳ tổ chức nào.",
      },
    ],
  },

  // ==========================================
  // W3 - Task 2: Extraterrestrial Life (Sample 2 - Balanced view)
  // ==========================================
  {
    id: "wr_w3_task2_space_balanced",
    skill: "Writing",
    volume: "9",
    topic: "Science / Space / Government",
    part: "Task 2 - Extraterrestrial Life (Balanced View)",
    cards: [
      {
        id: 81,
        word: "The allocation of state funding",
        pronunciation: "/ðə ˌæləˈkeɪʃən əv steɪt ˈfʌndɪŋ/",
        meaning: "Việc phân bổ ngân sách nhà nước",
        note: "Cụm danh từ trang trọng dùng trong các bài về chính sách công, chi tiêu chính phủ. 'State funding' = nguồn tài chính từ nhà nước. Cụm hay hơn 'government money'. Thường xuất hiện trong bài Discussion/Opinion về ngân sách: 'the allocation of state funding towards X'.",
        example:
          "The allocation of state funding towards healthcare has been increased this year.",
        exampleTranslation:
          "Việc phân bổ quỹ nhà nước cho ngành y tế đã được tăng trong năm nay.",
      },
      {
        id: 82,
        word: "Critical issues",
        pronunciation: "/ˈkrɪtɪkəl ˈɪʃuːz/",
        meaning: "Các vấn đề quan trọng cần được chú ý ngay",
        note: "Cụm danh từ phổ biến trong Task 2, thể hiện tầm quan trọng và tính cấp bách của vấn đề. 'Critical' mạnh hơn 'important' hay 'serious'. Thường đi kèm: 'address critical issues', 'face critical issues', 'the critical issues facing our planet'.",
        example:
          "Climate change and pollution are among the critical issues facing our planet.",
        exampleTranslation:
          "Biến đổi khí hậu và ô nhiễm là những vấn đề quan trọng mà hành tinh của chúng ta đang đối mặt.",
      },
      {
        id: 83,
        word: "Practical applications",
        pronunciation: "/ˈpræktɪkəl ˌæplɪˈkeɪʃənz/",
        meaning: "Các ứng dụng thực tiễn",
        note: "Cụm danh từ quan trọng khi lập luận về lợi ích thực tế của nghiên cứu khoa học. Phân biệt: 'theoretical' (lý thuyết) vs. 'practical' (thực tiễn). Cấu trúc hay: 'innovations with practical applications on Earth' (những đổi mới với ứng dụng thực tiễn trên Trái Đất).",
        example:
          "The practical applications of quantum physics are still being explored.",
        exampleTranslation:
          "Các ứng dụng thực tiễn của vật lý lượng tử vẫn đang được khám phá.",
      },
      {
        id: 84,
        word: "Global communication networks",
        pronunciation: "/ˈɡləʊbəl kəˌmjuːnɪˈkeɪʃən ˈnɛtwɜːks/",
        meaning: "Mạng lưới truyền thông toàn cầu",
        note: "Cụm danh từ ghép ba từ, dùng như dẫn chứng cụ thể về ứng dụng thực tiễn của nghiên cứu không gian (satellite technology → GPS → internet). Thể hiện khả năng dùng ví dụ cụ thể và học thuật trong bài viết.",
        example:
          "The internet is a prime example of global communication networks connecting people worldwide.",
        exampleTranslation:
          "Internet là một ví dụ điển hình của mạng lưới truyền thông toàn cầu kết nối mọi người trên khắp thế giới.",
      },
      {
        id: 85,
        word: "Immediate global challenges",
        pronunciation: "/ɪˈmiːdiət ˈɡləʊbəl ˈtʃælɪndʒɪz/",
        meaning: "Những thách thức toàn cầu cấp bách",
        note: "Cụm danh từ ba từ kết hợp tính cấp thiết ('immediate') và phạm vi toàn cầu ('global'). Dùng khi muốn nhấn mạnh các vấn đề đòi hỏi giải quyết ngay bây giờ, không thể trì hoãn. Thường đi với: 'address', 'tackle', 'confront', 'face'.",
        example:
          "Dealing with the COVID-19 pandemic is one of the immediate global challenges.",
        exampleTranslation:
          "Việc xử lý đại dịch COVID-19 là một trong những thách thức toàn cầu cấp bách.",
      },
      {
        id: 86,
        word: "Immediate and tangible benefits",
        pronunciation: "/ɪˈmiːdiət ænd ˈtændʒɪbl ˈbɛnɪfɪts/",
        meaning: "Lợi ích trực tiếp và hữu hình, thấy được ngay",
        note: "'Tangible' (hữu hình, có thể cảm nhận được) là tính từ quan trọng, đối lập với 'intangible' (vô hình). Cụm 'immediate and tangible benefits' nhấn mạnh lợi ích có thể nhìn thấy và cảm nhận được ngay, không phải lý thuyết xa vời. Rất hiệu quả trong lập luận ủng hộ chi tiêu cho vấn đề Trái Đất.",
        example:
          "Investing in public transportation offers immediate and tangible benefits to urban residents.",
        exampleTranslation:
          "Đầu tư vào giao thông công cộng mang lại lợi ích trực tiếp và rõ ràng cho cư dân đô thị.",
      },
      {
        id: 87,
        word: "Aspirations",
        pronunciation: "/ˌæspɪˈreɪʃənz/",
        meaning: "Khao khát, hoài bão, mục tiêu cao cả",
        note: "Danh từ số nhiều chỉ những mong muốn và tham vọng mạnh mẽ để đạt được điều gì đó lớn lao. Mạnh hơn 'desires' hay 'wishes'. Cấu trúc hay: 'supports the aspirations of space exploration' (ủng hộ những khát vọng của việc khám phá không gian).",
        example:
          "Her aspirations to become a doctor were inspired by her desire to help others.",
        exampleTranslation:
          "Khao khát trở thành bác sĩ của cô ấy được truyền cảm hứng từ mong muốn giúp đỡ người khác.",
      },
      {
        id: 88,
        word: "Venture into new frontiers",
        pronunciation: "/ˈvɛntʃər ˈɪntə njuː ˈfrʌntɪəz/",
        meaning:
          "Dấn thân khám phá các lĩnh vực/vùng đất mới chưa được khám phá",
        note: "'Frontier' (vùng biên giới, ranh giới của sự hiểu biết) thường dùng theo nghĩa ẩn dụ để chỉ lĩnh vực chưa được khám phá. 'Venture into' = dấn thân vào (có phần mạo hiểm). Cụm này có tính văn học cao, phù hợp trong kết luận bài về khoa học hoặc tiến bộ.",
        example:
          "The company's venture into new frontiers of technology is both exciting and challenging.",
        exampleTranslation:
          "Việc công ty dấn thân vào những lĩnh vực công nghệ mới vừa thú vị vừa đầy thách thức.",
      },
      {
        id: 89,
        word: "Space research",
        pronunciation: "/speɪs rɪˈsɜːtʃ/",
        meaning: "Nghiên cứu không gian",
        note: "Cụm danh từ đơn giản nhưng quan trọng như từ chủ đề xuyên suốt bài. Dùng thay thế cho 'space exploration' để tránh lặp. Cấu trúc hay: 'investing in space research is an investment in humanity's future' (đầu tư vào nghiên cứu không gian là đầu tư vào tương lai của nhân loại).",
        example:
          "Space research has led to many discoveries about our solar system.",
        exampleTranslation:
          "Nghiên cứu không gian đã dẫn đến nhiều phát hiện về hệ mặt trời của chúng ta.",
      },
    ],
  },
  // ==========================================
  // W4 - Task 1: UK Fuel Production Line Graph
  // ==========================================
  {
    id: "wr_w4_task1_fuel_production",
    skill: "Writing",
    volume: "9",
    topic: "Energy / Environment",
    part: "Task 1 - UK Fuel Production Line Graph",
    cards: [
      {
        id: 90,
        word: "Remain relatively stable",
        pronunciation: "/rɪˈmeɪn ˈrɛlətɪvli ˈsteɪbl/",
        meaning: "Tiếp tục duy trì sự ổn định và không có nhiều thay đổi",
        note: "Cụm động từ phổ biến và quan trọng trong Task 1 khi mô tả giai đoạn số liệu không tăng không giảm. 'Relatively' nhấn mạnh rằng sự ổn định có thể không hoàn toàn tuyệt đối. Các biến thể: 'remained fairly stable', 'stayed relatively constant', 'levelled off'.",
        example:
          "Despite economic fluctuations, the currency rates remain relatively stable.",
        exampleTranslation:
          "Mặc dù có những biến động kinh tế, tỷ giá hối đoái vẫn duy trì tương đối ổn định.",
      },
      {
        id: 91,
        word: "A substantial rise",
        pronunciation: "/ə səbˈstænʃəl raɪz/",
        meaning: "Sự tăng lên đáng kể",
        note: "Cụm danh từ dùng 'substantial' (đáng kể) thay cho 'big' hoặc 'large'. Trong Task 1, thường đi với cấu trúc 'followed by a substantial rise' để mô tả sự tăng sau một giai đoạn giảm. Tương đương: a significant increase, a considerable surge, a marked jump.",
        example: "The report showed a substantial rise in annual profits.",
        exampleTranslation:
          "Báo cáo cho thấy sự tăng trưởng đáng kể trong lợi nhuận hàng năm.",
      },
      {
        id: 92,
        word: "Follow a much steadier upward trend",
        pronunciation: "/ˈfɒləʊ ə mʌtʃ ˈstɛdiə ˈʌpwəd trɛnd/",
        meaning: "Theo xu hướng tăng ổn định hơn nhiều",
        note: "Cụm động từ mô tả đường xu hướng tăng đều đặn, không bị gián đoạn. 'Steadier' (ổn định hơn) là dạng so sánh hơn của 'steady' — dùng khi so sánh hai đường trên cùng biểu đồ. Cụm hay trong Task 1 dạng line graph khi so sánh độ ổn định của hai xu hướng.",
        example:
          "The stock market began to follow a much steadier upward trend after the initial volatility.",
        exampleTranslation:
          "Thị trường chứng khoán bắt đầu có xu hướng tăng ổn định hơn sau sự biến động ban đầu.",
      },
      {
        id: 93,
        word: "Bounce back",
        pronunciation: "/baʊns bæk/",
        meaning: "Phục hồi sau sự suy giảm hoặc thất bại",
        note: "Cụm động từ ẩn dụ mạnh (phrasal verb), mô tả sự hồi phục nhanh chóng sau khi giảm. Tương đương với 'recover', 'rebound', 'pick up again'. Cấu trúc hay trong Task 1: 'prior to bouncing back to...' (trước khi phục hồi lên mức...). Sinh động hơn nhiều so với 'increased again'.",
        example:
          "After a severe illness, she was able to bounce back to her normal health quickly.",
        exampleTranslation:
          "Sau một cơn bệnh nặng, cô ấy đã nhanh chóng phục hồi sức khỏe bình thường.",
      },
      {
        id: 94,
        word: "Taper off",
        pronunciation: "/ˈteɪpə ɒf/",
        meaning: "Dần dần giảm bớt về số lượng hoặc tốc độ",
        note: "Cụm động từ ẩn dụ từ hình ảnh cái nêm (taper = thon dần). Mô tả xu hướng giảm chậm và từ từ, không đột ngột. Khác với 'drop dramatically' (giảm mạnh). Rất phù hợp trong Task 1 dạng line graph khi đường số liệu giảm dần về cuối giai đoạn. Tương đương: gradually decline, slowly decrease.",
        example: "The rain began to taper off by the afternoon.",
        exampleTranslation: "Mưa bắt đầu giảm dần vào buổi chiều.",
      },
      {
        id: 95,
        word: "Surpass",
        pronunciation: "/səˈpɑːs/",
        meaning: "Vượt qua, vượt trội hơn",
        note: "Động từ trang trọng dùng thay cho 'overtake' hoặc 'go beyond'. Trong Task 1 dạng line graph, 'surpassed' thường dùng khi một đường vượt qua đường khác tại một điểm cụ thể. Cấu trúc hay: 'it surpassed the production level of X in [year]'. Thì quá khứ đơn: surpassed.",
        example: "Natural gas surpassed the production level of coal in 1991.",
        exampleTranslation:
          "Khí đốt tự nhiên đã vượt qua mức sản xuất than vào năm 1991.",
      },
      {
        id: 96,
        word: "Drop dramatically",
        pronunciation: "/drɒp drəˈmætɪkli/",
        meaning: "Giảm mạnh và đột ngột",
        note: "'Dramatically' (một cách ấn tượng, mạnh mẽ) nhấn mạnh mức độ giảm lớn và nhanh. Đây là cặp từ quen thuộc trong Task 1. Các biến thể tương tự: 'fell sharply', 'plummeted', 'plunged'. Phân biệt: 'drop dramatically' (đột ngột, mạnh) vs. 'taper off' (dần dần, chậm).",
        example:
          "The production levels of coal dropped dramatically to just below 40 MT between 1983 and 1984.",
        exampleTranslation:
          "Mức sản xuất than đã giảm mạnh xuống chỉ dưới 40 triệu tấn trong khoảng thời gian 1983 đến 1984.",
      },
      {
        id: 97,
        word: "The opposite was true in the case of",
        pronunciation: "/ðə ˈɒpəzɪt wɒz truː ɪn ðə keɪs əv/",
        meaning: "Điều ngược lại đã xảy ra với, trường hợp ngược lại là",
        note: "Cụm cấu trúc quan trọng trong Task 1 Overview, dùng để diễn đạt xu hướng trái ngược mà không lặp từ. Trang trọng và ngắn gọn hơn 'but for X, the trend was different'. Cấu trúc đầy đủ: 'while A increased, the opposite was true in the case of B'.",
        example:
          "While production levels of petroleum and natural gas increased over the period, the opposite was true in the case of coal.",
        exampleTranslation:
          "Trong khi mức sản xuất dầu mỏ và khí đốt tự nhiên tăng lên trong giai đoạn này, thì điều ngược lại xảy ra với than.",
      },
      {
        id: 98,
        word: "Prior to",
        pronunciation: "/ˈpraɪər tuː/",
        meaning: "Trước khi, trước đó",
        note: "Giới từ trang trọng thay cho 'before'. Rất phổ biến trong Task 1 khi mô tả chuỗi sự kiện theo thời gian. Luôn đi với danh từ hoặc V-ing: 'prior to bouncing back', 'prior to declining'. Trang trọng hơn 'before' và thể hiện vốn ngữ pháp phong phú.",
        example:
          "Coal production dropped to just below 40 MT prior to bouncing back to around 60 MT in 1986.",
        exampleTranslation:
          "Sản xuất than giảm xuống chỉ dưới 40 triệu tấn trước khi phục hồi lên khoảng 60 triệu tấn vào năm 1986.",
      },
    ],
  },

  // ==========================================
  // W4 - Task 2: Living Away from Home (Sample 1 - Benefits outweigh)
  // ==========================================
  {
    id: "wr_w4_task2_university_benefits",
    skill: "Writing",
    volume: "9",
    topic: "Education / Society",
    part: "Task 2 - University Life Away from Home (Benefits > Drawbacks)",
    cards: [
      {
        id: 99,
        word: "Embark on their academic journey",
        pronunciation: "/ɪmˈbɑːk ɒn ðeər ækəˈdɛmɪk ˈdʒɜːni/",
        meaning: "Bắt đầu hành trình học vấn, khởi đầu con đường học thuật",
        note: "'Embark on' = bắt đầu một hành trình hoặc giai đoạn mới (thường quan trọng và đáng kể). 'Academic journey' là ẩn dụ đẹp cho quá trình học tập. Cụm này rất ấn tượng trong mở bài Task 2 về giáo dục, thay cho 'start studying at university'. Đồng nghĩa: commence their studies, begin their university education.",
        example:
          "Many students embark on their academic journey with excitement and a bit of nervousness.",
        exampleTranslation:
          "Nhiều sinh viên bắt đầu hành trình học vấn của mình với sự hứng thú và một chút lo lắng.",
      },
      {
        id: 100,
        word: "Eclipse",
        pronunciation: "/ɪˈklɪps/",
        meaning: "Làm lu mờ, vượt trội hơn về tầm quan trọng hoặc chất lượng",
        note: "Động từ dùng theo nghĩa ẩn dụ từ thiên văn học (nhật thực/nguyệt thực). 'Eclipse' gợi lên hình ảnh một thứ hoàn toàn che khuất thứ khác — mạnh hơn 'outweigh' hay 'surpass'. Cấu trúc hay: 'the advantages significantly eclipse the disadvantages'. Thể hiện vốn từ Band 7.5+.",
        example:
          "Her recent achievements in science eclipse those of her colleagues.",
        exampleTranslation:
          "Những thành tựu gần đây của cô ấy trong lĩnh vực khoa học đã làm lu mờ những đồng nghiệp của mình.",
      },
      {
        id: 101,
        word: "Financial burden",
        pronunciation: "/faɪˈnænʃəl ˈbɜːdn/",
        meaning: "Gánh nặng tài chính, áp lực kinh tế",
        note: "'Burden' (gánh nặng) mạnh hơn 'problem' hay 'issue', hàm ý sức nặng khó chịu phải gánh chịu. Cụm này xuất hiện trong cả hai bài mẫu — đây là luận điểm phổ biến nhất khi nói về bất lợi của sống xa nhà. Cấu trúc hay: 'imposes a financial burden on students'.",
        example:
          "The financial burden of university fees can be overwhelming for many families.",
        exampleTranslation:
          "Gánh nặng tài chính của học phí đại học có thể là quá sức cho nhiều gia đình.",
      },
      {
        id: 102,
        word: "Living expenses",
        pronunciation: "/ˈlɪvɪŋ ɪkˈspɛnsɪz/",
        meaning: "Chi phí sinh hoạt hàng ngày",
        note: "Cụm danh từ chỉ tổng các chi phí để duy trì cuộc sống: nhà ở, ăn uống, đi lại, giải trí. Phổ biến trong các bài Task 2 về tài chính, sinh viên, hoặc chi tiêu. Thường đi với: 'cover/manage/navigate living expenses'. Đồng nghĩa: cost of living, daily expenses.",
        example:
          "Managing living expenses is a major part of a student's budget.",
        exampleTranslation:
          "Quản lý chi phí sinh hoạt là một phần quan trọng trong ngân sách của sinh viên.",
      },
      {
        id: 103,
        word: "Emotional toll",
        pronunciation: "/ɪˈməʊʃənl təʊl/",
        meaning:
          "Cái giá phải trả về mặt tâm lý, ảnh hưởng tiêu cực lên cảm xúc",
        note: "'Toll' (danh từ) theo nghĩa ẩn dụ là cái giá/hậu quả phải chịu. 'Emotional toll' chỉ tác động tâm lý nặng nề của một tình huống căng thẳng. Cấu trúc hay: 'the emotional toll of being separated from loved ones cannot be understated'. Mạnh hơn 'emotional impact' hay 'emotional effect'.",
        example:
          "The emotional toll of studying abroad can be significant for some students.",
        exampleTranslation:
          "Ảnh hưởng tâm lý của việc học ở nước ngoài có thể rất lớn đối với một số sinh viên.",
      },
      {
        id: 104,
        word: "Homesickness",
        pronunciation: "/ˈhəʊmsɪknəs/",
        meaning: "Nỗi nhớ nhà, sự buồn bã khi xa gia đình",
        note: "Danh từ không đếm được, chỉ trạng thái buồn bã và khao khát trở về nhà khi phải sống xa gia đình trong thời gian dài. Từ này rất cụ thể và gợi cảm xúc, phù hợp trong bài về sống xa nhà hoặc du học. Cấu trún hay: 'triggers/experience homesickness'.",
        example:
          "Many international students experience homesickness during their first semester.",
        exampleTranslation:
          "Nhiều sinh viên quốc tế trải qua nỗi nhớ nhà trong học kỳ đầu tiên của họ.",
      },
      {
        id: 105,
        word: "A sense of autonomy",
        pronunciation: "/ə sɛns əv ɔːˈtɒnəmi/",
        meaning: "Cảm giác tự chủ, khả năng tự quyết định và hành động",
        note: "'Autonomy' (tự chủ) là từ học thuật chỉ khả năng tự điều hành, tự quyết định mà không cần sự kiểm soát từ bên ngoài. Trang trọng hơn 'independence'. Cấu trúc hay: 'fosters a sense of autonomy' (nuôi dưỡng tinh thần tự chủ). Đồng nghĩa: self-governance, independence, self-sufficiency.",
        example: "Living on her own gave her a strong sense of autonomy.",
        exampleTranslation:
          "Việc sống một mình đã mang lại cho cô ấy một cảm giác tự chủ mạnh mẽ.",
      },
      {
        id: 106,
        word: "Day-to-day responsibilities",
        pronunciation: "/ˌdeɪtəˈdeɪ rɪˌspɒnsɪˈbɪlɪtɪz/",
        meaning: "Các trách nhiệm và công việc hàng ngày",
        note: "'Day-to-day' (tính từ ghép có gạch nối) nghĩa là hàng ngày, liên quan đến cuộc sống thường nhật. Trang trọng hơn 'daily tasks'. Thường đi với: 'manage/handle/juggle day-to-day responsibilities'. Đây là kỹ năng quan trọng mà sinh viên sống xa nhà phải học.",
        example:
          "Managing day-to-day responsibilities is a key part of adult life.",
        exampleTranslation:
          "Quản lý trách nhiệm hàng ngày là một phần quan trọng của cuộc sống người lớn.",
      },
      {
        id: 107,
        word: "Social circles",
        pronunciation: "/ˈsəʊʃəl ˈsɜːklz/",
        meaning: "Vòng tròn xã hội, các nhóm bạn bè và mối quan hệ",
        note: "Cụm danh từ hình ảnh (ẩn dụ hình tròn) chỉ mạng lưới các mối quan hệ xã hội của một người. Thường đi với: 'expand/broaden one's social circles' (mở rộng vòng kết bạn). Phong phú hơn 'make new friends' hay 'meet new people'. Đồng nghĩa: social networks, peer groups.",
        example:
          "Expanding one's social circles can lead to new opportunities and experiences.",
        exampleTranslation:
          "Mở rộng vòng tròn xã hội có thể dẫn đến cơ hội và trải nghiệm mới.",
      },
      {
        id: 108,
        word: "Holistic educational experience",
        pronunciation: "/həˈlɪstɪk ˌɛdjʊˈkeɪʃənl ɪkˈspɪəriəns/",
        meaning:
          "Trải nghiệm giáo dục toàn diện (cả học thuật, cảm xúc, xã hội)",
        note: "'Holistic' (toàn diện) là tính từ học thuật chỉ cách tiếp cận xem xét tổng thể chứ không chỉ một khía cạnh. Phổ biến trong triết học giáo dục hiện đại. Cụm 'a richer, more holistic educational experience' nhấn mạnh giá trị vượt ra ngoài học thuật thuần túy.",
        example:
          "A holistic educational experience is essential for nurturing well-rounded individuals.",
        exampleTranslation:
          "Trải nghiệm giáo dục toàn diện là cần thiết để nuôi dưỡng những cá nhân toàn diện.",
      },
      {
        id: 109,
        word: "Invaluable life skills",
        pronunciation: "/ɪnˈvæljuəbl laɪf skɪlz/",
        meaning: "Các kỹ năng sống vô cùng quý giá và không thể thiếu",
        note: "'Invaluable' = cực kỳ có giá trị (không định giá được) — KHÔNG phải 'không có giá trị'. Đây là từ dễ nhầm nghĩa quan trọng. 'Life skills' chỉ các kỹ năng cần thiết để sống độc lập. Cụm này thường xuất hiện trong kết luận như điểm nhấn mạnh nhất của lập luận.",
        example:
          "Learning to manage finances is an invaluable life skill for all students.",
        exampleTranslation:
          "Học cách quản lý tài chính là một kỹ năng sống vô giá đối với tất cả sinh viên.",
      },
      {
        id: 110,
        word: "An integral component",
        pronunciation: "/ən ˈɪntɪɡrəl kəmˈpəʊnənt/",
        meaning: "Một phần không thể thiếu, yếu tố cốt lõi",
        note: "'Integral' (cốt lõi, thiết yếu) mạnh hơn 'important' hay 'essential'. 'Component' (thành phần) trang trọng hơn 'part'. Cụm 'an integral component of X' thường xuất hiện trong kết luận để khẳng định tầm quan trọng không thể tách rời. Đồng nghĩa: a fundamental element, an indispensable part.",
        example:
          "Practical experience is an integral component of the education system.",
        exampleTranslation:
          "Kinh nghiệm thực tế là một phần không thể thiếu của hệ thống giáo dục.",
      },
    ],
  },

  // ==========================================
  // W4 - Task 2: Living Away from Home (Sample 2 - Drawbacks outweigh)
  // ==========================================
  {
    id: "wr_w4_task2_university_drawbacks",
    skill: "Writing",
    volume: "9",
    topic: "Education / Society",
    part: "Task 2 - University Life Away from Home (Drawbacks > Benefits)",
    cards: [
      {
        id: 111,
        word: "Venture to",
        pronunciation: "/ˈvɛntʃə tuː/",
        meaning: "Dám đến, dấn thân đến (nơi mới hoặc có thách thức)",
        note: "'Venture' hàm ý sự dũng cảm và chút mạo hiểm khi đi đến nơi mới. Trang trọng và giàu hình ảnh hơn 'go to' hay 'move to'. Cụm 'venture to a different city' = dấn thân đến một thành phố khác (với hàm ý đây là một quyết định can đảm). Thường dùng trong mở bài như cách paraphrase đề bài.",
        example: "She ventured to a new city to pursue her university studies.",
        exampleTranslation:
          "Cô ấy đã dám đến một thành phố mới để theo đuổi việc học đại học.",
      },
      {
        id: 112,
        word: "Considerably overshadow",
        pronunciation: "/kənˈsɪdərəbli ˌəʊvəˈʃædəʊ/",
        meaning: "Làm lu mờ đáng kể, che khuất hoàn toàn về tầm quan trọng",
        note: "'Overshadow' = che khuất, làm lu mờ (ẩn dụ bóng tối). Kết hợp với 'considerably' tạo thành cụm mạnh thể hiện sự áp đảo rõ ràng. Tương đương với 'outweigh' hay 'eclipse' nhưng mang sắc thái ẩn dụ ánh sáng/bóng tối. Cấu trúc: 'the disadvantages considerably overshadow the advantages'.",
        example:
          "The disadvantages considerably overshadow the benefits in this case.",
        exampleTranslation:
          "Những nhược điểm làm lu mờ đáng kể những lợi ích trong trường hợp này.",
      },
      {
        id: 113,
        word: "A strong sense of independence",
        pronunciation: "/ə strɒŋ sɛns əv ˌɪndɪˈpɛndəns/",
        meaning: "Cảm giác tự lập mạnh mẽ",
        note: "Cụm danh từ quan trọng trong bài về giáo dục và phát triển cá nhân. Phân biệt với 'a sense of autonomy' (tự chủ về quyết định) — 'independence' nghiêng về tự lập về hành động và cuộc sống. Thường đi với: 'develop/foster/build a strong sense of independence'.",
        example:
          "Living on her own developed a strong sense of independence in her.",
        exampleTranslation:
          "Việc sống một mình đã phát triển một cảm giác tự lập mạnh mẽ trong cô ấy.",
      },
      {
        id: 114,
        word: "Financial management and self-discipline",
        pronunciation: "/faɪˈnænʃəl ˈmænɪdʒmənt ænd ˌsɛlfˈdɪsɪplɪn/",
        meaning: "Quản lý tài chính và kỷ luật bản thân",
        note: "Cặp danh từ ghép thường đi cùng nhau khi liệt kê kỹ năng sống. 'Self-discipline' (kỷ luật tự giác) là kỹ năng kiểm soát cảm xúc, hành vi để đạt mục tiêu dài hạn. Cả hai đều là 'vital life skills' quan trọng mà sinh viên sống xa nhà buộc phải học.",
        example:
          "University life teaches students important skills like financial management and self-discipline.",
        exampleTranslation:
          "Cuộc sống đại học dạy cho sinh viên những kỹ năng quan trọng như quản lý tài chính và kỷ luật cá nhân.",
      },
      {
        id: 115,
        word: "Problem-solving skills",
        pronunciation: "/ˈprɒbləm ˈsɒlvɪŋ skɪlz/",
        meaning: "Kỹ năng giải quyết vấn đề",
        note: "'Problem-solving' là tính từ ghép (luôn có gạch nối khi đứng trước danh từ). Đây là một trong những kỹ năng được coi trọng nhất trong cả học thuật lẫn nghề nghiệp. Thường xuất hiện trong các bài về giáo dục, kỹ năng mềm, hoặc phát triển cá nhân. Đồng nghĩa: critical thinking skills, analytical abilities.",
        example:
          "Developing problem-solving skills is essential for academic and professional success.",
        exampleTranslation:
          "Phát triển kỹ năng giải quyết vấn đề là cần thiết cho thành công trong học tập và nghề nghiệp.",
      },
      {
        id: 116,
        word: "Independent living",
        pronunciation: "/ˌɪndɪˈpɛndənt ˈlɪvɪŋ/",
        meaning:
          "Cuộc sống tự lập, tình trạng sống độc lập không phụ thuộc người khác",
        note: "Cụm danh từ chỉ lối sống tự chủ hoàn toàn trong mọi quyết định và chăm sóc bản thân. Thường đi với: 'the costs associated with independent living' (chi phí liên quan đến sống tự lập). Trang trọng hơn 'living alone' hay 'living by yourself'.",
        example:
          "Independent living is an important step in a young adult's life.",
        exampleTranslation:
          "Sống độc lập là một bước quan trọng trong cuộc đời của một người trẻ.",
      },
      {
        id: 117,
        word: "Overwhelming",
        pronunciation: "/ˌəʊvəˈwɛlmɪŋ/",
        meaning: "Quá sức, áp đảo, vượt quá khả năng chịu đựng",
        note: "Tính từ mạnh chỉ cảm giác bị nhấn chìm hoặc vượt quá khả năng xử lý. Thường đi với: 'can be overwhelming', 'feel overwhelming'. Phân biệt: 'overwhelming' (quá sức để xử lý) vs. 'substantial' (đáng kể nhưng quản lý được). Thường dùng để mô tả tác động của chi phí hoặc trách nhiệm lên sinh viên.",
        example:
          "The number of assignments can be overwhelming for first-year university students.",
        exampleTranslation:
          "Số lượng bài tập về nhà có thể quá sức đối với sinh viên năm nhất.",
      },
      {
        id: 118,
        word: "Family support and comfort",
        pronunciation: "/ˈfæmɪli səˈpɔːt ænd ˈkʌmfət/",
        meaning: "Sự hỗ trợ và cảm giác an ủi từ gia đình",
        note: "Cụm danh từ kép thể hiện hai vai trò của gia đình: hỗ trợ thực tế ('support') và sự ấm áp cảm xúc ('comfort'). Thường dùng trong bài về lợi ích của việc sống cùng gia đình hoặc bất lợi của sống xa nhà. Cấu trúc hay: 'the emotional impact of being away from family support and comfort'.",
        example:
          "Family support and comfort are crucial during challenging times in one's life.",
        exampleTranslation:
          "Sự hỗ trợ và cảm giác thoải mái đến từ gia đình là rất quan trọng trong những thời điểm khó khăn trong cuộc sống.",
      },
      {
        id: 119,
        word: "Rigorous academic schedule",
        pronunciation: "/ˈrɪɡərəs ˌækəˈdɛmɪk ˈʃɛdjuːl/",
        meaning: "Lịch trình học tập đòi hỏi khắt khe và căng thẳng",
        note: "'Rigorous' (khắt khe, nghiêm ngặt) là tính từ học thuật quan trọng hàm ý đòi hỏi nhiều nỗ lực và kỷ luật. Trang trọng hơn 'busy' hay 'demanding'. Thường đi với: 'alongside a rigorous academic schedule' (song song với lịch trình học tập khắt khe). Liên quan: burnout (kiệt sức).",
        example:
          "Students often struggle to balance a rigorous academic schedule with other life responsibilities.",
        exampleTranslation:
          "Sinh viên thường gặp khó khăn trong việc cân bằng lịch trình học tập khắt khe với các trách nhiệm khác trong cuộc sống.",
      },
      {
        id: 120,
        word: "A less favorable option",
        pronunciation: "/ə lɛs ˈfeɪvərəbl ˈɒpʃən/",
        meaning:
          "Một lựa chọn kém thuận lợi hơn, phương án ít được ưa thích hơn",
        note: "Cụm so sánh hơn dùng 'less favorable' (kém thuận lợi hơn) thay vì 'worse' — lịch sự và học thuật hơn. Thường xuất hiện trong kết luận khi tóm tắt quan điểm rằng một phương án kém hơn phương án khác. Đồng nghĩa: a less desirable choice, a suboptimal option.",
        example:
          "For some, commuting long distances to university is a less favorable option than living on campus.",
        exampleTranslation:
          "Đối với một số người, việc đi lại quãng đường dài đến trường đại học là một lựa chọn kém thuận lợi hơn so với việc sống trong khuôn viên trường.",
      },
      {
        id: 121,
        word: "Familial home environment",
        pronunciation: "/fəˈmɪliəl həʊm ɪnˈvaɪrənmənt/",
        meaning:
          "Môi trường gia đình, không khí và không gian sống cùng gia đình",
        note: "'Familial' (thuộc về gia đình) là tính từ trang trọng hơn 'family'. Ít phổ biến hơn nhưng rất ấn tượng trong bài viết học thuật. Cụm 'the familial home environment' gợi lên sự ấm cúng, an toàn và ổn định của môi trường gia đình — đối lập với cuộc sống sinh viên xa nhà.",
        example:
          "The familial home environment can provide a sense of security and stability for students.",
        exampleTranslation:
          "Môi trường gia đình có thể mang lại cảm giác an toàn và ổn định cho sinh viên.",
      },
    ],
  },
  // ==========================================
  // W5 - Task 1: Australian Exports Line Graph
  // ==========================================
  {
    id: "wr_w5_task1_australian_exports",
    skill: "Writing",
    volume: "9",
    topic: "Trade / Economy",
    part: "Task 1 - Australian Exports Line Graph",
    cards: [
      {
        id: 122,
        word: "The dominant destination for Australian goods",
        pronunciation: "/ðə ˈdɒmɪnənt ˌdɛstɪˈneɪʃən fər ɒˈstreɪliən ɡʊdz/",
        meaning: "Thị trường trọng điểm, điểm đến chính của hàng xuất khẩu Úc",
        note: "'Dominant' (chiếm ưu thế, vượt trội) mạnh hơn 'main' hay 'primary'. Đây là cụm dùng trong Task 1 Overview hoặc kết thúc đoạn thân bài để nhận xét về quốc gia nhập khẩu nhiều nhất. Tương đương: 'the primary export destination', 'the leading market'. Cấu trúc hay: 'became the dominant destination for'.",
        example:
          "China is the dominant destination for Australian goods, with minerals, beef, and wine being exported to meet Chinese market demands.",
        exampleTranslation:
          "Trung Quốc là điểm đến trọng điểm của hàng hóa Úc, với các sản phẩm như khoáng sản, thịt bò và rượu được xuất khẩu để đáp ứng nhu cầu thị trường Trung Quốc.",
      },
      {
        id: 123,
        word: "Import",
        pronunciation: "/ɪmˈpɔːt/",
        meaning: "Nhập khẩu (mua hoặc đưa hàng hóa từ nước khác vào)",
        note: "Lưu ý quan trọng trong Task 1: khi mô tả xuất khẩu của Úc sang Nhật, ta có thể dùng góc nhìn ngược lại 'Japan imported from Australia' thay vì 'Australia exported to Japan' — giúp bài viết đa dạng hơn. Phân biệt: export (xuất khẩu) ↔ import (nhập khẩu). Động từ: import; Danh từ: imports.",
        example:
          "The country imports most of its food from neighboring countries.",
        exampleTranslation:
          "Quốc gia này nhập khẩu phần lớn thực phẩm của mình từ các nước láng giềng.",
      },
      {
        id: 124,
        word: "A similar downward trend",
        pronunciation: "/ə ˈsɪmɪlə ˈdaʊnwəd trɛnd/",
        meaning: "Xu hướng giảm tương tự",
        note: "Cụm danh từ quan trọng trong Task 1 khi mô tả hai đường có cùng chiều hướng giảm. Đối nghĩa: 'a similar upward trend' (xu hướng tăng tương tự). Cấu trúc hay: 'A similar downward trend was observed in...' (Xu hướng giảm tương tự cũng được quan sát thấy ở...). Thể hiện khả năng so sánh các xu hướng một cách ngắn gọn.",
        example:
          "The industry has seen a similar downward trend in sales this quarter.",
        exampleTranslation:
          "Ngành công nghiệp đã chứng kiến một xu hướng giảm tương tự trong doanh số bán hàng của quý này.",
      },
      {
        id: 125,
        word: "Largest goods export market",
        pronunciation: "/ˈlɑːdʒɪst ɡʊdz ˈɛkspɔːt ˈmɑːkɪt/",
        meaning: "Thị trường xuất khẩu hàng hóa lớn nhất",
        note: "Cụm danh từ ghép chuyên ngành thương mại quốc tế. 'Goods' (hàng hóa vật chất) phân biệt với 'services' (dịch vụ). Cụm này thường xuất hiện ở cuối đoạn khi kết luận về vị trí dẫn đầu của một quốc gia. Cấu trúc hay: 'overtaking X to become Australia's largest goods export market'.",
        example:
          "China is the largest goods export market for many countries around the world.",
        exampleTranslation:
          "Trung Quốc là thị trường xuất khẩu hàng hóa lớn nhất cho nhiều quốc gia trên thế giới.",
      },
      {
        id: 126,
        word: "Declined gradually to a low of",
        pronunciation: "/dɪˈklaɪnd ˈɡrædʒuəli tə ə ləʊ əv/",
        meaning: "Giảm dần xuống mức thấp nhất là",
        note: "Cụm động từ + trạng từ + cụm giới từ đặc trưng khi mô tả đáy (lowest point) trong line graph. 'To a low of' (xuống mức thấp là) — đối xứng với 'to a high of' (lên mức cao là). Đây là cách diễn đạt chính xác và học thuật thay cho 'fell to its lowest point of'.",
        example:
          "Japan's share of Australian exports declined gradually to a low of around 18% in 2002.",
        exampleTranslation:
          "Tỷ lệ xuất khẩu của Úc sang Nhật Bản giảm dần xuống mức thấp nhất là khoảng 18% vào năm 2002.",
      },
      {
        id: 127,
        word: "Albeit at a lower rate",
        pronunciation: "/ɔːlˈbiːɪt æt ə ˈləʊə reɪt/",
        meaning: "Mặc dù với tốc độ/mức độ thấp hơn",
        note: "'Albeit' là liên từ trang trọng (= although/even though) thường dùng trong văn viết học thuật, KHÔNG dùng trong văn nói. Cụm 'albeit at a lower rate' xuất hiện khi mô tả một xu hướng tương tự nhưng kém rõ rệt hơn. Rất ấn tượng trong Task 1 khi so sánh hai đường có xu hướng giống nhau nhưng khác mức độ.",
        example:
          "India followed a similar pattern, albeit at a lower rate than China.",
        exampleTranslation:
          "Ấn Độ cũng đi theo xu hướng tương tự, mặc dù với tốc độ thấp hơn Trung Quốc.",
      },
      {
        id: 128,
        word: "Overtaking",
        pronunciation: "/ˌəʊvəˈteɪkɪŋ/",
        meaning: "Vượt qua, bắt kịp và vượt lên trên",
        note: "Phân từ hiện tại của 'overtake', dùng để mô tả thời điểm một đường vượt qua đường khác trong line graph. Tương đương: 'surpassing', 'bypassing'. Cấu trúc hay: 'overtaking Japan three years prior to become...' — dùng 'prior to' thay 'before' để thêm tính học thuật.",
        example:
          "China experienced a substantial rise, overtaking Japan to become Australia's largest goods export market.",
        exampleTranslation:
          "Trung Quốc đã tăng đáng kể, vượt qua Nhật Bản để trở thành thị trường xuất khẩu hàng hóa lớn nhất của Úc.",
      },
      {
        id: 129,
        word: "Accounting for approximately",
        pronunciation: "/əˈkaʊntɪŋ fər əˈprɒksɪmətli/",
        meaning: "Chiếm khoảng, đạt khoảng (một tỷ lệ phần trăm)",
        note: "'Account for' = chiếm (một tỷ lệ trong tổng thể). Kết hợp với 'approximately' (khoảng, xấp xỉ) để mô tả số liệu ước lượng trong biểu đồ. Cấu trúc chuẩn: 'accounting for approximately X% of Y'. Thường dùng dưới dạng phân từ hiện tại bổ nghĩa cho mệnh đề trước.",
        example:
          "Japan imported significantly more from Australia than any other country listed, accounting for approximately 26% of Australian exports.",
        exampleTranslation:
          "Nhật Bản nhập khẩu từ Úc nhiều hơn đáng kể so với bất kỳ quốc gia nào được liệt kê, chiếm khoảng 26% kim ngạch xuất khẩu của Úc.",
      },
    ],
  },

  // ==========================================
  // W5 - Task 2: Moving Away for Work (Sample 1 - Benefits outweigh)
  // ==========================================
  {
    id: "wr_w5_task2_relocation_benefits",
    skill: "Writing",
    volume: "9",
    topic: "Work / Society",
    part: "Task 2 - Moving for Work (Benefits > Drawbacks)",
    cards: [
      {
        id: 130,
        word: "Today's dynamic job market",
        pronunciation: "/təˈdeɪz daɪˈnæmɪk dʒɒb ˈmɑːkɪt/",
        meaning: "Thị trường việc làm đầy biến động ngày nay",
        note: "'Dynamic' (năng động, biến đổi nhanh) là tính từ học thuật quan trọng mô tả sự thay đổi liên tục và nhanh chóng. Cụm 'today's dynamic job market' là cách mở bài ấn tượng trong các bài về việc làm, nghề nghiệp, hoặc kinh tế. Tương đương: 'the ever-changing employment landscape', 'the competitive labor market'.",
        example:
          "In today's dynamic job market, individuals must continuously update their skills to remain competitive.",
        exampleTranslation:
          "Trong thị trường việc làm đầy biến động ngày nay, mọi người cần phải liên tục cập nhật kỹ năng của mình để giữ vững lợi thế cạnh tranh.",
      },
      {
        id: 131,
        word: "Separation",
        pronunciation: "/ˌsɛpəˈreɪʃən/",
        meaning: "Sự chia cách, tách biệt khỏi ai đó hoặc nơi nào đó",
        note: "Danh từ trang trọng hơn 'being away from' hay 'distance from'. Thường dùng để chỉ sự xa cách cả về địa lý lẫn cảm xúc. Cấu trúc hay: 'leading to a separation from their traditional support systems' (dẫn đến sự chia cách khỏi hệ thống hỗ trợ truyền thống). Từ phái sinh: separate (v), separated (adj).",
        example:
          "The separation from family and friends can be one of the most challenging aspects of relocating for a new job.",
        exampleTranslation:
          "Sự tách biệt khỏi gia đình và bạn bè có thể là một trong những khía cạnh khó khăn nhất khi chuyển đến một công việc mới.",
      },
      {
        id: 132,
        word: "Urban centers",
        pronunciation: "/ˈɜːbən ˈsɛntəz/",
        meaning: "Các trung tâm đô thị, khu vực thành phố đông đúc",
        note: "'Urban' (đô thị, thành thị) là tính từ đối lập với 'rural' (nông thôn). 'Centers' (trung tâm) hàm ý các điểm tập trung hoạt động kinh tế, văn hóa, xã hội. Cụm này thường đi với: 'move to urban centers' (chuyển đến các trung tâm đô thị). Đồng nghĩa: metropolitan areas, city hubs.",
        example:
          "Urban centers often offer more job opportunities and amenities but can also come with higher living costs.",
        exampleTranslation:
          "Các trung tâm đô thị thường cung cấp nhiều cơ hội việc làm và tiện ích hơn nhưng cũng có thể đi kèm với chi phí sinh hoạt cao hơn.",
      },
      {
        id: 133,
        word: "Emotional distress",
        pronunciation: "/ɪˈməʊʃənl dɪˈstrɛs/",
        meaning: "Đau khổ tinh thần, sự đau đớn và lo âu về mặt cảm xúc",
        note: "'Distress' (đau khổ, kiệt sức) mạnh hơn 'stress' hay 'unhappiness', hàm ý trạng thái khổ sở nghiêm trọng. Phân biệt: 'emotional toll' (cái giá phải trả về mặt cảm xúc) vs. 'emotional distress' (trạng thái đau khổ cụ thể đang xảy ra). Thường xuất hiện trong bài về sức khỏe tâm thần, di dân, hoặc áp lực cuộc sống.",
        example:
          "The emotional distress experienced after losing a job can impact an individual's ability to seek new employment.",
        exampleTranslation:
          "Sự đau khổ tinh thần sau khi mất việc có thể ảnh hưởng đến khả năng tìm kiếm công việc mới của một người.",
      },
      {
        id: 134,
        word: "Logistical and financial hurdles",
        pronunciation: "/ləˈdʒɪstɪkəl ænd faɪˈnænʃəl ˈhɜːdlz/",
        meaning: "Những rào cản về hậu cần và tài chính",
        note: "'Hurdles' (rào cản, chướng ngại vật) là từ ẩn dụ từ thể thao (chạy vượt rào), chỉ các khó khăn phải vượt qua. Mạnh hơn và hình ảnh hơn 'difficulties' hay 'challenges'. 'Logistical' (thuộc về hậu cần/tổ chức) chỉ các vấn đề lập kế hoạch và tổ chức thực hiện. Cụm hay: 'overcome logistical and financial hurdles'.",
        example:
          "The logistical and financial hurdles of relocating for a new job can deter many from pursuing opportunities far from home.",
        exampleTranslation:
          "Những rào cản về hậu cần và tài chính khi chuyển chỗ làm mới có thể ngăn cản nhiều người theo đuổi cơ hội xa nhà.",
      },
      {
        id: 135,
        word: "Career trajectory",
        pronunciation: "/kəˈrɪə trəˈdʒɛktəri/",
        meaning: "Lộ trình sự nghiệp, con đường phát triển nghề nghiệp",
        note: "'Trajectory' (quỹ đạo, lộ trình) là từ ẩn dụ từ vật lý/thiên văn, chỉ đường đi của một vật thể trong không gian. Dùng theo nghĩa bóng để chỉ con đường phát triển của sự nghiệp. Rất ấn tượng trong bài IELTS. Cấu trúc hay: 'accelerate one's career trajectory' (đẩy nhanh lộ trình sự nghiệp).",
        example:
          "A well-planned career trajectory can help individuals achieve their professional goals and attain job satisfaction.",
        exampleTranslation:
          "Một lộ trình sự nghiệp được lên kế hoạch tốt có thể giúp cá nhân đạt được mục tiêu chuyên nghiệp và sự hài lòng trong công việc.",
      },
      {
        id: 136,
        word: "Resilience",
        pronunciation: "/rɪˈzɪliəns/",
        meaning: "Sức chịu đựng, khả năng phục hồi sau khó khăn",
        note: "Danh từ không đếm được, chỉ khả năng vượt qua nghịch cảnh và phục hồi nhanh chóng. Đây là một trong những phẩm chất được nhà tuyển dụng và xã hội đánh giá cao nhất. Thường đi cùng 'adaptability' và 'perseverance'. Cấu trúc hay: 'cultivate resilience' (nuôi dưỡng sức chịu đựng), 'build resilience'.",
        example:
          "Resilience is a key trait for success in today's dynamic job market, allowing individuals to navigate through challenges and setbacks.",
        exampleTranslation:
          "Sự kiên cường là một đặc điểm quan trọng cho thành công trong thị trường việc làm đầy biến động ngày nay, cho phép cá nhân vượt qua thách thức và khó khăn.",
      },
      {
        id: 137,
        word: "Adaptability",
        pronunciation: "/əˌdæptəˈbɪlɪti/",
        meaning: "Khả năng thích nghi, tính linh hoạt trước sự thay đổi",
        note: "Danh từ phái sinh từ 'adapt' (thích nghi). Đây là kỹ năng mềm quan trọng trong thế kỷ 21. Thường đi cùng 'resilience' và 'flexibility'. Cấu trúc hay: 'foster/develop adaptability' (nuôi dưỡng/phát triển khả năng thích nghi). Tính từ tương ứng: adaptable (có thể thích nghi).",
        example:
          "Adaptability is essential for individuals moving to urban centers, as it helps them to successfully integrate into new cultural and social settings.",
        exampleTranslation:
          "Khả năng thích nghi là cần thiết cho những người chuyển đến các trung tâm đô thị, giúp họ hòa nhập thành công vào môi trường văn hóa và xã hội mới.",
      },
      {
        id: 138,
        word: "A broader perspective on life",
        pronunciation: "/ə ˈbrɔːdə pəˈspɛktɪv ɒn laɪf/",
        meaning: "Góc nhìn rộng lớn hơn về cuộc sống",
        note: "Cụm danh từ hình ảnh, dùng 'broader' (rộng hơn) dạng so sánh hơn của 'broad'. 'Perspective' (góc nhìn, quan điểm) gợi ý sự thay đổi cách nhìn nhận thế giới. Cụm hay trong kết luận hoặc đoạn về lợi ích cá nhân của việc di chuyển xa nhà. Đồng nghĩa: a wider worldview, an expanded outlook.",
        example:
          "Traveling the world can give you a broader perspective on life, exposing you to different cultures and lifestyles.",
        exampleTranslation:
          "Du lịch khắp thế giới có thể mang lại cho bạn một góc nhìn rộng lớn hơn về cuộc sống, mở rộng tầm nhìn với các nền văn hóa và lối sống khác nhau.",
      },
      {
        id: 139,
        word: "Diverse cultural settings",
        pronunciation: "/daɪˈvɜːs ˈkʌltʃərəl ˈsɛtɪŋz/",
        meaning: "Môi trường văn hóa đa dạng",
        note: "'Diverse' (đa dạng) là tính từ học thuật quan trọng chỉ sự phong phú về loại hình. 'Settings' (môi trường, bối cảnh) trang trọng hơn 'environments' hay 'places'. Cụm này diễn đạt lợi ích văn hóa của việc sống ở nơi mới. Cấu trúc hay: 'living in/working in diverse cultural settings'.",
        example:
          "Working in diverse cultural settings can enhance one's adaptability and cross-cultural communication skills.",
        exampleTranslation:
          "Làm việc trong môi trường văn hóa đa dạng có thể tăng cường khả năng thích nghi và kỹ năng giao tiếp đa văn hóa.",
      },
      {
        id: 140,
        word: "Enhanced career opportunities",
        pronunciation: "/ɪnˈhɑːnst kəˈrɪər ˌɒpəˈtjuːnɪtɪz/",
        meaning: "Cơ hội nghề nghiệp được nâng cao và cải thiện",
        note: "'Enhanced' (được tăng cường, cải thiện) là tính từ/phân từ mạnh hơn 'better' hay 'improved'. Thường xuất hiện trong kết luận như điểm nhấn cuối cùng của lập luận ủng hộ việc di chuyển để tìm việc. Đồng nghĩa: expanded career prospects, improved professional opportunities.",
        example:
          "Relocating to a major city often leads to enhanced career opportunities in various industries.",
        exampleTranslation:
          "Chuyển đến một thành phố lớn thường dẫn đến cơ hội nghề nghiệp được cải thiện trong nhiều ngành nghề.",
      },
      {
        id: 141,
        word: "Downsides",
        pronunciation: "/ˈdaʊnsaɪdz/",
        meaning: "Mặt trái, nhược điểm, bất lợi",
        note: "Danh từ số nhiều thông dụng và tự nhiên hơn 'disadvantages' trong một số ngữ cảnh. Thường xuất hiện trong kết luận: 'substantially outweigh these downsides'. Tương đương: drawbacks, disadvantages, negative aspects. Phân biệt: 'downside' (nhược điểm cụ thể) vs. 'drawback' (hạn chế có tính hệ thống hơn).",
        example:
          "Despite the benefits, the downsides of living away from family include loneliness and the challenge of building a new support network.",
        exampleTranslation:
          "Mặc dù có lợi ích, nhưng nhược điểm của việc sống xa gia đình bao gồm cảm giác cô đơn và thách thức trong việc xây dựng một mạng lưới hỗ trợ mới.",
      },
    ],
  },

  // ==========================================
  // W5 - Task 2: Moving Away for Work (Sample 2 - Drawbacks outweigh)
  // ==========================================
  {
    id: "wr_w5_task2_relocation_drawbacks",
    skill: "Writing",
    volume: "9",
    topic: "Work / Society",
    part: "Task 2 - Moving for Work (Drawbacks > Benefits)",
    cards: [
      {
        id: 142,
        word: "Familial and social networks",
        pronunciation: "/fəˈmɪliəl ænd ˈsəʊʃəl ˈnɛtwɜːks/",
        meaning: "Mạng lưới quan hệ gia đình và xã hội",
        note: "'Familial' (thuộc về gia đình) trang trọng hơn 'family'. 'Networks' (mạng lưới) gợi ý sự kết nối phức tạp và có giá trị của các mối quan hệ. Cụm này phong phú hơn 'family and friends'. Cấu trúc hay: 'compelled to leave their familial and social networks behind' (bị buộc phải rời bỏ mạng lưới quan hệ gia đình và xã hội).",
        example:
          "Maintaining strong familial and social networks is crucial for emotional wellbeing.",
        exampleTranslation:
          "Việc duy trì mạng lưới quan hệ gia đình và xã hội mạnh mẽ là rất quan trọng cho sức khỏe tinh thần.",
      },
      {
        id: 143,
        word: "Commonplace",
        pronunciation: "/ˈkɒmənpleɪs/",
        meaning: "Phổ biến, thông thường, không còn lạ lẫm",
        note: "Tính từ chỉ điều gì đó đã trở nên phổ biến đến mức không còn đáng ngạc nhiên. Trang trọng hơn 'common' hay 'normal'. Cấu trúc hay: 'has become commonplace' (đã trở nên phổ biến) — dùng trong mở bài để xác nhận xu hướng trước khi đưa ra quan điểm. Đồng nghĩa: widespread, prevalent, routine.",
        example:
          "Remote work has become commonplace in many industries, allowing flexibility in work locations.",
        exampleTranslation:
          "Làm việc từ xa đã trở nên phổ biến trong nhiều ngành, cho phép linh hoạt về vị trí làm việc.",
      },
      {
        id: 144,
        word: "A myriad of career opportunities",
        pronunciation: "/ə ˈmɪriəd əv kəˈrɪər ˌɒpəˈtjuːnɪtɪz/",
        meaning: "Vô số cơ hội nghề nghiệp",
        note: "'A myriad of' = vô số, rất nhiều (từ gốc Hy Lạp 'myrias' = 10,000). Đây là cách diễn đạt học thuật và văn chương, trang trọng hơn 'many' hay 'a lot of'. Thường đi với danh từ số nhiều. Biến thể: 'myriad opportunities' (không cần 'a... of'). Rất ấn tượng trong bài IELTS Band 7+.",
        example:
          "Graduates today face a myriad of career opportunities, making it challenging to choose a single path.",
        exampleTranslation:
          "Các sinh viên tốt nghiệp ngày nay đối mặt với nhiều cơ hội nghề nghiệp, khiến việc chọn một con đường trở nên khó khăn.",
      },
      {
        id: 145,
        word: "Rapid career progression",
        pronunciation: "/ˈræpɪd kəˈrɪər prəˈɡrɛʃən/",
        meaning: "Sự thăng tiến nhanh chóng trong sự nghiệp",
        note: "'Progression' (sự tiến bộ, thăng tiến theo từng bước) khác với 'progress' (tiến độ nói chung). 'Rapid career progression' gợi ý việc leo thang sự nghiệp nhanh hơn bình thường. Phổ biến trong bài về việc làm và phát triển nghề nghiệp. Đồng nghĩa: swift professional advancement, fast-tracked career growth.",
        example:
          "The tech industry is known for offering rapid career progression for those who are highly skilled.",
        exampleTranslation:
          "Ngành công nghệ được biết đến với việc cung cấp cơ hội thăng tiến nhanh chóng cho những người có kỹ năng cao.",
      },
      {
        id: 146,
        word: "Invaluable life experiences",
        pronunciation: "/ɪnˈvæljuəbl laɪf ɪkˈspɪəriənsɪz/",
        meaning: "Những trải nghiệm sống vô cùng quý giá",
        note: "'Invaluable' = cực kỳ có giá trị, không thể định giá được (KHÔNG phải 'vô giá trị'). Kết hợp với 'life experiences' tạo thành cụm mạnh nhấn mạnh giá trị của những trải nghiệm thực tế trong cuộc đời. Thường dùng khi lập luận về lợi ích cá nhân của di dân, du học, hoặc khám phá nơi mới.",
        example:
          "Traveling abroad provides invaluable life experiences that can shape one's perspective and understanding.",
        exampleTranslation:
          "Du lịch nước ngoài mang lại những kinh nghiệm sống quý báu có thể hình thành quan điểm và hiểu biết của một người.",
      },
      {
        id: 147,
        word: "Enrich personal development",
        pronunciation: "/ɪnˈrɪtʃ ˈpɜːsənl dɪˈvɛləpmənt/",
        meaning: "Làm phong phú/nâng cao sự phát triển cá nhân",
        note: "'Enrich' (làm phong phú, làm giàu thêm) mạnh hơn 'improve' hay 'enhance', hàm ý thêm chiều sâu và giá trị. 'Personal development' chỉ quá trình phát triển bản thân về mọi mặt. Cụm hay: 'enrich personal development and broaden one's worldview'. Thường xuất hiện trong bài về giáo dục, du lịch, hay trải nghiệm mới.",
        example:
          "Engaging in volunteer work can enrich personal development by fostering empathy and social skills.",
        exampleTranslation:
          "Tham gia công tác tình nguyện có thể phát triển cá nhân sâu rộng bằng cách nuôi dưỡng lòng thương cảm và kỹ năng xã hội.",
      },
      {
        id: 148,
        word: "Long-lasting implications",
        pronunciation: "/ˈlɒŋlɑːstɪŋ ˌɪmplɪˈkeɪʃənz/",
        meaning: "Những hệ lụy lâu dài, hậu quả kéo dài",
        note: "'Long-lasting' (tính từ ghép, luôn có gạch nối) = kéo dài, bền lâu. 'Implications' (hệ lụy, tác động tiềm ẩn) trang trọng hơn 'consequences' hay 'effects'. Cụm này nhấn mạnh tính nghiêm trọng và lâu dài của hậu quả. Thường đứng sau 'carry' hoặc 'have': 'carry long-lasting implications'.",
        example:
          "Decisions made early in one's career can have long-lasting implications for future opportunities.",
        exampleTranslation:
          "Những quyết định được đưa ra ở đầu sự nghiệp có thể có những hậu quả lâu dài đối với các cơ hội trong tương lai.",
      },
      {
        id: 149,
        word: "Feelings of isolation",
        pronunciation: "/ˈfiːlɪŋz əv ˌaɪsəˈleɪʃən/",
        meaning: "Cảm giác cô đơn, cô lập và tách biệt",
        note: "'Isolation' (sự cô lập) mạnh hơn 'loneliness', hàm ý trạng thái bị tách rời hoàn toàn khỏi cộng đồng xã hội. Thường đi với 'feelings of' hoặc 'a sense of'. Cụm đầy đủ hay gặp: 'feelings of isolation, loneliness, and sometimes depression' — liệt kê ba trạng thái tâm lý tiêu cực theo mức độ tăng dần.",
        example:
          "Moving to a new city without any acquaintances can lead to feelings of isolation.",
        exampleTranslation:
          "Chuyển đến một thành phố mới mà không có bất kỳ sự quen biết nào có thể dẫn đến cảm giác cô đơn, tách biệt.",
      },
      {
        id: 150,
        word: "A profound sense of disconnection",
        pronunciation: "/ə prəˈfaʊnd sɛns əv ˌdɪskəˈnɛkʃən/",
        meaning: "Cảm giác tách biệt sâu sắc, cảm giác mất đi sự kết nối",
        note: "'Profound' (sâu sắc, mạnh mẽ) nhấn mạnh mức độ cảm xúc rất lớn và ảnh hưởng sâu. 'Disconnection' (sự mất kết nối) diễn tả sự đứt gãy của các mối liên kết xã hội hoặc cảm xúc. Cụm này xuất hiện trong ngữ cảnh mô tả cảm xúc của người đã di chuyển xa và nhớ gia đình.",
        example:
          "Working remotely for extended periods can sometimes lead to a profound sense of disconnection from colleagues.",
        exampleTranslation:
          "Làm việc từ xa trong thời gian dài có thể đôi khi dẫn đến cảm giác tách biệt sâu sắc với đồng nghiệp.",
      },
      {
        id: 151,
        word: "Upheaval",
        pronunciation: "/ʌpˈhiːvəl/",
        meaning: "Biến động lớn, sự xáo trộn gây hỗn loạn và mất ổn định",
        note: "Danh từ mạnh, hình ảnh (từ 'heave' = nâng lên mạnh), chỉ sự gián đoạn lớn làm đảo lộn trật tự cũ. Thường dùng cho các thay đổi lớn trong xã hội, gia đình, hoặc tổ chức. Mạnh hơn 'disruption' hay 'disturbance'. Cấu trúc hay: 'the upheaval affects not just X but Y as well'.",
        example:
          "The company's merger caused an upheaval that affected many employees' roles and responsibilities.",
        exampleTranslation:
          "Việc sáp nhập công ty đã gây ra một biến động lớn ảnh hưởng đến vai trò và trách nhiệm của nhiều nhân viên.",
      },
      {
        id: 152,
        word: "Close-knit community support",
        pronunciation: "/ˈkləʊs nɪt kəˈmjuːnɪti səˈpɔːt/",
        meaning: "Sự hỗ trợ của cộng đồng khăng khít, gắn bó",
        note: "'Close-knit' (tính từ ghép, luôn có gạch nối) = khăng khít, gắn bó chặt chẽ như những mũi đan (knit). Cụm này gợi lên hình ảnh cộng đồng nơi mọi người kết nối chặt chẽ và hỗ trợ nhau. Thường dùng trong bài về cộng đồng địa phương, gia đình, hoặc lý do không nên rời xa quê hương.",
        example:
          "The close-knit community support in small towns often makes it easier to overcome personal challenges.",
        exampleTranslation:
          "Sự hỗ trợ của một cộng đồng khăng khít ở các thị trấn nhỏ thường làm cho việc vượt qua thách thức cá nhân trở nên dễ dàng hơn.",
      },
      {
        id: 153,
        word: "Potential strain on personal relationships",
        pronunciation: "/pəˈtɛnʃəl streɪn ɒn ˈpɜːsənl rɪˈleɪʃənʃɪps/",
        meaning: "Áp lực tiềm ẩn lên các mối quan hệ cá nhân",
        note: "'Strain' (áp lực, căng thẳng) là danh từ/động từ gợi hình ảnh dây căng sắp đứt. 'Potential' (tiềm ẩn) hàm ý nguy cơ chưa xảy ra nhưng có thể xảy ra. Cụm hay trong kết luận: 'the potential strain on personal relationships render the costs too high'. 'Render' (khiến cho) là từ học thuật thay cho 'make'.",
        example:
          "Frequent business trips can cause potential strain on personal relationships, leading to conflicts and misunderstandings.",
        exampleTranslation:
          "Những chuyến công tác thường xuyên có thể gây áp lực lên mối quan hệ cá nhân, dẫn đến xung đột và hiểu lầm.",
      },
    ],
  },
  // ==========================================
  // W6 - Task 1: Australian Workforce Mixed Charts (Pie + Line)
  // ==========================================
  {
    id: "wr_w6_task1_workforce_charts",
    skill: "Writing",
    volume: "9",
    topic: "Work / Society",
    part: "Task 1 - Australian Workforce Mixed Charts (Pie + Line)",
    cards: [
      {
        id: 154,
        word: "Overwhelming majority",
        pronunciation: "/ˌəʊvəˈwɛlmɪŋ məˈdʒɒrɪti/",
        meaning: "Đa số áp đảo, phần lớn vượt trội hơn hẳn",
        note: "Cụm danh từ cực kỳ phổ biến trong Task 1 dạng Pie chart khi muốn nhấn mạnh một nhóm chiếm tỷ lệ rất lớn. 'Overwhelming' (áp đảo) mạnh hơn nhiều so với 'large' hay 'significant'. Cấu trúc chuẩn: 'the overwhelming majority of X was/were Y'. Đồng nghĩa: the vast majority, the lion's share.",
        example:
          "An overwhelming majority of voters support the new environmental policy.",
        exampleTranslation:
          "Đa số áp đảo cử tri ủng hộ chính sách môi trường mới.",
      },
      {
        id: 155,
        word: "Labor force",
        pronunciation: "/ˈleɪbə fɔːs/",
        meaning:
          "Lực lượng lao động (tổng số người lao động có và không có việc làm)",
        note: "Cụm danh từ chuyên ngành kinh tế quan trọng. Phân biệt: 'labor force' (toàn bộ người có thể làm việc) vs. 'workforce' (người đang làm việc thực tế). Cả hai đều dùng được trong Task 1, nhưng 'labor force' mang tính học thuật hơn. Viết hoa: Labour force (Anh-Anh), Labor force (Mỹ).",
        example:
          "The national labor force has grown significantly with the increase in population.",
        exampleTranslation:
          "Lực lượng lao động quốc gia đã tăng đáng kể với sự tăng dân số.",
      },
      {
        id: 156,
        word: "Origins",
        pronunciation: "/ˈɒrɪdʒɪnz/",
        meaning: "Nguồn gốc, xuất xứ",
        note: "Danh từ số nhiều dùng làm từ chuyển tiếp chủ đề (topic word) khi mô tả biểu đồ tròn về nơi sinh hoặc xuất xứ. Cấu trúc hay trong Task 1: 'Regarding the origins of the workforce...' (Về nguồn gốc của lực lượng lao động...) — đây là cách mở đầu đoạn thân bài thanh lịch thay cho 'Looking at the pie chart'.",
        example: "The origins of the festival date back to ancient times.",
        exampleTranslation: "Nguồn gốc của lễ hội trở lại từ thời cổ đại.",
      },
      {
        id: 157,
        word: "Three-fourths",
        pronunciation: "/ˌθriːˈfɔːθs/",
        meaning: "Ba phần tư (75%)",
        note: "Phân số quan trọng thay thế cho '75%' trong Task 1 để tránh lặp cách diễn đạt số liệu. Dùng khi muốn thể hiện tỷ lệ bằng phân số thay vì phần trăm. Các phân số khác hay dùng: 'two-thirds' (2/3), 'half' (1/2), 'one-fifth' (1/5). Luôn có gạch nối khi viết phân số.",
        example:
          "Three-fourths of the company's profits come from international sales.",
        exampleTranslation:
          "Ba phần tư lợi nhuận của công ty đến từ doanh số bán hàng quốc tế.",
      },
      {
        id: 158,
        word: "The joblessness levels",
        pronunciation: "/ðə ˈdʒɒbləsnəs ˈlɛvəlz/",
        meaning: "Mức độ thất nghiệp",
        note: "'Joblessness' là danh từ phái sinh từ 'jobless' (không có việc làm), dùng thay thế cho 'unemployment' để tránh lặp từ trong bài. Đây là kỹ thuật paraphrase quan trọng trong Task 1: cùng một khái niệm nhưng diễn đạt bằng từ khác. Cụm chuyển đoạn hay: 'Turning to the joblessness levels...'",
        example:
          "The joblessness levels have decreased due to new government policies.",
        exampleTranslation:
          "Mức độ thất nghiệp đã giảm do các chính sách mới của chính phủ.",
      },
      {
        id: 159,
        word: "Dominant position",
        pronunciation: "/ˈdɒmɪnənt pəˈzɪʃən/",
        meaning: "Vị trí thống trị, vị trí dẫn đầu chiếm ưu thế",
        note: "Cụm danh từ dùng khi một nhóm/quốc gia/loại dữ liệu luôn chiếm vị trí cao nhất trong suốt thời gian. Cấu trúc hay: 'held its dominant position throughout' (giữ vững vị trí thống trị xuyên suốt). Thể hiện sự bền vững và nhất quán của vị trí dẫn đầu, không chỉ tại một điểm thời gian.",
        example:
          "The company has maintained its dominant position in the tech industry for years.",
        exampleTranslation:
          "Công ty đã giữ vững vị trí thống trị trong ngành công nghệ trong nhiều năm.",
      },
      {
        id: 160,
        word: "Distantly followed by",
        pronunciation: "/ˈdɪstəntli ˈfɒləʊd baɪ/",
        meaning: "Theo sau ở khoảng cách xa, đứng sau nhưng cách biệt đáng kể",
        note: "Cụm từ quan trọng trong Task 1 Pie chart khi hai nhóm có tỷ lệ chênh lệch lớn. 'Distantly' (ở khoảng cách xa) nhấn mạnh sự cách biệt lớn giữa nhóm dẫn đầu và nhóm tiếp theo. Phân biệt: 'closely followed by' (theo sát ngay sau) vs. 'distantly followed by' (theo sau ở khoảng cách xa).",
        example:
          "This was distantly followed by NESC and ESC groups, accounting for 14% and 10% respectively.",
        exampleTranslation:
          "Theo sau ở khoảng cách xa là nhóm NESC và ESC, chiếm lần lượt 14% và 10%.",
      },
      {
        id: 161,
        word: "Mirrored this downward trend",
        pronunciation: "/ˈmɪrəd ðɪs ˈdaʊnwəd trɛnd/",
        meaning: "Phản chiếu (phản ánh gần như giống hệt) xu hướng giảm này",
        note: "'Mirror' (v) = phản chiếu, sao chép gần như hoàn toàn — ẩn dụ từ gương phản chiếu. Rất ấn tượng khi mô tả hai đường biểu đồ có xu hướng gần như giống hệt nhau. Cụm đầy đủ hay gặp: 'almost exactly mirrored this downward trend, albeit at lower rates'. Mạnh hơn và hình ảnh hơn 'showed a similar trend'.",
        example:
          "The other two categories almost exactly mirrored this downward trend, albeit at lower rates.",
        exampleTranslation:
          "Hai danh mục còn lại gần như có xu hướng giảm giống hệt vậy, mặc dù ở mức thấp hơn.",
      },
      {
        id: 162,
        word: "A breakdown of",
        pronunciation: "/ə ˈbreɪkdaʊn əv/",
        meaning: "Sự phân tích chi tiết, bảng phân loại của",
        note: "Cụm danh từ quan trọng trong mở bài Task 1 khi giới thiệu biểu đồ tròn hoặc bảng số liệu. 'Breakdown' chỉ sự phân chia một tổng thể thành các thành phần. Cấu trúc chuẩn: 'gives a breakdown of X according to Y' (cung cấp bảng phân loại X theo Y). Trang trọng hơn 'shows how X is divided'.",
        example:
          "The pie chart gives a breakdown of the Australian workforce according to their place of birth.",
        exampleTranslation:
          "Biểu đồ tròn cung cấp bảng phân loại lực lượng lao động Úc theo nơi sinh của họ.",
      },
    ],
  },

  // ==========================================
  // W6 - Task 2: Personal Information Online (Sample 1 - Positive)
  // ==========================================
  {
    id: "wr_w6_task2_data_positive",
    skill: "Writing",
    volume: "9",
    topic: "Technology / Privacy",
    part: "Task 2 - Personal Info Online (Benefits > Drawbacks)",
    cards: [
      {
        id: 163,
        word: "Private details",
        pronunciation: "/ˈpraɪvɪt ˈdiːteɪlz/",
        meaning: "Thông tin cá nhân mang tính bảo mật, thông tin riêng tư",
        note: "Cụm danh từ thay thế cho 'personal information' trong mở bài để tránh lặp từ đề bài. 'Private' nhấn mạnh tính bí mật và quyền kiểm soát của cá nhân đối với thông tin đó. Thường đi với: 'share/upload/submit private details'. Tương đương: personal data, confidential information.",
        example: "Keep your private details secure to prevent identity theft.",
        exampleTranslation:
          "Bảo vệ thông tin cá nhân mật của bạn để ngăn chặn việc đánh cắp danh tính.",
      },
      {
        id: 164,
        word: "Increasingly digital society",
        pronunciation: "/ɪnˈkriːsɪŋli ˈdɪdʒɪtəl səˈsaɪəti/",
        meaning: "Xã hội ngày càng số hóa",
        note: "Cụm danh từ mô tả bối cảnh xã hội hiện đại. 'Increasingly' (ngày càng) + 'digital' (số hóa) nhấn mạnh xu hướng không thể đảo ngược của chuyển đổi số. Thường dùng trong mở bài hoặc kết luận. Biến thể: 'our increasingly connected world', 'the digital era', 'the age of technology'.",
        example:
          "Our increasingly digital society demands better cybersecurity measures.",
        exampleTranslation:
          "Xã hội số hóa ngày càng nhiều của chúng ta đòi hỏi các biện pháp an ninh mạng tốt hơn.",
      },
      {
        id: 165,
        word: "Privacy breaches",
        pronunciation: "/ˈprɪvəsi ˈbriːtʃɪz/",
        meaning:
          "Vi phạm quyền riêng tư, truy cập trái phép vào thông tin cá nhân",
        note: "'Breach' (danh từ/động từ) = sự vi phạm, phá vỡ rào cản bảo vệ. Đây là từ kỹ thuật trong lĩnh vực bảo mật thông tin. Cụm quan trọng: 'the heightened risk of privacy breaches' (nguy cơ gia tăng về vi phạm quyền riêng tư). Cặp từ hay đi cùng: privacy breaches AND identity theft.",
        example:
          "Privacy breaches can have serious consequences for individuals.",
        exampleTranslation:
          "Vi phạm quyền riêng tư có thể có hậu quả nghiêm trọng đối với cá nhân.",
      },
      {
        id: 166,
        word: "Identity theft",
        pronunciation: "/aɪˈdɛntɪti θɛft/",
        meaning:
          "Đánh cắp danh tính, sử dụng gian lận thông tin cá nhân của người khác",
        note: "'Theft' (sự đánh cắp) là danh từ pháp lý chỉ hành vi lấy thứ gì đó của người khác mà không được phép. 'Identity theft' = hành vi sử dụng thông tin cá nhân của người khác để thực hiện gian lận. Đây là từ chủ đề quan trọng trong các bài về công nghệ và bảo mật. Thường đi cặp với 'privacy breaches'.",
        example: "Identity theft is a growing concern in our digital society.",
        exampleTranslation:
          "Đánh cắp danh tính là một mối lo ngại ngày càng tăng trong xã hội số của chúng ta.",
      },
      {
        id: 167,
        word: "Cybercriminals",
        pronunciation: "/ˈsaɪbəˌkrɪmɪnəlz/",
        meaning:
          "Tội phạm mạng, người thực hiện hành vi phạm tội trên không gian mạng",
        note: "Từ ghép từ 'cyber' (tiền tố chỉ không gian mạng) + 'criminals' (tội phạm). Từ này đặc trưng cho thời đại số và thường xuất hiện trong bài về công nghệ, quyền riêng tư, bảo mật. Cụm hay: 'cybercriminals exploit vulnerabilities' (tội phạm mạng khai thác lỗ hổng). Từ liên quan: cyberattack, cybersecurity.",
        example: "Cybercriminals exploit vulnerabilities in digital systems.",
        exampleTranslation:
          "Tội phạm mạng lợi dụng các lỗ hổng trong hệ thống số.",
      },
      {
        id: 168,
        word: "Online data sharing",
        pronunciation: "/ˈɒnlaɪn ˈdeɪtə ˈʃeərɪŋ/",
        meaning: "Chia sẻ dữ liệu trực tuyến, phân phối thông tin qua internet",
        note: "Cụm danh từ chỉ hành động chia sẻ thông tin qua mạng. Thường đi với: 'vulnerabilities associated with online data sharing' (lỗ hổng liên quan đến chia sẻ dữ liệu trực tuyến). Đây là cụm paraphrase cho 'uploading personal information online' từ đề bài. Liên quan: data protection, data privacy.",
        example:
          "Online data sharing facilitates collaboration but also poses privacy risks.",
        exampleTranslation:
          "Chia sẻ dữ liệu trực tuyến thúc đẩy sự hợp tác nhưng cũng đặt ra rủi ro về quyền riêng tư.",
      },
      {
        id: 169,
        word: "Enhanced convenience",
        pronunciation: "/ɪnˈhɑːnst kənˈviːniəns/",
        meaning: "Sự tiện lợi được cải thiện và nâng cao",
        note: "'Enhanced' (được tăng cường, cải thiện) là tính từ học thuật thay cho 'better' hay 'improved'. 'Convenience' (sự tiện lợi, thuận tiện) là lợi ích thường được nhắc đến nhất khi nói về công nghệ. Cụm hay: 'the enhanced convenience of everyday transactions and communications'. Thường đi với: 'offer/provide enhanced convenience'.",
        example:
          "Online banking offers enhanced convenience for managing finances.",
        exampleTranslation:
          "Ngân hàng trực tuyến mang lại sự tiện lợi được cải thiện trong việc quản lý tài chính.",
      },
      {
        id: 170,
        word: "Instant transfers",
        pronunciation: "/ˈɪnstənt ˈtrænsfɜːz/",
        meaning: "Chuyển khoản tức thì, giao dịch diễn ra ngay lập tức",
        note: "'Instant' (tức thì, ngay lập tức) nhấn mạnh tốc độ của giao dịch số so với giao dịch truyền thống. Cụm này thường được dùng làm ví dụ cụ thể minh họa lợi ích của ngân hàng trực tuyến. Liên quan: real-time transactions, immediate payments, digital transfers.",
        example: "Instant transfers make sending money abroad quick and easy.",
        exampleTranslation:
          "Chuyển khoản tức thì làm cho việc gửi tiền ra nước ngoài nhanh chóng và dễ dàng.",
      },
      {
        id: 171,
        word: "Geographical barriers",
        pronunciation: "/ˌdʒiːəˈɡræfɪkəl ˈbæriəz/",
        meaning: "Rào cản địa lý, các trở ngại về khoảng cách và vị trí",
        note: "Cụm danh từ thường đi với 'overcome' (vượt qua): 'overcome geographical barriers'. Đây là lợi ích điển hình của mạng xã hội và công nghệ truyền thông. Tương đương: physical distance, spatial boundaries. Biến thể: 'irrespective of their physical location' (bất kể vị trí thực tế của họ).",
        example: "Technology helps overcome geographical barriers in business.",
        exampleTranslation:
          "Công nghệ giúp vượt qua rào cản địa lý trong kinh doanh.",
      },
      {
        id: 172,
        word: "Social interactions",
        pronunciation: "/ˈsəʊʃəl ˌɪntərˈækʃənz/",
        meaning: "Giao tiếp xã hội, sự tương tác và kết nối với người khác",
        note: "Cụm danh từ chỉ các hoạt động trao đổi và kết nối giữa người với người. Trong bài về công nghệ, 'enrich social interactions' (làm phong phú giao tiếp xã hội) thường được dùng để lập luận rằng mạng xã hội có lợi. Phân biệt: 'social interactions' (giao tiếp xã hội nói chung) vs. 'face-to-face interactions' (giao tiếp trực tiếp).",
        example: "Social interactions are vital for mental health.",
        exampleTranslation:
          "Giao tiếp xã hội rất quan trọng cho sức khỏe tâm thần.",
      },
      {
        id: 173,
        word: "A significant leap",
        pronunciation: "/ə sɪɡˈnɪfɪkənt liːp/",
        meaning: "Bước tiến lớn, sự nhảy vọt đáng kể",
        note: "'Leap' (danh từ/động từ) = bước nhảy lớn, tiến bộ đột phá. Ẩn dụ từ hành động nhảy — gợi ý sự tiến bộ nhanh chóng và đáng kể, không phải dần dần. Trang trọng hơn và hình ảnh hơn 'a big step' hay 'a major advancement'. Cụm hay trong kết luận: 'represents a significant leap towards...'.",
        example:
          "The internet represented a significant leap in global communication.",
        exampleTranslation:
          "Internet đại diện cho một bước tiến lớn trong giao tiếp toàn cầu.",
      },
    ],
  },

  // ==========================================
  // W6 - Task 2: Personal Information Online (Sample 2 - Negative)
  // ==========================================
  {
    id: "wr_w6_task2_data_negative",
    skill: "Writing",
    volume: "9",
    topic: "Technology / Privacy",
    part: "Task 2 - Personal Info Online (Drawbacks > Benefits)",
    cards: [
      {
        id: 183,
        word: "Financial management",
        pronunciation: "/faɪˈnænʃəl ˈmænɪdʒmənt/",
        meaning: "Quản lý tài chính, kiểm soát và phân bổ nguồn lực tài chính",
        note: "Cụm danh từ chỉ quá trình lập kế hoạch, tổ chức và kiểm soát các hoạt động tài chính. Trong bài về ngân hàng trực tuyến, 'financial management' là lợi ích cụ thể mà người dùng được hưởng. Thường đi với: 'allows for/enables financial management without visiting a bank'. Đồng nghĩa: money management, fiscal management.",
        example:
          "Effective financial management is crucial for achieving financial stability.",
        exampleTranslation:
          "Quản lý tài chính hiệu quả là rất quan trọng để đạt được sự ổn định tài chính.",
      },
    ],
  },
  // ==========================================
  // W7 - Task 1: Unemployment Rates (UK, EU, Japan 1993–2007)
  // ==========================================
  {
    id: "wr_w7_task1_unemployment",
    skill: "Writing",
    volume: "9",
    topic: "Economics / Employment",
    part: "Task 1 - Unemployment Rates (UK, EU, Japan)",
    cards: [
      {
        id: 184,
        word: "Joblessness levels",
        pronunciation: "/ˈdʒɒbləsnəs ˈlevəlz/",
        meaning:
          "Tỷ lệ thất nghiệp, mức độ không có việc làm trong nền kinh tế",
        note: "Cụm danh từ dùng để diễn đạt 'unemployment rate' theo cách học thuật hơn. Trong Task 1 bài về thất nghiệp, đây là từ thay thế quan trọng tránh lặp từ 'unemployment'. Thường đi với: 'changes in joblessness levels', 'rising/falling joblessness levels'. Đồng nghĩa: unemployment rates, unemployment figures.",
        example:
          "The economic crisis led to an increase in the joblessness levels.",
        exampleTranslation:
          "Cuộc khủng hoảng kinh tế đã dẫn đến sự tăng lên của tỷ lệ thất nghiệp.",
      },
      {
        id: 185,
        word: "Unemployment figures",
        pronunciation: "/ˌʌnɪmˈplɔɪmənt ˈfɪɡəz/",
        meaning:
          "Số liệu thất nghiệp, dữ liệu thống kê về người không có việc làm",
        note: "Cụm danh từ chỉ dữ liệu thống kê cụ thể về tỷ lệ thất nghiệp. Khác với 'unemployment rate' (tỷ lệ phần trăm), 'figures' mang nghĩa rộng hơn, bao gồm cả con số thực tế. Thường đi với: 'unemployment figures were consistently higher/lower than', 'rising/falling unemployment figures'. Đồng nghĩa: joblessness levels, unemployment data.",
        example:
          "The government is concerned about the rising unemployment figures.",
        exampleTranslation:
          "Chính phủ lo ngại về việc số liệu thất nghiệp tăng lên.",
      },
      {
        id: 186,
        word: "Jobless people",
        pronunciation: "/ˈdʒɒbləs ˈpiːpəl/",
        meaning: "Người thất nghiệp, những cá nhân không có việc làm",
        note: "Cụm danh từ dùng 'jobless' như tính từ bổ nghĩa cho 'people', thay thế cho 'unemployed people'. Trong Task 1, dùng để tránh lặp từ khi đề cập đến những người không có công việc. Thường đi với: 'the percentage of jobless people', 'support for jobless people'. Đồng nghĩa: unemployed individuals, the unemployed.",
        example:
          "Support services are essential for helping jobless people find work.",
        exampleTranslation:
          "Các dịch vụ hỗ trợ là thiết yếu để giúp người thất nghiệp tìm việc làm.",
      },
      {
        id: 187,
        word: "Plummet",
        pronunciation: "/ˈplʌmɪt/",
        meaning: "Giảm mạnh và nhanh chóng, rơi thẳng xuống với tốc độ cao",
        note: "Động từ mô tả sự giảm mạnh và đột ngột, mạnh hơn 'decrease' hay 'fall'. Rất phổ biến trong Task 1 khi mô tả xu hướng giảm sâu. Thường đi với: 'plummeted to a low of X%', 'plummeted sharply'. Đồng nghĩa: drop sharply, fall dramatically, nosedive. Trái nghĩa: soar, rocket, surge.",
        example: "Stock prices began to plummet after the announcement.",
        exampleTranslation: "Giá cổ phiếu bắt đầu giảm mạnh sau thông báo.",
      },
      {
        id: 188,
        word: "A subsequent leveling off",
        pronunciation: "/ə ˈsʌbsɪkwənt ˈlevəlɪŋ ɒf/",
        meaning:
          "Sự ổn định tiếp theo sau đó, giai đoạn không thay đổi sau một chuỗi biến động",
        note: "Cụm danh từ kết hợp 'subsequent' (tiếp theo sau đó) và 'leveling off' (ổn định, không tăng không giảm). Dùng trong Task 1 để mô tả giai đoạn dữ liệu đi ngang sau khi tăng hoặc giảm. Thường đi với: 'with a subsequent leveling off over the following X years', 'followed by a leveling off'. Đồng nghĩa: a subsequent stabilization, a subsequent plateau.",
        example:
          "After a rapid increase, there was a subsequent leveling off in demand.",
        exampleTranslation:
          "Sau sự tăng trưởng nhanh chóng, đã có sự ổn định về nhu cầu sau đó.",
      },
    ],
  },

  // ==========================================
  // W7 - Task 2: Parental Pressure on Children (Sample 1 - Positive)
  // ==========================================
  {
    id: "wr_w7_task2_parental_positive",
    skill: "Writing",
    volume: "9",
    topic: "Society / Education / Parenting",
    part: "Task 2 - Parental Pressure (Beneficial)",
    cards: [
      {
        id: 189,
        word: "Underlying reasons",
        pronunciation: "/ˌʌndəˈlaɪɪŋ ˈriːzənz/",
        meaning: "Nguyên nhân cơ bản, lý do nằm sâu bên dưới bề mặt hiện tượng",
        note: "Cụm danh từ dùng 'underlying' (cơ bản, tiềm ẩn) để chỉ các nguyên nhân gốc rễ chứ không phải biểu hiện bên ngoài. Phổ biến trong phần giới thiệu bài Task 2 khi phân tích nguyên nhân. Thường đi với: 'delve into the underlying reasons for', 'explore the underlying reasons behind'. Đồng nghĩa: root causes, fundamental reasons, core reasons.",
        example:
          "The underlying reasons for the economic crisis were not immediately apparent.",
        exampleTranslation:
          "Nguyên nhân cơ bản của cuộc khủng hoảng kinh tế không ngay lập tức được nhận biết.",
      },
      {
        id: 190,
        word: "Beneficial impact",
        pronunciation: "/ˌbenɪˈfɪʃəl ˈɪmpækt/",
        meaning:
          "Tác động tích cực, ảnh hưởng có lợi lên một đối tượng hay tình huống",
        note: "Cụm danh từ thường xuất hiện trong thesis statement của bài Task 2 khi người viết muốn nêu quan điểm tích cực. Thường đi với: 'argue for the beneficial impact of', 'have a beneficial impact on'. Đồng nghĩa: positive effect, advantageous influence. Trái nghĩa: detrimental impact, adverse effect.",
        example:
          "The new policy had a beneficial impact on the community's health.",
        exampleTranslation:
          "Chính sách mới đã có ảnh hưởng tích cực đến sức khỏe của cộng đồng.",
      },
      {
        id: 191,
        word: "Heightened expectations of parents",
        pronunciation: "/ˈhaɪtənd ˌekspekˈteɪʃənz əv ˈpeərənts/",
        meaning:
          "Kỳ vọng tăng cao của cha mẹ, những đòi hỏi và mong đợi ngày càng cao từ phụ huynh",
        note: "Cụm danh từ dùng 'heightened' (được nâng cao, tăng cường) để diễn tả mức độ kỳ vọng đang gia tăng. Thay thế tự nhiên cho 'high parental expectations'. Thường đi với: 'the heightened expectations of parents stem from', 'driven by heightened expectations'. Đồng nghĩa: elevated parental expectations, intensified parental standards.",
        example:
          "The heightened expectations of parents can sometimes put too much pressure on children.",
        exampleTranslation:
          "Kỳ vọng tăng cao của cha mẹ đôi khi tạo áp lực quá lớn lên trẻ em.",
      },
      {
        id: 192,
        word: "Secure a prosperous future",
        pronunciation: "/sɪˈkjʊər ə ˈprɒspərəs ˈfjuːtʃər/",
        meaning:
          "Đảm bảo một tương lai thịnh vượng, đạt được một tương lai giàu có và thành công",
        note: "Cụm động từ kết hợp 'secure' (đảm bảo, đạt được) với 'prosperous future' (tương lai thịnh vượng). Rất hay xuất hiện trong phần phân tích lý do cha mẹ tạo áp lực. Thường đi với: 'desire for their children to secure a prosperous future', 'help children secure a prosperous future'. Đồng nghĩa: ensure a bright/successful future, guarantee a thriving future.",
        example: "She's working hard in school to secure a prosperous future.",
        exampleTranslation:
          "Cô ấy đang học chăm chỉ để đảm bảo một tương lai thành công.",
      },
      {
        id: 193,
        word: "Academic excellence",
        pronunciation: "/ˌækəˈdemɪk ˈeksələns/",
        meaning:
          "Thành tích học thuật cao, sự xuất sắc trong các hoạt động học tập",
        note: "Cụm danh từ chỉ mức thành tích cao nhất trong môi trường giáo dục. Rất phổ biến trong bài viết về giáo dục và áp lực học tập. Thường đi với: 'strive for/achieve academic excellence', 'emphasis on academic excellence'. Đồng nghĩa: scholastic achievement, high academic performance. Phân biệt: 'academic performance' (kết quả học tập nói chung) vs 'academic excellence' (xuất sắc, vượt trội).",
        example: "She was awarded a scholarship for her academic excellence.",
        exampleTranslation:
          "Cô ấy được trao học bổng vì thành tích học thuật cao.",
      },
      {
        id: 194,
        word: "A deep-seated commitment",
        pronunciation: "/ə ˌdiːpˈsiːtɪd kəˈmɪtmənt/",
        meaning: "Cam kết sâu sắc và bền vững, sự tận tâm ăn sâu vào bản chất",
        note: "Cụm danh từ dùng 'deep-seated' (ăn sâu, căn cơ) để nhấn mạnh sự cam kết không phải bề ngoài mà xuất phát từ tận cùng nội tâm. Thường đi với: 'illustrating a deep-seated commitment to', 'show a deep-seated commitment to'. Đồng nghĩa: profound dedication, unwavering commitment. Lưu ý: 'deep-seated' thường đi với các cảm xúc hoặc thái độ mang tính lâu dài như belief, prejudice, commitment.",
        example: "He has a deep-seated commitment to social justice.",
        exampleTranslation: "Anh ấy có cam kết sâu sắc với công lý xã hội.",
      },
      {
        id: 195,
        word: "Parental pressure",
        pronunciation: "/pəˈrentəl ˈpreʃər/",
        meaning:
          "Áp lực từ cha mẹ, căng thẳng hoặc kỳ vọng mà cha mẹ đặt lên con cái",
        note: "Cụm danh từ cốt lõi của bài Task 2 này. 'Parental' là tính từ chỉ liên quan đến cha mẹ. Thay thế tự nhiên cho 'pressure from parents'. Thường đi với: 'positive/negative ramifications of parental pressure', 'exert parental pressure on'. Đồng nghĩa: pressure from parents, parental demands, parental expectations.",
        example: "Parental pressure can sometimes lead to student burnout.",
        exampleTranslation:
          "Áp lực từ phía cha mẹ đôi khi dẫn đến kiệt sức cho học sinh.",
      },
      {
        id: 196,
        word: "Strong work ethic",
        pronunciation: "/strɒŋ wɜːk ˈeθɪk/",
        meaning:
          "Đạo đức làm việc nghiêm túc, tinh thần chăm chỉ và tận tụy trong công việc",
        note: "Cụm danh từ chỉ tập hợp các nguyên tắc đạo đức liên quan đến sự chăm chỉ và cống hiến. Đây là một trong những lợi ích tích cực khi trẻ được rèn luyện dưới áp lực. Thường đi với: 'develop a strong work ethic', 'instill a strong work ethic'. Đồng nghĩa: diligence, industriousness, dedication to hard work.",
        example: "A strong work ethic is essential for career advancement.",
        exampleTranslation:
          "Đạo đức làm việc nghiêm túc là điều thiết yếu cho sự thăng tiến trong sự nghiệp.",
      },
      {
        id: 197,
        word: "Navigate life's challenges",
        pronunciation: "/ˈnævɪɡeɪt laɪvz ˈtʃælɪndʒɪz/",
        meaning:
          "Vượt qua khó khăn cuộc sống, tìm cách đối phó và giải quyết những thử thách trong cuộc đời",
        note: "Cụm động từ dùng ẩn dụ 'navigate' (điều hướng như lái thuyền) để diễn tả khả năng xử lý các khó khăn một cách khéo léo. Thường đi với: 'equip them with the ability to navigate life's challenges', 'help people navigate life's challenges more effectively'. Đồng nghĩa: overcome difficulties, cope with life's obstacles, deal with adversity.",
        example: "Resilience is key to navigate life's challenges.",
        exampleTranslation:
          "Sự kiên cường là chìa khóa để vượt qua khó khăn cuộc sống.",
      },
      {
        id: 198,
        word: "Professional success",
        pronunciation: "/prəˈfeʃənəl səkˈses/",
        meaning:
          "Thành công nghề nghiệp, những thành tựu và kết quả đạt được trong sự nghiệp",
        note: "Cụm danh từ chỉ sự thành đạt trong môi trường công việc chuyên nghiệp. Thường dùng trong các bài về giáo dục, sự nghiệp, áp lực xã hội. Thường đi với: 'prepare them for professional success', 'achieve professional success'. Đồng nghĩa: career achievement, occupational success. Phân biệt: 'professional success' (thành công nghề nghiệp cụ thể) vs 'personal success' (thành công cá nhân).",
        example:
          "Networking is often a critical factor in professional success.",
        exampleTranslation:
          "Mạng lưới quan hệ thường là yếu tố quan trọng trong thành công nghề nghiệp.",
      },
      {
        id: 199,
        word: "Valuable life skills",
        pronunciation: "/ˈvæljuəbəl laɪf skɪlz/",
        meaning:
          "Kỹ năng sống quan trọng, những năng lực thiết yếu giúp con người tham gia hiệu quả vào cuộc sống hàng ngày",
        note: "Cụm danh từ chỉ các kỹ năng thực tiễn có giá trị cao trong cuộc sống, không chỉ trong học thuật. Thường xuất hiện khi liệt kê lợi ích của giáo dục hoặc rèn luyện. Thường đi với: 'instill valuable life skills', 'develop/acquire valuable life skills'. Đồng nghĩa: essential life skills, practical skills, transferable skills.",
        example:
          "Critical thinking and communication are valuable life skills.",
        exampleTranslation:
          "Tư duy phản biện và giao tiếp là kỹ năng sống quan trọng.",
      },
      {
        id: 200,
        word: "Cultivation of essential skills",
        pronunciation: "/ˌkʌltɪˈveɪʃən əv ɪˈsenʃəl skɪlz/",
        meaning:
          "Sự phát triển và trau dồi các kỹ năng cần thiết, quá trình nuôi dưỡng và hoàn thiện những năng lực quan trọng",
        note: "Cụm danh từ dùng 'cultivation' (vốn nghĩa là canh tác, gieo trồng) theo nghĩa bóng để chỉ quá trình phát triển kỹ năng từng bước. Mang sắc thái tích cực, chủ động hơn 'development of skills'. Thường đi với: 'results in the cultivation of essential skills', 'focus on the cultivation of essential skills'. Đồng nghĩa: development of crucial abilities, nurturing of key skills.",
        example:
          "The education system should focus on the cultivation of essential skills.",
        exampleTranslation:
          "Hệ thống giáo dục nên tập trung vào việc phát triển kỹ năng cần thiết.",
      },
    ],
  },

  // ==========================================
  // W7 - Task 2: Parental Pressure on Children (Sample 2 - Negative)
  // ==========================================
  {
    id: "wr_w7_task2_parental_negative",
    skill: "Writing",
    volume: "9",
    topic: "Society / Education / Parenting",
    part: "Task 2 - Parental Pressure (Harmful)",
    cards: [
      {
        id: 201,
        word: "Attain success",
        pronunciation: "/əˈteɪn səkˈses/",
        meaning: "Đạt được thành công, hoàn thành mục tiêu ở mức độ mong muốn",
        note: "Cụm động từ dùng 'attain' (đạt tới, giành được qua nỗ lực) thay cho 'achieve success'. 'Attain' mang hàm ý nỗ lực lâu dài để đạt tới một đích cao hơn. Thường đi với: 'pressure on their offspring to attain success', 'strive to attain success'. Đồng nghĩa: achieve success, accomplish goals, reach one's potential. Lưu ý: 'attain' thường dùng với danh từ trừu tượng như success, goal, standard.",
        example: "Hard work and perseverance are crucial to attain success.",
        exampleTranslation:
          "Làm việc chăm chỉ và kiên trì là rất quan trọng để đạt được thành công.",
      },
      {
        id: 202,
        word: "Deleterious effects",
        pronunciation: "/ˌdelɪˈtɪəriəs ɪˈfekts/",
        meaning:
          "Hậu quả có hại, tác động gây tổn hại nghiêm trọng đến một đối tượng",
        note: "Cụm danh từ học thuật cao, 'deleterious' là từ trang trọng thay cho 'harmful' hay 'damaging'. Thường xuất hiện trong thesis statement khi người viết muốn nêu quan điểm tiêu cực mạnh mẽ. Thường đi với: 'have deleterious effects on', 'posit that such phenomenon has deleterious effects'. Đồng nghĩa: harmful consequences, detrimental effects, adverse impacts.",
        example: "Pollution has deleterious effects on the environment.",
        exampleTranslation:
          "Ô nhiễm có những hậu quả có hại đối với môi trường.",
      },
      {
        id: 203,
        word: "Contemporary job market",
        pronunciation: "/kənˈtempərəri dʒɒb ˈmɑːkɪt/",
        meaning:
          "Thị trường việc làm đương đại, thực trạng cơ hội và điều kiện tuyển dụng hiện nay",
        note: "Cụm danh từ dùng 'contemporary' (đương đại, hiện thời) thay cho 'current' hay 'modern'. Thường được dùng trong phần phân tích nguyên nhân xã hội. Thường đi với: 'the escalating competitiveness of the contemporary job market', 'demands of the contemporary job market'. Đồng nghĩa: current labor market, modern employment landscape, today's job market.",
        example: "The contemporary job market demands a wide range of skills.",
        exampleTranslation:
          "Thị trường việc làm hiện đại đòi hỏi một loạt các kỹ năng.",
      },
      {
        id: 204,
        word: "A pivotal indicator",
        pronunciation: "/ə ˈpɪvətəl ˈɪndɪkeɪtər/",
        meaning:
          "Dấu hiệu then chốt, thước đo hoặc chỉ số quan trọng nhất để đánh giá điều gì đó",
        note: "Cụm danh từ dùng 'pivotal' (then chốt, mang tính bước ngoặt) mạnh hơn 'important' hay 'key'. Thường xuất hiện khi phân tích các yếu tố đánh giá thành công trong xã hội. Thường đi với: 'a pivotal indicator of success', 'serve as a pivotal indicator of'. Đồng nghĩa: a key measure, a crucial benchmark, a central indicator.",
        example:
          "Graduation rates are a pivotal indicator of educational quality.",
        exampleTranslation:
          "Tỷ lệ tốt nghiệp là một chỉ báo then chốt về chất lượng giáo dục.",
      },
      {
        id: 205,
        word: "Societal and peer comparisons",
        pronunciation: "/səˈsaɪətəl ənd pɪər kəmˈpærɪsənz/",
        meaning:
          "So sánh xã hội và đồng trang lứa, những đánh giá giữa cá nhân với người khác trong xã hội hoặc nhóm bạn bè",
        note: "Cụm danh từ kết hợp hai loại so sánh: 'societal' (ở cấp độ xã hội rộng) và 'peer' (trong nhóm đồng trang lứa). Thường xuất hiện khi giải thích tại sao cha mẹ tạo áp lực. Thường đi với: 'the influence of societal and peer comparisons', 'driven by societal and peer comparisons'. Đồng nghĩa: social benchmarking, comparative pressure from society and peers.",
        example:
          "Societal and peer comparisons can significantly influence self-esteem.",
        exampleTranslation:
          "So sánh xã hội và bạn bè đồng trang lứa có thể ảnh hưởng đáng kể đến lòng tự tôn.",
      },
      {
        id: 206,
        word: "Fall behind",
        pronunciation: "/fɔːl bɪˈhaɪnd/",
        meaning:
          "Tụt lại phía sau, chậm hơn hoặc kém hơn so với những người xung quanh trong tiến độ hay thành tích",
        note: "Cụm động từ phrasal verb rất thông dụng, mang nghĩa tiêu cực về việc không theo kịp người khác. Thường xuất hiện khi miêu tả nỗi lo sợ của cha mẹ. Thường đi với: 'fearing they will fall behind their peers', 'fall behind in class/at work'. Đồng nghĩa: lag behind, trail behind, be left behind. Trái nghĩa: keep up with, stay ahead of.",
        example: "Without adequate study, students may fall behind in class.",
        exampleTranslation:
          "Nếu không học đủ, học sinh có thể tụt lại đằng sau các bạn trong lớp.",
      },
      {
        id: 207,
        word: "Exert undue pressure",
        pronunciation: "/ɪɡˈzɜːt ʌnˈdjuː ˈpreʃər/",
        meaning:
          "Gây áp lực quá mức, tạo ra sức ép không cần thiết hoặc vượt quá giới hạn hợp lý",
        note: "Cụm động từ kết hợp 'exert' (tạo ra, gây ra) với 'undue' (quá mức, không đáng). 'Undue' nhấn mạnh rằng áp lực đó vượt quá giới hạn chấp nhận được. Thường đi với: 'exert undue pressure on their children/offspring', 'should not exert undue pressure'. Đồng nghĩa: put excessive pressure on, place unreasonable demands on. Phân biệt: 'undue pressure' (quá mức) vs 'appropriate pressure' (áp lực phù hợp).",
        example: "Parents should not exert undue pressure on their children.",
        exampleTranslation: "Cha mẹ không nên gây áp lực quá mức lên con cái.",
      },
      {
        id: 208,
        word: "Adverse implications",
        pronunciation: "/ˈædvɜːs ˌɪmplɪˈkeɪʃənz/",
        meaning:
          "Hậu quả tiêu cực, những tác động bất lợi hoặc kết quả không mong muốn của một hành động hay chính sách",
        note: "Cụm danh từ học thuật, 'adverse' (bất lợi, tiêu cực) mạnh hơn 'negative'. 'Implications' (hàm ý, tác động) rộng hơn 'effects' vì bao gồm cả hệ quả gián tiếp. Thường đi với: 'due to its adverse implications for mental health', 'have adverse implications for'. Đồng nghĩa: negative consequences, detrimental repercussions, harmful ramifications.",
        example: "The new law has adverse implications for small businesses.",
        exampleTranslation:
          "Luật mới có hậu quả tiêu cực đối với các doanh nghiệp nhỏ.",
      },
      {
        id: 209,
        word: "Multiple domains",
        pronunciation: "/ˈmʌltɪpəl dəˈmeɪnz/",
        meaning:
          "Nhiều lĩnh vực khác nhau, các phạm vi hoạt động hoặc chuyên môn đa dạng",
        note: "Cụm danh từ dùng 'domains' (lĩnh vực, phạm vi) thay cho 'areas' hay 'fields', mang sắc thái học thuật hơn. Thường xuất hiện khi mô tả áp lực trẻ phải xuất sắc ở nhiều mảng. Thường đi với: 'demands to excel across multiple domains', 'expertise in multiple domains'. Đồng nghĩa: various fields, diverse areas, different spheres.",
        example:
          "She has expertise in multiple domains, including science and literature.",
        exampleTranslation:
          "Cô ấy có chuyên môn trong nhiều lĩnh vực, bao gồm khoa học và văn học.",
      },
      {
        id: 210,
        word: "Susceptible to",
        pronunciation: "/səˈseptɪbəl tuː/",
        meaning:
          "Dễ bị ảnh hưởng bởi, có khả năng bị tác động hoặc tổn hại bởi một yếu tố nào đó",
        note: "Cụm tính từ dùng với giới từ 'to', chỉ tính dễ bị ảnh hưởng hoặc tổn thương. Thường đi với danh từ chỉ tác hại hoặc ảnh hưởng tiêu cực. Thường đi với: 'are more susceptible to feelings of inundation/stress/anxiety', 'become susceptible to illness'. Đồng nghĩa: vulnerable to, prone to, at risk of. Phân biệt: 'susceptible to' (dễ bị ảnh hưởng về tâm lý/sức khỏe) vs 'capable of' (có khả năng làm gì).",
        example:
          "Children are more susceptible to the flu during winter months.",
        exampleTranslation: "Trẻ em dễ bị cảm cúm hơn vào các tháng mùa đông.",
      },
      {
        id: 211,
        word: "Physical reprimand",
        pronunciation: "/ˈfɪzɪkəl ˈreprɪmɑːnd/",
        meaning:
          "Hình phạt về thể chất, sự trừng phạt liên quan đến can thiệp vật lý lên cơ thể",
        note: "Cụm danh từ kết hợp 'physical' (thể chất) và 'reprimand' (khiển trách, trừng phạt). Mang sắc thái học thuật, trang trọng hơn 'physical punishment'. Thường xuất hiện khi thảo luận về hậu quả nghiêm trọng của áp lực thất bại. Thường đi với: 'leading to verbal, or in more severe cases, physical reprimand'. Đồng nghĩa: corporal punishment, physical punishment.",
        example:
          "Physical reprimand is considered inappropriate in many educational settings.",
        exampleTranslation:
          "Hình phạt về thể chất được coi là không phù hợp trong nhiều môi trường giáo dục.",
      },
      {
        id: 212,
        word: "Serves as a principal catalyst for",
        pronunciation: "/sɜːvz əz ə ˈprɪnsɪpəl ˈkætəlɪst fɔː/",
        meaning:
          "Đóng vai trò là lực lượng thúc đẩy chính, là nhân tố then chốt kích hoạt hoặc đẩy nhanh một quá trình",
        note: "Cụm động từ học thuật cao, dùng ẩn dụ hóa học 'catalyst' (chất xúc tác) để diễn đạt nhân tố thúc đẩy. 'Principal' (chủ yếu, chính) nhấn mạnh đây là nguyên nhân quan trọng nhất. Thường dùng trong phần kết luận khi tóm tắt nguyên nhân chính. Thường đi với: 'serves as a principal catalyst for change/growth/pressure'. Đồng nghĩa: acts as the main driving force for, is the primary trigger for.",
        example:
          "Innovation serves as a principal catalyst for economic growth.",
        exampleTranslation:
          "Đổi mới là lực lượng chính thúc đẩy tăng trưởng kinh tế.",
      },
      {
        id: 213,
        word: "Psychological health",
        pronunciation: "/ˌsaɪkəˈlɒdʒɪkəl helθ/",
        meaning:
          "Sức khỏe tâm thần, trạng thái lành mạnh về tinh thần và cảm xúc của một người",
        note: "Cụm danh từ dùng 'psychological' (tâm lý) thay cho 'mental' khi muốn văn phong học thuật hơn. Thường xuất hiện khi phân tích tác hại của áp lực lên trẻ em. Thường đi với: 'detrimentally impact the psychological health of', 'maintain psychological health'. Đồng nghĩa: mental health, mental well-being, emotional health. Lưu ý: 'psychological health' nhấn mạnh khía cạnh tâm lý học, trong khi 'mental health' phổ biến hơn trong văn phong thông thường.",
        example:
          "Maintaining psychological health is essential for overall well-being.",
        exampleTranslation:
          "Duy trì sức khỏe tinh thần là điều thiết yếu cho sức khỏe tổng thể.",
      },
    ],
  },
  // ==========================================
  // W8 - Task 1: Australian Workforce by Industry (1962–2012)
  // ==========================================
  {
    id: "wr_w8_task1_workforce",
    skill: "Writing",
    volume: "9",
    topic: "Economics / Employment",
    part: "Task 1 - Australian Workforce by Industry",
    cards: [
      {
        id: 214,
        word: "Sectors",
        pronunciation: "/ˈsektəz/",
        meaning:
          "Các lĩnh vực hoặc ngành riêng biệt trong một nền kinh tế, xã hội hoặc hoạt động nào đó",
        note: "Danh từ số nhiều, thường được dùng để chỉ các phân khúc trong nền kinh tế hoặc xã hội. Trong Task 1 về lực lượng lao động, 'sectors' thay thế cho 'industries' hay 'fields' để tránh lặp từ. Thường đi với: 'the proportion of the workforce in different sectors', 'growth across sectors'. Đồng nghĩa: industries, fields, segments, divisions.",
        example:
          "The technology and healthcare sectors are experiencing significant growth.",
        exampleTranslation:
          "Lĩnh vực công nghệ và chăm sóc sức khỏe đang có sự tăng trưởng đáng kể.",
      },
      {
        id: 215,
        word: "Relatively stable",
        pronunciation: "/ˈrelətɪvli ˈsteɪbəl/",
        meaning:
          "Tương đối ổn định, không chịu đựng sự biến động cực kỳ lớn trong một khoảng thời gian",
        note: "Cụm tính từ kết hợp trạng từ 'relatively' (tương đối) để làm mềm mức độ ổn định, tránh tuyệt đối hóa. Rất hữu ích trong Task 1 khi mô tả các đường xu hướng gần như nằm ngang. Thường đi với: 'remained relatively stable', 'the trend was relatively stable'. Đồng nghĩa: fairly consistent, broadly unchanged, largely flat. Phân biệt: 'stable' (ổn định hoàn toàn) vs 'relatively stable' (ổn định nhưng vẫn có biến động nhỏ).",
        example:
          "Despite economic challenges, the housing market has remained relatively stable.",
        exampleTranslation:
          "Bất chấp những thách thức kinh tế, thị trường nhà đất vẫn tương đối ổn định.",
      },
      {
        id: 216,
        word: "Labor force",
        pronunciation: "/ˈleɪbər fɔːs/",
        meaning:
          "Lực lượng lao động, tổng số người trong độ tuổi lao động đang làm việc hoặc tìm việc",
        note: "Cụm danh từ chỉ toàn bộ nguồn nhân lực của một quốc gia hoặc ngành. Thay thế tự nhiên cho 'workforce' hay 'workers' trong Task 1. Thường đi với: 'the percentage of its labor force', 'a decline in the labor force', 'enhance the skills of the labor force'. Đồng nghĩa: workforce, working population, human resources. Lưu ý: 'labor force' (Anh-Mỹ) = 'labour force' (Anh-Anh).",
        example:
          "Government policies aim to enhance the skills of the labor force for economic growth.",
        exampleTranslation:
          "Các chính sách của Chính phủ nhằm nâng cao kỹ năng của lực lượng lao động để tăng trưởng kinh tế.",
      },
      {
        id: 217,
        word: "Reach parity with",
        pronunciation: "/riːtʃ ˈpærɪti wɪð/",
        meaning:
          "Đạt được sự ngang bằng với, đạt đến mức tương đương với một đối tượng khác",
        note: "Cụm động từ dùng 'parity' (sự bình đẳng, ngang bằng về mức độ) trong ngữ cảnh so sánh hai đường xu hướng trong Task 1. Mang sắc thái học thuật cao hơn 'reach the same level as'. Thường đi với: 'grew slightly to reach parity with that of manufacturing', 'achieve parity with global standards'. Đồng nghĩa: catch up with, equal, match, draw level with.",
        example:
          "The goal is to reach parity with global environmental standards in the coming years.",
        exampleTranslation:
          "Mục tiêu là đạt được sự ngang bằng với tiêu chuẩn môi trường toàn cầu trong những năm tới.",
      },
    ],
  },

  // ==========================================
  // W8 - Task 2: Interdependence vs Independence (Sample 1 - Pro-Independence)
  // ==========================================
  {
    id: "wr_w8_task2_independence",
    skill: "Writing",
    volume: "9",
    topic: "Society / Technology / Modern Life",
    part: "Task 2 - Interdependence vs Independence (Pro-Independence)",
    cards: [
      {
        id: 218,
        word: "Increasingly relying on",
        pronunciation: "/ɪnˈkriːsɪŋli rɪˈlaɪɪŋ ɒn/",
        meaning:
          "Ngày càng phụ thuộc vào, xu hướng dựa dẫm nhiều hơn theo thời gian",
        note: "Cụm động từ kết hợp trạng từ 'increasingly' (ngày càng) với phrasal verb 'rely on' (phụ thuộc vào). Thường xuất hiện trong phần giới thiệu đề bài về sự phụ thuộc/độc lập trong xã hội hiện đại. Thường đi với: 'whether people are increasingly relying on one another', 'increasingly relying on technology'. Đồng nghĩa: becoming more dependent on, growing more reliant on.",
        example:
          "We are increasingly relying on technology in our daily lives.",
        exampleTranslation:
          "Chúng ta dựa vào công nghệ nhiều hơn trong cuộc sống hàng ngày.",
      },
      {
        id: 219,
        word: "Greater independence",
        pronunciation: "/ˈɡreɪtər ˌɪndɪˈpendəns/",
        meaning: "Sự độc lập cao hơn, mức tự chủ và tự do lớn hơn so với trước",
        note: "Cụm danh từ dùng dạng so sánh hơn 'greater' để diễn tả xu hướng gia tăng về sự độc lập. Thường xuất hiện trong thesis statement khi người viết muốn nêu quan điểm ủng hộ sự tự chủ. Thường đi với: 'moving towards greater independence', 'provide greater independence'. Đồng nghĩa: increased autonomy, enhanced self-reliance, more freedom.",
        example: "She enjoys her greater independence after moving out.",
        exampleTranslation:
          "Cô ấy thích sự tự do hơn sau khi chuyển ra ở riêng.",
      },
      {
        id: 220,
        word: "Interconnected global society",
        pronunciation: "/ˌɪntəkəˈnektɪd ˈɡləʊbəl səˈsaɪəti/",
        meaning:
          "Xã hội toàn cầu liên kết, một cộng đồng thế giới trong đó các cá nhân và quốc gia được kết nối chặt chẽ với nhau",
        note: "Cụm danh từ ba từ kết hợp 'interconnected' (liên kết lẫn nhau) + 'global' (toàn cầu) + 'society' (xã hội). Thường xuất hiện trong phần lập luận về sự phụ thuộc lẫn nhau. Thường đi với: 'observation of our interconnected global society', 'living in an interconnected global society'. Đồng nghĩa: globalized world, globally connected community, interdependent world.",
        example: "The internet has created an interconnected global society.",
        exampleTranslation: "Internet đã tạo ra một xã hội toàn cầu liên kết.",
      },
      {
        id: 221,
        word: "Collaborative efforts",
        pronunciation: "/kəˈlæbərətɪv ˈefəts/",
        meaning:
          "Nỗ lực hợp tác, những cố gắng phối hợp cùng nhau giữa nhiều cá nhân hoặc tổ chức",
        note: "Cụm danh từ kết hợp 'collaborative' (có tính hợp tác, làm việc cùng nhau) và 'efforts' (nỗ lực). Thường xuất hiện khi mô tả sự cần thiết của hợp tác trong giải quyết vấn đề toàn cầu. Thường đi với: 'enabling and necessitating collaborative efforts across borders', 'require collaborative efforts'. Đồng nghĩa: joint efforts, cooperative work, collective action.",
        example: "The project was successful thanks to collaborative efforts.",
        exampleTranslation: "Dự án thành công nhờ vào nỗ lực hợp tác.",
      },
      {
        id: 222,
        word: "A unified response",
        pronunciation: "/ə ˈjuːnɪfaɪd rɪˈspɒns/",
        meaning:
          "Phản hồi thống nhất, hành động hoặc phản ứng đồng bộ từ nhiều bên cùng nhau",
        note: "Cụm danh từ dùng 'unified' (thống nhất, hợp nhất thành một) để nhấn mạnh tính đồng bộ. Thường xuất hiện khi nói về các thách thức toàn cầu đòi hỏi sự hợp tác quốc tế. Thường đi với: 'global challenges demand a unified response', 'issue a unified response to'. Đồng nghĩa: a collective response, a coordinated reaction, a joint answer.",
        example: "The countries issued a unified response to the crisis.",
        exampleTranslation:
          "Các quốc gia đã đưa ra phản hồi đồng nhất với cuộc khủng hoảng.",
      },
      {
        id: 223,
        word: "Unprecedented access",
        pronunciation: "/ʌnˈpresɪdentɪd ˈækses/",
        meaning:
          "Khả năng tiếp cận chưa từng có, mức độ truy cập hoặc tiếp cận chưa bao giờ xảy ra trước đây",
        note: "Cụm danh từ dùng 'unprecedented' (chưa có tiền lệ) để nhấn mạnh sự vượt trội hoàn toàn so với trước. Rất hay xuất hiện khi nói về internet và công nghệ mang lại lợi ích gì. Thường đi với: 'offer unprecedented access to information', 'provide unprecedented access to resources'. Đồng nghĩa: unparalleled access, unrivaled availability, never-before-seen access.",
        example:
          "The internet has provided unprecedented access to information.",
        exampleTranslation:
          "Internet đã cung cấp khả năng truy cập thông tin chưa từng có.",
      },
      {
        id: 224,
        word: "The burgeoning gig economy",
        pronunciation: "/ðə ˈbɜːdʒənɪŋ ɡɪɡ ɪˈkɒnəmi/",
        meaning:
          "Nền kinh tế việc làm tự do đang phát triển nhanh chóng, thị trường lao động dựa trên các hợp đồng ngắn hạn và công việc freelance đang bùng nổ",
        note: "Cụm danh từ kết hợp 'burgeoning' (đang nảy nở, phát triển mạnh) với 'gig economy' (nền kinh tế gig — làm theo hợp đồng ngắn hạn). 'Gig economy' là thuật ngữ hiện đại chỉ nền kinh tế với Uber, Grab, Upwork... Thường đi với: 'the burgeoning gig economy exemplifies this shift', 'driven by the burgeoning gig economy'. Đồng nghĩa: the rapidly growing freelance economy, the expanding on-demand economy.",
        example: "The burgeoning gig economy has reshaped the job market.",
        exampleTranslation:
          "Sự phát triển nhanh của nền kinh tế việc làm tự do đã tái hình thành thị trường việc làm.",
      },
      {
        id: 225,
        word: "Autonomous living",
        pronunciation: "/ɔːˈtɒnəməs ˈlɪvɪŋ/",
        meaning:
          "Lối sống độc lập, cách sống tự chủ không cần phụ thuộc vào người khác",
        note: "Cụm danh từ dùng 'autonomous' (tự trị, tự chủ — từ gốc Hy Lạp 'autos' = tự + 'nomos' = luật) để diễn đạt lối sống tự lập. Mang sắc thái học thuật hơn 'independent living'. Thường đi với: 'a move towards autonomous living', 'facilitate autonomous living'. Đồng nghĩa: independent living, self-sufficient lifestyle, self-governing way of life.",
        example:
          "Technological advances have facilitated autonomous living for many.",
        exampleTranslation:
          "Tiến bộ công nghệ đã tạo điều kiện cho nhiều người sống độc lập.",
      },
      {
        id: 226,
        word: "Self-directed learning",
        pronunciation: "/ˌself dɪˈrektɪd ˈlɜːnɪŋ/",
        meaning:
          "Học tập tự giác, phương thức học tập do người học tự điều hướng thay vì phụ thuộc vào giáo viên",
        note: "Cụm danh từ kết hợp tính từ ghép 'self-directed' (tự điều hướng) với 'learning'. Thường xuất hiện khi bàn về internet/công nghệ trao quyền cho cá nhân học hỏi độc lập. Thường đi với: 'engaging in self-directed learning', 'self-directed learning opportunities'. Đồng nghĩa: autonomous learning, self-regulated learning, independent study.",
        example:
          "Online courses have empowered people with self-directed learning opportunities.",
        exampleTranslation:
          "Các khóa học trực tuyến đã trao quyền cho mọi người với cơ hội học tập tự giác.",
      },
      {
        id: 227,
        word: "Self-reliance",
        pronunciation: "/ˌself rɪˈlaɪəns/",
        meaning:
          "Sự tự lực, khả năng và thái độ dựa vào chính mình thay vì nhờ cậy người khác",
        note: "Danh từ ghép chỉ đức tính tự lập, tự cậy vào bản thân. Thường xuất hiện trong kết luận khi tóm tắt xu hướng ngày càng độc lập. Thường đi với: 'fostering a new era of autonomy and self-reliance', 'promote self-reliance'. Đồng nghĩa: independence, self-sufficiency, autonomy. Phân biệt: 'self-reliance' (tự lực về mặt tinh thần/thái độ) vs 'self-sufficiency' (tự cung tự cấp về vật chất).",
        example: "Self-reliance is a key principle in personal development.",
        exampleTranslation:
          "Tự lực là một nguyên tắc quan trọng trong phát triển cá nhân.",
      },
      {
        id: 228,
        word: "A distinctive shift towards",
        pronunciation: "/ə dɪˈstɪŋktɪv ʃɪft təˈwɔːdz/",
        meaning:
          "Sự chuyển hướng rõ rệt sang, một sự thay đổi mang tính đặc trưng và dễ nhận thấy theo một chiều hướng nhất định",
        note: "Cụm danh từ kết hợp 'distinctive' (nổi bật, dễ phân biệt) + 'shift' (sự thay đổi hướng đi) + giới từ 'towards'. Thường dùng trong phần kết luận để tổng kết xu hướng chính. Thường đi với: 'marking a distinctive shift towards individual independence', 'a distinctive shift towards remote work'. Đồng nghĩa: a clear movement towards, a notable transition to, a marked change towards.",
        example:
          "There's been a distinctive shift towards remote work in recent years.",
        exampleTranslation:
          "Đã có một sự chuyển hướng rõ rệt đối với việc làm từ xa trong những năm gần đây.",
      },
    ],
  },

  // ==========================================
  // W8 - Task 2: Interdependence vs Independence (Sample 2 - Pro-Interdependence)
  // ==========================================
  {
    id: "wr_w8_task2_interdependence",
    skill: "Writing",
    volume: "9",
    topic: "Society / Technology / Modern Life",
    part: "Task 2 - Interdependence vs Independence (Pro-Interdependence)",
    cards: [
      {
        id: 229,
        word: "Reliant on",
        pronunciation: "/rɪˈlaɪənt ɒn/",
        meaning:
          "Phụ thuộc vào, dựa dẫm vào ai đó hoặc điều gì đó để hoạt động hoặc tồn tại",
        note: "Cụm tính từ dùng với giới từ 'on', là dạng tính từ của động từ 'rely on'. Thường xuất hiện trong phần giới thiệu khi đặt vấn đề về sự phụ thuộc trong xã hội hiện đại. Thường đi với: 'more reliant on internet technology', 'become reliant on each other'. Đồng nghĩa: dependent on, contingent on. Phân biệt: 'reliant on' (tính từ — mô tả trạng thái) vs 'rely on' (động từ — mô tả hành động).",
        example: "Many businesses are now more reliant on internet technology.",
        exampleTranslation:
          "Nhiều doanh nghiệp hiện nay phụ thuộc nhiều vào công nghệ internet.",
      },
      {
        id: 230,
        word: "Digital connectivity",
        pronunciation: "/ˈdɪdʒɪtəl kəˌnektɪˈvɪti/",
        meaning:
          "Kết nối số, trạng thái được kết nối trực tuyến thông qua các thiết bị và nền tảng kỹ thuật số",
        note: "Cụm danh từ kết hợp 'digital' (kỹ thuật số) và 'connectivity' (khả năng kết nối). Thường xuất hiện trong bài về công nghệ và xã hội hiện đại. Thường đi với: 'globalization and digital connectivity have knitted individuals closer', 'enhanced by digital connectivity'. Đồng nghĩa: online connection, internet connectivity, digital networking.",
        example:
          "Digital connectivity has transformed how we work and communicate.",
        exampleTranslation:
          "Kết nối số đã biến đổi cách chúng ta làm việc và giao tiếp.",
      },
      {
        id: 231,
        word: "Social media platforms",
        pronunciation: "/ˈsəʊʃəl ˈmiːdiə ˈplætfɔːmz/",
        meaning:
          "Nền tảng truyền thông xã hội, các ứng dụng và trang web trực tuyến cho phép người dùng tạo nội dung và tham gia mạng lưới xã hội",
        note: "Cụm danh từ quen thuộc trong bài viết về công nghệ và xã hội. 'Platforms' nhấn mạnh đây là cơ sở hạ tầng kỹ thuật số, không chỉ là ứng dụng. Thường đi với: 'the rise of social media platforms like Facebook', 'using social media platforms to connect'. Đồng nghĩa: social networks, online platforms, digital social channels.",
        example:
          "Social media platforms like Facebook and Twitter have become integral to daily life.",
        exampleTranslation:
          "Các nền tảng truyền thông xã hội như Facebook và Twitter đã trở thành một phần không thể thiếu của cuộc sống hàng ngày.",
      },
      {
        id: 232,
        word: "Social movements",
        pronunciation: "/ˈsəʊʃəl ˈmuːvmənts/",
        meaning:
          "Phong trào xã hội, các hành động tập thể có tổ chức nhằm thúc đẩy, chống lại hoặc tạo ra sự thay đổi xã hội",
        note: "Cụm danh từ chỉ các làn sóng hoạt động tập thể trong xã hội như phong trào nữ quyền, bảo vệ môi trường... Thường xuất hiện khi nêu ví dụ về sự kết nối và phụ thuộc lẫn nhau trong xã hội. Thường đi với: 'how social movements gain momentum', 'social movements have played a key role in'. Đồng nghĩa: collective action, grassroots movements, advocacy movements.",
        example:
          "Social movements have played a key role in political and social reforms.",
        exampleTranslation:
          "Các phong trào xã hội đã đóng vai trò quan trọng trong cải cách chính trị và xã hội.",
      },
      {
        id: 233,
        word: "A collective dependence",
        pronunciation: "/ə kəˈlektɪv dɪˈpendəns/",
        meaning:
          "Sự phụ thuộc tập thể, trạng thái cả một nhóm hoặc xã hội cùng dựa vào một yếu tố chung",
        note: "Cụm danh từ dùng 'collective' (tập thể, cộng đồng) để nhấn mạnh sự phụ thuộc không chỉ ở cá nhân mà ở cả cộng đồng. Thường xuất hiện khi tổng kết lập luận ủng hộ sự phụ thuộc lẫn nhau. Thường đi với: 'underscore a world moving towards a collective dependence', 'highlighted our collective dependence on'. Đồng nghĩa: shared reliance, mutual dependence, communal dependency.",
        example:
          "The pandemic highlighted our collective dependence on healthcare systems.",
        exampleTranslation:
          "Đại dịch đã làm nổi bật sự phụ thuộc tập thể của chúng ta vào hệ thống chăm sóc sức khỏe.",
      },
      {
        id: 234,
        word: "Technological advancements",
        pronunciation: "/ˌteknəˈlɒdʒɪkəl ədˈvɑːnsmənts/",
        meaning:
          "Tiến bộ công nghệ, những bước phát triển và cải tiến được thực hiện trong lĩnh vực kỹ thuật và công nghệ",
        note: "Cụm danh từ rất phổ biến trong bài viết về xã hội và công nghệ. 'Advancements' (số nhiều) nhấn mạnh nhiều bước tiến liên tiếp. Thường đi với: 'considering technological advancements', 'driven by technological advancements'. Đồng nghĩa: technological progress, tech innovations, digital advances. Lưu ý: có thể dùng 'technological advances' hoặc 'technological advancements' — cả hai đều đúng.",
        example:
          "Technological advancements have revolutionized the way we live and work.",
        exampleTranslation:
          "Tiến bộ công nghệ đã cách mạng hóa cách chúng ta sống và làm việc.",
      },
      {
        id: 235,
        word: "Remote work",
        pronunciation: "/rɪˈməʊt wɜːk/",
        meaning:
          "Làm việc từ xa, hình thức làm việc ngoài văn phòng truyền thống, thường là từ nhà hoặc bất kỳ đâu qua internet",
        note: "Cụm danh từ chỉ xu hướng làm việc hiện đại không cần đến văn phòng. Rất phổ biến sau đại dịch COVID-19. Thường đi với: 'the shift towards remote work', 'the rise of remote work and freelancing'. Đồng nghĩa: teleworking, working from home (WFH), distance working. Phân biệt: 'remote work' (làm từ xa nói chung) vs 'work from home' (cụ thể là làm từ nhà).",
        example: "Remote work has become more popular due to its flexibility.",
        exampleTranslation:
          "Làm việc từ xa trở nên phổ biến hơn do tính linh hoạt của nó.",
      },
      {
        id: 236,
        word: "Direct human assistance",
        pronunciation: "/dɪˈrekt ˈhjuːmən əˈsɪstəns/",
        meaning:
          "Sự hỗ trợ trực tiếp từ con người, sự giúp đỡ được cung cấp bởi người khác trong tương tác trực tiếp",
        note: "Cụm danh từ ba từ nhấn mạnh tính 'trực tiếp' (direct) và 'từ người' (human), phân biệt với hỗ trợ từ máy móc hoặc AI. Thường xuất hiện khi lập luận về sự độc lập nhờ công nghệ. Thường đi với: 'without needing direct human assistance', 'tasks that require direct human assistance'. Đồng nghĩa: personal assistance, hands-on help, in-person support.",
        example:
          "Some tasks still require direct human assistance, despite technological advances.",
        exampleTranslation:
          "Một số công việc vẫn cần sự hỗ trợ trực tiếp từ con người, bất chấp tiến bộ công nghệ.",
      },
      {
        id: 237,
        word: "Flexible and autonomous lifestyle",
        pronunciation: "/ˈfleksɪbəl ənd ɔːˈtɒnəməs ˈlaɪfstaɪl/",
        meaning:
          "Lối sống linh hoạt và tự chủ, cách sống có thể điều chỉnh theo ý mình và không bị ràng buộc bởi các cấu trúc cứng nhắc",
        note: "Cụm danh từ kết hợp hai tính từ bổ sung nhau: 'flexible' (linh hoạt về thời gian/địa điểm) và 'autonomous' (tự chủ về quyết định). Thường xuất hiện khi miêu tả lợi ích của làm việc từ xa và kinh tế gig. Thường đi với: 'allowing for a more flexible and autonomous lifestyle', 'enjoy a flexible and autonomous lifestyle'. Đồng nghĩa: adaptable and independent way of life, self-governing and versatile lifestyle.",
        example:
          "Digital nomads enjoy a flexible and autonomous lifestyle, working from anywhere in the world.",
        exampleTranslation:
          "Người làm việc tự do sống một lối sống linh hoạt và tự chủ, làm việc từ bất cứ đâu trên thế giới.",
      },
      {
        id: 238,
        word: "Face-to-face interactions",
        pronunciation: "/ˌfeɪs tə ˈfeɪs ˌɪntərˈækʃənz/",
        meaning:
          "Tương tác trực tiếp, giao tiếp và trao đổi giữa người với người trong cùng không gian vật lý",
        note: "Cụm danh từ dùng tính từ ghép 'face-to-face' (mặt đối mặt) để nhấn mạnh tính trực tiếp, phân biệt với giao tiếp trực tuyến. Thường xuất hiện khi lập luận về xu hướng giảm tương tác người với người. Thường đi với: 'reducing the need for face-to-face interactions', 'prefer face-to-face interactions'. Đồng nghĩa: in-person interactions, direct communication, personal contact.",
        example:
          "Despite the rise of digital communication, face-to-face interactions remain valuable for building strong relationships.",
        exampleTranslation:
          "Mặc dù giao tiếp kỹ thuật số ngày càng phát triển, tương tác trực tiếp vẫn quý báu trong việc xây dựng mối quan hệ thân thiết.",
      },
      {
        id: 239,
        word: "Valid points",
        pronunciation: "/ˈvælɪd pɔɪnts/",
        meaning:
          "Ý kiến hợp lý, các lập luận hoặc ý tưởng có căn cứ logic và lập luận chắc chắn",
        note: "Cụm danh từ ngắn gọn, thường xuất hiện trong phần kết luận khi người viết thừa nhận cả hai phía của vấn đề. 'Valid' (hợp lệ, có cơ sở) nhấn mạnh tính thuyết phục của lập luận. Thường đi với: 'while there are valid points supporting the idea that', 'both sides presented valid points'. Đồng nghĩa: sound arguments, reasonable claims, legitimate viewpoints.",
        example:
          "Both sides of the debate presented valid points, making it hard to choose a side.",
        exampleTranslation:
          "Cả hai bên của cuộc tranh luận đều đưa ra ý kiến hợp lý, khiến việc chọn phe trở nên khó khăn.",
      },
    ],
  },
  // ==========================================
  // W9 - Task 1: Library Ground Floor Layout (2001 vs 2009)
  // ==========================================
  {
    id: "wr_w9_task1_library",
    skill: "Writing",
    volume: "9",
    topic: "Architecture / Urban Development",
    part: "Task 1 - Library Layout (Map)",
    cards: [
      {
        id: 240,
        word: "Substantially renovated",
        pronunciation: "/səbˈstænʃəli ˈrenəveɪtɪd/",
        meaning:
          "Được cải tạo đáng kể, được nâng cấp và cải thiện ở mức độ lớn về cấu trúc hoặc diện mạo",
        note: "Cụm động từ bị động kết hợp trạng từ 'substantially' (đáng kể, ở mức độ lớn) với 'renovated' (được cải tạo). Rất phổ biến trong Task 1 dạng Map khi tóm tắt tổng quan sự thay đổi. Thường đi với: 'the ground floor was substantially renovated', 'the building was substantially renovated to include...'. Đồng nghĩa: significantly redeveloped, extensively refurbished, considerably transformed.",
        example:
          "The library was substantially renovated to include modern amenities and more space for reading.",
        exampleTranslation:
          "Thư viện đã được cải tạo đáng kể để bao gồm tiện nghi hiện đại và nhiều không gian đọc sách hơn.",
      },
      {
        id: 241,
        word: "Expanded variety of book genres",
        pronunciation: "/ɪkˈspændɪd vəˈraɪəti əv bʊk ˈʒɒnrəz/",
        meaning:
          "Sự đa dạng mở rộng của các thể loại sách, phạm vi các loại sách được cung cấp ngày càng phong phú hơn",
        note: "Cụm danh từ dùng 'expanded' (được mở rộng) như tính từ bổ nghĩa cho 'variety'. Đặc biệt phù hợp trong Task 1 về thư viện khi mô tả sự thêm mới các thể loại sách. Thường đi với: 'with an expanded variety of book genres', 'offer an expanded variety of'. Đồng nghĩa: a wider range of book categories, a broader selection of genres.",
        example:
          "The bookstore has expanded its variety of book genres to attract a wider audience.",
        exampleTranslation:
          "Nhà sách đã mở rộng sự đa dạng của các thể loại sách để thu hút một lượng khán giả rộng lớn hơn.",
      },
      {
        id: 242,
        word: "Modern amenities",
        pronunciation: "/ˈmɒdən əˈmiːnɪtiz/",
        meaning:
          "Tiện nghi hiện đại, các tính năng và thiết bị cung cấp sự tiện lợi và thoải mái được cập nhật theo tiêu chuẩn hiện tại",
        note: "Cụm danh từ rất phổ biến trong Task 1 dạng Map khi mô tả những bổ sung mới. 'Amenities' (số nhiều) chỉ các tiện ích đi kèm như WiFi, máy tính, khu vui chơi... Thường đi với: 'the addition of modern amenities', 'equipped with modern amenities'. Đồng nghĩa: contemporary facilities, up-to-date features, current conveniences.",
        example:
          "Our hotel offers modern amenities such as free Wi-Fi, a fitness center, and a heated pool.",
        exampleTranslation:
          "Khách sạn của chúng tôi cung cấp các tiện nghi hiện đại như Wi-Fi miễn phí, trung tâm thể dục, và hồ bơi có sưởi.",
      },
      {
        id: 243,
        word: "Shelving units",
        pronunciation: "/ˈʃelvɪŋ ˈjuːnɪts/",
        meaning:
          "Các đơn vị kệ, cấu trúc hoặc đồ nội thất dùng để lưu trữ và sắp xếp sách hoặc đồ vật, thường gồm nhiều tầng kệ",
        note: "Cụm danh từ chuyên dụng trong Task 1 về thư viện hoặc cửa hàng sách. 'Unit' nhấn mạnh đây là một khối hoàn chỉnh độc lập. Thường đi với: 'two shelving units dedicated to', 'install/add shelving units'. Đồng nghĩa: bookshelves, bookcases, display units. Lưu ý: 'shelving unit' (một kệ đứng độc lập) khác với 'shelf' (một tầng kệ đơn lẻ).",
        example:
          "The new library design includes several shelving units that can accommodate a larger collection of books.",
        exampleTranslation:
          "Thiết kế thư viện mới bao gồm một số đơn vị kệ có thể chứa một bộ sưu tập sách lớn hơn.",
      },
      {
        id: 244,
        word: "Accommodate",
        pronunciation: "/əˈkɒmədeɪt/",
        meaning:
          "Chứa đựng, đáp ứng nhu cầu, điều chỉnh để phù hợp với ai đó hoặc điều gì đó",
        note: "Động từ đa nghĩa: (1) cung cấp không gian/chỗ ở cho; (2) điều chỉnh để đáp ứng nhu cầu. Trong Task 1 Maps, thường dùng nghĩa (1) — để chứa, để có chỗ cho. Thường đi với: 'reorganized to accommodate the relocation of', 'can accommodate up to X people'. Đồng nghĩa: house, hold, contain, make room for. Lưu ý chính tả: hay bị viết sai thành 'accomodate' — phải có hai 'c' và hai 'm'.",
        example: "The conference room can accommodate up to 50 participants.",
        exampleTranslation: "Phòng hội nghị có thể chứa đến 50 người tham gia.",
      },
      {
        id: 245,
        word: "Relocation",
        pronunciation: "/ˌriːləʊˈkeɪʃən/",
        meaning:
          "Sự di dời, quá trình chuyển một người hoặc một vật từ vị trí này sang vị trí khác",
        note: "Danh từ từ động từ 'relocate' (di dời, chuyển vị trí). Rất hữu ích trong Task 1 Maps khi mô tả các khu vực bị di chuyển sang chỗ khác. Thường đi với: 'to accommodate the relocation of history/fiction books', 'the relocation of the office'. Đồng nghĩa: moving, repositioning, transfer. Phân biệt: 'relocation' (quá trình di dời) vs 'replacement' (thay thế bằng thứ khác).",
        example:
          "The company offered assistance for employees affected by the office relocation.",
        exampleTranslation:
          "Công ty đã cung cấp sự hỗ trợ cho các nhân viên bị ảnh hưởng bởi việc di dời văn phòng.",
      },
    ],
  },

  // ==========================================
  // W9 - Task 2: Working in Old Age (Sample 1 - Disagree)
  // ==========================================
  {
    id: "wr_w9_task2_elderly_work_disagree",
    skill: "Writing",
    volume: "9",
    topic: "Society / Aging / Employment",
    part: "Task 2 - Working in Old Age (Disagree)",
    cards: [
      {
        id: 246,
        word: "Professional endeavors",
        pronunciation: "/prəˈfeʃənəl ɪnˈdevəz/",
        meaning:
          "Nỗ lực trong sự nghiệp, những cố gắng và hoạt động nhằm đạt được thành tựu trong cuộc sống nghề nghiệp",
        note: "Cụm danh từ dùng 'endeavors' (những nỗ lực, cố gắng có mục tiêu) thay cho 'work' hay 'career', mang sắc thái trang trọng hơn. Thường xuất hiện trong phần giới thiệu khi diễn đạt ý tưởng 'tiếp tục làm việc'. Thường đi với: 'persist in their professional endeavors into their advanced years', 'pursue professional endeavors'. Đồng nghĩa: career pursuits, professional activities, work-related efforts.",
        example:
          "Her professional endeavors led her to become the CEO of a successful startup.",
        exampleTranslation:
          "Nỗ lực chuyên nghiệp của cô ấy đã đưa cô trở thành CEO của một startup thành công.",
      },
      {
        id: 247,
        word: "Advanced years",
        pronunciation: "/ədˈvɑːnst jɪəz/",
        meaning:
          "Tuổi già, giai đoạn cuối của cuộc đời, thường liên quan đến độ tuổi nghỉ hưu hoặc lớn hơn",
        note: "Cụm danh từ lịch sự và trang trọng để chỉ tuổi già, tránh từ 'old age' có thể nghe tiêu cực. Hay xuất hiện trong phần giới thiệu và các bài viết về người cao tuổi. Thường đi với: 'persist in their endeavors into their advanced years', 'in one's advanced years'. Đồng nghĩa: later years, senior years, old age, later life. Phân biệt: 'advanced years' (tuổi tác đã cao — lịch sự) vs 'old age' (tuổi già — thông thường).",
        example: "In his advanced years, he took up painting as a hobby.",
        exampleTranslation:
          "Ở tuổi già, ông đã bắt đầu học vẽ như một sở thích.",
      },
      {
        id: 248,
        word: "Mental engagement",
        pronunciation: "/ˈmentəl ɪnˈɡeɪdʒmənt/",
        meaning:
          "Sự tham gia về mặt tinh thần, trạng thái được kích hoạt và vận dụng trí tuệ một cách chủ động",
        note: "Cụm danh từ chỉ mức độ hoạt động của não bộ và tư duy. Hay xuất hiện khi trình bày lập luận phản bác (counterargument) về lợi ích của việc tiếp tục làm việc. Thường đi với: 'promotes mental engagement', 'maintain mental engagement through work'. Đồng nghĩa: cognitive stimulation, intellectual involvement, mental activity.",
        example:
          "Mental engagement in puzzles can help improve cognitive functions.",
        exampleTranslation:
          "Sự tham gia về mặt tinh thần vào trò chơi xếp hình có thể giúp cải thiện các chức năng nhận thức.",
      },
      {
        id: 249,
        word: "Social interaction",
        pronunciation: "/ˈsəʊʃəl ˌɪntərˈækʃən/",
        meaning:
          "Tương tác xã hội, quá trình con người hành động và phản ứng trong mối quan hệ với người khác",
        note: "Cụm danh từ cơ bản nhưng quan trọng trong nhiều chủ đề IELTS liên quan đến sức khỏe, tuổi già, công nghệ. Thường đi với: 'promotes social interaction', 'lack of social interaction leads to loneliness'. Đồng nghĩa: social contact, interpersonal communication, human connection. Phân biệt: 'social interaction' (tương tác qua lại hai chiều) vs 'face-to-face interaction' (tương tác trực tiếp).",
        example:
          "Social interaction is crucial for mental health and well-being.",
        exampleTranslation:
          "Tương tác xã hội là rất quan trọng cho sức khỏe và sự ổn định tinh thần.",
      },
      {
        id: 250,
        word: "Financial stability",
        pronunciation: "/faɪˈnænʃəl stəˈbɪlɪti/",
        meaning:
          "Sự ổn định tài chính, trạng thái có nguồn thu nhập và tài sản vững chắc, không bị biến động lớn",
        note: "Cụm danh từ rất phổ biến trong bài viết về kinh tế, nghỉ hưu, và việc làm. Thường xuất hiện khi liệt kê lợi ích của việc tiếp tục làm việc. Thường đi với: 'provides financial stability', 'achieve/maintain financial stability'. Đồng nghĩa: financial security, economic stability, monetary security. Phân biệt: 'financial stability' (ổn định lâu dài) vs 'financial independence' (không cần người khác hỗ trợ tài chính).",
        example:
          "Achieving financial stability is a common goal for many individuals.",
        exampleTranslation:
          "Đạt được sự ổn định tài chính là mục tiêu chung của nhiều người.",
      },
      {
        id: 251,
        word: "Narrowly defines fulfillment",
        pronunciation: "/ˈnærəʊli dɪˈfaɪnz fʊlˈfɪlmənt/",
        meaning:
          "Định nghĩa hạn hẹp về sự thỏa mãn, hiểu sự thỏa mãn theo nghĩa quá giới hạn và thiếu toàn diện",
        note: "Cụm động từ kết hợp trạng từ 'narrowly' (một cách hạn hẹp) với 'defines fulfillment' (định nghĩa sự thỏa mãn). Đây là cấu trúc mạnh dùng để bác bỏ lập luận đối lập trong phần refutation. Thường đi với: 'this view narrowly defines fulfillment and overlooks...'. Đồng nghĩa: takes a limited view of fulfillment, restricts the definition of satisfaction.",
        example:
          "Society often narrowly defines fulfillment as achieving professional success, ignoring other aspects of life.",
        exampleTranslation:
          "Xã hội thường định nghĩa hạn hẹp về sự thỏa mãn khi cho đó chỉ là việc đạt được thành công trong sự nghiệp, mà bỏ qua các khía cạnh khác của cuộc sống.",
      },
      {
        id: 252,
        word: "Physical and emotional toll",
        pronunciation: "/ˈfɪzɪkəl ənd ɪˈməʊʃənəl təʊl/",
        meaning:
          "Gánh nặng về thể chất và tinh thần, tác động tiêu cực tích lũy lên cơ thể và cảm xúc của một người",
        note: "Cụm danh từ dùng 'toll' (thiệt hại, cái giá phải trả) theo nghĩa bóng. Kết hợp hai khía cạnh 'physical' và 'emotional' để diễn tả toàn diện hậu quả. Thường đi với: 'take a physical and emotional toll on', 'the physical and emotional toll of work'. Đồng nghĩa: physical and psychological burden, bodily and mental strain, wear and tear on body and mind.",
        example:
          "Continuous work without rest can take a physical and emotional toll on individuals.",
        exampleTranslation:
          "Làm việc liên tục mà không nghỉ ngơi có thể tạo ra gánh nặng về thể chất và tinh thần cho cá nhân.",
      },
      {
        id: 253,
        word: "Exacerbate health issues",
        pronunciation: "/ɪɡˈzæsəbeɪt helθ ˈɪʃuːz/",
        meaning:
          "Làm trầm trọng thêm vấn đề sức khỏe, khiến các vấn đề sức khỏe hiện có trở nên nghiêm trọng hơn",
        note: "Cụm động từ học thuật cao, 'exacerbate' (làm tồi tệ hơn, làm trầm trọng thêm) mạnh hơn 'worsen' hay 'aggravate'. Rất hữu ích trong bài về sức khỏe và người cao tuổi. Thường đi với: 'can exacerbate health issues', 'exacerbate existing conditions'. Đồng nghĩa: worsen health problems, aggravate medical conditions, compound health difficulties. Lưu ý phát âm: /ɪɡˈzæsəbeɪt/ — trọng âm ở âm tiết thứ hai.",
        example: "Ignoring symptoms can exacerbate health issues over time.",
        exampleTranslation:
          "Bỏ qua triệu chứng có thể làm trầm trọng thêm vấn đề sức khỏe theo thời gian.",
      },
      {
        id: 254,
        word: "Labor-intensive fields",
        pronunciation: "/ˈleɪbər ɪnˈtensɪv fiːldz/",
        meaning:
          "Ngành nghề lao động nặng nhọc, các lĩnh vực công việc đòi hỏi nhiều sức lao động thể chất của con người",
        note: "Cụm danh từ dùng tính từ ghép 'labor-intensive' (cần nhiều lao động thủ công) để chỉ các ngành như nông nghiệp, xây dựng, khai thác mỏ. Thường xuất hiện khi đưa ví dụ về người cao tuổi làm việc vất vả. Thường đi với: 'continue to work in labor-intensive fields', 'labor-intensive fields such as agriculture'. Đồng nghĩa: physically demanding industries, manual labor sectors. Trái nghĩa: capital-intensive fields (ngành thâm dụng vốn), knowledge-intensive fields.",
        example:
          "Agriculture and construction are examples of labor-intensive fields.",
        exampleTranslation:
          "Nông nghiệp và xây dựng là ví dụ về các ngành nghề lao động nặng nhọc.",
      },
      {
        id: 255,
        word: "Personal fulfillment",
        pronunciation: "/ˈpɜːsənəl fʊlˈfɪlmənt/",
        meaning:
          "Sự thỏa mãn cá nhân, cảm giác hạnh phúc và hài lòng đạt được khi làm điều gì đó phát huy hết khả năng và phù hợp với sở thích của bản thân",
        note: "Cụm danh từ chỉ trạng thái thỏa mãn nội tâm, không phải thành công bên ngoài. Hay xuất hiện trong phần kết luận khi nói về mục đích của việc nghỉ hưu. Thường đi với: 'dedicated to well-being and personal fulfillment', 'find/achieve personal fulfillment'. Đồng nghĩa: personal satisfaction, inner contentment, self-actualization. Phân biệt: 'personal fulfillment' (thỏa mãn cá nhân) vs 'professional success' (thành công nghề nghiệp).",
        example:
          "Volunteering for social causes brought her personal fulfillment.",
        exampleTranslation:
          "Tình nguyện vì các nguyên nhân xã hội mang lại sự thỏa mãn cá nhân cho cô ấy.",
      },
      {
        id: 256,
        word: "A well-deserved break",
        pronunciation: "/ə ˌwel dɪˈzɜːvd breɪk/",
        meaning:
          "Kỳ nghỉ xứng đáng, thời gian nghỉ ngơi hoặc tạm dừng công việc được đạt được sau nhiều nỗ lực và cống hiến",
        note: "Cụm danh từ dùng tính từ ghép 'well-deserved' (xứng đáng được nhận, thật sự đáng được hưởng) để nhấn mạnh quyền lợi chính đáng. Thường xuất hiện trong phần kết luận khi khẳng định rằng nghỉ hưu là quyền lợi hợp lý. Thường đi với: 'retirement is a well-deserved break after decades of labor', 'take a well-deserved break'. Đồng nghĩa: an earned rest, a deserved respite, a rightful period of rest.",
        example:
          "After completing the project, the team took a well-deserved break.",
        exampleTranslation:
          "Sau khi hoàn thành dự án, đội ngũ đã có một kỳ nghỉ xứng đáng.",
      },
      {
        id: 257,
        word: "A crucial phase for personal growth",
        pronunciation: "/ə ˈkruːʃəl feɪz fə ˈpɜːsənəl ɡrəʊθ/",
        meaning:
          "Giai đoạn quan trọng cho sự phát triển cá nhân, một thời kỳ thiết yếu trong cuộc đời có ý nghĩa lớn đối với sự trưởng thành và hoàn thiện bản thân",
        note: "Cụm danh từ kết hợp 'crucial' (then chốt, không thể thiếu) với 'phase' (giai đoạn) và 'personal growth' (phát triển cá nhân). Thường dùng để tái định nghĩa nghỉ hưu không phải là kết thúc mà là một giai đoạn mới quan trọng. Thường đi với: 'retirement is a crucial phase for personal growth', 'serve as a crucial phase for'. Đồng nghĩa: a vital stage for self-development, an important period for personal maturation.",
        example:
          "College years are often seen as a crucial phase for personal growth.",
        exampleTranslation:
          "Những năm đại học thường được coi là giai đoạn quan trọng cho sự phát triển cá nhân.",
      },
    ],
  },

  // ==========================================
  // W9 - Task 2: Working in Old Age (Sample 2 - Agree)
  // ==========================================
  {
    id: "wr_w9_task2_elderly_work_agree",
    skill: "Writing",
    volume: "9",
    topic: "Society / Aging / Employment",
    part: "Task 2 - Working in Old Age (Agree)",
    cards: [
      {
        id: 258,
        word: "Senior years",
        pronunciation: "/ˈsiːniər jɪəz/",
        meaning:
          "Những năm cuối đời, giai đoạn về già thường gắn với độ tuổi nghỉ hưu trở lên",
        note: "Cụm danh từ lịch sự thay cho 'old age', 'senior' mang nghĩa cao tuổi nhưng vẫn có địa vị và kinh nghiệm. Thường đi với: 'persist in their employment into their senior years', 'in one's senior years'. Đồng nghĩa: later years, advanced years, golden years. Phân biệt: 'senior years' (lịch sự, trang trọng) vs 'old age' (thông thường) vs 'advanced years' (trang trọng nhất).",
        example: "She focused on traveling during her senior years.",
        exampleTranslation:
          "Bà tập trung vào việc du lịch trong những năm cuối đời của mình.",
      },
      {
        id: 259,
        word: "Increasingly gaining traction",
        pronunciation: "/ɪnˈkriːsɪŋli ˈɡeɪnɪŋ ˈtrækʃən/",
        meaning:
          "Ngày càng trở nên phổ biến và được chấp nhận rộng rãi hơn, đang thu hút ngày càng nhiều sự ủng hộ theo thời gian",
        note: "Cụm động từ dùng ẩn dụ 'traction' (lực kéo, độ bám) để diễn tả ý tưởng ngày càng có nhiều người ủng hộ hơn. 'Gaining traction' là thành ngữ học thuật hiện đại. Thường đi với: 'the proposition is increasingly gaining traction', 'the idea has gained traction among'. Đồng nghĩa: becoming increasingly popular, gaining wider acceptance, growing in support.",
        example: "The idea is increasingly gaining traction among the youth.",
        exampleTranslation:
          "Ý tưởng này ngày càng trở nên phổ biến trong giới trẻ.",
      },
      {
        id: 260,
        word: "Exacerbating physical and mental health issues",
        pronunciation: "/ɪɡˈzæsəbeɪtɪŋ ˈfɪzɪkəl ənd ˈmentəl helθ ˈɪʃuːz/",
        meaning:
          "Làm trầm trọng thêm các vấn đề sức khỏe thể chất và tinh thần, khiến cả hai loại vấn đề sức khỏe trở nên nghiêm trọng hơn",
        note: "Cụm động từ hiện tại phân từ (dạng -ing) dùng trong phần phản bác lập luận đối lập. Kết hợp cả 'physical' (thể chất) và 'mental' (tinh thần) để diễn tả toàn diện tác hại. Thường đi với: 'possibly exacerbating physical and mental health issues among older workers'. Đồng nghĩa: worsening both physical and mental health, aggravating bodily and psychological conditions.",
        example:
          "Lack of sleep is exacerbating physical and mental health issues.",
        exampleTranslation:
          "Thiếu ngủ làm trầm trọng thêm vấn đề sức khỏe thể chất và tinh thần.",
      },
      {
        id: 261,
        word: "Seasoned employees",
        pronunciation: "/ˈsiːzənd ɪmˈplɔɪiːz/",
        meaning:
          "Nhân viên dày dặn kinh nghiệm, những người lao động có nhiều năm kinh nghiệm và hiểu biết sâu trong lĩnh vực của họ",
        note: "Cụm danh từ dùng 'seasoned' (dày dạn, trải qua nhiều thử thách — ẩn dụ từ gia vị được ướp lâu ngày) thay cho 'experienced employees'. Mang sắc thái tích cực về giá trị của người lao động lớn tuổi. Thường đi với: 'the substantial contributions that seasoned employees bring', 'retain seasoned employees'. Đồng nghĩa: experienced workers, veteran employees, skilled professionals.",
        example:
          "Seasoned employees often provide invaluable insights into the business.",
        exampleTranslation:
          "Những nhân viên dày dạn kinh nghiệm thường cung cấp những hiểu biết vô giá về doanh nghiệp.",
      },
      {
        id: 262,
        word: "Individual and societal levels",
        pronunciation: "/ˌɪndɪˈvɪdʒuəl ənd səˈsaɪətəl ˈlevəlz/",
        meaning:
          "Cấp độ cá nhân và xã hội, phạm vi tác động bao gồm cả từng người riêng lẻ lẫn cộng đồng xã hội rộng lớn",
        note: "Cụm danh từ kết hợp hai phạm vi tác động để thể hiện sự toàn diện của lập luận. 'Societal' (thuộc về xã hội) là dạng tính từ học thuật của 'social'. Thường đi với: 'positive impact at both individual and societal levels', 'effect change at individual and societal levels'. Đồng nghĩa: personal and social dimensions, micro and macro levels, individual and collective spheres.",
        example:
          "The program aims to effect change at both individual and societal levels.",
        exampleTranslation:
          "Chương trình nhằm tạo ra sự thay đổi ở cả cấp độ cá nhân và xã hội.",
      },
      {
        id: 263,
        word: "Maintain financial independence",
        pronunciation: "/meɪnˈteɪn faɪˈnænʃəl ˌɪndɪˈpendəns/",
        meaning:
          "Duy trì sự độc lập tài chính, giữ được khả năng tự lo về mặt kinh tế mà không cần phụ thuộc vào người khác",
        note: "Cụm động từ kết hợp 'maintain' (duy trì, giữ vững) với 'financial independence' (độc lập tài chính). Thường xuất hiện khi liệt kê lợi ích cụ thể của việc người cao tuổi tiếp tục làm việc. Thường đi với: 'allows older adults to maintain financial independence', 'strive to maintain financial independence'. Đồng nghĩa: preserve financial self-sufficiency, sustain economic autonomy.",
        example:
          "She works hard to maintain financial independence from her family.",
        exampleTranslation:
          "Cô ấy làm việc chăm chỉ để duy trì độc lập tài chính khỏi gia đình.",
      },
      {
        id: 264,
        word: "Social security systems",
        pronunciation: "/ˈsəʊʃəl sɪˈkjʊərɪti ˈsɪstəmz/",
        meaning:
          "Hệ thống an sinh xã hội, các chương trình của chính phủ được thiết kế để cung cấp hỗ trợ tài chính cho công dân, đặc biệt là người nghèo, người già hoặc người khuyết tật",
        note: "Cụm danh từ chuyên ngành về chính sách xã hội. Thường xuất hiện trong bài về người cao tuổi, phúc lợi xã hội, ngân sách nhà nước. Thường đi với: 'alleviate the strain on social security systems', 'reform social security systems'. Đồng nghĩa: welfare systems, public assistance programs, state pension systems.",
        example:
          "The social security systems play a crucial role in supporting the nation's most vulnerable populations.",
        exampleTranslation:
          "Hệ thống an sinh xã hội đóng vai trò quan trọng trong việc hỗ trợ các nhóm dân cư dễ bị tổn thương nhất của quốc gia.",
      },
      {
        id: 265,
        word: "Economic stability",
        pronunciation: "/ˌiːkəˈnɒmɪk stəˈbɪlɪti/",
        meaning:
          "Sự ổn định kinh tế, trạng thái nền kinh tế tăng trưởng đều đặn và ít biến động lớn trong hoạt động tổng thể",
        note: "Cụm danh từ chuyên ngành kinh tế, thường xuất hiện trong phần ví dụ về các quốc gia có người cao tuổi vẫn tích cực tham gia lao động. Thường đi với: 'contributed to economic stability', 'ensure/achieve economic stability'. Đồng nghĩa: economic steadiness, macroeconomic stability, financial equilibrium. Phân biệt: 'economic stability' (ổn định kinh tế vĩ mô) vs 'financial stability' (ổn định tài chính cá nhân/tổ chức).",
        example:
          "Economic stability is essential for attracting foreign investments.",
        exampleTranslation:
          "Ổn định kinh tế là cần thiết để thu hút đầu tư nước ngoài.",
      },
      {
        id: 266,
        word: "Sustained employment",
        pronunciation: "/səˈsteɪnd ɪmˈplɔɪmənt/",
        meaning:
          "Việc làm ổn định liên tục, trạng thái có công việc trong thời gian dài mà không bị gián đoạn",
        note: "Cụm danh từ dùng 'sustained' (được duy trì liên tục, bền vững) để nhấn mạnh tính lâu dài của việc làm. Thường xuất hiện trong phần kết luận khi tóm tắt lợi ích của việc tiếp tục làm việc. Thường đi với: 'the advantages that sustained employment offers', 'benefits of sustained employment'. Đồng nghĩa: continuous employment, long-term work, ongoing employment.",
        example:
          "Sustained employment is vital for economic independence and self-esteem.",
        exampleTranslation:
          "Việc làm ổn định là điều quan trọng cho sự độc lập kinh tế và lòng tự trọng.",
      },
      {
        id: 267,
        word: "The elderly population",
        pronunciation: "/ði ˈeldəli ˌpɒpjuˈleɪʃən/",
        meaning:
          "Dân số cao tuổi, nhóm người lớn tuổi trong một cộng đồng hoặc xã hội",
        note: "Cụm danh từ chỉ nhóm người cao tuổi ở cấp độ xã hội. 'Elderly' (cao tuổi) lịch sự hơn 'old people'. Thường xuất hiện khi bàn về chính sách xã hội và tác động của xu hướng dân số. Thường đi với: 'benefits for the elderly population', 'support the elderly population'. Đồng nghĩa: older adults, senior citizens, the aged population. Lưu ý: 'the elderly' có thể dùng một mình như danh từ số nhiều, còn 'elderly population' nhấn mạnh tính chất nhóm/cộng đồng.",
        example:
          "The elderly population requires special attention to ensure their health and well-being.",
        exampleTranslation:
          "Người cao tuổi cần được quan tâm đặc biệt để đảm bảo sức khỏe và tinh thần.",
      },
    ],
  },
  // ==========================================
  // W10 - Task 1: Drug Company Sales by Region (2002–2006)
  // ==========================================
  {
    id: "wr_w10_task1_drug_sales",
    skill: "Writing",
    volume: "9",
    topic: "Economics / Business",
    part: "Task 1 - Drug Company Sales by Region (Stacked Bar Chart)",
    cards: [
      {
        id: 268,
        word: "The largest market",
        pronunciation: "/ðə ˈlɑːdʒɪst ˈmɑːkɪt/",
        meaning:
          "Thị trường lớn nhất, khu vực hoặc phạm vi tiêu thụ lớn nhất trong một nhóm so sánh",
        note: "Cụm danh từ dùng dạng so sánh nhất 'largest' để chỉ thị trường chiếm tỷ trọng cao nhất. Rất phổ biến trong Task 1 khi mô tả điểm xuất phát hoặc vị trí dẫn đầu của một khu vực. Thường đi với: 'America was the largest market for the company', 'dominate the largest market'. Đồng nghĩa: the biggest market, the dominant market, the top market. Phân biệt: 'the largest market' (lớn nhất về quy mô) vs 'the leading market' (dẫn đầu về vị thế/hiệu suất).",
        example:
          "The company is looking to expand into the largest market in Asia.",
        exampleTranslation:
          "Công ty đang tìm cách mở rộng vào thị trường lớn nhất ở Châu Á.",
      },
      {
        id: 269,
        word: "A low of",
        pronunciation: "/ə ləʊ əv/",
        meaning:
          "Mức thấp nhất là, điểm thấp nhất đạt được trong một chuỗi dữ liệu",
        note: "Cụm danh từ dùng 'low' như danh từ (điểm thấp nhất) thay vì tính từ, theo sau bởi con số cụ thể. Cặp đôi với 'a high of' (mức cao nhất là). Rất hữu ích trong Task 1 để đánh dấu đỉnh và đáy của xu hướng. Thường đi với: 'dropped to a low of 27%', 'hit a low of X'. Đồng nghĩa: a bottom of, a minimum of, a trough of. Cặp trái nghĩa: 'a high of' (mức cao nhất là).",
        example: "The stock hit a low of $50 before rebounding.",
        exampleTranslation:
          "Cổ phiếu đã chạm mức thấp nhất là 50 đô la trước khi phục hồi.",
      },
      {
        id: 270,
        word: "Sales percentages",
        pronunciation: "/seɪlz pəˈsentɪdʒɪz/",
        meaning:
          "Tỷ lệ phần trăm bán hàng, phần trăm doanh số của từng khu vực hoặc sản phẩm so với tổng thể",
        note: "Cụm danh từ kết hợp 'sales' (doanh số) với 'percentages' (tỷ lệ %) để chỉ dữ liệu dạng phần trăm trong biểu đồ. Thường dùng trong Task 1 dạng stacked bar chart. Thường đi với: 'exceeding American sales percentages', 'compare sales percentages across regions'. Đồng nghĩa: sales proportions, revenue percentages, market share percentages.",
        example: "The report shows the sales percentages of each product line.",
        exampleTranslation:
          "Báo cáo cho thấy tỉ lệ phần trăm bán hàng của từng dòng sản phẩm.",
      },
      {
        id: 271,
        word: "Sales figures",
        pronunciation: "/seɪlz ˈfɪɡəz/",
        meaning:
          "Số liệu bán hàng, dữ liệu thống kê về doanh số bán ra trong một khoảng thời gian nhất định",
        note: "Cụm danh từ dùng 'figures' (con số, số liệu) thay cho 'data' hay 'numbers' trong ngữ cảnh kinh doanh. Thường xuất hiện trong Task 1 khi mô tả xu hướng doanh số. Thường đi với: 'its sales figures then declined', 'report strong/weak sales figures'. Đồng nghĩa: sales data, revenue figures, sales numbers. Phân biệt: 'sales figures' (số liệu tổng quát) vs 'sales percentages' (tỷ lệ phần trăm cụ thể).",
        example: "The sales figures for this quarter exceeded expectations.",
        exampleTranslation: "Số liệu bán hàng của quý này đã vượt qua kỳ vọng.",
      },
      {
        id: 272,
        word: "Above-mentioned",
        pronunciation: "/əˌbʌv ˈmenʃənd/",
        meaning:
          "Đã được nhắc đến ở trên, đề cập đến những thứ đã được nêu trước đó trong văn bản",
        note: "Tính từ ghép dùng để tham chiếu lại thông tin đã đề cập trước đó, giúp tránh lặp từ và tạo sự mạch lạc trong bài. Thường đi với: 'the above-mentioned regions/factors/strategies'. Đồng nghĩa: the aforementioned, the previously mentioned, the said. Lưu ý: 'above-mentioned' thường viết có gạch nối khi dùng trước danh từ; có thể viết liền 'abovementioned' trong một số tài liệu.",
        example:
          "The above-mentioned strategies will be implemented next month.",
        exampleTranslation:
          "Các chiến lược đã được nhắc đến ở trên sẽ được thực hiện vào tháng tới.",
      },
      {
        id: 273,
        word: "The leading market",
        pronunciation: "/ðə ˈliːdɪŋ ˈmɑːkɪt/",
        meaning:
          "Thị trường dẫn đầu, khu vực chiếm vị trí hàng đầu về doanh số hoặc tầm quan trọng",
        note: "Cụm danh từ dùng 'leading' (dẫn đầu, hàng đầu) để mô tả vị trí ưu việt đã đạt được. Thường xuất hiện ở phần cuối đoạn thân bài khi tổng kết sự thay đổi vị thế của một khu vực. Thường đi với: 'making this region the leading market for the company', 'emerge as the leading market'. Đồng nghĩa: the top market, the dominant market, the primary market. Phân biệt: 'the largest market' (lớn nhất ngay từ đầu) vs 'the leading market' (dẫn đầu — có thể do vươn lên).",
        example: "Our company dominates the leading market in the region.",
        exampleTranslation:
          "Công ty chúng tôi chiếm lĩnh thị trường dẫn đầu trong khu vực.",
      },
    ],
  },

  // ==========================================
  // W10 - Task 2: Career Stability vs Flexibility (Sample 1 - Partly Agree)
  // ==========================================
  {
    id: "wr_w10_task2_career_partly",
    skill: "Writing",
    volume: "9",
    topic: "Work / Career / Professional Development",
    part: "Task 2 - Career Stability vs Flexibility (Partly Agree)",
    cards: [
      {
        id: 274,
        word: "Adhering to",
        pronunciation: "/ədˈhɪərɪŋ tuː/",
        meaning:
          "Tuân thủ, gắn bó với, kiên trì theo đuổi một kế hoạch, nguyên tắc hoặc con đường đã chọn",
        note: "Cụm động từ dùng 'adhere to' (tuân theo, bám sát) thay cho 'follow' hay 'stick to', mang sắc thái trang trọng hơn. Thường xuất hiện trong phần giới thiệu đề bài về sự nghiệp lâu dài. Thường đi với: 'choosing a career path early and adhering to it', 'adhering to company guidelines'. Đồng nghĩa: sticking to, following, committing to, conforming to.",
        example:
          "Adhering to the company's guidelines is essential for maintaining a professional environment.",
        exampleTranslation:
          "Tuân thủ các nguyên tắc của công ty là cần thiết để duy trì một môi trường chuyên nghiệp.",
      },
      {
        id: 275,
        word: "Professional development",
        pronunciation: "/prəˈfeʃənəl dɪˈveləpmənt/",
        meaning:
          "Phát triển chuyên môn, quá trình nâng cao kiến thức, kỹ năng và năng lực trong lĩnh vực nghề nghiệp",
        note: "Cụm danh từ rất phổ biến trong bài viết về giáo dục, sự nghiệp và xã hội. Thường xuất hiện trong thesis statement khi nêu tầm quan trọng của sự phát triển nghề nghiệp. Thường đi với: 'both consistency and flexibility in professional development', 'invest in professional development'. Đồng nghĩa: career development, skill advancement, vocational training.",
        example:
          "Investing in professional development helps employees advance in their careers.",
        exampleTranslation:
          "Đầu tư vào phát triển chuyên môn giúp nhân viên tiến xa hơn trong sự nghiệp của họ.",
      },
      {
        id: 276,
        word: "A deep, nuanced understanding",
        pronunciation: "/ə diːp ˈnjuːɑːnst ˌʌndəˈstændɪŋ/",
        meaning:
          "Sự hiểu biết sâu sắc và tinh tế, nhận thức không chỉ nằm ở bề mặt mà còn nhận ra những khác biệt và sắc thái phức tạp",
        note: "Cụm danh từ kết hợp hai tính từ: 'deep' (sâu sắc, kỹ lưỡng) và 'nuanced' (có sắc thái, tinh tế — từ tiếng Pháp 'nuance'). Đây là cụm từ học thuật cao, thể hiện hiểu biết vượt tầm thông thường. Thường đi với: 'benefit from a deep, nuanced understanding of their field', 'develop a deep, nuanced understanding'. Đồng nghĩa: a thorough and sophisticated understanding, an in-depth and subtle grasp.",
        example:
          "Her deep, nuanced understanding of the subject impressed the entire panel.",
        exampleTranslation:
          "Sự hiểu biết sâu sắc và tinh tế về chủ đề đã làm ấn tượng với toàn bộ ban giám khảo.",
      },
      {
        id: 277,
        word: "Accumulation",
        pronunciation: "/əˌkjuːmjəˈleɪʃən/",
        meaning:
          "Sự tích lũy, quá trình gom góp và tập hợp dần dần theo thời gian",
        note: "Danh từ từ động từ 'accumulate' (tích lũy), thường đứng sau giới từ 'for the accumulation of'. Rất hữu ích khi lập luận về lợi ích của việc gắn bó lâu dài với một nghề. Thường đi với: 'the accumulation of specialized knowledge and skills', 'allow for the accumulation of experience'. Đồng nghĩa: build-up, amassing, gathering, stockpiling. Phân biệt: 'accumulation' (quá trình tích lũy) vs 'collection' (bộ sưu tập đã hoàn chỉnh).",
        example:
          "The accumulation of data over years has enabled groundbreaking research.",
        exampleTranslation:
          "Sự tích lũy dữ liệu qua nhiều năm đã tạo điều kiện cho các nghiên cứu đột phá.",
      },
      {
        id: 278,
        word: "Recognition",
        pronunciation: "/ˌrekəɡˈnɪʃən/",
        meaning:
          "Sự công nhận, việc được thừa nhận và đánh giá cao về thành tích, năng lực hoặc đóng góp",
        note: "Danh từ chỉ sự thừa nhận từ người khác hoặc xã hội. Trong ngữ cảnh sự nghiệp, 'recognition' là một trong những động lực và phần thưởng quan trọng. Thường đi với: 'significant achievements and recognition are more attainable', 'receive/gain recognition for'. Đồng nghĩa: acknowledgment, acclaim, appreciation, validation.",
        example:
          "His innovative work received wide recognition within the scientific community.",
        exampleTranslation:
          "Công việc sáng tạo của anh ấy đã nhận được sự công nhận rộng rãi trong cộng đồng khoa học.",
      },
      {
        id: 279,
        word: "Groundbreaking information",
        pronunciation: "/ˈɡraʊndbreɪkɪŋ ˌɪnfəˈmeɪʃən/",
        meaning:
          "Thông tin đột phá, dữ liệu hoặc phát hiện mang tính cách mạng, chưa từng có trước đây",
        note: "Cụm danh từ dùng 'groundbreaking' (mang tính đột phá, tiên phong — nghĩa gốc là 'phá đất khai hoang') để diễn tả tính đột phá của thông tin. Thường xuất hiện khi đưa ví dụ về thành tựu đạt được nhờ kiên trì lâu dài. Thường đi với: 'discover groundbreaking information', 'uncover groundbreaking findings'. Đồng nghĩa: pioneering discoveries, revolutionary findings, innovative insights.",
        example:
          "The research team uncovered groundbreaking information that could change the field forever.",
        exampleTranslation:
          "Nhóm nghiên cứu đã phát hiện ra thông tin đột phá có thể thay đổi lĩnh vực mãi mãi.",
      },
      {
        id: 280,
        word: "Individual growth trajectories",
        pronunciation: "/ˌɪndɪˈvɪdʒuəl ɡrəʊθ trəˈdʒektəriz/",
        meaning:
          "Quỹ đạo phát triển cá nhân, lộ trình và hướng đi phát triển riêng biệt của từng người theo thời gian",
        note: "Cụm danh từ học thuật cao dùng 'trajectories' (quỹ đạo — từ vật lý học, chỉ đường bay của vật thể) theo nghĩa bóng. Nhấn mạnh sự phát triển mỗi người đi theo một hướng độc đáo riêng. Thường đi với: 'the evolving nature of the global job market and individual growth trajectories'. Đồng nghĩa: personal development paths, individual career journeys, personal growth arcs.",
        example:
          "Each employee's individual growth trajectories were considered in the annual performance review.",
        exampleTranslation:
          "Quỹ đạo phát triển cá nhân của mỗi nhân viên đã được xem xét trong đánh giá hiệu suất hàng năm.",
      },
      {
        id: 281,
        word: "A fulfilling working life",
        pronunciation: "/ə fʊlˈfɪlɪŋ ˈwɜːkɪŋ laɪf/",
        meaning:
          "Một cuộc sống làm việc thỏa mãn, sự nghiệp mang lại cảm giác có ý nghĩa, trọn vẹn và hài lòng",
        note: "Cụm danh từ dùng 'fulfilling' (đem lại sự thỏa mãn, trọn vẹn) để mô tả chất lượng của cuộc sống nghề nghiệp. Là từ chủ chốt trong cả đề bài Task 2 này. Thường đi với: 'lead to a fulfilling working life', 'enjoy a fulfilling working life'. Đồng nghĩa: a satisfying career, a rewarding professional life, a meaningful work life.",
        example:
          "He looks back on a fulfilling working life, full of achievements and meaningful connections.",
        exampleTranslation:
          "Anh ấy nhìn lại một cuộc sống làm việc thỏa mãn, đầy ắp thành tựu và mối quan hệ có ý nghĩa.",
      },
      {
        id: 282,
        word: "The willingness to embrace change",
        pronunciation: "/ðə ˈwɪlɪŋnəs tuː ɪmˈbreɪs tʃeɪndʒ/",
        meaning:
          "Sự sẵn lòng đón nhận sự thay đổi, thái độ cởi mở và chủ động chào đón những điều mới thay vì né tránh",
        note: "Cụm danh từ dùng 'willingness' (sự sẵn lòng, tinh thần tự nguyện) kết hợp với 'embrace change' (đón nhận thay đổi — 'embrace' nghĩa gốc là ôm chặt). Thường xuất hiện khi lập luận về lợi ích của việc linh hoạt trong sự nghiệp. Thường đi với: 'the willingness to embrace change can lead to professional satisfaction', 'demonstrate the willingness to embrace change'. Đồng nghĩa: openness to change, receptiveness to new opportunities, adaptability.",
        example:
          "The company's success was largely due to its leaders' willingness to embrace change.",
        exampleTranslation:
          "Thành công của công ty chủ yếu đến từ sự sẵn lòng đón nhận sự thay đổi của các lãnh đạo.",
      },
      {
        id: 283,
        word: "Professional satisfaction and success",
        pronunciation: "/prəˈfeʃənəl ˌsætɪsˈfækʃən ənd səkˈses/",
        meaning:
          "Sự hài lòng và thành công nghề nghiệp, cảm giác thỏa mãn kết hợp với những thành tựu đạt được trong sự nghiệp",
        note: "Cụm danh từ kép kết hợp hai khía cạnh: 'satisfaction' (hài lòng — cảm giác chủ quan) và 'success' (thành công — kết quả khách quan). Cả hai cùng nhau tạo thành bức tranh toàn diện về sự nghiệp lý tưởng. Thường đi với: 'lead to professional satisfaction and success', 'achieve professional satisfaction and success'. Đồng nghĩa: career fulfillment and achievement, job satisfaction and accomplishment.",
        example:
          "Achieving professional satisfaction and success is her main career goal.",
        exampleTranslation:
          "Đạt được sự hài lòng và thành công nghề nghiệp là mục tiêu sự nghiệp chính của cô ấy.",
      },
      {
        id: 284,
        word: "Adaptability",
        pronunciation: "/əˌdæptəˈbɪlɪti/",
        meaning:
          "Sự linh hoạt, khả năng thích nghi và điều chỉnh bản thân phù hợp với hoàn cảnh hoặc yêu cầu mới",
        note: "Danh từ từ tính từ 'adaptable', chỉ năng lực quan trọng trong thị trường lao động hiện đại. Thường xuất hiện trong phần kết luận hoặc lập luận về lợi ích của việc thay đổi nghề. Thường đi với: 'see the merits of adaptability', 'demonstrate adaptability in the workplace'. Đồng nghĩa: flexibility, versatility, resilience. Phân biệt: 'adaptability' (khả năng thích nghi với hoàn cảnh mới) vs 'flexibility' (tính linh hoạt trong cách làm việc).",
        example:
          "Adaptability in the workplace is highly valued, especially in rapidly changing industries.",
        exampleTranslation:
          "Sự linh hoạt trong nơi làm việc được đánh giá cao, đặc biệt trong các ngành công nghiệp thay đổi nhanh chóng.",
      },
      {
        id: 285,
        word: "Steadfast commitment",
        pronunciation: "/ˈstedfɑːst kəˈmɪtmənt/",
        meaning:
          "Sự cam kết kiên định, sự tận tâm và trung thành vững chắc không lay chuyển với một mục tiêu hoặc con đường",
        note: "Cụm danh từ dùng 'steadfast' (kiên định, không dao động — từ cổ 'stead' + 'fast' = vị trí vững chắc) để nhấn mạnh sự bền bỉ. Mạnh hơn 'strong commitment'. Thường xuất hiện trong phần kết luận khi tóm tắt hai quan điểm. Thường đi với: 'both steadfast commitment to a chosen field and the flexibility to navigate', 'demonstrate steadfast commitment'. Đồng nghĩa: unwavering dedication, firm resolve, enduring loyalty.",
        example:
          "His steadfast commitment to improving community health standards has inspired many.",
        exampleTranslation:
          "Sự cam kết kiên định của anh ấy trong việc cải thiện các tiêu chuẩn sức khỏe cộng đồng đã truyền cảm hứng cho nhiều người.",
      },
    ],
  },

  // ==========================================
  // W10 - Task 2: Career Stability vs Flexibility (Sample 2 - Totally Disagree)
  // ==========================================
  {
    id: "wr_w10_task2_career_disagree",
    skill: "Writing",
    volume: "9",
    topic: "Work / Career / Professional Development",
    part: "Task 2 - Career Stability vs Flexibility (Totally Disagree)",
    cards: [
      {
        id: 286,
        word: "Frequently switch careers",
        pronunciation: "/ˈfriːkwəntli swɪtʃ kəˈrɪəz/",
        meaning:
          "Thường xuyên chuyển đổi sự nghiệp, thói quen thay đổi lĩnh vực nghề nghiệp nhiều lần",
        note: "Cụm động từ dùng 'switch' (chuyển đổi, đổi sang) mang tính ngẫu nhiên và đột ngột hơn 'change'. 'Frequently' nhấn mạnh tần suất lặp lại cao. Thường xuất hiện khi đề cập đến nhóm người đối lập với những người kiên định với một nghề. Thường đi với: 'those who frequently switch careers', 'benefits/drawbacks of frequently switching careers'. Đồng nghĩa: regularly change careers, repeatedly shift professions, often transition between jobs.",
        example:
          "Professionals who frequently switch careers may seek diverse experiences or fulfillment beyond a single field.",
        exampleTranslation:
          "Những người làm việc chuyên nghiệp thường xuyên chuyển đổi sự nghiệp có thể tìm kiếm những trải nghiệm đa dạng hoặc sự thỏa mãn ngoài một lĩnh vực cố định.",
      },
      {
        id: 287,
        word: "Varied professional experiences",
        pronunciation: "/ˈveərid prəˈfeʃənəl ɪkˈspɪəriənsɪz/",
        meaning:
          "Trải nghiệm nghề nghiệp đa dạng, những kinh nghiệm làm việc phong phú từ nhiều lĩnh vực và môi trường khác nhau",
        note: "Cụm danh từ dùng 'varied' (đa dạng, phong phú — dạng tính từ của động từ 'vary') thay cho 'different'. Nhấn mạnh sự phong phú và bổ sung lẫn nhau của các trải nghiệm. Thường đi với: 'the richness that come with varied professional experiences', 'gain varied professional experiences'. Đồng nghĩa: diverse work experiences, a range of professional backgrounds, multifaceted career experiences.",
        example:
          "Her resume showcases varied professional experiences, ranging from tech startups to nonprofit management.",
        exampleTranslation:
          "Bản lý lịch của cô ấy trưng bày những trải nghiệm nghề nghiệp đa dạng, từ các công ty khởi nghiệp công nghệ đến quản lý phi lợi nhuận.",
      },
      {
        id: 288,
        word: "Early career selection",
        pronunciation: "/ˈɜːli kəˈrɪər sɪˈlekʃən/",
        meaning:
          "Việc chọn lựa sự nghiệp sớm, quyết định về con đường nghề nghiệp được đưa ra từ giai đoạn đầu cuộc đời",
        note: "Cụm danh từ dùng 'selection' (sự lựa chọn, quyết định chọn lọc) thay cho 'choice', mang sắc thái học thuật hơn. Thường xuất hiện trong phần counterargument khi trình bày quan điểm đối lập. Thường đi với: 'early career selection and long-term commitment provide stability', 'make an early career selection'. Đồng nghĩa: early career choice, an initial career decision, early professional direction.",
        example:
          "Making an early career selection allows individuals to focus their education and skill development toward their chosen field.",
        exampleTranslation:
          "Việc chọn lựa sự nghiệp sớm giúp cá nhân tập trung giáo dục và phát triển kỹ năng cho lĩnh vực họ đã chọn.",
      },
      {
        id: 289,
        word: "Long-term commitment",
        pronunciation: "/ˌlɒŋ tɜːm kəˈmɪtmənt/",
        meaning:
          "Sự cam kết lâu dài, sự tận tâm và kiên trì theo đuổi trong một khoảng thời gian dài",
        note: "Cụm danh từ kết hợp tính từ ghép 'long-term' (dài hạn) với 'commitment' (cam kết, sự tận tâm). Thường xuất hiện trong phần counterargument khi liệt kê lợi ích của việc gắn bó lâu dài. Thường đi với: 'long-term commitment provides stability and deep expertise', 'demonstrate long-term commitment to a cause'. Đồng nghĩa: sustained dedication, enduring commitment, prolonged devotion.",
        example:
          "A long-term commitment to a career can lead to significant advancements and achievements in that field.",
        exampleTranslation:
          "Sự cam kết lâu dài với một sự nghiệp có thể dẫn đến những tiến bộ và thành tựu đáng kể trong lĩnh vực đó.",
      },
      {
        id: 290,
        word: "A clear professional identity",
        pronunciation: "/ə klɪər prəˈfeʃənəl aɪˈdentɪti/",
        meaning:
          "Bản sắc nghề nghiệp rõ ràng, hình ảnh và vị thế nghề nghiệp cụ thể và dễ nhận biết của một người",
        note: "Cụm danh từ kết hợp 'clear' (rõ ràng, dứt khoát) với 'professional identity' (bản sắc/danh tính nghề nghiệp). Là một trong những lợi ích được nêu trong counterargument. Thường đi với: 'provide a clear professional identity', 'develop/establish a clear professional identity'. Đồng nghĩa: a defined professional persona, a distinct career identity, a strong occupational self-concept.",
        example:
          "Developing a clear professional identity helps individuals stand out in their field and connect with like-minded professionals.",
        exampleTranslation:
          "Việc phát triển một bản sắc nghề nghiệp rõ ràng giúp cá nhân nổi bật trong lĩnh vực của họ và kết nối với những người chuyên nghiệp cùng chí hướng.",
      },
      {
        id: 291,
        word: "The dynamic nature of the modern workforce",
        pronunciation: "/ðə daɪˈnæmɪk ˈneɪtʃər əv ðə ˈmɒdən ˈwɜːkfɔːs/",
        meaning:
          "Bản chất năng động của lực lượng lao động hiện đại, đặc tính liên tục thay đổi và phát triển của thị trường lao động ngày nay",
        note: "Cụm danh từ học thuật dùng 'dynamic' (năng động, không ngừng thay đổi) và 'nature' (bản chất, đặc tính). Thường dùng trong phần refutation để chứng minh rằng thị trường lao động hiện đại đòi hỏi sự linh hoạt. Thường đi với: 'the dynamic nature of the modern workforce requires adaptability'. Đồng nghĩa: the ever-changing modern job market, the fluid nature of contemporary employment.",
        example:
          "The dynamic nature of the modern workforce requires professionals to continuously adapt and update their skills.",
        exampleTranslation:
          "Bản chất động của lực lượng lao động hiện đại đòi hỏi các chuyên gia phải liên tục thích nghi và cập nhật kỹ năng của mình.",
      },
      {
        id: 292,
        word: "A diverse skill set",
        pronunciation: "/ə daɪˈvɜːs skɪl set/",
        meaning:
          "Bộ kỹ năng đa dạng, tập hợp các năng lực phong phú và đa dạng từ nhiều lĩnh vực khác nhau",
        note: "Cụm danh từ dùng 'diverse' (đa dạng, phong phú) và 'skill set' (bộ kỹ năng). Thường xuất hiện khi lập luận về lợi ích của việc thay đổi nghề. Thường đi với: 'demands adaptability and a diverse skill set', 'possess/develop a diverse skill set'. Đồng nghĩa: a varied skill set, a broad range of skills, multifaceted competencies. Phân biệt: 'a diverse skill set' (nhiều kỹ năng khác nhau) vs 'specialized skills' (kỹ năng chuyên sâu một lĩnh vực).",
        example:
          "Possessing a diverse skill set makes an individual more versatile and valuable in the job market.",
        exampleTranslation:
          "Việc sở hữu một bộ kỹ năng đa dạng làm cho một cá nhân trở nên linh hoạt và có giá trị hơn trên thị trường việc làm.",
      },
      {
        id: 293,
        word: "Embracing varied job roles",
        pronunciation: "/ɪmˈbreɪsɪŋ ˈveərid dʒɒb rəʊlz/",
        meaning:
          "Chấp nhận và đón nhận các vai trò công việc đa dạng, thái độ tích cực chủ động với nhiều loại vị trí và nhiệm vụ khác nhau",
        note: "Cụm động từ dùng 'embracing' (đón nhận tích cực) thay cho 'accepting' hay 'taking on'. 'Embrace' mang hàm ý chủ động và nhiệt tình, không chỉ chấp nhận thụ động. Thường đi với: 'embracing varied job roles offers exposure to different industries'. Đồng nghĩa: taking on diverse roles, welcoming different positions, actively pursuing various job experiences.",
        example:
          "By embracing varied job roles, she gained a wide range of skills and insights across different industries.",
        exampleTranslation:
          "Bằng cách chấp nhận các vai trò công việc đa dạng, cô ấy đã đạt được nhiều kỹ năng và hiểu biết trong nhiều lĩnh vực khác nhau.",
      },
      {
        id: 294,
        word: "Versatile",
        pronunciation: "/ˈvɜːsətaɪl/",
        meaning:
          "Linh hoạt, đa năng, có khả năng thích nghi và hoạt động hiệu quả trong nhiều tình huống hay lĩnh vực khác nhau",
        note: "Tính từ chỉ khả năng thích ứng rộng rãi, thường đứng sau 'more' để so sánh. Thường xuất hiện khi mô tả lợi ích của người có nhiều kinh nghiệm đa dạng. Thường đi với: 'making individuals more versatile', 'a versatile professional/employee'. Đồng nghĩa: adaptable, flexible, multifaceted, multipurpose. Lưu ý phát âm: /ˈvɜːsətaɪl/ (Anh-Mỹ) hoặc /ˈvɜːsətɪl/ (Anh-Anh).",
        example:
          "His versatile skill set made him an invaluable asset to the company in various projects.",
        exampleTranslation:
          "Bộ kỹ năng linh hoạt của anh ấy làm cho anh trở thành tài sản vô giá cho công ty trong nhiều dự án khác nhau.",
      },
      {
        id: 295,
        word: "Resilient",
        pronunciation: "/rɪˈzɪliənt/",
        meaning:
          "Kiên cường, có khả năng phục hồi nhanh chóng sau khó khăn, thất bại hoặc áp lực",
        note: "Tính từ từ danh từ 'resilience', chỉ đặc tính 'bật lại' sau những trở ngại. Thường đi liền với 'versatile' và 'innovative' khi mô tả phẩm chất của người lao động đa dạng kinh nghiệm. Thường đi với: 'making individuals more resilient', 'a resilient professional/worker'. Đồng nghĩa: tough, adaptable, robust, able to bounce back. Phân biệt: 'resilient' (kiên cường, phục hồi sau thất bại) vs 'persistent' (kiên trì tiếp tục dù khó khăn).",
        example:
          "Her resilient nature helped her overcome professional setbacks and continue to advance her career.",
        exampleTranslation:
          "Bản tính kiên cường của cô ấy đã giúp cô vượt qua những thất bại trong sự nghiệp và tiếp tục tiến lên.",
      },
      {
        id: 296,
        word: "A profound understanding",
        pronunciation: "/ə prəˈfaʊnd ˌʌndəˈstændɪŋ/",
        meaning:
          "Sự hiểu biết sâu sắc, nhận thức đạt đến mức độ thấu đáo và sâu xa vượt tầm bề mặt",
        note: "Cụm danh từ dùng 'profound' (sâu sắc, thâm thúy — mạnh hơn 'deep') để diễn tả hiểu biết ở mức độ cao nhất. Thường xuất hiện khi mô tả kết quả của nhiều năm trải nghiệm đa dạng. Thường đi với: 'contribute to a profound understanding of one's strengths', 'develop a profound understanding of'. Đồng nghĩa: an in-depth understanding, a thorough grasp, a deep insight into.",
        example:
          "Years of research gave him a profound understanding of the subject, enabling groundbreaking discoveries.",
        exampleTranslation:
          "Nhiều năm nghiên cứu đã cho anh ấy sự hiểu biết sâu sắc về chủ đề, tạo ra những khám phá đột phá.",
      },
      {
        id: 297,
        word: "Flexibility",
        pronunciation: "/ˌfleksɪˈbɪlɪti/",
        meaning:
          "Sự linh hoạt, khả năng dễ dàng thay đổi và thích nghi với các điều kiện hoặc yêu cầu mới",
        note: "Danh từ từ tính từ 'flexible', chỉ một trong những giá trị cốt lõi trong thị trường lao động hiện đại. Thường xuất hiện trong phần kết luận khi tóm tắt lập luận ủng hộ việc thay đổi nghề. Thường đi với: 'the importance of flexibility', 'demonstrate flexibility'. Đồng nghĩa: adaptability, versatility, pliability. Phân biệt: 'flexibility' (linh hoạt về phương pháp và thích nghi) vs 'adaptability' (thích nghi với hoàn cảnh mới).",
        example:
          "The team's flexibility was key in successfully navigating the challenges of the rapidly changing market.",
        exampleTranslation:
          "Sự linh hoạt của đội nhóm là chìa khóa để vượt qua thành công những thách thức của thị trường thay đổi nhanh chóng.",
      },
      {
        id: 298,
        word: "The pursuit of diverse experiences",
        pronunciation: "/ðə pəˈsjuːt əv daɪˈvɜːs ɪkˈspɪəriənsɪz/",
        meaning:
          "Việc theo đuổi các trải nghiệm đa dạng, hành trình chủ động tìm kiếm và tích lũy nhiều loại kinh nghiệm khác nhau",
        note: "Cụm danh từ dùng 'the pursuit of' (việc theo đuổi — chủ động, có mục tiêu) kết hợp với 'diverse experiences' (trải nghiệm đa dạng). 'Pursuit' mang hàm ý nỗ lực có định hướng. Thường đi với: 'the pursuit of diverse experiences for personal and professional development'. Đồng nghĩa: the quest for varied experiences, seeking out a range of professional encounters, actively accumulating diverse career experiences.",
        example:
          "The pursuit of diverse experiences enriched her personal and professional life, giving her a unique perspective on problem-solving.",
        exampleTranslation:
          "Việc theo đuổi các trải nghiệm đa dạng đã làm phong phú cuộc sống cá nhân và nghề nghiệp của cô ấy, cho cô ấy một góc nhìn độc đáo về giải quyết vấn đề.",
      },
    ],
  },
];
