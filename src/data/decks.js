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
];
