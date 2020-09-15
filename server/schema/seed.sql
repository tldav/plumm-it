use plumm_db;

INSERT INTO users
    (user_id, email, username, first_name, last_name, user_password, created_at)

VALUES
    (1, "dave@email.com", "nameisDave", "Dave", "Davey", "password1", "2020-08-22 14:22:44"),
    (2, "nwuerz@potato.com", "TruthLives", "Nick", "Wuerz", "password2", "2020-03-22 08:19:28"),
    (3, "trucknuts69@murica.com", "everTrumper", "Buck", "White", "password3", "2018-05-12 14:27:09"),
    (4, "sallystruthers@gmail.com", "SuperSayainSix", "Blue", "Sadness", "password4", "2014-12-29 01:34:56")

INSERT INTO threads
    (thread_id, user_id, title, body, created_at, upvotes, downvotes)

VALUES
    (1, 4, "The world is ending", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, inventore alias possimus, porro laboriosam molestias ratione, at dolore error aliquam minus illum ducimus. Architecto sint distinctio maxime quisquam tenetur error. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores vel perferendis eius voluptatem omnis! Amet consequatur blanditiis qui nemo maxime temporibus similique eum voluptates esse, necessitatibus ducimus alias eveniet possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum amet repudiandae ab porro fugiat blanditiis. Exercitationem perferendis consectetur repudiandae eligendi nesciunt qui dolore, dolorum inventore similique impedit, earum eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus voluptas quasi nostrum. Commodi saepe in molestiae velit deleniti temporibus sunt dolorem molestias architecto? Modi, ea possimus. Voluptates, rem quisquam?", "2017-01-18 07:37:40", 17, 208
),
    (2, 3, "reddit drumstick story", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem blanditiis odit quod accusantium tenetur in asperiores sequi quibusdam hic deleniti consectetur. consectetur, adipisicing elit. Maiores vel perferendis eius voluptatem omnis! Amet consequatur blanditiis qui nemo maxime temporibus similique eum voluptates esse, necessitatibus ducimus alias eveniet possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum amet repudiandae ab porro fugiat blanditiis. Exercitationem perferendis consectetur repudiandae eligendi nesciunt qui dolore, dolorum inventore similique impedit, earum eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus voluptas quasi nostrum. Commodi saepe in molestiae velit deleniti temporibus suntconsectetur, adipisicing elit. Maiores vel perferendis eius voluptatem omnis! Amet consequatur blanditiis qui nemo maxime temporibus similique eum voluptates esse, necessitatibus ducimus alias eveniet possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum amet repudiandae ab porro fugiat blanditiis. Exercitationem perferendis consectetur repudiandae eligendi nesciunt qui dolore, dolorum inventore similique impedit, earum eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus voluptas quasi nostrum. Commodi saepe in molestiae velit deleniti temporibus sunt", "2018-04-27 20:33:22", 182, 552),
    (3, 2, "I season everything with cayenne pepper", "see title", "2018-02-18 08:39:09", 128, 4),
    (4, 1, "my name is dave", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, facere! Saepe quasi fugiat dolorem animi sed deleniti explicabo distinctio, expedita neque molestias praesentium dignissimos blanditiis voluptatibus facilis id pariatur eligendi.", "2019-09-17 22:01:19", 118, 44)

INSERT INTO comments
    (comment_id, user_id, thread_id, body, created_at, upvotes, downvotes)

VALUES
    (1, 3, 1, "In natus voluptas quasi nostrum. Commodi saepe in molestiae velit deleniti temporibus suntconsectetur, adipisicing elit. Maiores vel perferendis eius voluptatem omnis!", "2020-07-19 07:16:08", 12, 64),
    (2, 4, 1, "In natus voluptas quasi nostrum. Commodi saepe in molestiae velit deleniti temporibus suntconsectetur, adipisicing elit. Maiores vel perferendis eius voluptatem omnis! Amet consequatur blanditiis qui nemo maxime temporibus similique eum voluptates esse, necessitatibus ducimus alias eveniet possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit.", "2020-03-22 17:05:04", 18, 0),
    (3, 2, 2, "haha", "2020-04-21 10:35:11", 44, 11),
    (4, 4, 2, "yoyo", "2020-04-13 05:23:14", 87, 128),
    (5, 2, 3, "Inventore illum amet repudiandae ab porro fugiat blanditiis.", "2020-07-03 00:42:18", 261, 99),
    (6, 1, 3, "Quesadillas for breakfast?!??", "2020-08-08 14:35:50", 555, 0),
    (7, 1, 4, "he-man and beastman fanfic", "2020-08-30 15:41:54", 832, 999),
    (8, 3, 4, "et consectetur adipisicing elit. In natus voluptas quasi nostrum. Commodi saepe in molestiae velit deleniti temporibus suntconsectetur, adipisicing elit. Maiores vel perferendis eius voluptatem omnis! Amet consequatur blanditiis qui nemo maxime temporibus similique eum voluptates esse, necessitatibus ducimus alias eveniet possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit.", "2020-07-03 00:42:18", 178, 88)