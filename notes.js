/* ═══════════════════════════════════════════
   THE GIVING ROOM NOTES — edition data
   ───────────────────────────────────────────
   Each object below is one "edition" (one meeting).
   Order doesn't matter — the page sorts by date, newest on the front page.

   To add a meeting from Otter AI:
     1. Copy the Otter summary (Overview, Outline, Action Items).
     2. Add a new object to the list using the shape below.
     3. Save & deploy.

   Fields (only id, date and title are required)
     id          unique slug, used in the link (notes/#2026-10-28-team)
     date        "YYYY-MM-DD"
     title       headline
     kicker      small label above the headline (e.g. "Board Meeting")
     deck        one-sentence subheadline
     attendees   ["Name", ...]
     summary     the Otter "Overview" — blank line = new paragraph
     sections    [{ heading, body }] — the Otter "Outline"
     wins        ["...", ...] — things worth celebrating
     decisions   ["...", ...]
     actions     [{ task, owner, due }] — owner/due optional
     northStar   the one thing that matters most right now
     next        { date, agenda } — next gathering
     quote       { text, by } — optional pull quote
     poll        { question, options: ["...", ...] } — pulse check
     faq         [{ q, a }] — "Curious? Open the details"
     crossword   [{ answer, clue }] — 5–8 words from the meeting work best.
                 The grid is built automatically. Multi-word answers are fine
                 (spaces are dropped), but say so in the clue, e.g. "(2 wds)".
                 A word that can't cross the others cleanly is skipped,
                 so add one or two extra.
     otterUrl    link back to the Otter recording (optional)
     sample      true = placeholder content, shows a "Sample" badge
   ═══════════════════════════════════════════ */

window.TGR_NOTES = [
  {
    id: "2026-11-05-community-day",
    date: "2026-11-05",
    kicker: "Community Day",
    title: "21 Families Served of Our Year-End Goal of 50!",
    deck: "We would have been happy with five, but then the families kept coming! Here's what worked and what didn't.",
    attendees: ["Jasie", "Rae", "Miriam", "Brittany", "Myeisha"],
    summary:
      "Our first Community Day is in the books, and 21 families came through our doors with 47 children between them! That's 21 unique families toward our year-end goal of 50, in a single day. We also took in three donation drop-offs, and several pop-up volunteers jumped in to help without being asked.\n\nAt our planning meeting, we said we'd be happy if just five people came, because those five would tell somebody else. We got more than four times that. Thank you to every family who showed up, and to everyone who spread the word.\n\nIn the middle of it all, a few of us took a few minutes to talk through what we were seeing on the floor, while it was still fresh. The short version: the tables are working, but we put too much out at once, people had a hard time finding our section, and sign-in and checkout need a little more structure. None of it is big. All of it will make the next one smoother.\n\nMark your calendar: our next Community Day is Thursday, November 19, from 9 to 1.",
    sections: [
      {
        heading: "Diapers, wipes and formula stay at checkout",
        body: "The things families need most, diapers, wipes and formula, will live at the checkout table instead of out on the shopping tables. That way we can hand them out fairly, one at a time, and make sure everyone who needs them gets some."
      },
      {
        heading: "Fill tables halfway and keep restocking",
        body: "We put out too much to start with, especially girls' clothes. When people see three or four full tables of something, it feels like they should grab as much as they can. Next time we'll start with one table per size, fill it about halfway and restock as things run low. It also makes cleanup and organizing a lot easier.\n\nThe layout will stay boys on one side, girls on the other and miscellaneous in the middle, with shoes kept out of the middle of the clothes. The moms' items and miscellaneous section at the back got picked over, so we'll keep an eye on it."
      },
      {
        heading: "A better sign-in and checkout",
        body: "We need a new sign-in sheet that collects emails and asks whether families are okay being on our social media. A separate sheet will track donations with signatures and emails, so we can send a receipt to anyone who needs one.\n\nWe'll also wait until families have signed in before explaining the one-bag-per-child rule, then hand them their bags. And checkout needs an extra person so nobody's info gets missed on the way out."
      },
      {
        heading: "Signs that point the way",
        body: "Lots of people walked past and asked, \"Is this the right place?\" Our parking lot sign wasn't drawing people toward our section, so we need one more at the very front. If it's around ten dollars, we'll buy it.\n\nMiriam has been designing signs and cutting them in vinyl, and she'll make category signs for the clothing tables too. The handwritten signs are staying for now, though. They feel homey, like we're part of the community."
      },
      {
        heading: "Change of plans: no toy boxes this December",
        body: "We're not doing toy drive boxes this December after all. Instead we're putting our energy into fundraising and getting the coats we've collected to families. If you'd already started asking businesses about toy boxes, you can let them know the plan changed. Coats will go out at Community Days."
      },
      {
        heading: "Other updates: Road to 100 Nos is off and running",
        body: "On Tuesday we kicked off Road to 100 Nos, our fundraising campaign asking local businesses to become Holiday Partners through December 31. Every core team member is asking two businesses a week to give. Myeisha is the first of us to bring in funding: $250, just days after we launched. Thank you, Myeisha!\n\nTwo asks a week each, every week, gets us there."
      }
    ],
    wins: [
      "21 families and 47 children came to our first Community Day. We'd have been happy with five!",
      "Shout-out to Myeisha, the first on our team to land funding for Road to 100 Nos: $250, just days after we launched!",
      "Three donation drop-offs came in during the day.",
      "Several pop-up volunteers jumped in and helped. Thank you!",
      "Team shirts were ready in time. Thank you, Miriam, and the friends who helped make them.",
      "The handwritten signs made the space feel warm and welcoming."
    ],
    decisions: [
      "Diapers, wipes and formula are handed out at the checkout table",
      "Start with one table per size, filled halfway, and restock as we go",
      "Boys on one side, girls on the other, miscellaneous in the middle",
      "New sign-in sheet with emails and social media consent",
      "A separate donation sheet so we can offer receipts",
      "Explain one bag per child after families sign in",
      "Add a sign at the front of our section",
      "Everyone asks at least two businesses a week to donate during Road to 100 Nos",
      "No toy drive boxes this December; we're focusing on fundraising and giving out the coats we've collected"
    ],
    actions: [
      { task: "Make a sign for the front of our section, plus category signs for the clothing tables", owner: "Miriam", due: "Next Community Day" },
      { task: "Set up a new sign-in sheet with emails and social media consent", owner: "Team", due: "Next Community Day" },
      { task: "Start a separate donation sheet with signatures and emails for receipts", owner: "Team", due: "Next Community Day" },
      { task: "Find one more volunteer for the checkout table", owner: "Team" },
      { task: "Ask at least two businesses to donate for Road to 100 Nos", owner: "Everyone", due: "Every week through Dec 31" }
    ],
    northStar: "Make Community Day easy to find, fair for every family and calm to shop.",
    next: { date: "Next Community Day: Thursday, November 19, 9 to 1", agenda: "We'll try out the new sign-in, half-full tables and the new sign at the front of our section. Coats from the drive go out to families here too." },
    quote: {
      text: "I'm happy if five people come because those five people are gonna tell somebody else.",
      by: "Said at our November 1 planning meeting"
    },
    poll: {
      question: "Which change will help families most at the next Community Day?",
      options: ["Half-full tables we restock often", "A clear sign at the front of our section", "A smoother sign-in and checkout"]
    },
    faq: [
      { q: "Why keep diapers and formula at checkout?", a: "They're what families need most and what runs out fastest. Handing them out at checkout keeps it fair for everyone." },
      { q: "Why tell families about the bag limit after they sign in?", a: "It keeps the welcome table simple and friendly. Once a family is signed in, we hand them one bag per child and explain how it works." },
      { q: "Why ask about social media?", a: "We love sharing what Community Day looks like, but only with families who are comfortable with it. The new sign-in sheet asks first." },
      { q: "What is Road to 100 Nos?", a: "Our fundraising campaign through December 31. Each of us asks local businesses to become Holiday Partners, and our goal is to hear 100 nos. Asking that often means plenty of yeses along the way." }
    ],
    crossword: [
      { answer: "DIAPERS", clue: "Kept at checkout with wipes and formula" },
      { answer: "FORMULA", clue: "Another checkout-table essential" },
      { answer: "HALFWAY", clue: "How full to fill each table at the start" },
      { answer: "CONSENT", clue: "The new sign-in sheet asks for social media ___" },
      { answer: "SIGNS", clue: "Miriam is making more of these" },
      { answer: "VINYL", clue: "What Miriam cuts her designs from" },
      { answer: "RECEIPT", clue: "The donation sheet lets us send one" },
      { answer: "HOMEY", clue: "How our handwritten signs feel" },
      { answer: "RESTOCK", clue: "What we'll keep doing as tables run low" },
      { answer: "FAMILIES", clue: "Twenty-one of these came to our first Community Day" }
    ]
  },
  {
    id: "2026-11-01-planning",
    date: "2026-11-01",
    kicker: "Planning Meeting",
    title: "Community Days Start This Thursday",
    deck: "We planned our first Community Day, set dates for the coat drive walk and toy drive, and talked about where we want to be by December 31.",
    attendees: ["Jasie", "Rae", "Miriam", "Brittany", "Myeisha"],
    summary:
      "Our first Community Day is Thursday, November 5, from 9 to 1, and it will run every other Thursday after that. Families pick five items per child at each table, with diapers and wipes on their own table. We'll run three stations: a welcome table, the shopping tables, and checkout.\n\nThe coat drive walk is Saturday, November 14 at Matzke Park. Coats we collect will go out to families at Community Days. The toy drive starts right after, with donation boxes in local businesses from November 15.\n\nThe big takeaway: Community Days are our main focus through the end of the year. However we learn to run them is how the store will run once we have one.",
    sections: [
      {
        heading: "How Community Day will work",
        body: "Families sign in at the welcome table with their name, ZIP code and number of kids. A first name is fine if that's all they want to share. Donations go behind the welcome table, and tax receipts are available if someone asks.\n\nAt the shopping tables, families pick five items per child per table. Volunteers guide, refold and restock so it feels like shopping, not digging through bins. Each family gets one bag per child, so checkout can see at a glance what's fair without counting items.\n\nAt checkout we keep a simple tally of families and invite everyone to scan our QR sign to stay in touch. We're skipping printed pick-five cards and extra flyers to save money, and we'll hold off on a kids' play area until we see how many little ones come."
      },
      {
        heading: "Coat drive walk and toy drive",
        body: "The walk is Saturday, November 14 at Matzke Park. It's a simple walk with a table to collect coats and take pictures, not a giveaway event. Coats will be handed out at Community Days. Our hope is to get coats to at least 15 families.\n\nRight after the walk, the toy drive begins. The plan is to ask local businesses, churches and gyms to host a Giving Room toy box from November 15 to about mid-December, then hold a toy pickup day the week before Christmas. We still need to decide how families will receive toys and which vendors might donate their time that day."
      },
      {
        heading: "Where we want to be by December 31",
        body: "Everyone wrote down their own hopes for the end of the year. The numbers lined up closely: somewhere between 50 and 100 families served through Community Days, about five monthly donors, and more regular volunteers. Rae asked that we finish what we start before adding new ideas, so every win is a real one."
      },
      {
        heading: "The bigger picture: a store and more little closets",
        body: "Jasie's vision is a permanent storefront with children's items first and women's goods next, plus services like counseling and financial classes. We're waiting to hear back about a possible space, likely within the next two weeks.\n\nMyeisha is running our first Little Closet in Humble, putting bundles together based on what each family needs. Jasie would love to open more in places like Spring or Channelview down the road."
      }
    ],
    wins: [
      "Coats are already coming in. Miriam has collected plenty and Jasie has two bins ready.",
      "Our first Little Closet is up and running in Humble. Welcome, Myeisha!",
      "Our Instagram views are up about 5,000 this week, with video leading the way.",
      "Myeisha's church has a box of school supplies to share."
    ],
    decisions: [
      "Community Days run every other Thursday, 9 to 1, starting November 5",
      "Five items per child at each table; diapers and wipes are separate",
      "One bag per child, so checkout doesn't count items",
      "No printed pick-five cards or new flyers for now",
      "Coat drive walk is Saturday, November 14 at Matzke Park; coats go out at Community Days",
      "Toy drive starts November 15, right after the coat drive"
    ],
    actions: [
      { task: "Ask the venue if we can arrive at 8 to set up, and connect with the assistant director", owner: "Jasie", due: "Before Nov 5" },
      { task: "Bring the tablecloth, clipboards, black trash bags and the truck of donations", owner: "Jasie", due: "Nov 5" },
      { task: "Bring the speaker, plus water and snacks for the team", owner: "Myeisha", due: "Nov 5" },
      { task: "Run the welcome table: sign families in, explain pick five, and take in donations", owner: "Miriam", due: "Nov 5" },
      { task: "Bring a small first-aid kit", owner: "Miriam", due: "Nov 5" },
      { task: "Bring brochures and business cards", owner: "Rae", due: "Nov 5" },
      { task: "Bring the grocery bags for families", owner: "Brittany", due: "Nov 5" },
      { task: "Print and mail extra coat drive walk flyers", owner: "Jasie" },
      { task: "Reshare the coat drive walk details in the group chat", owner: "Jasie" },
      { task: "Send the shirt decal so we can make more team shirts", owner: "Jasie" },
      { task: "Ask local businesses to host toy drive boxes", owner: "Everyone", due: "Starting Nov 15" },
      { task: "Ask about Giving Room toy boxes through church and work connections", owner: "Myeisha" },
      { task: "Ask the coffee cart vendor about donating time at the toy pickup day", owner: "Miriam" },
      { task: "Ask local resale shops where their turned-away donations go", owner: "Myeisha" }
    ],
    northStar: "Make our first Community Day a good one, then learn from it. However Thursdays run is how the store will run.",
    next: { date: "Thursday, November 5", agenda: "Our first Community Day. Doors open 9 to 1, with setup around 8 if the venue confirms. Wear your team shirt." },
    quote: {
      text: "I'm happy if five people come because those five people are gonna tell somebody else.",
      by: "Said around the table"
    },
    poll: {
      question: "How should families receive toys at our holiday toy pickup day?",
      options: ["Register ahead of time", "Line up and pick one per child", "Hand them out at a Community Day"]
    },
    faq: [
      { q: "Is the storefront happening?", a: "We don't know yet. We're waiting to hear back about a possible space, likely within the next two weeks, and we don't yet know whether it would be free." },
      { q: "Where do the coats go?", a: "We collect them at the November 14 walk, then hand them out to families at Community Days." },
      { q: "Can students earn volunteer hours with us?", a: "Yes. We're a registered 501(c)(3), and Jasie can provide documentation of their hours." },
      { q: "Do people who donate get a receipt?", a: "Yes, if they ask for one. We'll have receipts at the welcome table." },
      { q: "Can we accept cribs, bassinets or play pens?", a: "Not right now. Secondhand baby gear like this carries liability, so we're holding off until we have a store where we can track what goes out." },
      { q: "What's still undecided?", a: "How we'll hand out toys at the holiday pickup day." }
    ],
    crossword: [
      { answer: "COATS", clue: "We're collecting these at the November 14 walk" },
      { answer: "THURSDAY", clue: "Community Days happen every other ___" },
      { answer: "HUMBLE", clue: "Home of our first Little Closet" },
      { answer: "CHECKOUT", clue: "The last station before families head home" },
      { answer: "WELCOME", clue: "The first table families visit" },
      { answer: "STOREFRONT", clue: "The dream: a ___ of our own" },
      { answer: "TOYS", clue: "Local businesses will host boxes for these" },
      { answer: "FIVE", clue: "Items each child can pick at a table" },
      { answer: "MATZKE", clue: "The park where we're walking on November 14" }
    ]
  }
];
