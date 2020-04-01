npm install -g sequelize sequelize-cli pg pg-hstore
sequelize init

sequelize model:generate --name Comment --attributes postId:integer,comment:text,userId:integer
sequelize db:migrate (updates migrations file)

#update seeders file with seed data
sequelize seed:generate --name User

sequelize db:seed:all