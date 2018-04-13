// Refactored basic example w/ multiple modules

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

/*          let user;

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
      .patch("/users/:id", async function (ctx) {
          console.log("Engine: PATCH " + "/users/:id");
          console.log(ctx.params.id);
          let id = ctx.params.id;
          let email = ctx.request.body.email;
          let displayname = ctx.request.body.displayName;

          await mongoose.connect('mongodb://localhost/test');
          await mongoose.plugin(beautifyUnique);

          async function updateUser() {
            await User.findByIdAndUpdate(id, { email: email, displayName: displayname });
          };

          updateUser()
              .then(() => console.log("Updated"))
              .catch(console.error)
              .then(() => mongoose.disconnect());

      })
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
          ctx.body = user;

          if(user) {
            await User.deleteOne({ ID: id }, function (err) {
              console.log(err);
            });
          } else {
            console.log("Пользователь не найден");
          }
          //await User.findOneAndRemove({ ID: id });
          //await User.findByIdAndRemove('5ace892181991992c90f943c');
          //ctx.body = "ok";

/*           let deleteUser = await User.findById(ctx.params.id);
           if (deleteUser) {
             deleteUser = await User.deleteOne(ctx.params.id);
             ctx.body = 'Пользователь удален';
           } else {
             ctx.throw(404, 'Пользователя с таким _id нет', {errors:{_id:'Пользователя с таким _id нет'}});
           }*/


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




/*const mary = new User({
  email: 'mary@mail.com'
});

// no error handling here (bad)
User.remove({}, function(err) {

  mary.save(function(err, result) {
    console.log(result);

    User.findOne({
      email: 'mary@mail.com'
    }, function(err, user) {
      console.log(user);

      // ... do more with mary

      // no unref!
      mongoose.disconnect();
    });

  });

});
*/
