// Dữ liệu Flashcard Decks - IELTS Speaking S1
// Nguồn: ZIM IELTS Speaking S1
// Cấu trúc: skill, volume, topic, part, và mảng cards (có đầy đủ meaning + note)

export const flashcardDecks = [
  // ==========================================
  // P1.1 - Your Home
  // ==========================================
  {
    id: "sp_s1_p1_home",
    skill: "Speaking",
    volume: "S1",
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
    volume: "S1",
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
    volume: "S1",
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
    volume: "S1",
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
];
