USE plumm_db;

INSERT INTO users
    (user_id, email, username, first_name, last_name, user_password, created_at)

VALUES
    (1, "dave@email.com", "nameisDave", "Dave", "Davey", "password", "2020-08-22 14:22:44"),
    (2, "nwuerz@potato.com", "TruthLives", "Nick", "Wuerz", "password", "2020-03-22 08:19:28"),
    (3, "trucknuts69@murica.com", "everTrumper", "Buck", "White", "password", "2018-05-12 14:27:09"),
    (4, "sallystruthers@gmail.com", "SuperSayainSix", "Blue", "Sadness", "password", "2014-12-29 01:34:56");

INSERT INTO categories
    (category_id, category_name, user_id)

VALUES
    (1, "News", 1),
    (2, "Sports", 1),
    (3, "Technology", 1),
    (4, "Gaming", 1),
    (5, "Movies", 1),
    (6, "Books", 1),
    (7, "Food", 1),
    (8, "Conspiracies", 1);

INSERT INTO threads
    (thread_id, user_id, category_id, title, body, created_at, upvotes, downvotes)

VALUES
    (1, 4, 1, "The world is ending", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, inventore alias possimus, porro laboriosam molestias ratione, at dolore error aliquam minus illum ducimus. Architecto sint distinctio maxime quisquam tenetur error. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores vel perferendis eius voluptatem omnis! Amet consequatur blanditiis qui nemo maxime temporibus similique eum voluptates esse, necessitatibus ducimus alias eveniet possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum amet repudiandae ab porro fugiat blanditiis. Exercitationem perferendis consectetur repudiandae eligendi nesciunt qui dolore, dolorum inventore similique impedit, earum eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus voluptas quasi nostrum. Commodi saepe in molestiae velit deleniti temporibus sunt dolorem molestias architecto? Modi, ea possimus. Voluptates, rem quisquam?", "2017-01-18 07:37:40", 17, 208
),
    (2, 3, 2, "reddit drumstick story", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem blanditiis odit quod accusantium tenetur in asperiores sequi quibusdam hic deleniti consectetur. consectetur, adipisicing elit. Maiores vel perferendis eius voluptatem omnis! Amet consequatur blanditiis qui nemo maxime temporibus similique eum voluptates esse, necessitatibus ducimus alias eveniet possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum amet repudiandae ab porro fugiat blanditiis. Exercitationem perferendis consectetur repudiandae eligendi nesciunt qui dolore, dolorum inventore similique impedit, earum eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus voluptas quasi nostrum. Commodi saepe in molestiae velit deleniti temporibus suntconsectetur, adipisicing elit. Maiores vel perferendis eius voluptatem omnis! Amet consequatur blanditiis qui nemo maxime temporibus similique eum voluptates esse, necessitatibus ducimus alias eveniet possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum amet repudiandae ab porro fugiat blanditiis. Exercitationem perferendis consectetur repudiandae eligendi nesciunt qui dolore, dolorum inventore similique impedit, earum eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus voluptas quasi nostrum. Commodi saepe in molestiae velit deleniti temporibus sunt", "2018-04-27 20:33:22", 182, 552),
    (3, 2, 7, "I season everything with cayenne pepper", "see title", "2018-02-18 08:39:09", 128, 4),
    (4, 1, 6, "my name is dave", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, facere! Saepe quasi fugiat dolorem animi sed deleniti explicabo distinctio, expedita neque molestias praesentium dignissimos blanditiis voluptatibus facilis id pariatur eligendi.", "2019-09-17 22:01:19", 118, 44);

INSERT INTO comments
    (comment_id, user_id, thread_id, parent_comment_id, body, created_at, upvotes, downvotes)

VALUES
    (1, 3, 1, null, "In natus voluptas quasi nostrum. Commodi saepe in molestiae velit deleniti temporibus suntconsectetur, adipisicing elit. Maiores vel perferendis eius voluptatem omnis!", "2020-07-19 07:16:08", 12, 64),
    (2, 4, 1, 1, "In natus voluptas quasi nostrum. Commodi saepe in molestiae velit deleniti temporibus suntconsectetur, adipisicing elit. Maiores vel perferendis eius voluptatem omnis! Amet consequatur blanditiis qui nemo maxime temporibus similique eum voluptates esse, necessitatibus ducimus alias eveniet possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit.", "2020-03-22 17:05:04", 18, 0),
    (3, 2, 2, null, "haha", "2020-04-21 10:35:11", 44, 11),
    (4, 4, 2, 3, "yoyo", "2020-04-13 05:23:14", 87, 128),
    (5, 2, 3, null, "Inventore illum amet repudiandae ab porro fugiat blanditiis.", "2020-07-03 00:42:18", 261, 99),
    (6, 1, 3, 5, "Quesadillas for breakfast?!??", "2020-08-08 14:35:50", 555, 0),
    (7, 1, 4, null, "he-man and beastman fanfic", "2020-08-30 15:41:54", 832, 999),
    (8, 3, 4, 7, "et consectetur adipisicing elit. In natus voluptas quasi nostrum. Commodi saepe in molestiae velit deleniti temporibus suntconsectetur, adipisicing elit. Maiores vel perferendis eius voluptatem omnis! Amet consequatur blanditiis qui nemo maxime temporibus similique eum voluptates esse, necessitatibus ducimus alias eveniet possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit.", "2020-07-03 00:42:18", 178, 88),
    (9, 3, 1, 1, "I think I'm turning Japanese", "2020-09-07 00:52:17", 26, 88),
    (10, 2, 1, 2, "Watch out for the wet walnuts", "2020-09-01 09:19:55", 282, 991),
    (11, 4, 1, 1, "Randy MacPhee really nailed the role of suspect", "2020-09-08 06:54:19", 119, 838),
    (12, 1, 1, 1, "I'm baby cronut raw denim gastropub health goth truffaut. Art party viral kitsch gluten-free small batch chia woke mumblecore scenester unicorn. 90's fam art party pork belly pop-up chicharrones lomo marfa deep v kitsch. Humblebrag af banjo jianbing waistcoat succulents selvage gluten-free fam, helvetica chillwave gastropub glossier unicorn umami. Trust fund locavore live-edge aesthetic humblebrag hoodie, pok pok raclette flannel intelligentsia irony copper mug quinoa tumblr. Hoodie shaman tattooed palo santo, farm-to-table waistcoat chillwave. Knausgaard post-ironic viral, pop-up tumeric photo booth man bun cronut skateboard.", "2020-09-09 00:35:33", 275, 918),
    (13, 2, 1, 1, "Eduardo wanted to go to Whataburger at 3 AM on a Tuesday during high pollen season.", "2020-09-02 16:23:23", 742, 198),
    (14, 4, 2, 3, "I've heard it both ways", "2020-09-23 14:48:26", 564, 382),
    (15, 3, 2, 3, "eheheh Shabudie", "2020-09-29 00:50:01", 68, 603),
    (16, 1, 2, 3, "Jesse, just come look at what your brother did.", "2020-09-18 11:11:00", 687, 2),
    (17, 2, 2, 4, "Secret secrets of sequential sectarian secretions for septugenarian seahorses in secular sectors separated by sextuplet sentimentalism", "2020-09-25 03:21:39", 78, 288),
    (18, 4, 3, 5, "eh, oh well", "2020-09-16 03:21:45", 827, 88),
    (19, 2, 3, 5, "I don't believe retirement is included in the contract, Because then the contract would expire. If we rush at this time there will be fitting results, you are right. The supervisor is a fool.", "2020-09-20 13:18:58", 15, 71),
    (20, 3, 3, 5, "Clipside of the pinkeye fight.", "2020-09-08 12:29:22", 777, 45);