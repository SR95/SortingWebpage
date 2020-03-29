CREATE TABLE user_emails (
  ID SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

INSERT INTO user_emails (username, email)
VALUES  ('Jeffrey Bridges', 'jb2099@gmail.com');