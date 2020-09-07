const threadContents = [
	{
		id: 1,
		author: "Posted by Nick Wuerz 6 hours ago",
		threadTitle: "Thread Title",
		body:
			"A shadow government with assistance from Mooninites assassinated JFK after he announced plans to invade the moon during his speech at Rice University. "
	},
	{
		id: 2,
		author: "Not Nick Wuerz",
		threadTitle: "Thread Title",
		body:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, inventore alias possimus, porro laboriosam molestias ratione, at dolore error aliquam minus illum ducimus. Architecto sint distinctio maxime quisquam tenetur error. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores vel perferendis eius voluptatem omnis! Amet consequatur blanditiis qui nemo maxime temporibus similique eum voluptates esse, necessitatibus ducimus alias eveniet possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum amet repudiandae ab porro fugiat blanditiis. Exercitationem perferendis consectetur repudiandae eligendi nesciunt qui dolore, dolorum inventore similique impedit, earum eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus voluptas quasi nostrum. Commodi saepe in molestiae velit deleniti temporibus sunt dolorem molestias architecto? Modi, ea possimus. Voluptates, rem quisquam?"
	},
	{
		id: 3,
		author: "Not Nick Wuerz",
		threadTitle: "Thread Title",
		body:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, facere! Saepe quasi fugiat dolorem animi sed deleniti explicabo distinctio, expedita neque molestias praesentium dignissimos blanditiis voluptatibus facilis id pariatur eligendi."
	},
	{
		id: 4,
		author: "Not Nick Wuerz",
		threadTitle: "Thread Title",
		body: "This is a post about Lennie from Of Mice and Men"
	},
	{
		id: 5,
		author: "Not Nick Wuerz",
		threadTitle: "Thread Title",
		body:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem blanditiis odit quod accusantium tenetur in asperiores sequi quibusdam hic deleniti consectetur. consectetur, adipisicing elit. Maiores vel perferendis eius voluptatem omnis! Amet consequatur blanditiis qui nemo maxime temporibus similique eum voluptates esse, necessitatibus ducimus alias eveniet possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum amet repudiandae ab porro fugiat blanditiis. Exercitationem perferendis consectetur repudiandae eligendi nesciunt qui dolore, dolorum inventore similique impedit, earum eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus voluptas quasi nostrum. Commodi saepe in molestiae velit deleniti temporibus suntconsectetur, adipisicing elit. Maiores vel perferendis eius voluptatem omnis! Amet consequatur blanditiis qui nemo maxime temporibus similique eum voluptates esse, necessitatibus ducimus alias eveniet possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum amet repudiandae ab porro fugiat blanditiis. Exercitationem perferendis consectetur repudiandae eligendi nesciunt qui dolore, dolorum inventore similique impedit, earum eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus voluptas quasi nostrum. Commodi saepe in molestiae velit deleniti temporibus sunt"
	},
	{
		id: 6,
		author: "Not Nick Wuerz",
		threadTitle: "Thread Title",
		body:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam pariatur est, eos sunt in voluptates. "
	},
	{
		id: 7,
		author: "Not Nick Wuerz",
		threadTitle: "Thread Title",
		body:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea veniam ullam laborum distinctio pariatur porro quod ex laboriosam sed voluptates omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat officiis qui adipisci alias aut amet voluptatum harum, quis voluptates totam quo voluptatibus illum molestiae fugiat provident. Optio, harum laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatibus vitae sequi amet ex optio earum laudantium."
	},
	{
		id: 8,
		author: "Not Nick Wuerz",
		threadTitle: "Thread Title",
		body:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo dolorem minus mollitia eveniet eligendi, incidunt rerum sequi in laborum dignissimos doloremque culpa soluta repudiandae voluptatum qui numquam iure illum sed. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo labore ex possimus rem unde magni minima, dolor omnis temporibus voluptatibus quis, molestias excepturi dolore. Dolorem tempore consectetur natus ab consequuntur!"
	},
	{
		id: 9,
		author: "Not Nick Wuerz",
		threadTitle: "Thread Title",
		body:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis hic modi. consectetur, adipisicing elit. Maiores vel perferendis eius voluptatem omnis! Amet consequatur blanditiis qui nemo maxime temporibus similique eum voluptates esse, necessitatibus ducimus alias eveniet possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum amet repudiandae ab porro fugiat blanditiis. Exercitationem perferendis consectetur repudiandae eligendi nesciunt qui dolore, dolorum inventore similique impedit, earum eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus voluptas quasi nostrum. Commodi saepe in molestiae velit deleniti temporibus sunt consectetur, adipisicing elit. Maiores vel perferendis eius voluptatem omnis! Amet consequatur blanditiis qui nemo maxime temporibus similique eum voluptates esse, necessitatibus ducimus alias eveniet possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum amet repudiandae ab porro fugiat blanditiis. Exercitationem perferendis consectetur repudiandae eligendi nesciunt qui dolore, dolorum inventore similique impedit, earum eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus voluptas quasi nostrum. Commodi saepe in molestiae velit deleniti temporibus sunt consectetur, adipisicing elit. Maiores vel perferendis eius voluptatem omnis! Amet consequatur blanditiis qui nemo maxime temporibus similique eum voluptates esse, necessitatibus ducimus alias eveniet possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illum amet repudiandae ab porro fugiat blanditiis. Exercitationem perferendis consectetur repudiandae eligendi nesciunt qui dolore, dolorum inventore similique impedit, earum eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus voluptas quasi nostrum. Commodi saepe in molestiae velit deleniti temporibus sunt"
	},
	{
		id: 10,
		author: "Not Nick Wuerz",
		threadTitle: "Thread Title",
		body:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt doloremque eaque, magni ducimus earum consequatur itaque nulla corrupti quasi excepturi voluptatem voluptate."
	},
	{
		id: 11,
		author: "Not Nick Wuerz",
		threadTitle: "Thread Title",
		body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque."
	}
];

export default threadContents;
