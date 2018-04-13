
const mongoose = require('./mongoose');
const util = require('util');
const User = require('./user');
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const beautifyUnique = require('mongoose-beautiful-unique-validation');
const router = new Router();
const app = new Koa();


router
      .get("/user/:name", async function(ctx) {
          console.log("Engine: GET " + "/users/:name")
          console.log(ctx.request.query);
          console.log(ctx.params.name);
          let name = ctx.params.name;

          mongoose.connect('mongodb://localhost/game');
          mongoose.plugin(beautifyUnique);

/*        let user;

          findUser()
          .then(ctx.body = user)
          //.then(() => console.log('Copied'))
          //.catch(console.error)
          .then(() => mongoose.disconnect());
          
          async function findUser(){
          user = User.findById(id);
          console.log(user);
          resolve(user);
          };*/
        let user =  await User.find( {Name: name}); //рабочий вариант!!!
          ctx.body = user;

      })
      .get("/users/", async function(ctx) {
          console.log("Engine: GET " + "/users/");

          await mongoose.connect('mongodb://localhost/game');
          await mongoose.plugin(beautifyUnique);

          let users =  await User.find().sort({ Score: 'descending'});
          ctx.body = users;


      })
      .post("/users", async function (ctx) {
          console.log("Engine: POST" + "/users");
          console.log(ctx.request.body);
          console.log(ctx.request.query);
          let foto = ctx.request.body.Foto;
          let name = ctx.request.body.Name;
          let ID = ctx.request.body.ID;
          let score = ctx.request.body.Score;
          ctx.body = "ok";
          console.log(ctx.body);
          console.log(ctx);
          console.log(ctx.response);

          await mongoose.connect('mongodb://localhost/game');
          await mongoose.plugin(beautifyUnique);


          async function createUser() {

         await User.create({Foto: foto, Name: name, ID: ID, Score: score});
         
         };

         createUser()
              .then(() => console.log("Created"))
              .catch(console.error)
              .then(() => mongoose.disconnect());

      })
/*      .patch("/users/:id", async function (ctx) {
          console.log("Engine: PATCH " + "/users/:id");
          console.log(ctx.params.id);
          let foto = ctx.request.body.Foto;
          let name = ctx.request.body.Name;
          let ID = ctx.request.body.ID;
          let score = ctx.request.body.Score;

          await mongoose.connect('mongodb://localhost/test');
          await mongoose.plugin(beautifyUnique);

          async function updateUser() {
            await User.findByIdAndUpdate(id, {  });
          };

          updateUser()
              .then(() => console.log("Updated"))
              .catch(console.error)
              .then(() => mongoose.disconnect());

      })*/
      .delete("/users/:id", async function (ctx) {
          console.log("Engine: DELETE " + "/users/:id");
          console.log(ctx.params.id);
          let id = ctx.params.id;
          console.log(id);
          

          await mongoose.connect('mongodb://localhost/game');
          await mongoose.plugin(beautifyUnique);

/*          async function deleteUser() {
            await User.deleteOne({ ID: id });
          };

          deleteUser()
              .then(() => console.log("Removed"))
              .catch(console.error)
              .then(() => mongoose.disconnect());*/

          user = await User.find({ ID: id });
          console.log(user);
          

          if(user) {
            await User.deleteOne({ ID: id }, function (err) {
              console.log(err);
              ctx.body = "ok";
            });
          } else {
            console.log("Пользователь не найден");
          }



      })







app.on('error', (error, ctx) => {
    if (error.status) {
        ctx.body = error.message;
        ctx.status = error.status;
    } else {
        ctx.body = 'Error 500';
        ctx.status = 500;
        console.error(error.message, error.stack);
    }
});

app.use(serve(__dirname + '/public'));
app.use(bodyParser());
app.use(router.routes());
app.listen(3000);


