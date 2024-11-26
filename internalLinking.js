// internalLinking.js
import fs from 'fs/promises';
import path from 'path';

const PAGES_DIR = './src/pages/question';

const questions = [
  {
    id: 1732593629569,
    title: "Celebrating Happy Mothers Day Messages with Endless Love",
    description: "Comprehensive guide about Celebrating Happy Mothers Day Messages with Endless Love",
    slug: "happy-mothers-day-messages",
    category: "Happy Mother"
  },
  {
    id: 1732593613135,
    title: "Celebrating Happy Mothers Day Messages to Sister With Unwavering Love",
    description: "Comprehensive guide about Celebrating Happy Mothers Day Messages to Sister With Unwavering Love",
    slug: "happy-mothers-day-messages-to-sister",
    category: "Happy Mother"
  },
  {
    id: 1732593590454,
    title: "Happy Mothers Day Message to Grandma:  Celebrating a Lifetime of Love",
    description: "Comprehensive guide about Happy Mothers Day Message to Grandma:  Celebrating a Lifetime of Love",
    slug: "happy-mothers-day-message-to-grandma",
    category: "Happy Mother"
  },
  {
    id: 1732593570487,
    title: "Celebrating Happy Mothers Day Message to Coworkers With Joyful Hearts",
    description: "Comprehensive guide about Celebrating Happy Mothers Day Message to Coworkers With Joyful Hearts",
    slug: "happy-mothers-day-message-to-coworkers",
    category: "Happy Mother"
  },
  {
    id: 1732593553361,
    title: "Celebrating a Happy Mothers Day Message for Wife: A Love Unfolding",
    description: "Comprehensive guide about Celebrating a Happy Mothers Day Message for Wife: A Love Unfolding",
    slug: "happy-mothers-day-message-for-wife",
    category: "Happy Mother"
  },
  {
    id: 1732593534326,
    title: "Cherishing a Happy Mothers Day Message for Grandma",
    description: "Comprehensive guide about Cherishing a Happy Mothers Day Message for Grandma",
    slug: "happy-mothers-day-message-for-grandma",
    category: "Happy Mother"
  },
  {
    id: 1732593517007,
    title: "Celebrating a Happy Mother's Day Message to All Mothers",
    description: "Comprehensive guide about Celebrating a Happy Mother's Day Message to All Mothers",
    slug: "happy-mother-s-day-message-to-all-mothers",
    category: "Happy Mother"
  },
  {
    id: 1732593499269,
    title: "Cherishing a Happy First Mothers Day Message to Friend",
    description: "Comprehensive guide about Cherishing a Happy First Mothers Day Message to Friend",
    slug: "happy-first-mothers-day-message-to-friend",
    category: "Happy Mother"
  },
  {
    id: 1732593479980,
    title: "Grandma Mothers Day Messages:  Cherishing Timeless Love",
    description: "Comprehensive guide about Grandma Mothers Day Messages:  Cherishing Timeless Love",
    slug: "grandma-mothers-day-messages",
    category: "Happy Mother"
  },
  {
    id: 1732593459265,
    title: "Celebrating Godly Mothers Day Message: A Heart's Embrace",
    description: "Comprehensive guide about Celebrating Godly Mothers Day Message: A Heart's Embrace",
    slug: "godly-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732593442724,
    title: "Celebrating Mom Through Hilarious Funny Mothers Day Messages",
    description: "Comprehensive guide about Celebrating Mom Through Hilarious Funny Mothers Day Messages",
    slug: "funny-mothers-day-messages",
    category: "Happy Mother"
  },
  {
    id: 1732593417045,
    title: "Celebrating Mom Through Funny Mothers Day Text Messages",
    description: "Comprehensive guide about Celebrating Mom Through Funny Mothers Day Text Messages",
    slug: "funny-mothers-day-text-messages",
    category: "Happy Mother"
  },
  {
    id: 1732593391019,
    title: "Celebrating Mom Through Hilarious Funny Mothers Day SMS Messages",
    description: "Comprehensive guide about Celebrating Mom Through Hilarious Funny Mothers Day SMS Messages",
    slug: "funny-mothers-day-sms-messages",
    category: "Happy Mother"
  },
  {
    id: 1732593369764,
    title: "Celebrating a Funny Happy Mothers Day Message with Joyful Laughter",
    description: "Comprehensive guide about Celebrating a Funny Happy Mothers Day Message with Joyful Laughter",
    slug: "funny-happy-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732593344812,
    title: "First Mother's Day Message from Husband: Cherishing Our Blooming Family",
    description: "Comprehensive guide about First Mother's Day Message from Husband: Cherishing Our Blooming Family",
    slug: "first-mothers-day-message-from-husband",
    category: "Happy Mother"
  },
  {
    id: 1732593326390,
    title: "Celebrating Our First Mothers Day Card Message with Joyful Love",
    description: "Comprehensive guide about Celebrating Our First Mothers Day Card Message with Joyful Love",
    slug: "first-mothers-day-card-message",
    category: "Happy Mother"
  },
  {
    id: 1732593305538,
    title: "Celebrating Corporate Mothers Day Messages with Abundant Love",
    description: "Comprehensive guide about Celebrating Corporate Mothers Day Messages with Abundant Love",
    slug: "corporate-mothers-day-messages",
    category: "Happy Mother"
  },
  {
    id: 1732593286516,
    title: "Celebrating a Christian Mother's Day Message of Grace",
    description: "Comprehensive guide about Celebrating a Christian Mother's Day Message of Grace",
    slug: "christian-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732593269967,
    title: "Bidens Mothers Day Message:  Celebrating a Nation's Mothers",
    description: "Comprehensive guide about Bidens Mothers Day Message:  Celebrating a Nation's Mothers",
    slug: "bidens-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732593250830,
    title: "Auntie Mothers Day Message: Celebrating a Love That Blooms",
    description: "Comprehensive guide about Auntie Mothers Day Message: Celebrating a Love That Blooms",
    slug: "auntie-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732593232019,
    title: "Cherishing My 1st Mothers Day Message: A Love Unfolding",
    description: "Comprehensive guide about Cherishing My 1st Mothers Day Message: A Love Unfolding",
    slug: "1st-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732593209847,
    title: "Trump's Mother's Day Message: A Celebration of Cherished Love",
    description: "Comprehensive guide about Trump's Mother's Day Message: A Celebration of Cherished Love",
    slug: "trumps-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732593191045,
    title: "Trump's Mother's Day Message:  Celebrating a Mother's Unwavering Love",
    description: "Comprehensive guide about Trump's Mother's Day Message:  Celebrating a Mother's Unwavering Love",
    slug: "trump-s-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732593171306,
    title: "Celebrating a Thank You Mothers Day Message with Endless Love",
    description: "Comprehensive guide about Celebrating a Thank You Mothers Day Message with Endless Love",
    slug: "thank-you-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732593151393,
    title: "Celebrating Spiritual Mothers Day Messages with Radiant Love",
    description: "Comprehensive guide about Celebrating Spiritual Mothers Day Messages with Radiant Love",
    slug: "spiritual-mothers-day-messages",
    category: "Happy Mother"
  },
  {
    id: 1732593134344,
    title: "Celebrating Spanish Mothers Day Messages with Abundant Love",
    description: "Comprehensive guide about Celebrating Spanish Mothers Day Messages with Abundant Love",
    slug: "spanish-mothers-day-messages",
    category: "Happy Mother"
  },
  {
    id: 1732593117264,
    title: "Short Mothers Day Messages for Cards:  Celebrating a Love Unending",
    description: "Comprehensive guide about Short Mothers Day Messages for Cards:  Celebrating a Love Unending",
    slug: "short-mothers-day-messages-for-cards",
    category: "Happy Mother"
  },
  {
    id: 1732593099682,
    title: "Short Funny Mothers Day Messages:  Celebrating a Mom's Unending Joy",
    description: "Comprehensive guide about Short Funny Mothers Day Messages:  Celebrating a Mom's Unending Joy",
    slug: "short-funny-mothers-day-messages",
    category: "Happy Mother"
  },
  {
    id: 1732593081135,
    title: "Celebrating Mother's Day Messages to Friends With Joyful Hearts",
    description: "Comprehensive guide about Celebrating Mother's Day Messages to Friends With Joyful Hearts",
    slug: "mothers-day-messages-to-friends",
    category: "Happy Mother"
  },
  {
    id: 1732593060498,
    title: "Celebrating Mothers Day Messages Funny, with a Heart Full of Joy",
    description: "Comprehensive guide about Celebrating Mothers Day Messages Funny, with a Heart Full of Joy",
    slug: "mothers-day-messages-funny",
    category: "Happy Mother"
  },
  {
    id: 1732593043813,
    title: "A Son's Cherished Mother's Day Messages: Celebrating Unconditional Love",
    description: "Comprehensive guide about A Son's Cherished Mother's Day Messages: Celebrating Unconditional Love",
    slug: "mothers-day-messages-from-son",
    category: "Happy Mother"
  },
  {
    id: 1732593026300,
    title: "Celebrating Mother's Day Messages from Husband: A Heart's Embrace",
    description: "Comprehensive guide about Celebrating Mother's Day Messages from Husband: A Heart's Embrace",
    slug: "mothers-day-messages-from-husband",
    category: "Happy Mother"
  },
  {
    id: 1732593004733,
    title: "Cherishing Mother's Day Messages from Daughter in Law: A Heartfelt Tribute",
    description: "Comprehensive guide about Cherishing Mother's Day Messages from Daughter in Law: A Heartfelt Tribute",
    slug: "mothers-day-messages-from-daughter-in-law",
    category: "Happy Mother"
  },
  {
    id: 1732592986421,
    title: "Celebrating Mothers Day Messages for Wife:  A Love So Deep",
    description: "Comprehensive guide about Celebrating Mothers Day Messages for Wife:  A Love So Deep",
    slug: "mothers-day-messages-for-wife",
    category: "Happy Mother"
  },
  {
    id: 1732592967985,
    title: "Celebrating Mothers Day Messages for Mother in Law With Love",
    description: "Comprehensive guide about Celebrating Mothers Day Messages for Mother in Law With Love",
    slug: "mothers-day-messages-for-mother-in-law",
    category: "Happy Mother"
  },
  {
    id: 1732592946031,
    title: "Cherishing Mothers Day Messages for Grandma: A Heartfelt Tribute",
    description: "Comprehensive guide about Cherishing Mothers Day Messages for Grandma: A Heartfelt Tribute",
    slug: "mothers-day-messages-for-grandma",
    category: "Happy Mother"
  },
  {
    id: 1732592926018,
    title: "Celebrating Mothers Day Messages for Church: A Mother's Love",
    description: "Comprehensive guide about Celebrating Mothers Day Messages for Church: A Mother's Love",
    slug: "mothers-day-messages-for-church",
    category: "Happy Mother"
  },
  {
    id: 1732592908794,
    title: "Cherishing Mothers Day Message to Daughter-in-Law: A Heartfelt Celebration",
    description: "Comprehensive guide about Cherishing Mothers Day Message to Daughter-in-Law: A Heartfelt Celebration",
    slug: "mothers-day-message-to-daughter-in-law",
    category: "Happy Mother"
  },
  {
    id: 1732592893371,
    title: "Celebrating Our Motherhood: A Mother's Day Message to Daughter-in-Law",
    description: "Comprehensive guide about Celebrating Our Motherhood: A Mother's Day Message to Daughter-in-Law",
    slug: "mothers-day-message-to-daughter-in-law",
    category: "Happy Mother"
  },
  {
    id: 1732592875161,
    title: "Celebrating a Mother's Day Message to Boyfriend's Mom with Love",
    description: "Comprehensive guide about Celebrating a Mother's Day Message to Boyfriend's Mom with Love",
    slug: "mothers-day-message-to-boyfriends-mom",
    category: "Happy Mother"
  },
  {
    id: 1732592852391,
    title: "Celebrating Mothers Day Message Mother In Law With Cherished Love",
    description: "Comprehensive guide about Celebrating Mothers Day Message Mother In Law With Cherished Love",
    slug: "mothers-day-message-mother-in-law",
    category: "Happy Mother"
  },
  {
    id: 1732592834495,
    title: "A Mother's Day Message from Sons:  Celebrating Unwavering Love",
    description: "Comprehensive guide about A Mother's Day Message from Sons:  Celebrating Unwavering Love",
    slug: "mothers-day-message-from-sons",
    category: "Happy Mother"
  },
  {
    id: 1732592810904,
    title: "Cherishing Mothers Day Message from Daughter-in-Law: A Heartfelt Celebration",
    description: "Comprehensive guide about Cherishing Mothers Day Message from Daughter-in-Law: A Heartfelt Celebration",
    slug: "mothers-day-message-from-daughter-in-law",
    category: "Happy Mother"
  },
  {
    id: 1732592793021,
    title: "Celebrating Our Love: Mother's Day Message for Wife",
    description: "Comprehensive guide about Celebrating Our Love: Mother's Day Message for Wife",
    slug: "mothers-day-message-for-wife",
    category: "Happy Mother"
  },
  {
    id: 1732592772736,
    title: "Cherishing Mothers Day Message for Daughter-in-Law: A Heartfelt Celebration",
    description: "Comprehensive guide about Cherishing Mothers Day Message for Daughter-in-Law: A Heartfelt Celebration",
    slug: "mothers-day-message-for-daughter-in-law",
    category: "Happy Mother"
  },
  {
    id: 1732592754491,
    title: "Celebrating Mother's Day Message for Daughter in Law: A Heart's Embrace",
    description: "Comprehensive guide about Celebrating Mother's Day Message for Daughter in Law: A Heart's Embrace",
    slug: "mothers-day-message-for-daughter-in-law",
    category: "Happy Mother"
  },
  {
    id: 1732592729406,
    title: "Celebrating Mothers Day Message for Card: A Heart's Embrace",
    description: "Comprehensive guide about Celebrating Mothers Day Message for Card: A Heart's Embrace",
    slug: "mothers-day-message-for-card",
    category: "Happy Mother"
  },
  {
    id: 1732592709945,
    title: "Celebrating Mothers Day Invitation Message With Joyful Hearts",
    description: "Comprehensive guide about Celebrating Mothers Day Invitation Message With Joyful Hearts",
    slug: "mothers-day-invitation-message",
    category: "Happy Mother"
  },
  {
    id: 1732592690524,
    title: "Celebrating Mothers Day Inspiring Messages with Endless Love",
    description: "Comprehensive guide about Celebrating Mothers Day Inspiring Messages with Endless Love",
    slug: "mothers-day-inspiring-messages",
    category: "Happy Mother"
  },
  {
    id: 1732592670663,
    title: "Celebrating Mothers Day Inspirational Message: A Heart's Embrace",
    description: "Comprehensive guide about Celebrating Mothers Day Inspirational Message: A Heart's Embrace",
    slug: "mothers-day-inspirational-message",
    category: "Happy Mother"
  },
  {
    id: 1732592654289,
    title: "Celebrating Mothers Day Flower Message: A Bouquet of Love",
    description: "Comprehensive guide about Celebrating Mothers Day Flower Message: A Bouquet of Love",
    slug: "mothers-day-flower-message",
    category: "Happy Mother"
  },
  {
    id: 1732592637368,
    title: "Celebrating Mothers Day Flower Card Messages with Endless Love",
    description: "Comprehensive guide about Celebrating Mothers Day Flower Card Messages with Endless Love",
    slug: "mothers-day-flower-card-messages",
    category: "Happy Mother"
  },
  {
    id: 1732592620727,
    title: "Celebrating a Mother's Day Daughter Message: A Heartfelt Tribute",
    description: "Comprehensive guide about Celebrating a Mother's Day Daughter Message: A Heartfelt Tribute",
    slug: "mothers-day-daughter-message",
    category: "Happy Mother"
  },
  {
    id: 1732592599945,
    title: "Celebrating Happy Mothers Day Messages in Spanish:  A Heartfelt Embrace",
    description: "Comprehensive guide about Celebrating Happy Mothers Day Messages in Spanish:  A Heartfelt Embrace",
    slug: "happy-mothers-day-messages-in-spanish",
    category: "Happy Mother"
  },
  {
    id: 1732592581204,
    title: "Celebrating Happy Mothers Day Message to Work Colleagues With Love",
    description: "Comprehensive guide about Celebrating Happy Mothers Day Message to Work Colleagues With Love",
    slug: "happy-mothers-day-message-to-work-colleagues",
    category: "Happy Mother"
  },
  {
    id: 1732592564748,
    title: "Celebrating a Happy Mothers Day Message for Mother in Law, showering her with love",
    description: "Comprehensive guide about Celebrating a Happy Mothers Day Message for Mother in Law, showering her with love",
    slug: "happy-mothers-day-message-for-mother-in-law",
    category: "Happy Mother"
  },
  {
    id: 1732592544840,
    title: "Celebrating Happy Mothers Day Christian Messages with God's Love",
    description: "Comprehensive guide about Celebrating Happy Mothers Day Christian Messages with God's Love",
    slug: "happy-mothers-day-christian-messages",
    category: "Happy Mother"
  },
  {
    id: 1732592525917,
    title: "Grandma Mothers Day Card Message:  Celebrating a Lifetime of Love",
    description: "Comprehensive guide about Grandma Mothers Day Card Message:  Celebrating a Lifetime of Love",
    slug: "grandma-mothers-day-card-message",
    category: "Happy Mother"
  },
  {
    id: 1732592507447,
    title: "Celebrating Mom: A Funny Mothers Day Message Filled With Love",
    description: "Comprehensive guide about Celebrating Mom: A Funny Mothers Day Message Filled With Love",
    slug: "funny-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732592483765,
    title: "Celebrating Life's Laughter: Funny Mothers Day Card Messages",
    description: "Comprehensive guide about Celebrating Life's Laughter: Funny Mothers Day Card Messages",
    slug: "funny-mothers-day-card-messages",
    category: "Happy Mother"
  },
  {
    id: 1732592458796,
    title: "Celebrating a Christian Mother's Day Message to a Friend, Honoring Your Beautiful Heart",
    description: "Comprehensive guide about Celebrating a Christian Mother's Day Message to a Friend, Honoring Your Beautiful Heart",
    slug: "christian-mothers-day-message-to-a-friend",
    category: "Happy Mother"
  },
  {
    id: 1732592434078,
    title: "Celebrating Sister Mothers Day Message: A Heartfelt Tribute",
    description: "Comprehensive guide about Celebrating Sister Mothers Day Message: A Heartfelt Tribute",
    slug: "sister-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732592416973,
    title: "Celebrating Our Love: Mothers Day Wife Message",
    description: "Comprehensive guide about Celebrating Our Love: Mothers Day Wife Message",
    slug: "mothers-day-wife-message",
    category: "Happy Mother"
  },
  {
    id: 1732592397789,
    title: "Celebrating Mothers Day Messages to All Mothers with Joyful Hearts",
    description: "Comprehensive guide about Celebrating Mothers Day Messages to All Mothers with Joyful Hearts",
    slug: "mothers-day-messages-to-all-mothers",
    category: "Happy Mother"
  },
  {
    id: 1732592380589,
    title: "Celebrating Mothers Day Messages for Aunt With Overflowing Love",
    description: "Comprehensive guide about Celebrating Mothers Day Messages for Aunt With Overflowing Love",
    slug: "mothers-day-messages-for-aunt",
    category: "Happy Mother"
  },
  {
    id: 1732592362271,
    title: "Celebrating Our Love: Mother's Day Message to Wife from Husband",
    description: "Comprehensive guide about Celebrating Our Love: Mother's Day Message to Wife from Husband",
    slug: "mothers-day-message-to-wife-from-husband",
    category: "Happy Mother"
  },
  {
    id: 1732592342238,
    title: "Cherishing Mothers Day Message to Bf Mom, Celebrating Her Love",
    description: "Comprehensive guide about Cherishing Mothers Day Message to Bf Mom, Celebrating Her Love",
    slug: "mothers-day-message-to-bf-mom",
    category: "Happy Mother"
  },
  {
    id: 1732592323358,
    title: "Celebrating You: Mother's Day Message from Husband to Wife",
    description: "Comprehensive guide about Celebrating You: Mother's Day Message from Husband to Wife",
    slug: "mothers-day-message-from-husband-to-wife",
    category: "Happy Mother"
  },
  {
    id: 1732592304348,
    title: "Celebrating Mothers Day in Heaven Message:  Eternal Love's Embrace",
    description: "Comprehensive guide about Celebrating Mothers Day in Heaven Message:  Eternal Love's Embrace",
    slug: "mothers-day-in-heaven-message",
    category: "Happy Mother"
  },
  {
    id: 1732592286964,
    title: "Celebrating Mother's Day Messages for All Mothers with Endless Love",
    description: "Comprehensive guide about Celebrating Mother's Day Messages for All Mothers with Endless Love",
    slug: "mother-s-day-messages-for-all-mothers",
    category: "Happy Mother"
  },
  {
    id: 1732592269996,
    title: "Cherishing Messages for Mothers Day Card:  A Celebration of Love",
    description: "Comprehensive guide about Cherishing Messages for Mothers Day Card:  A Celebration of Love",
    slug: "messages-for-mothers-day-card",
    category: "Happy Mother"
  },
  {
    id: 1732592251758,
    title: "Celebrating Happy Mothers Day Message to Friends with Cherished Love",
    description: "Comprehensive guide about Celebrating Happy Mothers Day Message to Friends with Cherished Love",
    slug: "happy-mothers-day-message-to-friends",
    category: "Happy Mother"
  },
  {
    id: 1732592227008,
    title: "Celebrating a Daughter-in-Law's Mother's Day Message with Joyful Love",
    description: "Comprehensive guide about Celebrating a Daughter-in-Law's Mother's Day Message with Joyful Love",
    slug: "daughter-in-law-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732592207272,
    title: "Biden Mother's Day Message: Celebrating a Nation's Mothers",
    description: "Comprehensive guide about Biden Mother's Day Message: Celebrating a Nation's Mothers",
    slug: "biden-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732592188849,
    title: "Celebrating a Biblical Mothers Day Message Through Endless Love",
    description: "Comprehensive guide about Celebrating a Biblical Mothers Day Message Through Endless Love",
    slug: "biblical-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732592173092,
    title: "Celebrating a Step Mom Mothers Day Message Filled With Love",
    description: "Comprehensive guide about Celebrating a Step Mom Mothers Day Message Filled With Love",
    slug: "step-mom-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732592150093,
    title: "Celebrating Mothers Day Sister Message: A Bond of Cherished Love",
    description: "Comprehensive guide about Celebrating Mothers Day Sister Message: A Bond of Cherished Love",
    slug: "mothers-day-sister-message",
    category: "Happy Mother"
  },
  {
    id: 1732592131879,
    title: "Celebrating Mothers Day Messages to Mom: A Heartfelt Tribute",
    description: "Comprehensive guide about Celebrating Mothers Day Messages to Mom: A Heartfelt Tribute",
    slug: "mothers-day-messages-to-mom",
    category: "Happy Mother"
  },
  {
    id: 1732592111601,
    title: "Celebrating Mothers Day Messages for Sister: A Heartfelt Tribute",
    description: "Comprehensive guide about Celebrating Mothers Day Messages for Sister: A Heartfelt Tribute",
    slug: "mothers-day-messages-for-sister",
    category: "Happy Mother"
  },
  {
    id: 1732592085026,
    title: "Celebrating Mothers Day Messages for Daughter in Law With Cherished Love",
    description: "Comprehensive guide about Celebrating Mothers Day Messages for Daughter in Law With Cherished Love",
    slug: "mothers-day-messages-for-daughter-in-law",
    category: "Happy Mother"
  },
  {
    id: 1732592067717,
    title: "Celebrating Mothers Day Message Funny, With Love's Giggles",
    description: "Comprehensive guide about Celebrating Mothers Day Message Funny, With Love's Giggles",
    slug: "mothers-day-message-funny",
    category: "Happy Mother"
  },
  {
    id: 1732592049486,
    title: "Cherishing Mother's Day Message from Daughter-in-Law: A Heartfelt Celebration",
    description: "Comprehensive guide about Cherishing Mother's Day Message from Daughter-in-Law: A Heartfelt Celebration",
    slug: "mothers-day-message-from-daughter-in-law",
    category: "Happy Mother"
  },
  {
    id: 1732592027852,
    title: "Celebrating My Wife: A Mother's Day Message Overflowing With Love",
    description: "Comprehensive guide about Celebrating My Wife: A Mother's Day Message Overflowing With Love",
    slug: "mothers-day-message-for-my-wife",
    category: "Happy Mother"
  },
  {
    id: 1732592009486,
    title: "Celebrating Mothers Day Message for a Friend With Joyful Hearts",
    description: "Comprehensive guide about Celebrating Mothers Day Message for a Friend With Joyful Hearts",
    slug: "mothers-day-message-for-a-friend",
    category: "Happy Mother"
  },
  {
    id: 1732591988357,
    title: "Celebrating Mothers Day Bible Message: A Tapestry of Love",
    description: "Comprehensive guide about Celebrating Mothers Day Bible Message: A Tapestry of Love",
    slug: "mothers-day-bible-message",
    category: "Happy Mother"
  },
  {
    id: 1732591971734,
    title: "Celebrating Mother's Day Message to All Mothers: A Heartfelt Tribute",
    description: "Comprehensive guide about Celebrating Mother's Day Message to All Mothers: A Heartfelt Tribute",
    slug: "mother-s-day-message-to-all-mothers",
    category: "Happy Mother"
  },
  {
    id: 1732591954468,
    title: "Celebrating Our Love: Happy Mothers Day Wife Message",
    description: "Comprehensive guide about Celebrating Our Love: Happy Mothers Day Wife Message",
    slug: "happy-mothers-day-wife-message",
    category: "Happy Mother"
  },
  {
    id: 1732591936843,
    title: "Celebrating a Happy Mothers Day Prayer Message with Overflowing Love",
    description: "Comprehensive guide about Celebrating a Happy Mothers Day Prayer Message with Overflowing Love",
    slug: "happy-mothers-day-prayer-message",
    category: "Happy Mother"
  },
  {
    id: 1732591920054,
    title: "Happy Mothers Day Message to All:  Celebrating Unwavering Love",
    description: "Comprehensive guide about Happy Mothers Day Message to All:  Celebrating Unwavering Love",
    slug: "happy-mothers-day-message-to-all",
    category: "Happy Mother"
  },
  {
    id: 1732591902853,
    title: "Cherishing a Happy First Mothers Day Message",
    description: "Comprehensive guide about Cherishing a Happy First Mothers Day Message",
    slug: "happy-first-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732591884982,
    title: "Funny Mothers Day Messages to Friends:  Celebrating Joyful Bonds",
    description: "Comprehensive guide about Funny Mothers Day Messages to Friends:  Celebrating Joyful Bonds",
    slug: "funny-mothers-day-messages-to-friends",
    category: "Happy Mother"
  },
  {
    id: 1732591861472,
    title: "Aunt Mothers Day Messages:  Celebrating a Love That Blooms",
    description: "Comprehensive guide about Aunt Mothers Day Messages:  Celebrating a Love That Blooms",
    slug: "aunt-mothers-day-messages",
    category: "Happy Mother"
  },
  {
    id: 1732591840365,
    title: "Celebrating Aunt Mothers Day Message: A Heart's Overflowing Love",
    description: "Comprehensive guide about Celebrating Aunt Mothers Day Message: A Heart's Overflowing Love",
    slug: "aunt-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732591819513,
    title: "Aunt Messages Mothers Day:  Celebrating a Love That Endures",
    description: "Comprehensive guide about Aunt Messages Mothers Day:  Celebrating a Love That Endures",
    slug: "aunt-messages-mothers-day",
    category: "Happy Mother"
  },
  {
    id: 1732591801413,
    title: "Cherishing Stepmom Mothers Day Messages: A Heartfelt Celebration",
    description: "Comprehensive guide about Cherishing Stepmom Mothers Day Messages: A Heartfelt Celebration",
    slug: "stepmom-mothers-day-messages",
    category: "Happy Mother"
  },
  {
    id: 1732591779833,
    title: "Sister Mothers Day Messages: Celebrating Unbreakable Bonds",
    description: "Comprehensive guide about Sister Mothers Day Messages: Celebrating Unbreakable Bonds",
    slug: "sister-mothers-day-messages",
    category: "Happy Mother"
  },
  {
    id: 1732591762420,
    title: "Celebrating Mothers Day Text Message: A Heartfelt Tribute",
    description: "Comprehensive guide about Celebrating Mothers Day Text Message: A Heartfelt Tribute",
    slug: "mothers-day-text-message",
    category: "Happy Mother"
  },
  {
    id: 1732591742529,
    title: "Celebrating Mothers Day Messages in Spanish:  A Heartfelt Embrace",
    description: "Comprehensive guide about Celebrating Mothers Day Messages in Spanish:  A Heartfelt Embrace",
    slug: "mothers-day-messages-in-spanish",
    category: "Happy Mother"
  },
  {
    id: 1732591725081,
    title: "Celebrating Mothers Day Messages from Bible: A Mother's Unwavering Love",
    description: "Comprehensive guide about Celebrating Mothers Day Messages from Bible: A Mother's Unwavering Love",
    slug: "mothers-day-messages-from-bible",
    category: "Happy Mother"
  },
  {
    id: 1732591708588,
    title: "Celebrating Mothers Day Messages for Mother in Laws With Love",
    description: "Comprehensive guide about Celebrating Mothers Day Messages for Mother in Laws With Love",
    slug: "mothers-day-messages-for-mother-in-laws",
    category: "Happy Mother"
  },
  {
    id: 1732591689234,
    title: "Celebrating Mothers Day Messages for Daughter: A Heartfelt Embrace",
    description: "Comprehensive guide about Celebrating Mothers Day Messages for Daughter: A Heartfelt Embrace",
    slug: "mothers-day-messages-for-daughter",
    category: "Happy Mother"
  },
  {
    id: 1732591670356,
    title: "Celebrating Mothers Day Message to Sister in Law: A Heartfelt Tribute",
    description: "Comprehensive guide about Celebrating Mothers Day Message to Sister in Law: A Heartfelt Tribute",
    slug: "mothers-day-message-to-sister-in-law",
    category: "Happy Mother"
  },
  {
    id: 1732591649158,
    title: "Celebrating My Wife: A Mother's Day Message Overflowing With Love",
    description: "Comprehensive guide about Celebrating My Wife: A Mother's Day Message Overflowing With Love",
    slug: "mothers-day-message-to-my-wife",
    category: "Happy Mother"
  },
  {
    id: 1732591632556,
    title: "A Mother's Day Message to Daughters: Cherishing Unbreakable Bonds",
    description: "Comprehensive guide about A Mother's Day Message to Daughters: Cherishing Unbreakable Bonds",
    slug: "mothers-day-message-to-daughters",
    category: "Happy Mother"
  },
  {
    id: 1732591614961,
    title: "Celebrating Mothers Day Message to Aunt: A Heartfelt Embrace",
    description: "Comprehensive guide about Celebrating Mothers Day Message to Aunt: A Heartfelt Embrace",
    slug: "mothers-day-message-to-aunt",
    category: "Happy Mother"
  },
  {
    id: 1732591593609,
    title: "Celebrating a Mother's Day Message for Aunt, Cherishing Her Heart",
    description: "Comprehensive guide about Celebrating a Mother's Day Message for Aunt, Cherishing Her Heart",
    slug: "mothers-day-message-for-aunt",
    category: "Happy Mother"
  },
  {
    id: 1732591573187,
    title: "Celebrating Mothers Day Christian Messages with Abundant Grace",
    description: "Comprehensive guide about Celebrating Mothers Day Christian Messages with Abundant Grace",
    slug: "mothers-day-christian-messages",
    category: "Happy Mother"
  },
  {
    id: 1732591546269,
    title: "Cherishing Mothers Day Card Messages for Grandma: A Heartfelt Tribute",
    description: "Comprehensive guide about Cherishing Mothers Day Card Messages for Grandma: A Heartfelt Tribute",
    slug: "mothers-day-card-messages-for-grandma",
    category: "Happy Mother"
  },
  {
    id: 1732591527691,
    title: "Celebrating Mother's Day Message for All Mothers:  A Heartfelt Tribute",
    description: "Comprehensive guide about Celebrating Mother's Day Message for All Mothers:  A Heartfelt Tribute",
    slug: "mother-s-day-message-for-all-mothers",
    category: "Happy Mother"
  },
  {
    id: 1732591510059,
    title: "Celebrating Happy Mothers Day Spanish Messages with Endless Love",
    description: "Comprehensive guide about Celebrating Happy Mothers Day Spanish Messages with Endless Love",
    slug: "happy-mothers-day-spanish-messages",
    category: "Happy Mother"
  },
  {
    id: 1732591489028,
    title: "Celebrating Happy Mothers Day Messages to Mother in Law With Abundant Love",
    description: "Comprehensive guide about Celebrating Happy Mothers Day Messages to Mother in Law With Abundant Love",
    slug: "happy-mothers-day-messages-to-mother-in-law",
    category: "Happy Mother"
  },
  {
    id: 1732591470595,
    title: "Happy Mothers Day Messages Funny:  Celebrating Mom's Unwavering Love",
    description: "Comprehensive guide about Happy Mothers Day Messages Funny:  Celebrating Mom's Unwavering Love",
    slug: "happy-mothers-day-messages-funny",
    category: "Happy Mother"
  },
  {
    id: 1732591449498,
    title: "Celebrating a Happy Mother's Day Message to Sister: A Heartfelt Tribute",
    description: "Comprehensive guide about Celebrating a Happy Mother's Day Message to Sister: A Heartfelt Tribute",
    slug: "happy-mothers-day-message-to-sister",
    category: "Happy Mother"
  },
  {
    id: 1732591425543,
    title: "Celebrating a Happy Mothers Day Message to Mother in Law:  A Heartfelt Tribute",
    description: "Comprehensive guide about Celebrating a Happy Mothers Day Message to Mother in Law:  A Heartfelt Tribute",
    slug: "happy-mothers-day-message-to-mother-in-law",
    category: "Happy Mother"
  },
  {
    id: 1732591406487,
    title: "Celebrating a Happy Mothers Day Message to a Friend with Joyful Love",
    description: "Comprehensive guide about Celebrating a Happy Mothers Day Message to a Friend with Joyful Love",
    slug: "happy-mothers-day-message-to-a-friend",
    category: "Happy Mother"
  },
  {
    id: 1732591387512,
    title: "Celebrating Happy Mothers Day Message in Spanish:  A Heartfelt Ode to Love",
    description: "Comprehensive guide about Celebrating Happy Mothers Day Message in Spanish:  A Heartfelt Ode to Love",
    slug: "happy-mothers-day-message-in-spanish",
    category: "Happy Mother"
  },
  {
    id: 1732591369253,
    title: "Celebrating a Happy Mothers Day Christian Message Through God's Grace",
    description: "Comprehensive guide about Celebrating a Happy Mothers Day Christian Message Through God's Grace",
    slug: "happy-mothers-day-christian-message",
    category: "Happy Mother"
  },
  {
    id: 1732591350096,
    title: "Celebrating Happy Mothers Day Aunt Messages With Endless Love",
    description: "Comprehensive guide about Celebrating Happy Mothers Day Aunt Messages With Endless Love",
    slug: "happy-mothers-day-aunt-messages",
    category: "Happy Mother"
  },
  {
    id: 1732591329851,
    title: "Funny Messages for Mother's Day:  Celebrating a Mom's Joyful Heart",
    description: "Comprehensive guide about Funny Messages for Mother's Day:  Celebrating a Mom's Joyful Heart",
    slug: "funny-messages-for-mothers-day",
    category: "Happy Mother"
  },
  {
    id: 1732591307435,
    title: "A Message for Mothers Day:  Celebrating Unwavering Love",
    description: "Comprehensive guide about A Message for Mothers Day:  Celebrating Unwavering Love",
    slug: "a-message-for-mothers-day",
    category: "Happy Mother"
  },
  {
    id: 1732591288978,
    title: "Celebrating Mothers Day Prayer Message: A Heart's Embrace",
    description: "Comprehensive guide about Celebrating Mothers Day Prayer Message: A Heart's Embrace",
    slug: "mothers-day-prayer-message",
    category: "Happy Mother"
  },
  {
    id: 1732591269993,
    title: "Celebrating Mothers Day Pics and Messages with Endless Love",
    description: "Comprehensive guide about Celebrating Mothers Day Pics and Messages with Endless Love",
    slug: "mothers-day-pics-and-messages",
    category: "Happy Mother"
  },
  {
    id: 1732591252270,
    title: "Celebrating Mothers Day Message to Employees: A Heartfelt Tribute",
    description: "Comprehensive guide about Celebrating Mothers Day Message to Employees: A Heartfelt Tribute",
    slug: "mothers-day-message-to-employees",
    category: "Happy Mother"
  },
  {
    id: 1732591233599,
    title: "Celebrating motherhood: A Mother's Day message for sister, brimming with love",
    description: "Comprehensive guide about Celebrating motherhood: A Mother's Day message for sister, brimming with love",
    slug: "mothers-day-message-for-sister",
    category: "Happy Mother"
  },
  {
    id: 1732591218246,
    title: "Celebrating Friendship: A Mother's Day Message for Friend",
    description: "Comprehensive guide about Celebrating Friendship: A Mother's Day Message for Friend",
    slug: "mothers-day-message-for-friend",
    category: "Happy Mother"
  },
  {
    id: 1732591197556,
    title: "Mother's Day Card Messages from Daughter:  Cherishing a Lifetime of Love",
    description: "Comprehensive guide about Mother's Day Card Messages from Daughter:  Cherishing a Lifetime of Love",
    slug: "mothers-day-card-messages-from-daughter",
    category: "Happy Mother"
  },
  {
    id: 1732591177378,
    title: "Celebrating Happy Mothers Day to My Wife Message With Endless Love",
    description: "Comprehensive guide about Celebrating Happy Mothers Day to My Wife Message With Endless Love",
    slug: "happy-mothers-day-to-my-wife-message",
    category: "Happy Mother"
  },
  {
    id: 1732591156731,
    title: "Celebrating Happy Mothers Day to a Friend Message with Joyful Hearts",
    description: "Comprehensive guide about Celebrating Happy Mothers Day to a Friend Message with Joyful Hearts",
    slug: "happy-mothers-day-to-a-friend-message",
    category: "Happy Mother"
  },
  {
    id: 1732591137953,
    title: "Happy Mothers Day Messages to Friends:  Celebrating Cherished Bonds",
    description: "Comprehensive guide about Happy Mothers Day Messages to Friends:  Celebrating Cherished Bonds",
    slug: "happy-mothers-day-messages-to-friends",
    category: "Happy Mother"
  },
  {
    id: 1732591117004,
    title: "Celebrating Happy Mothers Day Messages to All Moms With Endless Love",
    description: "Comprehensive guide about Celebrating Happy Mothers Day Messages to All Moms With Endless Love",
    slug: "happy-mothers-day-messages-to-all-moms",
    category: "Happy Mother"
  },
  {
    id: 1732591100262,
    title: "Celebrating Happy Mothers Day Messages for Grandma Through Timeless Love",
    description: "Comprehensive guide about Celebrating Happy Mothers Day Messages for Grandma Through Timeless Love",
    slug: "happy-mothers-day-messages-for-grandma",
    category: "Happy Mother"
  },
  {
    id: 1732591081756,
    title: "Celebrating My Wife: A Happy Mothers Day Message to My Wife",
    description: "Comprehensive guide about Celebrating My Wife: A Happy Mothers Day Message to My Wife",
    slug: "happy-mothers-day-message-to-my-wife",
    category: "Happy Mother"
  },
  {
    id: 1732591065236,
    title: "Cherishing Happy Mothers Day Grandma Messages: A Heartfelt Celebration",
    description: "Comprehensive guide about Cherishing Happy Mothers Day Grandma Messages: A Heartfelt Celebration",
    slug: "happy-mothers-day-grandma-messages",
    category: "Happy Mother"
  },
  {
    id: 1732591046822,
    title: "Celebrating Happy Mothers Day Funny Messages with Joyful Laughter",
    description: "Comprehensive guide about Celebrating Happy Mothers Day Funny Messages with Joyful Laughter",
    slug: "happy-mothers-day-funny-messages",
    category: "Happy Mother"
  },
  {
    id: 1732591029175,
    title: "Celebrating Friendship Mothers Day Messages for Friends & Family Through Cherished Bonds",
    description: "Comprehensive guide about Celebrating Friendship Mothers Day Messages for Friends & Family Through Cherished Bonds",
    slug: "friendship-mothers-day-messages-for-friends-and-family",
    category: "Happy Mother"
  },
  {
    id: 1732591011096,
    title: "Celebrating Friend Message Happy Mothers Day with Joyful Hearts",
    description: "Comprehensive guide about Celebrating Friend Message Happy Mothers Day with Joyful Hearts",
    slug: "friend-message-happy-mothers-day",
    category: "Happy Mother"
  },
  {
    id: 1732590992884,
    title: "First Mothers Day Messages: Cherishing a Love That Blooms",
    description: "Comprehensive guide about First Mothers Day Messages: Cherishing a Love That Blooms",
    slug: "first-mothers-day-messages",
    category: "Happy Mother"
  },
  {
    id: 1732590971627,
    title: "Celebrating Daughter-in-Law Mothers Day Messages with Cherished Love",
    description: "Comprehensive guide about Celebrating Daughter-in-Law Mothers Day Messages with Cherished Love",
    slug: "daughter-in-law-mothers-day-messages",
    category: "Happy Mother"
  },
  {
    id: 1732590949526,
    title: "Cherishing Best Happy Mothers Day Messages: A Celebration of Love",
    description: "Comprehensive guide about Cherishing Best Happy Mothers Day Messages: A Celebration of Love",
    slug: "best-happy-mothers-day-messages",
    category: "Happy Mother"
  },
  {
    id: 1732590932960,
    title: "Auntie Mothers Day Message to Aunt: Cherishing You Through Joyful Years",
    description: "Comprehensive guide about Auntie Mothers Day Message to Aunt: Cherishing You Through Joyful Years",
    slug: "auntie-mothers-day-message-to-aunt",
    category: "Happy Mother"
  },
  {
    id: 1732590911506,
    title: "A Mother's Day Message to Daughter:  Celebrating Cherished Bonds",
    description: "Comprehensive guide about A Mother's Day Message to Daughter:  Celebrating Cherished Bonds",
    slug: "mothers-day-message-to-daughter",
    category: "Happy Mother"
  },
  {
    id: 1732590884900,
    title: "Celebrating Mothers Day Message to All Mothers Quotes With Endless Love",
    description: "Comprehensive guide about Celebrating Mothers Day Message to All Mothers Quotes With Endless Love",
    slug: "mothers-day-message-to-all-mothers-quotes",
    category: "Happy Mother"
  },
  {
    id: 1732590868657,
    title: "A Mother's Day Message from Son: Celebrating Unwavering Love",
    description: "Comprehensive guide about A Mother's Day Message from Son: Celebrating Unwavering Love",
    slug: "mothers-day-message-from-son",
    category: "Happy Mother"
  },
  {
    id: 1732590844288,
    title: "Celebrating Our Love: Mother's Day Message from Husband",
    description: "Comprehensive guide about Celebrating Our Love: Mother's Day Message from Husband",
    slug: "mothers-day-message-from-husband",
    category: "Happy Mother"
  },
  {
    id: 1732590824165,
    title: "Cherishing My First Mothers Day Message: A Joyful Celebration",
    description: "Comprehensive guide about Cherishing My First Mothers Day Message: A Joyful Celebration",
    slug: "first-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732590804180,
    title: "Celebrating Christian Mothers Day Messages with Overflowing Love",
    description: "Comprehensive guide about Celebrating Christian Mothers Day Messages with Overflowing Love",
    slug: "christian-mothers-day-messages",
    category: "Happy Mother"
  },
  {
    id: 1732590782279,
    title: "Celebrating Biblical Mothers Day Messages with Cherished Love",
    description: "Comprehensive guide about Celebrating Biblical Mothers Day Messages with Cherished Love",
    slug: "biblical-mothers-day-messages",
    category: "Happy Mother"
  },
  {
    id: 1732590763733,
    title: "Celebrating the Best Mothers Day Message With Endless Love",
    description: "Comprehensive guide about Celebrating the Best Mothers Day Message With Endless Love",
    slug: "best-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732590745279,
    title: "Witty Mothers Day Messages: Celebrating a Love That Blooms",
    description: "Comprehensive guide about Witty Mothers Day Messages: Celebrating a Love That Blooms",
    slug: "witty-mothers-day-messages",
    category: "Happy Mother"
  },
  {
    id: 1732590727217,
    title: "Cherishing Wife Mothers Day Message: A Celebration of Endless Love",
    description: "Comprehensive guide about Cherishing Wife Mothers Day Message: A Celebration of Endless Love",
    slug: "wife-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732590706441,
    title: "Celebrating Mothers Day Messages for Friends and Family With Love",
    description: "Comprehensive guide about Celebrating Mothers Day Messages for Friends and Family With Love",
    slug: "mothers-day-messages-for-friends-and-family",
    category: "Happy Mother"
  },
  {
    id: 1732590686441,
    title: "Celebrating Mothers Day Messages for Friends with Joyful Hearts",
    description: "Comprehensive guide about Celebrating Mothers Day Messages for Friends with Joyful Hearts",
    slug: "mothers-day-messages-for-friends",
    category: "Happy Mother"
  },
  {
    id: 1732590664371,
    title: "Celebrating Grandma: A Mother's Day Message to Grandma Filled with Love",
    description: "Comprehensive guide about Celebrating Grandma: A Mother's Day Message to Grandma Filled with Love",
    slug: "mothers-day-message-to-grandma",
    category: "Happy Mother"
  },
  {
    id: 1732590642162,
    title: "Celebrating Mothers Day Message in Spanish: A Heartfelt Ode",
    description: "Comprehensive guide about Celebrating Mothers Day Message in Spanish: A Heartfelt Ode",
    slug: "mothers-day-message-in-spanish",
    category: "Happy Mother"
  },
  {
    id: 1732590625864,
    title: "Celebrating a Mother's Day Message for Mother in Law With Deepest Gratitude",
    description: "Comprehensive guide about Celebrating a Mother's Day Message for Mother in Law With Deepest Gratitude",
    slug: "mothers-day-message-for-mother-in-law",
    category: "Happy Mother"
  },
  {
    id: 1732590606611,
    title: "Celebrating a Mother in Law Mothers Day Message with Endless Love",
    description: "Comprehensive guide about Celebrating a Mother in Law Mothers Day Message with Endless Love",
    slug: "mother-in-law-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732590585314,
    title: "Celebrating Inclusive Mothers Day Messages with Unconditional Love",
    description: "Comprehensive guide about Celebrating Inclusive Mothers Day Messages with Unconditional Love",
    slug: "inclusive-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732590567334,
    title: "Happy Mothers Day Messages to Mom:  Celebrating Unwavering Love",
    description: "Comprehensive guide about Happy Mothers Day Messages to Mom:  Celebrating Unwavering Love",
    slug: "happy-mothers-day-messages-to-mom",
    category: "Happy Mother"
  },
  {
    id: 1732590550816,
    title: "Celebrating a Happy Mother's Day Message to Friend, Cherishing Our Bond",
    description: "Comprehensive guide about Celebrating a Happy Mother's Day Message to Friend, Cherishing Our Bond",
    slug: "happy-mothers-day-message-to-friend",
    category: "Happy Mother"
  },
  {
    id: 1732590528294,
    title: "Celebrating Happy Mothers Day Message to All Mothers With Endless Love",
    description: "Comprehensive guide about Celebrating Happy Mothers Day Message to All Mothers With Endless Love",
    slug: "happy-mothers-day-message-to-all-mothers",
    category: "Happy Mother"
  },
  {
    id: 1732590512161,
    title: "Funny Mothers Day Messages for Friends:  Celebrating Joyful Bonds",
    description: "Comprehensive guide about Funny Mothers Day Messages for Friends:  Celebrating Joyful Bonds",
    slug: "funny-mothers-day-messages-for-friends",
    category: "Happy Mother"
  },
  {
    id: 1732590486194,
    title: "AI Mothers Day Message: Celebrating Unconditional Love",
    description: "Comprehensive guide about AI Mothers Day Message: Celebrating Unconditional Love",
    slug: "ai-mothers-day-message",
    category: "Happy Mother"
  },
  {
    id: 1732590468293,
    title: "Celebrating Mothers Day message to sister: A bond of cherished love",
    description: "Comprehensive guide about Celebrating Mothers Day message to sister: A bond of cherished love",
    slug: "mothers-day-message-to-sister",
    category: "Happy Mother"
  },
  {
    id: 1732590446779,
    title: "Celebrating Happy Mothers Day Sister Message with Unwavering Love",
    description: "Comprehensive guide about Celebrating Happy Mothers Day Sister Message with Unwavering Love",
    slug: "happy-mothers-day-sister-message",
    category: "Happy Mother"
  },
  {
    id: 1732590428294,
    title: "Celebrating Mothers Day Message to Friend: A Heartfelt Toast",
    description: "Comprehensive guide about Celebrating Mothers Day Message to Friend: A Heartfelt Toast",
    slug: "mothers-day-message-to-friend",
    category: "Happy Mother"
  },
  {
    id: 1732590409508,
    title: "Celebrating Our Love: Mother's Day Message for Wife",
    description: "Comprehensive guide about Celebrating Our Love: Mother's Day Message for Wife",
    slug: "mothers-day-message-for-wife",
    category: "Happy Mother"
  },
  {
    id: 1732590388088,
    title: "Celebrating Grandma: A Mother's Day Message for Grandma Filled With Love",
    description: "Comprehensive guide about Celebrating Grandma: A Mother's Day Message for Grandma Filled With Love",
    slug: "mothers-day-message-for-grandma",
    category: "Happy Mother"
  },
  {
    id: 1732590367643,
    title: "Celebrating a Mother's Day Message to Mother in Law:  A Heartfelt Tribute",
    description: "Comprehensive guide about Celebrating a Mother's Day Message to Mother in Law:  A Heartfelt Tribute",
    slug: "mothers-day-message-to-mother-in-law",
    category: "Happy Mother"
  },
  {
    id: 1732590348993,
    title: "Celebrating Our Love: Mother's Day Message to Wife",
    description: "Comprehensive guide about Celebrating Our Love: Mother's Day Message to Wife",
    slug: "mothers-day-message-to-wife",
    category: "Happy Mother"
  },
  {
    id: 1732590330063,
    title: "Celebrating a Happy Mothers Day Message to Mom: A Heartfelt Tribute",
    description: "Comprehensive guide about Celebrating a Happy Mothers Day Message to Mom: A Heartfelt Tribute",
    slug: "happy-mothers-day-message-to-mom",
    category: "Happy Mother"
  },
  {
    id: 1732590312835,
    title: "Celebrating Mom Through Hilarious Funny Mothers Day Messages",
    description: "Comprehensive guide about Celebrating Mom Through Hilarious Funny Mothers Day Messages",
    slug: "funny-mothers-day-messages",
    category: "Happy Mother"
  },
  {
    id: 1732590293372,
    title: "Celebrating Mothers Day Message to All Mothers with Endless Love",
    description: "Comprehensive guide about Celebrating Mothers Day Message to All Mothers with Endless Love",
    slug: "mothers-day-message-to-all-mothers",
    category: "Happy Mother"
  },
  {
    id: 1732590275735,
    title: "Celebrating Life's Gifts: A Message to All Women on Mother's Day",
    description: "Comprehensive guide about Celebrating Life's Gifts: A Message to All Women on Mother's Day",
    slug: "message-to-all-women-on-mothers-day",
    category: "Happy Mother"
  },
  {
    id: 1732590242624,
    title: "Celebrating Friendship Happy Mothers Day Messages to Friends",
    description: "Comprehensive guide about Celebrating Friendship Happy Mothers Day Messages to Friends",
    slug: "friendship-happy-mothers-day-messages-to-friends",
    category: "Happy Mother"
  },
  {
    id: 1732590222630,
    title: "Celebrating Happy Mothers Day Messages with Cherished Love",
    description: "Comprehensive guide about Celebrating Happy Mothers Day Messages with Cherished Love",
    slug: "happy-mothers-day-messages",
    category: "Happy Mother"
  },
  {
    id: 1732590205605,
    title: "Celebrating Mothers Day Card Messages: A Heart's Overflowing Love",
    description: "Comprehensive guide about Celebrating Mothers Day Card Messages: A Heart's Overflowing Love",
    slug: "mothers-day-card-messages",
    category: "Happy Mother"
  },
  {
    id: 1732590183610,
    title: "Celebrating Mother's Day Messages with Endless Love",
    description: "Comprehensive guide about Celebrating Mother's Day Messages with Endless Love",
    slug: "mothers-day-messages",
    category: "Happy Mother"
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
    Condolence: `
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