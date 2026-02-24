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

  // ==========================================
  // P1.4 - Sunglasses
  // ==========================================
  {
    id: "sp_s2_p4_sunglasses",
    skill: "Speaking",
    volume: "S2",
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
    volume: "S2",
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
    volume: "S2",
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
    volume: "S2",
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
    volume: "S2",
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
    volume: "S2",
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
    volume: "S2",
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
];
