import darshan from "../assets/users/darshan.jpg";
import delbin from "../assets/users/delbin.jpg";
import jaggu from "../assets/users/jaggu.jpg";
export const userData = [
  {
    username: "jaggu",
    chats: [
      {
        toUser: "delbin",
        profileImage: delbin,
        msgToUser: [
          {
            sendTime: "2:00pm",
            sendMsg: "ahda nokkam",
          },
          {
            sendTime: "3:30pm",
            sendMsg: "eda pattulanna thonnunne",
          },
        ],
        msgFromUser: [
          {
            sendTime: "2:00pm",
            sendMsg: "DSA",
          },
          {
            sendTime: "3:31pm",
            sendMsg: "ohhh",
          },
        ],
      },
      {
        toUser: "darshan",
        profileImage: darshan,
        msgToUser: [
          {
            sendTime: "2:00pm",
            sendMsg: "hello monu",
          },
        ],
      },
      {
        toUser: "amal",
        profileImage: jaggu,
        msgToUser: [
          {
            sendTime: "2:00pm",
            sendMsg: "pokam",
          },
        ],
      },
    ],
  },
];

const newData = [
  {
    id: 1,
    sender: {
      id: 1,
      name: "Alice",
      avatar: "https://example.com/avatar1.jpg",
    },
    recipient: {
      id: 2,
      name: "Bob",
      avatar: "https://example.com/avatar2.jpg",
    },
    messages: [
      {
        id: 1,
        text: "Hey Bob, how are you?",
        timestamp: "2024-03-22T09:00:00Z",
      },
      {
        id: 2,
        text: "Hi Alice, I'm doing well. How about you?",
        timestamp: "2024-03-22T09:05:00Z",
      },
      {
        id: 3,
        text: "I'm good too, thanks for asking!",
        timestamp: "2024-03-22T09:10:00Z",
      },
    ],
  },
  {
    id: 2,
    sender: {
      id: 3,
      name: "Charlie",
      avatar: "https://example.com/avatar3.jpg",
    },
    recipient: {
      id: 1,
      name: "Alice",
      avatar: "https://example.com/avatar1.jpg",
    },
    messages: [
      {
        id: 1,
        text: "Hey Alice, did you see the new movie?",
        timestamp: "2024-03-22T10:00:00Z",
      },
      {
        id: 2,
        text: "Yes, I watched it yesterday. It was amazing!",
        timestamp: "2024-03-22T10:05:00Z",
      },
      {
        id: 3,
        text: "I agree, the ending was unexpected!",
        timestamp: "2024-03-22T10:10:00Z",
      },
    ],
  },
  {
    id: 3,
    sender: {
      id: 2,
      name: "Bob",
      avatar: "https://example.com/avatar2.jpg",
    },
    recipient: {
      id: 3,
      name: "Charlie",
      avatar: "https://example.com/avatar3.jpg",
    },
    messages: [
      {
        id: 1,
        text: "Hi Charlie, how's your day going?",
        timestamp: "2024-03-22T11:00:00Z",
      },
      {
        id: 2,
        text: "Hey Bob, it's been busy but good. How about you?",
        timestamp: "2024-03-22T11:05:00Z",
      },
      {
        id: 3,
        text: "Just chilling and chatting with friends.",
        timestamp: "2024-03-22T11:10:00Z",
      },
    ],
  },
  {
    id: 4,
    sender: {
      id: 4,
      name: "David",
      avatar: "https://example.com/avatar4.jpg",
    },
    recipient: {
      id: 1,
      name: "Alice",
      avatar: "https://example.com/avatar1.jpg",
    },
    messages: [
      {
        id: 1,
        text: "Hey Alice, did you finish the project?",
        timestamp: "2024-03-22T12:00:00Z",
      },
      {
        id: 2,
        text: "Not yet, still working on some final touches.",
        timestamp: "2024-03-22T12:05:00Z",
      },
      {
        id: 3,
        text: "Let me know if you need any help with it.",
        timestamp: "2024-03-22T12:10:00Z",
      },
    ],
  },
  {
    id: 5,
    sender: {
      id: 5,
      name: "Eva",
      avatar: "https://example.com/avatar5.jpg",
    },
    recipient: {
      id: 2,
      name: "Bob",
      avatar: "https://example.com/avatar2.jpg",
    },
    messages: [
      {
        id: 1,
        text: "Hi Bob, how's the weather there?",
        timestamp: "2024-03-22T13:00:00Z",
      },
      {
        id: 2,
        text: "Hey Eva, it's sunny and warm today!",
        timestamp: "2024-03-22T13:05:00Z",
      },
      {
        id: 3,
        text: "That sounds nice. It's raining here.",
        timestamp: "2024-03-22T13:10:00Z",
      },
    ],
  },
  {
    id: 6,
    sender: {
      id: 1,
      name: "Alice",
      avatar: "https://example.com/avatar1.jpg",
    },
    recipient: {
      id: 4,
      name: "David",
      avatar: "https://example.com/avatar4.jpg",
    },
    messages: [
      {
        id: 1,
        text: "Hey David, how's your day going?",
        timestamp: "2024-03-22T14:00:00Z",
      },
      {
        id: 2,
        text: "Hi Alice, it's been busy but productive!",
        timestamp: "2024-03-22T14:05:00Z",
      },
      {
        id: 3,
        text: "That's great to hear. Keep up the good work!",
        timestamp: "2024-03-22T14:10:00Z",
      },
    ],
  },
  {
    id: 7,
    sender: {
      id: 2,
      name: "Bob",
      avatar: "https://example.com/avatar2.jpg",
    },
    recipient: {
      id: 5,
      name: "Eva",
      avatar: "https://example.com/avatar5.jpg",
    },
    messages: [
      {
        id: 1,
        text: "Hi Eva, how's your day going?",
        timestamp: "2024-03-22T15:00:00Z",
      },
      {
        id: 2,
        text: "Hey Bob, it's been quite hectic.",
        timestamp: "2024-03-22T15:05:00Z",
      },
      {
        id: 3,
        text: "Take a break and relax if you can!",
        timestamp: "2024-03-22T15:10:00Z",
      },
    ],
  },
  {
    id: 8,
    sender: {
      id: 6,
      name: "Fiona",
      avatar: "https://example.com/avatar6.jpg",
    },
    recipient: {
      id: 4,
      name: "David",
      avatar: "https://example.com/avatar4.jpg",
    },
    messages: [
      {
        id: 1,
        text: "Hi David, have you seen the latest episode?",
        timestamp: "2024-03-22T16:00:00Z",
      },
      {
        id: 2,
        text: "Hi Fiona, not yet. Is it worth watching?",
        timestamp: "2024-03-22T16:05:00Z",
      },
      {
        id: 3,
        text: "Definitely, it's full of suspense!",
        timestamp: "2024-03-22T16:10:00Z",
      },
    ],
  },
  {
    id: 9,
    sender: {
      id: 4,
      name: "David",
      avatar: "https://example.com/avatar4.jpg",
    },
    recipient: {
      id: 6,
      name: "Fiona",
      avatar: "https://example.com/avatar6.jpg",
    },
    messages: [
      {
        id: 1,
        text: "Hi Fiona, thanks for the recommendation!",
        timestamp: "2024-03-22T17:00:00Z",
      },
      {
        id: 2,
        text: "You're welcome, David. Enjoy watching!",
        timestamp: "2024-03-22T17:05:00Z",
      },
      {
        id: 3,
        text: "I'll let you know how it goes.",
        timestamp: "2024-03-22T17:10:00Z",
      },
    ],
  },
  {
    id: 10,
    sender: {
      id: 5,
      name: "Eva",
      avatar: "https://example.com/avatar5.jpg",
    },
    recipient: {
      id: 6,
      name: "Fiona",
      avatar: "https://example.com/avatar6.jpg",
    },
    messages: [
      {
        id: 1,
        text: "Hi Fiona, have you tried the new restaurant?",
        timestamp: "2024-03-22T18:00:00Z",
      },
      {
        id: 2,
        text: "Not yet, Eva. Is it good?",
        timestamp: "2024-03-22T18:05:00Z",
      },
      {
        id: 3,
        text: "Yes, the food there is delicious!",
        timestamp: "2024-03-22T18:10:00Z",
      },
    ],
  },
];

export const sampleData = {
  receviedChats: [
    {
      userId: 1,
      username: "delbin",
      avatar: `https://randomuser.me/api/portraits/men/1.jpg`,
      messages: [
        {
          userId: 1,
          msgId: "adfadfadf1234112341k",
          message: "hello",
          time: "2:00pm",
        },
        {
          userId: 2,
          msgId: "adfadfadffhs23474111k",
          message: "hi",
          time: "2:01pm",
        },
        {
          userId: 1,
          msgId: "adfadfag1234j4321k",
          message: "How are you today?",
          time: "2:05pm",
        },
        {
          userId: 2,
          msgId: "adfadfgweqw231231k",
          message: "I'm doing great, thanks!",
          time: "2:07pm",
        },
        {
          userId: 1,
          msgId: "adfadf123kdfgdfgdk",
          message: "That's good to hear!",
          time: "2:10pm",
        },
        {
          userId: 1,
          msgId: "adfadfadffhs234789ak",
          message: "Do you have any plans for the weekend?",
          time: "2:15pm",
        },
        {
          userId: 2,
          msgId: "adfadfadfssdf23474111k",
          message: "Not yet, I'm thinking of going hiking.",
          time: "2:20pm",
        },
        {
          userId: 1,
          msgId: "adfadfagdksjdsf4321k",
          message: "That sounds fun! Enjoy your hike.",
          time: "2:25pm",
        },
      ],
    },
    {
      userId: 2,
      username: "johndoe",
      avatar: `https://randomuser.me/api/portraits/men/2.jpg`,
      messages: [
        {
          userId: 1,
          msgId: "adfadfaggf3214321k",
          message: "Hey John!",
          time: "3:00pm",
        },
        {
          userId: 2,
          msgId: "adfadfasdfaew1213131k",
          message: "Hi there!",
          time: "3:01pm",
        },
        {
          userId: 1,
          msgId: "adfadfajahsd231231k",
          message: "How's your day going?",
          time: "3:05pm",
        },
        {
          userId: 2,
          msgId: "adfadfasdfsd231231k",
          message: "Pretty good, thanks!",
          time: "3:07pm",
        },
        {
          userId: 1,
          msgId: "adfadfaggf3212121k",
          message: "Awesome!",
          time: "3:10pm",
        },
        {
          userId: 2,
          msgId: "adfadfaerwreqwreqq1k",
          message: "What about you?",
          time: "3:15pm",
        },
        {
          userId: 1,
          msgId: "adfadfaggfssdfs4321k",
          message: "Just chilling!",
          time: "3:20pm",
        },
        {
          userId: 2,
          msgId: "adfadfajakjasdfsd231231k",
          message: "Nice!",
          time: "3:25pm",
        },
      ],
    },
    {
      userId: 3,
      username: "janedoe",
      avatar: `https://randomuser.me/api/portraits/men/3.jpg`,
      messages: [
        {
          userId: 3,
          msgId: "adfadfaffasf1234112341k",
          message: "Hello everyone!",
          time: "4:00pm",
        },
        {
          userId: 2,
          msgId: "adfadfadffhsdsdfh23474111k",
          message: "Hi Jane!",
          time: "4:01pm",
        },
        {
          userId: 3,
          msgId: "adfadfagfgfg1234j4321k",
          message: "How's everyone doing?",
          time: "4:05pm",
        },
        {
          userId: 2,
          msgId: "adfadfgwegdfwefq231231k",
          message: "We're good, thanks!",
          time: "4:07pm",
        },
        {
          userId: 3,
          msgId: "adfadf123kdfgdfgdk",
          message: "That's great to hear!",
          time: "4:10pm",
        },
        {
          userId: 3,
          msgId: "adfadfadffhs234789ak",
          message: "Any plans for today?",
          time: "4:15pm",
        },
        {
          userId: 2,
          msgId: "adfadfadfssdfgd23474111k",
          message: "Not much, just work.",
          time: "4:20pm",
        },
        {
          userId: 3,
          msgId: "adfadfagdksjdfdsf4321k",
          message: "Same here!",
          time: "4:25pm",
        },
      ],
    },
    {
      userId: 4,
      username: "alice",
      avatar: `https://randomuser.me/api/portraits/men/4.jpg`,
      messages: [
        {
          userId: 4,
          msgId: "adfadfadf1234112341k",
          message: "Hi Alice!",
          time: "5:00pm",
        },
        {
          userId: 2,
          msgId: "adfadfadffhs23474111k",
          message: "Hello!",
          time: "5:01pm",
        },
        {
          userId: 4,
          msgId: "adfadfag1234j4321k",
          message: "How's your day?",
          time: "5:05pm",
        },
        {
          userId: 2,
          msgId: "adfadfgweqw231231k",
          message: "It's going well, thanks!",
          time: "5:07pm",
        },
        {
          userId: 4,
          msgId: "adfadf123kdfgdfgdk",
          message: "That's great to hear!",
          time: "5:10pm",
        },
        {
          userId: 4,
          msgId: "adfadfadffhs234789ak",
          message: "Do you want to grab dinner later?",
          time: "5:15pm",
        },
        {
          userId: 2,
          msgId: "adfadfadfssdf23474111k",
          message: "Sure, where do you want to go?",
          time: "5:20pm",
        },
        {
          userId: 4,
          msgId: "adfadfagdksjdsf4321k",
          message: "How about that new Italian place?",
          time: "5:25pm",
        },
      ],
    },
    {
      userId: 5,
      username: "samuel",
      avatar: `https://randomuser.me/api/portraits/men/5.jpg`,
      messages: [
        {
          userId: 5,
          msgId: "adfadfahhd1234112341k",
          message: "Hey there!",
          time: "6:00pm",
        },
        {
          userId: 2,
          msgId: "adfadfaggfhfh23474111k",
          message: "Hi Samuel!",
          time: "6:01pm",
        },
        {
          userId: 5,
          msgId: "adfadfagdfdfd1234j4321k",
          message: "How's your day going?",
          time: "6:05pm",
        },
        {
          userId: 2,
          msgId: "adfadfgwefwq231231k",
          message: "It's been busy but good!",
          time: "6:07pm",
        },
        {
          userId: 5,
          msgId: "adfadfghfhfh3212121k",
          message: "Glad to hear that!",
          time: "6:10pm",
        },
        {
          userId: 2,
          msgId: "adfadfasdfqweqweqweqweqweqweqwe",
          message: "What about you?",
          time: "6:15pm",
        },
        {
          userId: 5,
          msgId: "adfadfadgfdgssdfs4321k",
          message: "Just relaxing after work.",
          time: "6:20pm",
        },
        {
          userId: 2,
          msgId: "adfadfhfhfgdfgdfgdfgdf",
          message: "Nice!",
          time: "6:25pm",
        },
      ],
    },
    {
      userId: 6,
      username: "emily",
      avatar: `https://randomuser.me/api/portraits/men/6.jpg`,
      messages: [
        {
          userId: 6,
          msgId: "adfadfaaaaaaaaaaaaaaaaaa1234112341k",
          message: "Hello!",
          time: "7:00pm",
        },
        {
          userId: 2,
          msgId: "adfadfaggfhfhfhdgdgfhdfgh23474111k",
          message: "Hi Emily!",
          time: "7:01pm",
        },
        {
          userId: 6,
          msgId: "adfadfagdfdfdddddddddddddddddd1234j4321k",
          message: "How's your day?",
          time: "7:05pm",
        },
        {
          userId: 2,
          msgId: "adfadfgwefwq231231k",
          message: "It's been busy but good!",
          time: "7:07pm",
        },
        {
          userId: 6,
          msgId: "adfadfghfhfhfhgfhfghfghfghfhfhfh3212121k",
          message: "Glad to hear that!",
          time: "7:10pm",
        },
        {
          userId: 2,
          msgId: "adfadfasdfqweqweqweqweqweqweqweqweqwe",
          message: "What about you?",
          time: "7:15pm",
        },
        {
          userId: 6,
          msgId: "adfadfadgfdgssdfs4321k",
          message: "Just relaxing after work.",
          time: "7:20pm",
        },
        {
          userId: 2,
          msgId: "adfadfhfhfgdfgdfgdfgdf",
          message: "Nice!",
          time: "7:25pm",
        },
      ],
    },
    {
      userId: 7,
      username: "alex",
      avatar: `https://randomuser.me/api/portraits/men/7.jpg`,
      messages: [
        {
          userId: 7,
          msgId: "adfadfaaaaaaaaaaaaaaaaaa1234112341k",
          message: "Hey!",
          time: "8:00pm",
        },
        {
          userId: 2,
          msgId: "adfadfaggfhfhfhdgdgfhdfgh23474111k",
          message: "Hi Alex!",
          time: "8:01pm",
        },
        {
          userId: 7,
          msgId: "adfadfagdfdfdddddddddddddddddd1234j4321k",
          message: "How's everything?",
          time: "8:05pm",
        },
        {
          userId: 2,
          msgId: "adfadfgwefwq231231k",
          message: "Things are going well!",
          time: "8:07pm",
        },
        {
          userId: 7,
          msgId: "adfadfghfhfhfhgfhfghfghfghfhfhfh3212121k",
          message: "That's good to hear!",
          time: "8:10pm",
        },
        {
          userId: 2,
          msgId: "adfadfasdfqweqweqweqweqweqweqweqweqwe",
          message: "What about you?",
          time: "8:15pm",
        },
        {
          userId: 7,
          msgId: "adfadfadgfdgssdfs4321k",
          message: "Just finished work.",
          time: "8:20pm",
        },
        {
          userId: 2,
          msgId: "adfadfhfhfgdfgdfgdfgdf",
          message: "Nice!",
          time: "8:25pm",
        },
      ],
    },
    {
      userId: 8,
      username: "sophie",
      avatar: `https://randomuser.me/api/portraits/women/8.jpg`,
      messages: [
        {
          userId: 8,
          msgId: "adfadfjkghfghfh1234112341k",
          message: "Hello everyone!",
          time: "9:00pm",
        },
        {
          userId: 2,
          msgId: "adfadfaggfhfhfhdgdgfhdfgh23474111k",
          message: "Hi Sophie!",
          time: "9:01pm",
        },
        {
          userId: 8,
          msgId: "adfadfagdfdfdddddddddddddddddd1234j4321k",
          message: "How's your day going?",
          time: "9:05pm",
        },
        {
          userId: 2,
          msgId: "adfadfgwefwq231231k",
          message: "It's been great!",
          time: "9:07pm",
        },
        {
          userId: 8,
          msgId: "adfadfghfhfhfhgfhfghfghfghfhfhfh3212121k",
          message: "Awesome!",
          time: "9:10pm",
        },
        {
          userId: 2,
          msgId: "adfadfasdfqweqweqweqweqweqweqweqweqwe",
          message: "What about you?",
          time: "9:15pm",
        },
        {
          userId: 8,
          msgId: "adfadfadgfdgssdfs4321k",
          message: "Just got back from a walk.",
          time: "9:20pm",
        },
        {
          userId: 2,
          msgId: "adfadfhfhfgdfgdfgdfgdf",
          message: "Sounds relaxing!",
          time: "9:25pm",
        },
      ],
    },
    {
      userId: 9,
      username: "adam",
      avatar: `https://randomuser.me/api/portraits/men/9.jpg`,
      messages: [
        {
          userId: 9,
          msgId: "adfadfaaaaaaaaaaaaaaaaaa1234112341k",
          message: "Hey there!",
          time: "10:00pm",
        },
        {
          userId: 2,
          msgId: "adfadfaggfhfhfhdgdgfhdfgh23474111k",
          message: "Hi Adam!",
          time: "10:01pm",
        },
        {
          userId: 9,
          msgId: "adfadfagdfdfdddddddddddddddddd1234j4321k",
          message: "How's everything?",
          time: "10:05pm",
        },
        {
          userId: 2,
          msgId: "adfadfgwefwq231231k",
          message: "Everything's going well!",
          time: "10:07pm",
        },
        {
          userId: 9,
          msgId: "adfadfghfhfhfhgfhfghfghfghfhfhfh3212121k",
          message: "Glad to hear that!",
          time: "10:10pm",
        },
        {
          userId: 2,
          msgId: "adfadfasdfqweqweqweqweqweqweqweqweqwe",
          message: "How about you?",
          time: "10:15pm",
        },
        {
          userId: 9,
          msgId: "adfadfadgfdgssdfs4321k",
          message: "Just relaxing at home.",
          time: "10:20pm",
        },
        {
          userId: 2,
          msgId: "adfadfhfhfgdfgdfgdfgdf",
          message: "Nice!",
          time: "10:25pm",
        },
      ],
    },
    {
      userId: 10,
      username: "olivia",
      avatar: `https://randomuser.me/api/portraits/women/10.jpg`,
      messages: [
        {
          userId: 10,
          msgId: "adfadfaaaaaaaaaaaaaaaaaa1234112341k",
          message: "Hello!",
          time: "11:00pm",
        },
        {
          userId: 2,
          msgId: "adfadfaggfhfhfhdgdgfhdfgh23474111k",
          message: "Hi Olivia!",
          time: "11:01pm",
        },
        {
          userId: 10,
          msgId: "adfadfagdfdfdddddddddddddddddd1234j4321k",
          message: "How's your day going?",
          time: "11:05pm",
        },
        {
          userId: 2,
          msgId: "adfadfgwefwq231231k",
          message: "It's been a busy day!",
          time: "11:07pm",
        },
        {
          userId: 10,
          msgId: "adfadfghfhfhfhgfhfghfghfghfhfhfh3212121k",
          message: "I understand, take care!",
          time: "11:10pm",
        },
        {
          userId: 2,
          msgId: "adfadfasdfqweqweqweqweqweqweqweqwe",
          message: "Thank you!",
          time: "11:15pm",
        },
        {
          userId: 10,
          msgId: "adfadfadgfdgssdfs4321k",
          message: "Have a good night!",
          time: "11:20pm",
        },
        {
          userId: 2,
          msgId: "adfadfhfhfgdfgdfgdfgdf",
          message: "You too!",
          time: "11:25pm",
        },
      ],
    },
    {
      userId: 11,
      username: "max",
      avatar: `https://randomuser.me/api/portraits/men/11.jpg`,
      messages: [
        {
          userId: 11,
          msgId: "adfadfaaaaaaaaaaaaaaaaaa1234112341k",
          message: "Hey!",
          time: "12:00am",
        },
        {
          userId: 2,
          msgId: "adfadfaggfhfhfhdgdgfhdfgh23474111k",
          message: "Hi Max!",
          time: "12:01am",
        },
        {
          userId: 11,
          msgId: "adfadfagdfdfdddddddddddddddddd1234j4321k",
          message: "How's everything?",
          time: "12:05am",
        },
        {
          userId: 2,
          msgId: "adfadfgwefwq231231k",
          message: "Everything's going well!",
          time: "12:07am",
        },
        {
          userId: 11,
          msgId: "adfadfghfhfhfhgfhfghfghfghfhfhfh3212121k",
          message: "That's great!",
          time: "12:10am",
        },
        {
          userId: 2,
          msgId: "adfadfasdfqweqweqweqweqweqweqweqwe",
          message: "What about you?",
          time: "12:15am",
        },
        {
          userId: 11,
          msgId: "adfadfadgfdgssdfs4321k",
          message: "Just relaxing after work.",
          time: "12:20am",
        },
        {
          userId: 2,
          msgId: "adfadfhfhfgdfgdfgdfgdf",
          message: "Sounds nice!",
          time: "12:25am",
        },
      ],
    },
    {
      userId: 12,
      username: "nathan",
      avatar: `https://randomuser.me/api/portraits/men/12.jpg`,
      messages: [
        {
          userId: 12,
          msgId: "adfadfaaaaaaaaaaaaaaaaaa1234112341k",
          message: "Hello!",
          time: "1:00am",
        },
        {
          userId: 2,
          msgId: "adfadfaggfhfhfhdgdgfhdfgh23474111k",
          message: "Hi Nathan!",
          time: "1:01am",
        },
        {
          userId: 12,
          msgId: "adfadfagdfdfdddddddddddddddddd1234j4321k",
          message: "How's your day going",
          time: "1:05am",
        },
        {
          userId: 2,
          msgId: "adfadfgwefwq231231k",
          message: "It's been a productive day!",
          time: "1:07am",
        },
        {
          userId: 12,
          msgId: "adfadfghfhfhfhgfhfghfghfghfhfhfh3212121k",
          message: "That's great to hear!",
          time: "1:10am",
        },
        {
          userId: 2,
          msgId: "adfadfasdfqweqweqweqweqweqweqweqwe",
          message: "How about you?",
          time: "1:15am",
        },
        {
          userId: 12,
          msgId: "adfadfadgfdgssdfs4321k",
          message: "Just relaxing at home.",
          time: "1:20am",
        },
        {
          userId: 2,
          msgId: "adfadfhfhfgdfgdfgdfgdf",
          message: "Sounds peaceful!",
          time: "1:25am",
        },
      ],
    },
  ],
};
// Add more dummy data objects here
