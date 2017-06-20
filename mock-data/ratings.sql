create table ratings (
	item VARCHAR(255) NOT NULL,
	sender VARCHAR(100) NOT NULL,
	seller VARCHAR(100) NOT NULL,
	saved VARCHAR(25) NOT NULL,
	overall INTEGER NOT NULL,
	communication INTEGER NOT NULL,
	shipping INTEGER NOT NULL,
	condition INTEGER NOT NULL,
	comment TEXT

);
insert into ratings (item, sender, seller, saved, overall, communication, shipping, condition, comment) values ('Helkama Yoker 16" polkupyörä', 'Nirri Mäkelä', 'Heikki Keskari', '14.05.2017 08:25', 3, 2, 3, 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
insert into ratings (item, sender, seller, saved, overall, communication, shipping, condition, comment) values ('Yosemite 24 Mini Jopo', 'Mörri Mäkelä', 'Heikki Keskari', '03.06.2017 14:41', 4, 3, 3, 4, 'Duis leo nisi, vulputate vitae lectus in, commodo mollis tortor.');
insert into ratings (item, sender, seller, saved, overall, communication, shipping, condition, comment) values ('E-Scooter-SegWheel 800W', 'Helena Henkseli', 'Heikki Keskari', '28.05.2017 19:04', 4, 2, 3, 5, 'Fusce at odio eu tellus pretium dignissim ut vel risus.');
