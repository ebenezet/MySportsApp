
CREATE TABLE users (
  id INT PRIMARY KEY generated ALWAYS AS IDENTITY,
  username VARCHAR (255) NOT NULL,
  bio TEXT,
  favouriteathlete TEXT,
  clerk_id INTEGER
)

INSERT INTO users (username, bio, favouriteathlete, clerk_id) VALUES 
('QuickFox', 'I live in Essex. I am a butcher and I like fishing', 'Maradona', 1),
('SleepyRiver', 'I am married and we have two children. I love grappes', 'The King: Magic Johnson',  2),
('HollowAnt', 'I live in Mexico, one of four and I like walking', 'Lindsey Vonn', 3),
('FizzykEagle', 'From Hawai, only daughter and I love mushrooms', 'Ramy Ashour', 4),
('GiantMouse', 'I am from Calcuta, primary school teacher and I love travelling', 'Martina Naratilova', 5),
('RapidFog', 'A Welsh who loves music and who grew up in the eighties', 'Messi', 6),
('BlazingHorse', 'I grew up in Morroco and now live in Japan. I love couscous', 'Usain Bolt', 7),
('FairMountain', 'A big Marvel films fan, I am also daughter, mum and love coding', 'Dara Torres', 8),
('QuietHawk', 'I am from Haiti so I speak both English and French; my favourite colour is blue', 'Simone Biles', 9),
('WiseParrot', 'A reggae fan at heart who moves to Los Angeles in my teens. Burger is everything to me', 'Bourdon Sansus', 10)



CREATE TABLE IF NOT EXISTS sports (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (255) NOT NULL,
  mostfamousperson TEXT,
  startyear INTEGER,
  cover TEXT,
  user_id INT REFERENCES users(id)
)


INSERT INTO sports(name, mostfamousperson, startyear, cover, user_id) VALUES('Football', 'Pele', 1863, 'https://images.unsplash.com/photo-1505666287802-931dc83948e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhc2tldGJhbGx8ZW58MHx8MHx8fDA%3D', 1),
('Basketball', 'Michael Jordan', 1891, 'https://images.unsplash.com/photo-1505666287802-931dc83948e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhc2tldGJhbGx8ZW58MHx8MHx8fDA%3D', 2),
('Tennis', 'Roger Federer', 1873, 'https://images.unsplash.com/photo-1531315396756-905d68d21b56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVubmlzJTIwd2ltYmxlZG9ufGVufDB8fDB8fHww', 4),
('Badminton', 'Lin Dan', 1873, 'https://images.unsplash.com/photo-1720515226352-b0b1dec6813b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJhZG1pbnRvbnxlbnwwfHwwfHx8MA%3D%3D', 6),
('Swimming', 'Michael Phelps', 1800, 'https://images.unsplash.com/photo-1560090995-01632a28895b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpbW1pbmclMjBjb21wZXRpdGlvbnxlbnwwfHwwfHx8MA%3D%3D', 5),
('Snooker', 'Ronnie O Sullivan', 1875, 'https://images.unsplash.com/photo-1707916041421-aa772c3b3d71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHNub29rZXJ8ZW58MHx8MHx8fDA%3D', 7),
('Rugby', 'Jonah Lomu', 1823, 'https://images.unsplash.com/photo-1496224027003-38fc92be458c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJ1Z2J5JTIwd29tZW58ZW58MHx8MHx8fDA%3D', 3)

SELECT * FROM sports
SELECT * FROM sports where id = 5

SELECT * FROM sports WHERE user_id = 1