// internalLinking.js
import fs from 'fs/promises';
import path from 'path';

const PAGES_DIR = './src/pages/question';

const questions = [
  {
    id: 1732622631351,
    title: "Comforting Sympathy Thank You Messages to Coworkers",
    description: "Comprehensive guide about Comforting Sympathy Thank You Messages to Coworkers",
    slug: "sympathy-thank-you-messages-to-coworkers",
    category: "Sympathy"
  },
  {
    id: 1732622610453,
    title: "Offering Sympathy Messages in Spanish:  Gentle Comfort in Sorrow",
    description: "Comprehensive guide about Offering Sympathy Messages in Spanish:  Gentle Comfort in Sorrow",
    slug: "sympathy-messages-in-spanish",
    category: "Sympathy"
  },
  {
    id: 1732622591986,
    title: "Sympathy Messages for Loss of Grandmother:  Soothing Hearts in Grief",
    description: "Comprehensive guide about Sympathy Messages for Loss of Grandmother:  Soothing Hearts in Grief",
    slug: "sympathy-messages-for-loss-of-grandmother",
    category: "Sympathy"
  },
  {
    id: 1732622572536,
    title: "Supporting Sympathy Messages for Business Through Grief",
    description: "Comprehensive guide about Supporting Sympathy Messages for Business Through Grief",
    slug: "sympathy-messages-for-business",
    category: "Sympathy"
  },
  {
    id: 1732622554541,
    title: "Sending Sympathy Message Images:  Comforting Hearts in Sorrow",
    description: "Comprehensive guide about Sending Sympathy Message Images:  Comforting Hearts in Sorrow",
    slug: "sympathy-message-images",
    category: "Sympathy"
  },
  {
    id: 1732622538553,
    title: "Whispering Sympathy Messages for Mother, Offering Solace and Strength",
    description: "Comprehensive guide about Whispering Sympathy Messages for Mother, Offering Solace and Strength",
    slug: "sympathy-message-for-mother",
    category: "Sympathy"
  },
  {
    id: 1732622521445,
    title: "Embracing Hearts: Sympathy Message for Loss of Husband and Father",
    description: "Comprehensive guide about Embracing Hearts: Sympathy Message for Loss of Husband and Father",
    slug: "sympathy-message-for-loss-of-husband-and-father",
    category: "Sympathy"
  },
  {
    id: 1732622498522,
    title: "Sharing Sympathy Message for Loss of Father from Coworkers, Offering Comfort and Strength",
    description: "Comprehensive guide about Sharing Sympathy Message for Loss of Father from Coworkers, Offering Comfort and Strength",
    slug: "sympathy-message-for-loss-of-father-from-coworkers",
    category: "Sympathy"
  },
  {
    id: 1732622473597,
    title: "Offering Comfort: Sympathy Message for Flowers from Company",
    description: "Comprehensive guide about Offering Comfort: Sympathy Message for Flowers from Company",
    slug: "sympathy-message-for-flowers-from-company",
    category: "Sympathy"
  },
  {
    id: 1732622454704,
    title: "Sympathy message for coworker loss of father:  Embracing Grief with Gentle Support",
    description: "Comprehensive guide about Sympathy message for coworker loss of father:  Embracing Grief with Gentle Support",
    slug: "sympathy-message-for-coworker-loss-of-father",
    category: "Sympathy"
  },
  {
    id: 1732622434782,
    title: "Extending Sympathy Message for Colleague, Offering Strength",
    description: "Comprehensive guide about Extending Sympathy Message for Colleague, Offering Strength",
    slug: "sympathy-message-for-colleague",
    category: "Sympathy"
  },
  {
    id: 1732622415610,
    title: "Sympathy Flowers Card Message:  Offering Comfort's Gentle Embrace",
    description: "Comprehensive guide about Sympathy Flowers Card Message:  Offering Comfort's Gentle Embrace",
    slug: "sympathy-flowers-card-message",
    category: "Sympathy"
  },
  {
    id: 1732622399010,
    title: "Sympathy Flower Message for Funeral:  Offering Comfort's Gentle Embrace",
    description: "Comprehensive guide about Sympathy Flower Message for Funeral:  Offering Comfort's Gentle Embrace",
    slug: "sympathy-flower-message-for-funeral",
    category: "Sympathy"
  },
  {
    id: 1732622378609,
    title: "Embracing Sympathy Card Message for Loss of Brother Through Grief",
    description: "Comprehensive guide about Embracing Sympathy Card Message for Loss of Brother Through Grief",
    slug: "sympathy-card-message-for-loss-of-brother",
    category: "Sympathy"
  },
  {
    id: 1732622358702,
    title: "Spanish Sympathy Messages:  Soothing Hearts in Sorrow",
    description: "Comprehensive guide about Spanish Sympathy Messages:  Soothing Hearts in Sorrow",
    slug: "spanish-sympathy-messages",
    category: "Sympathy"
  },
  {
    id: 1732622340587,
    title: "Soothing Religious Sympathy Messages for Loss of Husband, Offering Comfort and Peace",
    description: "Comprehensive guide about Soothing Religious Sympathy Messages for Loss of Husband, Offering Comfort and Peace",
    slug: "religious-sympathy-messages-for-loss-of-husband",
    category: "Sympathy"
  },
  {
    id: 1732622321636,
    title: "Soothing Religious Sympathy Message for Loss of Husband, Offering Peace",
    description: "Comprehensive guide about Soothing Religious Sympathy Message for Loss of Husband, Offering Peace",
    slug: "religious-sympathy-message-for-loss-of-husband",
    category: "Sympathy"
  },
  {
    id: 1732622299424,
    title: "Soothing Religious Messages of Sympathy: Finding Peace in Grief",
    description: "Comprehensive guide about Soothing Religious Messages of Sympathy: Finding Peace in Grief",
    slug: "religious-messages-of-sympathy",
    category: "Sympathy"
  },
  {
    id: 1732622279889,
    title: "Professional Sympathy Message:  Offering Comfort and Strength",
    description: "Comprehensive guide about Professional Sympathy Message:  Offering Comfort and Strength",
    slug: "professional-sympathy-message",
    category: "Sympathy"
  },
  {
    id: 1732622260398,
    title: "Sending Prayer Religious Sympathy Messages:  A Gentle Embrace of Hope",
    description: "Comprehensive guide about Sending Prayer Religious Sympathy Messages:  A Gentle Embrace of Hope",
    slug: "prayer-religious-sympathy-message",
    category: "Sympathy"
  },
  {
    id: 1732622236813,
    title: "Soothing Pet Loss Sympathy Card Messages Offering Gentle Comfort",
    description: "Comprehensive guide about Soothing Pet Loss Sympathy Card Messages Offering Gentle Comfort",
    slug: "pet-loss-sympathy-card-message",
    category: "Sympathy"
  },
  {
    id: 1732622219438,
    title: "A Message of Thanks for Sympathy: Embracing Your Kindness",
    description: "Comprehensive guide about A Message of Thanks for Sympathy: Embracing Your Kindness",
    slug: "message-of-thanks-for-sympathy",
    category: "Sympathy"
  },
  {
    id: 1732622200408,
    title: "Embracing Loss of an Aunt Messages of Sympathy and Grief",
    description: "Comprehensive guide about Embracing Loss of an Aunt Messages of Sympathy and Grief",
    slug: "loss-of-an-aunt-messages-of-sympathy",
    category: "Sympathy"
  },
  {
    id: 1732622182911,
    title: "Images of Sympathy Messages:  Soothing Hearts in Sorrow",
    description: "Comprehensive guide about Images of Sympathy Messages:  Soothing Hearts in Sorrow",
    slug: "images-of-sympathy-messages",
    category: "Sympathy"
  },
  {
    id: 1732622162425,
    title: "Christian Sympathy Card Messages:  Offering Comfort's Gentle Embrace",
    description: "Comprehensive guide about Christian Sympathy Card Messages:  Offering Comfort's Gentle Embrace",
    slug: "christian-sympathy-card-messages",
    category: "Sympathy"
  },
  {
    id: 1732622143226,
    title: "Whispering Sympathy Religious Messages: Finding Solace",
    description: "Comprehensive guide about Whispering Sympathy Religious Messages: Finding Solace",
    slug: "sympathy-religious-message",
    category: "Sympathy"
  },
  {
    id: 1732622124821,
    title: "Comforting Sympathy Messages Loss of a Mother Quotes for a Friend",
    description: "Comprehensive guide about Comforting Sympathy Messages Loss of a Mother Quotes for a Friend",
    slug: "sympathy-messages-loss-of-a-mother-quotes-for-a-friend",
    category: "Sympathy"
  },
  {
    id: 1732622106796,
    title: "Embracing Sympathy Messages for the Loss of a Son, Offering Comfort and Peace",
    description: "Comprehensive guide about Embracing Sympathy Messages for the Loss of a Son, Offering Comfort and Peace",
    slug: "sympathy-messages-for-the-loss-of-a-son",
    category: "Sympathy"
  },
  {
    id: 1732622087474,
    title: "Sympathy Messages for Loss of a Wife:  Embracing Grief with Gentle Support",
    description: "Comprehensive guide about Sympathy Messages for Loss of a Wife:  Embracing Grief with Gentle Support",
    slug: "sympathy-messages-for-loss-of-a-wife",
    category: "Sympathy"
  },
  {
    id: 1732622066048,
    title: "Comforting Sympathy Messages for Loss of a Pet Through Grief",
    description: "Comprehensive guide about Comforting Sympathy Messages for Loss of a Pet Through Grief",
    slug: "sympathy-messages-for-loss-of-a-pet",
    category: "Sympathy"
  },
  {
    id: 1732622044780,
    title: "Embracing Hearts: Sympathy Message Loss of Husband, Finding Peace",
    description: "Comprehensive guide about Embracing Hearts: Sympathy Message Loss of Husband, Finding Peace",
    slug: "sympathy-message-loss-of-husband",
    category: "Sympathy"
  },
  {
    id: 1732622025166,
    title: "Soothing Sympathy Message for Loss of Grandfather, Offering Gentle Peace",
    description: "Comprehensive guide about Soothing Sympathy Message for Loss of Grandfather, Offering Gentle Peace",
    slug: "sympathy-message-for-loss-of-grandfather",
    category: "Sympathy"
  },
  {
    id: 1732622004705,
    title: "Embracing Hearts: Sympathy Message for Loss of Daughter, Finding Peace",
    description: "Comprehensive guide about Embracing Hearts: Sympathy Message for Loss of Daughter, Finding Peace",
    slug: "sympathy-message-for-loss-of-daughter",
    category: "Sympathy"
  },
  {
    id: 1732621981382,
    title: "Sympathy Flowers Messages:  Soothing Hearts in Sorrow",
    description: "Comprehensive guide about Sympathy Flowers Messages:  Soothing Hearts in Sorrow",
    slug: "sympathy-flowers-messages",
    category: "Sympathy"
  },
  {
    id: 1732621964678,
    title: "Comforting Sympathy Card Messages for Pets During Grief",
    description: "Comprehensive guide about Comforting Sympathy Card Messages for Pets During Grief",
    slug: "sympathy-card-messages-for-pets",
    category: "Sympathy"
  },
  {
    id: 1732621944773,
    title: "Spiritual Sympathy Messages for Cards:  Soothing Souls in Sorrow",
    description: "Comprehensive guide about Spiritual Sympathy Messages for Cards:  Soothing Souls in Sorrow",
    slug: "spiritual-sympathy-messages-for-cards",
    category: "Sympathy"
  },
  {
    id: 1732621927323,
    title: "Whispering Spiritual Sympathy Messages, Offering Peace",
    description: "Comprehensive guide about Whispering Spiritual Sympathy Messages, Offering Peace",
    slug: "spiritual-sympathy-message",
    category: "Sympathy"
  },
  {
    id: 1732621909433,
    title: "Prayer Comfort Sympathy Message:  Soothing Hearts in Sorrow",
    description: "Comprehensive guide about Prayer Comfort Sympathy Message:  Soothing Hearts in Sorrow",
    slug: "prayer-comfort-sympathy-message",
    category: "Sympathy"
  },
  {
    id: 1732621888173,
    title: "Pet Sympathy Message:  Soothing Hearts in Times of Loss",
    description: "Comprehensive guide about Pet Sympathy Message:  Soothing Hearts in Times of Loss",
    slug: "pet-sympathy-message",
    category: "Sympathy"
  },
  {
    id: 1732621869563,
    title: "Sending comforting message on sympathy card flowers, embracing sorrow with grace.",
    description: "Comprehensive guide about Sending comforting message on sympathy card flowers, embracing sorrow with grace.",
    slug: "message-on-sympathy-card-flowers",
    category: "Sympathy"
  },
  {
    id: 1732621851777,
    title: "Flower Sympathy Card Messages:  Soothing Hearts in Sorrow",
    description: "Comprehensive guide about Flower Sympathy Card Messages:  Soothing Hearts in Sorrow",
    slug: "flower-sympathy-card-messages",
    category: "Sympathy"
  },
  {
    id: 1732621833095,
    title: "Soothing Dog Sympathy Card Messages Offering Comfort and Peace",
    description: "Comprehensive guide about Soothing Dog Sympathy Card Messages Offering Comfort and Peace",
    slug: "dog-sympathy-card-messages",
    category: "Sympathy"
  },
  {
    id: 1732621813568,
    title: "Condoléances message de sympathie:  Soothing Hearts in Sorrow",
    description: "Comprehensive guide about Condoléances message de sympathie:  Soothing Hearts in Sorrow",
    slug: "condol-ances-message-de-sympathie",
    category: "Sympathy"
  },
  {
    id: 1732621795020,
    title: "Company Sympathy Message:  Embracing Grief with Gentle Support",
    description: "Comprehensive guide about Company Sympathy Message:  Embracing Grief with Gentle Support",
    slug: "company-sympathy-message",
    category: "Sympathy"
  },
  {
    id: 1732621774044,
    title: "Whispering Sympathy Religious Messages: Finding Solace Through Grief",
    description: "Comprehensive guide about Whispering Sympathy Religious Messages: Finding Solace Through Grief",
    slug: "sympathy-religious-messages",
    category: "Sympathy"
  },
  {
    id: 1732621754663,
    title: "Sympathy Messages with Flowers:  Soothing Hearts in Sorrow",
    description: "Comprehensive guide about Sympathy Messages with Flowers:  Soothing Hearts in Sorrow",
    slug: "sympathy-messages-with-flowers",
    category: "Sympathy"
  },
  {
    id: 1732621736580,
    title: "Sympathy Messages:  Comforting Hearts After Pet Loss",
    description: "Comprehensive guide about Sympathy Messages:  Comforting Hearts After Pet Loss",
    slug: "sympathy-messages-loss-of-pet",
    category: "Sympathy"
  },
  {
    id: 1732621714032,
    title: "Sympathy Message from Company:  Offering Comfort and Strength",
    description: "Comprehensive guide about Sympathy Message from Company:  Offering Comfort and Strength",
    slug: "sympathy-message-from-company",
    category: "Sympathy"
  },
  {
    id: 1732621696986,
    title: "Whispering Sympathy Banner Messages: Comforting Hearts in Sorrow",
    description: "Comprehensive guide about Whispering Sympathy Banner Messages: Comforting Hearts in Sorrow",
    slug: "sympathy-banner-messages",
    category: "Sympathy"
  },
  {
    id: 1732621678651,
    title: "Spiritual Sympathy Card Messages:  Soothing Hearts in Grief's Embrace",
    description: "Comprehensive guide about Spiritual Sympathy Card Messages:  Soothing Hearts in Grief's Embrace",
    slug: "spiritual-sympathy-card-messages",
    category: "Sympathy"
  },
  {
    id: 1732621657672,
    title: "Offering Comforting Religious Sympathy Messages Through Grief",
    description: "Comprehensive guide about Offering Comforting Religious Sympathy Messages Through Grief",
    slug: "religious-sympathy-message",
    category: "Sympathy"
  },
  {
    id: 1732621638583,
    title: "Soothing Religious Sympathy Card Messages Offering Comfort and Peace",
    description: "Comprehensive guide about Soothing Religious Sympathy Card Messages Offering Comfort and Peace",
    slug: "religious-sympathy-card-messages",
    category: "Sympathy"
  },
  {
    id: 1732621620973,
    title: "Embracing Loss of Husband Sympathy Message with Gentle Support",
    description: "Comprehensive guide about Embracing Loss of Husband Sympathy Message with Gentle Support",
    slug: "loss-of-husband-sympathy-message",
    category: "Sympathy"
  },
  {
    id: 1732621592203,
    title: "Jewish Sympathy Message:  Offering Comfort Through Sorrow",
    description: "Comprehensive guide about Jewish Sympathy Message:  Offering Comfort Through Sorrow",
    slug: "jewish-sympathy-message",
    category: "Sympathy"
  },
  {
    id: 1732621570921,
    title: "Flower Sympathy Message:  Soothing Hearts Through Grief",
    description: "Comprehensive guide about Flower Sympathy Message:  Soothing Hearts Through Grief",
    slug: "flower-sympathy-message",
    category: "Sympathy"
  },
  {
    id: 1732621551443,
    title: "Corporate Sympathy Message:  Offering Comfort and Strength",
    description: "Comprehensive guide about Corporate Sympathy Message:  Offering Comfort and Strength",
    slug: "corporate-sympathy-message",
    category: "Sympathy"
  },
  {
    id: 1732621532608,
    title: "Catholic Sympathy Messages:  Soothing Hearts in Sorrow's Embrace",
    description: "Comprehensive guide about Catholic Sympathy Messages:  Soothing Hearts in Sorrow's Embrace",
    slug: "catholic-sympathy-messages",
    category: "Sympathy"
  },
  {
    id: 1732621515265,
    title: "Offering a Business Sympathy Message, Embracing Grief with Care",
    description: "Comprehensive guide about Offering a Business Sympathy Message, Embracing Grief with Care",
    slug: "business-sympathy-message",
    category: "Sympathy"
  },
  {
    id: 1732621492712,
    title: "Offering Belated Sympathy Messages:  A Gentle Embrace Through Grief",
    description: "Comprehensive guide about Offering Belated Sympathy Messages:  A Gentle Embrace Through Grief",
    slug: "belated-sympathy-message",
    category: "Sympathy"
  },
  {
    id: 1732621472644,
    title: "Offering Sympathy Messages to Coworker in Times of Sorrow",
    description: "Comprehensive guide about Offering Sympathy Messages to Coworker in Times of Sorrow",
    slug: "sympathy-messages-to-coworker",
    category: "Sympathy"
  },
  {
    id: 1732621336876,
    title: "Sending Sympathy Donation Message:  A Gentle Embrace in Sorrow",
    description: "Comprehensive guide about Sending Sympathy Donation Message:  A Gentle Embrace in Sorrow",
    slug: "sympathy-donation-message",
    category: "Sympathy"
  },
  {
    id: 1732621318693,
    title: "Soothing Sympathy Christian Messages Offering God's Grace",
    description: "Comprehensive guide about Soothing Sympathy Christian Messages Offering God's Grace",
    slug: "sympathy-christian-messages",
    category: "Sympathy"
  },
  {
    id: 1732621295641,
    title: "Comforting Sympathy Card Messages for Loss of Husband Through Grief",
    description: "Comprehensive guide about Comforting Sympathy Card Messages for Loss of Husband Through Grief",
    slug: "sympathy-card-messages-for-loss-of-husband",
    category: "Sympathy"
  },
  {
    id: 1732621276896,
    title: "Sympathy Card Messages for Coworker:  Offering Comfort and Strength",
    description: "Comprehensive guide about Sympathy Card Messages for Coworker:  Offering Comfort and Strength",
    slug: "sympathy-card-messages-for-coworker",
    category: "Sympathy"
  },
  {
    id: 1732621253006,
    title: "Pet Loss Sympathy Messages:  Soothing Hearts in Grief's Embrace",
    description: "Comprehensive guide about Pet Loss Sympathy Messages:  Soothing Hearts in Grief's Embrace",
    slug: "pet-loss-sympathy-messages",
    category: "Sympathy"
  },
  {
    id: 1732621233124,
    title: "Christian Sympathy Messages:  Whispering Peace Through Grief",
    description: "Comprehensive guide about Christian Sympathy Messages:  Whispering Peace Through Grief",
    slug: "christian-sympathy-messages",
    category: "Sympathy"
  },
  {
    id: 1732621212736,
    title: "Thank you for your sympathy messages; your kindness soothes.",
    description: "Comprehensive guide about Thank you for your sympathy messages; your kindness soothes.",
    slug: "thank-you-for-your-sympathy-messages",
    category: "Sympathy"
  },
  {
    id: 1732621196185,
    title: "Soothing Sympathy Messages Religious:  Finding Comfort in Faith",
    description: "Comprehensive guide about Soothing Sympathy Messages Religious:  Finding Comfort in Faith",
    slug: "sympathy-messages-religious",
    category: "Sympathy"
  },
  {
    id: 1732621179413,
    title: "Soothing Sympathy Messages for Pet Loss: Finding Comfort in Grief",
    description: "Comprehensive guide about Soothing Sympathy Messages for Pet Loss: Finding Comfort in Grief",
    slug: "sympathy-messages-for-pet-loss",
    category: "Sympathy"
  },
  {
    id: 1732621160733,
    title: "Embracing Sympathy Messages for Loss of Son Through Grief",
    description: "Comprehensive guide about Embracing Sympathy Messages for Loss of Son Through Grief",
    slug: "sympathy-messages-for-loss-of-son",
    category: "Sympathy"
  },
  {
    id: 1732621142806,
    title: "Comforting Sympathy Messages for Loss of Dog: A Gentle Embrace",
    description: "Comprehensive guide about Comforting Sympathy Messages for Loss of Dog: A Gentle Embrace",
    slug: "sympathy-messages-for-loss-of-dog",
    category: "Sympathy"
  },
  {
    id: 1732621123711,
    title: "Sympathy Messages Flowers: Softening Grief's Harshness",
    description: "Comprehensive guide about Sympathy Messages Flowers: Softening Grief's Harshness",
    slug: "sympathy-messages-flowers",
    category: "Sympathy"
  },
  {
    id: 1732621103837,
    title: "Sending Sympathy Message with Flowers, a Gentle Embrace",
    description: "Comprehensive guide about Sending Sympathy Message with Flowers, a Gentle Embrace",
    slug: "sympathy-message-with-flowers",
    category: "Sympathy"
  },
  {
    id: 1732621084233,
    title: "Sending Sympathy Message on Flowers:  A Gentle Embrace of Comfort",
    description: "Comprehensive guide about Sending Sympathy Message on Flowers:  A Gentle Embrace of Comfort",
    slug: "sympathy-message-on-flowers",
    category: "Sympathy"
  },
  {
    id: 1732621068805,
    title: "Sharing Sympathy Message From Coworkers:  A Gentle Embrace",
    description: "Comprehensive guide about Sharing Sympathy Message From Coworkers:  A Gentle Embrace",
    slug: "sympathy-message-from-coworkers",
    category: "Sympathy"
  },
  {
    id: 1732621051570,
    title: "Embracing Hearts: Sympathy Message for Loss of Adult Child Through Grief",
    description: "Comprehensive guide about Embracing Hearts: Sympathy Message for Loss of Adult Child Through Grief",
    slug: "sympathy-message-for-loss-of-adult-child",
    category: "Sympathy"
  },
  {
    id: 1732621028001,
    title: "Embracing Sympathy Message for Loss of a Child Through Grief",
    description: "Comprehensive guide about Embracing Sympathy Message for Loss of a Child Through Grief",
    slug: "sympathy-message-for-loss-of-a-child",
    category: "Sympathy"
  },
  {
    id: 1732621008334,
    title: "Sympathy message flowers:  Soothing solace through grief",
    description: "Comprehensive guide about Sympathy message flowers:  Soothing solace through grief",
    slug: "sympathy-message-flowers",
    category: "Sympathy"
  },
  {
    id: 1732620991489,
    title: "Soothing Sympathy Card Message for Coworker, Offering Gentle Support",
    description: "Comprehensive guide about Soothing Sympathy Card Message for Coworker, Offering Gentle Support",
    slug: "sympathy-card-message-for-coworker",
    category: "Sympathy"
  },
  {
    id: 1732620973950,
    title: "Message for Sympathy Flowers:  Whispering Comfort Through Grief",
    description: "Comprehensive guide about Message for Sympathy Flowers:  Whispering Comfort Through Grief",
    slug: "message-for-sympathy-flowers",
    category: "Sympathy"
  },
  {
    id: 1732620956654,
    title: "Islamic Sympathy Messages:  Soothing Hearts in Grief's Embrace",
    description: "Comprehensive guide about Islamic Sympathy Messages:  Soothing Hearts in Grief's Embrace",
    slug: "islamic-sympathy-messages",
    category: "Sympathy"
  },
  {
    id: 1732620937547,
    title: "Co-worker Sympathy Message:  Offering Gentle Support Through Grief",
    description: "Comprehensive guide about Co-worker Sympathy Message:  Offering Gentle Support Through Grief",
    slug: "coworker-sympathy-message",
    category: "Sympathy"
  },
  {
    id: 1732620919300,
    title: "Embracing Hearts: Sympathy Messages Loss of Son",
    description: "Comprehensive guide about Embracing Hearts: Sympathy Messages Loss of Son",
    slug: "sympathy-messages-loss-of-son",
    category: "Sympathy"
  },
  {
    id: 1732620902578,
    title: "Embracing Sympathy Messages Loss Of Father In Grief",
    description: "Comprehensive guide about Embracing Sympathy Messages Loss Of Father In Grief",
    slug: "sympathy-message-loss-of-father",
    category: "Sympathy"
  },
  {
    id: 1732620884246,
    title: "Short Sympathy Messages for Flowers:  Soothing Grief's Tenderness",
    description: "Comprehensive guide about Short Sympathy Messages for Flowers:  Soothing Grief's Tenderness",
    slug: "short-sympathy-messages-for-flowers",
    category: "Sympathy"
  },
  {
    id: 1732620869510,
    title: "Loss of Pet Sympathy Messages:  Soothing Hearts in Sorrow",
    description: "Comprehensive guide about Loss of Pet Sympathy Messages:  Soothing Hearts in Sorrow",
    slug: "loss-of-pet-sympathy-messages",
    category: "Sympathy"
  },
  {
    id: 1732620850010,
    title: "Embracing Loss Father Sympathy Message With Gentle Support",
    description: "Comprehensive guide about Embracing Loss Father Sympathy Message With Gentle Support",
    slug: "loss-father-sympathy-message",
    category: "Sympathy"
  },
  {
    id: 1732620822876,
    title: "Sending Sympathy Messages for Funeral Flowers:  Comforting Hearts in Grief",
    description: "Comprehensive guide about Sending Sympathy Messages for Funeral Flowers:  Comforting Hearts in Grief",
    slug: "sympathy-messages-for-funeral-flowers",
    category: "Sympathy"
  },
  {
    id: 1732620807037,
    title: "Sending a Sympathy Message to Coworker:  Offering Comfort and Strength",
    description: "Comprehensive guide about Sending a Sympathy Message to Coworker:  Offering Comfort and Strength",
    slug: "sympathy-message-to-coworker",
    category: "Sympathy"
  },
  {
    id: 1732620781170,
    title: "Sympathy Card Messages for Funeral Flowers:  Offering Comfort's Gentle Embrace",
    description: "Comprehensive guide about Sympathy Card Messages for Funeral Flowers:  Offering Comfort's Gentle Embrace",
    slug: "sympathy-card-messages-for-funeral-flowers",
    category: "Sympathy"
  },
  {
    id: 1732620765137,
    title: "Embracing Loss of Father Sympathy Message: Finding Solace and Strength",
    description: "Comprehensive guide about Embracing Loss of Father Sympathy Message: Finding Solace and Strength",
    slug: "loss-of-father-sympathy-message",
    category: "Sympathy"
  },
  {
    id: 1732620747818,
    title: "Sympathy message for funeral flowers offering solace and peace",
    description: "Comprehensive guide about Sympathy message for funeral flowers offering solace and peace",
    slug: "sympathy-message-for-funeral-flowers",
    category: "Sympathy"
  },
  {
    id: 1732620726657,
    title: "Whispering Sympathy Flower Messages:  Comforting Hearts in Sorrow",
    description: "Comprehensive guide about Whispering Sympathy Flower Messages:  Comforting Hearts in Sorrow",
    slug: "sympathy-flower-message",
    category: "Sympathy"
  },
  {
    id: 1732620711792,
    title: "Pet Sympathy Card Messages:  Comforting Hearts in Sorrow",
    description: "Comprehensive guide about Pet Sympathy Card Messages:  Comforting Hearts in Sorrow",
    slug: "pet-sympathy-card-messages",
    category: "Sympathy"
  },
  {
    id: 1732620693607,
    title: "Jewish Sympathy Messages:  Soothing Hearts in Sorrow's Embrace",
    description: "Comprehensive guide about Jewish Sympathy Messages:  Soothing Hearts in Sorrow's Embrace",
    slug: "jewish-sympathy-messages",
    category: "Sympathy"
  },
  {
    id: 1732620678013,
    title: "Dog Sympathy Messages:  Soothing Hearts in Times of Loss",
    description: "Comprehensive guide about Dog Sympathy Messages:  Soothing Hearts in Times of Loss",
    slug: "dog-sympathy-messages",
    category: "Sympathy"
  },
  {
    id: 1732620657432,
    title: "Embracing Hearts: Sympathy Messages Loss of Husband",
    description: "Comprehensive guide about Embracing Hearts: Sympathy Messages Loss of Husband",
    slug: "sympathy-messages-loss-of-husband",
    category: "Sympathy"
  },
  {
    id: 1732620637947,
    title: "Whispering Sympathy Messages in Spanish:  Comforting Hearts in Sorrow",
    description: "Comprehensive guide about Whispering Sympathy Messages in Spanish:  Comforting Hearts in Sorrow",
    slug: "sympathy-message-in-spanish",
    category: "Sympathy"
  },
  {
    id: 1732620620657,
    title: "Sending Short Sympathy Message for Flowers:  Gentle Comfort in Sorrow",
    description: "Comprehensive guide about Sending Short Sympathy Message for Flowers:  Gentle Comfort in Sorrow",
    slug: "short-sympathy-message-for-flowers",
    category: "Sympathy"
  },
  {
    id: 1732620603713,
    title: "Christian Sympathy Message:  Soothing Hearts Through Grief",
    description: "Comprehensive guide about Christian Sympathy Message:  Soothing Hearts Through Grief",
    slug: "christian-sympathy-message",
    category: "Sympathy"
  },
  {
    id: 1732620588244,
    title: "Soothing Sympathy Message for Loss of Dog, Offering Gentle Peace",
    description: "Comprehensive guide about Soothing Sympathy Message for Loss of Dog, Offering Gentle Peace",
    slug: "sympathy-message-for-loss-of-dog",
    category: "Sympathy"
  },
  {
    id: 1732620564780,
    title: "Meaningful Sympathy Messages for a Friend:  Soothing Hearts in Sorrow",
    description: "Comprehensive guide about Meaningful Sympathy Messages for a Friend:  Soothing Hearts in Sorrow",
    slug: "meaningful-sympathy-messages-for-a-friend",
    category: "Sympathy"
  },
  {
    id: 1732620545135,
    title: "Sympathy Messages for Coworker:  Offering Comfort and Strength",
    description: "Comprehensive guide about Sympathy Messages for Coworker:  Offering Comfort and Strength",
    slug: "sympathy-messages-for-coworker",
    category: "Sympathy"
  },
  {
    id: 1732620528683,
    title: "Sending Jewish Messages of Sympathy:  Comforting Hearts in Grief",
    description: "Comprehensive guide about Sending Jewish Messages of Sympathy:  Comforting Hearts in Grief",
    slug: "sending-jewish-messages-of-sympathy",
    category: "Sympathy"
  },
  {
    id: 1732620506495,
    title: "Embracing Hearts: Sympathy Message for Loss of Dad Through Grief",
    description: "Comprehensive guide about Embracing Hearts: Sympathy Message for Loss of Dad Through Grief",
    slug: "sympathy-message-for-loss-of-dad",
    category: "Sympathy"
  },
  {
    id: 1732620485724,
    title: "Comforting Sympathy Messages for Loss of Pet,  Embracing Grieving Hearts",
    description: "Comprehensive guide about Comforting Sympathy Messages for Loss of Pet,  Embracing Grieving Hearts",
    slug: "sympathy-messages-for-loss-of-pet",
    category: "Sympathy"
  },
  {
    id: 1732620459938,
    title: "Sympathy Messages for Flowers:  Soothing Hearts in Grief",
    description: "Comprehensive guide about Sympathy Messages for Flowers:  Soothing Hearts in Grief",
    slug: "sympathy-messages-for-flowers",
    category: "Sympathy"
  },
  {
    id: 1732620443199,
    title: "Whispering Sympathy Card Messages for a Cowboy Friend Through Grief",
    description: "Comprehensive guide about Whispering Sympathy Card Messages for a Cowboy Friend Through Grief",
    slug: "sympathy-card-messages-for-a-cowboy-friend",
    category: "Sympathy"
  },
  {
    id: 1732620425971,
    title: "Whispering Sympathy Card Messages for a Cowboy Through Grief",
    description: "Comprehensive guide about Whispering Sympathy Card Messages for a Cowboy Through Grief",
    slug: "sympathy-card-messages-for-a-cowboy",
    category: "Sympathy"
  },
  {
    id: 1732620407167,
    title: "Finding Solace Through Religious Sympathy Messages",
    description: "Comprehensive guide about Finding Solace Through Religious Sympathy Messages",
    slug: "religious-sympathy-messages",
    category: "Sympathy"
  },
  {
    id: 1732620389512,
    title: "Sympathy Message for Flowers:  Soothing Hearts in Sorrow's Embrace",
    description: "Comprehensive guide about Sympathy Message for Flowers:  Soothing Hearts in Sorrow's Embrace",
    slug: "sympathy-message-for-flowers",
    category: "Sympathy"
  },
  {
    id: 1732620374496,
    title: "Offering Comfort: Sympathy Message for Coworker Through Grief",
    description: "Comprehensive guide about Offering Comfort: Sympathy Message for Coworker Through Grief",
    slug: "sympathy-message-for-coworker",
    category: "Sympathy"
  },
  {
    id: 1732620355260,
    title: "Offering Condolence Message Belated Sympathy Message, a Gentle Embrace in Sorrow",
    description: "Comprehensive guide about Offering Condolence Message Belated Sympathy Message, a Gentle Embrace in Sorrow",
    slug: "condolence-message-belated-sympathy-message",
    category: "Sympathy"
  },
  {
    id: 1732620338004,
    title: "Pet Sympathy Messages:  Soothing Hearts in Times of Loss",
    description: "Comprehensive guide about Pet Sympathy Messages:  Soothing Hearts in Times of Loss",
    slug: "pet-sympathy-messages",
    category: "Sympathy"
  }
  // ... data dari questions.ts
];

async function addInternalLinks() {
  try {
    // Dapatkan semua kategori yang unik dari data
    const categories = [...new Set(questions.map(q => q.category))];
    
    // Kelompokkan artikel berdasarkan kategori secara dinamis
    const categorizedArticles = categories.reduce((acc, category) => {
      acc[category] = questions.filter(q => q.category === category);
      return acc;
    }, {});

    // Baca semua file .astro di direktori
    const files = await fs.readdir(PAGES_DIR);
    const astroFiles = files.filter(f => f.endsWith('.astro'));

    for (const file of astroFiles) {
      const filePath = path.join(PAGES_DIR, file);
      const currentSlug = file.replace('.astro', '');
      
      const currentArticle = questions.find(q => q.slug === currentSlug);
      if (!currentArticle) continue;

      let content = await fs.readFile(filePath, 'utf-8');
      
      const relatedArticles = getRelatedArticles(
        currentArticle,
        categorizedArticles[currentArticle.category]
      );
      
      const linkingParagraph = createLinkingParagraph(currentArticle.category, relatedArticles);
      content = insertAfterFirstParagraph(content, linkingParagraph);
      
      await fs.writeFile(filePath, content);
      console.log(`Updated: ${file} with ${relatedArticles.length} links from ${currentArticle.category} category`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function getRelatedArticles(currentArticle, categoryArticles) {
  return categoryArticles
    .filter(article => article.slug !== currentArticle.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
}

function createLinkingParagraph(category, relatedArticles) {
  const linkTexts = relatedArticles.map(article => 
    `<a href="/question/${article.slug}">${article.title}</a>`
  );

  // Template paragraf berdasarkan kategori
  const templates = {
    Sympathy: `
<p>
  For more ways to express your sympathy, you might find these guides helpful: 
  ${linkTexts[0]}, ${linkTexts[1]}, and ${linkTexts[2]}.
</p>`,
    
    Thanksgiving: `
<p>
  Looking for more Thanksgiving message ideas? Check out our guides for 
  ${linkTexts[0]}, ${linkTexts[1]}, and ${linkTexts[2]} 
  for more inspiration.
</p>`,

    // Template default untuk kategori baru
    default: `
<p>
  You might also be interested in these related articles: 
  ${linkTexts[0]}, ${linkTexts[1]}, and ${linkTexts[2]}.
</p>`
  };

  // Gunakan template sesuai kategori atau template default jika tidak ada
  return templates[category] || templates.default;
}

function insertAfterFirstParagraph(content, newContent) {
  const firstParagraphEnd = content.indexOf('</p>') + 4;
  return content.slice(0, firstParagraphEnd) + '\n' + newContent + content.slice(firstParagraphEnd);
}

// Jalankan script
addInternalLinks();