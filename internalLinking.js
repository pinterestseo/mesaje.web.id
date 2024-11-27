// internalLinking.js
import fs from 'fs/promises';
import path from 'path';

const PAGES_DIR = './src/pages/question';

const questions = [
  {
    id: 1732683075707,
    title: "Wife Happy Birthday Message: Dancing Through Joyful Years",
    description: "Comprehensive guide about Wife Happy Birthday Message: Dancing Through Joyful Years",
    slug: "wife-happy-birthday-message",
    category: "Happy Birthday"
  },
  {
    id: 1732683055927,
    title: "Celebrating 70 Years: Inspirational Message Female Happy 70th Birthday Wishes",
    description: "Comprehensive guide about Celebrating 70 Years: Inspirational Message Female Happy 70th Birthday Wishes",
    slug: "inspirational-message-female-happy-70th-birthday-wishes",
    category: "Happy Birthday"
  },
  {
    id: 1732683033375,
    title: "Hindi Happy Birthday Message:  Joyful Celebrations Sparkle!",
    description: "Comprehensive guide about Hindi Happy Birthday Message:  Joyful Celebrations Sparkle!",
    slug: "hindi-happy-birthday-message",
    category: "Happy Birthday"
  },
  {
    id: 1732682991327,
    title: "Celebrating a Happy Birthday to Niece Message Filled with Joy",
    description: "Comprehensive guide about Celebrating a Happy Birthday to Niece Message Filled with Joy",
    slug: "happy-birthday-to-niece-message",
    category: "Happy Birthday"
  },
  {
    id: 1732682969935,
    title: "Celebrating a Happy Birthday to Mother in Law Message With Joyful Cheers!",
    description: "Comprehensive guide about Celebrating a Happy Birthday to Mother in Law Message With Joyful Cheers!",
    slug: "happy-birthday-to-mother-in-law-message",
    category: "Happy Birthday"
  },
  {
    id: 1732682952527,
    title: "Sending Happy Birthday Text Message iPhone Joy!",
    description: "Comprehensive guide about Sending Happy Birthday Text Message iPhone Joy!",
    slug: "happy-birthday-text-message-iphone",
    category: "Happy Birthday"
  },
  {
    id: 1732682933468,
    title: "Happy Birthday Text Message Art:  Dancing Joyful Greetings",
    description: "Comprehensive guide about Happy Birthday Text Message Art:  Dancing Joyful Greetings",
    slug: "happy-birthday-text-message-art",
    category: "Happy Birthday"
  },
  {
    id: 1732682915040,
    title: "Celebrating Happy Birthday My Nephew Message With Joyful Cheers!",
    description: "Comprehensive guide about Celebrating Happy Birthday My Nephew Message With Joyful Cheers!",
    slug: "happy-birthday-my-nephew-message",
    category: "Happy Birthday"
  },
  {
    id: 1732682897494,
    title: "Happy Birthday Mom Messages from Daughter: A Celebration of Joy",
    description: "Comprehensive guide about Happy Birthday Mom Messages from Daughter: A Celebration of Joy",
    slug: "happy-birthday-mom-messages-from-daughter",
    category: "Happy Birthday"
  },
  {
    id: 1732682878046,
    title: "Happy Birthday Messages in Polish:  Joyful Celebrations Sparkle!",
    description: "Comprehensive guide about Happy Birthday Messages in Polish:  Joyful Celebrations Sparkle!",
    slug: "happy-birthday-messages-in-polish",
    category: "Happy Birthday"
  },
  {
    id: 1732682855630,
    title: "Celebrating Life Through Happy Birthday Messages in Hindi",
    description: "Comprehensive guide about Celebrating Life Through Happy Birthday Messages in Hindi",
    slug: "happy-birthday-messages-in-hindi",
    category: "Happy Birthday"
  },
  {
    id: 1732682829745,
    title: "A Happy Birthday Message to Son From Mother:  Radiant Joy Celebrated!",
    description: "Comprehensive guide about A Happy Birthday Message to Son From Mother:  Radiant Joy Celebrated!",
    slug: "happy-birthday-message-to-son-from-mother",
    category: "Happy Birthday"
  },
  {
    id: 1732682810768,
    title: "Celebrating a Happy Birthday Message to Nephew Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to Nephew Through Joyful Cheers",
    slug: "happy-birthday-message-to-nephew",
    category: "Happy Birthday"
  },
  {
    id: 1732682792836,
    title: "Celebrating Grandma Through a Happy Birthday Message Filled With Joy",
    description: "Comprehensive guide about Celebrating Grandma Through a Happy Birthday Message Filled With Joy",
    slug: "happy-birthday-message-to-grandma",
    category: "Happy Birthday"
  },
  {
    id: 1732682771506,
    title: "Celebrating a Happy Birthday Message to Daughter in Law Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to Daughter in Law Through Joyful Cheers",
    slug: "happy-birthday-message-to-daughter-in-law",
    category: "Happy Birthday"
  },
  {
    id: 1732682753868,
    title: "Celebrating a Happy Birthday Message to Co-worker Through Joyful Cheers!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to Co-worker Through Joyful Cheers!",
    slug: "happy-birthday-message-to-co-worker",
    category: "Happy Birthday"
  },
  {
    id: 1732682731296,
    title: "Celebrating a Happy Birthday Message to an Uncle Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to an Uncle Through Joyful Cheers",
    slug: "happy-birthday-message-to-an-uncle",
    category: "Happy Birthday"
  },
  {
    id: 1732682711920,
    title: "Celebrating a Happy Birthday Message to a Teacher Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to a Teacher Through Joyful Cheers",
    slug: "happy-birthday-message-to-a-teacher",
    category: "Happy Birthday"
  },
  {
    id: 1732682693965,
    title: "Celebrating a Happy Birthday Message to a Niece: Joyful Wishes!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to a Niece: Joyful Wishes!",
    slug: "happy-birthday-message-to-a-niece",
    category: "Happy Birthday"
  },
  {
    id: 1732682673160,
    title: "Celebrating a Happy Birthday Message to a Daughter in Law!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to a Daughter in Law!",
    slug: "happy-birthday-message-to-a-daughter-in-law",
    category: "Happy Birthday"
  },
  {
    id: 1732682650583,
    title: "Celebrating a Happy Birthday Message Pastor: Joyful Blessings!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message Pastor: Joyful Blessings!",
    slug: "happy-birthday-message-pastor",
    category: "Happy Birthday"
  },
  {
    id: 1732682631157,
    title: "Happy Birthday Message in Marathi:  Celebrating Joyous Moments!",
    description: "Comprehensive guide about Happy Birthday Message in Marathi:  Celebrating Joyous Moments!",
    slug: "happy-birthday-message-in-marathi",
    category: "Happy Birthday"
  },
  {
    id: 1732682605843,
    title: "Celebrating Life's Joy Through Happy Birthday Message in Hindi",
    description: "Comprehensive guide about Celebrating Life's Joy Through Happy Birthday Message in Hindi",
    slug: "happy-birthday-message-in-hindi",
    category: "Happy Birthday"
  },
  {
    id: 1732682577290,
    title: "Happy Birthday Message Hindi:  Celebrating Joyful Moments",
    description: "Comprehensive guide about Happy Birthday Message Hindi:  Celebrating Joyful Moments",
    slug: "happy-birthday-message-hindi",
    category: "Happy Birthday"
  },
  {
    id: 1732682555040,
    title: "Celebrating a Happy Birthday Message for Nephew Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message for Nephew Through Joyful Cheers",
    slug: "happy-birthday-message-for-nephew",
    category: "Happy Birthday"
  },
  {
    id: 1732682535226,
    title: "Celebrating Happy Birthday Message for a Friend Images with Joyful Cheers!",
    description: "Comprehensive guide about Celebrating Happy Birthday Message for a Friend Images with Joyful Cheers!",
    slug: "happy-birthday-message-for-a-friend-images",
    category: "Happy Birthday"
  },
  {
    id: 1732682515922,
    title: "Celebrating a Happy Birthday Message Colleague Through Joyful Cheers!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message Colleague Through Joyful Cheers!",
    slug: "happy-birthday-message-colleague",
    category: "Happy Birthday"
  },
  {
    id: 1732682498139,
    title: "Celebrating Life's Joy Through Happy Birthday Message Chinese",
    description: "Comprehensive guide about Celebrating Life's Joy Through Happy Birthday Message Chinese",
    slug: "happy-birthday-message-chinese",
    category: "Happy Birthday"
  },
  {
    id: 1732682479804,
    title: "Celebrating Happy Birthday Message Brother in Law With Joyful Cheers!",
    description: "Comprehensive guide about Celebrating Happy Birthday Message Brother in Law With Joyful Cheers!",
    slug: "happy-birthday-message-brother-in-law",
    category: "Happy Birthday"
  },
  {
    id: 1732682462062,
    title: "Celebrating Life Through a Happy Birthday iPhone Message!",
    description: "Comprehensive guide about Celebrating Life Through a Happy Birthday iPhone Message!",
    slug: "happy-birthday-iphone-message",
    category: "Happy Birthday"
  },
  {
    id: 1732682441979,
    title: "Celebrating a Happy Birthday in Heaven Message Through Joyful Remembrance",
    description: "Comprehensive guide about Celebrating a Happy Birthday in Heaven Message Through Joyful Remembrance",
    slug: "happy-birthday-in-heaven-message",
    category: "Happy Birthday"
  },
  {
    id: 1732682424151,
    title: "Celebrating Life's Joy: A Happy Birthday In Advance Message",
    description: "Comprehensive guide about Celebrating Life's Joy: A Happy Birthday In Advance Message",
    slug: "happy-birthday-in-advance-message",
    category: "Happy Birthday"
  },
  {
    id: 1732682402506,
    title: "Celebrating Life Through Happy Birthday Hindi Messages",
    description: "Comprehensive guide about Celebrating Life Through Happy Birthday Hindi Messages",
    slug: "happy-birthday-hindi-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732682383051,
    title: "Celebrating Happy Birthday Grandmother Messages With Joyful Hearts",
    description: "Comprehensive guide about Celebrating Happy Birthday Grandmother Messages With Joyful Hearts",
    slug: "happy-birthday-grandmother-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732682362864,
    title: "Celebrating Happy Birthday Grandma Messages with Joyful Cheer",
    description: "Comprehensive guide about Celebrating Happy Birthday Grandma Messages with Joyful Cheer",
    slug: "happy-birthday-grandma-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732682346596,
    title: "Celebrating Happy Birthday Goddaughter Messages With Joyful Cheers!",
    description: "Comprehensive guide about Celebrating Happy Birthday Goddaughter Messages With Joyful Cheers!",
    slug: "happy-birthday-goddaughter-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732682327377,
    title: "Celebrating a Sparkling Happy Birthday Goddaughter Message",
    description: "Comprehensive guide about Celebrating a Sparkling Happy Birthday Goddaughter Message",
    slug: "happy-birthday-goddaughter-message",
    category: "Happy Birthday"
  },
  {
    id: 1732682309104,
    title: "Celebrating a Happy 2nd Birthday Message Filled With Joy",
    description: "Comprehensive guide about Celebrating a Happy 2nd Birthday Message Filled With Joy",
    slug: "happy-2nd-birthday-message",
    category: "Happy Birthday"
  },
  {
    id: 1732682289500,
    title: "Celebrating a Happy 20th Birthday Message with Sparkling Joy",
    description: "Comprehensive guide about Celebrating a Happy 20th Birthday Message with Sparkling Joy",
    slug: "happy-20th-birthday-message",
    category: "Happy Birthday"
  },
  {
    id: 1732682267519,
    title: "Celebrating a Happy 19th Birthday Message: Joyful Wishes Abound!",
    description: "Comprehensive guide about Celebrating a Happy 19th Birthday Message: Joyful Wishes Abound!",
    slug: "happy-19th-birthday-message",
    category: "Happy Birthday"
  },
  {
    id: 1732682240292,
    title: "Celebrating a Happy 10th Birthday Message With Joyful Cheers!",
    description: "Comprehensive guide about Celebrating a Happy 10th Birthday Message With Joyful Cheers!",
    slug: "happy-10th-birthday-message",
    category: "Happy Birthday"
  },
  {
    id: 1732682222527,
    title: "Funny Happy Birthday Messages for Brother:  A Hilarious Celebration!",
    description: "Comprehensive guide about Funny Happy Birthday Messages for Brother:  A Hilarious Celebration!",
    slug: "funny-happy-birthday-messages-for-brother",
    category: "Happy Birthday"
  },
  {
    id: 1732682204205,
    title: "Funny Happy 40th Birthday Messages:  Celebrating Forty Years of Fun!",
    description: "Comprehensive guide about Funny Happy 40th Birthday Messages:  Celebrating Forty Years of Fun!",
    slug: "funny-happy-40th-birthday-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732682182523,
    title: "Animated Happy Birthday Messages Dancing with Delight",
    description: "Comprehensive guide about Animated Happy Birthday Messages Dancing with Delight",
    slug: "animated-happy-birthday-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732682161540,
    title: "Celebrating Taylor Swift Happy Birthday Message with Joyful Cheers!",
    description: "Comprehensive guide about Celebrating Taylor Swift Happy Birthday Message with Joyful Cheers!",
    slug: "taylor-swift-happy-birthday-message",
    category: "Happy Birthday"
  },
  {
    id: 1732682142520,
    title: "Celebrating Life Through a Professional Happy Birthday Message",
    description: "Comprehensive guide about Celebrating Life Through a Professional Happy Birthday Message",
    slug: "professional-happy-birthday-message",
    category: "Happy Birthday"
  },
  {
    id: 1732682121308,
    title: "iPhone Happy Birthday Text Messages:  Sparkling Joyful Wishes!",
    description: "Comprehensive guide about iPhone Happy Birthday Text Messages:  Sparkling Joyful Wishes!",
    slug: "iphone-happy-birthday-text-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732682102598,
    title: "Celebrating Happy Birthday to Uncle Messages With Joyful Cheers!",
    description: "Comprehensive guide about Celebrating Happy Birthday to Uncle Messages With Joyful Cheers!",
    slug: "happy-birthday-to-uncle-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732682084372,
    title: "Double the Joy: Happy Birthday to Twins Messages!",
    description: "Comprehensive guide about Double the Joy: Happy Birthday to Twins Messages!",
    slug: "happy-birthday-to-twins-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732682065292,
    title: "Celebrating Happy Birthday to My Nephew Message with Joyful Cheers!",
    description: "Comprehensive guide about Celebrating Happy Birthday to My Nephew Message with Joyful Cheers!",
    slug: "happy-birthday-to-my-nephew-message",
    category: "Happy Birthday"
  },
  {
    id: 1732682048818,
    title: "Happy Birthday to a Niece Message:  Joyful Celebrations Dance!",
    description: "Comprehensive guide about Happy Birthday to a Niece Message:  Joyful Celebrations Dance!",
    slug: "happy-birthday-to-a-niece-message",
    category: "Happy Birthday"
  },
  {
    id: 1732682029572,
    title: "Celebrating Happy Birthday Nephew Messages With Joyful Cheers!",
    description: "Comprehensive guide about Celebrating Happy Birthday Nephew Messages With Joyful Cheers!",
    slug: "happy-birthday-nephew-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732682009256,
    title: "Celebrating Life's Joy: A Happy Birthday Mother Message",
    description: "Comprehensive guide about Celebrating Life's Joy: A Happy Birthday Mother Message",
    slug: "happy-birthday-mother-message",
    category: "Happy Birthday"
  },
  {
    id: 1732681989346,
    title: "Happy Birthday Message With Name:  A Celebration Sparkling With Joy!",
    description: "Comprehensive guide about Happy Birthday Message With Name:  A Celebration Sparkling With Joy!",
    slug: "happy-birthday-message-with-name",
    category: "Happy Birthday"
  },
  {
    id: 1732681965750,
    title: "Celebrating Life Through a Happy Birthday Message in Russian",
    description: "Comprehensive guide about Celebrating Life Through a Happy Birthday Message in Russian",
    slug: "happy-birthday-message-in-russian",
    category: "Happy Birthday"
  },
  {
    id: 1732681934538,
    title: "Joyful Happy Birthday Message in French: Sparkling Celebrations!",
    description: "Comprehensive guide about Joyful Happy Birthday Message in French: Sparkling Celebrations!",
    slug: "happy-birthday-message-in-french",
    category: "Happy Birthday"
  },
  {
    id: 1732681915499,
    title: "Celebrating a Happy Birthday Message for Teacher Through Joyful Cheers!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message for Teacher Through Joyful Cheers!",
    slug: "happy-birthday-message-for-teacher",
    category: "Happy Birthday"
  },
  {
    id: 1732681895009,
    title: "Celebrating a Happy Birthday Message for Dog: Tail Wags & Joyful Howls!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message for Dog: Tail Wags & Joyful Howls!",
    slug: "happy-birthday-message-for-dog",
    category: "Happy Birthday"
  },
  {
    id: 1732681875497,
    title: "Celebrating a Happy Birthday Message Employee: Joyful Wishes!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message Employee: Joyful Wishes!",
    slug: "happy-birthday-message-employee",
    category: "Happy Birthday"
  },
  {
    id: 1732681856223,
    title: "Celebrating Happy Birthday Message 21:  Joyful Wishes Dance!",
    description: "Comprehensive guide about Celebrating Happy Birthday Message 21:  Joyful Wishes Dance!",
    slug: "happy-birthday-message-21",
    category: "Happy Birthday"
  },
  {
    id: 1732681834598,
    title: "Celebrating Life Through Happy Birthday in Spanish Messages",
    description: "Comprehensive guide about Celebrating Life Through Happy Birthday in Spanish Messages",
    slug: "happy-birthday-in-spanish-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732681815955,
    title: "Celebrating a Happy Birthday Colleague Message with Gleeful Cheers!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Colleague Message with Gleeful Cheers!",
    slug: "happy-birthday-colleague-message",
    category: "Happy Birthday"
  },
  {
    id: 1732681797291,
    title: "Celebrating a Happy Birthday Co-worker Message Filled With Joy!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Co-worker Message Filled With Joy!",
    slug: "happy-birthday-co-worker-message",
    category: "Happy Birthday"
  },
  {
    id: 1732681778996,
    title: "Celebrating a Happy 65th Birthday Message with Sparkling Joy!",
    description: "Comprehensive guide about Celebrating a Happy 65th Birthday Message with Sparkling Joy!",
    slug: "happy-65th-birthday-message",
    category: "Happy Birthday"
  },
  {
    id: 1732681758156,
    title: "Celebrating Coworker Happy Birthday Message with Joyful Cheers!",
    description: "Comprehensive guide about Celebrating Coworker Happy Birthday Message with Joyful Cheers!",
    slug: "coworker-happy-birthday-message",
    category: "Happy Birthday"
  },
  {
    id: 1732681739151,
    title: "Celebrating a Happy Birthday to Wife Message with Sparkling Joy",
    description: "Comprehensive guide about Celebrating a Happy Birthday to Wife Message with Sparkling Joy",
    slug: "happy-birthday-to-wife-message",
    category: "Happy Birthday"
  },
  {
    id: 1732681720383,
    title: "Celebrating Happy Birthday Messages to Boss With Joyful Cheers!",
    description: "Comprehensive guide about Celebrating Happy Birthday Messages to Boss With Joyful Cheers!",
    slug: "happy-birthday-messages-to-boss",
    category: "Happy Birthday"
  },
  {
    id: 1732681702832,
    title: "Celebrating a Happy Birthday Message to Your Boss Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to Your Boss Through Joyful Cheers",
    slug: "happy-birthday-message-to-your-boss",
    category: "Happy Birthday"
  },
  {
    id: 1732681685006,
    title: "Celebrating a Happy Birthday Message Mother In Law!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message Mother In Law!",
    slug: "happy-birthday-message-mother-in-law",
    category: "Happy Birthday"
  },
  {
    id: 1732681665559,
    title: "Celebrating a Happy Birthday Message for Grandmother Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message for Grandmother Through Joyful Cheers",
    slug: "happy-birthday-message-for-grandmother",
    category: "Happy Birthday"
  },
  {
    id: 1732681641748,
    title: "Celebrating a Happy Birthday Message for Brother-in-Law Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message for Brother-in-Law Through Joyful Cheers",
    slug: "happy-birthday-message-for-brother-in-law",
    category: "Happy Birthday"
  },
  {
    id: 1732681621186,
    title: "Celebrating Grandma Through a Happy Birthday Message Filled With Joy",
    description: "Comprehensive guide about Celebrating Grandma Through a Happy Birthday Message Filled With Joy",
    slug: "happy-birthday-grandma-message",
    category: "Happy Birthday"
  },
  {
    id: 1732681602154,
    title: "Celebrating Life's Joy Through a Happy Birthday FB Message",
    description: "Comprehensive guide about Celebrating Life's Joy Through a Happy Birthday FB Message",
    slug: "happy-birthday-fb-message",
    category: "Happy Birthday"
  },
  {
    id: 1732681584365,
    title: "Celebrating Life Through Happy Birthday Facebook Messages",
    description: "Comprehensive guide about Celebrating Life Through Happy Birthday Facebook Messages",
    slug: "happy-birthday-facebook-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732681565878,
    title: "Celebrating a Happy 21st Birthday Message with Sparkling Joy!",
    description: "Comprehensive guide about Celebrating a Happy 21st Birthday Message with Sparkling Joy!",
    slug: "happy-21th-birthday-message",
    category: "Happy Birthday"
  },
  {
    id: 1732681543372,
    title: "Joyful French Happy Birthday Messages Celebrating Life's Sweetness",
    description: "Comprehensive guide about Joyful French Happy Birthday Messages Celebrating Life's Sweetness",
    slug: "french-happy-birthday-message",
    category: "Happy Birthday"
  },
  {
    id: 1732681524503,
    title: "Celebrating Through This niece message happy birthday niece gif Joyful Wishes Dance",
    description: "Comprehensive guide about Celebrating Through This niece message happy birthday niece gif Joyful Wishes Dance!",
    slug: "niece-message-happy-birthday-niece-gif",
    category: "Happy Birthday"
  },
  {
    id: 1732681506292,
    title: "Celebrating Happy Birthday Uncle Messages With Joyful Cheers",
    description: "Comprehensive guide about Celebrating Happy Birthday Uncle Messages With Joyful Cheers",
    slug: "happy-birthday-uncle-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732681487813,
    title: "Celebrating a Happy Birthday Tita Message with Joyful Cheers!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Tita Message with Joyful Cheers!",
    slug: "happy-birthday-tita-message",
    category: "Happy Birthday"
  },
  {
    id: 1732681468003,
    title: "Celebrating Happy Birthday Messages for Boss Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating Happy Birthday Messages for Boss Through Joyful Cheers",
    slug: "happy-birthday-messages-for-boss",
    category: "Happy Birthday"
  },
  {
    id: 1732681449576,
    title: "Celebrating a Happy Birthday Message Wife:  Joyful Wishes and Sparkling Cheers!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message Wife:  Joyful Wishes and Sparkling Cheers!",
    slug: "happy-birthday-message-wife",
    category: "Happy Birthday"
  },
  {
    id: 1732681430869,
    title: "Celebrating a Happy Birthday Message to Son in Law Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to Son in Law Through Joyful Cheers",
    slug: "happy-birthday-message-to-son-in-law",
    category: "Happy Birthday"
  },
  {
    id: 1732681411205,
    title: "Happy Birthday Message to My Nephew:  Celebrating a Joyful Year!",
    description: "Comprehensive guide about Happy Birthday Message to My Nephew:  Celebrating a Joyful Year!",
    slug: "happy-birthday-message-to-my-nephew",
    category: "Happy Birthday"
  },
  {
    id: 1732681390960,
    title: "Celebrating a Happy Birthday Message to a Guy Friend",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to a Guy Friend",
    slug: "happy-birthday-message-to-a-guy-friend",
    category: "Happy Birthday"
  },
  {
    id: 1732681370946,
    title: "Celebrating a Happy Birthday Message for Son-in-Law Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message for Son-in-Law Through Joyful Cheers",
    slug: "happy-birthday-message-for-son-in-law",
    category: "Happy Birthday"
  },
  {
    id: 1732681354321,
    title: "Celebrating a Happy Birthday Coworker Message with Sparkling Joy!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Coworker Message with Sparkling Joy!",
    slug: "happy-birthday-coworker-message",
    category: "Happy Birthday"
  },
  {
    id: 1732681335796,
    title: "Celebrating a Happy 75th Birthday Message Filled With Joy",
    description: "Comprehensive guide about Celebrating a Happy 75th Birthday Message Filled With Joy",
    slug: "happy-75th-birthday-message",
    category: "Happy Birthday"
  },
  {
    id: 1732681317302,
    title: "Celebrating Life Through FB Happy Birthday Messages",
    description: "Comprehensive guide about Celebrating Life Through FB Happy Birthday Messages",
    slug: "fb-happy-birthday-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732681297959,
    title: "Celebrating Happy Birthday Wishes Messages Niece With Joyful Cheers!",
    description: "Comprehensive guide about Celebrating Happy Birthday Wishes Messages Niece With Joyful Cheers!",
    slug: "happy-birthday-wishes-messages-niece",
    category: "Happy Birthday"
  },
  {
    id: 1732681278710,
    title: "Celebrating Happy Birthday Wife Messages with Sparkling Joy",
    description: "Comprehensive guide about Celebrating Happy Birthday Wife Messages with Sparkling Joy",
    slug: "happy-birthday-wife-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732681260601,
    title: "Celebrating Happy Birthday Pastor Messages with Joyful Hearts",
    description: "Comprehensive guide about Celebrating Happy Birthday Pastor Messages with Joyful Hearts",
    slug: "happy-birthday-pastor-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732681239171,
    title: "Celebrating Happy Birthday Niece Messages With Sparkling Joy",
    description: "Comprehensive guide about Celebrating Happy Birthday Niece Messages With Sparkling Joy",
    slug: "happy-birthday-niece-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732681219625,
    title: "Celebrating a Happy Birthday Niece Message with Joyful Cheers!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Niece Message with Joyful Cheers!",
    slug: "happy-birthday-niece-message",
    category: "Happy Birthday"
  },
  {
    id: 1732681199535,
    title: "Celebrating Happy Birthday Messages for Manager Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating Happy Birthday Messages for Manager Through Joyful Cheers",
    slug: "happy-birthday-messages-for-manager",
    category: "Happy Birthday"
  },
  {
    id: 1732681181481,
    title: "Celebrating a Happy Birthday Message to Cousin Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to Cousin Through Joyful Cheers",
    slug: "happy-birthday-message-to-cousin",
    category: "Happy Birthday"
  },
  {
    id: 1732681162784,
    title: "Celebrating a Happy Birthday Message to Aunty: Joyful Wishes!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to Aunty: Joyful Wishes!",
    slug: "happy-birthday-message-to-aunty",
    category: "Happy Birthday"
  },
  {
    id: 1732681145108,
    title: "Celebrating a Happy Birthday Message to a Man Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to a Man Through Joyful Cheers",
    slug: "happy-birthday-message-to-a-man",
    category: "Happy Birthday"
  },
  {
    id: 1732681123414,
    title: "Celebrating a Happy Birthday Message Coworker: Joyful Wishes!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message Coworker: Joyful Wishes!",
    slug: "happy-birthday-message-coworker",
    category: "Happy Birthday"
  },
  {
    id: 1732681101189,
    title: "Celebrating Auntie Through a Happy Birthday Message Filled With Joy",
    description: "Comprehensive guide about Celebrating Auntie Through a Happy Birthday Message Filled With Joy",
    slug: "happy-birthday-auntie-message",
    category: "Happy Birthday"
  },
  {
    id: 1732681082433,
    title: "Celebrating Happy 90th Birthday Messages with Joyful Cheers!",
    description: "Comprehensive guide about Celebrating Happy 90th Birthday Messages with Joyful Cheers!",
    slug: "happy-90th-birthday-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732681061784,
    title: "Celebrating Fifteen: A Happy 15th Birthday Message Sparkling With Joy",
    description: "Comprehensive guide about Celebrating Fifteen: A Happy 15th Birthday Message Sparkling With Joy",
    slug: "happy-15th-birthday-message",
    category: "Happy Birthday"
  },
  {
    id: 1732681039178,
    title: "Sparkling Happy 13th Birthday Messages: A Joyful Celebration!",
    description: "Comprehensive guide about Sparkling Happy 13th Birthday Messages: A Joyful Celebration!",
    slug: "happy-13th-birthday-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732681003271,
    title: "Celebrating Life Through Islamic Happy Birthday Messages",
    description: "Comprehensive guide about Celebrating Life Through Islamic Happy Birthday Messages",
    slug: "islamic-happy-birthday-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732680982997,
    title: "Celebrating Islam Happy Birthday Message Through Joyful Blessings",
    description: "Comprehensive guide about Celebrating Islam Happy Birthday Message Through Joyful Blessings",
    slug: "islam-happy-birthday-message",
    category: "Happy Birthday"
  },
  {
    id: 1732680963092,
    title: "Celebrating Happy Birthday to Wife Messages with Radiant Joy",
    description: "Comprehensive guide about Celebrating Happy Birthday to Wife Messages with Radiant Joy",
    slug: "happy-birthday-to-wife-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732680945338,
    title: "Celebrating Happy Birthday Messages to Coworker Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating Happy Birthday Messages to Coworker Through Joyful Cheers",
    slug: "happy-birthday-messages-to-coworker",
    category: "Happy Birthday"
  },
  {
    id: 1732680927311,
    title: "Celebrating Happy Birthday Messages in Spanish with Joyful Alegría!",
    description: "Comprehensive guide about Celebrating Happy Birthday Messages in Spanish with Joyful Alegría!",
    slug: "happy-birthday-messages-in-spanish",
    category: "Happy Birthday"
  },
  {
    id: 1732680906919,
    title: "Celebrating Happy Birthday Messages for Wife: A Joyful Toast!",
    description: "Comprehensive guide about Celebrating Happy Birthday Messages for Wife: A Joyful Toast!",
    slug: "happy-birthday-messages-for-wife",
    category: "Happy Birthday"
  },
  {
    id: 1732680890483,
    title: "Celebrating a Happy Birthday Message to Employee Through Joyful Cheers!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to Employee Through Joyful Cheers!",
    slug: "happy-birthday-message-to-employee",
    category: "Happy Birthday"
  },
  {
    id: 1732680871356,
    title: "Celebrating a Happy Birthday Message to a Mother in Law with Joyful Cheers!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to a Mother in Law with Joyful Cheers!",
    slug: "happy-birthday-message-to-a-mother-in-law",
    category: "Happy Birthday"
  },
  {
    id: 1732680853105,
    title: "Celebrating a Happy Birthday Message for Niece: Joyful Wishes",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message for Niece: Joyful Wishes",
    slug: "happy-birthday-message-for-niece",
    category: "Happy Birthday"
  },
  {
    id: 1732680830805,
    title: "Celebrating a Happy Birthday Message for Grandson Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message for Grandson Through Joyful Cheers",
    slug: "happy-birthday-message-for-grandson",
    category: "Happy Birthday"
  },
  {
    id: 1732680812321,
    title: "Celebrating a Happy Birthday Message for a Coworker!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message for a Coworker!",
    slug: "happy-birthday-message-for-a-coworker",
    category: "Happy Birthday"
  },
  {
    id: 1732680794049,
    title: "Celebrating Happy Birthday Cousin Messages with Joyful Cheers!",
    description: "Comprehensive guide about Celebrating Happy Birthday Cousin Messages with Joyful Cheers!",
    slug: "happy-birthday-cousin-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732680773031,
    title: "Celebrating Happy 65th Birthday Messages with Joyful Cheers!",
    description: "Comprehensive guide about Celebrating Happy 65th Birthday Messages with Joyful Cheers!",
    slug: "happy-65th-birthday-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732680752223,
    title: "Cousin Happy Birthday Message:  A Celebration Sparkling With Joy!",
    description: "Comprehensive guide about Cousin Happy Birthday Message:  A Celebration Sparkling With Joy!",
    slug: "cousin-happy-birthday-message",
    category: "Happy Birthday"
  },
  {
    id: 1732680729915,
    title: "Happy Sweet 16 Birthday Messages: Sparkling Joyful Celebrations!",
    description: "Comprehensive guide about Happy Sweet 16 Birthday Messages: Sparkling Joyful Celebrations!",
    slug: "happy-sweet-16-birthday-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732680710042,
    title: "Celebrating a Happy Birthday Message to Mother in Law with Joyful Cheers!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to Mother in Law with Joyful Cheers!",
    slug: "happy-birthday-message-to-mother-in-law",
    category: "Happy Birthday"
  },
  {
    id: 1732680690897,
    title: "Celebrating a Happy Birthday Message to Aunt Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to Aunt Through Joyful Cheers",
    slug: "happy-birthday-message-to-aunt",
    category: "Happy Birthday"
  },
  {
    id: 1732680674116,
    title: "Celebrating a Happy Birthday Message to a Uncle Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to a Uncle Through Joyful Cheers",
    slug: "happy-birthday-message-to-a-uncle",
    category: "Happy Birthday"
  },
  {
    id: 1732680634000,
    title: "Celebrating a Happy Birthday Message for an Uncle Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message for an Uncle Through Joyful Cheers",
    slug: "happy-birthday-message-for-an-uncle",
    category: "Happy Birthday"
  },
  {
    id: 1732680612828,
    title: "Uncle Happy Birthday Message:  A Celebration Sparkling With Joy!",
    description: "Comprehensive guide about Uncle Happy Birthday Message:  A Celebration Sparkling With Joy!",
    slug: "uncle-happy-birthday-message",
    category: "Happy Birthday"
  },
  {
    id: 1732680589992,
    title: "Celebrating a Happy Birthday Message to Wife:  Radiant Joy!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to Wife:  Radiant Joy!",
    slug: "happy-birthday-message-to-wife",
    category: "Happy Birthday"
  },
  {
    id: 1732680571943,
    title: "Celebrating a Happy Birthday Message to My Niece: Joyful Wishes!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to My Niece: Joyful Wishes!",
    slug: "happy-birthday-message-to-my-niece",
    category: "Happy Birthday"
  },
  {
    id: 1732680551792,
    title: "Celebrating a Happy Birthday Message for Grandma with Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message for Grandma with Joyful Cheers",
    slug: "happy-birthday-message-for-grandma",
    category: "Happy Birthday"
  },
  {
    id: 1732680531294,
    title: "Celebrating a Happy Birthday Message for Boss Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message for Boss Through Joyful Cheers",
    slug: "happy-birthday-message-for-boss",
    category: "Happy Birthday"
  },
  {
    id: 1732680511726,
    title: "Sweet Happy 16th Birthday Messages: Sparkling Joy!",
    description: "Comprehensive guide about Sweet Happy 16th Birthday Messages: Sparkling Joy!",
    slug: "happy-16th-birthday-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732680491184,
    title: "Celebrating 70th Happy Birthday Messages with Joyful Hearts",
    description: "Comprehensive guide about Celebrating 70th Happy Birthday Messages with Joyful Hearts",
    slug: "70th-happy-birthday-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732680471036,
    title: "Celebrating Happy Birthday Messages for Coworker Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating Happy Birthday Messages for Coworker Through Joyful Cheers",
    slug: "happy-birthday-messages-for-coworker",
    category: "Happy Birthday"
  },
  {
    id: 1732680450072,
    title: "Celebrating a Happy Birthday Message for Daughter in Law With Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message for Daughter in Law With Joyful Cheers",
    slug: "happy-birthday-message-for-daughter-in-law",
    category: "Happy Birthday"
  },
  {
    id: 1732680430969,
    title: "Celebrating a Happy Birthday Message for a Grandmother Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message for a Grandmother Through Joyful Cheers",
    slug: "happy-birthday-message-for-a-grandmother",
    category: "Happy Birthday"
  },
  {
    id: 1732680413507,
    title: "Happy Birthday Animated Message: Dancing Joyful Celebrations!",
    description: "Comprehensive guide about Happy Birthday Animated Message: Dancing Joyful Celebrations!",
    slug: "happy-birthday-animated-message",
    category: "Happy Birthday"
  },
  {
    id: 1732680395892,
    title: "Celebrating Happy Birthday Wife Message:  A Joyful Toast!",
    description: "Comprehensive guide about Celebrating Happy Birthday Wife Message:  A Joyful Toast!",
    slug: "happy-birthday-wife-message",
    category: "Happy Birthday"
  },
  {
    id: 1732680377776,
    title: "Celebrating a Happy Birthday Message to a Coworker!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to a Coworker!",
    slug: "happy-birthday-message-to-a-coworker",
    category: "Happy Birthday"
  },
  {
    id: 1732680357313,
    title: "Celebrating a Happy Birthday Message for Granddaughter: Joyful Wishes",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message for Granddaughter: Joyful Wishes",
    slug: "happy-birthday-message-for-granddaughter",
    category: "Happy Birthday"
  },
  {
    id: 1732680337434,
    title: "Celebrating Life's Joy: Happy 70th Birthday Messages",
    description: "Comprehensive guide about Celebrating Life's Joy: Happy 70th Birthday Messages",
    slug: "happy-70th-birthday-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732680314752,
    title: "Celebrating Happy Sweet Sixteen Birthday Messages with Joyful Hearts",
    description: "Comprehensive guide about Celebrating Happy Sweet Sixteen Birthday Messages with Joyful Hearts",
    slug: "happy-sweet-sixteen-birthday-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732680296186,
    title: "Celebrating a Happy Birthday Message to My Wife Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to My Wife Through Joyful Cheers",
    slug: "happy-birthday-message-to-my-wife",
    category: "Happy Birthday"
  },
  {
    id: 1732680275361,
    title: "Celebrating Happy 60th Birthday Messages With Joyful Cheers!",
    description: "Comprehensive guide about Celebrating Happy 60th Birthday Messages With Joyful Cheers!",
    slug: "happy-60th-birthday-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732680254289,
    title: "Late Happy Birthday Messages: Sparkling Joyful Celebrations!",
    description: "Comprehensive guide about Late Happy Birthday Messages: Sparkling Joyful Celebrations!",
    slug: "late-happy-birthday-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732680232420,
    title: "Celebrating a Happy Birthday Message to Colleague Through Joyful Cheers!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to Colleague Through Joyful Cheers!",
    slug: "happy-birthday-message-to-colleague",
    category: "Happy Birthday"
  },
  {
    id: 1732680211176,
    title: "Celebrating Happy Birthday Grandson Messages with Joyful Hearts",
    description: "Comprehensive guide about Celebrating Happy Birthday Grandson Messages with Joyful Hearts",
    slug: "happy-birthday-grandson-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732680192945,
    title: "Celebrating a Happy Birthday Message to Your Wife Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to Your Wife Through Joyful Cheers",
    slug: "happy-birthday-message-to-your-wife",
    category: "Happy Birthday"
  },
  {
    id: 1732680173302,
    title: "Celebrating a Happy Birthday Boss Message with Joyful Cheers!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Boss Message with Joyful Cheers!",
    slug: "happy-birthday-boss-message",
    category: "Happy Birthday"
  },
  {
    id: 1732680155237,
    title: "Celebrating a Happy Birthday Message to Niece: Joyful Wishes!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to Niece: Joyful Wishes!",
    slug: "happy-birthday-message-to-niece",
    category: "Happy Birthday"
  },
  {
    id: 1732680133236,
    title: "Celebrating a Happy Birthday Message for Colleague Through Joyful Cheers!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message for Colleague Through Joyful Cheers!",
    slug: "happy-birthday-message-for-colleague",
    category: "Happy Birthday"
  },
  {
    id: 1732680111685,
    title: "Happy Birthday Meaningful Message Tumblr:  Celebrating Life's Sparkling Joy!",
    description: "Comprehensive guide about Happy Birthday Meaningful Message Tumblr:  Celebrating Life's Sparkling Joy!",
    slug: "happy-birthday-meaningful-message-tumblr",
    category: "Happy Birthday"
  },
  {
    id: 1732680090576,
    title: "Celebrating Life's Joy Through a Happy Belated Birthday Message",
    description: "Comprehensive guide about Celebrating Life's Joy Through a Happy Belated Birthday Message",
    slug: "happy-belated-birthday-message",
    category: "Happy Birthday"
  },
  {
    id: 1732680069316,
    title: "Celebrating Happy Sweet 16th Birthday Messages With Sparkling Joy",
    description: "Comprehensive guide about Celebrating Happy Sweet 16th Birthday Messages With Sparkling Joy",
    slug: "happy-sweet-16th-birthday-messages",
    category: "Happy Birthday"
  },
  {
    id: 1732680049803,
    title: "Celebrating Life's Joy: A Happy Birthday Christian Message",
    description: "Comprehensive guide about Celebrating Life's Joy: A Happy Birthday Christian Message",
    slug: "happy-birthday-christian-message",
    category: "Happy Birthday"
  },
  {
    id: 1732680020832,
    title: "Celebrating a Happy Birthday Message for Coworker Through Joyful Cheers",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message for Coworker Through Joyful Cheers",
    slug: "happy-birthday-message-for-coworker",
    category: "Happy Birthday"
  },
  {
    id: 1732680000379,
    title: "Celebrating a Happy Birthday Message to Coworker:  Joyful Wishes!",
    description: "Comprehensive guide about Celebrating a Happy Birthday Message to Coworker:  Joyful Wishes!",
    slug: "happy-birthday-message-to-coworker",
    category: "Happy Birthday"
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